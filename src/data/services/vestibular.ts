import { img } from '@/data/images';
import type { Service } from './types';

// Content comes from https://cynergypt.com/what-we-treat/vestibular-dysfunction/ (shortened and simplified).
// The live page has no main photo, so the pictures here are stand-ins from the site.
export const vestibular: Service = {
  dir: 'what-we-treat',
  slug: 'vestibular-dysfunction',
  label: 'Vestibular Dysfunction',
  careName: 'Vestibular therapy',
  heroTitle: 'Vestibular rehabilitation therapy in New York City.',
  seoTitle: 'Vestibular Rehabilitation Therapy in New York City',
  heroText: 'Vestibular problems are common and can affect every part of daily life. At Cynergy, vestibular rehabilitation therapy can reduce or even clear symptoms like vertigo, dizziness and poor balance.',
  image: img.neuro,
  imageAlt: 'Vestibular rehabilitation therapy',
  whyImage: img.wellnessDen,
  whyImageAlt: 'The Wellness Den by Cynergy',
  stat: { big: '35', unit: '%', text: 'of U.S. adults aged 40 or older have reportedly had some form of vestibular dysfunction.', extra: 'Vestibular rehabilitation is a special kind of physical therapy for vertigo, dizziness and balance problems that come from the inner ear.' },
  overview: { eyebrow: 'Understanding vestibular problems', title: 'Less dizziness, more stability.', text: 'Our therapists do a full assessment and build a personal plan of care. We can help even when the cause is not clear, such as balance problems in older adults.' },
  causes: { title: 'Conditions that can benefit', items: ['BPPV', 'Vestibular neuritis', 'Labyrinthitis', 'Cervicogenic dizziness', 'Post-traumatic vertigo', 'Acoustic neuroma', 'Ototoxicity'] },
  approach: { items: ['Exercises that help the brain adapt to inner ear problems', 'Canalith repositioning (for BPPV)', 'Substitution, adaptation and habituation exercises', 'Gaze stabilization', 'Balance exercises', 'Gait training'] },
  conditions: {
    eyebrow: 'Vestibular care', title: 'Conditions we help with.', text: 'Choose a condition to see what it is and how physical therapy can help.', ariaLabel: 'Vestibular conditions',
    items: [
      { id: 'bppv', title: 'BPPV', what: 'Benign paroxysmal positional vertigo is the most common vestibular disorder and the most common cause of vertigo. Tiny crystals in the inner ear move out of place, which causes repeated spells of vertigo when you change position. It is more common in older adults, and many cases have no clear reason.', how: 'Your therapist finds the affected ear and canal. Then they guide your head and body through set movements to put the crystals back in place. This is called canalith repositioning.' },
      { id: 'neuritis', title: 'Vestibular Neuritis and Labyrinthitis', what: 'These two problems are closely related. In vestibular neuritis, one branch of the nerve that serves balance is swollen. In labyrinthitis, both branches are affected, so there can be balance and hearing problems.', how: 'Therapy starts after a specialist has checked you and the most severe symptoms have eased. We use substitution, adaptation and habituation exercises, plus gaze stabilization, balance work and gait training.', facts: { label: 'Common signs', items: ['Sudden, severe vertigo', 'Dizziness', 'Poor balance', 'Nausea and sometimes vomiting', 'Ringing in the ears and hearing loss (labyrinthitis)'] } },
    ],
  },
};
