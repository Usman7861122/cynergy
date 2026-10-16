import type { ProviderBio } from '../provider-bios';
const U = 'https://cynergypt.com/wp-content/uploads/';
const up = (...f: string[]) => f.map((x) => U + x);

export const wellnessDen: ProviderBio[] = [
  {
    slug: 'laurence-agenor', name: 'Laurence Agénor', credentials: 'PT, DPT, CSCS', title: 'Clinical Director', locationId: 'wellness-den',
    image: U + '2025/07/Laurence-Agenor-scaled.avif',
    intro: 'Laurence leads The Wellness Den and designed its signature Pilates Reformer and Barre classes. She is also a dancer and dance teacher.',
    story: [
      'Laurence earned her Doctor of Physical Therapy from New York University. During PT school she also became a Certified Strength and Conditioning Specialist. She is listed as a dance specialist on Doctors for Dancers, an online network of health providers who serve the dance community.',
      'Before physical therapy, she taught elementary school at a charter school in Washington, D.C. Her love of teaching, movement and helping people heal led her to the profession.',
      'She takes a warm, collaborative, individual approach, working with each patient to reach their performance goals. She wants you to return to your activities and feel capable and confident beyond the clinic. Outside work, she dances and teaches dance, Pilates and Barre.',
    ],
    education: ['Doctor of Physical Therapy, New York University'],
    certifications: ['Certified Strength and Conditioning Specialist (CSCS), NSCA'],
    focus: ['Dance medicine', 'Sports performance', 'Women’s health and pelvic health', 'Orthopedics', 'Manual and visceral therapy'],
    interests: ['Dance', 'Pilates and Barre', 'Weightlifting', 'Photography', 'Yoga', 'Volunteering', 'Travel'],
    photos: up('2025/07/Laurence-Agenor-1.avif', '2025/07/Laurence-Agenor-2.avif', '2025/07/Laurence-Agenor-3.avif', '2025/07/Laurence-Agenor-4.avif', '2025/07/Laurence-Agenor-5.avif', '2025/07/Laurence-Agenor-6.avif'),
  },
  {
    slug: 'natalie-bravo', name: 'Natalie Bravo', credentials: 'PT, DPT, CSCS', title: 'Physical Therapist', locationId: 'wellness-den',
    image: U + '2025/07/Natalie-Bravo.avif',
    intro: 'Natalie is a bilingual (English and Spanish) physical therapist and Pilates instructor who promotes pelvic health awareness for all ages and genders.',
    story: [
      'Natalie is a bilingual Doctor of Physical Therapy who wants to widen access to physical therapy and improve how people experience rehab. She looks at both anatomy and physiology, to build plans that treat the mind and body together.',
      'Raised in Miami, she grew up in outdoor sports, which sparked her interest in exercise as a path to healing. At NYU she earned her strength and conditioning certification, became a Pilates instructor and developed a focus on the pelvic floor. Her rotations in acute care, orthopedics, sports, neurology and pelvic floor built a broad foundation.',
      'After moving to New York in 2020, a running-related hip injury of her own, which had a pelvic floor part, motivated her to teach women and athletes facing similar problems. She promotes pelvic health awareness across all ages, genders and minority groups.',
    ],
    education: ['Doctorate of Physical Therapy, New York University', 'Bachelor’s in Recreation and Sports Management, Florida International University'],
    certifications: ['Certified Strength and Conditioning Specialist (CSCS)', 'Pilates instructor', 'Herman and Wallace Pelvic Floor Level 1'],
    focus: ['Pelvic floor health', 'Orthopedics and sports', 'Movement-based rehab'],
    interests: ['Traveling', 'The beach', 'Time with friends and family', 'Live sports', 'Reading and writing', 'Movies'],
    photos: up('2025/07/Natalie-Bravo-1.avif', '2025/07/Natalie-Bravo-2.avif', '2025/07/Natalie-Bravo-3.webp', '2025/07/Natalie-Bravo-4.avif', '2025/07/Natalie-Bravo-5.webp', '2025/07/Natalie-Bravo-6.webp'),
  },
  {
    slug: 'sarah-shafir', name: 'Sarah Shafir', credentials: 'PT, DPT', title: 'Physical Therapist', locationId: 'wellness-den',
    image: U + '2026/01/00491C46-0636-4BD2-AB21-3CA01985AE26-1-scaled-e1768847244351.jpeg',
    intro: 'Sarah sees recovery through the mind-body connection, with a focus on strength, mobility and coordination. She speaks English, Russian and Hebrew.',
    story: [
      'Dr. Sarah Shafir believes that good rehab depends on understanding both how a person moves and the person themselves. Her care focuses on strength, mobility and coordination, so patients feel resilient and capable.',
      'She grew up playing sports, including gymnastics and volleyball. That early experience with many kinds of movement, along with her Mat Pilates background, shapes how she trains and treats patients today.',
      'She is committed to supporting young female athletes and to building safe, injury-free training environments. She speaks English, Russian and Hebrew.',
    ],
    education: ['Doctorate in Physical Therapy, NYU', 'Bachelor’s in Kinesiology, Penn State University'],
    certifications: [], focus: ['Strength, mobility and coordination', 'Mind-body rehabilitation', 'Young female athletes', 'Mat Pilates'],
    interests: ['Traveling', 'Trying new pizza spots in NYC', 'Weekend workout classes with friends'],
    photos: up('2026/01/1c454dca-5ecf-46d7-ad79-8f634ae46897.jpg', '2026/01/83478c9c-78bb-4f46-9fb8-c87ea4c75b19.jpg', '2026/01/e115219b-ae04-4624-a734-6d6222f1ab46.jpg', '2026/01/c5741305-5cc8-4c0e-a6cd-ad7e7361c071.jpg', '2026/01/0d711d42-6df1-427f-abbc-a9a34bde5fb8.jpg'),
  },
  {
    slug: 'nicole-felder', name: 'Nicole Felder', credentials: 'PT, DPT', title: 'Physical Therapist', locationId: 'wellness-den',
    image: U + '2026/04/Nicole-headshot.png',
    intro: 'Nicole is a physical therapist and Pilates instructor who treats orthopedic and pelvic health conditions, including before and after pregnancy.',
    story: [
      'Nicole earned her Doctorate in Physical Therapy at Georgia State University. She was born in New York and grew up in Atlanta.',
      'She looks at the whole patient, anatomy and physiology together, to build a plan that supports both body and mind.',
      'As a physical therapist and Pilates instructor, she combines evidence-based rehab with mindful movement and a patient-centered approach. She treats orthopedic and pelvic health conditions, including before and after pregnancy, and aims to make a safe, supportive space where patients feel understood and confident.',
    ],
    education: ['Doctorate in Physical Therapy, Georgia State University'], certifications: ['Pilates instructor'],
    focus: ['Orthopedic conditions', 'Pelvic health', 'Pre- and postnatal care'],
    interests: ['Time with family and friends', 'Hiking', 'Traveling', 'Exploring new restaurants and coffee shops'],
    photos: up('2026/04/IMG_1752-scaled.jpeg', '2026/04/IMG_2976-scaled.jpeg', '2026/04/IMG_7105.jpeg', '2026/04/IMG_9401-scaled.jpeg'),
  },
];
