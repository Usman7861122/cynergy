const U = 'https://cynergypt.com/wp-content/uploads/';

export const ceo = {
  name: 'Cynthia Gormezano',
  credentials: 'PT, MPT',
  role: 'CEO & Founder',
  image: U + '2025/07/Cynthia-Gormezano.jpeg-e1750677287203-1.png',
  href: '/provider/',
};

export type Provider = { name: string; credentials: string; role: string; image: string; href: string };

export const leaders: Provider[] = [
  { name: 'Aaron Lentz', credentials: 'PT, DPT, SFMA', role: 'Clinical Director, Chelsea', image: U + '2025/07/Aaron-Lentz.jpeg.avif', href: '/biography/aaron-lentz/' },
  { name: 'Bridgit Shaefer', credentials: 'PT, DPT', role: 'Clinical Director, Midtown West', image: U + '2026/01/IMG_3793-1-scaled-e1775765968189.jpg', href: '/biography/bridgit-shaefer/' },
  { name: 'Chivonne Henriques', credentials: 'PT, DPT, OCS', role: 'Clinical Director, Cobble Hill', image: U + '2025/07/Chivonne-Henriques.jpeg-1.avif', href: '/biography/chivonne-henriques/' },
  { name: 'Jessica Zaeri', credentials: 'PT, DPT', role: 'Clinical Director, Midtown East', image: U + '2025/10/Jessica-Zaeri.jpeg-e1760120311987.avif', href: '/biography/jessica-zaeri/' },
  { name: 'Laurence V. Agénor', credentials: 'PT, DPT, CSCS', role: 'Clinical Director, The Wellness Den', image: U + '2025/07/Laurence-Agenor-scaled.avif', href: '/biography/laurence-agenor/' },
  { name: 'Amira Murtazaeva', credentials: 'PT, DPT, CFSC', role: 'Director of Mentorship', image: U + '2025/07/IMG_3276-scaled-e1733520227832.jpg', href: '/biography/amira-murtazaeva/' },
  { name: 'Christine M. Rodriguez', credentials: 'MS, OTR/L, CHT, CLT-UE', role: 'Regional Director, Upper Extremity', image: U + '2025/07/Christine-Rodriguez.jpeg.avif', href: '/biography/christine-rodriguez/' },
  { name: 'Alvin Dike', credentials: 'PT, DPT, OCS, CSCS', role: 'Clinical Director, ADPT Powered by Rise', image: U + '2025/07/Alvin-Dike.jpeg.avif', href: '/biography/alvin-dike/' },
  { name: 'Melissa Lam', credentials: 'PT, DPT, SFMA', role: 'Regional Director, Midtown East', image: U + '2025/07/Melissa-Lam.jpeg.avif', href: '/biography/melissa-lam/' },
  { name: 'Shereen Tan', credentials: 'PT, CHT', role: 'Regional Director, Chelsea', image: U + '2025/07/Shereen-Tan.jpeg.avif', href: '/biography/shereen-tan/' },
];

