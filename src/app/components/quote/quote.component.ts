import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
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

  @Output() change: EventEmitter<any> = new EventEmitter();
  @Input() quoteId: number;

  constructor(private quoteService: QuoteService) {
  }

  ngOnInit() {
    this.quoteService.getQuote(this.quoteId).then((quote) => {
      this.setQuote(quote);
    });
  }

  update() {
    setTimeout(() => {
      this.quoteService.getRandomQuote().then((quote) => {
        this.setQuote(quote);
      });
    }, 600);
  }

  setQuote(quote) {
    this.quote = quote;
    this.change.emit({id: this.quote.id});
  }
}
