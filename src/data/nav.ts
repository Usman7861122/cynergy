import { img } from './images';

export type Link = { label: string; href: string; desc?: string; external?: boolean };
export type Group = { id: string; label: string; desc?: string; href?: string; links: Link[] };

export type Mega =
  | {
      kind: 'rail';
      railTitle: string;
      groups: Group[];
      footer?: { text: string; sub?: string; cta: Link };
      promo?: { image: string; title: string; text: string; cta: Link };
    }
  | { kind: 'about'; blurbTitle: string; blurb: string; cta: Link; heading: string; links: Link[] }
  | { kind: 'providers' }
  | { kind: 'posts'; links: Link[] }
  | { kind: 'locations' };

export type NavItem = { label: string; href: string; mega?: Mega };

// Structure follows the mega menu on the current cynergypt.com.
export const mainNav: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Services',
    href: '/services/',
    mega: {
      kind: 'rail',
      railTitle: 'Services',
      groups: [
        {
          id: 'treat',
          label: 'What We Treat',
          desc: 'Pain, injuries and conditions we care for',
          href: '/what-we-treat/',
          links: [
            { label: 'Back & Spine', href: '/what-we-treat/back-pain/' },
            { label: 'Foot & Ankle', href: '/what-we-treat/foot-ankle-pain/' },
            { label: 'Hip', href: '/what-we-treat/hip-pain/' },
            { label: 'Knee', href: '/what-we-treat/knee-pain/' },
            { label: 'Vestibular Dysfunction', href: '/what-we-treat/vestibular-dysfunction/' },
            { label: 'Upper Extremity', href: '/injuries/upper-extremity-conditions/' },
            { label: 'Hand Therapy', href: '/what-we-treat/hand-therapy/' },
            { label: 'Pelvic Floor Health', href: '/what-we-treat/pelvic-floor-health/' },
            { label: 'TMJ/TMD', href: '/what-we-treat/temporomandibular-disorder/' },
            { label: 'Chronic Pain/Pain Management', href: '/what-we-treat/chronic-pain/' },
          ],
        },
        {
          id: 'offer',
          label: 'What We Offer',
          desc: 'Specialty therapies and programs',
          href: '/what-we-offer/',
          links: [
            { label: 'Physical Therapy for Musicians', href: '/therapy-for-musicians/' },
            { label: 'Pilates', href: '/pilates/' },
            { label: 'Pre and Postnatal Physical Therapy', href: '/pre-and-postnatal-physical-therapy/' },
            { label: 'Osteoporosis Strength Training in New York City', href: '/strength-training-for-osteoporosis/' },
            { label: 'The McKenzie Method®', href: '/mckenzie-method-mdt/' },
            { label: 'Pelvic Floor Therapy – Digestive Health', href: '/pelvic-floor-gut-health-nyc/' },
            { label: 'Male Pelvic Health Physical Therapy', href: '/male-pelvic-health-nyc/' },
          ],
        },
      ],
      footer: {
        text: 'Looking for something else?',
        sub: 'See every service we offer across our six locations.',
        cta: { label: 'View More Services', href: '/services/' },
      },
    },
  },
  {
    label: 'Sports',
    href: '/sports-physical-therapy/',
    mega: {
      kind: 'rail',
      railTitle: 'Sports',
      groups: [
        {
          id: 'medicine',
          label: 'Sports Medicine',
          desc: 'Injury care and return to play',
          href: '/sports-physical-therapy/',
          links: [
            { label: 'Sports Medicine', href: '/sports-physical-therapy/' },
            { label: 'Dance Medicine', href: '/dance-medicine/' },
            { label: 'Female Athlete Triad Care', href: '/female-athlete-triad-care/' },
            { label: 'Kettlebell Training', href: '/kettlebell-training/' },
            { label: 'Running & Gait Analysis', href: '/running-gait-analysis-nyc/' },
            { label: 'Return-to-Play (RTP) Physical Therapy', href: '/return-to-play/' },
            { label: 'Tindeq Load Readings', href: '/tindeq-load-readings/' },
            { label: "Women's Sports Performance Program", href: '/womens-sports-performance-program/' },
          ],
        },
        {
          id: 'performance',
          label: 'Sports Performance',
          desc: 'Strength and training for every age',
          href: '/sports-performance-training/',
          links: [
            { label: 'Executive Edge Program', href: '/adult-athletic-development/' },
            { label: 'Sports Performance Training', href: '/sports-performance-training/' },
            { label: 'Youth Athletic Development', href: '/youth-athletic-development/' },
          ],
        },
      ],
      promo: {
        image: img.sports,
        title: 'Train. Recover. Perform.',
        text: 'Care for athletes at every level.',
        cta: { label: 'Explore sports care', href: '/sports-physical-therapy/' },
      },
    },
  },
  {
    label: 'At Cynergy',
    href: '/about/',
    mega: {
      kind: 'about',
      blurbTitle: 'Our style of care',
      blurb:
        'Professional, energetic and compassionate. We treat the whole person, one on one, with warmth and humor.',
      cta: { label: 'More About Cynergy', href: '/about/' },
      heading: 'Learn more',
      links: [
        { label: 'Frequently Asked Questions', href: '/faq/', desc: 'Quick answers before your first visit' },
        { label: 'Patient Reviews', href: '/patient-testimonials/', desc: 'What our patients say about us' },
        { label: 'Mentorship At Cynergy', href: '/mentorship-at-cynergy/', desc: 'How we train the next generation' },
      ],
    },
  },
  { label: 'Providers', href: '/provider/', mega: { kind: 'providers' } },
  {
    label: 'Media',
    href: '/media/',
    mega: {
      kind: 'posts',
      links: [
        { label: 'Wrist Pain From Typing (Thumb Side): Causes and Relief in Chelsea, NYC', href: '/therapist-blogs/wrist-pain-from-typing-thumb-side-chelsea/' },
        { label: 'Ergonomics and Hand Therapy for Computer Workers in Chelsea', href: '/therapist-blogs/ergonomics-and-hand-therapy-for-computer-workers-chelsea/' },
        { label: 'Hand Occupational Therapy After Tendon Repair in Chelsea', href: '/therapist-blogs/hand-occupational-therapy-after-tendon-repair-chelsea-nyc/' },
        { label: 'Best Physical Therapists in NYC: What Sets Cynergy Apart', href: '/therapist-blogs/best-physical-therapists-in-nyc-what-sets-cynergy-apart/' },
        { label: 'Osteoporosis Strength Training in NYC', href: '/therapist-blogs/osteoporosis-strength-training-in-nyc-building-bone-density-and-preventing-injury/' },
        { label: 'Pre and Postnatal Physical Therapy in NYC', href: '/therapist-blogs/pre-and-postnatal-physical-therapy-in-nyc-supporting-your-body-through-pregnancy-and-beyond/' },
        { label: 'Why Am I So Dizzy? Vertigo and How Physical Therapy Can Help', href: '/therapist-blogs/why-am-i-so-dizzy-common-causes-of-vertigo-and-how-physical-therapy-can-help-in-nyc/' },
        { label: 'Pelvic Floor Physical Therapy in New York City', href: '/therapist-blogs/pelvic-floor-physical-therapy-in-new-york-city/' },
      ],
    },
  },
  { label: 'Locations', href: '/locations/', mega: { kind: 'locations' } },
  { label: 'Contact Us', href: '/contact-us/' },
  { label: 'Careers', href: '/careers-2/' },
];

export const utilityRight: Link[] = [
  { label: 'Returning Patients', href: 'https://scheduling.go.promptemr.com', external: true },
];

// The three top buttons use the links from the live site.
export const payBill: Link = { label: 'Pay Bill Online', href: 'https://cynergypt.com/pay-bill-online/', external: true };

export const newPatients: Link = { label: 'New Patients', href: 'https://cynergypt.com/appointment/', external: true };

export const socials = [
  { label: 'Facebook', href: 'https://www.facebook.com/Cynergy-Physical-Therapy-NYC-109463420552253' },
  { label: 'YouTube', href: 'https://www.youtube.com/channel/UC9nCJUxpGMy-FwlPYkNGxwg' },
  { label: 'Instagram', href: 'https://www.instagram.com/cynergyptnyc/' },
];
