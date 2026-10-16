// Extra content for each location page. Source: https://cynergypt.com/locations/midtown-west/
// Add another entry here (keyed by the location id) to build its page.
import { img } from '@/data/images';
import { midtownEast } from './location-pages/midtown-east';
import { chelsea } from './location-pages/chelsea';
import { cobbleHill } from './location-pages/cobble-hill';
import { adpt } from './location-pages/adpt';
import { wellnessDen } from './location-pages/wellness-den';

const U = 'https://cynergypt.com/wp-content/uploads/';

export type TeamMember = {
  name: string;
  credentials: string;
  role: string;
  image: string;
  href: string;
  /** One short, factual line from the provider's bio page (optional) */
  bio?: string;
};

export type LocationDetails = {
  /** Id from locations.ts */
  id: string;
  /** Small label above the page title */
  eyebrow: string;
  /** Shown in the "Clinic director" card when more than one person leads the clinic */
  directorLine?: string;
  heroTitle: string;
  heroText: string;
  heroImage: string;
  heroImageAlt: string;
  about: { eyebrow: string; title: string; paragraphs: string[]; features: string[] };
  specialties: { title: string; text: string; href?: string }[];
  team: TeamMember[];
  gallery: { src: string; alt: string }[];
  faqs: { q: string; a: string }[];
};

const midtownWest: LocationDetails = {
    id: 'midtown-west',
    eyebrow: 'Our flagship clinic',
    heroTitle: 'Cynergy Midtown West.',
    heroText:
      'Our flagship clinic sits on 57th Street, between 6th and 7th Avenues. You will find a warm front desk and licensed physical therapists who give you one-on-one, personal care.',
    heroImage: img.portrait,
    heroImageAlt: 'A physical therapist working one-on-one with a patient',
    about: {
      eyebrow: 'About this clinic',
      title: 'Our flagship clinic in the heart of Midtown.',
      paragraphs: [
        'Cynergy Midtown West is on 57th Street between 6th and 7th Avenues. When you walk in, our front desk team welcomes you, and your licensed physical therapist works with you one-on-one.',
        'The clinic has therapists for pelvic floor care, certified hand therapists, strength and conditioning specialists and orthopedic clinical specialists. Many patients also join our Pilates Bridge Program when therapy ends.',
      ],
      features: [
        'Pelvic floor therapists',
        'TRX suspension training equipment',
        'Certified hand therapists who make custom orthoses for same-day splinting',
        'Pilates Bridge Program: a step from therapy back to recreational exercise',
      ],
    },
    specialties: [
      { title: 'Pelvic Floor Therapy', text: 'Private, one-on-one care for pelvic pain, leaks and core support.', href: '/what-we-treat/pelvic-floor-health-midtown-west/' },
      { title: 'Hand Therapy & Splinting', text: 'Certified hand therapists make custom orthoses so you can leave with your splint the same day.', href: '/injuries/upper-extremity-conditions-midtown-west/' },
      { title: 'Strength & Conditioning', text: 'Specialists who build strength, speed and control, with TRX suspension training on site.' },
      { title: 'Orthopedic Clinical Specialists', text: 'Expert care for joint, muscle and bone problems, before and after surgery.' },
      { title: 'Pilates Bridge Program', text: 'A bridge from physical therapy back to recreational exercise.', href: '/pilates-midtown-west/' },
    ],
    team: [
      { name: 'Bridgit Shaefer', credentials: 'PT, DPT', role: 'Clinical Director', image: U + '2026/01/IMG_3793-1-scaled-e1775765968189.jpg', href: '/biography/bridgit-shaefer/', bio: 'Leads the Midtown West team and guides each patient’s care.' },
      { name: 'Ben Wichman', credentials: 'PT, DPT', role: 'Physical Therapist', image: U + '2026/05/Ben-Wichman-e1778257332360.jpg', href: '/biography/ben-wichman/', bio: 'Doctor of Physical Therapy from the University of St. Augustine, with training in outpatient orthopedic and inpatient rehab.' },
      { name: 'Efrat Marom', credentials: 'PT, DPT', role: 'Physical Therapist', image: U + '2026/04/IMG_4074-2-scaled-e1775765825569.jpg', href: '/biography/efrat-marom/', bio: 'Doctor of Physical Therapy from Baylor University. A former student-athlete swimmer who focuses on sports and orthopedic rehab.' },
      { name: 'Eric Velazquez', credentials: 'PT, DPT, CSCS', role: 'Physical Therapist', image: U + '2026/09/Erics-Headshot-scaled-e1789663850144.jpg', href: '/biography/eric-velazquez/', bio: 'Doctor of Physical Therapy from Columbia University. Focuses on orthopedic rehab, strength and conditioning, running and climbing injuries.' },
      { name: 'Michaela Magpile', credentials: 'PT, DPT', role: 'Physical Therapist', image: U + '2026/08/Screenshot-2026-08-31-at-10.18.08-AM.png', href: '/biography/michaela-magpile/', bio: 'Doctor of Physical Therapy from Columbia University. A dancer who focuses on performing arts medicine, pelvic health and orthopedics.' },
      { name: 'Zoë Kashin', credentials: 'PT, DPT', role: 'Physical Therapist', image: U + '2026/01/s-blob-v1-IMAGE-F_wJFAXg_AI-e1768576441703.png', href: '/biography/zoe-kashin/', bio: 'Doctor of Physical Therapy from Boston University. Her dance and music background shapes how she helps people return to what they love.' },
    ],
    gallery: [
      { src: U + '2025/07/MW1-1030x593-1.jpg.avif', alt: 'Cynergy Midtown West clinic space' },
      { src: U + '2025/07/MW2-1030x563-1.jpeg.avif', alt: 'Treatment area at Cynergy Midtown West' },
      { src: U + '2025/07/MW3-1030x687-1.jpg.avif', alt: 'Exercise area at Cynergy Midtown West' },
      { src: U + '2025/07/MW4-1030x600-1.jpeg.avif', alt: 'Cynergy Midtown West clinic interior' },
      { src: U + '2025/07/MW5-1030x687-1.jpg.avif', alt: 'Cynergy Midtown West training space' },
      { src: U + '2025/07/MW6-1030x542-1.jpeg.avif', alt: 'Cynergy Midtown West front area' },
    ],
    faqs: [
      { q: 'Where is Cynergy Midtown West?', a: 'We are at 119 West 57th Street, Suite 600, New York, NY 10019, on 57th Street between 6th and 7th Avenues.' },
      { q: 'How do I book a visit?', a: 'Call (212) 974-7252, or book online. New patients can send an appointment request, and returning patients can schedule online.' },
      { q: 'Can I get a splint on the same day?', a: 'Yes. Our certified hand therapists make custom orthoses at this clinic for same-day splinting.' },
      { q: 'Do you offer pelvic floor therapy here?', a: 'Yes. Midtown West has pelvic floor therapists who give private, one-on-one care.' },
      { q: 'What is the Pilates Bridge Program?', a: 'It helps you move from physical therapy back to recreational exercise, with the support of your therapist.' },
      { q: 'What is ADPT by Cynergy?', a: 'ADPT by Cynergy is our sports and performance clinic. It is in the same building at 119 West 57th Street, Suite 200.' },
    ],
};

export const locationDetails: LocationDetails[] = [midtownWest, midtownEast, chelsea, cobbleHill, adpt, wellnessDen];

export const detailsFor = (id: string) => locationDetails.find((d) => d.id === id);
