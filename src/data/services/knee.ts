import { img } from '@/data/images';
import type { Service } from './types';

// Content comes from https://cynergypt.com/what-we-treat/knee-pain/ (shortened and simplified).
// The live page has no photo of its own, so the pictures here are stand-ins from the site.
export const knee: Service = {
  dir: 'what-we-treat',
  slug: 'knee-pain',
  label: 'Knee',
  careName: 'Knee pain care',
  heroTitle: 'Knee pain treatment in New York City.',
  seoTitle: 'Knee Pain Treatment in New York City',
  heroText: 'Knee pain can come from sports, a fall or years of wear. At Cynergy, our therapists give you one-on-one care to rebuild strength and stability, so you can get back to the activities you love.',
  image: img.sportsMedicine,
  imageAlt: 'Physical therapy for knee pain',
  overviewImage: img.pilatesStudio,
  whyImage: img.cobbleHill,
  whyImageAlt: 'A Cynergy clinic',
  overview: { eyebrow: 'Understanding knee pain', title: 'Find the cause, then treat it.', text: 'Your knee works with the hip, ankle and the muscles around it. Your plan looks at all of them, so you recover well and stay strong.' },
  causes: { title: 'Injuries we treat', items: ['ACL injury', 'ITB pain', 'MCL injury', 'Meniscus tear', 'Patellofemoral dysfunction'] },
  conditions: {
    eyebrow: 'Knee care', title: 'Conditions we help with.', text: 'Choose a condition to see what it is and how physical therapy can help.', ariaLabel: 'Knee conditions',
    items: [
      { id: 'acl', title: 'ACL Injury', what: 'The ACL connects the thigh bone to the shin bone and keeps the shin from sliding forward. It is one of the most common sports injuries. It often happens in football, basketball, soccer, gymnastics and skiing, from sudden direction changes, jumping or a direct blow to the knee.', how: 'Early care can include ice, ultrasound, manual therapy and gentle motion work. Later we add strength, balance and agility training, and look at how you move to lower the risk of another injury. Mild to moderate sprains may take 6–10 weeks. After surgery for a full tear, you may wear a brace when walking, and therapy is longer.', facts: { label: 'Common signs', items: ['Swelling', 'Pain and tenderness on the outside of the knee', 'The knee feels like it is “giving way”'] } },
      { id: 'itb', title: 'ITB Pain', what: 'The iliotibial band (ITB) is a thick band of tissue from the hip to the knee along the outer thigh. When it is tight or irritated, it can cause pain on the outside of the knee. This is very common in runners.', how: 'We stretch the muscles around the band (glutes, hamstrings, hip rotators and quads), teach foam rolling and strengthen the muscles around the knee and hip.' },
      { id: 'mcl', title: 'MCL Injury', what: 'The MCL is the largest and strongest of the four main knee ligaments. It keeps the inside of the knee from opening too wide. It is usually injured by a direct blow to the outside of the knee.', how: 'Early on, we follow rest, ice, compression and elevation until swelling settles. Then we build knee and leg strength and stability to restore function and prevent another injury.', facts: { label: 'Common signs', items: ['Pain on the inner knee', 'Swelling', 'Sometimes bruising'] } },
      { id: 'meniscus', title: 'Meniscus Tear', what: 'Each knee has two menisci that cushion the shin bone and thigh bone. A tear is one of the most common knee injuries. It often comes from forceful twisting, especially with your full weight on the knee.', how: 'Some tears heal with rest, ice and medicine. Others need surgery. With a correct diagnosis, treatment and rehab, many people return to their earlier level of activity.', facts: { label: 'Common signs', items: ['Pain, stiffness and swelling', 'Catching or locking', 'The knee “giving way”', 'Less range of motion'] } },
      { id: 'patellofemoral', title: 'Patellofemoral Dysfunction', what: 'Pain at the front of the knee around the kneecap, sometimes called “runner’s knee.” It is more common in running and jumping sports. Causes include overuse, injury, weak muscles around the hip and knee, and knee surgery.', how: 'Rest and ice often help first. Then therapy keeps your strength and flexibility up, and trains jumping, running and pivoting so the kneecap tracks well.', facts: { label: 'Common signs', items: ['Pain that is worse with running, stairs, long sitting or squatting'] } },
    ],
  },
};
