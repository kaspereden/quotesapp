import {TestBed, async} from '@angular/core/testing';

import {TileComponent} from './tile.component';
import {QuoteComponent} from '../quote/quote.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpModule} from '@angular/http';
import {ACTIVESTATE} from '../../enums/ACTIVESTATE';

import {appRoutes} from '../../approutes';


describe('TileComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TileComponent,
        QuoteComponent
      ],
      imports: [RouterTestingModule.withRoutes(appRoutes), HttpModule]
    }).compileComponents();
  }));

  it('should create the quotes app', async(() => {
    const fixture = TestBed.createComponent(TileComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have default active state`, async(() => {
    const fixture = TestBed.createComponent(TileComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.active).toEqual(ACTIVESTATE.front);
  }));

  it('should render quote tile', async(() => {
    const fixture = TestBed.createComponent(TileComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.tile__container').textContent).toBeDefined();
  }));
});
