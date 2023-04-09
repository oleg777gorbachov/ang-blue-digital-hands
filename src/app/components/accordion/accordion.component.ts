import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent {
  state = false;

  @Input('title') title: string = '';
  @Input('desc') desc: string = '';

  styles() {
    if (this.state) {
      return {
        maxHeight: '1000px',
      };
    }
    return {
      maxHeight: '0px',
    };
  }

  toggle() {
    this.state = !this.state;
  }
}
