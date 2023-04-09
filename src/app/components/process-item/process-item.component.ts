import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-process-item',
  templateUrl: './process-item.component.html',
  styleUrls: ['./process-item.component.scss'],
})
export class ProcessItemComponent {
  @Input('title') title: string = '';
  @Input('desc') desc: string = '';
  @Input('icon') icon: string = '';
}
