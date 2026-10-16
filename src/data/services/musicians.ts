import { img } from '@/data/images';
import type { Service } from './types';

const U = 'https://cynergypt.com/wp-content/uploads/';

// Content comes from https://cynergypt.com/therapy-for-musicians/ (shortened and simplified).
export const musicians: Service = {
  dir: '',
  group: 'offer',
  slug: 'therapy-for-musicians',
  label: 'Musicians',
  careName: 'Physical therapy for musicians',
  heroTitle: 'Occupational and physical therapy for musicians in New York City.',
  seoTitle: 'Occupational and Physical Therapy for Musicians in New York City',
  heroText: 'Playing music asks a lot from your body. At Cynergy, our therapists build a plan around you, your instrument and your goals, to prevent repetitive stress and help you play better for longer.',
  image: U + '2025/10/untitled-7402764-768x512.jpg',
  imageAlt: 'Hand therapy for musicians',
  overviewImage: U + '2025/07/IMG_7326-scaled-1.jpg',
  whyImage: img.musicians,
  whyImageAlt: 'A musician during a therapy session',
  overview: { eyebrow: 'Care for players', title: 'Therapists who understand how you play.', text: 'No two musicians move exactly the same way, even on the same instrument. We look at your movement while you play, and away from your instrument, to find the root cause.' },
  causes: { title: 'Common problems', items: ['Tendonitis', 'Tennis and golfer’s elbow', 'Rotator cuff tendonitis', 'Shoulder impingement', 'Carpal tunnel', 'Cubital tunnel', 'Thumb and finger arthritis', 'Trigger finger'] },
  approach: { items: ['Stretches for instrument-specific tightness', 'Strengthening for the arm and shoulder muscles', 'Posture exercises for sitting', 'Advice on activity changes and using joints well'] },
  benefits: {
    eyebrow: 'Habits that protect you', title: 'Play longer, with less strain.', text: 'These strategies can help you play better and extend your playing career.',
    items: [
      { title: 'Warm up and stretch', text: 'Simple moves like arm circles and side bends raise blood flow. Stretch the muscles that tighten in your playing position.' },
      { title: 'Build strength', text: 'Stronger shoulder and upper arm muscles may help prevent tendonitis and improve posture.' },
      { title: 'Ease your technique', text: 'Reduce extra grip tension, take hourly breaks, and keep your instrument well tuned to lower strain.' },
    ],
  },
  conditions: {
    eyebrow: 'Instruments we see', title: 'For every kind of musician.', text: 'Choose a family to see who we work with.', ariaLabel: 'Instrument families',
    items: [
      { id: 'strings', title: 'Strings', what: 'Cello, violin, guitar, bass and harp players.' },
      { id: 'woodwinds', title: 'Woodwinds', what: 'Clarinet, saxophone, flute, oboe, bassoon and piccolo players.' },
      { id: 'brass', title: 'Brass', what: 'Trumpet, trombone, French horn, tuba, flugelhorn and cornet players.' },
      { id: 'percussion', title: 'Percussion and keys', what: 'Drums, piano, xylophone, cymbals and timpani players.' },
    ],
  },
};
