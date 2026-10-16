import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useCallback, useEffect, useState } from 'react';
import { img } from '@/data/images';

const INTERVAL = 7000;

const slides = [
  {
    image: img.nycHero,
    title: 'New York’s home for\u00A0movement.',
    text: 'Physical and Occupational Therapy, Pilates and performance care across six locations in New York City.',
  },
  {
    image: img.wellnessDen,
    title: 'Therapy that is always one-on-one.',
    text: 'Performance, Pilates, Physical and Occupational Therapy in New York City.',
  },
  {
    image: img.cobbleHill,
    title: 'Move better. Live stronger.',
    text: 'Personalised, cutting-edge rehabilitation and performance care, with expertise and compassion.',
  },
];

const words = ['Physical Therapy', 'Occupational Therapy', 'Pilates', 'Sports Performance', 'Pelvic Floor Health'];

const wordVariants = {
  hidden: { y: '110%' },
  show: { y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function HeroSlider() {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);
  const [w, setW] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback((n: number) => setI((n + slides.length) % slides.length), []);

  useEffect(() => {
    if (reduce || paused) return;
    const t = window.setInterval(() => setW((x) => (x + 1) % words.length), 2600);
    return () => window.clearInterval(t);
  }, [reduce, paused]);

  const slide = slides[i];

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Welcome to Cynergy"
      className="relative h-[100svh] min-h-[640px] overflow-hidden bg-pine-950 text-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {/* Images */}
      {slides.map((s, n) => {
        const active = n === i;
        return (
          <motion.img
            key={s.image}
            src={s.image}
            alt=""
            aria-hidden="true"
            referrerPolicy="no-referrer"
            loading="eager"
            fetchPriority={n === 0 ? 'high' : 'low'}
            className="absolute inset-0 h-full w-full object-cover"
            initial={false}
            animate={active ? { opacity: 1, scale: 1 } : { opacity: 0, scale: reduce ? 1 : 1.14 }}
            transition={
              active
                ? { opacity: { duration: reduce ? 0 : 1.4 }, scale: { duration: reduce ? 0 : 9, ease: 'linear' } }
                : { opacity: { duration: reduce ? 0 : 1.4 }, scale: { duration: 0, delay: 1.4 } }
            }
          />
        );
      })}
      <div className="absolute inset-0 bg-gradient-to-r from-pine-950/85 via-pine-950/45 to-pine-950/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-pine-950/80 via-transparent to-pine-950/40" />

      {/* Text layer */}
      <div className="container-x relative flex h-full flex-col justify-center pb-28 pt-28 lg:pt-36">
        <div className="max-w-3xl">
          <p className="sr-only">Physical Therapy, Occupational Therapy, Pilates and Performance in New York City</p>
          <div className="flex items-center gap-4" aria-hidden="true">
            <motion.span
              initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
              className="h-px w-12 origin-left bg-clay-300"
            />
            <div className="relative h-6 overflow-hidden text-xs font-semibold uppercase tracking-[0.3em] text-clay-300 sm:text-[13px]">
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={words[w]}
                  initial={{ y: reduce ? 0 : 22, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: reduce ? 0 : -22, opacity: 0 }}
                  transition={{ duration: 0.45, ease: 'easeOut' }}
                  className="block"
                >
                  {words[w]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial="hidden" animate="show" exit={{ opacity: 0, y: -14, transition: { duration: 0.35 } }}
              variants={{ hidden: {}, show: { transition: { staggerChildren: reduce ? 0 : 0.07, delayChildren: 0.15 } } }}
            >
              <h1 className="mt-6 text-[2.6rem] font-medium leading-[1.05] sm:text-6xl lg:text-[4.6rem]">
                {slide.title.split(' ').map((word, k) => (
                  <span key={k} className="mr-[0.25em] inline-block overflow-hidden pb-[0.12em] align-bottom">
                    <motion.span variants={reduce ? undefined : wordVariants} className="inline-block">{word}</motion.span>
                  </span>
                ))}
              </h1>
              <motion.p
                variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.5 } } }}
                className="mt-6 max-w-xl text-base text-white/85 sm:text-lg"
              >
                {slide.text}
              </motion.p>
              <motion.div
                variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.7 } } }}
                className="mt-9 flex flex-wrap gap-3"
              >
                <a href="/appointment/" className="btn btn-primary">Book an appointment</a>
                <a href="/services/" className="btn btn-outline-light">Explore our services</a>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute inset-x-0 bottom-0">
        <div className="container-x flex items-center justify-between pb-6 sm:pb-8">
          <div className="flex items-center gap-2" role="group" aria-label="Choose slide">
            {slides.map((_, n) => (
              <button
                key={n} type="button" onClick={() => go(n)}
                aria-label={`Go to slide ${n + 1}`} aria-current={n === i}
                className="group flex h-11 w-12 items-center sm:w-16"
              >
                <span className="relative block h-[3px] w-full overflow-hidden rounded-md bg-white/30">
                  {n === i && !reduce && (
                    <span
                      key={`${i}-fill`}
                      className="progress-fill absolute inset-0 bg-white"
                      style={{ ['--dur' as string]: `${INTERVAL}ms`, animationPlayState: paused ? 'paused' : 'running' }}
                      onAnimationEnd={() => go(i + 1)}
                    />
                  )}
                  {n === i && reduce && <span className="absolute inset-0 bg-white" />}
                </span>
              </button>
            ))}
            <span className="ml-3 hidden text-sm tabular-nums text-white/70 sm:block">
              0{i + 1} / 0{slides.length}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button type="button" onClick={() => go(i - 1)} aria-label="Previous slide" className="flex h-11 w-11 items-center justify-center rounded-md border border-white/40 transition hover:bg-white hover:text-pine-950">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M19 12H5m6-6-6 6 6 6" /></svg>
            </button>
            <button type="button" onClick={() => go(i + 1)} aria-label="Next slide" className="flex h-11 w-11 items-center justify-center rounded-md border border-white/40 transition hover:bg-white hover:text-pine-950">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" /></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
