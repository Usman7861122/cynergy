import { img } from '@/data/images';
import type { Service } from './types';

// Content comes from https://cynergypt.com/injuries/upper-extremity-conditions/ (shortened and simplified).
// The live page has no main photo, so the pictures here are stand-ins from the site.
export const upperExtremity: Service = {
  dir: 'injuries',
  slug: 'upper-extremity-conditions',
  label: 'Upper Extremity',
  careName: 'Hand & upper extremity care',
  heroTitle: 'Upper extremity occupational therapy in New York City.',
  seoTitle: 'Upper Extremity Occupational Therapy in New York City',
  heroText: 'Do you have pain, stiffness or less use of your hand, wrist, elbow or shoulder? At Cynergy, we specialize in occupational therapy for the upper body, to help you move again and feel less pain.',
  image: img.sportsPerformance,
  imageAlt: 'Hand and upper extremity therapy',
  whyImage: img.cobbleHill,
  whyImageAlt: 'A Cynergy clinic',
  stat: { big: '10–20', unit: '%', text: 'of elbow cases need surgery. Most improve with therapy.', extra: 'Certified Hand Therapists (CHTs) have at least 5 years of experience. They are at every location, with walk-in visits for same-day custom splinting.' },
  overview: { eyebrow: 'Hands, wrists, elbows and shoulders', title: 'Expert care for the way you use your hands.', text: 'We focus on careful, non-surgical care first. Only severe cases or those that do not respond may need surgery.' },
  causes: { title: 'Common causes', items: ['Repetitive hand movements', 'Poor ergonomics', 'Prior injuries', 'Overuse', 'Trauma', 'Aging'] },
  approach: { items: ['Stretching and strengthening', 'Custom splinting', 'Heat and cold therapy', 'Manual therapy and ultrasound', 'Ergonomic education', 'Home exercise programs', 'Care before and after surgery'] },
  conditions: {
    eyebrow: 'Upper extremity care', title: 'Conditions we help with.', text: 'Choose a condition to see what it is and how occupational therapy can help.', ariaLabel: 'Upper extremity conditions',
    items: [
      { id: 'carpal-tunnel', title: 'Carpal Tunnel Syndrome', what: 'A nerve problem caused by pressure on the median nerve in the wrist. It is often linked to repetitive hand movements, such as typing or assembly-line work, poor wrist position or past injuries.', how: 'We use stretching and strengthening, heat and cold, and teach better habits and ways to change your activities, to restore hand function.', facts: { label: 'Common signs', items: ['Numbness and tingling in the thumb, index and middle fingers', 'Hand weakness'] } },
      { id: 'trigger-finger', title: 'Trigger Finger', what: 'The finger or thumb locks or catches in a bent position because the tendon sheath is inflamed.', how: 'We offer conservative care and rehab after surgery, to restore full, smooth finger motion.' },
      { id: 'dupuytren', title: 'Dupuytren’s Contracture', what: 'Tissue in the palm slowly thickens and pulls the fingers into a bent position.', how: 'We give care before and after surgery to restore mobility and ease pain.' },
      { id: 'rsi', title: 'Repetitive Strain Injury', what: 'Caused by repeated movement or poor ergonomics. It can lead to pain, cramping and numbness.', how: 'We use custom splinting, stretching and conditioning, and teach ergonomics and activity changes.' },
      { id: 'elbow', title: 'Elbow Pain', what: 'Tennis elbow and golfer’s elbow affect the tendons. Bursitis is swelling of the fluid-filled sacs around the elbow. Mild cases may settle with rest, but pain that lasts needs an evaluation.', how: 'After surgery, we use strengthening and flexibility exercises, ultrasound and electrical stimulation, and a home exercise program made for you.' },
      { id: 'shoulder', title: 'Shoulder Pain', what: 'We treat frozen shoulder, rotator cuff injuries, shoulder impingement and labral tears. The rotator cuff is a group of four muscles that keep the shoulder stable. Rotator cuff problems can come from injury, overuse or aging. Labral tears cause deep shoulder pain and instability. Most can be managed without surgery.', how: 'For frozen shoulder, we use gentle stretching, soft tissue work and gradual strengthening through all four phases of recovery. For the rotator cuff, we use strength training, posture work, manual therapy and ultrasound. For labral tears, we strengthen the muscles around the joint, stabilize it and restore motion. We also provide rehab after shoulder surgery.', facts: { label: 'Common signs', items: ['Pain when lifting or reaching', 'Weakness', 'Restricted movement'] } },
    ],
  },
  faqs: [
    { q: 'How soon will I feel better?', a: 'Most people see improvements within a few weeks of steady therapy.' },
    { q: 'Is surgery always needed?', a: 'No. We focus on conservative care first. Only severe cases or ones that do not respond may need surgery.' },
    { q: 'Can osteoarthritis or labral tears be cured?', a: 'There is no cure, but therapy can greatly reduce symptoms and improve your quality of life.' },
    { q: 'How are conditions diagnosed?', a: 'With a clinical exam, range of motion tests and, when needed, imaging such as X-rays and MRIs.' },
  ],
};
