import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useRef, useState } from 'react';

export type Condition = {
  id: string;
  title: string;
  what: string;
  how?: string;
  facts?: { label: string; items: string[] };
};

export default function ConditionTabs({ items, ariaLabel = 'Conditions' }: { items: Condition[]; ariaLabel?: string }) {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const c = items[active];

  const onKey = (e: React.KeyboardEvent, n: number) => {
    let next = n;
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') next = (n + 1) % items.length;
    else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') next = (n - 1 + items.length) % items.length;
    else return;
    e.preventDefault();
    setActive(next);
    refs.current[next]?.focus();
  };

  return (
    <div className="grid gap-6 lg:grid-cols-12 lg:gap-10">
      <div role="tablist" aria-label={ariaLabel} aria-orientation="vertical" className="hide-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 pb-2 lg:col-span-4 lg:mx-0 lg:flex-col lg:gap-1 lg:overflow-visible lg:px-0 lg:pb-0">
        {items.map((it, n) => (
          <button
            key={it.id}
            ref={(el) => { refs.current[n] = el; }}
            role="tab"
            id={`tab-${it.id}`}
            aria-selected={active === n}
            aria-controls={`panel-${it.id}`}
            tabIndex={active === n ? 0 : -1}
            onClick={() => setActive(n)}
            onKeyDown={(e) => onKey(e, n)}
            className={`group relative flex min-h-12 shrink-0 items-center gap-3 rounded-lg px-4 text-left transition duration-300 lg:w-full ${
              active === n ? 'bg-pine-900 text-white shadow-lg shadow-pine-950/15' : 'bg-white/60 text-pine-900 hover:bg-white'
            }`}
          >
            <span className={`text-xs tabular-nums ${active === n ? 'text-clay-300' : 'text-clay-600'}`}>{String(n + 1).padStart(2, '0')}</span>
            <span className="whitespace-nowrap font-serif text-lg lg:whitespace-normal">{it.title}</span>
            <svg className={`ml-auto hidden h-4 w-4 transition lg:block ${active === n ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-0'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" /></svg>
          </button>
        ))}
      </div>

      <div className="lg:col-span-8">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={c.id}
            role="tabpanel"
            id={`panel-${c.id}`}
            aria-labelledby={`tab-${c.id}`}
            tabIndex={0}
            initial={{ opacity: 0, y: reduce ? 0 : 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="rounded-xl border border-pine-900/10 bg-white p-6 shadow-sm sm:p-10"
          >
            <h3 className="text-3xl text-pine-950 sm:text-4xl">{c.title}</h3>
            <span className="mt-4 block h-px w-12 bg-clay-500" />
            <div className={`mt-6 grid gap-8 ${c.how ? 'md:grid-cols-2' : ''}`}>
              <div>
                <p className="eyebrow">What it is</p>
                <p className="mt-3 text-ink/80">{c.what}</p>
              </div>
              {c.how && (
                <div>
                  <p className="eyebrow">How therapy helps</p>
                  <p className="mt-3 text-ink/80">{c.how}</p>
                </div>
              )}
            </div>
            {c.facts && (
              <div className="mt-8 border-t border-pine-900/10 pt-6">
                <p className="eyebrow">{c.facts.label}</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {c.facts.items.map((f) => (
                    <li key={f} className="rounded-md bg-sage-100 px-3 py-1.5 text-sm text-pine-900">{f}</li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
