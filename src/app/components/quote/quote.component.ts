import {Component, OnInit} from '@angular/core';
import {QuoteService} from '../../services/quote.service';
import {Quote} from '../../models/quote';


@Component({
  selector: 'qa-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss'],
  providers: [QuoteService]
})
export class QuoteComponent implements OnInit {

  quote: Quote;

  constructor(private quoteService: QuoteService) {
  }

  ngOnInit() {
    this.quoteService.getRandomQuote().then((quote: Quote) => {
      this.quote = quote;
    });
  }

}
