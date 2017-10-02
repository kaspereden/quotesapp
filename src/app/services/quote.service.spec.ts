import {TestBed, inject, async} from '@angular/core/testing';

import {QuoteService} from './quote.service';
import {HttpModule, ResponseOptions, XHRBackend} from '@angular/http';
import {MockBackend} from '@angular/http/testing';
import {Quote} from '../models/quote';

describe('QuoteService', () => {
  let service: QuoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuoteService, {provide: XHRBackend, useClass: MockBackend}
      ],
      imports: [HttpModule]
    });

    service = TestBed.get(QuoteService, null);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getRandomQuote should return Promise<Quote>', async () => {
    service.getRandomQuote().then(
      quote => expect(typeof quote).toEqual('Expected<Quote>')
    );
  });

  it('getQuoteById should return Promise<Quote>', async () => {
    service.getQuoteById(7).then(
      quote => expect(typeof quote).toEqual('Expected<Quote>')
    );
  });
});
