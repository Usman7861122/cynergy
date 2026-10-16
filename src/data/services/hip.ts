import { img } from '@/data/images';
import type { Service } from './types';

// Content comes from https://cynergypt.com/what-we-treat/hip-pain/ (shortened and simplified).
// The live page has no photo of its own, so the pictures here are stand-ins from the site.
export const hip: Service = {
  dir: 'what-we-treat',
  slug: 'hip-pain',
  label: 'Hip',
  careName: 'Hip pain care',
  heroTitle: 'Hip pain treatment in New York City.',
  seoTitle: 'Hip Pain Treatment in New York City',
  heroText: 'Hip pain can make walking, stairs and sitting hard. At Cynergy, we find out what is behind your pain and build a personal plan to restore your motion and strength.',
  image: img.sportsRecovery,
  imageAlt: 'Physical therapy for hip pain',
  overviewImage: img.pilatesStudio,
  whyImage: img.wellnessDen,
  whyImageAlt: 'The Wellness Den by Cynergy',
  overview: { eyebrow: 'Understanding hip pain', title: 'Find the cause, then treat it.', text: 'Hip pain has many causes. Your plan starts with a close look at how your hip moves and what is limiting it.' },
  causes: { title: 'Conditions we treat', items: ['Hip arthritis', 'Trochanteric bursitis', 'Hip impingement', 'Labral tear'] },
  conditions: {
    eyebrow: 'Hip care', title: 'Conditions we help with.', text: 'Choose a condition to see what it is and how physical therapy can help.', ariaLabel: 'Hip conditions',
    items: [
      { id: 'arthritis', title: 'Hip Arthritis', what: 'Arthritis happens when cartilage in a joint wears away. In the hip, this can cause bone-on-bone irritation. Common causes are normal aging, a past hip injury, extra stress on the joint and genetics.', how: 'We work on the motion and strength problems that hold you back, so you can do more in daily life.', facts: { label: 'Common signs', items: ['Stiffness and pain, especially getting out of bed', 'Clicking and popping', 'Harder walking', 'Bone spurs can add pain as it gets worse'] } },
      { id: 'bursitis', title: 'Bursitis', what: 'Trochanteric bursitis is irritation and swelling of the fluid-filled sac over the outer hip bone. It can come from running or walking on uneven ground, a tight IT band, a leg length difference or muscle imbalance.', how: 'We loosen tight areas around the bursa, strengthen weak muscles and improve how you move. We also teach you how to protect the bursa.', facts: { label: 'Common signs', items: ['Pain on the outside of the upper thigh', 'Worse with running, walking and stairs', 'Pain when you roll onto your side'] } },
      { id: 'impingement', title: 'Hip Impingement', what: 'A bony growth rubs against soft tissue or cartilage in the hip. It can lead to labral tears.', how: 'We improve the stretch of your joint and tissues, ease the pinching in the joint and strengthen the muscles around it.', facts: { label: 'Common signs', items: ['Pain in the front of the hip and groin', 'Worse with walking, sitting, running, squatting, twisting or jumping', 'Less range of motion', 'Weakness or spasms', 'Clicking or popping'] } },
      { id: 'labral-tear', title: 'Labral Tear', what: 'The labrum is cartilage in the hip socket that deepens and supports it. It can tear from repeated pinching or from being pulled away from the bone. Repeated activity, overuse, injury, arthritis, tight hip flexors and weak hip and core muscles can all play a part.', how: 'We restore joint motion, improve soft tissue stretch and strengthen the muscles around the hip. We also fix the movement habits that led to the tear.', facts: { label: 'Common signs', items: ['Pain in the front of the hip and groin', 'Stiffness', 'Locking or catching', 'Pain with stairs, walking, squatting and sitting'] } },
    ],
  },
};
