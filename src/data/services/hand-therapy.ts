import type { Service } from './types';

// Content comes from https://cynergypt.com/what-we-treat/wrist-hand-pain/ and the hand therapy articles
// (shortened and simplified). Photos are licensed from Shutterstock.
export const handTherapy: Service = {
  dir: 'what-we-treat',
  slug: 'hand-therapy',
  label: 'Hand Therapy',
  careName: 'Hand therapy',
  heroTitle: 'Hand therapy in New York City.',
  seoTitle: 'Hand Therapy and Wrist Pain Treatment in New York City',
  heroText: 'Pain, numbness or stiffness in your hand or wrist can make simple tasks hard. At Cynergy, our hand therapists, including Certified Hand Therapists (CHTs), treat the hand, wrist and fingers, and help you get back to work, play and daily life.',
  image: '/images/hand-therapy/hand-therapy-1.jpg',
  imageAlt: 'A therapist treating a patient’s wrist',
  whyImage: '/images/hand-therapy/hand-therapy-2.jpg',
  whyImageAlt: 'A hand therapist treating a patient’s hand during a one on one visit',
  stat: { big: 'Same\u2011day', text: 'custom splinting. Walk-ins are welcome.', extra: 'Certified Hand Therapists (CHTs) are at every Cynergy location.' },
  overview: { eyebrow: 'Hand, wrist and fingers', title: 'Expert care for the way you use your hands.', text: 'We start with careful, hands-on care and clear advice. Every visit is one on one with a licensed therapist, and your plan is made for your work, hobbies and goals.' },
  causes: { title: 'Common causes', items: ['Typing and phone use', 'Repeated hand movements', 'Poor desk setup (ergonomics)', 'Tool or machine work', 'Past injuries', 'Surgery on the hand or wrist'] },
  approach: { items: ['Custom splints made on site', 'Stretching and strengthening', 'Hands-on therapy and tendon gliding', 'Pain relief techniques', 'Ergonomic checks and advice', 'Care before and after surgery', 'Home exercise program'] },
  conditions: {
    eyebrow: 'Hand and wrist care', title: 'Conditions we help with.', text: 'Choose a condition to see what it is and how hand therapy can help.', ariaLabel: 'Hand therapy conditions',
    items: [
      { id: 'carpal-tunnel', title: 'Carpal Tunnel Syndrome', what: 'Pressure on the median nerve causes numbness, tingling and weakness in the hand and arm. It is often linked to repeated tasks such as typing or using tools, and it can feel worse at night.', how: 'Stretching, strengthening and pain relief techniques can ease symptoms and may help you avoid surgery.', facts: { label: 'Common signs', items: ['Numbness and tingling in the thumb, index and middle fingers', 'Hand weakness', 'Symptoms that are worse at night'] } },
      { id: 'trigger-finger', title: 'Trigger Finger', what: 'An inflamed tendon sheath makes a finger or thumb catch or lock in a bent position. A bump in the palm and pain are common early signs.', how: 'We offer gentle, non-surgical care, and rehab after surgery to restore smooth finger movement.' },
      { id: 'dupuytren', title: 'Dupuytren’s Contracture', what: 'Thick tissue in the palm slowly tightens and pulls the fingers into a bent position. It can make daily tasks hard.', how: 'We give care before and after surgery to restore movement and ease pain.' },
      { id: 'rsi', title: 'Repetitive Strain Injury (RSI)', what: 'Repeated movements or a poor desk setup can cause stiffness, pain, numbness or cramping in the hands and wrists.', how: 'We use custom splints, stretching and conditioning, and teach you better ergonomics and ways to change your activities.' },
      { id: 'de-quervain', title: 'Thumb-Side Wrist Pain (De Quervain’s)', what: 'Pain on the thumb side of the wrist, often from long hours of typing, texting or gripping. The tendons rub and become swollen.', how: 'A custom splint rests the tendons while you keep moving. Hands-on therapy and tendon gliding reduce swelling, and we help you change how you work.', facts: { label: 'Common signs', items: ['Pain or a bump near the base of the thumb', 'Catching or clicking in the thumb', 'Pain when gripping'] } },
      { id: 'tendon-repair', title: 'Recovery After Hand Surgery', what: 'Tendons heal slowly after a repair. Scar tissue or moving too soon can limit finger movement or harm the repair.', how: 'We make a custom splint, guide safe movement, care for scars and swelling, and slowly rebuild strength and finger skills until you are back to normal use.' },
    ],
  },
  faqs: [
    { q: 'Do I need a Certified Hand Therapist?', a: 'Certified Hand Therapists (CHTs) have extra training and experience in treating the hand and arm. They are at every Cynergy location.' },
    { q: 'Can I get a splint the same day?', a: 'Yes. Walk-ins are welcome for same-day custom splinting. Our therapists make splints on site as part of your treatment plan.' },
    { q: 'Will I need surgery?', a: 'Not always. We start with careful, non-surgical care. If you do need surgery, we help you before and after.' },
    { q: 'How soon will I feel better?', a: 'It depends on your condition. Many people notice a change within the first few visits, and steady therapy brings the best results.' },
  ],
};
