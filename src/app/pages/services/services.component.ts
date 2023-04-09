import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ViewportService } from 'src/app/services';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicePage implements AfterViewInit {
  @ViewChild('element') element!: ElementRef;
  viewport?: ViewportService;

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.viewport = new ViewportService(this.element);
      this.viewport.observe();
    });
  }
}
