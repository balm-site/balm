import { Route } from '@angular/router';
import { AboutComponent } from './routes/about/about.component';
import { ConsultationsComponent } from './routes/consultations/consultations.component';
import { CounsellingComponent } from './routes/counselling/counselling.component';
import { CoupleCounsellingComponent } from './routes/couple-counselling/couple-counselling.component';
import { IndexComponent } from './routes/index/index.component';
import { LifeCoachingComponent } from './routes/life-coaching/life-coaching.component';
import { TraumaTherapyComponent } from './routes/trauma-therapy/trauma-therapy.component';

export const appRoutes: Route[] = [
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'consultations',
    component: ConsultationsComponent,
  },
  {
    path: 'counselling',
    component: CounsellingComponent,
  },
  {
    path: 'couple-counselling',
    component: CoupleCounsellingComponent,
  },
  {
    path: 'life-coaching',
    component: LifeCoachingComponent,
  },
  {
    path: 'trauma-therapy',
    component: TraumaTherapyComponent,
  },
  {
    path: '',
    component: IndexComponent,
  },
];
