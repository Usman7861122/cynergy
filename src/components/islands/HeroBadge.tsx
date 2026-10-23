import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';

// Round badge for the hero: the Cynergy mark in the middle, our words turning slowly around it.
// The ring turns by itself, and turns a little more as you scroll.
const WORDS = 'HEAL WELL  •  MOVE WELL  •  LIVE WELL  •  ';

export default function HeroBadge() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const scrollTurn = useTransform(scrollY, [0, 1000], [0, reduce ? 0 : 120]);

  return (
    <div aria-hidden="true" className="pointer-events-none absolute right-[4%] top-1/2 hidden aspect-square w-[21rem] -translate-y-1/2 lg:block xl:right-[6%] xl:w-[27rem]">
      <motion.div style={{ rotate: scrollTurn }} className="absolute inset-0">
        <motion.svg
          viewBox="0 0 400 400"
          className="h-full w-full"
          animate={reduce ? undefined : { rotate: 360 }}
          transition={{ duration: 60, ease: 'linear', repeat: Infinity }}
        >
          <defs>
            <path id="hero-ring" d="M200,200 m-158,0 a158,158 0 1,1 316,0 a158,158 0 1,1 -316,0" />
          </defs>
          <text fill="#fff" fontSize="27" fontWeight="700" letterSpacing="3.2" fontFamily="'DM Sans Variable', system-ui, sans-serif" style={{ textShadow: '0 1px 8px rgba(0,0,0,.35)' }}>
            <textPath href="#hero-ring" textLength="985" lengthAdjust="spacing">{WORDS}</textPath>
          </text>
        </motion.svg>
      </motion.div>
      <motion.img
        src="/images/cynergy-mark-light.png"
        alt=""
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute left-1/2 top-1/2 w-[38%] -translate-x-1/2 -translate-y-1/2 drop-shadow-[0_4px_18px_rgba(0,0,0,0.35)]"
      />
    </div>
  );
}
