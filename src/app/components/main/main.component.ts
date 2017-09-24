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
  frontDoUpdate: boolean = false;
  backDoUpdate: boolean = false;

  constructor(private router: Router,
              private route: ActivatedRoute) {
    this.initShake();
  }

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      this.frontId = params.id;
    });
  }

  flip() {
    if (this.active === ACTIVESTATE.front) {
      this.frontDoUpdate = true;
      this.flippedClass = 'block--flipped';
      this.active = ACTIVESTATE.back;
    } else {
      this.backDoUpdate = true;
      this.flippedClass = '';
      this.active = ACTIVESTATE.front;
    }

    this.updateRoute();
  }

  frontUpdated(event) {
    this.frontId = event.id;
    this.updateRoute();

    this.frontDoUpdate = false;
  }

  backUpdated(event) {
    this.backId = event.id;
    this.updateRoute();

    this.backDoUpdate = false;
  }

  updateRoute() {
    const nextId = this.active === ACTIVESTATE.front ? this.frontId : this.backId;
    this.router.navigate(['quotes', nextId]);
  }

  initShake() {
    if (window['Shake']) {
      const shakeEvent = new window['Shake']({
        threshold: 10, // optional shake strength threshold
        timeout: 400 // optional, determines the frequency of event generation
      });

      shakeEvent.start();

      window.addEventListener('shake', () => {
        this.flip();
      }, false);
    }
  }
}
