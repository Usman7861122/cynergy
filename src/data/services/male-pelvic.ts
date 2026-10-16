import { img } from '@/data/images';
import type { Service } from './types';

const U = 'https://cynergypt.com/wp-content/uploads/';

// Content comes from https://cynergypt.com/male-pelvic-health-nyc/ (shortened and simplified).
export const malePelvic: Service = {
  dir: '',
  group: 'offer',
  slug: 'male-pelvic-health-nyc',
  label: 'Male Pelvic Health',
  careName: 'Male pelvic floor therapy',
  heroTitle: 'Male pelvic floor therapy in New York City.',
  seoTitle: 'Male Pelvic Floor Therapy in New York City',
  heroText: 'Relief is possible. Recovery starts here. At Cynergy, our male pelvic health team treats pelvic pain, urinary issues and sexual dysfunction, which are often misunderstood and undertreated, to restore comfort, confidence and control.',
  image: U + '2025/07/Male-Pelvic-Floor-Dysfunction-1024x683.jpg',
  imageAlt: 'Male pelvic floor dysfunction',
  overviewImage: U + '2025/10/pexels-mikhail-nilov-7530003-scaled.jpg',
  whyImage: img.wellnessDen,
  whyImageAlt: 'The Wellness Den by Cynergy',
  locationIds: ['midtown-west', 'chelsea', 'wellness-den'],
  overview: { eyebrow: 'Understanding male pelvic health', title: 'Muscles that can be tight, weak or out of sync.', text: 'The pelvic floor muscles support the bladder, bowel and sexual organs. When they become tight, weak or uncoordinated, it can affect daily life. Men often report groin or testicular pain, trouble urinating, painful ejaculation or discomfort when sitting.' },
  causes: { title: 'Conditions we treat', items: ['Pelvic or perineal pain', 'Pain with sitting', 'Erectile dysfunction or painful ejaculation', 'Incontinence or painful urination', 'Chronic prostatitis', 'Overactive bladder', 'Peyronie’s disease', 'Constipation and IBS discomfort', 'Post-prostatectomy rehab', 'Enlarged prostate (BPH)', 'Chronic back, hip or abdominal pain that has not responded to traditional PT'] },
  approach: { items: ['A private, one-on-one evaluation', 'Pelvic floor muscle assessment', 'Manual therapy to release tension', 'Posture and movement analysis', 'Breathing and relaxation techniques', 'Bladder and bowel retraining', 'Home exercise programs'] },
  benefits: {
    eyebrow: 'Why choose Cynergy', title: 'Discreet, caring and evidence-based.', text: 'Our approach is whole-person and fits you, and it treats both the symptoms and what is behind them.',
    items: [
      { title: 'Specialized therapists', text: 'Physical therapists trained in male pelvic floor dysfunction.' },
      { title: 'A discreet setting', text: 'A professional, private setting that respects your goals and privacy.' },
      { title: 'Support all the way', text: 'Evidence-based techniques and caring support through your whole recovery.' },
    ],
  },
  conditions: {
    eyebrow: 'Male pelvic health', title: 'What to expect.', text: 'Choose a topic to learn more.', ariaLabel: 'Male pelvic health topics',
    items: [
      { id: 'first-visit', title: 'Your First Visit', what: 'Care begins with a private, one-on-one evaluation. Your therapist checks how your pelvic floor muscles work, looks at your posture and movement, and builds a plan around your goals.' },
      { id: 'recovery', title: 'Recovery Is Possible', what: 'With the right guidance, recovery is absolutely possible. Your plan can include manual therapy, breathing and relaxation, retraining for the bladder and bowel, and exercises to do at home for long-term relief.' },
    ],
  },
};
