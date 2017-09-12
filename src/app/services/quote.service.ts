import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Quote} from '../models/quote';


@Injectable()
export class QuoteService {
  serviceUri: string = 'http://quotes.stormconsultancy.co.uk/';
  quoteTypes: any = {
    random: 'random.json',
    number: 'quotes/[num].json'
  };

  constructor(private http: Http) {
  }

  getRandomQuote(): Promise<Quote> {
    return this.http.get(this.serviceUri + this.quoteTypes.random)
      .toPromise().then((response) => {
        return response.json();
      }, () => {
        return {
          id: 0,
          permalink: '/',
          quote: 'failed, the resource has',
          author: 'Yoda'
        };
      });
  }

  getQuote(number: number): Promise<Quote> {
    const url = this.serviceUri + this.quoteTypes.number.replace('[num]', number);
    return this.http.get(url)
      .toPromise().then((response) => {
        return response.json();
      }, () => {
        return {
          id: 0,
          permalink: '/',
          quote: 'failed, the resource has',
          author: 'Yoda'
        };
      });
  }
}

