import { img } from '@/data/images';
import type { Service } from './types';

const U = 'https://cynergypt.com/wp-content/uploads/';

// Content comes from https://cynergypt.com/mckenzie-method-mdt/ (shortened and simplified).
// The live page has no main photo. The hero uses the image from the "What We Offer" card.
export const mckenzie: Service = {
  dir: '',
  group: 'offer',
  slug: 'mckenzie-method-mdt',
  label: 'The McKenzie Method®',
  careName: 'McKenzie Method care',
  heroTitle: 'McKenzie Method (MDT) physical therapy in New York City.',
  seoTitle: 'McKenzie Method (MDT) Physical Therapy in New York City',
  heroText: 'The McKenzie Method, also called Mechanical Diagnosis and Therapy (MDT), is an exercise-based approach for muscle and joint problems. At Cynergy, a certified practitioner finds the cause of your pain and teaches you how to treat it.',
  image: U + '2025/10/pexels-pixabay-209969-scaled.jpg',
  imageAlt: 'McKenzie Method physical therapy',
  overviewImage: img.pilatesStudio,
  whyImage: img.cobbleHill,
  whyImageAlt: 'A Cynergy clinic',
  locationIds: ['chelsea', 'adpt'],
  overview: { eyebrow: 'Understanding the method', title: 'Learn to treat yourself.', text: 'Physiotherapist Robin McKenzie developed this method. It starts with a movement-based assessment and aims to reduce pain and restore function, often without medicine, surgery or costly imaging.' },
  causes: { title: 'What it treats', items: ['Back pain', 'Neck pain', 'Sciatica', 'Muscle spasms', 'Joint pain'] },
  approach: { items: ['A full movement-based assessment by a certified MDT practitioner', 'Finding the movement patterns that affect your pain', 'A custom home exercise plan', 'Checks and changes to your plan, with you at the center'] },
  benefits: {
    eyebrow: 'Why choose McKenzie?', title: 'Fewer visits, more confidence.', text: 'Every program is personal to your condition, lifestyle and goals.',
    items: [
      { title: 'Repeated movements', text: 'We use repeated movements to assess and manage your pain.' },
      { title: 'Patient education', text: 'You learn what is going on and how to manage it yourself.' },
      { title: 'Clear classification', text: 'Your problem is classified so treatment fits it. We add clinician help when you need it.' },
    ],
  },
  conditions: {
    eyebrow: 'Our certified therapists', title: 'Where to find McKenzie care.', text: 'Choose a clinic to see who offers it.', ariaLabel: 'McKenzie therapists',
    items: [
      { id: 'chelsea', title: 'Chelsea', what: 'Amira Murtazaeva, PT, DPT, CFSC, Director of Mentorship, is a certified McKenzie therapist.' },
      { id: 'adpt', title: 'ADPT by Cynergy', what: 'Michael Lazara, PT, DPT, CSCS, CFSC, C-PS, Clinical Director of ADPT by Cynergy, is a certified McKenzie therapist.' },
    ],
  },
};
