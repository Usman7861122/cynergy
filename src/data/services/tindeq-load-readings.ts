import { img } from '@/data/images';
import type { Service } from './types';

const U = 'https://cynergypt.com/wp-content/uploads/';

// Content comes from https://cynergypt.com/tindeq-load-readings/ (shortened and simplified).
export const tindeq: Service = {
  dir: '',
  group: 'sports',
  locationIds: [],
  slug: 'tindeq-load-readings',
  label: 'Tindeq Load Readings',
  careName: 'Tindeq load readings',
  heroTitle: 'Tindeq load readings in New York City.',
  seoTitle: 'Tindeq Load Readings in New York City',
  heroText: 'Tindeq is a precise tool that measures your strength and tracks your rehab. It helps athletes and active people see real progress in numbers.',
  image: U + '2025/10/1d3b24f2-88fc-47f4-9a2f-af5637565d4a.png',
  imageAlt: 'Tindeq device measuring strength',
  overviewImage: img.sportsRecovery,
  whyImage: img.sports,
  whyImageAlt: 'Strength testing with a therapist',
  overview: { eyebrow: 'What is Tindeq?', title: 'A small device with big insight.', text: 'Tindeq is a light, wireless force sensor. It measures load, tension and force in real time, from finger strength to full-body effort.' },
  causes: { title: 'Who benefits', items: ['After surgery', 'Overuse injuries', 'Strength athletes', 'Anyone who wants clear progress'] },
  approach: { title: 'How we use it', items: ['Grip strength testing', 'Isometric loading programs', 'Tendon loading for Achilles, patellar and elbow', 'Return-to-sport decisions'] },
  benefits: {
    eyebrow: 'Why it matters', title: 'Data that guides your care.', text: 'Numbers help your therapist and you make better choices.',
    items: [
      { title: 'Objective testing', text: 'Measure strength instead of guessing.' },
      { title: 'Track every session', text: 'See how you improve from one visit to the next.' },
      { title: 'Spot imbalances early', text: 'Find strength differences between sides before they cause problems.' },
    ],
  },
  conditions: {
    eyebrow: 'Who it helps', title: 'Four groups who gain the most.', text: 'Choose a group to learn more.', ariaLabel: 'Who benefits from Tindeq',
    items: [
      { id: 'post-op', title: 'After surgery', what: 'Rotator cuff, ACL and tendon repair rehab become easier to measure and guide.' },
      { id: 'overuse', title: 'Overuse injuries', what: 'Tendon problems and stress injuries respond well to carefully measured loading.' },
      { id: 'strength', title: 'Strength athletes', what: 'Climbers, CrossFit athletes and track and field athletes can track force and power.' },
      { id: 'progress', title: 'Anyone in therapy', what: 'If you want measurable progress, Tindeq gives you clear proof.' },
    ],
  },
};
