import { Component } from '@angular/core';
import { MenuI } from 'src/app/types/MenuI';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  state = false;
  items: MenuI[] = [
    {
      label: 'Services',
      path: 'service',
    },
    {
      label: 'Resources',
      path: '',
    },
    {
      label: 'Cases',
      path: '',
    },
    {
      label: 'About Us',
      path: 'about',
    },
    {
      label: 'Career',
      path: '',
    },
    {
      label: 'Contact',
      path: '',
    },
    {
      label: 'Sv',
      path: '',
    },
  ];

  click() {
    this.state = false;
  }
}
