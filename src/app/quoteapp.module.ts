import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {MainComponent} from './components/main/main.component';
import {QuoteComponent} from './components/quote/quote.component';
import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    MainComponent,
    QuoteComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class QuoteAppModule {
}


// TODO: Add routing
