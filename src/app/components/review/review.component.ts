import { ViewportService } from 'src/app/services';
import {
  Component,
  ViewChild,
  ElementRef,
  AfterViewInit,
  HostListener,
} from '@angular/core';
import * as Hammer from 'hammerjs';

interface ItemsI {
  author: string;
  desc: string;
  img: string;
  job: string;
}

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
})
export class ReviewComponent implements AfterViewInit {
  items: ItemsI[] = [
    {
      author: 'David Carlén',
      desc: 'Our relationship with asset creation, creating digital art and banners for their social media campaigns, including an April Fools "new product."Our relationship with asset creation, creating digital art and banners for their social media campaigns, including an April Fools "new product."',
      img: 'assets/review/marcus.png',
      job: 'Head of Performance - Starbreeze Studios',
    },
    {
      author: 'David Carlén',
      desc: 'Our relationship with asset creation, creating digital art and banners for their social media campaigns, including an April Fools "new product."Our relationship with asset creation, creating digital art and banners for their social media campaigns, including an April Fools "new product."',
      img: 'assets/review/marcus.png',
      job: 'Head of Performance - Starbreeze Studios',
    },
  ];

  private slide = 0;
  private slideMax = this.items.length - 1;

  styles() {
    return {
      width: this.items.length + '00%',
      transform: `translate(${
        this.slide > 0 ? '-' + 100 / (this.slide + 1) : 0
      }%, 0%)`,
    };
  }

  slideRight() {
    if (this.slide + 1 > this.slideMax) {
      this.slide = 0;
    } else {
      this.slide++;
    }
  }

  slideLeft() {
    if (this.slide - 1 < 0) {
      this.slide = this.slideMax;
    } else {
      this.slide--;
    }
  }

  @ViewChild('element') element!: ElementRef;
  @ViewChild('slider') slider!: ElementRef;

  @HostListener('window:keydown.arrowleft', ['$event'])
  onSwipeLeft(event: KeyboardEvent) {
    this.slideLeft();
  }

  @HostListener('window:keydown.arrowright', ['$event'])
  onSwipeRight(event: KeyboardEvent) {
    this.slideRight();
  }

  viewport?: ViewportService;
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.viewport = new ViewportService(this.element);
      this.viewport.observe();

      const hammer = new Hammer(this.slider.nativeElement);
      hammer.on('swipeleft', () => {
        if (this.slide === 0) return;
        this.slideLeft();
      });

      hammer.on('swiperight', () => {
        if (this.slide + 1 > this.slideMax) return;
        this.slideRight();
      });
    });
  }
}
