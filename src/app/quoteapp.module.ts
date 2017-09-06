import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MainComponent } from './components/main/main.component';
import { QuoteComponent } from './components/quote/quote.component';

@NgModule({
  declarations: [
    MainComponent,
    QuoteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class QuoteAppModule { }
