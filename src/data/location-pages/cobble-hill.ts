// Source: https://cynergypt.com/locations/cobble-hill/
import type { LocationDetails } from '../location-details';
import { img } from '../images';
const U = 'https://cynergypt.com/wp-content/uploads/';

export const cobbleHill: LocationDetails = {
  id: 'cobble-hill',
  eyebrow: 'Our Brooklyn clinic',
  heroTitle: 'Cynergy Cobble Hill.',
  heroText:
    'Move well. Move strong. Our first Brooklyn clinic gives you one on one physical therapy for injury recovery, pain, sports training and pelvic floor care, in a calm, modern space.',
  heroImage: img.cobbleHill,
  heroImageAlt: 'Inside the Cynergy Cobble Hill clinic in Brooklyn',
  about: {
    eyebrow: 'About this clinic',
    title: 'Hands-on, movement-focused care in Brooklyn.',
    paragraphs: [
      'Cobble Hill is our first Brooklyn clinic. Every session is with your own physical therapist, who combines hands-on care, strength training and movement retraining.',
      'It is a short walk from the Bergen Street F/G station, and close to the Hoyt-Schermerhorn Street, Borough Hall and Jay Street-MetroTech stations. We welcome patients from Cobble Hill, Carroll Gardens, Boerum Hill, Brooklyn Heights and Downtown Brooklyn.',
    ],
    features: [
      'One on one sessions with your own physical therapist',
      'Pelvic floor therapy for all genders and life stages, in a private, trauma-informed setting',
      'Sports performance and running specialists',
      'A calm, modern clinic near Bergen Street (F/G)',
    ],
  },
  specialties: [
    { title: 'Orthopedic Care', text: 'Back and neck pain, shoulder, hip and knee injuries, and care after surgery.' },
    { title: 'Sports Performance', text: 'Recover from sports injuries, build strength and return to running, lifting and sport.' },
    { title: 'Pelvic Floor Therapy', text: 'Pelvic pain, bladder and bowel concerns, pregnancy and postpartum recovery, and core stability.', href: '/what-we-treat/pelvic-floor-health-cobble-hill/' },
    { title: 'Running Specialists', text: 'Movement checks and training for runners of every level.' },
    { title: 'SFMA & FMS', text: 'Selective Functional Movement Assessment and Functional Movement Screen to find what limits your movement.' },
    { title: 'Blood Flow Restriction', text: 'A training method that builds strength with lighter loads, often used after injury or surgery.' },
  ],
  team: [
    { name: 'Chivonne Henriques', credentials: 'PT, DPT, OCS', role: 'Clinical Director', image: U + '2025/07/Chivonne-Henriques.jpeg-1.avif', href: '/biography/chivonne-henriques/', bio: 'Leads the Cobble Hill team and guides each patient’s care.' },
    { name: 'Karina Sitchon', credentials: 'PT, DPT', role: 'Assistant Clinical Director', image: U + '2025/10/Karina-S-scaled.jpg-scaled.avif', href: '/biography/karina-sitchon/' },
    { name: 'Christopher Draggon', credentials: 'PT, DPT, CSCS', role: 'Physical Therapist', image: U + '2026/01/ksksksksksksk-e1769185173176.jpg', href: '/biography/christopher-draggon/' },
    { name: 'Alyssa Bondi', credentials: 'PT, DPT', role: 'Physical Therapist', image: U + '2026/04/IMG_4124-e1776446057923.jpg', href: '/biography/alyssa-bondi/' },
    { name: 'Annalissa Hartsell', credentials: 'PT, DPT', role: 'Physical Therapist', image: U + '2026/05/5bd55b2f-39d9-406c-8a36-40ccb2872445-e1778257040434.webp', href: '/biography/annalissa-hartsell/' },
    { name: 'Dorothy Dong', credentials: 'PT, DPT', role: 'Physical Therapist', image: U + '2026/08/5.jpg', href: '/biography/dorothy-dong/' },
  ],
  gallery: [
    { src: U + '2026/06/Cobble-Hill_2026-2-scaled.jpg', alt: 'Cynergy Cobble Hill clinic space' },
    { src: U + '2026/06/Cobble-Hill_2026-scaled.jpg', alt: 'Treatment area at Cynergy Cobble Hill' },
    { src: U + '2026/06/Cobble-Hill_2026-3-scaled.jpg', alt: 'Cynergy Cobble Hill clinic interior' },
    { src: U + '2026/06/Cobble-Hill_2026-4-scaled.jpg', alt: 'Exercise area at Cynergy Cobble Hill' },
    { src: U + '2026/06/Cobble-Hill_2026-5-scaled.jpg', alt: 'Training space at Cynergy Cobble Hill' },
    { src: U + '2026/06/Cobble-Hill_2026-8-scaled.jpg', alt: 'Cynergy Cobble Hill front area' },
  ],
  faqs: [
    { q: 'Where is Cynergy Cobble Hill?', a: 'We are at 166 Smith Street, Brooklyn, NY 11201. It is a short walk from the Bergen Street F/G station.' },
    { q: 'How do I book a visit?', a: 'Call (718) 795-2744, or book online. New patients can send an appointment request, and returning patients can schedule online.' },
    { q: 'What happens at my first visit?', a: 'We do a full movement and injury assessment, explain your condition, make a personal treatment plan, start hands-on care and guided movement, and give you practical steps to use right away.' },
    { q: 'Do you offer pelvic floor therapy here?', a: 'Yes. We offer it for all genders and life stages, in a private, trauma-informed setting.' },
    { q: 'Which neighborhoods do you serve?', a: 'Cobble Hill, Carroll Gardens, Boerum Hill, Brooklyn Heights and Downtown Brooklyn.' },
  ],
};
