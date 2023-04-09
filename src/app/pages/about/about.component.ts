import { Component } from '@angular/core';

interface ItemsI {
  title: string;
  desc: string;
  icon: string;
}

@Component({
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutPage {
  items: ItemsI[] = [
    {
      title: 'Research',
      desc: `Need some help standing out and growing your business? At Blue Hands, we specialize in helping businesses attract new customers and to establish strong brand awareness.
      ‍`,
      icon: 'assets/svg/search.svg',
    },
    {
      title: 'Planning',
      desc: `Need some help standing out and growing your business? At Blue Hands, we specialize in helping businesses attract new customers and to establish strong brand awareness.
      ‍`,
      icon: 'assets/svg/settings.svg',
    },
    {
      title: 'Execution',
      desc: `Need some help standing out and growing your business? At Blue Hands, we specialize in helping businesses attract new customers and to establish strong brand awareness.
      ‍`,
      icon: 'assets/svg/megaphone.svg',
    },
  ];
}
