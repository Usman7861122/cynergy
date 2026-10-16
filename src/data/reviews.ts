// Short patient quotes from https://cynergypt.com/ . `place` is the location id when the site names one.
export type Story = { name: string; text: string; place?: string };

export const stories: Story[] = [
  { name: 'Julia', place: 'chelsea', text: 'After trying several practices, Julia found Chivonne at our Chelsea location. She was back to her normal activity about a month after a hamstring strain.' },
  { name: 'Katie K.', place: 'cobble-hill', text: 'Alvin, my PT, truly cares about my goals.' },
  { name: 'Avery K.', place: 'cobble-hill', text: 'Christine is a magician!' },
  { name: 'Deep B.', place: 'adpt', text: 'ADPT is by far the best PT establishment I’ve ever been to.' },
  { name: 'Maureen Stefanides', text: 'Praised the front desk team and her therapist’s skill and bedside manner. She has recommended Cynergy to her surgeon and her friends.' },
  { name: 'A.A.', text: 'Said Cynergy beat a past physical therapy experience and recommends it to others.' },
  { name: 'Lahcen Yahya', text: 'Thanked the staff and his therapist Gabrielle for relieving his back pain.' },
];

// Local stories first, then general ones, up to `n`.
export const storiesFor = (placeId?: string, n = 3) => {
  if (!placeId) return stories.filter((s) => !s.place).slice(0, n);
  const local = stories.filter((s) => s.place === placeId);
  const rest = stories.filter((s) => s.place !== placeId && !s.place);
  return [...local, ...rest].slice(0, n);
};
