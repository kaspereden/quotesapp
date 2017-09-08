import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Quote} from '../models/quote';



@Injectable()
export class QuoteService {
  serviceUri: string = 'http://quotes.stormconsultancy.co.uk/';
  quoteTypes: any = {
    random: 'random.json'
  };

  constructor(private http: Http) {
  }

  /**
   *
   * @returns {Promise<TResult2|TResult1>}
   */
  getRandomQuote(): Promise<Quote> {
    return this.http.get(this.serviceUri + this.quoteTypes.random)
      .toPromise().then((response) => {
        return response.json();
      });
  }
}

// alternate endpoint:
// http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=mycallback
