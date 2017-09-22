
import {Routes} from '@angular/router';
import {MainComponent} from './components/main/main.component';

export const appRoutes: Routes = [
  {path: 'quotes/:id', component: MainComponent},
  {path: 'quotes', component: MainComponent},
  {path: '', pathMatch: 'full', redirectTo: '/quotes'}
];
