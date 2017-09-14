import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {MainComponent} from './components/main/main.component';
import {QuoteComponent} from './components/quote/quote.component';
import {HttpModule} from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import { ApprouterComponent } from './components/approuter/approuter.component';


const appRoutes: Routes = [
  {path: 'quotes/:id', component: MainComponent},
  {path: 'quotes', component: MainComponent},
  {path: '', pathMatch: 'full', redirectTo: '/quotes'}
];

@NgModule({
  declarations: [
    MainComponent,
    QuoteComponent,
    ApprouterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [ApprouterComponent]
})
export class QuoteAppModule {
}

