import { img } from '@/data/images';
import type { Service } from './types';

// Content comes from https://cynergypt.com/running-gait-analysis-nyc/ (shortened and simplified).
export const runningGait: Service = {
  dir: '',
  group: 'sports',
  locationIds: [],
  slug: 'running-gait-analysis-nyc',
  label: 'Running & Gait Analysis',
  careName: 'Running and gait analysis',
  heroTitle: 'Running gait analysis in New York City.',
  seoTitle: 'Running Gait Analysis in New York City',
  heroText: 'Improve performance, prevent injuries and run smarter. Our program is for runners of every level, from a first 5K to a marathon, and is led by licensed physical therapists.',
  image: '/images/sports/running-gait-analysis-nyc-1.jpg',
  imageAlt: 'A runner during a gait analysis',
  overviewImage: img.sportsRecovery,
  whyImage: '/images/sports/running-gait-analysis-nyc-2.jpg',
  whyImageAlt: 'Runner training outdoors',
  overview: { eyebrow: 'What is gait analysis?', title: 'A close look at how you run.', text: 'We use slow-motion video, motion capture and careful observation to study your stride, posture, joint angles and foot strike. Then we find habits that may lead to injury.' },
  causes: { title: 'Who it is for', items: ['New runners learning form', 'Race-day athletes', 'Runners coming back from injury', 'People with pain when walking or jogging', 'Older adults who want safer running'] },
  approach: { title: 'What we may find', items: ['Overstriding', 'Hip drop', 'Too much foot roll inward', 'Weak or tight muscles that change your form'] },
  benefits: {
    eyebrow: 'How we help runners', title: 'A plan for form, strength and endurance.', text: 'Every plan is built around your body and your running goals.',
    items: [
      { title: 'Better form', text: 'We spot form issues and coach a smoother, more efficient stride.' },
      { title: 'Injury care', text: 'We treat the root cause of shin splints, IT band pain, plantar fasciitis and runner’s knee.' },
      { title: 'Strength and shoes', text: 'We fix weak links, build endurance and review whether your shoes or orthotics fit your needs.' },
    ],
  },
  conditions: {
    eyebrow: 'Five focus areas', title: 'What your plan can include.', text: 'Choose an area to learn more.', ariaLabel: 'Running program areas',
    items: [
      { id: 'gait', title: 'Gait optimization', what: 'We find form issues and coach more efficient movement.' },
      { id: 'injury', title: 'Injury prevention and recovery', what: 'We treat the cause of common running injuries and guide your rehab.' },
      { id: 'strength', title: 'Strength and mobility', what: 'We correct weak spots and improve stability.' },
      { id: 'endurance', title: 'Endurance coaching', what: 'We help with pacing, conditioning and building mileage safely.' },
      { id: 'shoes', title: 'Footwear and orthotics', what: 'We check whether your shoes help or hurt and suggest options, including orthotics.' },
    ],
  },
};
