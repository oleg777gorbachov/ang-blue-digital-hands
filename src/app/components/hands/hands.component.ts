import { ViewportService } from 'src/app/services';
import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

interface ItemsI {
  title: string;
  items: string[];
}

@Component({
  selector: 'app-hands',
  templateUrl: './hands.component.html',
  styleUrls: ['./hands.component.scss'],
})
export class HandsComponent implements AfterViewInit {
  @ViewChild('element') element!: ElementRef;
  viewport?: ViewportService;

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.viewport = new ViewportService(this.element);
      this.viewport.observe();
    }, 0);
  }

  items: ItemsI[] = [
    {
      title: 'Paid Social',
      items: ['Experience', 'Hands on 24/7', 'DWTK'],
    },
    {
      title: 'SEO',
      items: ['Experience', 'Hands on 24/7', 'DWTK', 'Hands on 24/7', 'DWTK'],
    },
    {
      title: 'Google Ads',
      items: ['Experience', 'Hands on 24/7', 'DWTK', 'Hands on 24/7'],
    },
    {
      title: 'Content',
      items: ['Experience', 'Hands on 24/7', 'DWTK'],
    },
  ];
}
