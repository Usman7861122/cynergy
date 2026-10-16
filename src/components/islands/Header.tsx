import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState, type ReactNode } from 'react';
import { mainNav, newPatients, socials, utilityRight, type Group, type Link, type Mega, type NavItem } from '@/data/nav';
import { leaders } from '@/data/providers';
import { locations } from '@/data/locations';
import { img } from '@/data/images';

/* ---------- small pieces ---------- */
const Chevron = ({ open }: { open?: boolean }) => (
  <svg className={`h-4 w-4 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="m6 9 6 6 6-6" />
  </svg>
);

const Arrow = ({ className = 'h-4 w-4' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14m-6-6 6 6-6 6" />
  </svg>
);

const icons: Record<string, string> = {
  treat: 'M12 21s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.6-7 10-7 10Z',
  offer: 'm12 3 2.2 5.8L20 11l-5.8 2.2L12 19l-2.2-5.8L4 11l5.8-2.2L12 3Z',
  medicine: 'M10 4h4v6h6v4h-6v6h-4v-6H4v-4h6V4Z',
  performance: 'M13 3 5 14h6l-1 7 8-11h-6l1-7Z',
};

const IconChip = ({ name, active }: { name: string; active?: boolean }) => (
  <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border transition ${active ? 'border-clay-500 bg-clay-600 text-white' : 'border-pine-900/15 bg-white text-pine-800'}`}>
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={icons[name] ?? icons.treat} />
    </svg>
  </span>
);

const Label = ({ children }: { children: ReactNode }) => (
  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-pine-800/70">{children}</p>
);

