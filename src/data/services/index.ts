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
import { sportsMedicine } from './sports-medicine';
import { danceMedicine } from './dance-medicine';
import { femaleAthleteTriad } from './female-athlete-triad';
import { kettlebell } from './kettlebell-training';
import { runningGait } from './running-gait-analysis';
import { returnToPlay } from './return-to-play';
import { tindeq } from './tindeq-load-readings';
import { womensSports } from './womens-sports-performance';
import { sportsPerformanceTraining } from './sports-performance-training';
import { executiveEdge } from './adult-athletic-development';
import { youthAthletic } from './youth-athletic-development';

export const treatServices = [backPain, footAnkle, hip, knee, vestibular, upperExtremity, pelvicFloor, tmj, chronicPain];
export const offerServices = [musicians, pilates, prenatal, osteoporosis, mckenzie, pelvicGut, malePelvic];
export const services = [...treatServices, ...offerServices];
export const sportsServices = [sportsMedicine, danceMedicine, femaleAthleteTriad, kettlebell, runningGait, returnToPlay, tindeq, womensSports, sportsPerformanceTraining, executiveEdge, youthAthletic];

/** Locations that have a page for this service. */
export const locationsFor = (s: Service) => (s.locationIds ? locations.filter((l) => s.locationIds!.includes(l.id)) : locations);
export { servicePath, localPath } from './types';
export type { Service } from './types';

import { locations } from '@/data/locations';
import type { Service } from './types';

/** Pages for one URL folder: the general page plus one page per location. */
export const pathsFor = (dir: Service['dir']) =>
  [...services, ...sportsServices]
    .filter((s) => s.dir === dir)
    .flatMap((svc) => [
      { params: { slug: svc.slug }, props: { svc } },
      ...locationsFor(svc).map((loc) => ({ params: { slug: `${svc.slug}-${loc.id}` }, props: { svc, loc } })),
    ]);
