import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprouterComponent } from './approuter.component';

describe('ApprouterComponent', () => {
  let component: ApprouterComponent;
  let fixture: ComponentFixture<ApprouterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprouterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
