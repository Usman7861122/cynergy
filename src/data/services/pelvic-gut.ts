import type { Service } from './types';

const U = 'https://cynergypt.com/wp-content/uploads/';

// Content comes from https://cynergypt.com/pelvic-floor-gut-health-nyc/ (shortened and simplified).
export const pelvicGut: Service = {
  dir: '',
  group: 'offer',
  slug: 'pelvic-floor-gut-health-nyc',
  label: 'Pelvic Floor – Digestive Health',
  careName: 'Pelvic floor therapy for gut health',
  heroTitle: 'Pelvic floor therapy for bowel and gut health in New York City.',
  seoTitle: 'Pelvic Floor Therapy for Bowel and Gut Health in New York City',
  heroText: 'Constipation, bloating and trouble emptying your bowels can be linked to the pelvic floor. At Cynergy, our therapists look at the whole body to find the cause and restore muscle coordination.',
  image: U + '2025/10/891cd628-6c2d-487d-95e8-1be43e04abb2.jpg',
  imageAlt: 'Pelvic floor health',
  overviewImage: U + '2025/07/Pelvic-Floor-Connections.png',
  whyImage: U + '2026/01/DSCF3135-scaled.jpeg',
  whyImageAlt: 'A therapist guiding a quad and glute exercise on the Pilates reformer',
  locationIds: ['midtown-west', 'chelsea', 'wellness-den'],
  overview: { eyebrow: 'The pelvic floor’s role', title: 'A sling of muscles that does a lot.', text: 'The pelvic floor supports pelvic stability, the bladder, rectum and uterus, control of bowel movements, and sexual function. When these muscles are too tight, too weak or not working together, they can cause digestive problems.' },
  causes: { title: 'Common causes', items: ['Childbirth strain or injury', 'Straining from constipation or heavy lifting', 'Surgery or pelvic radiation', 'Poor posture or movement patterns', 'Nerve damage, such as from diabetes', 'Stress or anxiety'] },
  approach: { items: ['A specialized assessment of how the muscles work', 'One on one treatment', 'Targeted exercises', 'Manual therapy', 'Biofeedback'] },
  benefits: {
    eyebrow: 'Benefits', title: 'Better control, less pressure.', text: 'Therapy aims to improve how your pelvic floor works.',
    items: [
      { title: 'Coordination and control', text: 'Improves how the muscles work together.' },
      { title: 'Less pressure and tension', text: 'Relieves pelvic pressure and tension.' },
      { title: 'Healthier habits', text: 'Helps restore normal bowel and bladder habits, and may reduce urgency, hesitancy and leaks.' },
    ],
  },
  conditions: {
    eyebrow: 'Gut and bladder health', title: 'What we help with.', text: 'Choose a topic to learn more.', ariaLabel: 'Gut health topics',
    items: [
      { id: 'constipation', title: 'Constipation', what: 'Pelvic floor therapy can be very effective for chronic constipation, especially when the muscles do not relax properly during a bowel movement (pelvic floor dyssynergia).', how: 'We retrain these muscles to support more complete, comfortable bowel movements.' },
      { id: 'ibs', title: 'IBS', what: 'Therapy does not directly treat IBS, which can have many causes. It addresses the muscle and joint part that can add to symptoms such as constipation, bloating, incomplete emptying and pelvic pressure.' },
      { id: 'bladder', title: 'Bladder Symptoms', what: 'Pelvic floor muscle problems can also affect the bladder. They are linked to overactive bladder, interstitial cystitis and tight pelvic floor muscles.', facts: { label: 'Common signs', items: ['Urgency and frequency', 'Trouble starting to urinate', 'Leakage', 'Pelvic pressure or discomfort when the bladder is full', 'Waking at night to urinate'] } },
    ],
  },
  faqs: [
    { q: 'Is pelvic floor therapy helpful for constipation?', a: 'Yes. It can be very effective for chronic constipation, especially pelvic floor dyssynergia. We use exercises, manual therapy and biofeedback.' },
    { q: 'Will this help if I have IBS?', a: 'It can be a valuable part of managing IBS symptoms, though it does not treat IBS directly. Many patients report better bowel function, less bloating and a better quality of life.' },
    { q: 'How long will I need treatment?', a: 'It varies. Some people improve in a few sessions, and complex or chronic cases may take several months. On average, people attend 6–12 sessions, usually once a week.' },
  ],
};
