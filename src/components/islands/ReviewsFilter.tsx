import { motion, useReducedMotion } from 'framer-motion';
import { useState } from 'react';

export type ReviewCard = { name: string; quote: string; summary: string; place?: string; placeLabel?: string; therapist?: string };
export type PlaceChip = { id: string; label: string };

export default function ReviewsFilter({ items, places }: { items: ReviewCard[]; places: PlaceChip[] }) {
  const reduce = useReducedMotion();
  const [tab, setTab] = useState('all');
  const shown = tab === 'all' ? items : items.filter((i) => i.place === tab);
  const chips = [{ id: 'all', label: 'All reviews' }, ...places];
  const count = (id: string) => (id === 'all' ? items.length : items.filter((i) => i.place === id).length);

  return (
    <div>
      <div role="group" aria-label="Filter reviews by location" className="flex flex-wrap gap-2">
        {chips.map((c) => (
          <button
            key={c.id}
            type="button"
            aria-pressed={tab === c.id}
            onClick={() => setTab(c.id)}
            className={`inline-flex min-h-11 items-center gap-2 rounded-md border px-5 text-sm font-semibold transition-colors ${
              tab === c.id ? 'border-pine-900 bg-pine-900 text-white' : 'border-pine-900/20 bg-white text-pine-900 hover:border-pine-900'
            }`}
          >
            {c.label}
            <span className="tabular-nums opacity-70">({count(c.id)})</span>
          </button>
        ))}
      </div>

      <motion.ul
        key={tab}
        initial={reduce ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="mt-10 columns-1 gap-5 md:columns-2 lg:columns-3"
        aria-live="polite"
      >
        {shown.map((r) => (
          <li key={r.name + r.quote} className="mb-5 break-inside-avoid">
            <figure className="group relative overflow-hidden rounded-xl border border-pine-900/10 bg-white p-7 transition duration-500 hover:-translate-y-1 hover:border-transparent hover:shadow-xl hover:shadow-pine-950/10">
              <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-clay-500 transition-transform duration-500 group-hover:scale-x-100" />
              <svg className="h-7 w-7 text-clay-500" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7.2 6C4.9 7.7 3.5 10 3.5 13v5h6v-6H6.3c0-1.7.9-3.1 2.6-4.1L7.2 6Zm9.5 0c-2.3 1.7-3.7 4-3.7 7v5h6v-6h-3.2c0-1.7.9-3.1 2.6-4.1L16.7 6Z" /></svg>
              <blockquote className="mt-3 font-serif text-xl leading-snug text-pine-950">{r.quote}</blockquote>
              <p className="mt-3 text-ink/75">{r.summary}</p>
              <figcaption className="mt-5 border-t border-pine-900/10 pt-4">
                <span className="block text-sm font-semibold uppercase tracking-[0.16em] text-pine-900">{r.name}</span>
                {(r.placeLabel || r.therapist) && (
                  <span className="mt-1 block text-sm text-clay-600">{[r.placeLabel, r.therapist && `with ${r.therapist}`].filter(Boolean).join(' · ')}</span>
                )}
              </figcaption>
            </figure>
          </li>
        ))}
      </motion.ul>
    </div>
  );
}
