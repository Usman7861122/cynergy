import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { directionsHref, locations, mapSrc, telHref } from '@/data/locations';

export default function LocationsExplorer() {
  // `openId` controls which item is expanded (can be empty when all are closed).
  // `selectedId` always points to a real location, so the map never loses its place.
  const [openId, setOpenId] = useState<string>(locations[0].id);
  const [selectedId, setSelectedId] = useState<string>(locations[0].id);
  const current = locations.find((l) => l.id === selectedId) ?? locations[0];

  return (
    <div className="grid gap-8 lg:grid-cols-12">
      <ul className="lg:col-span-5">
        {locations.map((l) => {
          const open = l.id === openId;
          return (
            <li key={l.id} className="border-b border-pine-900/15 first:border-t">
              <h3>
                <button
                  type="button"
                  aria-expanded={open}
                  aria-controls={`loc-${l.id}`}
                  onClick={() => {
                    if (open) {
                      setOpenId('');
                    } else {
                      setOpenId(l.id);
                      setSelectedId(l.id);
                    }
                  }}
                  className="flex min-h-16 w-full items-center justify-between gap-4 py-3 text-left"
                >
                  <span className={`font-serif text-2xl transition-colors ${open ? 'text-clay-600' : 'text-pine-950'}`}>{l.name}</span>
                  <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-md border transition duration-300 ${open ? 'rotate-45 border-clay-500 bg-clay-500 text-pine-950' : 'border-pine-900/30 text-pine-900'}`}>
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14" /></svg>
                  </span>
                </button>
              </h3>
              <AnimatePresence initial={false}>
                {open && (
                  <motion.div
                    id={`loc-${l.id}`}
                    initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="space-y-4 pb-6">
                      <address className="not-italic text-ink/80">
                        {l.line1}<br />{l.city}
                      </address>
                      <p>
                        <a href={telHref(l)} className="inline-flex min-h-11 items-center font-medium text-pine-900 underline-offset-4 hover:underline">{l.phone}</a>
                      </p>
                      <p className="text-sm text-ink/70">{l.lead}</p>
                      <div className="flex flex-wrap gap-3">
                        <a href={directionsHref(l)} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Get directions</a>
                        <a href={l.href} className="btn btn-outline">Location details</a>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          );
        })}
      </ul>

      <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-sage-200 shadow-xl shadow-pine-950/10 lg:sticky lg:top-28 lg:col-span-7 lg:aspect-auto lg:h-[560px]">
        <iframe
          key={current.id}
          title={`Map of Cynergy ${current.name}`}
          src={mapSrc(current)}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 h-full w-full border-0 [filter:saturate(0.8)]"
        />
        <p className="pointer-events-none absolute left-4 top-4 rounded-md bg-pine-950 px-4 py-2 text-sm font-medium text-white shadow-lg">
          {current.name}
        </p>
      </div>
    </div>
  );
}
