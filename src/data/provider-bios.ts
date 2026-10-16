// One entry per provider bio page: /biography/<slug>/
// Source: the provider's page on https://cynergypt.com/biography/<slug>/
// Add a new entry here to build another bio page. Paragraphs are paraphrased from the live bio.
export type ProviderBio = {
  slug: string;
  name: string;
  credentials: string;
  /** Job title, e.g. "Clinical Director" */
  title: string;
  /** Id from locations.ts */
  /** Main clinic. Leave out for people who are not tied to one clinic. */
  locationId?: string;
  /** Other clinics where this provider also sees patients */
  alsoAt?: string[];
  image: string;
  /** One or two sentences for the top of the page */
  intro: string;
  story: string[];
  education: string[];
  certifications: string[];
  focus: string[];
  interests: string[];
  /** Lifestyle photos from the live bio page (optional) */
  photos?: string[];
};

import { midtownWest } from './provider-pages/midtown-west';
import { midtownEast } from './provider-pages/midtown-east';
import { chelsea } from './provider-pages/chelsea';
import { cobbleHill } from './provider-pages/cobble-hill';
import { adpt } from './provider-pages/adpt';
import { wellnessDen } from './provider-pages/wellness-den';
import { leadership } from './provider-pages/leadership';

const U = 'https://cynergypt.com/wp-content/uploads/';

export const providerBios: ProviderBio[] = [
  {
    slug: 'aaron-lentz',
    name: 'Aaron Lentz',
    credentials: 'PT, DPT, SFMA',
    title: 'Clinical Director',
    locationId: 'chelsea',
    image: U + '2025/07/Aaron-Lentz.jpeg.avif',
    intro:
      'Aaron leads our Chelsea clinic. He builds interactive treatment plans that use strengthening, movement training and hands-on care, and he knows the patient side of recovery first-hand.',
    story: [
      'Aaron first became interested in physical therapy after he tore his ACL and medial meniscus playing high school soccer in Providence. As a patient, he wanted to understand his surgery and what recovery would look like. He also saw how much a strong relationship with his physical therapist helped him heal.',
      'He played many sports growing up, including soccer, basketball, volleyball, baseball, tennis, swimming, and track and field. His grandfather was an orthopaedic surgeon who guided him through injuries. Aaron admired how his grandfather used his hands to help people, and he chose to follow that path.',
      'He graduated from Temple University in Philadelphia with a B.S. in Kinesiology in 2014 and worked as a physical therapist aide for a year. He then moved to New York and earned his Doctorate in Physical Therapy at Long Island University Brooklyn, where his clinical work included outpatient and inpatient settings and many kinds of patients.',
      'Aaron enjoys making treatment plans that work and keep you involved. He uses neuromuscular re-education, strengthening, functional movement training and hands-on manual therapy.',
    ],
    education: ['Doctorate in Physical Therapy, Long Island University Brooklyn', 'B.S. in Kinesiology, Temple University (2014)'],
    certifications: ['SFMA (Selective Functional Movement Assessment)', 'HSS Rehab Hip Preservation Certified Clinician'],
    focus: ['Neuromuscular re-education', 'Strengthening', 'Functional movement training', 'Manual therapy'],
    interests: ['Sports', 'Food & cooking', 'The beach', 'Marvel & DC movies', 'Pick-up games', 'Bike rides', 'Travel'],
    photos: ['2025/07/Aaron3.jpg.avif', '2025/07/Aaron1-e1557267531334.jpg.avif', '2025/07/Aaron2-e1557267562150.jpeg.avif'].map((x) => U + x),
  },
  ...midtownWest,
  ...midtownEast,
  ...chelsea,
  ...cobbleHill,
  ...adpt,
  ...wellnessDen,
  ...leadership,
];

export const bioFor = (slug: string) => providerBios.find((b) => b.slug === slug);
