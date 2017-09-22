import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange} from '@angular/core';
import {QuoteService} from '../../services/quote.service';
import {Quote} from '../../models/quote';


@Component({
  selector: 'qa-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss'],
  providers: [QuoteService]
})
export class QuoteComponent implements OnInit, OnChanges {

  quote: Quote;

  @Output() change: EventEmitter<any> = new EventEmitter();
  @Input() quoteId: number;
  @Input() doUpdate: number;

  constructor(private quoteService: QuoteService) {
  }

  ngOnInit() {
    this.quoteService.getQuote(this.quoteId).then((quote) => {
      this.setQuote(quote);
    });
  }

  update() {
    this.quoteService.getRandomQuote().then((quote) => {
        this.setQuote(quote);
      });
  }

  setQuote(quote) {
    this.quote = quote;
    this.change.emit({id: this.quote.id});
  }


  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    for (const propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        if (propName === 'doUpdate' && changes[propName].currentValue === true) {
          this.update();
        }
      }
    }
  }
}
