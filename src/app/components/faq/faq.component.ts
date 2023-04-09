import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ViewportService } from 'src/app/services';

interface ItemI {
  title: string;
  desc: string;
}

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
})
export class FaqComponent implements AfterViewInit {
  items: ItemI[] = [
    {
      title: 'What do you do?',
      desc: `Need some help standing out and growing your business? At Blue Hands, we specialize in helping businesses attract new customers and to establish strong brand awareness. Our customized, performance-based marketing strategies are proven to grow and stimulate businesses of all shapes, sizes and niches. ‍`,
    },
    {
      title: 'What are your prices?',
      desc: `Need some help standing out and growing your business? At Blue Hands, we specialize in helping businesses attract new customers and to establish strong brand awareness. Our customized, performance-based marketing strategies are proven to grow and stimulate businesses of all shapes, sizes and niches. ‍`,
    },
    {
      title: 'How do we get started?',
      desc: `Need some help standing out and growing your business? At Blue Hands, we specialize in helping businesses attract new customers and to establish strong brand awareness. Our customized, performance-based marketing strategies are proven to grow and stimulate businesses of all shapes, sizes and niches. ‍`,
    },
    {
      title: 'Are you recruting?',
      desc: `Need some help standing out and growing your business? At Blue Hands, we specialize in helping businesses attract new customers and to establish strong brand awareness. Our customized, performance-based marketing strategies are proven to grow and stimulate businesses of all shapes, sizes and niches. ‍`,
    },
    {
      title: 'What do you do?',
      desc: `Need some help standing out and growing your business? At Blue Hands, we specialize in helping businesses attract new customers and to establish strong brand awareness. Our customized, performance-based marketing strategies are proven to grow and stimulate businesses of all shapes, sizes and niches. ‍`,
    },
  ];
  @ViewChild('element') element!: ElementRef;
  viewport?: ViewportService;

  ngAfterViewInit() {
    setTimeout(() => {
      this.viewport = new ViewportService(this.element, true);
      this.viewport.observe();
    });
  }
}
