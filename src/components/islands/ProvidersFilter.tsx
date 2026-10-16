import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useState } from 'react';

export type ProviderCard = {
  name: string;
  credentials: string;
  title: string;
  href: string;
  image: string;
  /** Location ids the provider sees patients at */
  places: string[];
  leader: boolean;
};
export type PlaceOption = { id: string; name: string };

export default function ProvidersFilter({ items, places }: { items: ProviderCard[]; places: PlaceOption[] }) {
  const reduce = useReducedMotion();
  const [place, setPlace] = useState<string>('all');
  const shown = place === 'all' ? items : items.filter((p) => p.places.includes(place));
  const count = (id: string) => (id === 'all' ? items.length : items.filter((p) => p.places.includes(id)).length);
  const nameOf = (id: string) => places.find((p) => p.id === id)?.name ?? '';
  const tabs = [{ id: 'all', name: 'All providers' }, ...places];

  return (
    <div>
      <div role="group" aria-label="Filter providers by clinic" className="flex flex-wrap gap-2">
        {tabs.map((t) => (
          <button
            key={t.id}
            type="button"
            aria-pressed={place === t.id}
            onClick={() => setPlace(t.id)}
            className={`inline-flex min-h-11 items-center gap-2 rounded-md border px-5 text-sm font-semibold transition-colors ${
              place === t.id ? 'border-pine-900 bg-pine-900 text-white' : 'border-pine-900/20 bg-white text-pine-900 hover:border-pine-900'
            }`}
          >
            {t.name}
            <span className="tabular-nums opacity-70">({count(t.id)})</span>
          </button>
        ))}
      </div>

      <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" aria-live="polite">
        <AnimatePresence mode="popLayout">
          {shown.map((p, n) => (
            <motion.li
              key={p.href}
              layout={!reduce}
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.35, delay: reduce ? 0 : Math.min(n, 7) * 0.03 }}
              className="h-full"
            >
              <a href={p.href} className="group flex h-full flex-col overflow-hidden rounded-xl border border-pine-900/10 bg-white transition duration-500 hover:-translate-y-1.5 hover:border-transparent hover:shadow-xl hover:shadow-pine-950/15">
                <div className="relative aspect-[4/5] overflow-hidden bg-sage-200">
                  <img src={p.image} alt={`${p.name}, ${p.title}`} loading="lazy" decoding="async" referrerPolicy="no-referrer" className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                  {p.leader && <span className="absolute left-3 top-3 rounded-md bg-pine-900 px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-white">Leadership</span>}
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-xl leading-snug text-pine-950">{p.name}</h3>
                  <p className="mt-1 text-sm font-semibold uppercase tracking-[0.14em] text-clay-600">{p.credentials}</p>
                  <p className="mt-2 text-ink/70">{p.title}</p>
                  {p.places.length > 0 && (
                    <ul className="mt-3 flex flex-wrap gap-1.5">
                      {p.places.map((id) => (
                        <li key={id} className="rounded-md bg-sage-100 px-2 py-1 text-xs text-pine-900 transition-colors group-hover:bg-pine-900 group-hover:text-white">{nameOf(id)}</li>
                      ))}
                    </ul>
                  )}
                  <span className="mt-auto pt-4 text-sm font-semibold uppercase tracking-[0.16em] text-pine-900">Read bio →</span>
                </div>
              </a>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </div>
  );
}
