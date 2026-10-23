import {
  animate,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useTransform,
  type MotionValue,
  type PanInfo,
} from 'framer-motion';
import { useEffect, useMemo, useRef, useState } from 'react';
import { img } from '@/data/images';

type Slide = { image: string; title: string; description: string; badge: string };

const slides: Slide[] = [
  { image: img.cobbleHill, title: 'Cobble Hill', description: 'Our Brooklyn clinic, built around one on one care.', badge: 'Clinic' },
  { image: img.reformer, title: 'Pilates Reformer', description: 'Therapist-led sessions for strength and control.', badge: 'Pilates' },
  { image: img.wellnessDen, title: 'The Wellness Den', description: 'Movement and wellness on the Upper East Side.', badge: 'Studio' },
  { image: img.portrait, title: 'One on one care', description: 'Private sessions focused on your goals.', badge: 'Therapy' },
  { image: img.pilatesStudio, title: 'Pilates studio', description: 'Bright space for classes and private sessions.', badge: 'Studio' },
  { image: img.backTherapy, title: 'Back care', description: 'Hands-on treatment for stiff, sore backs.', badge: 'Treatment' },
  { image: img.sports, title: 'Sports performance', description: 'Training for athletes of every level.', badge: 'Sports' },
  { image: img.musicians, title: 'Care for musicians', description: 'Support for hands, shoulders and posture.', badge: 'Specialty' },
  { image: img.wide, title: 'Care in New York', description: 'Six locations across the city.', badge: 'NYC' },
];

type Config = {
  distanceDivisor: number;
  velocityDivisor: number;
  sensitivity: number;
  xMultiplier: number;
  yMultiplier: number;
  rotationMultiplier: number;
  scaleReduction: number;
};

const getConfig = (w: number): Config => {
  if (w < 640) return { distanceDivisor: 120, velocityDivisor: 500, sensitivity: 180, xMultiplier: 90, yMultiplier: 20, rotationMultiplier: 8, scaleReduction: 0.06 };
  if (w < 1024) return { distanceDivisor: 160, velocityDivisor: 650, sensitivity: 220, xMultiplier: 140, yMultiplier: 30, rotationMultiplier: 10, scaleReduction: 0.09 };
  return { distanceDivisor: 200, velocityDivisor: 800, sensitivity: 250, xMultiplier: 190, yMultiplier: 40, rotationMultiplier: 12, scaleReduction: 0.12 };
};

const mod = (n: number, m: number) => ((n % m) + m) % m;

export default function Gallery() {
  const reduce = useReducedMotion();
  const progress = useMotionValue(0);
  const startProgress = useRef(0);
  const [width, setWidth] = useState(1280);
  const [active, setActive] = useState(0);
  const total = slides.length;

  useEffect(() => {
    const on = () => setWidth(window.innerWidth);
    on();
    window.addEventListener('resize', on);
    return () => window.removeEventListener('resize', on);
  }, []);

  useMotionValueEvent(progress, 'change', (p) => setActive(mod(Math.round(p), total)));

  const config = useMemo(() => getConfig(width), [width]);

  const goTo = (target: number) =>
    animate(progress, target, reduce ? { duration: 0 } : { type: 'spring', stiffness: 200, damping: 30, mass: 1 });
  const step = (d: number) => goTo(Math.round(progress.get()) + d);

  const onDragEnd = (_: unknown, info: PanInfo) => {
    const shift = Math.round(-info.offset.x / config.distanceDivisor + -info.velocity.x / config.velocityDivisor);
    const clamped = Math.max(-3, Math.min(3, shift));
    goTo(Math.round(startProgress.current) + clamped);
  };

  return (
    <div
      className="select-none"
      role="region"
      aria-roledescription="carousel"
      aria-label="Photo gallery"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'ArrowRight') step(1);
        if (e.key === 'ArrowLeft') step(-1);
      }}
    >
      <div className="relative mx-auto flex h-[22rem] w-full max-w-7xl items-center justify-center overflow-hidden sm:h-[28rem] lg:h-[34rem]">
        {/* Transparent drag surface */}
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0}
          onDragStart={() => { startProgress.current = progress.get(); }}
          onDrag={(_, info) => progress.set(progress.get() - info.delta.x / config.sensitivity)}
          onDragEnd={onDragEnd}
          className="absolute inset-0 z-50 cursor-grab touch-pan-y active:cursor-grabbing"
          aria-hidden="true"
        />
        {slides.map((s, i) => (
          <StackCard key={i} slide={s} index={i} total={total} progress={progress} config={config} />
        ))}
      </div>

      {/* Controls */}
      <div className="mt-6 flex items-center justify-center gap-6">
        <button type="button" onClick={() => step(-1)} aria-label="Previous photo" className="flex h-12 w-12 items-center justify-center rounded-md border border-pine-900/25 text-pine-900 transition hover:bg-pine-900 hover:text-white active:scale-95">
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M19 12H5m6-6-6 6 6 6" /></svg>
        </button>
        <p className="min-w-24 text-center text-sm tabular-nums text-ink/60" aria-live="polite">
          <span className="font-serif text-xl text-pine-950">{String(active + 1).padStart(2, '0')}</span> / {String(total).padStart(2, '0')}
        </p>
        <button type="button" onClick={() => step(1)} aria-label="Next photo" className="flex h-12 w-12 items-center justify-center rounded-md border border-pine-900/25 text-pine-900 transition hover:bg-pine-900 hover:text-white active:scale-95">
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" /></svg>
        </button>
      </div>
    </div>
  );
}

