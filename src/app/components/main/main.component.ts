import {Component} from '@angular/core';

@Component({
  selector: 'qa-root',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  flippedClass: string = '';

  flip() {
    if (this.flippedClass === '') {
      this.flippedClass = 'block--flipped';
    } else {
      this.flippedClass = '';
    }

    // @TODO: after flip update quote instead of using timout
  }
}
