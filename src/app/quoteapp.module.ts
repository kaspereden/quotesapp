import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {TileComponent} from './components/tile/tile.component';
import {QuoteComponent} from './components/quote/quote.component';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {ApprouterComponent} from './components/approuter/approuter.component';
import {appRoutes} from './approutes';


@NgModule({
  declarations: [
    TileComponent,
    QuoteComponent,
    ApprouterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  providers: [],
  bootstrap: [ApprouterComponent]
})
export class QuoteAppModule {
}

