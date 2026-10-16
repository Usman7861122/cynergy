export type Location = {
  id: string;
  name: string;
  line1: string;
  city: string;
  phone: string;
  href: string;
  lead: string;
  /** Name of the clinic director as written in providers.ts */
  director: string;
  /** Nearby neighborhoods, used in SEO text */
  nearby: string;
};

// Hours are not listed on the current site, so they are not shown.
export const locations: Location[] = [
  { id: 'midtown-west', name: 'Midtown West', line1: '119 West 57th Street, Suite 600', city: 'New York, NY 10019', phone: '(212) 974-7252', href: '/locations/midtown-west/', lead: 'Bridgit Shaefer, PT, DPT — Clinical Director', director: 'Bridgit Shaefer', nearby: 'Columbus Circle, Hell’s Kitchen, Lincoln Square, the Upper West Side, Central Park South and Times Square' },
  { id: 'midtown-east', name: 'Midtown East', line1: '485 Madison Avenue, 8th Floor', city: 'New York, NY 10022', phone: '(212) 980-2963', href: '/locations/midtown-east/', lead: 'Jessica Zaeri, PT, DPT — Clinical Director', director: 'Jessica Zaeri', nearby: 'Murray Hill, Turtle Bay, Grand Central, Kips Bay, Sutton Place and the Upper East Side' },
  { id: 'chelsea', name: 'Chelsea', line1: '135 West 27th Street, 2nd Floor', city: 'New York, NY 10001', phone: '(212) 255-8080', href: '/locations/chelsea/', lead: 'Aaron Lentz, PT, DPT, SFMA — Clinical Director', director: 'Aaron Lentz', nearby: 'Flatiron, NoMad, the Garment District, West Village, Gramercy and Hudson Yards' },
  { id: 'cobble-hill', name: 'Cobble Hill', line1: '166 Smith Street', city: 'Brooklyn, NY 11201', phone: '(718) 795-2744', href: '/locations/cobble-hill/', lead: 'Chivonne Henriques, PT, DPT, OCS — Clinical Director', director: 'Chivonne Henriques', nearby: 'Carroll Gardens, Boerum Hill, Brooklyn Heights, Downtown Brooklyn, Red Hook and Park Slope' },
  { id: 'adpt', name: 'ADPT Powered by Rise', line1: '119 West 57th Street, Suite 200', city: 'New York, NY 10019', phone: '(212) 292-7145', href: '/locations/adpt-by-cynergy/', lead: 'Alvin Dike & Michael Lazara — Clinical Directors', director: 'Alvin Dike', nearby: 'Columbus Circle, Hell’s Kitchen, Lincoln Square, the Upper West Side, Central Park South and Times Square' },
  { id: 'wellness-den', name: 'The Wellness Den', line1: '177 East 87th Street, Suite 206', city: 'New York, NY 10128', phone: '(212) 292-7117', href: '/locations/the-wellness-den-by-cynergy/', lead: 'Laurence V. Agénor, PT, DPT, CSCS — Clinical Director', director: 'Laurence V. Agénor', nearby: 'Carnegie Hill, Yorkville, the Upper East Side, East Harlem and Lenox Hill' },
];

export const mapSrc = (l: Location) =>
  `https://maps.google.com/maps?q=${encodeURIComponent(`${l.line1}, ${l.city}`)}&z=15&output=embed`;
export const directionsHref = (l: Location) =>
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(`${l.line1}, ${l.city}`)}`;
export const telHref = (l: Location) => `tel:+1${l.phone.replace(/\D/g, '')}`;
