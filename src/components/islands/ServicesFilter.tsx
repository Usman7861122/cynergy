import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useState } from 'react';

export type ServiceCard = {
  label: string;
  href: string;
  image: string;
  alt: string;
  blurb: string;
  group: 'treat' | 'offer';
  /** Shown only when the service is not at all six clinics */
  note?: string;
};

const tabs = [
  { id: 'all', label: 'All services' },
  { id: 'treat', label: 'What we treat' },
  { id: 'offer', label: 'What we offer' },
] as const;

export default function ServicesFilter({ items }: { items: ServiceCard[] }) {
  const reduce = useReducedMotion();
  const [tab, setTab] = useState<(typeof tabs)[number]['id']>('all');
  const shown = tab === 'all' ? items : items.filter((i) => i.group === tab);
  const count = (id: string) => (id === 'all' ? items.length : items.filter((i) => i.group === id).length);

  return (
    <div>
      <div role="group" aria-label="Filter services" className="flex flex-wrap gap-2">
        {tabs.map((t) => (
          <button
            key={t.id}
            type="button"
            aria-pressed={tab === t.id}
            onClick={() => setTab(t.id)}
            className={`inline-flex min-h-11 items-center gap-2 rounded-md border px-5 text-sm font-semibold transition-colors ${
              tab === t.id ? 'border-pine-900 bg-pine-900 text-white' : 'border-pine-900/20 bg-white text-pine-900 hover:border-pine-900'
            }`}
          >
            {t.label}
            <span className="tabular-nums opacity-70">({count(t.id)})</span>
          </button>
        ))}
      </div>

      <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" aria-live="polite">
        <AnimatePresence mode="popLayout">
          {shown.map((s, n) => (
            <motion.li
              key={s.href}
              layout={!reduce}
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.35, delay: reduce ? 0 : Math.min(n, 5) * 0.04 }}
              className="h-full"
            >
              <a href={s.href} className="group flex h-full flex-col overflow-hidden rounded-xl border border-pine-900/10 bg-white transition duration-500 hover:-translate-y-1.5 hover:border-transparent hover:shadow-xl hover:shadow-pine-950/15">
                <div className="relative aspect-[4/3] overflow-hidden bg-sage-200">
                  <img src={s.image} alt={s.alt} loading="lazy" decoding="async" referrerPolicy="no-referrer" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-clay-500 transition-transform duration-500 group-hover:scale-x-100" />
                  <span className={`absolute left-3 top-3 inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-white shadow-md shadow-black/20 ${s.group === 'treat' ? 'bg-pine-900' : 'bg-clay-500 !text-pine-950'}`}>
                    <span aria-hidden="true" className="h-2 w-2 rounded-full bg-white" />
                    {s.group === 'treat' ? 'We treat' : 'We offer'}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="text-2xl text-pine-950">{s.label}</h3>
                  <p className="mt-3 flex-1 text-ink/75">{s.blurb}</p>
                  {s.note && <p className="mt-3 text-sm text-clay-600">{s.note}</p>}
                  <span className="mt-6 inline-flex items-center gap-2 font-medium text-pine-900">
                    Learn more
                    <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                  </span>
                </div>
              </a>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </div>
  );
}
