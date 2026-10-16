import { useReducedMotion } from 'framer-motion';
import { useRef, useState } from 'react';
import { img } from '@/data/images';

const items = [
  { label: 'Back & Spine', href: '/what-we-treat/back-pain/', image: img.back, text: 'Relief for stiff, sore or injured backs, so you can sit, lift and move with ease.' },
  { label: 'Neck Pain', href: '/what-we-treat/neck-pain/', image: img.neck, text: 'Gentle, hands-on care for neck stiffness, headaches and desk-related strain.' },
  { label: 'Shoulder Pain', href: '/what-we-treat/shoulder-pain/', image: img.backTherapy, text: 'Get strength and reach back after an injury, surgery or long-term overuse.' },
  { label: 'Upper Extremity', href: '/injuries/upper-extremity-conditions/', image: img.musicians, text: 'Hand and arm therapy for wrist, elbow and finger problems.' },
  { label: 'Hip', href: '/what-we-treat/hip-pain/', image: img.stock2, text: 'Ease hip pain and get back to walking, running and climbing stairs.' },
  { label: 'Knee', href: '/what-we-treat/knee-pain/', image: img.sportsRecovery, text: 'Rebuild strength and stability after an injury, surgery or arthritis.' },
  { label: 'Foot & Ankle', href: '/what-we-treat/foot-ankle-pain/', image: img.sports, text: 'Care for sprains, heel pain and balance, from the ground up.' },
  { label: 'Neurological Impairments', href: '/what-we-treat/neurological-impairments/', image: img.neuro, text: 'Therapy to improve movement, balance and daily function.' },
  { label: 'Pelvic Floor Health', href: '/what-we-treat/pelvic-floor-health/', image: img.pelvic, text: 'Private, one-on-one care for pelvic pain, leaks and core support.' },
  { label: 'TMJ/TMD', href: '/what-we-treat/temporomandibular-disorder/', image: img.portrait, text: 'Relief for jaw pain, clicking and tension headaches.' },
  { label: 'Vestibular Dysfunction', href: '/what-we-treat/vestibular-dysfunction/', image: img.reformer, text: 'Treatment for dizziness, vertigo and balance problems.' },
  { label: 'Chronic Pain', href: '/what-we-treat/chronic-pain/', image: img.wide, text: 'A steady, whole-person plan to manage pain that does not go away.' },
];

export default function TreatList() {
  const reduce = useReducedMotion();
  const [flip, setFlip] = useState<number | null>(null);
  const pointer = useRef<string>('mouse');

  return (
    <ul className="grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 sm:gap-5 lg:grid-cols-4">
      {items.map((it, n) => {
        const flipped = flip === n;
        return (
          <li key={it.label} className="[perspective:1400px]">
            <a
              href={it.href}
              aria-label={`${it.label}: ${it.text}`}
              onPointerDown={(e) => { pointer.current = e.pointerType; }}
              onPointerEnter={(e) => { if (e.pointerType === 'mouse') setFlip(n); }}
              onPointerLeave={(e) => { if (e.pointerType === 'mouse') setFlip((f) => (f === n ? null : f)); }}
              onFocus={() => setFlip(n)}
              onBlur={() => setFlip((f) => (f === n ? null : f))}
              onClick={(e) => {
                // On touch screens the first tap flips the card, the second tap opens the page.
                if (pointer.current !== 'mouse' && !flipped) {
                  e.preventDefault();
                  setFlip(n);
                }
              }}
              className="block"
            >
              <div
                className={`preserve-3d relative aspect-[4/5] ${reduce ? '' : 'transition-transform duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)]'}`}
                style={{ transform: !reduce && flipped ? 'rotateY(180deg)' : 'none' }}
              >
                {/* Front */}
                <div
                  className={`bf-hidden absolute inset-0 overflow-hidden rounded-2xl bg-sage-200 shadow-md shadow-pine-950/10 ${reduce ? `transition-opacity duration-200 ${flipped ? 'opacity-0' : 'opacity-100'}` : ''}`}
                >
                  <img src={it.image} alt="" loading="lazy" decoding="async" referrerPolicy="no-referrer" className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-pine-950/85 via-pine-950/15 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5 text-white">
                    <h3 className="font-serif text-xl leading-snug sm:text-2xl">{it.label}</h3>
                    <span className="mb-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-white/50" aria-hidden="true">
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12a8 8 0 0 1 14-5.3L20 9M20 4v5h-5M20 12a8 8 0 0 1-14 5.3L4 15M4 20v-5h5" /></svg>
                    </span>
                  </div>
                </div>

                {/* Back */}
                <div
                  className={`bf-hidden absolute inset-0 flex flex-col justify-between overflow-hidden rounded-2xl bg-pine-900 p-6 text-white shadow-xl shadow-pine-950/25 ${reduce ? `transition-opacity duration-200 ${flipped ? 'opacity-100' : 'opacity-0'}` : ''}`}
                  style={{ transform: reduce ? 'none' : 'rotateY(180deg)' }}
                >
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-3 -top-3 h-32 w-[85px] bg-pine-700"
                    style={{ WebkitMask: 'url(/images/r-mark.png) center / contain no-repeat', mask: 'url(/images/r-mark.png) center / contain no-repeat' }}
                  />
                  <div className="relative">
                    <p className="text-xs tabular-nums tracking-[0.25em] text-clay-300">{String(n + 1).padStart(2, '0')}</p>
                    <h3 className="mt-3 font-serif text-2xl leading-snug">{it.label}</h3>
                    <span className="mt-4 block h-px w-10 bg-clay-300" />
                    <p className="mt-4 text-[15px] leading-relaxed text-white/85">{it.text}</p>
                  </div>
                  <span className="relative inline-flex min-h-11 items-center gap-2 text-sm font-medium text-clay-300">
                    Learn more
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" /></svg>
                  </span>
                </div>
              </div>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
