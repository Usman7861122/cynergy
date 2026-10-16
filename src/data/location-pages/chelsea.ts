// Source: https://cynergypt.com/locations/chelsea/
import type { LocationDetails } from '../location-details';
const U = 'https://cynergypt.com/wp-content/uploads/';

export const chelsea: LocationDetails = {
  id: 'chelsea',
  eyebrow: 'Chelsea clinic',
  heroTitle: 'Cynergy Chelsea.',
  heroText:
    'Our Chelsea clinic is on 27th Street between 6th and 7th Avenues. It is a bright, calm space with a spacious open gym and modern equipment, built for sports medicine, rehab and injury prevention.',
  heroImage: U + '2025/07/chelsea-new-location-14-scaled.jpg-scaled.webp',
  heroImageAlt: 'Inside the Cynergy Chelsea clinic',
  about: {
    eyebrow: 'About this clinic',
    title: 'A bright space for rehab and performance.',
    paragraphs: [
      'Cynergy Chelsea has a bright, calm setting and a spacious open gym. We use modern equipment, including ultrasound-guided and electrical stimulation therapies.',
      'Our focus is sports medicine, rehabilitation, before and after surgery care, and injury prevention. Every plan is built around you, and we assess and reassess your progress over time.',
    ],
    features: [
      'Pelvic floor therapists',
      'SFMA specialists',
      'Graston Technique and instrument-assisted soft tissue tools',
      'Blood Flow Restriction (BFR) specialists and TRX training',
      'Certified hand therapists who make custom orthoses for same-day splinting',
    ],
  },
  specialties: [
    { title: 'Hand Therapy & Splinting', text: 'Certified hand therapists make custom orthoses for same-day splinting needs.', href: '/injuries/upper-extremity-conditions-chelsea/' },
    { title: 'Pelvic Floor Rehabilitation', text: 'Private, one-on-one care for pelvic pain, leaks and core support.', href: '/what-we-treat/pelvic-floor-health-chelsea/' },
    { title: 'The McKenzie Method (MDT)', text: 'An exercise-based method that helps you find the cause of pain and treat it yourself.', href: '/mckenzie-method-mdt-chelsea/' },
    { title: 'Dance Medicine', text: 'Care for dancers, built around the demands of movement and performance.' },
    { title: 'Hip Preservation', text: 'Specialists who help protect and strengthen the hip joint.' },
    { title: 'SFMA & FMS', text: 'Selective Functional Movement Assessment and Functional Movement Screen to find what limits your movement.' },
  ],
  team: [
    { name: 'Aaron Lentz', credentials: 'PT, DPT, SFMA', role: 'Clinical Director', image: U + '2025/07/Aaron-Lentz.jpeg.avif', href: '/biography/aaron-lentz/', bio: 'Leads the Chelsea team and guides each patient’s care.' },
    { name: 'Shereen Tan', credentials: 'PT, CHT', role: 'Regional Director', image: U + '2025/07/Shereen-Tan.jpeg.avif', href: '/biography/shereen-tan/' },
    { name: 'Amira Murtazaeva', credentials: 'PT, DPT, CFSC', role: 'Director of Mentorship', image: U + '2025/07/amira.jpg', href: '/biography/amira-murtazaeva/' },
    { name: 'Estella Maritza Mejia', credentials: 'PT, DPT', role: 'Physical Therapist', image: U + '2025/07/Estella-Maritza-Mejia-scaled.avif', href: '/biography/estella-maritza-mejia-dpt/' },
    { name: 'Kevin Yu', credentials: 'PT, DPT, BRM', role: 'Physical Therapist', image: U + '2025/07/Kevin-Yu.avif', href: '/biography/kevin-yu/' },
    { name: 'Jared Orwell', credentials: 'PT, DPT', role: 'Physical Therapist', image: U + '2026/04/Jared-O-2-e1776446144278.jpg', href: '/biography/jared-orwell/' },
    { name: 'Adeola Okediji', credentials: 'PT, DPT, CHT', role: 'Physical Therapist', image: U + '2026/04/img12.jpg', href: '/biography/adeola-okediji/' },
    { name: 'Katherina Shen', credentials: 'MS, OTR/L', role: 'Occupational Therapist', image: U + '2026/03/IMG_3999-2-scaled-e1774611044593.jpg', href: '/biography/katherina-shen/' },
  ],
  gallery: [
    { src: U + '2025/07/5-1-1030x700-1.jpg.avif', alt: 'Cynergy Chelsea clinic space' },
    { src: U + '2025/07/chelsea-new-location-14-scaled.jpg-scaled.webp', alt: 'Open gym at Cynergy Chelsea' },
    { src: U + '2025/07/chelsea-new-location-11-scaled.jpg-scaled.webp', alt: 'Treatment area at Cynergy Chelsea' },
    { src: U + '2025/07/chelsea-new-location-09-scaled.jpg-scaled.webp', alt: 'Cynergy Chelsea clinic interior' },
    { src: U + '2025/07/chelsea-new-location-07-scaled.jpg-scaled.webp', alt: 'Exercise equipment at Cynergy Chelsea' },
    { src: U + '2025/07/chelsea-new-location-06-scaled.jpg-scaled.webp', alt: 'Cynergy Chelsea training space' },
  ],
  faqs: [
    { q: 'Where is Cynergy Chelsea?', a: 'We are at 135 West 27th Street, 2nd Floor, New York, NY 10001, on 27th Street between 6th and 7th Avenues.' },
    { q: 'How do I book a visit?', a: 'Call (212) 255-8080, or book online. New patients can send an appointment request, and returning patients can schedule online.' },
    { q: 'Do you offer the McKenzie Method here?', a: 'Yes. The McKenzie Method (MDT) is one of the specialties at Chelsea.' },
    { q: 'Do you offer pelvic floor therapy here?', a: 'Yes. Chelsea has pelvic floor therapists who give private, one-on-one care.' },
    { q: 'Can I get a splint on the same day?', a: 'Yes. Our certified hand therapists make custom orthoses at this clinic for same-day splinting.' },
  ],
};
