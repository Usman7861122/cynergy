import type { ProviderBio } from '../provider-bios';
const U = 'https://cynergypt.com/wp-content/uploads/';
const up = (...f: string[]) => f.map((x) => U + x);

export const adpt: ProviderBio[] = [
  {
    slug: 'alvin-dike', name: 'Alvin Dike', credentials: 'PT, DPT, OCS, CSCS', title: 'Clinical Director, ADPT', locationId: 'adpt',
    image: U + '2025/07/Alvin-Dike.jpeg-1.avif',
    intro: 'Alvin co-leads ADPT by Cynergy. He focuses on manual physical therapy and sports rehab, and on helping athletes return to sport stronger after injury.',
    story: [
      'Alvin began at SUNY Potsdam, where he earned a B.S. in Biology, captained the men’s basketball team and was a Ronald E. McNair Scholar. Through the McNair program he co-authored two publications: one on measuring walking in the community for people with stroke, and one on constraint-induced movement therapy for a young adult with cerebral palsy.',
      'Drawn to working with people, he earned his Doctorate of Physical Therapy at Upstate Medical University in Syracuse.',
      'He focuses on manual physical therapy and sports rehab, and keeps learning through continuing education. After recovering from his own knee injury, he puts the focus on returning to sport stronger. He is an avid weightlifter and plays in basketball tournaments across New York City.',
    ],
    education: ['Doctorate of Physical Therapy, Upstate Medical University', 'B.S. in Biology, SUNY Potsdam (McNair Scholar)'],
    certifications: ['Orthopaedic Clinical Specialist (OCS)', 'Certified Strength and Conditioning Specialist (CSCS)', 'Active Release Techniques (ART)', 'Blood Flow Restriction Training and Rehabilitation', 'Functional Movement Screen (FMS)', 'SFMA', 'USA Weightlifting Level 1'],
    focus: ['Manual physical therapy', 'Sports rehabilitation'],
    interests: ['Traveling', 'Basketball', 'Weightlifting'],
    photos: up('2025/07/Alvin1-1-e1556544563889.jpeg.avif', '2025/07/Alvin2.jpeg.avif', '2025/07/Alvin3.jpeg.avif', '2025/07/alvin4.avif', '2025/07/Alvin-3-e1557940751264.jpg.avif', '2025/07/Alvin-4-e1557940715380.jpg.avif'),
  },
  {
    slug: 'michael-lazara', name: 'Michael Lazara', credentials: 'PT, DPT, CFSC, C-PS', title: 'Clinical Director, ADPT', locationId: 'adpt',
    image: U + '2025/07/Michael-scaled.jpg-scaled.webp',
    intro: 'Michael co-leads ADPT by Cynergy. He focuses on functional strength training and sports performance, and tailors care to each patient.',
    story: [
      'Michael is a New York State licensed physical therapist who focuses on functional strength training and sports performance. He treats acute injuries, recovery after surgery and long-term overuse problems, with care that fits each patient.',
      'His background includes a lot of hands-on manual therapy to reduce pain and improve mobility. He is a Champion Performance Specialist, which helps him assess and improve how people move, and a Certified Functional Strength Coach.',
      'He is also a longtime weightlifter who played high school basketball, baseball and tennis. That experience helps him guide clients on mobility, functional strength and power for sport and everyday life.',
    ],
    education: ['Doctorate in Physical Therapy, Stony Brook University', 'Exercise Physiology, SUNY Brockport'],
    certifications: ['Certified Functional Strength Coach (CFSC)', 'Champion Performance Specialist (C-PS)', 'Licensed physical therapist, New York State'],
    focus: ['Functional strength training', 'Sports performance', 'Acute, post-surgical and overuse injuries', 'Manual therapy', 'Power development'],
    interests: ['Hiking', 'Tennis', 'Baseball', 'Basketball', 'Weightlifting'],
    photos: up('2025/07/Michael-Lazara-1.webp', '2025/07/Michael-Lazara-2-scaled.webp', '2025/07/Michael-Lazara-3.webp', '2025/07/Michael-Lazara-4-scaled.webp'),
  },
  {
    slug: 'franceska-mia-mona-regnier-pt-dpt', name: 'Franceska Mia-Mona Règnier', credentials: 'PT, DPT, CSCS', title: 'Physical Therapist', locationId: 'adpt',
    image: U + '2025/07/Franceska-Mia-Mona-Regnier.webp',
    intro: 'Franceska is a former dancer and college basketball player who helps people who perform in sport and activity with evidence-based care.',
    story: [
      'Franceska has loved movement since she was three. She danced at the Broadway Dance Center in New York until 17, and played high school and college sports. At the University of Southern California she earned a B.S. in Human Biology as a Posse Scholar, played women’s basketball and assisted athletic trainers with several teams. This led her to physical therapy, especially care that supports performance.',
      'She trained in Columbia University’s DPT program, which covered neurology, pediatrics, sports and orthopedics. There she researched and co-wrote a conservative rehab plan for hip femoroacetabular impingement (FAI), co-led a Social Justice Coalition on health equity and mentored in the Summer Health Professions Education Program.',
      'She worked in acute care at University of Chicago Medicine in summer 2021, then did her last rotation at ADPT, where she was offered a full-time role. She describes herself as resilient and aims to help people who perform in sport and activity through evidence-based care.',
    ],
    education: ['Doctor of Physical Therapy, Columbia University', 'B.S. in Human Biology, University of Southern California (Posse Scholar)'],
    certifications: ['Certified Strength and Conditioning Specialist (CSCS)'],
    focus: ['Performance physical therapy', 'Sports and dance care', 'Orthopedics and neurology', 'Hip FAI rehabilitation'],
    interests: ['Basketball', 'Cooking', 'Meditation and mindfulness', 'Traveling', 'Trying new foods', 'Weightlifting', 'Working with kids'],
    photos: up('2025/07/Franceska-Mia.webp', '2025/07/Franceska-Mia-1.webp', '2025/07/Franceska-Mia-2.webp', '2025/07/Franceska-Mia-3.webp', '2025/07/Franceska-Mia-4.webp', '2025/07/Franceska-Mia-5.webp'),
  },
  {
    slug: 'jared-simpson', name: 'Jared Simpson', credentials: 'PT, DPT', title: 'Physical Therapist', locationId: 'adpt',
    image: U + '2025/10/headshot-scaled.jpg-scaled.avif',
    intro: 'Jared uses his sports background and clinical training to look at how you move, so he can reduce pain and build strength.',
    story: [
      'Jared grew up in Queens. His interest in physical therapy started early, partly because his mother is an occupational therapist and he saw rehab and patient care up close.',
      'He completed a combined 3+3 program at the University at Buffalo, earning a Bachelor’s in Exercise Science and a Doctorate of Physical Therapy.',
      'He played basketball and ran track, and recently took up weightlifting. He draws on his athletic experience and clinical training to assess how movement works in a sport. His goals are to reduce pain, improve mobility and functional strength, and help you return to a better quality of life.',
    ],
    education: ['Doctorate of Physical Therapy, University at Buffalo', 'Bachelor’s in Exercise Science, University at Buffalo'],
    certifications: [], focus: ['Sport-specific movement', 'Pain reduction', 'Mobility and functional strength'],
    interests: ['Weightlifting', 'Basketball', 'Traveling', 'Music'],
    photos: up('2025/10/Lifestyle-1.jpg', '2025/10/Lifestyle-2-scaled-1.jpg', '2025/10/Lifestyle-4-scaled-1.jpg'),
  },
  {
    slug: 'luciano-rua', name: 'Luciano Rua', credentials: 'PT, DPT, CSCS, ATC', title: 'Physical Therapist', locationId: 'adpt',
    image: U + '2025/07/Luca-Rua.jpg.webp',
    intro: 'A former gymnast and athletic trainer, Luciano helps athletes recover and return to sport.',
    story: [
      'Luciano began gymnastics at age three and competed for the Chelsea Piers team in New York until he was 15. He later took up strength training and bodybuilding, which he still does.',
      'He earned a Bachelor of Science in Athletic Training at SUNY Brockport, graduating with highest honors. In school he assessed and rehabbed athletes from women’s gymnastics to men’s ice hockey, and co-authored a research paper on total knee replacements.',
      'After graduating, he worked as an athletic trainer with high school and college athletes. He then completed physical therapy school at SUNY Downstate Health Sciences University, with training in acute care and outpatient clinics and a rotation at ADPT, where he was later hired full-time.',
    ],
    education: ['Physical therapy program, SUNY Downstate Health Sciences University', 'B.S. in Athletic Training, SUNY Brockport (Summa Cum Laude)'],
    certifications: ['Certified Strength and Conditioning Specialist (CSCS)', 'Athletic Trainer, Certified (ATC)'],
    focus: ['On-field injury assessment', 'Return-to-sport rehabilitation'],
    interests: ['Traveling', 'Hiking', 'Snowboarding', 'Time with friends and family'],
    photos: up('2025/07/Luciano-Rua-1.webp', '2025/07/Luciano-Rua-2.webp', '2025/07/Luciano-Rua-3.webp', '2025/07/Luciano-Rua-4.webp', '2025/07/Luciano-Rua-5.webp'),
  },
];