const LinkRow = ({ link }: { link: Link }) => (
  <a
    href={link.href}
    {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    className="group/link flex min-h-11 items-start gap-3 rounded-lg px-2 py-2 text-pine-950 transition hover:bg-cream-100"
  >
    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-sage-100 text-pine-800 transition group-hover/link:bg-clay-600 group-hover/link:text-white">
      <Arrow className="h-3.5 w-3.5" />
    </span>
    <span>
      <span className="block text-[15px] font-medium leading-snug">{link.label}</span>
      {link.desc && <span className="mt-0.5 block text-[13px] leading-snug text-ink/60">{link.desc}</span>}
    </span>
  </a>
);

const FooterBar = ({ text, sub, cta }: { text: string; sub?: string; cta: Link }) => (
  <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-pine-900/10 pt-5">
    <div>
      <p className="text-sm font-semibold text-pine-950">{text}</p>
      {sub && <p className="text-[13px] text-ink/60">{sub}</p>}
    </div>
    <a href={cta.href} className="btn btn-outline !min-h-10 !px-5">{cta.label}</a>
  </div>
);

/* ---------- mega panels ---------- */
function RailPanel({ mega }: { mega: Extract<Mega, { kind: 'rail' }> }) {
  const [active, setActive] = useState(0);
  const group: Group = mega.groups[active];
  const cols = group.links.length > 4 ? 'grid-cols-2' : 'grid-cols-1';
  return (
    <div className={`grid ${mega.promo ? 'grid-cols-[17rem_1fr_15rem]' : 'grid-cols-[17rem_1fr]'}`}>
      <div className="rounded-l-xl bg-cream-100 p-5">
        <Label>{mega.railTitle}</Label>
        <ul className="mt-4 space-y-2">
          {mega.groups.map((g, n) => (
            <li key={g.id}>
              <button
                type="button"
                onMouseEnter={() => setActive(n)}
                onFocus={() => setActive(n)}
                onClick={() => setActive(n)}
                aria-pressed={active === n}
                className={`relative flex w-full items-center gap-3 rounded-lg p-3 text-left transition ${active === n ? 'bg-white shadow-md shadow-pine-950/10' : 'hover:bg-white/60'}`}
              >
                <IconChip name={g.id} active={active === n} />
                <span>
                  <span className="block text-[15px] font-semibold text-pine-950">{g.label}</span>
                  <span className="block text-[12.5px] leading-snug text-ink/60">{g.desc}</span>
                </span>
                {active === n && <span aria-hidden="true" className="absolute -right-1.5 top-1/2 h-3 w-3 -translate-y-1/2 rotate-45 bg-white" />}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="p-6 pl-8">
        <div className="flex items-center justify-between gap-4">
          <Label>{group.label}</Label>
          {group.href && (
            <a href={group.href} className="text-[13px] font-medium text-clay-600 underline-offset-4 hover:underline">View all</a>
          )}
        </div>
        <motion.ul key={group.id} initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.25 }} className={`mt-3 grid gap-x-4 ${cols}`}>
          {group.links.map((l) => (
            <li key={l.label}><LinkRow link={l} /></li>
          ))}
        </motion.ul>
        {mega.footer && <FooterBar {...mega.footer} />}
      </div>

      {mega.promo && (
        <a href={mega.promo.cta.href} className="group relative m-4 ml-0 block overflow-hidden rounded-xl">
          <img src={mega.promo.image} alt="" loading="lazy" referrerPolicy="no-referrer" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-pine-950/90 via-pine-950/20 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-5 text-white">
            <p className="font-serif text-xl leading-snug">{mega.promo.title}</p>
            <p className="mt-1 text-[13px] text-white/80">{mega.promo.text}</p>
            <span className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-clay-300">{mega.promo.cta.label} <Arrow /></span>
          </div>
        </a>
      )}
    </div>
  );
}

function AboutPanel({ mega }: { mega: Extract<Mega, { kind: 'about' }> }) {
  return (
    <div className="grid grid-cols-[19rem_1fr]">
      <div className="rounded-l-xl bg-pine-900 p-6 text-white">
        <Label><span className="text-clay-300">At Cynergy</span></Label>
        <p className="mt-3 font-serif text-2xl leading-snug">{mega.blurbTitle}</p>
        <p className="mt-3 text-sm leading-relaxed text-white/75">{mega.blurb}</p>
        <a href={mega.cta.href} className="btn btn-primary mt-5 !min-h-10 !px-5">{mega.cta.label}</a>
        <ul className="mt-6 flex gap-4 text-[13px] text-white/70">
          {socials.map((s) => (
            <li key={s.label}><a href={s.href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-8 items-center hover:text-white">{s.label}</a></li>
          ))}
        </ul>
      </div>
      <div className="p-6 pl-8">
        <Label>{mega.heading}</Label>
        <ul className="mt-3">
          {mega.links.map((l) => <li key={l.label}><LinkRow link={l} /></li>)}
        </ul>
      </div>
    </div>
  );
}

function ProvidersPanel() {
  const list = leaders.slice(0, 8);
  return (
    <div className="grid grid-cols-[17rem_1fr]">
      <div className="rounded-l-xl bg-cream-100 p-6">
        <Label>Providers</Label>
        <p className="mt-3 font-serif text-2xl leading-snug text-pine-950">The people behind your care</p>
        <p className="mt-3 text-sm leading-relaxed text-ink/70">Meet our clinical directors and therapists across New York City.</p>
        <a href="/provider/" className="btn btn-primary mt-5 !min-h-10 !px-5">View all providers</a>
      </div>
      <div className="p-6 pl-8">
        <Label>Clinical leaders</Label>
        <ul className="mt-3 grid grid-cols-2 gap-x-4">
          {list.map((p) => (
            <li key={p.name}>
              <a href={p.href} className="group/link flex items-center gap-3 rounded-lg p-2 transition hover:bg-cream-100">
                <img src={p.image} alt="" loading="lazy" referrerPolicy="no-referrer" className="h-12 w-12 shrink-0 rounded-lg object-cover object-top" />
                <span>
                  <span className="block text-[15px] font-medium leading-snug text-pine-950">{p.name}</span>
                  <span className="block text-[12.5px] leading-snug text-ink/60">{p.role}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function PostsPanel({ mega }: { mega: Extract<Mega, { kind: 'posts' }> }) {
  return (
    <div className="grid grid-cols-[17rem_1fr]">
      <div className="rounded-l-xl bg-cream-100 p-6">
        <Label>Media</Label>
        <p className="mt-3 font-serif text-2xl leading-snug text-pine-950">Latest from our therapists</p>
        <p className="mt-3 text-sm leading-relaxed text-ink/70">Tips, guides and stories to help you move better.</p>
        <a href="/media/" className="btn btn-primary mt-5 !min-h-10 !px-5">View all posts</a>
      </div>
      <div className="p-6 pl-8">
        <Label>Our latest posts</Label>
        <ul className="mt-3 grid grid-cols-2 gap-x-4">
          {mega.links.map((l) => <li key={l.label}><LinkRow link={l} /></li>)}
        </ul>
      </div>
    </div>
  );
}

function LocationsPanel() {
  return (
    <div className="grid grid-cols-[17rem_1fr]">
      <div className="relative overflow-hidden rounded-l-xl">
        <img src={img.nyc} alt="" loading="lazy" referrerPolicy="no-referrer" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-pine-950/90 via-pine-950/50 to-pine-950/30" />
        <div className="relative flex h-full flex-col justify-end p-6 text-white">
          <Label><span className="text-clay-300">Locations</span></Label>
          <p className="mt-3 font-serif text-2xl leading-snug">Six places across New York City</p>
          <a href="/locations/" className="btn btn-light mt-5 !min-h-10 !px-5 self-start">All locations</a>
        </div>
      </div>
      <div className="p-6 pl-8">
        <Label>Choose your location</Label>
        <ul className="mt-3 grid grid-cols-2 gap-3">
          {locations.map((l) => (
            <li key={l.id}>
              <a href={l.href} className="group/link block h-full rounded-lg border border-pine-900/10 p-4 transition hover:border-clay-500 hover:bg-cream-50">
                <span className="block font-serif text-lg leading-snug text-pine-950">{l.name}</span>
                <span className="mt-1 block text-[13px] leading-snug text-ink/60">{l.line1}</span>
                <span className="mt-3 inline-flex items-center gap-2 text-[13px] font-medium text-clay-600">Explore This Location <Arrow className="h-3.5 w-3.5 transition group-hover/link:translate-x-1" /></span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function MegaPanel({ item }: { item: NavItem }) {
  const m = item.mega!;
  return (
    <div className="rounded-xl bg-white text-pine-950 shadow-2xl shadow-pine-950/25 ring-1 ring-pine-950/5">
      {m.kind === 'rail' && <RailPanel mega={m} />}
      {m.kind === 'about' && <AboutPanel mega={m} />}
      {m.kind === 'providers' && <ProvidersPanel />}
      {m.kind === 'posts' && <PostsPanel mega={m} />}
      {m.kind === 'locations' && <LocationsPanel />}
    </div>
  );
}

/* ---------- mobile ---------- */
function mobileGroups(item: NavItem): { heading?: string; href?: string; links: Link[] }[] {
  const m = item.mega;
  if (!m) return [];
  if (m.kind === 'rail') return m.groups.map((g) => ({ heading: g.label, href: g.href, links: g.links }));
  if (m.kind === 'about') return [{ links: [{ label: m.cta.label, href: m.cta.href }, ...m.links] }];
  if (m.kind === 'posts') return [{ links: m.links }];
  if (m.kind === 'providers') return [{ links: [{ label: 'All providers', href: '/provider/' }, ...leaders.slice(0, 6).map((p) => ({ label: p.name, href: p.href }))] }];
  return [{ links: locations.map((l) => ({ label: l.name, href: l.href })) }];
}

function MobileItem({ item, close }: { item: NavItem; close: () => void }) {
  const [open, setOpen] = useState(false);
  const groups = mobileGroups(item);
  return (
    <li className="border-b border-white/10">
      <div className="flex items-center justify-between">
        <a href={item.href} onClick={close} className="flex min-h-12 flex-1 items-center font-serif text-xl">{item.label}</a>
        {groups.length > 0 && (
          <button type="button" aria-expanded={open} aria-label={`${item.label} submenu`} onClick={() => setOpen(!open)} className="flex h-12 w-12 items-center justify-center">
            <Chevron open={open} />
          </button>
        )}
      </div>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden pb-3 pl-3">
            {groups.map((g, n) => (
              <div key={n} className="mb-2">
                {g.heading && (
                  <a href={g.href ?? item.href} onClick={close} className="flex min-h-11 items-center text-xs font-semibold uppercase tracking-[0.2em] text-clay-300">{g.heading}</a>
                )}
                <ul>
                  {g.links.map((l) => (
                    <li key={l.label}><a href={l.href} onClick={close} className="flex min-h-11 items-center text-white/85">{l.label}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}

/* ---------- header ---------- */
export default function Header({ transparentTop = false }: { transparentTop?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') { setOpen(null); setMobile(false); } };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobile ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobile]);

  const solid = scrolled || !transparentTop || open !== null;
  const enter = (label: string) => { window.clearTimeout(timer.current); setOpen(label); };
  const keep = () => window.clearTimeout(timer.current);
  const leave = () => { timer.current = window.setTimeout(() => setOpen(null), 160); };
  const openItem = mainNav.find((n) => n.label === open && n.mega);

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 text-white transition-colors duration-500 ${solid ? 'bg-pine-950/95 shadow-lg shadow-pine-950/20 backdrop-blur-md' : 'bg-gradient-to-b from-pine-950/60 to-transparent'}`}>
        {/* Utility strip */}
        <div className={`hidden overflow-hidden border-b border-white/10 transition-all duration-500 lg:block ${scrolled ? 'max-h-0 border-transparent opacity-0' : 'max-h-12 opacity-100'}`}>
          <div className="container-x flex h-11 items-center justify-between text-[13px]">
            <p className="text-white/70">Physical &amp; Occupational Therapy in New York City</p>
            <ul className="flex items-center gap-1">
              {utilityRight.map((l) => (
                <li key={l.label}>
                  <a href={l.href} {...(l.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})} className="mr-2 inline-flex min-h-8 items-center rounded-md border border-white/30 px-4 font-medium text-white transition hover:border-white hover:bg-white hover:text-pine-950">{l.label}</a>
                </li>
              ))}
              <li>
                <a href={newPatients.href} className="inline-flex min-h-11 items-center px-3 text-white/80 hover:text-white">{newPatients.label}</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Main row */}
        <div className="container-x flex h-[4.5rem] items-center justify-between gap-6 lg:h-20" onMouseLeave={leave}>
          <a href="/" aria-label="Cynergy Physical Therapy — home" className="shrink-0">
            <img src={img.logoWhite} alt="Cynergy Physical Therapy" className="h-7 w-auto lg:h-8" />
          </a>

          <nav aria-label="Primary" className="hidden xl:block">
            <ul className="flex items-center">
              {mainNav.map((item) => (
                <li key={item.label} onMouseEnter={() => (item.mega ? enter(item.label) : (keep(), setOpen(null)))}>
                  <div className="flex items-center">
                    <a href={item.href} className={`inline-flex min-h-11 items-center whitespace-nowrap rounded-md px-3 text-[14px] font-medium tracking-wide transition hover:text-white ${open === item.label ? 'text-white' : 'text-white/90'}`}>
                      {item.label}
                    </a>
                    {item.mega && (
                      <button type="button" aria-expanded={open === item.label} aria-label={`${item.label} menu`} onClick={() => setOpen(open === item.label ? null : item.label)} className="-ml-2 flex h-8 w-6 items-center justify-center text-white/70 hover:text-white">
                        <Chevron open={open === item.label} />
                      </button>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </nav>

          <button type="button" onClick={() => setMobile(true)} aria-label="Open menu" aria-expanded={mobile} className="flex h-11 w-11 items-center justify-center rounded-md border border-white/30 xl:hidden">
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h10" /></svg>
          </button>
        </div>

        {/* Mega panel */}
        <AnimatePresence mode="wait">
          {openItem && (
            <motion.div
              key={openItem.label}
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 6 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              onMouseEnter={keep} onMouseLeave={leave}
              className="absolute inset-x-0 top-full hidden pt-1 xl:block"
            >
              <div className="container-x">
                <div className="mx-auto max-w-[62rem]">
                  <MegaPanel item={openItem} />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <AnimatePresence>
        {mobile && (
          <motion.div role="dialog" aria-modal="true" aria-label="Menu" initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }} className="fixed inset-0 z-[60] overflow-y-auto bg-pine-950 text-white">
            <div className="container-x flex h-[4.5rem] items-center justify-between">
              <img src={img.logoWhite} alt="Cynergy" className="h-7 w-auto" />
              <button type="button" onClick={() => setMobile(false)} aria-label="Close menu" className="flex h-11 w-11 items-center justify-center rounded-md border border-white/30">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18" /></svg>
              </button>
            </div>
            <div className="container-x pb-12 pt-4">
              <ul>{mainNav.map((item) => <MobileItem key={item.label} item={item} close={() => setMobile(false)} />)}</ul>
              <a href={newPatients.href} className="btn btn-primary mt-8 w-full">{newPatients.label}</a>
              <ul className="mt-6 grid grid-cols-2 gap-x-4 text-sm text-white/75">
                {utilityRight.map((l) => <li key={l.label}><a href={l.href} className="flex min-h-11 items-center">{l.label}</a></li>)}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
