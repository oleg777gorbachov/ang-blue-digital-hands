import { ViewportService } from './../../services';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
})
export class ClientComponent implements AfterViewInit {
  @ViewChild('element') element!: ElementRef;

  viewport?: ViewportService;

  ngAfterViewInit() {
    setTimeout(() => {
      this.viewport = new ViewportService(this.element, true);
      this.viewport.observe();
    });
  }

  images = [
    'assets/clients/client.png',
    'assets/clients/client.png',
    'assets/clients/client.png',
    'assets/clients/client.png',
    'assets/clients/client.png',
    'assets/clients/client.png',
    'assets/clients/client.png',
  ];
}
