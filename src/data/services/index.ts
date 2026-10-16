import { backPain } from './back-pain';
import { footAnkle } from './foot-ankle';
import { hip } from './hip';
import { knee } from './knee';
import { vestibular } from './vestibular';
import { upperExtremity } from './upper-extremity';
import { pelvicFloor } from './pelvic-floor';
import { tmj } from './tmj';
import { chronicPain } from './chronic-pain';
import { musicians } from './musicians';
import { pilates } from './pilates';
import { prenatal } from './prenatal';
import { osteoporosis } from './osteoporosis';
import { mckenzie } from './mckenzie';
import { pelvicGut } from './pelvic-gut';
import { malePelvic } from './male-pelvic';

export const treatServices = [backPain, footAnkle, hip, knee, vestibular, upperExtremity, pelvicFloor, tmj, chronicPain];
export const offerServices = [musicians, pilates, prenatal, osteoporosis, mckenzie, pelvicGut, malePelvic];
export const services = [...treatServices, ...offerServices];

/** Locations that have a page for this service. */
export const locationsFor = (s: Service) => (s.locationIds ? locations.filter((l) => s.locationIds!.includes(l.id)) : locations);
export { servicePath, localPath } from './types';
export type { Service } from './types';

import { locations } from '@/data/locations';
import type { Service } from './types';

/** Pages for one URL folder: the general page plus one page per location. */
export const pathsFor = (dir: Service['dir']) =>
  services
    .filter((s) => s.dir === dir)
    .flatMap((svc) => [
      { params: { slug: svc.slug }, props: { svc } },
      ...locationsFor(svc).map((loc) => ({ params: { slug: `${svc.slug}-${loc.id}` }, props: { svc, loc } })),
    ]);
