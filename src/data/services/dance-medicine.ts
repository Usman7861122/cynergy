import type { Service } from './types';

const U = 'https://cynergypt.com/wp-content/uploads/';

// Content comes from https://cynergypt.com/dance-medicine/ (shortened and simplified).
export const danceMedicine: Service = {
  dir: '',
  group: 'sports',
  locationIds: [],
  slug: 'dance-medicine',
  label: 'Dance Medicine',
  careName: 'Dance medicine',
  heroTitle: 'Dance medicine in New York City.',
  seoTitle: 'Dance Medicine Physical Therapy in New York City',
  heroText: 'Dance medicine is a part of sports medicine made for dancers and performing artists. Our clinicians understand what dance asks of your body and help you get back to the studio and the stage.',
  image: '/images/sports/dance-medicine-1.jpg',
  imageAlt: 'A dancer working with a physical therapist',
  overviewImage: U + '2025/12/image3.jpeg',
  whyImage: '/images/sports/dance-medicine-2.jpg',
  whyImageAlt: 'A former dancer, now a Cynergy therapist',
  overview: { eyebrow: 'Who can benefit', title: 'Care for dancers of every level.', text: 'Professional performers, people getting ready for a first show and dance students can all benefit. Every program is built around you, your style and your goals.' },
  causes: { title: 'Common dance injuries', items: ['Hip pain and labral tears', 'Muscle strains', 'Kneecap pain', 'Ankle sprains', 'Bunions', 'Stress fractures', 'Tendon overuse'] },
  approach: { items: ['Manual therapy and mobility work', 'Strength, balance and endurance training', 'Movement and landing mechanics', 'Slow return to class and performance'] },
  benefits: {
    eyebrow: 'Meet your team', title: 'Therapists who know dance.', text: 'Many of our dance clinicians are former dancers themselves.',
    items: [
      { title: 'Laurence Agénor', text: 'PT, DPT, CSCS. A former dancer who works in performance, dance medicine and Pilates with a holistic approach.' },
      { title: 'Kevin Yu', text: 'PT, DPT, BRM. More than ten years of dance training and performing, including hip hop and street styles.' },
      { title: 'Zoë Kashin and Annalissa Hartsell', text: 'Zoë is a former pre-professional ballet dancer who helps dancers return to pointe. Annalissa is a former professional dancer and choreographer.' },
    ],
  },
  conditions: {
    eyebrow: 'What we treat', title: 'Common dance injuries, explained.', text: 'Choose an injury to see how we help.', ariaLabel: 'Dance injuries',
    items: [
      { id: 'hip', title: 'Hip pain', what: 'Labral tears, impingement and snapping hip can limit turnout and extension.', how: 'We work on hip control, strength and how you move through your range.' },
      { id: 'strains', title: 'Muscle strains', what: 'A strain is an overstretched or torn muscle, graded from mild to severe.', how: 'Early care lowers pain and swelling. Later we add strength, balance and endurance.' },
      { id: 'knee', title: 'Kneecap pain', what: 'Often called runner’s knee. It can come from repeated jumping, weak muscles or past knee surgery.', how: 'We build strength and control for jumping, running and pivoting.' },
      { id: 'ankle', title: 'Ankle sprains', what: 'A ligament injury from rolling or twisting the ankle.', how: 'We restore motion, ease swelling, build stability and teach you how to avoid another sprain.' },
      { id: 'bunions', title: 'Bunions', what: 'The big toe drifts inward. Forced turnout and landing habits can add to it.', how: 'We build foot strength and address the habits that add stress.' },
      { id: 'stress', title: 'Stress fractures', what: 'Small cracks in the bone from overuse or poor mechanics, often in the shin, ankle or foot.', how: 'We protect the bone first, then rebuild motion, strength and mechanics.' },
      { id: 'tendon', title: 'Tendon problems', what: 'Tendon overuse can affect the heel, outer and inner ankle and the shoulder.', how: 'We use manual therapy, stretching, strengthening and dance-specific training.' },
      { id: 'post-op', title: 'After surgery', what: 'Care after meniscus, ACL, ankle, labral or tendon surgery.', how: 'We guide you from early recovery to class and performance.' },
    ],
  },
};
