// Source: https://cynergypt.com/locations/adpt-by-cynergy/
import type { LocationDetails } from '../location-details';
const U = 'https://cynergypt.com/wp-content/uploads/';

export const adpt: LocationDetails = {
  id: 'adpt',
  eyebrow: 'Sports performance clinic',
  directorLine: 'Alvin Dike & Michael Lazara',
  heroTitle: 'ADPT by Cynergy.',
  heroText:
    'Our physical therapy and sports performance clinic. Work one-on-one with orthopedic and strength specialists in a 5,000-square-foot gym built to bridge rehab and performance training.',
  heroImage: U + '2025/07/oksanadoesntplay-16-1536x1024.jpg.webp',
  heroImageAlt: 'An athlete training at ADPT by Cynergy',
  about: {
    eyebrow: 'About this clinic',
    title: 'Where physical therapy meets performance.',
    paragraphs: [
      'ADPT gives you one-on-one care with Orthopedic Clinical Specialists (OCS) and Certified Strength and Conditioning Specialists (CSCS). It is made for athletes who want more from their recovery than typical physical therapy offers.',
      'We also offer early education and training for youth athletes, and we work with your doctors, athletic trainers, coaches and parents to keep everyone on the same plan. ADPT is in the same building as Cynergy Midtown West.',
    ],
    features: [
      'A 5,000-square-foot gym with turf, squat racks and a sled',
      'Keiser Functional Trainer, TRX and Shuttle T.N.T. equipment',
      'Private treatment rooms',
      'A locker room with showers',
    ],
  },
  specialties: [
    { title: 'Sports Physical Therapy', text: 'Sports injury care that links rehab and performance therapy.' },
    { title: 'Strength & Conditioning', text: 'Certified specialists who build strength, speed and control.' },
    { title: 'Orthopedic Clinical Specialists', text: 'Expert care for joint, muscle and bone problems.' },
    { title: 'Running Specialists', text: 'Biomechanical evaluation and training for runners.' },
    { title: 'Return to Play', text: 'A step-by-step plan to get you back to your sport with confidence.' },
    { title: 'SFMA & FMS Screening', text: 'Movement screens and injury reduction screening to find weak links before they become injuries.' },
    { title: 'Post-Surgical Rehabilitation', text: 'Guided recovery after surgery, from early motion to full strength.' },
    { title: 'Blood Flow Restriction', text: 'A training method that builds strength with lighter loads, often used after injury or surgery.' },
  ],
  team: [
    { name: 'Alvin Dike', credentials: 'PT, DPT, OCS, CSCS', role: 'Clinical Director', image: U + '2025/07/Alvin-Dike.jpeg.avif', href: '/biography/alvin-dike/', bio: 'Leads the ADPT team with Michael Lazara and guides each athlete’s care.' },
    { name: 'Michael Lazara', credentials: 'PT, DPT, CFSC, C-PS', role: 'Clinical Director', image: U + '2025/07/Michael-scaled-circle.jpg', href: '/biography/michael-lazara/' },
    { name: 'Franceska Mia-Mona Règnier', credentials: 'PT, DPT, CSCS', role: 'Physical Therapist', image: U + '2025/07/Frans-headshot-circle.jpg', href: '/biography/franceska-mia-mona-regnier-pt-dpt/' },
    { name: 'Jared Simpson', credentials: 'PT, DPT', role: 'Physical Therapist', image: U + '2025/10/headshot-scaled.jpg-scaled.avif', href: '/biography/jared-simpson/' },
    { name: 'Luciano Rua', credentials: 'PT, DPT, CSCS, ATC', role: 'Physical Therapist', image: U + '2025/07/Luca-Rua-circle.jpg', href: '/biography/luciano-rua/' },
  ],
  gallery: [14, 5, 4, 16, 11, 13].map((n) => ({ src: U + `2025/07/adpt-${String(n).padStart(2, '0')}-1030x687-1.jpg`, alt: 'Inside ADPT by Cynergy' })),
  faqs: [
    { q: 'Where is ADPT by Cynergy?', a: 'We are at 119 West 57th Street, Suite 200, New York, NY 10019, on the 2nd floor. Cynergy Midtown West is in the same building, in Suite 600.' },
    { q: 'How do I book a visit?', a: 'Call (212) 292-7145, or book online. New patients can send an appointment request, and returning patients can schedule online.' },
    { q: 'Who is ADPT for?', a: 'ADPT is for athletes who want to bridge physical therapy and performance training. We also offer early education and training for youth athletes.' },
    { q: 'What equipment is in the gym?', a: 'The 5,000-square-foot gym has a Keiser Functional Trainer, TRX equipment, Shuttle T.N.T., squat racks, turf and a sled. There are also private treatment rooms and a locker room with showers.' },
    { q: 'Do you work with my doctor or coach?', a: 'Yes. We coordinate care among physicians, athletic trainers, coaches and parents.' },
  ],
};
