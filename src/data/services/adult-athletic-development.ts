import type { Service } from './types';

const U = 'https://cynergypt.com/wp-content/uploads/2025/07/';

// Content comes from https://cynergypt.com/adult-athletic-development/ (shortened and simplified).
export const executiveEdge: Service = {
  dir: '',
  group: 'sports',
  locationIds: [],
  slug: 'adult-athletic-development',
  label: 'Executive Edge Program',
  careName: 'Executive Edge program',
  heroTitle: 'Executive Edge: performance therapy in New York City.',
  seoTitle: 'Executive Edge Performance Therapy in New York City',
  heroText: 'Executive Edge is the premium performance program at ADPT for busy professionals and recreational athletes. It joins physical therapy, injury prevention and coaching in one on one sessions.',
  image: '/images/sports/adult-athletic-development-1.jpg',
  imageAlt: 'One on one performance therapy session',
  overviewImage: U + 'IMG_4031-1536x2048.jpeg.avif',
  whyImage: '/images/sports/adult-athletic-development-2.jpg',
  whyImageAlt: 'Performance training at ADPT by Cynergy',
  overview: { eyebrow: 'What is it?', title: 'A bridge between rehab and performance.', text: 'You work with a licensed Doctor of Physical Therapy who is also a strength and conditioning specialist. Sessions last 60 minutes, one on one.' },
  causes: { title: 'Who it is for', items: ['Busy professionals', 'Runners, golfers and tennis players', 'Basketball players and boxers', 'CrossFit athletes and lifters', 'People not fully recovered from injury'] },
  approach: { title: 'What is included', items: ['One on one performance therapy', 'Movement review with force plate strength testing', 'Mobility, strength and resilience work', 'Manual therapy and recovery methods', 'Blood flow restriction when needed', 'A personal return-to-activity plan', 'Progress tracking and coach access'] },
  benefits: {
    eyebrow: 'Why ADPT', title: 'More than basic rehab.', text: 'Built for people who want to perform well and stay active.',
    items: [
      { title: 'Individual care', text: 'No handoffs and no cookie-cutter plans.' },
      { title: 'Elite experience', text: 'Our clinicians also train high-level athletes.' },
      { title: 'Premium setting', text: 'A concierge-style experience in a quiet Midtown space.' },
    ],
  },
  conditions: {
    eyebrow: 'Meet the team', title: 'Four coaches, one standard.', text: 'Choose a clinician to learn more.', ariaLabel: 'ADPT clinicians',
    items: [
      { id: 'mike', title: 'Michael Lazara', what: 'Clinical director at ADPT. Patients praise his rehab and strength coaching.', how: 'Learn more on his bio page.' },
      { id: 'franceska', title: 'Franceska Mia-Mona Règnier', what: 'PT, DPT, CSCS. Helps athletes return to sport after injury and surgery.' },
      { id: 'luciano', title: 'Luciano Rua', what: 'PT, DPT, CSCS, ATC. Known for knee rehab and first-time patient care.' },
      { id: 'jared', title: 'Jared Simpson', what: 'PT, DPT. Builds challenging programs with care and detail.' },
    ],
  },
};
