import {TestBed, async} from '@angular/core/testing';

import {MainComponent} from './main.component';
import {QuoteComponent} from '../quote/quote.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpModule} from '@angular/http';
import {ACTIVESTATE} from '../../enums/ACTIVESTATE';
import {Router} from '@angular/router';

class MockRouter {
  navigate(obj: Array<string>) {
    return obj;
  }
}

describe('MainComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MainComponent,
        QuoteComponent
      ],
      imports: [RouterTestingModule, HttpModule],
      // providers: [{
      //   provide: Router,
      //   useClass: MockRouter
      // }]
    }).compileComponents();
  }));

  it('should create the quotes app', async(() => {
    const fixture = TestBed.createComponent(MainComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have default active state`, async(() => {
    const fixture = TestBed.createComponent(MainComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.active).toEqual(ACTIVESTATE.front);
  }));

  xit('should render quote block', async(() => {
    const fixture = TestBed.createComponent(MainComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.block__container').textContent).toBeDefined();
  }));
});
