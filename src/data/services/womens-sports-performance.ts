import type { Service } from './types';

const U = 'https://cynergypt.com/wp-content/uploads/2025/07/';

// Content comes from https://cynergypt.com/womens-sports-performance-program/ (shortened and simplified).
export const womensSports: Service = {
  dir: '',
  group: 'sports',
  locationIds: [],
  slug: 'womens-sports-performance-program',
  label: "Women's Sports Performance",
  careName: "Women's sports performance training",
  heroTitle: "Women's sports performance program in New York City.",
  seoTitle: "Women's Sports Performance Program in New York City",
  heroText: 'Specialized training for the female athlete. Train, recover and improve with licensed health professionals who focus on injury prevention, pelvic floor health and bone strength.',
  image: '/images/sports/womens-sports-performance-program-1.jpg',
  imageAlt: 'A female athlete training',
  overviewImage: U + 'IMG_8523-1536x2048.jpeg.avif',
  whyImage: '/images/sports/womens-sports-performance-program-2.jpg',
  whyImageAlt: 'Women training together',
  overview: { eyebrow: 'A tailored approach', title: 'Women face different risks in sport.', text: 'Our program looks at body mechanics, hormones and muscles and bones, so your training fits you.' },
  causes: { title: 'What we watch for', items: ['Higher ACL injury risk', 'Pelvic floor problems', 'Female Athlete Triad', 'Bone density concerns'] },
  approach: { title: 'What we offer', items: ['Barbell and kettlebell training', 'Blood flow restriction', 'Biomechanics and gait analysis', 'Injury reduction screening', 'McKenzie spinal screen', 'Medicine ball and weighted sled work', 'Return-to-play care', 'Strength training for osteoporosis', 'Tindeq load readings'] },
  benefits: {
    eyebrow: 'Our experts', title: 'Train strong. Play confident. Recover smarter.', text: 'Our team uses proven clinical tools and current research.',
    items: [
      { title: 'Certified specialists', text: 'Our team holds strength coaching, ACL testing and pelvic floor training credentials.' },
      { title: 'Proven frameworks', text: 'We use the McKenzie Method, SFMA and the Functional Movement Screen.' },
      { title: 'Personal evaluation', text: 'Start with a performance evaluation made for you.' },
    ],
  },
  conditions: {
    eyebrow: 'Why it matters', title: 'Four areas we focus on.', text: 'Choose one to learn more.', ariaLabel: 'Focus areas',
    items: [
      { id: 'acl', title: 'ACL risk', what: 'Female athletes face a higher chance of ACL injuries. Smart training and screening can lower the risk.' },
      { id: 'pelvic', title: 'Pelvic floor health', what: 'Pelvic floor problems can affect training, comfort and confidence.' },
      { id: 'triad', title: 'Female Athlete Triad', what: 'Low energy, cycle changes and weak bones are linked. We screen for early signs.' },
      { id: 'bone', title: 'Bone health', what: 'Strength training helps build and protect bone density.' },
    ],
  },
};
