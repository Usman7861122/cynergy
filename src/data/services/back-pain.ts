import type { Condition } from '@components/islands/ConditionTabs';
import type { FaqItem } from '@components/islands/Faq';
import { img } from '@/data/images';
import type { Service } from './types';

// Content comes from https://cynergypt.com/what-we-treat/back-pain/ (shortened and simplified).
const causes = ['Disc herniation', 'Disc degeneration', 'Stenosis', 'Facet joint irritation', 'Fractures', 'Spondylosis', 'Spondylolisthesis', 'Muscle strain'];
const approach = ['Lumbar stabilization', 'Soft tissue and joint mobilization', 'Stretching', 'Functional activity training', 'Postural re-education'];

const benefits = [
  { title: 'Manual therapy', text: 'Hands-on care to ease stiff joints and tight muscles, so you can move with less pain.' },
  { title: 'Strengthening', text: 'Targeted exercises that build the strength your back needs to support everyday life.' },
  { title: 'Posture correction', text: 'Better alignment and movement habits can lower your risk of future injury.' },
];

const conditions: Condition[] = [
  {
    id: 'discectomy', title: 'Discectomy',
    what: 'When a large disc herniation presses on nerve roots, it can cause burning, numbness, tingling or weakness. A surgeon may then recommend removing the bulging disc material.',
    how: 'After surgery, therapy focuses on flexibility, range of motion, stabilization, activity changes and strengthening.',
  },
  {
    id: 'foot-drop', title: 'Foot Drop',
    what: 'Weakness that makes it hard to lift the foot against gravity. It can come from general weakness or from a pinched nerve in the leg or spine, and it raises the risk of tripping.',
    how: 'We reduce pressure on the nerve with manual therapy and nerve mobilization. Then we add stabilization, posture training, ankle strengthening and gait training.',
  },
  {
    id: 'neck-pain', title: 'Neck Pain',
    what: 'Neck pain can come from disc problems, arthritis, nerve entrapment or muscle strain. It may spread to the arms, upper back, head or face.',
    how: 'Care combines mobilization, stretching, strengthening, posture work and ergonomic guidance.',
    facts: { label: 'Common causes', items: ['Disc problems', 'Arthritis', 'Nerve entrapment', 'Muscle strain'] },
  },
  {
    id: 'radiculopathy', title: 'Radiculopathy',
    what: 'A nerve root is squeezed as it leaves the spine. It is most common in the low back and neck. Common causes include disc herniation, arthritis and stenosis.',
    how: 'We work to relieve pressure on the nerve with mobilization, stretching and stabilization.',
    facts: { label: 'Common signs', items: ['Radiating pain', 'Burning', 'Numbness', 'Tingling'] },
  },
  {
    id: 'stenosis', title: 'Stenosis',
    what: 'Stenosis is a common spine condition. Nerves get compressed when the canal they pass through becomes narrow.',
    facts: { label: 'Common signs', items: ['Chronic and worsening back pain', 'Weakness or pain in one or both arms or legs', 'Less range of motion', 'Loss of feeling in severe cases', 'Leg cramping in lumbar stenosis (neurogenic claudication): worse with long standing and walking, better with sitting, lying down or leaning forward'] },
  },
  {
    id: 'thoracic', title: 'Thoracic Spine Pain',
    what: 'The thoracic spine is the area of your back between the neck and low back. Pain can come from joints that are too stiff or too loose, or from tight, spasming muscles.',
    how: 'We restore motion and stability with soft tissue and joint work, stretching, strengthening and posture correction.',
  },
  {
    id: 'fractures', title: 'Vertebral Fractures',
    what: 'There are three kinds of spine fractures. Compression fractures are the most common, and bone-weakening conditions raise the risk.',
    how: 'First we protect the injury so the bone can heal. Then we slowly add mobility, stabilization and posture work to prevent another injury.',
    facts: { label: 'Common signs', items: ['Pain gets worse with weight-bearing', 'Pain gets worse with forward bending', 'Pain eases when the legs are offloaded'] },
  },
];

const faqs: FaqItem[] = [
  { q: 'How many sessions will I need?', a: 'It depends on the cause, how severe it is and your goals. After your first evaluation, you get a personal plan and a time estimate, and we review your progress often.' },
  { q: 'Will I need to do exercises at home?', a: 'Yes. Your therapist gives you specific exercises to build strength and keep your progress going between visits.' },
  { q: 'Is physical therapy painful?', a: 'It should lower your discomfort. Some techniques can cause short-term soreness, and your therapist always works within what you can handle.' },
  { q: 'What if I do not feel better right away?', a: 'Progress is different for everyone. If things are slow, your therapist checks again and adjusts your plan.' },
  { q: 'Does insurance cover physical therapy?', a: 'Most plans cover treatment for back pain, but coverage varies. Our team can help check your benefits and talk through payment options.' },
];

export const backPain: Service = {
  dir: 'what-we-treat',
  slug: 'back-pain',
  label: 'Back & Spine',
  careName: 'Back & spine care',
  heroTitle: 'Back pain therapy in New York City.',
  seoTitle: 'Back Pain Therapy in New York City',
  heroText: 'Back pain can affect your work, exercise, sleep and movement. At Cynergy, your goals come first. We offer one-on-one, evidence-based care to help you find relief, rebuild strength and feel better for the long term.',
  image: img.back,
  imageAlt: 'A woman holding her lower back in pain',
  whyImage: img.backTherapy,
  whyImageAlt: "A therapist treating a patient's back",
  stat: { big: '80', unit: '%', text: 'of people have low back pain at some point in their lifetime.', extra: 'Low back pain is the leading cause of disability worldwide. When nerves are involved, pain can spread to the pelvis, hips and legs.' },
  overview: { eyebrow: 'Understanding back pain', title: 'Find the cause, then treat it.', text: 'Your treatment starts with a complete evaluation, so your plan fits your body and your goals.' },
  causes: { items: causes },
  approach: { items: approach },
  benefits: { eyebrow: 'Benefits of physical therapy', title: 'Treat the cause, not only the pain.', text: 'Physical therapy works on what is behind your back pain, and it can lower your risk of future injury.', items: benefits },
  conditions: { eyebrow: 'Back, neck and spine care', title: 'Conditions we help with.', text: 'Choose a condition to see what it is and how physical therapy can help.', ariaLabel: 'Back and spine conditions', items: conditions },
  faqs,
};