function StackCard({ slide, index, total, progress, config }: { slide: Slide; index: number; total: number; progress: MotionValue<number>; config: Config }) {
  const offset = useTransform(progress, (p) => {
    let diff = (index - p) % total;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  });

  const x = useTransform(offset, (o) => o * config.xMultiplier);
  const rotate = useTransform(offset, (o) => (Math.abs(o) < 0.05 ? 0 : o * config.rotationMultiplier));
  const y = useTransform(offset, (o) => (Math.abs(o) < 0.05 ? 0 : Math.abs(o) * config.yMultiplier));
  const scale = useTransform(offset, (o) => 1 - Math.abs(o) * config.scaleReduction);
  const opacity = useTransform(offset, [-total / 2, -total / 2 + 0.5, 0, total / 2 - 0.5, total / 2], [0, 1, 1, 1, 0]);
  const zIndex = useTransform(offset, (o) => Math.round(100 - Math.abs(o) * 10));
  const shade = useTransform(offset, [-2, -0.5, 0, 0.5, 2], [0.55, 0.25, 0, 0.25, 0.55]);
  const textOpacity = useTransform(offset, [-0.5, 0, 0.5], [0, 1, 0]);

  return (
    <motion.div
      style={{ x, rotate, y, scale, opacity, zIndex }}
      className="pointer-events-none absolute h-64 w-48 overflow-hidden rounded-xl bg-sage-200 shadow-xl shadow-pine-950/25 ring-1 ring-white/70 sm:h-[22rem] sm:w-64 lg:h-[27rem] lg:w-80"
    >
      <img src={slide.image} alt={slide.title} loading="lazy" decoding="async" referrerPolicy="no-referrer" draggable={false} className="absolute inset-0 h-full w-full object-cover" />
      <motion.div style={{ opacity: shade }} className="absolute inset-0 bg-pine-950" />
      <div className="absolute inset-0 bg-gradient-to-t from-pine-950/85 via-pine-950/15 to-transparent" />

      <span className="absolute right-3 top-3 rounded-md bg-cream-50/95 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-pine-900 sm:right-4 sm:top-4">
        {slide.badge}
      </span>

      <div className="absolute inset-x-4 bottom-5 text-white sm:inset-x-6 sm:bottom-7">
        <motion.p style={{ opacity: textOpacity }} className="font-serif text-lg leading-tight sm:text-2xl">{slide.title}</motion.p>
        <motion.p style={{ opacity: textOpacity }} className="mt-1.5 hidden text-sm text-white/80 sm:block">{slide.description}</motion.p>
        <motion.span style={{ opacity: textOpacity }} aria-hidden="true" className="mt-3 block h-px w-10 bg-clay-300" />
      </div>
    </motion.div>
  );
}
