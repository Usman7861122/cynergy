// Short excerpts and summaries from https://cynergypt.com/testimonials/ .
// `place` is a location id from locations.ts when the site names one.
export type PatientReview = { name: string; quote: string; summary: string; place?: string; therapist?: string; source?: 'Google' | 'Website' };

export const patientReviews: PatientReview[] = [
  { name: 'Michelle G.', quote: 'Best in NY. Professional, Fun, intense, friendly, challenging, and effective.', summary: 'Recommends Cynergy for physio, injury rehab and strength and conditioning, and praises the front desk.' },
  { name: 'Rami H.', therapist: 'Laurence', quote: 'Laurence is by far the most skilled.', summary: 'A professional dancer who says Laurence tailored exercises to dance and helped during the pandemic.' },
  { name: 'Valériane L.', therapist: 'Chivonne', quote: 'Chivonne and the team here are incredible.', summary: 'Credits Chivonne with clear instruction, patient education and results after a past knee surgery and a recent shoulder injury. Also praises the receptionist and the clinic space.' },
  { name: 'Katie K.', place: 'cobble-hill', therapist: 'Alvin', quote: 'I first came in 3 months post ACL reconstruction.', summary: 'Went from walking with crutches to jogging and plyometrics over about 10 months with Alvin.' },
  { name: 'Jacqueline L.', place: 'adpt', quote: 'Absolutely love ADPT!!', summary: 'Says ADPT serves youth, college and professional athletes, and older adults, with customized programs.' },
  { name: 'Peter F.', place: 'cobble-hill', therapist: 'Mena', quote: 'Mena is an awesome physical therapist.', summary: 'Credits Mena with easing long-standing neck and shoulder tension and alignment problems. He is now doing strength training.' },
  { name: 'Emily A.', place: 'cobble-hill', therapist: 'Lindsay', quote: 'Every member of the ADPT team is professional and friendly.', summary: 'Has worked with Lindsay since August 2021 after an Achilles tendon repair, and praises her detailed progress tracking.' },
  { name: 'Hanna C.', place: 'adpt', therapist: 'Chivonne', quote: 'Chivonne and the team were fantastic.', summary: 'Says Chivonne found the problem quickly without a prior diagnosis and had her recovered within weeks.' },
  { name: 'Aaron T.', place: 'cobble-hill', therapist: 'Alvin Dike', quote: 'I’m a physician who came to Alvin Dike.', summary: 'A month after surgery for a torn labrum, he moved from a larger clinic for more hands-on care. His shoulder now swims freestyle without limits.' },
  { name: 'David L.', place: 'adpt', quote: 'The folks at Cynergy are fantastic.', summary: 'He and his partner have come back over the years whenever they need care.' },
  { name: 'Heather C.', place: 'midtown-west', therapist: 'Chivonne', quote: 'Chivonne is amazing.', summary: 'A first-time PT patient who valued how Chivonne explained each exercise. Recommends her for athletes too.' },
  { name: 'Avery K.', place: 'cobble-hill', therapist: 'Christine', quote: 'Christine is a magician!', summary: 'Says Christine helped after two major surgeries, and praises the staff’s professionalism.' },
  { name: 'Viswanath T.', place: 'midtown-east', therapist: 'Laurence', quote: 'A motivating coach who sets firm goals.', summary: 'Describes Laurence as a coach whose firm goal-setting comes with encouragement.' },
  { name: 'Leslie W.', place: 'midtown-east', therapist: 'Laurence', quote: 'Is “miracle worker” too strong a description?', summary: 'Praises Laurence for her skill, compassion and understanding of both body and mind.' },
  { name: 'Lu Ann V.', place: 'midtown-east', therapist: 'Alvin', quote: 'Alvin has helped me recover.', summary: 'Credits Alvin with both physical and mental recovery from a frustrating injury, and praises the wider team.' },
  { name: 'Jessica H.', place: 'adpt', therapist: 'Alvin Dike', quote: 'Alvin Dike is outstanding.', summary: 'Says Alvin’s program improved her symptoms and fitness during rehab.' },
  { name: 'Robert S.', place: 'adpt', therapist: 'Alvin Dike', quote: 'I had the pleasure of working with Alvin Dike.', summary: 'Says Alvin was patient and practical in treating a long-standing injury.' },
  { name: 'Deep B.', place: 'adpt', therapist: 'Franceska', quote: 'ADPT is by far the best PT establishment I’ve ever been to.', summary: 'Returning to sport after knee surgery, working with Franceska, and making real progress.' },
  { name: 'Austin W.', place: 'adpt', therapist: 'Luca', quote: 'I started coming to ADPT for an athletic injury to the knee.', summary: 'About three weeks into treatment with Luca, a first-time PT patient who is very satisfied.' },
  { name: 'Lexi R.', therapist: 'Christine', quote: 'My experience with hand therapist Christine Rodriguez was spectacular!', summary: 'After hand surgery, Christine gave full 45-minute sessions and custom exercises, so she could return pain-free to her career as a professional musician.' },
  { name: 'Bill E.', therapist: 'Christine', quote: 'Christine’s treatment made it possible to resume a full schedule of piano practice.', summary: 'Christine’s hands-on work helped him return to daily piano practice and to perform recitals in 2017, 2018 and 2019.' },
  { name: 'John C.', quote: 'This place is honestly the best!', summary: 'Switched from another PT provider for a back issue and found the staff excellent.' },
  { name: 'A.A.', therapist: 'Laurence', quote: 'I highly recommend Laurence at Cynergy.', summary: 'Praises Laurence’s expertise, professionalism and kindness, and says she guided significant progress.' },
  { name: 'Anonymous', place: 'adpt', quote: 'Rehab at ADPT helped my Osgood-Schlatter disease.', summary: 'A young basketball player says rehab built muscle, improved flexibility and supported progress at a higher level of play.' },
];

