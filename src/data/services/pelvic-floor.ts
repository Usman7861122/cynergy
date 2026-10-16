import type { Service } from './types';

const U = 'https://cynergypt.com/wp-content/uploads/';

// Content comes from https://cynergypt.com/what-we-treat/pelvic-floor-health/ (shortened and simplified).
export const pelvicFloor: Service = {
  dir: 'what-we-treat',
  slug: 'pelvic-floor-health',
  label: 'Pelvic Floor Health',
  careName: 'Pelvic floor therapy',
  heroTitle: 'Pelvic floor therapy in New York City.',
  seoTitle: 'Pelvic Floor Therapy in New York City',
  heroText: 'Many conditions, including bladder problems, abdominal pain and PCOS, can be linked to the pelvic floor. At Cynergy, our therapists offer pelvic floor physical therapy with care for each person’s needs and comfort.',
  image: U + '2025/10/891cd628-6c2d-487d-95e8-1be43e04abb2.jpg',
  imageAlt: 'Pelvic floor health',
  overviewImage: U + '2025/07/Pelvic-Floor-Connections.png',
  whyImage: U + '2026/01/DSCF3135-scaled.jpeg',
  whyImageAlt: 'A therapist guiding a quad and glute exercise on the Pilates reformer',
  overview: { eyebrow: 'Understanding the pelvic floor', title: 'Muscles that do more than you think.', text: 'The pelvic floor is a group of muscles that support the bladder and bowel. They help with urine control, continence and sexual function. Both men and women can have pelvic floor weakness.' },
  causes: {
    title: 'Conditions we treat',
    items: ['Prenatal and postpartum care', 'Pelvic pain', 'Pain during intercourse', 'Vaginismus', 'Vulvodynia', 'Vestibulitis', 'Pelvic girdle pain', 'Erectile dysfunction', 'Prostatitis', 'Post-prostatectomy', 'Incontinence', 'Endometriosis', 'Adenomyosis', 'Constipation', 'Diarrhea', 'Irritable bowel syndrome', 'Pelvic organ prolapse', 'Osteoporosis', 'SI joint dysfunction', 'Low back pain', 'Hip pain', 'Abdominal pain', 'Coccyx pain', 'Diastasis recti'],
  },
  approach: { items: ['Internal and external manual therapy', 'Trigger point and myofascial release', 'Visceral manipulation and soft tissue work', 'Helpful tools such as biofeedback, ultrasound, electrical stimulation, cold laser and TENS', 'Private treatment rooms'] },
  benefits: {
    eyebrow: 'Benefits of pelvic floor therapy', title: 'Care that feels safe and private.', text: 'Your first visit starts with a talk about your symptoms, history and goals. Your consent comes first, and every session fits your comfort level.',
    items: [
      { title: 'Better bladder and bowel function', text: 'Pelvic floor exercises can strengthen the muscles that help control bowel and bladder.' },
      { title: 'Support through pregnancy', text: 'Exercises can lower the risk of vaginal prolapse, help with bowel and bladder control, and improve recovery after childbirth.' },
      { title: 'Sensitive, trauma-aware care', text: 'Our therapists are used to working with patients who may have had trauma, in private rooms that feel safe and comfortable.' },
    ],
  },
  conditions: {
    eyebrow: 'Pelvic floor care', title: 'What we help with.', text: 'Choose a topic to learn more.', ariaLabel: 'Pelvic floor topics',
    items: [
      { id: 'dysfunction', title: 'Pelvic Floor Dysfunction', what: 'Pelvic floor muscles support the bladder and bowel and help with urinary control, continence and sexual function. Therapy can include both internal and external manual therapy. If you are also in therapy for something else, such as a leg injury or surgery, we may suggest healing those muscles first.' },
      { id: 'gi', title: 'GI and Bowel Dysfunction', what: 'Bowel problems are closely tied to the pelvic floor. These are issues we often see in our patients.', facts: { label: 'Common issues', items: ['Chronic constipation or diarrhea', 'Straining to start or finish a bowel movement', 'Incomplete emptying', 'Outlet obstruction', 'Fecal smearing or incontinence', 'Hemorrhoids and anal fissures', 'Gastroparesis', 'Irritable bowel syndrome (IBS)'] } },
    ],
  },
};
