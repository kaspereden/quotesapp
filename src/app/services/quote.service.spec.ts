import { TestBed, inject } from '@angular/core/testing';

import { QuoteService } from './quote.service';
import {HttpModule} from '@angular/http';

describe('QuoteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuoteService],
      imports: [HttpModule]
    });
  });

  it('should be created', inject([QuoteService], (service: QuoteService) => {
    expect(service).toBeTruthy();
  }));
});
