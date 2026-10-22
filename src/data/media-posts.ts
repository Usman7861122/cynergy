// Articles come from https://cynergypt.com/therapist-blogs/ (shortened and written in easy English).
// To add an article: copy one entry, change the text, and a page is built at /therapist-blogs/<slug>/.
const U = 'https://cynergypt.com/wp-content/uploads/';

export type PostSection = {
  h: string;
  p?: string[];
  list?: string[];
  ordered?: boolean;
  sub?: { h: string; p?: string[]; list?: string[] }[];
};

export type MediaPost = {
  slug: string;
  title: string;
  /** Short title for cards and menus */
  short: string;
  /** ISO date */
  date: string;
  category: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  intro?: string;
  sections: PostSection[];
  faqs?: { q: string; a: string }[];
  /** Link to the matching service page */
  related: { label: string; href: string };
  /** Clinic that fits the topic best */
  locationId?: string;
};

export const mediaPosts: MediaPost[] = [
  {
    slug: 'sports-performance-physical-therapy-for-marathoners-in-nyc-beat-pain-and-reach-peak-miles',
    title: 'Sports Performance Physical Therapy for Marathoners in NYC: Beat Pain and Reach Peak Miles',
    short: 'Physical Therapy for Marathoners in NYC',
    date: '2026-10-15',
    category: 'Sports',
    excerpt: 'Training for a New York City marathon is hard on the body. Learn when to rest at home and when to see a sports physical therapist.',
    image: U + '2026/10/pexels-clickerhappy-3629-scaled.jpg',
    imageAlt: 'Runners training on a city road',
    intro: 'Marathon training in New York City means long runs on hard pavement. Pain is a signal, and pushing through it can lead to a serious injury. Our sports therapists help runners stay active and finish strong.',
    sections: [
      {
        h: 'Common marathon training injuries we treat',
        p: ['Longer distances can show movement problems that shorter runs hide. As weekly miles go up, small issues can turn into overuse injuries.'],
        list: ['Runner’s knee (patellofemoral pain)', 'Achilles tendinopathy', 'Plantar fasciitis', 'IT band syndrome', 'Shin splints and stress reactions', 'Hip flexor and glute strain'],
      },
      {
        h: 'Home care or physical therapy: when to get help',
        p: ['Mild soreness that fades fast can often be managed at home. Pain that lasts, or changes how you run, needs a check-up.'],
        sub: [
          { h: 'When home care works', p: ['Short-lived soreness that clears in a couple of days can usually be handled with simple steps.'], list: ['Active recovery, such as light walking, easy cycling or gentle foam rolling', 'Good sleep and plenty of water', 'Cutting training by 10% to 20% for a week'] },
          { h: 'When to see a sports physical therapist', p: ['Self-care is not enough if you notice any of these signs.'], list: ['Pain that changes your running stride', 'Sharp pain that gets worse during runs', 'Swelling, clicking or a joint that feels unstable', 'Pain that lasts through 3 runs in a row, even with rest', 'Injuries that keep coming back at high mileage (18+ miles a week)'] },
        ],
      },
      {
        h: 'The Cynergy difference: one-on-one sports care',
        p: ['Every session is with a licensed physical therapist, never an aide. Your plan is built around your schedule and your training. It has four parts:'],
        list: ['Running gait and movement analysis to find the cause of pain', 'Strength and stability work for your hips, core and calves', 'Hands-on therapy and joint mobilization to ease tightness and restore motion', 'Cross-training and taper planning to keep your fitness without extra stress on your joints'],
        ordered: true,
      },
      {
        h: 'Don’t let pain bench your marathon goals',
        p: ['Whether you are training for the NYC Marathon, a half marathon or just building miles, come in before pain forces you to stop. Call a clinic or book a runner’s evaluation online.'],
      },
    ],
    related: { label: 'Running gait analysis', href: '/running-gait-analysis-nyc/' },
  },
  {
    slug: 'wrist-pain-from-typing-thumb-side-chelsea',
    title: 'Wrist Pain From Typing (Thumb Side): Causes and Relief in Chelsea, NYC',
    short: 'Wrist Pain From Typing (Thumb Side)',
    date: '2026-09-30',
    category: 'Hand therapy',
    excerpt: 'Thumb-side wrist pain is common for people who type, code or use their phone all day. Here are the causes and how hand therapy helps.',
    image: U + '2026/07/untitled-7406823-scaled.jpg',
    imageAlt: 'A person with wrist pain while typing',
    sections: [
      {
        h: 'Why does your wrist hurt on the thumb side?',
        p: ['Thumb-side (radial) wrist pain is common for people who type, code or use a phone for long hours. Each small movement rubs the tendons, which can lead to swelling and pain.'],
      },
      {
        h: 'Common causes of thumb-side wrist pain',
        p: ['De Quervain’s tenosynovitis is the most common cause for heavy computer and phone users.'],
        list: ['De Quervain’s tenosynovitis', 'Arthritis at the base of the thumb, made worse by repeated strain', 'Tendon strain from poor keyboard angles', 'Nerve irritation'],
      },
      {
        h: 'Home care or professional treatment',
        p: ['Mild stiffness can often be handled at home. Early help from a specialist can stop a short-term strain from becoming a long-term problem.'],
        sub: [
          { h: 'When home care may be enough', list: ['Short breaks to rest your hands every 30 minutes', 'Keep your wrists straight while you type', 'Use a cold pack after work'] },
          { h: 'When to see a hand therapist', list: ['Pain that stays after a night or weekend of rest', 'Sharp pain, catching or clicking in the thumb', 'Swelling, warmth or tenderness near the bump on the thumb side of the wrist', 'Trouble gripping things, or typing without working around the pain', 'Night pain, or pain that moves up the forearm'] },
        ],
      },
      {
        h: 'How hand therapy in Chelsea helps',
        p: ['At our Chelsea clinic you work one-on-one with a licensed physical or occupational therapist. The plan has four parts.'],
        sub: [
          { h: '1. Full arm and hand check', p: ['We test wrist motion, thumb pinch strength, joint movement, nerve function and your desk setup, to find the exact cause.'] },
          { h: '2. Custom splints', p: ['Store-bought braces often fit poorly and can press on nerves. Our Certified Hand Therapists make custom splints in the clinic. They hold your thumb and wrist in a supportive position so the tendons can heal while you go about your day.'] },
          { h: '3. Hands-on therapy and tendon gliding', p: ['Soft tissue work, joint glides and gentle tendon stretches reduce swelling and break down scar tissue, so your thumb and wrist move more smoothly.'] },
          { h: '4. Better work habits', p: ['We adjust how you position your hands at work, so the pain does not come back when you return to full-time typing.'] },
        ],
      },
      {
        h: 'Get back to pain-free work',
        p: ['You do not have to live with daily pain. Early care from a hand therapist is the fastest way to feel better. Our Chelsea clinic is at 135 West 27th Street, 2nd Floor, and is close to Midtown West, Flatiron, Hudson Yards and Gramercy.'],
      },
    ],
    related: { label: 'Hand and upper extremity therapy', href: '/injuries/upper-extremity-conditions/' },
    locationId: 'chelsea',
  },
  {
    slug: 'ergonomics-and-hand-therapy-for-computer-workers-chelsea',
    title: 'Ergonomics and Hand Therapy for Computer Workers in Chelsea: Stop Wrist Pain and Reclaim Your Workday',
    short: 'Ergonomics and Hand Therapy for Computer Workers',
    date: '2026-09-23',
    category: 'Hand therapy',
    excerpt: 'Spend eight hours a day at a desk? Simple desk changes and hand therapy can stop wrist pain and bring back your workday.',
    image: U + '2026/07/untitled-7405348-scaled.jpg',
    imageAlt: 'A person working at a laptop with good wrist position',
    sections: [
      {
        h: 'Common wrist and hand symptoms in computer workers',
        p: ['Hours of typing, scrolling and clicking strain the tendons, nerves and small joints of the hands, wrists and elbows. If you ignore early signs, nearby muscles work too hard and the area gets tight and swollen.'],
        list: ['Tingling or numbness in the thumb, index or middle finger, often linked to carpal tunnel syndrome', 'An ache or burning feeling in the wrist that gets worse after long typing', 'Stiffness or catching when you open and close your hand', 'A weaker grip', 'Sharp pain on the outside or inside of the elbow from mouse use'],
      },
      {
        h: 'Desk setup: your first line of defense',
        p: ['A well-arranged desk keeps your arms and hands relaxed. Check your setup at home and at the office.'],
        sub: [
          { h: '1. Keep your wrists neutral', p: ['Keep your wrists straight, not bent up, down or sharply to the side. Resting the heel of your wrist on the desk edge can squeeze the carpal tunnel and slow blood flow.'] },
          { h: '2. Place your keyboard and mouse close', p: ['Your elbows should stay near your sides at about a right angle. Reaching far forward strains your shoulders, neck and forearms.'] },
          { h: '3. Adjust your chair and screen', p: ['The top third of your screen should be at eye level. Keep your feet flat on the floor and your knees at about a right angle.'] },
        ],
      },
      {
        h: 'Home care or hand therapy: when to get help',
        sub: [
          { h: 'When home care is enough', list: ['Short breaks about every 30 minutes', 'Gentle forearm stretches', 'Cold for swelling, warmth for stiff joints'] },
          { h: 'When to see a licensed occupational or hand therapist', p: ['If home care does not help within 7 to 10 days, or you notice any of these, get help soon.'], list: ['Numbness or pins and needles, especially at night', 'Sharp, shooting pain when you type, use a mouse or lift', 'Swelling, warmth or tenderness around the wrist or finger joints', 'Sudden weakness that makes you drop things'] },
        ],
      },
      {
        h: 'Hand therapy and rehab at Cynergy',
        p: ['When desk changes are not enough, we treat the cause of the irritation. Every visit is one-on-one with a licensed therapist.'],
        list: ['Custom splints made on site to protect irritated tendons', 'Ergonomic checks of your typing, posture and desk', 'Hands-on soft tissue work and nerve-gliding exercises', 'Strength work for hand and forearm endurance', 'Dedicated one-on-one care, with no aides or assistants'],
      },
      {
        h: 'Take back your pain-free workdays',
        p: ['Desk changes plus hand therapy can ease wrist pain, protect your joints and help you work well again. Visit our Chelsea clinic at 135 West 27th Street, 2nd Floor, or call (212) 255-8080.'],
      },
    ],
    related: { label: 'Hand and upper extremity therapy', href: '/injuries/upper-extremity-conditions/' },
    locationId: 'chelsea',
  },
  {
    slug: 'hand-occupational-therapy-after-tendon-repair-chelsea-nyc',
    title: 'Hand Occupational Therapy After Tendon Repair in Chelsea: Your Path to Safe Recovery',
    short: 'Hand Therapy After Tendon Repair',
    date: '2026-09-23',
    category: 'Hand therapy',
    excerpt: 'Recovery after hand tendon surgery depends on the right therapy. See what to expect, week by week.',
    image: U + '2026/07/untitled-7405327-scaled.jpg',
    imageAlt: 'Hand therapy and occupational therapy',
    sections: [
      {
        h: 'Why hand therapy after surgery matters',
        p: ['Tendons heal slowly and are fragile in the first weeks after surgery. Two main problems can undo the repair:'],
        list: ['Adhesions: scar tissue that glues the tendon in place and limits finger movement', 'Rupture: the repair tears if the tendon is loaded too soon or moved too hard'],
        ordered: true,
      },
      {
        h: 'Custom splints and hand therapy at Cynergy',
        p: ['We focus on upper extremity rehab after hand surgery. Every session is one-on-one with a licensed therapist.'],
        sub: [
          { h: 'Custom static and dynamic splints', p: ['Right after surgery the repair must be shielded from stretch. We mold splints on site that hold your wrist and fingers at set angles. They take stress off the tendon and still allow safe, controlled movement.'] },
          { h: 'Controlled movement plans', p: ['We follow trusted protocols, such as Kleinert or Duran for flexor tendons. Gentle, guided motion helps the tendon glide in its sheath and stops sticky scar tissue.'] },
          { h: 'Scar and swelling care', p: ['Swelling builds pressure in the hand and stiffens joints. We use compression wrapping, fluid-moving massage, hands-on therapy and silicone scar sheets to keep tissue soft.'] },
          { h: 'Strength and finger skill training', p: ['Once the tendon has healed, usually 6 to 8 weeks after surgery, we move to strengthening, fine motor tasks and work-specific training, so you can type, grip and do daily tasks again.'] },
        ],
      },
      {
        h: 'What to expect: your recovery timeline',
        p: ['The timeline depends on which part of the hand was hurt. These are the four general phases.'],
        list: ['Weeks 1–3, Protection: we make your splint, control swelling and start gentle passive movement.', 'Weeks 4–6, Tendon gliding: the splint comes off for supervised exercise and active movement without resistance.', 'Weeks 7–10, Strengthening: light resistance work, scar remodeling and daily tasks.', 'Weeks 12 and after, Full return: normal use, heavy lifting, and a return to sports or demanding work.'],
      },
      {
        h: 'Restore your hand function in Chelsea',
        p: ['If you have had tendon repair surgery or have it coming up, call our Chelsea clinic at (212) 255-8080 or visit us at 135 West 27th Street, 2nd Floor, to book a one-on-one hand therapy evaluation.'],
      },
    ],
    related: { label: 'Hand and upper extremity therapy', href: '/injuries/upper-extremity-conditions/' },
    locationId: 'chelsea',
  },
  {
    slug: 'best-physical-therapists-in-nyc-what-sets-cynergy-apart',
    title: 'Best Physical Therapists in NYC: What Sets Cynergy Apart',
    short: 'Best Physical Therapists in NYC: What Sets Cynergy Apart',
    date: '2026-04-03',
    category: 'About Cynergy',
    excerpt: 'Choosing a physical therapy clinic is about skill, results and trust, not just a close address. See what makes our care different.',
    image: U + '2025/07/TWD-074-1536x1025.jpg.webp',
    imageAlt: 'A bright Cynergy treatment room',
    intro: 'People who search for top physical therapy in New York want more than a handy location. City life is hard on the body, and our care is built on precision and a plan made just for you.',
    sections: [
      {
        h: 'What makes a physical therapy clinic the best?',
        p: ['Many patients are unhappy with rushed visits, one-size-fits-all plans and care from aides instead of licensed staff. The difference is how care is delivered, not just which services a clinic lists.'],
        list: ['Rushed appointments', 'Generic treatment plans', 'Working with aides instead of licensed professionals', 'No real progress'],
      },
      {
        h: 'A true one-on-one experience, every time',
        p: ['Every patient is treated by a licensed physical or occupational therapist, with no assistants. This leads to better assessments, changes to your care in real time, and faster progress.'],
        list: ['More accurate assessments', 'Real-time adjustments', 'Faster, more effective results', 'A deeper understanding of your body and goals'],
      },
      {
        h: 'A team of over 30 specialists across NYC',
        p: ['Our team covers a wide range of needs, so whatever you are dealing with, there is a specialist for it.'],
        list: ['Orthopedic rehabilitation', 'Sports performance and injury recovery', 'Hand therapy and occupational therapy', 'Post-surgical rehabilitation', 'Chronic pain management', 'Pre and postnatal care', 'Balance, mobility and functional training'],
      },
      {
        h: 'Built for the NYC lifestyle',
        p: ['Our approach suits active, busy people who want to get back to what they love quickly. Plans are shaped around your schedule, goals and daily life.'],
      },
      {
        h: 'A whole-body, results-driven approach',
        p: ['We look past symptoms to find the root cause of pain or poor movement. The goal is lasting improvement, not short-term relief.'],
        list: ['Find the root causes', 'Correct movement patterns', 'Build strength and resilience', 'Prevent future injuries'],
      },
      {
        h: 'Why patients across NYC choose Cynergy',
        list: ['More than two decades of experience (since 2001)', 'A large, varied team', 'One-on-one care with licensed therapists', 'Several locations across the city', 'Personal, goal-based plans'],
      },
      {
        h: 'Conditions we treat',
        list: ['Back and neck pain', 'Sports injuries', 'Recovery after surgery', 'Joint pain and stiffness', 'Repetitive strain injuries', 'Pelvic floor and postpartum conditions', 'Hand and upper extremity injuries'],
      },
    ],
    faqs: [
      { q: 'How do I choose the best physical therapist in NYC?', a: 'Look for a clinic with one-on-one care, experienced specialists and plans made for you, rather than high-volume care.' },
      { q: 'Do I need a referral for physical therapy in NYC?', a: 'Often you do not need a referral to start. It is still wise to check with your doctor or insurance first.' },
      { q: 'How often should I go to physical therapy?', a: 'It depends on your condition. Most patients benefit from one to three visits a week.' },
      { q: 'How quickly will I see results?', a: 'Many patients feel better within the first few visits, especially with a plan built for them.' },
    ],
    related: { label: 'About Cynergy', href: '/about/' },
  },
  {
    slug: 'osteoporosis-strength-training-in-nyc-building-bone-density-and-preventing-injury',
    title: 'Osteoporosis Strength Training in NYC: Building Bone Density and Preventing Injury',
    short: 'Osteoporosis Strength Training in NYC',
    date: '2026-04-03',
    category: 'Bone health',
    excerpt: 'A strength program made for you can improve bone health and lower the risk of a fracture. Learn how it works.',
    image: U + '2026/04/18281.jpg',
    imageAlt: 'An older adult doing safe strength training with a therapist',
    sections: [
      {
        h: 'What is osteoporosis and why does it matter?',
        p: ['With osteoporosis, bone density drops and bones become fragile. Many people worry most about falling or getting hurt.'],
        list: ['Higher risk of fractures', 'Less movement and independence', 'Changes in posture', 'Ongoing pain'],
      },
      {
        h: 'Why strength training is key for bone health',
        p: ['Strength training is one of the best tools for bone health. But not every exercise is safe or useful for osteoporosis.'],
        list: ['It encourages bone growth', 'It builds muscle strength', 'It improves balance and coordination', 'It lowers the risk of falls'],
      },
      {
        h: 'A safe, specialized approach',
        p: ['Each program is built for precision and safety. Every move is chosen to give the most benefit with the least risk.'],
        list: ['Weight-bearing exercise matched to your condition', 'Resistance training for bone density', 'Balance and stability work', 'Posture correction'],
      },
      {
        h: 'Why one-on-one physical therapy matters',
        p: ['Generic gym programs often fall short for people with osteoporosis. At Cynergy you work directly with a licensed therapist, your program changes as you improve, and we track your progress closely.'],
      },
      {
        h: 'Beyond bone density: confidence and quality of life',
        p: ['Good care is about how you feel in your body, not just your test numbers.'],
        list: ['More confidence when you move', 'Less fear of falling', 'Better posture and strength', 'More independence'],
      },
    ],
    faqs: [
      { q: 'Can osteoporosis be reversed?', a: 'Full reversal is not always possible. With the right treatment, bone density can often improve and stay steady.' },
      { q: 'Is strength training safe for osteoporosis?', a: 'Yes, when a professional guides it. The wrong exercise can raise your risk, so supervised care matters.' },
      { q: 'How often should I train?', a: 'Most programs are two to three sessions a week. The exact plan depends on your condition and goals.' },
      { q: 'Can I just go to the gym instead?', a: 'General gym programs often lack what osteoporosis needs. A guided plan is safer and works better.' },
    ],
    related: { label: 'Strength training for osteoporosis', href: '/strength-training-for-osteoporosis/' },
  },
  {
    slug: 'pre-and-postnatal-physical-therapy-in-nyc-supporting-your-body-through-pregnancy-and-beyond',
    title: 'Pre and Postnatal Physical Therapy in NYC: Supporting Your Body Through Pregnancy and Beyond',
    short: 'Pre and Postnatal Physical Therapy in NYC',
    date: '2026-04-03',
    category: 'Women’s health',
    excerpt: 'Pregnancy changes your body in big ways. See how physical therapy can help before and after your baby arrives.',
    image: U + '2026/04/33477.jpg',
    imageAlt: 'A pregnant woman stretching with her therapist',
    sections: [
      {
        h: 'Why physical therapy matters during and after pregnancy',
        p: ['Pregnancy is a long change for the body, not a single moment. Without support, the problems it brings can last long after delivery.'],
        list: ['Lower back and pelvic pain', 'Core weakness and instability', 'Changes in posture and movement', 'Pelvic floor problems', 'Trouble getting back to exercise after birth'],
      },
      {
        h: 'A proactive approach to prenatal care',
        p: ['Many people who look for prenatal therapy want to stay active and avoid pain. Early care helps you prepare for labor and recover more smoothly.'],
        list: ['Keep your strength and mobility', 'Ease pain and discomfort', 'Prepare your body for labor and delivery', 'Improve posture and how you move'],
      },
      {
        h: 'Postpartum recovery: rebuilding strength safely',
        p: ['Many women feel pressure to bounce back fast. A planned, guided approach works better. We focus on rebuilding your body properly, not rushing it.'],
        list: ['Core and belly recovery, including diastasis recti', 'Pelvic floor rehab', 'Scar care after a C-section or tearing', 'A safe return to exercise', 'Preventing long-term problems'],
      },
      {
        h: 'One-on-one, expert care',
        p: ['Your sessions are with a licensed therapist, not an aide. This is especially important before and after birth.'],
        list: ['Precise treatment made for you', 'Real-time changes as you progress', 'A deeper understanding of your body and goals'],
      },
      {
        h: 'Designed for the NYC lifestyle',
        p: ['New York women are active, driven and always on the move. Our care fits busy schedules and helps you return to strength safely and well.'],
      },
    ],
    faqs: [
      { q: 'When should I start prenatal physical therapy?', a: 'You can start at any stage of pregnancy. It is most helpful if you have discomfort, or if you want to be proactive.' },
      { q: 'How soon after birth can I start postpartum therapy?', a: 'Many patients start within a few weeks after birth. The timing depends on your delivery and recovery.' },
      { q: 'Do I need pelvic floor therapy even if I feel fine?', a: 'Often yes. Some pelvic floor problems are not clear at first, and they can grow over time without support.' },
      { q: 'Can physical therapy help me get back to workouts?', a: 'Yes. A structured plan can guide a safe return to strength training, running and other activities.' },
    ],
    related: { label: 'Pre and postnatal physical therapy', href: '/pre-and-postnatal-physical-therapy/' },
  },
  {
    slug: 'why-am-i-so-dizzy-common-causes-of-vertigo-and-how-physical-therapy-can-help-in-nyc',
    title: 'Why Am I So Dizzy? Common Causes of Vertigo and How Physical Therapy Can Help in NYC',
    short: 'Why Am I So Dizzy? Vertigo and Physical Therapy',
    date: '2026-01-23',
    category: 'Balance',
    excerpt: 'Dizziness and vertigo are common. Learn about BPPV and how vestibular therapy can help you feel steady again.',
    image: U + '2026/01/Why-Am-I-So-Dizzy-e1769163465947.jpg',
    imageAlt: 'A person holding their head, feeling dizzy',
    intro: 'Dizziness and balance problems are common, especially for busy New Yorkers. Most cases respond well to the right physical therapy.',
    sections: [
      {
        h: 'What is vertigo?',
        p: ['Vertigo is more than feeling light-headed. It usually starts in the inner ear or the body’s balance system.'],
        list: ['The room seems to spin', 'You feel like you are tilting or moving', 'You feel unsteady when you walk', 'Dizziness when you turn your head or lie down'],
      },
      {
        h: 'The most common cause: BPPV',
        p: ['BPPV happens when tiny crystals in the inner ear move out of place. Certain head movements then trigger short spinning spells.'],
        list: ['Dizziness when you lie down or get up', 'Spinning when you roll over in bed', 'Feeling off balance when you look up or bend down'],
      },
      {
        h: 'How can physical therapy help?',
        p: ['Vestibular physical therapy treats balance and dizziness problems from the inner ear. We start with a full evaluation to see if BPPV or something else is the cause. Then we may use gentle repositioning moves and custom balance exercises. Many patients feel relief within a few visits.'],
      },
      {
        h: 'When should you see a vestibular therapist?',
        p: ['Early care can prevent long-term problems. Consider vestibular rehab if:'],
        list: ['You feel dizzy or unsteady often', 'Your vertigo comes and goes', 'You avoid moving because you are afraid of getting dizzy', 'Crowds or uneven ground are hard to manage'],
      },
      {
        h: 'Vestibular rehab at Cynergy',
        p: ['We offer vestibular and BPPV care at Midtown West, Midtown East, Chelsea, Cobble Hill and the Upper East Side. You work one-on-one with a licensed therapist, not an aide.'],
      },
      {
        h: 'Start feeling steady again',
        p: ['If dizziness affects your work, exercise or daily life, book a vestibular evaluation with our specialists.'],
      },
    ],
    faqs: [
      { q: 'Is vertigo dangerous?', a: 'Most vertigo is not dangerous, but it can raise your risk of falling. A proper diagnosis matters.' },
      { q: 'How long does BPPV last?', a: 'Untreated BPPV can last weeks or months. With vestibular therapy, many patients improve in one to three visits.' },
      { q: 'Do I need medicine for vertigo?', a: 'Physical therapy is often more effective than medicine because it treats the cause.' },
    ],
    related: { label: 'Vestibular therapy', href: '/what-we-treat/vestibular-dysfunction/' },
  },
  {
    slug: 'pelvic-floor-physical-therapy-in-new-york-city',
    title: 'Pelvic Floor Physical Therapy in New York City',
    short: 'Pelvic Floor Physical Therapy in New York City',
    date: '2026-01-09',
    category: 'Women’s health',
    excerpt: 'Pelvic pain, bladder leaks and postpartum changes are common and treatable. See how pelvic floor therapy works.',
    image: U + '2025/07/patient-performing-pelvic-floor-therapy-1.webp',
    imageAlt: 'A patient doing pelvic floor therapy',
    intro: 'Pelvic floor therapy at Cynergy focuses on long-term relief. Common reasons to seek care are pelvic pain, bladder leaks and changes after pregnancy.',
    sections: [
      {
        h: 'What is the pelvic floor?',
        p: ['The pelvic floor is a group of muscles at the base of the pelvis. They support your core and organs and help control your bladder and bowels. Pregnancy, childbirth, surgery, aging or repeated strain can all weaken them. Therapy is a non-surgical option.'],
        list: ['Leaking urine or stool', 'Pelvic pain or pressure', 'Pain during sex', 'Trouble with bowel movements', 'Muscle weakness after birth', 'Signs of pelvic organ prolapse'],
      },
      {
        h: 'How pelvic floor therapy works',
        p: ['We start with a full evaluation of your symptoms and goals. Then your therapist builds a personal plan.'],
        list: ['Hands-on therapy', 'Targeted pelvic floor exercises', 'Biofeedback', 'Posture and movement coaching', 'Lifestyle advice'],
      },
      {
        h: 'Benefits of pelvic floor physical therapy',
        p: ['Steady treatment can bring real change. Many NYC patients choose this gentle route over medicine or surgery.'],
        list: ['Better bladder and bowel control', 'Less pelvic pain', 'More core strength and stability', 'More confidence in daily life', 'Better pelvic health overall'],
      },
      {
        h: 'Why choose Cynergy?',
        p: ['You get one-on-one care in a private, supportive setting. Our therapists focus on pelvic health and use methods backed by research.'],
      },
      {
        h: 'Book a pelvic floor evaluation',
        p: ['If you have pelvic floor problems, get help. Call us at (212) 974-7252 to book an evaluation with a licensed therapist.'],
      },
    ],
    related: { label: 'Pelvic floor health', href: '/what-we-treat/pelvic-floor-health/' },
  },
  {
    slug: 'dance-medicine-and-physical-therapy-keeping-dancers-on-their-toes',
    title: 'Dance Medicine and Physical Therapy: Keeping Dancers on Their Toes',
    short: 'Dance Medicine and Physical Therapy',
    date: '2025-10-31',
    category: 'Sports',
    excerpt: 'Dance medicine helps performers prevent and recover from injuries. Learn what it is and who it helps.',
    image: U + '2025/07/2149245784-1-e1753254661189.jpg',
    imageAlt: 'A dancer stretching',
    sections: [
      {
        h: 'Why dance medicine matters',
        p: ['Dance medicine helps prevent and treat dance injuries and supports movement on stage. It is like sports medicine, but it looks at the range and demands of dance that regular physical therapy often misses.'],
      },
      {
        h: 'The role of a dance medicine specialist',
        p: ['Specialists trained in dance and sports medicine work with dancers as partners in recovery. They fit their talk and care to each person.'],
        list: ['Conditioning', 'Treating muscle and joint problems', 'Correcting alignment', 'Analyzing movement', 'Improving motor performance'],
      },
      {
        h: 'Common injuries dance medicine treats',
        list: ['Muscle strains', 'Stress fractures', 'Back or hip pain', 'Wrist and hand pain', 'Ankle sprains', 'Bunions', 'Labral tears', 'Achilles tendonitis'],
      },
      {
        h: 'Dance medicine in New York',
        p: ['Cynergy has six locations across Manhattan and Brooklyn. Our dance medicine therapists have experience with dancers of all levels, and help them reach recovery goals safely.'],
      },
    ],
    related: { label: 'Dance medicine', href: '/dance-medicine/' },
  },
];

export const postHref = (p: MediaPost) => `/therapist-blogs/${p.slug}/`;
export const formatDate = (iso: string) =>
  new Date(iso + 'T12:00:00').toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
