// Source: https://cynergypt.com/locations/the-wellness-den-by-cynergy/
import type { LocationDetails } from '../location-details';
import { img } from '../images';
const U = 'https://cynergypt.com/wp-content/uploads/';

export const wellnessDen: LocationDetails = {
  id: 'wellness-den',
  eyebrow: 'Heal well. Move well. Live well.',
  heroTitle: 'The Wellness Den by Cynergy.',
  heroText:
    'An integrated movement and wellness space on the Upper East Side. It brings together physical therapy, pelvic health, dance medicine, Pilates and Barre, to bridge physical therapy and group fitness.',
  heroImage: img.wellnessDen,
  heroImageAlt: 'A therapist guiding a Pilates reformer class at The Wellness Den',
  about: {
    eyebrow: 'About this clinic',
    title: 'Therapy and movement, under one roof.',
    paragraphs: [
      'The Wellness Den is made to support healing and self-confidence. You can work one-on-one with a physical therapist toward your own goals, or join Pilates Reformer and Barre classes that are led mainly by physical therapists.',
      'When rehab ends, you can step straight into group classes. The signature Pilates Reformer and Barre classes were designed by Dr. Laurence Agénor.',
    ],
    features: [
      'Pelvic floor physical therapy',
      'Prenatal and postpartum care',
      'Group Pilates Reformer and Barre classes',
      'Private Pilates Reformer sessions',
    ],
  },
  specialties: [
    { title: 'Pelvic Floor Therapy', text: 'Private, one-on-one care for pelvic pain, leaks and core support.', href: '/what-we-treat/pelvic-floor-health-wellness-den/' },
    { title: 'Prenatal & Postpartum Care', text: 'Care for the changes and new aches of pregnancy and the months after birth.', href: '/pre-and-postnatal-physical-therapy-wellness-den/' },
    { title: 'Pilates Reformer & Barre', text: 'Group classes and private sessions, mainly led by physical therapists.', href: '/pilates-wellness-den/' },
    { title: 'Dance Medicine', text: 'Care for dancers, built around the demands of movement and performance.' },
    { title: 'Performance Training', text: 'Training that builds strength and control for the activities you love.' },
    { title: 'Rehab to Group Fitness', text: 'A smooth move from therapy into group classes.' },
  ],
  team: [
    { name: 'Laurence Agénor', credentials: 'PT, DPT, CSCS', role: 'Clinical Director', image: U + '2025/07/Laurence-Agenor-scaled.avif', href: '/biography/laurence-agenor/', bio: 'Leads The Wellness Den team and designed its signature Pilates Reformer and Barre classes.' },
    { name: 'Natalie Bravo', credentials: 'PT, DPT, CSCS', role: 'Physical Therapist', image: U + '2025/07/Natalie-Bravo.avif', href: '/biography/natalie-bravo/' },
    { name: 'Sarah Shafir', credentials: 'PT, DPT', role: 'Physical Therapist', image: U + '2026/01/00491C46-0636-4BD2-AB21-3CA01985AE26-1-scaled-e1768847244351.jpeg', href: '/biography/sarah-shafir/' },
    { name: 'Nicole Felder', credentials: 'PT, DPT', role: 'Physical Therapist', image: U + '2026/04/Nicole-headshot.png', href: '/biography/nicole-felder/' },
  ],
  gallery: [
    { src: img.wellnessDen, alt: 'A Pilates reformer class at The Wellness Den' },
    { src: img.pilatesStudio, alt: 'The bright Pilates studio at The Wellness Den' },
    { src: img.reformer, alt: 'A woman exercising on a Pilates reformer' },
  ],
  faqs: [
    { q: 'Where is The Wellness Den?', a: 'We are at 177 East 87th Street, Suite 206, New York, NY 10128, on the Upper East Side.' },
    { q: 'How do I book a visit?', a: 'Call (212) 292-7117, or book online. New patients can send an appointment request, and returning patients can schedule online.' },
    { q: 'Where can I see the class schedule?', a: 'You can see the class schedule and buy class packs online.' },
    { q: 'Who leads the classes?', a: 'The Pilates Reformer and Barre classes are led mainly by physical therapists. The signature classes were designed by Dr. Laurence Agénor.' },
    { q: 'Can I move from physical therapy into classes?', a: 'Yes. The Wellness Den is made to bridge physical therapy and group fitness, so you can step into classes when your rehab ends.' },
  ],
};
