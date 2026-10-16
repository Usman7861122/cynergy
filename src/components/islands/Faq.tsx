import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

export type FaqItem = { q: string; a: string };

export default function Faq({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <ul className="divide-y divide-pine-900/15 border-y border-pine-900/15">
      {items.map((it, n) => {
        const isOpen = open === n;
        return (
          <li key={it.q}>
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`faq-${n}`}
                onClick={() => setOpen(isOpen ? null : n)}
                className="group flex min-h-16 w-full items-center justify-between gap-6 py-4 text-left"
              >
                <span className={`font-serif text-xl transition-colors sm:text-2xl ${isOpen ? 'text-clay-600' : 'text-pine-950 group-hover:text-clay-600'}`}>{it.q}</span>
                <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-md border transition duration-300 ${isOpen ? 'rotate-45 border-clay-600 bg-clay-600 text-white' : 'border-pine-900/30 text-pine-900'}`}>
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14" /></svg>
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`faq-${n}`}
                  initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p className="max-w-3xl pb-6 text-lg text-ink/75">{it.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        );
      })}
    </ul>
  );
}
