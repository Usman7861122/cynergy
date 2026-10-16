import type { FaqItem } from '@components/islands/Faq';

// Used on service pages whose live page has no FAQ section of its own.
export const commonFaqs: FaqItem[] = [
  { q: 'How many sessions will I need?', a: 'It depends on the cause, how severe it is and your goals. After your first evaluation, you get a personal plan and a time estimate, and we review your progress often.' },
  { q: 'Will I need to do exercises at home?', a: 'Often, yes. Your therapist can give you specific exercises to keep your progress going between visits.' },
  { q: 'Is physical therapy painful?', a: 'It should lower your discomfort. Some techniques can cause short-term soreness, and your therapist always works within what you can handle.' },
  { q: 'What if I do not feel better right away?', a: 'Progress is different for everyone. If things are slow, your therapist checks again and adjusts your plan.' },
  { q: 'Does insurance cover physical therapy?', a: 'Coverage varies by plan. Our team can help check your benefits and talk through payment options.' },
];
