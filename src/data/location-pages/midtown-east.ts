// Source: https://cynergypt.com/locations/midtown-east/
import type { LocationDetails } from '../location-details';
import { img } from '../images';
const U = 'https://cynergypt.com/wp-content/uploads/';

export const midtownEast: LocationDetails = {
  id: 'midtown-east',
  eyebrow: 'Midtown East clinic',
  heroTitle: 'Cynergy Midtown East.',
  heroText:
    'Our Madison Avenue clinic is at the corner of 52nd Street. It is a large space with private treatment rooms and an open gym, home to both Cynergy Physical Therapy and Cynergy Upper Extremity.',
  heroImage: img.backTherapy,
  heroImageAlt: 'A physical therapist treating a patient’s back',
  about: {
    eyebrow: 'About this clinic',
    title: 'Room to treat, train and recover.',
    paragraphs: [
      'The Midtown East clinic is over 4,500 square feet. It has several private treatment rooms and a large open gym for strengthening, neuromuscular re-education, and gait and biomechanical training.',
      'Care is always one-on-one. Our team works with you to reach your best level of function, with Cynergy Upper Extremity in the same clinic for hand and arm care.',
    ],
    features: [
      'Over 4,500 square feet with private treatment rooms',
      'A large open gym for strength, gait and movement training',
      'Certified hand therapists who make custom orthoses for same-day splinting',
      'Upper Extremity clinic in the same space',
    ],
  },
  specialties: [
    { title: 'Hand Therapy & Splinting', text: 'Certified hand therapists make custom orthoses for same-day splinting needs.', href: '/injuries/upper-extremity-conditions-midtown-east/' },
    { title: 'Vestibular Rehabilitation', text: 'Treatment for dizziness, vertigo and balance problems.', href: '/what-we-treat/vestibular-dysfunction-midtown-east/' },
    { title: 'Functional Manual Therapy', text: 'Hands-on care to restore how your body moves.' },
    { title: 'Strength & Conditioning', text: 'Specialists who build strength and control as you recover.' },
    { title: 'Upper Extremity Lymphedema', text: 'Specialized care for swelling in the arm and hand.' },
    { title: 'Breast Cancer Rehab', text: 'Rehabilitation to help you move and recover after breast cancer treatment.' },
    { title: 'ART, FRC & SFMA', text: 'Active Release Technique, Functional Range Conditioning and Selective Functional Movement Assessment.' },
  ],
  team: [
    { name: 'Jessica Zaeri', credentials: 'PT, DPT', role: 'Clinical Director', image: U + '2025/10/Jessica-Zaeri.jpeg-e1760120311987.avif', href: '/biography/jessica-zaeri/', bio: 'Leads the Midtown East team and guides each patient’s care.' },
    { name: 'Melissa Lam', credentials: 'PT, DPT, SFMA', role: 'Regional Director', image: U + '2025/07/Melissa-Lam.jpeg.avif', href: '/biography/melissa-lam/' },
    { name: 'Christine M. Rodriguez', credentials: 'MS, OTR/L, CHT, CLT-UE', role: 'Regional Director, Upper Extremity', image: U + '2025/07/Christine-M.-Rodriguez.avif', href: '/biography/christine-m-rodriguez/' },
    { name: 'Gabrielle Schneider', credentials: 'PT, DPT, FRCms, SFMA, ART', role: 'Physical Therapist', image: U + '2025/07/Gabrielle-Schneider.jpeg', href: '/biography/gabrielle-schneider/' },
    { name: 'Jeffrey Hudson', credentials: 'PT, DPT, CSCS', role: 'Physical Therapist', image: U + '2025/08/Jeffrey-H.-06.jpg', href: '/biography/jeffrey-hudson/' },
    { name: 'Samantha Levine', credentials: 'PT, DPT, CSCS', role: 'Physical Therapist', image: U + '2026/03/Sam-Favorite--scaled-e1772825840888.jpg', href: '/biography/samantha-levine/' },
    { name: 'Isabelle Karman', credentials: 'MS, OTR/L', role: 'Occupational Therapist', image: U + '2025/10/IMG_3773-1-scaled.jpg-scaled.avif', href: '/biography/isabelle-karman/' },
    { name: 'Katherina Shen', credentials: 'MS, OTR/L', role: 'Occupational Therapist', image: U + '2026/03/IMG_3999-2-scaled-e1774611044593.jpg', href: '/biography/katherina-shen/' },
  ],
  gallery: [1, 2, 3, 4, 5, 6].map((n) => ({ src: U + `2025/07/Cynergy-MidtownEast-${n}.jpg.avif`, alt: 'Inside Cynergy Midtown East' })),
  faqs: [
    { q: 'Where is Cynergy Midtown East?', a: 'We are at 485 Madison Avenue, 8th Floor, New York, NY 10022, at the corner of 52nd Street and Madison Avenue.' },
    { q: 'How do I book a visit?', a: 'Call (212) 980-2963, or book online. New patients can send an appointment request, and returning patients can schedule online.' },
    { q: 'Can I get a splint on the same day?', a: 'Yes. Certified hand therapists in our Upper Extremity clinic make custom orthoses for same-day splinting.' },
    { q: 'Do you treat dizziness and balance problems here?', a: 'Yes. Vestibular rehabilitation is one of the specialties at Midtown East.' },
    { q: 'What is Cynergy Upper Extremity?', a: 'It is our hand and arm therapy service. It shares the Midtown East clinic with Cynergy Physical Therapy.' },
  ],
};
