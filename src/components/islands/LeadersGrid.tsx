import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useState } from 'react';
import { leaders } from '@/data/providers';

const filters = [
  { id: 'all', label: 'All leaders' },
  { id: 'clinical', label: 'Clinical directors' },
  { id: 'regional', label: 'Regional & program directors' },
] as const;
type Filter = (typeof filters)[number]['id'];

const isClinical = (role: string) => role.startsWith('Clinical Director');

export default function LeadersGrid() {
  const reduce = useReducedMotion();
  const [filter, setFilter] = useState<Filter>('all');

  const list = leaders.filter((p) =>
    filter === 'all' ? true : filter === 'clinical' ? isClinical(p.role) : !isClinical(p.role)
  );

  return (
    <div className="relative mt-16 overflow-hidden rounded-[2rem] bg-sage-100 px-4 pb-14 pt-12 sm:px-8 lg:px-12 lg:pb-20 lg:pt-16">
      {/* soft decoration */}
      <span aria-hidden="true" className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-sage-200" />
      <span aria-hidden="true" className="pointer-events-none absolute -bottom-32 -right-20 h-96 w-96 rounded-full bg-clay-300/25" />
      <span aria-hidden="true" className="pointer-events-none absolute right-10 top-6 hidden select-none font-serif text-[9rem] italic leading-none text-pine-900/[0.06] lg:block">Leaders</span>

      <div className="relative flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="eyebrow">The team</p>
          <h3 className="mt-2 text-3xl text-pine-950 sm:text-4xl">Our clinical leaders</h3>
          <p className="mt-2 max-w-md text-ink/70">Experienced therapists who guide every Cynergy location.</p>
        </div>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter leaders">
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              aria-pressed={filter === f.id}
              onClick={() => setFilter(f.id)}
              className={`min-h-11 rounded-md px-5 text-sm font-medium transition duration-300 ${
                filter === f.id ? 'bg-pine-900 text-white shadow-lg shadow-pine-950/20' : 'border border-pine-900/25 bg-white/60 text-pine-900 hover:bg-white'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>
      <p className="sr-only" aria-live="polite">{list.length} leaders shown</p>

      <motion.ul layout className="relative mt-12 grid grid-cols-2 gap-x-4 gap-y-12 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-5">
        <AnimatePresence mode="popLayout">
          {list.map((p, n) => (
            <motion.li
              key={p.name}
              layout={!reduce}
              initial={{ opacity: 0, y: reduce ? 0 : 36, scale: reduce ? 1 : 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: reduce ? 1 : 0.92 }}
              transition={{ duration: 0.6, delay: reduce ? 0 : (n % 5) * 0.07, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.a
                href={p.href}
                whileHover={reduce ? undefined : { y: -8 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                className="group block"
              >
                <div className="relative">
                  <div className="relative aspect-square overflow-hidden rounded-xl bg-sage-200 shadow-md shadow-pine-950/10">
                    <img
                      src={p.image}
                      alt={`${p.name}, ${p.role}`}
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover object-top transition duration-700 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-pine-950/60 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100 group-focus-visible:opacity-100" />
                    <span className="absolute inset-x-3 bottom-3 translate-y-4 rounded-md bg-white py-2.5 text-center text-sm font-medium text-pine-950 opacity-0 shadow-lg transition duration-500 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 [@media(hover:none)]:translate-y-0 [@media(hover:none)]:opacity-100">
                      View bio →
                    </span>
                  </div>
                </div>

                <div className="mt-5 text-center">
                  <h4 className="font-serif text-lg leading-snug text-pine-950 transition-colors group-hover:text-clay-600 sm:text-xl">{p.name}</h4>
                  <p className="mt-1.5 inline-block rounded-md bg-white px-3 py-1 text-xs font-medium tracking-wide text-pine-800">{p.credentials}</p>
                  <p className="mt-2 min-h-[2.75rem] text-sm leading-snug text-clay-600">{p.role}</p>
                </div>
              </motion.a>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>

      <div className="relative mt-14 text-center">
        <a href="/provider/" className="btn btn-primary">Meet all providers →</a>
      </div>
    </div>
  );
}
