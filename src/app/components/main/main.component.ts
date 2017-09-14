import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ACTIVESTATE} from '../../enums/ACTIVESTATE';

@Component({
  selector: 'qa-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  flippedClass: string = '';
  active: ACTIVESTATE = ACTIVESTATE.front;
  frontId: number;
  backId: number;

  constructor(private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      this.frontId = params.id;
    });
  }

  flip() {
    if (this.active === ACTIVESTATE.front) {
      this.flippedClass = 'block--flipped';
      this.active = ACTIVESTATE.back;
    } else {
      this.flippedClass = '';
      this.active = ACTIVESTATE.front;
    }

    this.updateRoute();
  }

  frontUpdated(event) {
    this.frontId = event.id;
    this.updateRoute();
  }

  backUpdated(event) {
    this.backId = event.id;
    this.updateRoute();
  }

  updateRoute() {
    const nextId = this.active === ACTIVESTATE.front ? this.frontId : this.backId;
    this.router.navigate(['quotes', nextId]);
  }
}
