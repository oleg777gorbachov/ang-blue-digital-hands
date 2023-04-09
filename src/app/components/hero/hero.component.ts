import { Component, ElementRef, ViewChild } from '@angular/core';
import { ViewportService } from 'src/app/services';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent {
  title = 'Your helping hand in digital marketing';
  description =
    'We are a digital marketing agency specialized in making you grow';

  visibleInfo = false;

  toUp() {
    console.log('click');
    window.scrollTo({ top: 0 });
  }

  @ViewChild('element') element!: ElementRef;

  viewport?: ViewportService;

  ngAfterViewInit() {
    setTimeout(() => {
      this.viewport = new ViewportService(this.element, false);
      this.viewport.observe();
    });
    setTimeout(() => {
      this.visibleInfo = true;
    }, 600);
  }
}
