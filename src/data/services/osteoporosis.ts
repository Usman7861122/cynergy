import { img } from '@/data/images';
import type { Service } from './types';

const U = 'https://cynergypt.com/wp-content/uploads/';

// Content comes from https://cynergypt.com/strength-training-for-osteoporosis/ (shortened and simplified).
// The live page has no photo of its own. The hero uses the image from the "What We Offer" card.
export const osteoporosis: Service = {
  dir: '',
  group: 'offer',
  slug: 'strength-training-for-osteoporosis',
  label: 'Osteoporosis Strength Training',
  careName: 'Osteoporosis strength training',
  heroTitle: 'Osteoporosis strength training in New York City.',
  seoTitle: 'Osteoporosis Strength Training in New York City',
  heroText: 'Safe, effective bone health programs. At Cynergy, physical therapist-led strength training helps you build strength, improve posture and feel steadier, in a supportive setting.',
  image: U + '2025/07/Osteoporosis-scaled.avif',
  imageAlt: 'Strength training for osteoporosis',
  overviewImage: img.pilatesStudio,
  whyImage: img.cobbleHill,
  whyImageAlt: 'A Cynergy clinic',
  overview: { eyebrow: 'Understanding osteoporosis', title: 'Stronger muscles protect your bones.', text: 'Osteoporosis lowers bone density and mass, which makes bones fragile and more likely to break, especially in the hips, spine and wrists. It often develops silently and is most common in older adults, particularly after menopause.' },
  causes: { title: 'Who can benefit', items: ['Adults with osteoporosis or osteopenia', 'People with a family history of osteoporosis', 'Postmenopausal women concerned about bone loss', 'People recovering from fractures', 'Anyone who wants to prevent falls and stay independent'] },
  approach: { items: ['Supervised resistance training with bodyweight, bands and weights', 'Education on safe movement and fall prevention', 'Posture retraining and spine alignment work', 'Regular progress checks and goal-setting'] },
  benefits: {
    eyebrow: 'Benefits', title: 'Build strength safely.', text: 'Programs are designed by licensed physical therapists, with routines scaled so you can progress without injury.',
    items: [
      { title: 'Bone density', text: 'Controlled resistance and weight-bearing exercise can help stimulate bone growth and keep density.' },
      { title: 'Muscle strength', text: 'Stronger muscles protect your skeleton, lower your fall risk and support daily life.' },
      { title: 'Balance and posture', text: 'Targeted strength work improves coordination and balance. Exercise focused on alignment is linked to a lower risk of spine fractures and chronic back pain.' },
    ],
  },
  conditions: {
    eyebrow: 'Our programs', title: 'What you get.', text: 'Choose a topic to learn more.', ariaLabel: 'Osteoporosis program topics',
    items: [
      { id: 'bone-health', title: 'Bone-Health Programs', what: 'Programs built around bone health, with physical therapist supervision. We combine clinical expertise with compassionate care.' },
      { id: 'falls', title: 'Fall Prevention and Balance', what: 'We teach safe movement and build balance, so you can stay independent and lower the risk of falls. Insurance-friendly and self-pay options are available.' },
    ],
  },
};
