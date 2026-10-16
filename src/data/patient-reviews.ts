// Short excerpts and summaries from https://cynergypt.com/testimonials/ .
// `place` is a location id from locations.ts when the site names one.
export type PatientReview = { name: string; quote: string; summary: string; place?: string; therapist?: string };

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
