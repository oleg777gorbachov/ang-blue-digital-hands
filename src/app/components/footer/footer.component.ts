import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  year = new Date().getFullYear();
  items: string[] = [
    'Home',
    'Services',
    'Resources',
    'Cases',
    'About Us',
    'Career',
    'Articles',
    'Contact',
    'Comment',
  ];
}
