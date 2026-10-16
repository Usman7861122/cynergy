import { img } from '@/data/images';
import type { Service } from './types';

// Content comes from https://cynergypt.com/what-we-treat/chronic-pain/ (shortened and simplified).
// The live page has no main photo, so the pictures here are stand-ins from the site.
export const chronicPain: Service = {
  dir: 'what-we-treat',
  slug: 'chronic-pain',
  label: 'Chronic Pain/Pain Management',
  careName: 'Chronic pain care',
  heroTitle: 'Chronic pain treatment in New York City.',
  seoTitle: 'Chronic Pain Treatment in New York City',
  heroText: 'Chronic pain is pain that lasts three months or longer. At Cynergy, we help you take back control of your daily life, with care that combines physical therapy and ways to cope with pain.',
  image: img.stock2,
  imageAlt: 'Chronic pain treatment',
  overviewImage: img.pilatesStudio,
  whyImage: img.wellnessDen,
  whyImageAlt: 'The Wellness Den by Cynergy',
  stat: { big: '3', unit: '+ months', text: 'is how long pain usually lasts before it is called chronic.', extra: 'It can lead to less strength and flexibility, and to stress. It often comes with tiredness, poor sleep, appetite changes and mood changes.' },
  overview: { eyebrow: 'Understanding chronic pain', title: 'Pain that stays, and a plan to move forward.', text: 'Unlike short-term pain, chronic pain does not go away. It may start after an injury, come from an ongoing illness, or have no clear cause.' },
  causes: { title: 'Where it can start', items: ['An earlier injury, such as a back sprain', 'An ongoing illness', 'No clear cause'] },
  approach: { items: ['Cognitive behavioral approaches with physical therapy', 'Pacing techniques', 'Cognitive therapy to spot negative thinking', 'Stretching and exercise', 'Careful planning of tasks and daily activities', 'Relaxation training'] },
  conditions: {
    eyebrow: 'Pain management', title: 'How we help.', text: 'Choose a topic to learn more.', ariaLabel: 'Chronic pain topics',
    items: [
      { id: 'chronic-pain', title: 'Chronic Pain', what: 'Pain that lasts three months or longer. It often limits what you can do and can bring emotional stress.', how: 'Combining cognitive behavioral approaches with physical therapy can improve how you manage and cope with pain. The focus is on problem-solving and giving control back to you.', facts: { label: 'Common signs', items: ['Tiredness', 'Sleep problems', 'Less appetite', 'Mood changes', 'Less flexibility, strength and stamina'] } },
      { id: 'untreated', title: 'When Pain Goes Untreated', what: 'Symptoms can get worse in a cycle. You avoid painful movement, you rest, and then stiffness and weakness set in, which makes symptoms worse. Care helps break that cycle.' },
    ],
  },
};
