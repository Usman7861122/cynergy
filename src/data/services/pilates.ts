import type { Service } from './types';

const U = 'https://cynergypt.com/wp-content/uploads/2025/07/';

// Content comes from https://cynergypt.com/pilates/ (shortened and simplified).
export const pilates: Service = {
  dir: '',
  group: 'offer',
  slug: 'pilates',
  label: 'Pilates',
  careName: 'Pilates',
  heroTitle: 'Pilates in New York City.',
  seoTitle: 'Pilates in New York City',
  heroText: 'Pilates is a conditioning method that balances mobility and stability. At Cynergy, it works as a partner to physical therapy, with a focus on core strength, breathing, alignment, coordination and balance.',
  image: U + 'TWD-clinicalpilates-1024x683-1.jpg.avif',
  imageAlt: 'Clinical Pilates at The Wellness Den',
  overviewImage: U + 'TWD-057-1024x683-1.jpg.avif',
  whyImage: U + 'TWD-136-1024x683-1.jpg.avif',
  whyImageAlt: 'The Pilates studio at The Wellness Den',
  locationIds: ['midtown-east', 'midtown-west', 'wellness-den'],
  overview: { eyebrow: 'What is Pilates?', title: 'A safe way to build strength and control.', text: 'Whatever your age, size, fitness level or movement background, Pilates gives you a structured, safe experience with room to challenge yourself and progress.' },
  causes: { title: 'A good next step after', items: ['Low back pain', 'Joint replacement', 'Childbirth', 'Postural syndromes', 'Overuse injuries'] },
  approach: { title: 'Equipment we use', items: ['Pilates Reformer', 'Cadillac', 'Wunda Chair', 'High Barrel', 'Variable resistance or assistance in many positions', 'Gentle on people who have trouble or pain with load bearing'] },
  benefits: {
    eyebrow: 'Benefits of Pilates', title: 'What regular practice can give you.', text: 'People credit consistent Pilates practice with these gains.',
    items: [
      { title: 'An easier pregnancy journey', text: 'People link regular practice to an easier pre- and postnatal journey.' },
      { title: 'Fewer injuries', text: 'Pilates is credited with injury reduction and longer athletic careers, including for dancers.' },
      { title: 'A greater sense of well-being', text: 'A stronger core, better breathing and better alignment add up to feeling better.' },
    ],
  },
  conditions: {
    eyebrow: 'Where to practice', title: 'Pilates at Cynergy.', text: 'Choose a topic to learn more.', ariaLabel: 'Pilates topics',
    items: [
      { id: 'clinics', title: 'Midtown East and West', what: 'Our Midtown East and Midtown West clinics have the Pilates Reformer, Cadillac, Wunda Chair and High Barrel, so Pilates can sit alongside your physical therapy.' },
      { id: 'wellness-den', title: 'The Wellness Den', what: 'An integrative movement and wellness space that bridges physical therapy and performance training. It focuses on physical therapy, pelvic health, dance medicine, Pilates and Barre, and helps people return safely to group fitness classes. Dr. Laurence Agénor created the group Pilates Reformer and Barre classes.' },
    ],
  },
};
