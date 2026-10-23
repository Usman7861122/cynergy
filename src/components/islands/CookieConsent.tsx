import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

type Choice = { functional: boolean; analytics: boolean; marketing: boolean };
const KEY = 'cynergy-cookie-consent';
const NONE: Choice = { functional: false, analytics: false, marketing: false };
const ALL: Choice = { functional: true, analytics: true, marketing: true };

const groups: { id: keyof Choice | 'necessary'; title: string; text: string }[] = [
  { id: 'necessary', title: 'Strictly necessary', text: 'Keep the site working and remember your cookie choice. These are always on.' },
  { id: 'functional', title: 'Functional', text: 'Remember your settings, such as language or form details, to make the site easier to use.' },
  { id: 'analytics', title: 'Analytics', text: 'Show us how people use the site (for example with Google Analytics), so we can improve it.' },
  { id: 'marketing', title: 'Marketing', text: 'Used by ad and social partners to show you relevant offers and measure our campaigns.' },
];

function read(): Choice | null {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return null;
    const v = JSON.parse(raw);
    return { functional: !!v.functional, analytics: !!v.analytics, marketing: !!v.marketing };
  } catch {
    return null;
  }
}

function save(c: Choice) {
  try {
    localStorage.setItem(KEY, JSON.stringify({ ...c, necessary: true, ts: Date.now() }));
  } catch {}
  try {
    document.cookie = `cynergy_consent=${c.functional ? 'f' : ''}${c.analytics ? 'a' : ''}${c.marketing ? 'm' : ''}${!c.functional && !c.analytics && !c.marketing ? 'n' : ''}; max-age=31536000; path=/; SameSite=Lax`;
  } catch {}
  // Other scripts (analytics, ads) can listen for this event and only start when allowed.
  window.dispatchEvent(new CustomEvent('cookie-consent', { detail: { necessary: true, ...c } }));
}

export default function CookieConsent() {
  const [banner, setBanner] = useState(false);
  const [panel, setPanel] = useState(false);
  const [draft, setDraft] = useState<Choice>(NONE);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const saved = read();
    if (saved) {
      setDraft(saved);
      window.dispatchEvent(new CustomEvent('cookie-consent', { detail: { necessary: true, ...saved } }));
    } else {
      setBanner(true);
    }
    const open = (e: Event) => {
      if ((e.target as HTMLElement | null)?.closest('[data-cookie-settings]')) {
        setDraft(read() ?? NONE);
        setPanel(true);
      }
    };
    document.addEventListener('click', open);
    return () => document.removeEventListener('click', open);
  }, []);

  useEffect(() => {
    if (!panel) return;
    panelRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setPanel(false);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [panel]);

  const choose = (c: Choice) => {
    save(c);
    setDraft(c);
    setBanner(false);
    setPanel(false);
  };

  return (
    <>
      <AnimatePresence>
        {banner && !panel && (
          <motion.div
            role="region"
            aria-label="Cookie notice"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-x-4 bottom-24 z-[90] lg:bottom-4 max-w-xl rounded-xl border border-pine-900/15 bg-white p-6 shadow-2xl shadow-pine-950/25 sm:left-6 sm:right-auto"
          >
            <p className="font-serif text-xl text-pine-950">We use cookies</p>
            <p className="mt-2 text-sm text-ink/80">
              We use cookies to run this site and, with your OK, to understand how it is used. You choose which ones. Read our{' '}
              <a href="/cookie-policy/" className="font-medium text-pine-900 underline underline-offset-4">Cookie Policy</a>.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <button type="button" onClick={() => choose(ALL)} className="btn btn-primary !min-h-11 !px-5 !py-2 text-sm">Accept all</button>
              <button type="button" onClick={() => choose(NONE)} className="btn btn-outline !min-h-11 !px-5 !py-2 text-sm">Reject non-essential</button>
              <button type="button" onClick={() => { setDraft(NONE); setPanel(true); }} className="inline-flex min-h-11 items-center px-3 text-sm font-semibold text-pine-900 underline underline-offset-4 hover:text-clay-600">Customize</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {panel && (
          <motion.div
            className="fixed inset-0 z-[95] flex items-end justify-center bg-pine-950/60 p-4 sm:items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => e.target === e.currentTarget && setPanel(false)}
          >
            <motion.div
              ref={panelRef}
              tabIndex={-1}
              role="dialog"
              aria-modal="true"
              aria-labelledby="cookie-title"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 30, opacity: 0 }}
              className="max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-xl bg-white p-6 shadow-2xl outline-none sm:p-8"
            >
              <h2 id="cookie-title" className="font-serif text-2xl text-pine-950">Cookie settings</h2>
              <p className="mt-2 text-sm text-ink/75">Choose which cookies you allow. You can change this at any time from the footer.</p>
              <ul className="mt-6 divide-y divide-pine-900/10 border-y border-pine-900/10">
                {groups.map((g) => {
                  const locked = g.id === 'necessary';
                  const on = locked ? true : draft[g.id as keyof Choice];
                  return (
                    <li key={g.id} className="flex items-start justify-between gap-6 py-4">
                      <div>
                        <p className="font-semibold text-pine-950">{g.title}</p>
                        <p className="mt-1 text-sm text-ink/70">{g.text}</p>
                      </div>
                      <button
                        type="button"
                        role="switch"
                        aria-checked={on}
                        aria-label={g.title}
                        disabled={locked}
                        onClick={() => !locked && setDraft({ ...draft, [g.id]: !on })}
                        className={`relative mt-1 h-7 w-12 shrink-0 rounded-md transition ${on ? 'bg-pine-900' : 'bg-pine-900/25'} ${locked ? 'cursor-not-allowed opacity-60' : ''}`}
                      >
                        <span className={`absolute top-1 h-5 w-5 rounded-[4px] bg-white transition-all ${on ? 'left-6' : 'left-1'}`} />
                      </button>
                    </li>
                  );
                })}
              </ul>
              <div className="mt-6 flex flex-wrap gap-2">
                <button type="button" onClick={() => choose(draft)} className="btn btn-primary !min-h-11 !px-5 !py-2 text-sm">Save my choices</button>
                <button type="button" onClick={() => choose(ALL)} className="btn btn-outline !min-h-11 !px-5 !py-2 text-sm">Accept all</button>
                <button type="button" onClick={() => choose(NONE)} className="btn btn-outline !min-h-11 !px-5 !py-2 text-sm">Reject non-essential</button>
              </div>
              <button type="button" onClick={() => setPanel(false)} className="mt-4 inline-flex min-h-11 items-center text-sm text-ink/60 underline underline-offset-4 hover:text-pine-950">Close</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
