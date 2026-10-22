// Legal pages. Privacy Policy and Terms of Use follow https://cynergypt.com/privacy-policy/ and /terms-of-use/
// (shortened and in plainer English). The clinic and its lawyer should review all legal text before launch.
export type LegalSection = { h: string; p?: string[]; list?: string[]; sub?: { h: string; p?: string[]; list?: string[] }[] };
export type LegalDoc = { slug: string; title: string; description: string; updated: string; intro: string; sections: LegalSection[] };

const company = 'Cynergy PT, 119 West 57th Street, Suite 600, New York, NY 10019';

export const privacy: LegalDoc = {
  slug: 'privacy-policy',
  title: 'Privacy Policy',
  description: 'How Cynergy Physical Therapy collects, uses and protects your information on this website.',
  updated: 'March 10, 2021',
  intro: 'This policy explains how Cynergy PT collects, uses and shares information when you use our website, and what rights you have. By using the website you agree to the collection and use of information as described here. We do not share consumer information with third parties for marketing purposes.',
  sections: [
    {
      h: 'Key words',
      list: [
        `Company (“we”, “us”): ${company}. We are the data controller under GDPR.`,
        'Service: this website.',
        'Personal Data: any information that relates to an identified or identifiable person.',
        'Usage Data: data collected automatically when you use the website.',
        'Cookies: small files placed on your device that store details about your browsing.',
        'Service Provider: a company that processes data on our behalf.',
      ],
    },
    {
      h: 'Information we collect',
      sub: [
        { h: 'Personal Data', p: ['When you use the website, we may ask you for information that can identify you. This may include:'], list: ['Email address', 'First and last name', 'Address, state, ZIP or postal code and city', 'Phone number, if you give it in a form', 'Usage Data'] },
        { h: 'Usage Data', p: ['Usage Data is collected automatically. It may include your IP address, browser type and version, the pages you visit, the time and length of your visit, device identifiers and other diagnostic data. On a mobile device it may also include the device type, operating system and browser.'] },
      ],
    },
    {
      h: 'Cookies and tracking',
      p: ['We use cookies, beacons, tags and scripts to run the website and understand how it is used. You can choose which non-essential cookies to allow in our cookie settings, which you can open from the footer at any time. If you block cookies in your browser, some parts of the website may not work. See our Cookie Policy for more detail.'],
      list: ['Necessary cookies keep the website working and protect against fraud.', 'Notice cookies remember whether you accepted or rejected cookies.', 'Functionality cookies remember choices you make, such as language.', 'Tracking and performance cookies, often from third parties, show us traffic and how the website is used.'],
    },
    {
      h: 'How we use your Personal Data',
      list: ['To provide and maintain the website, including monitoring its use', 'To manage your account and registration, if you have one', 'To carry out a contract for services you ask for', 'To contact you by email, phone, SMS or push notification about updates, security or services', 'To send news, offers and information about similar services, unless you opt out', 'To manage your requests'],
      p: ['We may share your information in these cases:'],
      sub: [
        { h: 'Who we may share with', list: ['Service Providers, for monitoring, analytics, payment processing and contacting you', 'Another company, in a merger, sale of assets, financing or acquisition', 'Affiliates, such as parent or sister companies, who must follow this policy', 'Business partners, to offer you certain products, services or promotions', 'Other users, if you share information in public areas or social media'] },
      ],
    },
    {
      h: 'How long we keep your data',
      p: ['We keep Personal Data only as long as needed for the reasons in this policy, to meet legal duties, to settle disputes and to enforce our agreements. We usually keep Usage Data for a shorter time, unless it is used to improve security or the website, or the law says we must keep it longer.'],
    },
    {
      h: 'Where your data is processed',
      p: ['Your information may be processed at our offices and in other places, including places outside your state or country where data protection laws can differ. By giving us your information you agree to this transfer. We take reasonable steps to keep your data secure and treat it as this policy describes.'],
    },
    {
      h: 'When we may disclose your data',
      list: ['Business deals: if we are involved in a merger, acquisition or sale, we will tell you before your data is covered by a different privacy policy.', 'Law enforcement: if the law or a valid request from a court or public authority requires it.', 'Other legal needs: to follow the law, protect our rights or property, investigate wrongdoing, protect people’s safety or protect against legal liability.'],
    },
    {
      h: 'Security',
      p: ['We use commercially reasonable ways to protect your Personal Data. No method of sending data over the internet or storing it electronically is fully secure, so we cannot promise absolute security.'],
    },
    {
      h: 'Service Providers we use',
      p: ['Our Service Providers can access your data only to do tasks for us, and they must not use it for anything else.'],
      list: ['Analytics: we may use Google Analytics to track website traffic. You can opt out with the Google Analytics opt-out browser add-on.', 'Email marketing: we may send newsletters and offers. You can unsubscribe at any time with the link in the email or by contacting us.', 'Payments: third-party processors handle payments. We do not store or collect your payment card details. These processors follow PCI-DSS standards.'],
    },
    {
      h: 'Your rights under GDPR',
      p: ['If you are in the European Economic Area, we may process your data based on your consent, a contract, a legal duty, vital interests, public interest or our legitimate interests. You have the right to:'],
      list: ['Ask for access to, or a copy of, your Personal Data', 'Ask us to correct data that is wrong or incomplete', 'Object to processing based on legitimate interests or for direct marketing', 'Ask us to erase data when there is no good reason to keep it', 'Ask for your data in a machine-readable format', 'Withdraw your consent at any time'],
    },
    {
      h: 'Facebook Fan Page',
      p: ['Cynergy and Facebook are joint controllers for our Facebook Fan Page. We use Facebook Insights to get anonymized statistics about visitors. Facebook places a cookie with a unique identifier on your device, which can last up to two years. Please read Facebook’s privacy policy to learn how it handles data.'],
    },
    {
      h: 'Your rights under CCPA (California)',
      list: ['To be told what categories of Personal Data we collect and why', 'To ask about disclosures of your data to third parties for their direct marketing in the past 12 months', 'To opt out of the sale of Personal Data', 'To ask what categories, sources, purposes and specific pieces of data we hold', 'To ask us to delete the Personal Data we collected in the past 12 months', 'To not be treated unfairly for using these rights'],
      p: ['To use your rights, call us or use the contact details below. We will answer a verifiable request free of charge within 45 days, which may be extended once by 45 more days with notice.'],
    },
    {
      h: 'Do not sell my personal information',
      p: ['We do not sell personal information. Some service providers, such as advertising partners, may use technology on the website that the CCPA could treat as a “sale”. Your opt-out choices depend on your browser or device:'],
      list: ['Desktop: use an ad-blocking browser extension.', 'Android: use “Opt out of Interest-Based Ads” or “Opt out of Ads Personalization”.', 'iOS: use “Limit Ad Tracking”.', 'You can also stop location collection in your mobile device settings.'],
    },
    {
      h: '“Do Not Track”',
      p: ['This website does not respond to Do Not Track signals. Some third-party sites may still track your activity. You can set your browser to ask not to be tracked.'],
    },
    {
      h: 'Text messages (SMS)',
      p: ['If you agree to receive text messages from us, we may send appointment reminders, offers and two-way messages. Message and data rates may apply. Reply HELP for help or STOP to stop. Agreeing to text messages is not required to receive care.'],
    },
    {
      h: 'Children’s privacy',
      p: ['The website is not meant for anyone under 13, and we do not knowingly collect personal information from children under 13. If you are a parent and think your child gave us information, contact us and we will remove it if we collected it without verified parental consent.'],
    },
    {
      h: 'Links to other websites',
      p: ['Our website may link to sites we do not control. We are not responsible for their content or privacy practices. Please read the privacy policy of every site you visit.'],
    },
    {
      h: 'Changes to this policy',
      p: ['We may update this policy from time to time. We will post the new policy on this page and update the “Last updated” date. We will tell you by email or with a clear notice on the website before a change takes effect.'],
    },
    {
      h: 'Contact us',
      p: [`Questions about this policy? Use our contact page, call (212) 974-7252, or write to ${company}.`],
    },
  ],
};

