import { motion, useReducedMotion } from 'framer-motion';
import { useState } from 'react';

export type ReviewCard = { name: string; quote: string; summary: string; place?: string; placeLabel?: string; therapist?: string; source?: 'Google' | 'Website' };
export type PlaceStat = { rating: string; count: number; href: string };
export type PlaceChip = { id: string; label: string };

export default function ReviewsFilter({ items, places, stats = {} }: { items: ReviewCard[]; places: PlaceChip[]; stats?: Record<string, PlaceStat> }) {
  const reduce = useReducedMotion();
  const [tab, setTab] = useState('all');
  const [src, setSrc] = useState<'all' | 'Google' | 'Website'>('all');
  const bySource = src === 'all' ? items : items.filter((i) => (i.source ?? 'Website') === src);
  const shown = tab === 'all' ? bySource : bySource.filter((i) => i.place === tab);
  const chips = [{ id: 'all', label: 'All locations' }, ...places];
  const count = (id: string) => (id === 'all' ? bySource.length : bySource.filter((i) => i.place === id).length);
  const sources = [
    { id: 'all' as const, label: 'All sources' },
    { id: 'Google' as const, label: 'Google' },
    { id: 'Website' as const, label: 'Our website' },
  ];
  const stat = tab === 'all' ? undefined : stats[tab];
  const total = Object.values(stats).reduce((n, v) => n + v.count, 0);
  const label = places.find((p) => p.id === tab)?.label;

  return (
    <div>
      <div role="group" aria-label="Filter reviews by source" className="mb-4 flex flex-wrap items-center gap-2">
        <span className="mr-2 text-sm font-semibold uppercase tracking-[0.18em] text-pine-900/70">Source</span>
        {sources.map((c) => (
          <button
            key={c.id}
            type="button"
            aria-pressed={src === c.id}
            onClick={() => setSrc(c.id)}
            className={`inline-flex min-h-10 items-center rounded-md border px-4 text-sm font-semibold transition-colors ${
              src === c.id ? 'border-clay-600 bg-clay-600 text-white' : 'border-pine-900/20 bg-white text-pine-900 hover:border-clay-600'
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>
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

      {total > 0 && (
        <div className="mt-8 flex flex-col gap-4 rounded-xl border border-pine-900/10 bg-cream-100 p-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-lg text-pine-950">
            <span className="font-serif text-4xl text-pine-900">{stat ? stat.rating : '5.0'}</span>
            <span className="ml-2 text-clay-600" aria-hidden="true">★★★★★</span>
            <span className="ml-3 text-ink/75">
              {stat ? `${stat.count.toLocaleString()} Google reviews at ${label}` : `${total.toLocaleString()} Google reviews across all six clinics`}
            </span>
          </p>
          {stat && (
            <a href={stat.href} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              Read all on Google
            </a>
          )}
        </div>
      )}

      <motion.ul
        key={tab + src}
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
                <span className="flex items-center justify-between gap-3">
                  <span className="text-sm font-semibold uppercase tracking-[0.16em] text-pine-900">{r.name}</span>
                  <span className="rounded-md bg-sage-100 px-2 py-1 text-xs font-semibold text-pine-900">{r.source === 'Google' ? 'Google' : 'Our website'}</span>
                </span>
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
