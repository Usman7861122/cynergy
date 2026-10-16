import { img } from '@/data/images';
import type { Service } from './types';

const U = 'https://cynergypt.com/wp-content/uploads/';

// Content comes from https://cynergypt.com/what-we-treat/temporomandibular-disorder/ (shortened and simplified).
export const tmj: Service = {
  dir: 'what-we-treat',
  slug: 'temporomandibular-disorder',
  label: 'TMJ/TMD',
  careName: 'TMJ therapy',
  heroTitle: 'TMJ physical therapy in New York City.',
  seoTitle: 'TMJ Physical Therapy in New York City',
  heroText: 'The jaw joint (TMJ) is a hinge that connects your lower jaw to your skull. When it is not working well, talking, chewing and yawning can hurt. At Cynergy, we help you ease jaw pain and move freely again.',
  image: U + '2025/07/Jaw-Pain.png.webp',
  imageAlt: 'Jaw pain',
  whyImage: img.cobbleHill,
  whyImageAlt: 'A Cynergy clinic',
  stat: { big: '50', unit: '%+', text: 'of patients treated with conservative care (that means physical therapy) for TMJ pain find complete relief.', extra: 'Patients with leftover symptoms feel them less often and less strongly.' },
  overview: { eyebrow: 'Understanding TMJ and TMD', title: 'Gentle care for your jaw.', text: 'We use hands-on techniques and gentle strengthening to restore natural jaw movement and lower pain. We also look at the habits and postures that may add to your jaw pain.' },
  causes: { title: 'Common causes', items: ['Injury to the jaw, head or neck', 'Grinding or clenching your teeth', 'Stress'] },
  approach: { items: ['Manual techniques', 'Gentle strengthening exercises', 'Habit and posture changes', 'Hands-on care outside and, with your consent, inside the mouth'] },
  conditions: {
    eyebrow: 'Jaw care', title: 'What to know.', text: 'Choose a topic to learn more.', ariaLabel: 'TMJ topics',
    items: [
      { id: 'tmd', title: 'TMJ / TMD', what: 'Temporomandibular disorder (TMD) is a problem with the jaw joint and the muscles around it. It can cause pain, stiffness, limited movement, locking, clicking or a change in how your teeth fit together.', how: 'We use manual therapy and gentle strengthening to restore jaw movement and reduce pain, plus habit and posture changes.', facts: { label: 'Common signs', items: ['Pain in the face, jaw and neck', 'Stiff jaw muscles', 'Limited movement or locking', 'Painful clicking or popping', 'A change in how the upper and lower teeth fit'] } },
      { id: 'habits', title: 'Habits We Look For', what: 'Some everyday habits can add to jaw pain. We help you find them and change them.', facts: { label: 'Habits and postures', items: ['Stress', 'Smoking', 'Chewing gum', 'Leaning on your chin', 'Nail or lip biting', 'Clenching or grinding teeth at night', 'Holding your teeth together', 'Computer work'] } },
      { id: 'first-visit', title: 'Your First Visit', what: 'We start with your health history and goals. Then we check your posture, bite, face, breathing and tongue movement, how your jaw loads, and clicking or crackling. We also screen for headache and dizziness, and test reflexes, sensation, motion, strength, joint movement and endurance of the jaw, neck, shoulder and mid back. With your consent, we may use hands-on care outside and inside the mouth to check for tension.' },
    ],
  },
};