export const terms: LegalDoc = {
  slug: 'terms-of-use',
  title: 'Terms of Use',
  description: 'The terms for using the Cynergy Physical Therapy website.',
  updated: 'No date given on the current site',
  intro: 'Please read these terms before using the Cynergy Physical Therapy website. By using the website you agree to them.',
  sections: [
    { h: '1. Accepting and changing these terms', p: ['Cynergy PT provides this website as a free information service. By using it, you agree to these terms. We may change them at any time, so please check them each time you visit. If you do not agree, please do not use the website.'] },
    { h: '2. Information only: not medical advice', p: ['The content on this website is for general information. It is not medical advice and does not replace a visit with a qualified health professional who knows your needs. The website is provided “as is”. We make no promise that it is accurate, complete, reliable or fit for a particular purpose, or that it is free of viruses.'] },
    { h: '3. Liability', p: ['You agree to hold harmless Cynergy PT and its owners, officers, directors and employees from claims connected with using, or not being able to use, the website, its information or linked sites. This includes claims about content you find objectionable or infringing. Cynergy PT and the people who contribute information are not responsible for decisions you make based on the content, or for indirect, special or similar damages, even if we were told they might happen.'] },
    { h: '4. Opinions', p: ['Opinions and recommendations on the website are not always those of Cynergy PT.'] },
    { h: '5. Links to other sites', p: ['Links to sites we do not control are for your convenience only. They do not mean we endorse the site or promise anything about its information.'] },
    { h: '6. Linking to this website', p: ['Please ask us in writing before linking to this website. We may withdraw consent at any time. A link must point to the home page, must not harm our goodwill or trademarks, must not suggest we are connected to you, and must open in a full window, not inside a frame.'] },
    { h: '7. Copyright and permitted use', p: ['The design, text and images on this website are owned by or licensed to Cynergy PT and its suppliers and contributors. You may not copy, share, change or use them without our written consent. There are two exceptions: temporary copies needed to browse the website, and one personal, non-commercial printout of each page, unchanged and with these terms attached.'] },
    { h: '8. Governing law', p: ['New York law governs the website, without regard to conflict-of-laws rules. You agree to the exclusive jurisdiction of the courts of the State of New York and the U.S. District Court for the Southern District of New York. We do not claim the content is suitable for every place. If you access the website from a place where its content is illegal, that is not allowed, and you must follow your local laws.'] },
    { h: '9. Trademarks and enforcement', p: ['All text and images on the website are protected by copyright, or are registered or common-law trademarks. Copying or getting around these protections may lead to serious civil and criminal penalties.'] },
    { h: '10. Text messages', p: ['If you agree to receive text messages from us, message and data rates may apply. Reply HELP for help or STOP to stop. See our Privacy Policy for how we use your information.'] },
    { h: '11. Contact', p: ['Questions about these terms? Call (212) 974-7252 or use our contact page.'] },
  ],
};

