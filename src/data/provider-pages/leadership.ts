import type { ProviderBio } from '../provider-bios';
const U = 'https://cynergypt.com/wp-content/uploads/';
const up = (...f: string[]) => f.map((x) => U + x);

export const leadership: ProviderBio[] = [
  {
    slug: 'cynthia-gormezano', name: 'Cynthia Gormezano', credentials: 'PT, MPT', title: 'CEO & Founder',
    image: U + '2025/07/Cynthia-Gormezano.jpeg-e1750677287203-1.png',
    intro: 'Cynthia founded Cynergy and leads a team of physical, hand and pelvic floor therapists who give one on one care.',
    story: [
      'Cynthia began her studies at Hebrew University in Jerusalem, focusing on international policy. Back in New York she earned a B.A. in political science, then turned to physical therapy after finding that her strongest drive was working with people.',
      'She started as a staff physical therapist at Coler-Goldwater Hospital. In 2001 she founded a pediatric orthopedic PT clinic at St. Luke’s Roosevelt, and then created Cynergy Physical Therapy. She has treated orthopedic patients since 1997 and built her expertise in sports injuries and neck and back pain, with ongoing training in manual therapy.',
      'An endurance athlete, she supports the Leukemia and Lymphoma Society through fundraising and keynote speaking, takes part in cycling events, and is active with New York Road Runners.',
    ],
    education: ['Master of Physical Therapy, Nova Southeastern University', 'B.A. in Political Science, cum laude', 'International policy studies, Hebrew University of Jerusalem'],
    certifications: ['Licensed physical therapist', 'Member, American Physical Therapy Association'],
    focus: ['Orthopedic rehabilitation', 'Sports injury rehab', 'Neck and back pain', 'Endurance and competitive athletes', 'Manual therapy'],
    interests: ['Cycling', 'Triathlons', 'Hiking', 'Skiing'],
    photos: up('2025/07/Cynthia1-scaled.jpg-scaled.webp', '2025/07/Cynthia2-scaled.jpg-scaled.webp', '2025/07/Cynthia3-e1557942230700.jpg.avif'),
  },
];