// Short excerpts from public Google reviews (October 2026), each linked to its clinic.
// Quotes are short fragments; summaries are in our own words. Read the full reviews on Google.
const g = (r: Omit<PatientReview, 'source'>): PatientReview => ({ ...r, source: 'Google' });

export const googleReviews: PatientReview[] = [
  g({ name: 'Susan S.', place: 'midtown-west', quote: 'One-to-one therapy in a lovely, clean, efficient environment.', summary: 'Has seen many New York physical therapists over 40 years and calls Cynergy the very best. She never has to wait.' }),
  g({ name: 'Faraz Q.', place: 'midtown-west', therapist: 'Luca', quote: 'Highly recommend this PT.', summary: 'Worked with Luca for three months on a painful disc herniation and got back in shape. He also likes the clean, well-equipped gym.' }),
  g({ name: 'Andrew M.', place: 'midtown-west', therapist: 'Luca', quote: 'Luca was invaluable in rehabilitating my ankle post-surgery.', summary: 'Says the one-on-one care went far beyond bands and stretching, and got him doing movements he could barely do before the injury.' }),
  g({ name: 'Joy P.', place: 'midtown-west', therapist: 'Bridgit', quote: 'Bridget has great empathy and knowledge.', summary: 'Appreciated the one-on-one attention and says all the staff are kind.' }),
  g({ name: 'Talma A.', place: 'midtown-west', therapist: 'Efrat', quote: 'Efrat is an excellent PT.', summary: 'Found her attentive, knowledgeable and serious about her work, and says she helped a lot.' }),
  g({ name: 'Jonathan B.', place: 'midtown-west', therapist: 'Jared', quote: 'Facility and therapists here are world class!', summary: 'Has worked with Jared on rotator cuff discomfort and says the diagnosis and treatment were spot on.' }),
  g({ name: 'Natasha H.', place: 'midtown-east', therapist: 'Jess and Sam', quote: 'I can’t say enough great things about my physical therapists.', summary: 'After open hernia surgery she wanted someone who understood abdominal recovery, and found that here.' }),
  g({ name: 'Andriene W.', place: 'midtown-east', therapist: 'Lindsay', quote: 'I’ve seen incredible progress.', summary: 'Has worked with Lindsay for several months. She calls her professional, attentive and thoughtful about how the whole body works together.' }),
  g({ name: 'Richard Z.', place: 'midtown-east', therapist: 'Kat', quote: 'Kat is an expert at her job.', summary: 'Gets therapy mainly for his wrists and says Kat also builds the right mindset to get stronger.' }),
  g({ name: 'Bianca B.', place: 'chelsea', quote: 'I truly couldn’t have asked for a better experience.', summary: 'Started therapy after a tibial plateau fracture.' }),
  g({ name: 'Peter L.', place: 'chelsea', therapist: 'Jared', quote: 'I chose Cynergy partly for the convenience.', summary: 'Works in the same building and treats sciatica from lumbar spine changes with manual therapy and exercises.' }),
  g({ name: 'Anne F.', place: 'chelsea', therapist: 'Shereen', quote: 'Cynergy Physical Therapy is in the stratosphere of places to go for physical therapy.', summary: 'Her doctor sent her to Shereen, a hand specialist, for tennis elbow.' }),
  g({ name: 'Charlotte D.', place: 'chelsea', therapist: 'Jared', quote: 'I’ve been extremely impressed with the level of care.', summary: 'Sees Jared for a bulging disc and sciatica. She says he is thorough and checks in on how she feels at every visit.' }),
  g({ name: 'Hannah F.', place: 'chelsea', therapist: 'Amira', quote: 'Amira is an amazing physical therapist.', summary: 'Sees her weekly for cervical pain and says Amira’s knowledge and holistic approach made a real difference in her quality of life.' }),
  g({ name: 'Manal A.', place: 'cobble-hill', therapist: 'Karina', quote: 'All the staff is amazing and they make you feel like home.', summary: 'Came in with severe diastasis recti after having a baby. Karina assessed her carefully and explained the plan.' }),
  g({ name: 'Laura P.', place: 'cobble-hill', therapist: 'Alyssa', quote: 'Cynergy is one of the best physical therapy clinics in the city.', summary: 'Her podiatrist recommended the team for holistic therapy and one-on-one attention.' }),
  g({ name: 'Diana L.', place: 'cobble-hill', therapist: 'Alyssa', quote: 'Cynergy Physical Therapy Cobble Hill is great!', summary: 'Worked with Alyssa for three to four months on shoulder stability and strength for aerial sports.' }),
  g({ name: 'Miguel C.', place: 'adpt', quote: 'They helped me continue improving until I felt better than before the injury.', summary: 'A patient since 2023, starting after knee surgery.' }),
  g({ name: 'Dmitriy O.', place: 'adpt', quote: 'Best PT place I’ve ever went to.', summary: 'Says many NYC clinics feel like a revolving door. At ADPT he gets focused, full sessions.' }),
  g({ name: 'Sara B.', place: 'adpt', therapist: 'Jared', quote: 'I can’t speak highly enough about the care at ADPT.', summary: 'Started with Jared the day after a partial meniscectomy and is back to hybrid fitness and running.' }),
  g({ name: 'Katherine B.', place: 'wellness-den', therapist: 'Natalie', quote: 'I can’t recommend her highly enough.', summary: 'Has seen Natalie for over a year, starting around 16 weeks pregnant with SI joint pain.' }),
  g({ name: 'Claire H.', place: 'wellness-den', therapist: 'Laurence', quote: 'Laurence is in a league of her own.', summary: 'Says Laurence knows hypermobility well and taught her how to breathe, stand and move properly.' }),
  g({ name: 'Fisseha F.', place: 'wellness-den', therapist: 'Nicole', quote: 'They are all wonderful.', summary: 'Takes Pilates classes with most of the instructors, and recently started physical therapy with Nicole.' }),
];

// Google ratings (checked October 2026). Update these numbers when you refresh the page.
export type GoogleStat = { rating: string; count: number; href: string };
const q = (s: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(s)}`;
export const googleStats: Record<string, GoogleStat> = {
  'midtown-west': { rating: '5.0', count: 338, href: q('Cynergy Physical Therapy 119 W 57th St Suite 600 New York NY 10019') },
  'midtown-east': { rating: '5.0', count: 244, href: q('Cynergy Physical Therapy - Midtown East 485 Madison Ave New York NY 10022') },
  chelsea: { rating: '5.0', count: 381, href: q('Cynergy Physical Therapy - Chelsea 135 W 27th St New York NY 10001') },
  'cobble-hill': { rating: '5.0', count: 114, href: q('Cynergy Physical Therapy - Cobble Hill Smith St Brooklyn NY') },
  adpt: { rating: '5.0', count: 10, href: q('ADPT Powered By Rise Therapy 119 W 57th St Ste 200 New York NY 10019') },
  'wellness-den': { rating: '5.0', count: 65, href: q('The Wellness Den by Cynergy 177 E 87th St New York NY 10128') },
};

