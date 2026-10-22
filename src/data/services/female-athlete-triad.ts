import type { Service } from './types';

const U = 'https://cynergypt.com/wp-content/uploads/';

// Content comes from https://cynergypt.com/female-athlete-triad-care/ (shortened and simplified).
export const femaleAthleteTriad: Service = {
  dir: '',
  group: 'sports',
  locationIds: [],
  slug: 'female-athlete-triad-care',
  label: 'Female Athlete Triad',
  careName: 'Female athlete triad care',
  heroTitle: 'Female athlete triad care in New York City.',
  seoTitle: 'Female Athlete Triad Treatment in New York City',
  heroText: 'The Female Athlete Triad affects active women and teen girls. Early screening matters, because untreated cases can lead to tiredness, stress fractures, hormone changes and long-term bone loss.',
  image: '/images/sports/female-athlete-triad-care-1.jpg',
  imageAlt: 'A female athlete during a screening',
  overviewImage: U + '2025/07/triad-1.jpg.avif',
  whyImage: '/images/sports/female-athlete-triad-care-2.jpg',
  whyImageAlt: 'Athletes training together',
  overview: { eyebrow: 'The triad', title: 'Three linked concerns.', text: 'The triad is made of low energy availability, changes in the menstrual cycle and low bone density. They affect each other, so we look at all three together.' },
  causes: { title: 'When to get screened', items: ['Missed or irregular periods', 'Fast weight loss or under-fueling', 'Repeated stress fractures', 'Constant tiredness', 'A history of overtraining'] },
  approach: { title: 'What a screening includes', items: ['Training and nutrition habits', 'Menstrual cycle tracking', 'Bone health risk check', 'Past injuries and movement review'] },
  benefits: {
    eyebrow: 'How we work', title: 'Education first, always.', text: 'We teach young athletes to make informed choices about training, food and recovery.',
    items: [
      { title: 'Personal care plan', text: 'Your plan fits your sport, your body and your goals.' },
      { title: 'A team around you', text: 'We work with nutritionists, coaches and physicians when needed.' },
      { title: 'Safe return to sport', text: 'Clear steps and regular re-checks help you train with confidence.' },
    ],
  },
  conditions: {
    eyebrow: 'The three parts', title: 'Understand the triad.', text: 'Choose a part to learn more.', ariaLabel: 'Parts of the triad',
    items: [
      { id: 'energy', title: 'Low energy availability', what: 'The body does not get enough fuel for the training it does. It often comes from under-fueling.', how: 'We look at training load and habits, then work with you and your care team.' },
      { id: 'cycle', title: 'Menstrual changes', what: 'Missed or irregular periods can be a sign that the body is under stress.', how: 'We track your cycle and help you know when to see a physician.' },
      { id: 'bone', title: 'Low bone density', what: 'Weaker bones raise the risk of stress fractures, now and later in life.', how: 'We assess your bone risk and build safe strength training into your plan.' },
    ],
  },
};
