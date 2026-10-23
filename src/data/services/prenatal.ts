import { img } from '@/data/images';
import type { Service } from './types';

const U = 'https://cynergypt.com/wp-content/uploads/';

// Content comes from https://cynergypt.com/pre-and-postnatal-physical-therapy/ (shortened and simplified).
export const prenatal: Service = {
  dir: '',
  group: 'offer',
  slug: 'pre-and-postnatal-physical-therapy',
  label: 'Pre & Postnatal',
  careName: 'Pre and postnatal physical therapy',
  heroTitle: 'Pre and postnatal physical therapy in New York City.',
  seoTitle: 'Pre and Postnatal Physical Therapy in New York City',
  heroText: 'Bringing a new life into the world is a special time, and it can bring new aches and pains. At Cynergy, our prenatal and postnatal programs support you at every stage.',
  image: U + '2025/07/pregnant-mama-scaled-e1741206007540-1.jpg.avif',
  imageAlt: 'A pregnant woman',
  overviewImage: img.cobbleHill,
  whyImage: img.reformer,
  whyImageAlt: 'A therapist guiding an exercise',
  overview: { eyebrow: 'Care from pregnancy onward', title: 'Support for every stage.', text: 'Our highly trained therapists give personal, one on one care from your first evaluation and at every session after. Programs change as your pregnancy moves forward.' },
  causes: { title: 'Common problems we address', items: ['Diastasis recti', 'Pelvic floor dysfunction', 'Back, hip and pelvic pain', 'Recovery after childbirth', 'Swelling and circulation issues'] },
  benefits: {
    eyebrow: 'Benefits', title: 'Feel stronger before and after birth.', text: 'Good care can make pregnancy more comfortable and recovery smoother.',
    items: [
      { title: 'Pain relief and mobility', text: 'Manage pain and move better for a more comfortable pregnancy and an easier recovery.' },
      { title: 'Preparing for childbirth', text: 'Stronger key muscles and better flexibility can make a difference in labor and delivery.' },
      { title: 'Better postpartum recovery', text: 'Regain strength, improve posture and address issues from pregnancy and delivery, with long-term health benefits.' },
    ],
  },
  conditions: {
    eyebrow: 'Pre and postnatal care', title: 'How we help.', text: 'Choose a topic to learn more.', ariaLabel: 'Pre and postnatal topics',
    items: [
      { id: 'prenatal', title: 'Prenatal Therapy', what: 'As the baby grows, your body’s alignment can change, and you may start to feel uncomfortable. Back pain, pelvic pain and joint discomfort are common.', how: 'We use special exercises and techniques to manage pain, improve mobility, posture and function, and prepare your body for childbirth. We strengthen the core, including the pelvic floor, and improve flexibility.' },
      { id: 'postnatal', title: 'Postnatal Therapy', what: 'Support as you heal and regain strength after childbirth. We address diastasis recti (a gap between the stomach muscles), pelvic floor dysfunction and back pain.', how: 'We focus on core strength, flexibility and overall physical health to support a full recovery.' },
      { id: 'diastasis', title: 'Diastasis Recti', what: 'The stomach muscles separate during pregnancy. This can cause a bulge in the stomach and a weak core.' },
      { id: 'pelvic-floor', title: 'Pelvic Floor Dysfunction', what: 'Pelvic floor muscles can weaken or be hurt during pregnancy and childbirth. This can lead to leaks, pelvic pain and prolapse.' },
    ],
  },
  faqs: [
    { q: 'What are some common exercises?', a: 'Common ones include pelvic floor exercises (Kegels), cat-cow stretch, glute bridges, wall sits, bird-dog, gentle yoga poses, pelvic tilts, side-lying leg lifts, seated forward bend and modified planks. Please talk to a trained professional before you start any exercises.' },
    { q: 'When should I start postnatal physical therapy?', a: 'Ask your healthcare provider. Many women start as soon as they feel ready, often within a few weeks after giving birth.' },
    { q: 'How often will I need sessions?', a: 'It depends on your needs and your plan. It is typically once a week to several times a month.' },
    { q: 'Can I continue physical therapy throughout pregnancy?', a: 'Yes, many people do and benefit from it. Your therapist adjusts treatment as your pregnancy moves forward.' },
  ],
};
