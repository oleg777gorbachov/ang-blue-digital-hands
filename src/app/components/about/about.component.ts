import { ViewportService } from './../../services/viewport.service';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements AfterViewInit {
  @ViewChild('element') element!: ElementRef;

  viewport?: ViewportService;
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.viewport = new ViewportService(this.element);
      this.viewport.observe();
    });
  }
}
