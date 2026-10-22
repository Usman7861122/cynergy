import { img } from '@/data/images';
import type { Service } from './types';

// Content comes from https://cynergypt.com/sports-performance-training/ (shortened and simplified).
export const sportsPerformanceTraining: Service = {
  dir: '',
  group: 'sports',
  locationIds: [],
  slug: 'sports-performance-training',
  label: 'Sports Performance Training',
  careName: 'Sports performance training',
  heroTitle: 'Sports performance training in New York City.',
  seoTitle: 'Sports Performance Training in New York City',
  heroText: 'We train adult athletes of every age and level to move better in their sport. Each program starts with an assessment and fits your position, role and goals.',
  image: img.sportsPerformance,
  imageAlt: 'An athlete in a sports performance session',
  overviewImage: img.sportsRecovery,
  whyImage: img.sports,
  whyImageAlt: 'Athletes in training',
  overview: { eyebrow: 'Our 3-step plan', title: 'Assess. Program. Coach.', text: 'We measure where you are, build a program around your sport, then coach you in the way you learn best.' },
  causes: { title: 'Six key skills', items: ['Agility', 'Coordination', 'Balance', 'Power', 'Reaction time', 'Speed'] },
  approach: { title: 'What it can improve', items: ['Strength and power', 'Speed and timing', 'Endurance and stamina', 'Core stability and balance', 'Technique and recovery', 'Flexibility and mobility'] },
  benefits: {
    eyebrow: 'The three steps', title: 'A plan made for you.', text: 'Here is how every program works.',
    items: [
      { title: 'Performance assessment', text: 'We measure what you can do now, using profiles for your sport and position.' },
      { title: 'Individual programming', text: 'Your plan covers strength, power, movement, cardio demands and sport risks.' },
      { title: 'Customized coaching', text: 'We coach with proven ideas on how people learn new skills.' },
    ],
  },
  conditions: {
    eyebrow: 'Types of training', title: 'Eight ways we train.', text: 'Your assessment shows which fit you best.', ariaLabel: 'Training types',
    items: [
      { id: 'continuous', title: 'Continuous training', what: 'Steady effort at a set pace to build endurance.' },
      { id: 'circuit', title: 'Circuit training', what: 'A series of stations that build strength and endurance together.' },
      { id: 'interval', title: 'Interval training', what: 'Hard effort and rest in cycles to improve recovery and efficiency.' },
      { id: 'fartlek', title: 'Fartlek training', what: 'Changing speeds during a session to adapt to the demands of play.' },
      { id: 'mobility', title: 'Flexibility and mobility', what: 'Work that keeps joints moving well and muscles ready.' },
      { id: 'weights', title: 'Weight training', what: 'Progressive lifting for strength and power.' },
      { id: 'plyo', title: 'Plyometric training', what: 'Jump training that builds explosive power.' },
      { id: 'speed', title: 'Speed and agility', what: 'Drills for quick starts, turns and direction changes.' },
    ],
  },
};
