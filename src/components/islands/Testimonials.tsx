import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useState } from 'react';

export type Testimonial = { quote: string; story?: string; name: string; place?: string };

const ArrowBtn = ({ dir, onClick, className = '' }: { dir: 'prev' | 'next'; onClick: () => void; className?: string }) => (
  <button
    type="button"
    onClick={onClick}
    aria-label={dir === 'prev' ? 'Previous review' : 'Next review'}
    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-white/40 text-white transition hover:bg-white hover:text-pine-950 active:scale-95 ${className}`}
  >
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={dir === 'prev' ? 'M19 12H5m6-6-6 6 6 6' : 'M5 12h14m-6-6 6 6-6 6'} />
    </svg>
  </button>
);

export default function Testimonials({ items }: { items: Testimonial[] }) {
  const reduce = useReducedMotion();
  const [[i, dir], setState] = useState<[number, number]>([0, 1]);
  const many = items.length > 1;
  const t = items[i];

  const go = (d: number) => setState(([cur]) => [(cur + d + items.length) % items.length, d]);
  const jump = (n: number) => setState(([cur]) => [n, n >= cur ? 1 : -1]);

  return (
    <div
      className="relative mx-auto max-w-6xl"
      role="region"
      aria-roledescription="carousel"
      aria-label="Patient reviews"
      tabIndex={0}
      onKeyDown={(e) => {
        if (!many) return;
        if (e.key === 'ArrowRight') go(1);
        if (e.key === 'ArrowLeft') go(-1);
      }}
    >
      {many && <ArrowBtn dir="prev" onClick={() => go(-1)} className="absolute left-0 top-1/2 hidden -translate-y-1/2 md:flex" />}
      {many && <ArrowBtn dir="next" onClick={() => go(1)} className="absolute right-0 top-1/2 hidden -translate-y-1/2 md:flex" />}

      <div className="mx-auto max-w-3xl text-center md:px-6">
        <svg className="mx-auto h-10 w-10 text-clay-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7.2 6C4.9 7.7 3.5 10 3.5 13v5h6v-6H6.3c0-1.7.9-3.1 2.6-4.1L7.2 6Zm9.5 0c-2.3 1.7-3.7 4-3.7 7v5h6v-6h-3.2c0-1.7.9-3.1 2.6-4.1L16.7 6Z" /></svg>
        <div className="min-h-[17rem] overflow-hidden sm:min-h-[15rem]" aria-live="polite">
          <AnimatePresence mode="wait" initial={false} custom={dir}>
            <motion.figure
              key={i}
              custom={dir}
              initial={{ opacity: 0, x: reduce ? 0 : dir * 48 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: reduce ? 0 : dir * -48 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              <blockquote className="mt-6 font-serif text-3xl leading-snug sm:text-5xl">“{t.quote}”</blockquote>
              {t.story && <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">{t.story}</p>}
              <figcaption className="mt-6 text-sm uppercase tracking-[0.25em] text-clay-300">
                {t.name}{t.place ? ` · ${t.place}` : ''}
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>
      </div>

      {many && (
        <div className="mt-4 flex items-center justify-center gap-4">
          <ArrowBtn dir="prev" onClick={() => go(-1)} className="md:hidden" />
          <div className="flex items-center" role="group" aria-label="Choose review">
            {items.map((_, n) => (
              <button key={n} type="button" onClick={() => jump(n)} aria-label={`Review ${n + 1} of ${items.length}`} aria-current={n === i} className="flex h-11 w-6 items-center justify-center">
                <span className={`h-1 rounded-sm transition-all duration-300 ${n === i ? 'w-6 bg-white' : 'w-3 bg-white/40'}`} />
              </button>
            ))}
          </div>
          <ArrowBtn dir="next" onClick={() => go(1)} className="md:hidden" />
        </div>
      )}
    </div>
  );
}
