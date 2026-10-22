import { img } from '@/data/images';
import type { Service } from './types';

// Content comes from https://cynergypt.com/sports-physical-therapy/ (shortened and simplified).
export const sportsMedicine: Service = {
  dir: '',
  group: 'sports',
  locationIds: [],
  slug: 'sports-physical-therapy',
  label: 'Sports Medicine',
  careName: 'Sports medicine physical therapy',
  heroTitle: 'Sports medicine and orthopedic rehab in New York City.',
  seoTitle: 'Sports Medicine Physical Therapy in New York City',
  heroText: 'At Cynergy, we care for athletes and active people of every level. From torn ligaments to surgery recovery, we build a plan that restores strength, movement and confidence.',
  image: img.sportsMedicine,
  imageAlt: 'A therapist guiding an athlete through rehab',
  overviewImage: img.sportsRecovery,
  whyImage: img.sports,
  whyImageAlt: 'Athlete training with a therapist',
  overview: { eyebrow: 'Heal and recover', title: 'Sports medicine or sports performance?', text: 'The two overlap, but they have different goals. Sports medicine helps you heal after an injury or surgery. Sports performance helps you get stronger and play at your best. Many athletes need both at different times.' },
  causes: { title: 'What we help with', items: ['Torn ligaments', 'Muscle strains', 'Tendon injuries', 'Pre-surgery prep', 'Post-surgery rehab', 'Overuse injuries'] },
  approach: { title: 'How we care for you', items: ['Reduce pain and swelling', 'Restore strength, motion and balance', 'Guide a safe return to sport or daily life', 'Teach you how to prevent the next injury'] },
  benefits: {
    eyebrow: 'Tools we use', title: 'Modern rehab, built around you.', text: 'Your plan can include a mix of these, depending on your goals.',
    items: [
      { title: 'Strength training', text: 'Barbell, kettlebell, medicine ball and weighted sled work to rebuild strength and power safely.' },
      { title: 'Testing and tracking', text: 'Gait analysis, Tindeq load readings and return-to-play checks show your progress with real numbers.' },
      { title: 'Blood flow restriction', text: 'A gentle method that helps build muscle when heavy loads are not yet safe.' },
    ],
  },
  conditions: {
    eyebrow: 'Explore our sports care', title: 'Care for every athlete.', text: 'Choose a topic to learn more.', ariaLabel: 'Sports medicine topics',
    items: [
      { id: 'recovery', title: 'Injury recovery', what: 'A clear plan to lower pain, rebuild strength and get back to what you love.', how: 'We start with a full evaluation, then build your program step by step.' },
      { id: 'post-op', title: 'Post-surgery rehab', what: 'Rehab for common sports surgeries, shaped around your procedure and your sport.', how: 'We follow current research and adjust each phase to your progress.' },
      { id: 'prevention', title: 'Injury prevention', what: 'Screening and training that find weak links before they turn into injuries.' },
      { id: 'rtp', title: 'Return to play', what: 'Clear tests that show when you are ready to go back to your sport.' },
    ],
  },
};
