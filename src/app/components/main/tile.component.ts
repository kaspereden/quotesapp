import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ACTIVESTATE} from '../../enums/ACTIVESTATE';



@Component({
  selector: 'qa-main',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {
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

  /**
   * Tileflip sets front/back to be active
   */
  flip() {
    if (this.active === ACTIVESTATE.front) {
      this.frontDoUpdate = true;
      this.flippedClass = 'tile--flipped';
      this.active = ACTIVESTATE.back;
    } else {
      this.backDoUpdate = true;
      this.flippedClass = '';
      this.active = ACTIVESTATE.front;
    }

    this.updateRoute();
  }

  /**
   * On updated event handler for back side of the tile
   * (re)set all variables
   *
   * @param event
   */
  frontUpdated(event) {
    this.frontId = event.id;
    this.updateRoute();

    this.frontDoUpdate = false;
  }

  /**
   * On updated event handler for back side of the tile
   * (re)set all variables
   *
   * @param event
   */
  backUpdated(event) {
    this.backId = event.id;
    this.updateRoute();

    this.backDoUpdate = false;
  }

  /**
   * On loading a new quote the navigation history gets updated
   * so you can actually share the link with anyone
   */
  updateRoute() {
    const nextId = this.active === ACTIVESTATE.front ? this.frontId : this.backId;
    this.router.navigate(['quotes', nextId]);
  }

  /**
   * Initialize shake functionality
   *
   * When you shake the device there will be loaded a new quote
   * this only works when your device supports the shake api.
   */
  initShake() {
    if (window['Shake']) {
      const shakeEvent = new window['Shake']({
        threshold: 10,
        timeout: 400
      });

      shakeEvent.start();

      window.addEventListener('shake', () => {
        this.flip();
      }, false);
    }
  }
}
