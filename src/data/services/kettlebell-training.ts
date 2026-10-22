import { img } from '@/data/images';
import type { Service } from './types';

// Content comes from https://cynergypt.com/kettlebell-training/ (shortened and simplified).
export const kettlebell: Service = {
  dir: '',
  group: 'sports',
  locationIds: [],
  slug: 'kettlebell-training',
  label: 'Kettlebell Training',
  careName: 'Kettlebell training',
  heroTitle: 'Kettlebell training for rehab and performance.',
  seoTitle: 'Kettlebell Training in New York City',
  heroText: 'At Cynergy, we use kettlebells inside our physical therapy and sports performance programs. They help you recover from injury, move better and perform at a higher level.',
  image: img.sportsPerformance,
  imageAlt: 'Kettlebell training with a therapist',
  overviewImage: img.sportsRecovery,
  whyImage: img.sports,
  whyImageAlt: 'Strength training session',
  overview: { eyebrow: 'What is it?', title: 'Strength and mobility in one tool.', text: 'A kettlebell is a cast-iron or steel weight with a handle. Swings, presses, squats and carries train your whole body to work together, the way it does in real life.' },
  causes: { title: 'Who can benefit', items: ['After surgery', 'Athletes returning to sport', 'People with chronic pain', 'Active adults', 'Better posture and balance'] },
  approach: { title: 'Why choose Cynergy', items: ['Personal programs', 'A science-based approach', 'Safe, step-by-step progress', 'Insurance and self-pay options'] },
  benefits: {
    eyebrow: 'Why kettlebells', title: 'Rehab that feels like real life.', text: 'Kettlebell moves copy daily movements, which helps recovery and prevents new injuries.',
    items: [
      { title: 'Functional movement', text: 'Muscles learn to work together for daily life and sport.' },
      { title: 'Core strength', text: 'Most moves use the core, which protects your spine and lowers re-injury risk.' },
      { title: 'Joint mobility', text: 'Slow, controlled work improves motion in the shoulders, hips and spine.' },
    ],
  },
  conditions: {
    eyebrow: 'What it does', title: 'Five ways kettlebells help.', text: 'Choose one to read more.', ariaLabel: 'Kettlebell benefits',
    items: [
      { id: 'function', title: 'Restore movement', what: 'Retrain muscles to work as a team for daily tasks and sport.' },
      { id: 'core', title: 'Build core stability', what: 'A strong core supports your spine and helps you stay injury free.' },
      { id: 'mobility', title: 'Improve mobility', what: 'Controlled, progressive work opens up stiff shoulders, hips and backs.' },
      { id: 'strength', title: 'Rebuild strength', what: 'Easy-to-adjust loads suit recovery from ACL surgery, rotator cuff tears or low back pain.' },
      { id: 'cardio', title: 'Boost endurance', what: 'Many kettlebell workouts double as low-impact cardio to rebuild stamina.' },
    ],
  },
};
