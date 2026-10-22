import { img } from '@/data/images';
import type { Service } from './types';

const U = 'https://cynergypt.com/wp-content/uploads/2025/07/';

// Content comes from https://cynergypt.com/youth-athletic-development/ (shortened and simplified).
export const youthAthletic: Service = {
  dir: '',
  group: 'sports',
  locationIds: [],
  slug: 'youth-athletic-development',
  label: 'Youth Athletic Development',
  careName: 'Youth athletic development',
  heroTitle: 'Youth athletic development in New York City.',
  seoTitle: 'Youth Athletic Development in New York City',
  heroText: 'A step-by-step, research-based way to build young athletes. We train strength, power, speed, agility, coordination and endurance, and use physical therapy to fix movement habits that raise injury risk.',
  image: U + 'IMG_4031-1536x2048.jpeg.avif',
  imageAlt: 'A young athlete training',
  overviewImage: U + 'IMG_8522-1508x2048.jpeg.avif',
  whyImage: img.sportsPerformance,
  whyImageAlt: 'Young athletes in a training session',
  overview: { eyebrow: 'At ADPT', title: 'Plans that grow with your child.', text: 'Every plan is personal and changes over time. We build core athletic skills and help young athletes move with more ease.' },
  causes: { title: 'Program focus', items: ['Strength and power', 'Speed in all directions', 'Footwork and agility', 'Coordination', 'Endurance', 'Finding movement weak links'] },
  approach: { title: 'Young athletes with injuries', items: ['Osgood-Schlatter disease', 'Knee injuries and surgery rehab', 'Other bone and joint conditions'] },
  benefits: {
    eyebrow: 'Our principles', title: 'Good habits for the long run.', text: 'These ideas guide every youth program.',
    items: [
      { title: 'Every child is different', text: 'Growth is not a straight line, so plans must be personal.' },
      { title: 'Body and mind', text: 'Programs support both fitness and well-being at every age.' },
      { title: 'Play for life', text: 'Skills, strength and injury prevention help kids stay in the game.' },
    ],
  },
  conditions: {
    eyebrow: 'Six keys', title: 'Keys to long-term athlete development.', text: 'Choose a key to read more.', ariaLabel: 'Youth development keys',
    items: [
      { id: 'individual', title: 'Respect each child', what: 'Development is personal and does not follow a straight line.' },
      { id: 'wellbeing', title: 'Support well-being', what: 'Programs should help both fitness and mental well-being.' },
      { id: 'early', title: 'Start motor skills early', what: 'Children build skills and muscle strength from early childhood.' },
      { id: 'injury', title: 'Lower injury risk', what: 'Smart training helps young people keep playing.' },
      { id: 'variety', title: 'Train in many ways', what: 'A mix of training builds health and skill.' },
      { id: 'progress', title: 'Progress step by step', what: 'Plans are personal and increase in a planned way.' },
    ],
  },
};
