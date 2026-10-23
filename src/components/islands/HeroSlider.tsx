import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useCallback, useEffect, useState } from 'react';
import { img } from '@/data/images';
import HeroBadge from './HeroBadge';

const INTERVAL = 7000;

const slides = [
  {
    image: img.nycHero,
    title: 'New York’s home for\u00A0movement.',
    text: 'Physical and Occupational Therapy, Pilates and performance care across six locations in New York City.',
  },
  {
    image: img.wellnessDen,
    title: 'Therapy that is always one on one.',
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

export type HeroVideo = { desktop: string; mobile: string; poster: string };

// With a `video`, the hero shows one message over a looping background video (used on Home 2).
export default function HeroSlider({ video }: { video?: HeroVideo }) {
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

  const slide = video ? slides[1] : slides[i];
  const showSlides = !video;

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Welcome to Cynergy"
      className="relative overflow-hidden bg-pine-950 text-white lg:h-[100svh] lg:min-h-[640px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {/* Picture area. On phones it sits on top and the text comes after it. */}
      <div className="relative h-[72svh] overflow-hidden lg:absolute lg:inset-0 lg:h-auto">
      {/* Background video (Home 2) */}
      {video && (
        <>
          <img src={video.poster} alt="" aria-hidden="true" referrerPolicy="no-referrer" className="absolute inset-0 h-full w-full object-cover" />
          {!reduce && (
            <>
              <video autoPlay muted loop playsInline preload="auto" poster={video.poster} aria-hidden="true" className="absolute inset-0 hidden h-full w-full object-cover sm:block">
                <source src={video.desktop} type="video/mp4" />
              </video>
              <video autoPlay muted loop playsInline preload="auto" poster={video.poster} aria-hidden="true" className="absolute inset-0 h-full w-full object-cover sm:hidden">
                <source src={video.mobile} type="video/mp4" />
              </video>
            </>
          )}
        </>
      )}

      {/* Images */}
      {showSlides && slides.map((s, n) => {
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
      {/* Tint for readability on photos. The video hero has no tint. */}
      {!video && (
        <>
          <div className="absolute inset-0 bg-gradient-to-r from-pine-950/85 via-pine-950/45 to-pine-950/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-pine-950/80 via-transparent to-pine-950/40" />
        </>
      )}

        <HeroBadge className="hidden lg:block" />

        {/* Phones: round logo and two equal buttons, centered */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-8 px-6 pb-20 pt-24 lg:hidden">
          <HeroBadge className="relative aspect-square w-60 shrink-0" />
          <div className="grid w-full max-w-sm grid-cols-2 gap-3">
            <a href="/appointment/" className="btn btn-primary !px-3 text-center">Book an appointment</a>
            <a href="/services/" className="btn btn-outline-light !px-3 text-center">Explore our services</a>
          </div>
        </div>
      </div>

      {/* Text layer */}
      <div className={`container-x relative flex flex-col justify-center py-12 lg:absolute lg:inset-0 lg:h-full lg:py-0 lg:pb-28 lg:pt-36${video ? ' [text-shadow:0_2px_18px_rgba(0,0,0,0.45)]' : ''}`}>
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
                className="mt-9 hidden flex-wrap gap-3 lg:flex"
              >
                <a href="/appointment/" className="btn btn-primary">Book an appointment</a>
                <a href="/services/" className="btn btn-outline-light">Explore our services</a>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Controls */}
      {showSlides && <div className="absolute inset-x-0 top-[calc(72svh-4.5rem)] lg:bottom-0 lg:top-auto">
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
      </div>}
    </section>
  );
}
