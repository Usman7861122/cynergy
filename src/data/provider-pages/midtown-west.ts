import type { ProviderBio } from '../provider-bios';
const U = 'https://cynergypt.com/wp-content/uploads/';
const up = (...f: string[]) => f.map((x) => U + x);

export const midtownWest: ProviderBio[] = [
  {
    slug: 'bridgit-shaefer', name: 'Bridgit Shaefer', credentials: 'PT, DPT', title: 'Clinical Director', locationId: 'midtown-west',
    image: U + '2026/01/IMG_3793-1-scaled-e1775765968189.jpg',
    intro: 'Bridgit leads our Midtown West clinic on West 57th Street and guides the team that cares for every patient there.',
    story: [], education: [], certifications: [], focus: [], interests: [],
  },
  {
    slug: 'ben-wichman', name: 'Ben Wichman', credentials: 'PT, DPT', title: 'Physical Therapist', locationId: 'midtown-west',
    image: U + '2026/05/Ben-Wichman-e1778257332360.jpg',
    intro: 'Ben helps people recover from injury and get back to the activities they enjoy, with a background in outpatient orthopedics and inpatient rehab.',
    story: [
      'Ben earned a degree in Health and Exercise Science from Syracuse University in 2022. He then completed his Doctor of Physical Therapy at the University of St. Augustine for Health Sciences in Miami, with clinical rotations in South Florida in outpatient orthopedic clinics and inpatient rehabilitation.',
      'His interest in physical therapy began in high school, when he received PT for a soccer injury. That experience drew him to helping people recover and return to what they love.',
      'He stays active with gym workouts, soccer, tennis and other sports, which keeps him motivated to promote movement and wellness in others.',
    ],
    education: ['Doctor of Physical Therapy, University of St. Augustine for Health Sciences', 'Health and Exercise Science, Syracuse University (2022)'],
    certifications: [], focus: ['Outpatient orthopedics', 'Inpatient rehabilitation'],
    interests: ['Soccer', 'Travel', 'Snowboarding', 'Trivia'],
    photos: up('2026/01/997b22d1-a9ea-4252-9be6-21a6c4c3fa76.jpg', '2026/01/1acb189e-618b-416c-918c-708ccf51c014-e1768579423208.jpg'),
  },
  {
    slug: 'efrat-marom', name: 'Efrat Marom', credentials: 'PT, DPT', title: 'Physical Therapist', locationId: 'midtown-west',
    image: U + '2026/04/IMG_4074-2-scaled-e1775765825569.jpg',
    intro: 'A former competitive swimmer, Efrat focuses on sports and orthopedic rehabilitation and builds each plan around your life and goals.',
    story: [
      'Efrat earned her Doctor of Physical Therapy from Baylor University. She grew up in Israel and moved to the United States as a student-athlete, balancing competitive swimming with school. She has swum since age five and has competed at national and international levels.',
      'Her interest in physical therapy began with injuries at age 14. As a patient, she learned how much good care matters, and how it feels to be sidelined and then return to what you love.',
      'She takes a collaborative, evidence-based approach. She works with elite athletes and with people who simply want to move without pain, and she aims to build a real connection with every patient.',
    ],
    education: ['Doctor of Physical Therapy, Baylor University'], certifications: [],
    focus: ['Sports rehabilitation', 'Orthopedic rehabilitation'],
    interests: ['Surfing', 'Skiing', 'Traveling', 'Running', 'Diving', 'Hiking'],
    photos: up('2026/03/IMG_3477-scaled-e1772646599879.jpg', '2026/03/IMG_3116.jpg', '2026/03/IMG_7170-scaled.jpg', '2026/03/IMG_7359-2-scaled.jpg', '2026/03/IMG_3279-scaled.jpg'),
  },
  {
    slug: 'eric-velazquez', name: 'Eric Velazquez', credentials: 'PT, DPT, CSCS', title: 'Physical Therapist', locationId: 'midtown-west',
    image: U + '2026/09/Erics-Headshot-scaled-e1789663850144.jpg',
    intro: 'Eric helps people move better, regain confidence and return to the activities they enjoy, with a focus on strength, running and climbing.',
    story: [
      'Eric is a physical therapist with a Doctor of Physical Therapy from Columbia University and a Certified Strength and Conditioning Specialist (CSCS) credential.',
      'His clinical interests include orthopedic rehabilitation, sports and performance, strength and conditioning, running, and climbing-related injuries.',
      'He combines evidence-based rehab with progressive exercise and individual strength training, to build both physical capacity and confidence in movement.',
      'Outside the clinic he enjoys indoor climbing, running, strength training, exploring New York City, travel, and trying new restaurants and coffee shops.',
    ],
    education: ['Doctor of Physical Therapy, Columbia University'], certifications: ['Certified Strength and Conditioning Specialist (CSCS)'],
    focus: ['Orthopedic rehabilitation', 'Sports and performance', 'Strength and conditioning', 'Running', 'Climbing-related injuries'],
    interests: ['Rock climbing', 'Running', 'Travel', 'MMA'],
    photos: up('2026/09/Eric-Lifestyle_1-scaled.jpeg', '2026/09/Eric-Lifestyle_2-scaled.jpeg', '2026/09/Eric-Lifestyle_3-scaled.jpeg', '2026/09/Eric-Lifestyle_4-scaled.jpeg'),
  },
  {
    slug: 'michaela-magpile', name: 'Michaela Magpile', credentials: 'PT, DPT', title: 'Physical Therapist', locationId: 'midtown-west',
    image: U + '2026/08/Screenshot-2026-08-31-at-10.18.08-AM.png',
    intro: 'Michaela is a physical therapist and dancer who focuses on patient-centered care, especially performing arts medicine, pelvic health and orthopedics.',
    story: [
      'Michaela grew up in San Diego. Her own experiences with scoliosis, hypermobility and dance injuries inspired her to become a physical therapist, and she still dances today.',
      'She earned her Doctor of Physical Therapy at Columbia University. She was part of the Columbia Dance Research Team, presented research at the APTA Combined Sections Meeting and the PAMA Symposium, and served as a peer advocate for survivors of gender- and power-based violence.',
      'Her last clinical rotation was with the Alvin Ailey American Dance Theater, where she treated dancers, students, musicians and faculty, and helped with injury prevention screenings and care at performances.',
      'She believes every patient should feel welcome and supported. She builds plans around your goals, whether that is recovering from an injury, managing pelvic health concerns, or moving with more confidence every day.',
    ],
    education: ['Doctor of Physical Therapy, Columbia University'], certifications: [],
    focus: ['Performing arts medicine', 'Pelvic health', 'Orthopedics'],
    interests: ['Dancing', 'Music', 'Literary fiction', 'Pilates'],
    photos: up('2026/08/0.jpg', '2026/08/2.jpg', '2026/08/3.jpg', '2026/08/4.jpg'),
  },
  {
    slug: 'zoe-kashin', name: 'Zoë Kashin', credentials: 'PT, DPT', title: 'Physical Therapist', locationId: 'midtown-west',
    image: U + '2026/01/s-blob-v1-IMAGE-F_wJFAXg_AI-e1768576441703.png',
    intro: 'Zoë’s dance and music background shapes her care, and she loves helping people return to the activities they love.',
    story: [
      'Zoë grew up in Indianapolis and moved to the East Coast for school. She earned both her undergraduate and doctoral degrees at Boston University.',
      'She trained in ballet, tap and modern dance, and still dances for fun. She has played music since childhood and still plays piano.',
      'Her background in dance and music shapes how she works as a physical therapist. She values working closely with patients toward their goals.',
    ],
    education: ['Doctorate in Physical Therapy, Boston University', 'Undergraduate degree, Boston University'], certifications: [], focus: [],
    interests: ['Dance', 'Concerts', 'Movies', 'Pilates', 'Museums'],
    photos: up('2026/01/s-blob-v1-IMAGE-R_uDBeFKoXM.png', '2026/01/s-blob-v1-IMAGE-pHTn7guyhcw.png', '2026/01/s-blob-v1-IMAGE-xzER2EsEN9Y.png', '2026/01/s-blob-v1-IMAGE-9ep85RMJlVQ-e1768576812121.png', '2026/01/s-blob-v1-IMAGE-lhD51XueCC4-e1768576857156.png'),
  },
];
