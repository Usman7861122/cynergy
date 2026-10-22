import { img } from '@/data/images';
import type { Service } from './types';

const U = 'https://cynergypt.com/wp-content/uploads/';

// Content comes from https://cynergypt.com/return-to-play/ (shortened and simplified).
export const returnToPlay: Service = {
  dir: '',
  group: 'sports',
  locationIds: [],
  slug: 'return-to-play',
  label: 'Return to Play',
  careName: 'Return-to-play physical therapy',
  heroTitle: 'Return-to-play physical therapy in New York City.',
  seoTitle: 'Return-to-Play (RTP) Physical Therapy in New York City',
  heroText: 'Get back in the game with a personal plan that rebuilds strength, prevents re-injury and shows you are ready, whether or not you had surgery.',
  image: U + '2025/09/Screenshot-2025-09-29-at-10.51.35-AM.png',
  imageAlt: 'An athlete during return-to-play rehab',
  overviewImage: img.sportsMedicine,
  whyImage: img.sports,
  whyImageAlt: 'Athletes training',
  overview: { eyebrow: 'What is RTP?', title: 'A clear path back to your sport.', text: 'Return-to-play is a step-by-step rehab process. It helps you go back to sport safely after an injury, with or without surgery. The goal is full function and lower risk of getting hurt again.' },
  causes: { title: 'After surgery', items: ['ACL reconstruction', 'Rotator cuff repair', 'Meniscus surgery'] },
  approach: { title: 'Without surgery', items: ['Early movement to limit stiffness', 'Progressive strength training', 'Pain relief tools like ice, heat and electrical stimulation', 'Movement training for agility and balance', 'Clear return-to-sport targets', 'Warm-up and injury prevention education'] },
  benefits: {
    eyebrow: 'Why choose us', title: 'Rehab built for athletes.', text: 'We guide you from the first day of recovery to your first game back.',
    items: [
      { title: 'Sports therapists', text: 'Experienced clinicians who work with athletes every day.' },
      { title: 'Modern equipment', text: 'Up-to-date rehab tools and regular performance testing.' },
      { title: 'A team approach', text: 'We work with your coaches and physicians when it helps.' },
    ],
  },
  conditions: {
    eyebrow: 'Two paths', title: 'Care for every kind of injury.', text: 'Choose a path to learn more.', ariaLabel: 'Return-to-play paths',
    items: [
      { id: 'post-op', title: 'After surgery', what: 'Recover right, return stronger. Our plans follow current research and fit your procedure and your sport.', how: 'Common surgeries include ACL reconstruction, rotator cuff repair and meniscus surgery.' },
      { id: 'non-op', title: 'Without surgery', what: 'Not every injury needs surgery. We still guide you with clear steps and benchmarks.', how: 'Your plan includes early movement, strength, pain relief, movement training and prevention tips.' },
      { id: 'testing', title: 'Readiness testing', what: 'Strength and movement tests show when your body is ready to return.', how: 'We repeat tests as you progress, so you can see real numbers.' },
    ],
  },
};