export const cookies: LegalDoc = {
  slug: 'cookie-policy',
  title: 'Cookie Policy',
  description: 'What cookies the Cynergy Physical Therapy website uses and how to control them.',
  updated: 'October 22, 2026',
  intro: 'Cookies are small text files that a website puts on your device. This page explains the kinds of cookies we use and how you can choose which ones to allow.',
  sections: [
    {
      h: 'The cookies we use',
      sub: [
        { h: 'Strictly necessary (always on)', p: ['These keep the website working and remember your cookie choice. The website cannot work properly without them.'], list: ['cynergy-cookie-consent and cynergy_consent: remember your cookie choices for up to 12 months'] },
        { h: 'Functional', p: ['These remember settings, such as language or details you type in a form, to make the website easier to use.'] },
        { h: 'Analytics', p: ['These help us understand how people use the website, such as which pages are visited most. We may use tools like Google Analytics. They only run if you allow them.'] },
        { h: 'Marketing', p: ['These are set by advertising and social partners to show you relevant offers and to measure our campaigns. They only run if you allow them.'] },
      ],
    },
    { h: 'Your choices', p: ['When you first visit, you can accept all cookies, reject non-essential cookies, or customize your choices. You can change your mind at any time with the “Cookie settings” button in the footer of every page. You can also block or delete cookies in your browser settings, but some parts of the website may then stop working.'] },
    { h: 'More information', p: ['Read our Privacy Policy to learn how we handle your personal data. Questions? Call (212) 974-7252.'] },
  ],
};

export const legalDocs = [privacy, terms, cookies];
