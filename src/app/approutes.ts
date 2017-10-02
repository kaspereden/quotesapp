
import {Routes} from '@angular/router';
import {TileComponent} from './components/tile/tile.component';

export const appRoutes: Routes = [
  {path: 'quotes/:id', component: TileComponent},
  {path: 'quotes', component: TileComponent},
  {path: '', pathMatch: 'full', redirectTo: '/quotes'}
];
