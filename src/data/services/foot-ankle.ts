import { img } from '@/data/images';
import type { Service } from './types';

const U = 'https://cynergypt.com/wp-content/uploads/';

// Content comes from https://cynergypt.com/what-we-treat/foot-ankle-pain/ (shortened and simplified).
export const footAnkle: Service = {
  dir: 'what-we-treat',
  slug: 'foot-ankle-pain',
  label: 'Foot & Ankle',
  careName: 'Foot & ankle care',
  heroTitle: 'Foot and ankle physical therapy in New York City.',
  seoTitle: 'Foot and Ankle Physical Therapy in New York City',
  heroText: 'Foot and ankle pain can change how you walk, stand and move. At Cynergy, you get a personal plan and one on one care from therapists who focus on foot and ankle conditions, to help you move well again.',
  image: U + '2025/09/shutterstock_2384539239.jpg',
  imageAlt: 'Foot and ankle physical therapy',
  overviewImage: img.pilatesStudio,
  whyImage: img.cobbleHill,
  whyImageAlt: 'A Cynergy clinic',
  overview: { eyebrow: 'Understanding foot and ankle pain', title: 'Find the cause, then treat it.', text: 'Foot and ankle therapy helps diagnose, treat and prevent problems in the lower body. Left untreated, they can affect how you walk and stand.' },
  causes: { items: ['Overuse', 'Injuries', 'Improper footwear', 'Arthritis', 'Plantar fasciitis'] },
  approach: { items: ['Manual therapy', 'Strengthening exercises', 'Balance and proprioception training', 'Gait retraining', 'Functional activity exercises', 'Footwear and orthotics advice'] },
  benefits: {
    eyebrow: 'Benefits of physical therapy', title: 'Move better without relying on medicine or surgery.',
    text: 'A custom plan helps you get back to the things you love.',
    items: [
      { title: 'Less pain', text: 'Treatment is tuned to your comfort and works to lower your pain.' },
      { title: 'Better mobility', text: 'Your plan improves how your foot and ankle move, and restores function.' },
      { title: 'Long-term joint health', text: 'We correct imbalances so your joints stay healthy for the long term.' },
    ],
  },
  conditions: {
    eyebrow: 'Foot and ankle care', title: 'Conditions we help with.', text: 'Choose a condition to see what it is and how physical therapy can help.', ariaLabel: 'Foot and ankle conditions',
    items: [
      { id: 'ankle-sprains', title: 'Ankle Sprains', what: 'A sprain is a ligament injury. It usually happens when the ankle is turned or rotated too far, which overstretches the ligaments.', how: 'We restore range of motion, reduce swelling and build strength for stability. We also teach you how to prevent another injury.', facts: { label: 'Common signs', items: ['Pain', 'Loss of stability', 'Balance problems'] } },
      { id: 'foot-drop', title: 'Foot Drop', what: 'The ankle is not strong enough to lift the foot against gravity. It can come from general weakness, limited range of motion, or pressure on a nerve in the leg or spine. The foot may drag, and tripping is more likely.', how: 'We reduce pressure on the nerve with manual therapy and nerve mobilization. Then we add stabilization, posture training, ankle strengthening and gait training.' },
      { id: 'neuromas', title: 'Neuromas', what: 'A neuroma is a thickening of nerve tissue. In Morton’s neuroma, it is the nerve between the 3rd and 4th toes. Tight shoes, narrow toe boxes, high heels and repeated stress on the ball of the foot, such as running, can cause it.', how: 'We use joint mobilization, stretching and icing. Orthotics and changes to activity and shoes can ease pressure so the nerve can heal.', facts: { label: 'Common signs', items: ['Forefoot pain', 'Burning', 'Tingling', 'Cramping', 'Toe numbness'] } },
      { id: 'plantar-fasciitis', title: 'Plantar Fasciitis', what: 'The plantar fascia is a band of tissue from the heel bone to the toes. When it is inflamed, it is one of the most common causes of heel pain. Running, extra weight, shoes with little support, flat feet and high arches can all play a part.', how: 'We use manual techniques and stretching, plus strengthening that fits you. We also teach you about supportive shoes and inserts.', facts: { label: 'Common signs', items: ['Sharp, stabbing pain when you stand or walk', 'Worst with the first steps in the morning', 'Pain in the heel, arch or ball of the foot'] } },
      { id: 'stress-injury', title: 'Stress Injury', what: 'A small crack in a bone. It usually comes from high-impact activity, overuse or poor exercise form. It is most common in the shin, ankle and foot.', how: 'First we protect the injury so it does not become a full fracture. Then we work on motion, strength and movement habits to lower the risk of it coming back.' },
      { id: 'ankle-fracture', title: 'Postoperative Ankle Fracture', what: 'In severe cases, a broken ankle needs surgery. Therapy after surgery aims to protect the repair, ease pain and improve function.', how: 'We teach you how to protect the ankle while it heals. Then we improve your range of motion and strength.' },
    ],
  },
  faqs: [
    { q: 'What causes foot and ankle pain?', a: 'Common causes are overuse, injuries, improper footwear, and conditions such as arthritis and plantar fasciitis. If left untreated, they can affect walking and standing.' },
    { q: 'What happens in a typical session?', a: 'Your first visit is a full evaluation: your history, gait analysis, and range of motion and strength tests. Then you get a personal plan. Your therapist explains each step and works at a pace that is comfortable for you.' },
    { q: 'How long does recovery take?', a: 'It depends on how severe the problem is and how well you follow your plan. Some people feel better within weeks, while complex cases can take several months.' },
    { q: 'Can therapy help me avoid surgery?', a: 'In some cases, yes. If you do need surgery, therapy can still help you prepare and recover.' },
    { q: 'What should I wear?', a: 'Wear comfortable, supportive shoes and clothes that let you move freely.' },
    { q: 'Will therapy be painful?', a: 'Some discomfort during stretching or strengthening is normal, but therapy should not cause severe pain. We adjust treatment to your comfort.' },
  ],
};
