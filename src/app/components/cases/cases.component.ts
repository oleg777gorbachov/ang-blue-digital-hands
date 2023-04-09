import { ViewportService } from 'src/app/services';
import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';

interface ItemI {
  title: string;
  desc: string;
}

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.scss'],
})
export class CasesComponent implements AfterViewInit {
  items: ItemI[] = [
    {
      title: 'How to Set Up the Best SEO for Your Website',
      desc: 'Many might think that the more social media platforms you advertise on, the better the results are gonna be. We at Blue Hands disagree. If there are long-term results and big engagement you want, you will need to find the platforms that your audience are using.',
    },
    {
      title: 'How to Set Up the Best SEO for Your Website',
      desc: 'Many might think that the more social media platforms you advertise on, the better the results are gonna be. We at Blue Hands disagree. If there are long-term results and big engagement you want, you will need to find the platforms that your audience are using.',
    },
    {
      title: 'How to Set Up the Best SEO for Your Website',
      desc: 'Many might think that the more social media platforms you advertise on, the better the results are gonna be. We at Blue Hands disagree. If there are long-term results and big engagement you want, you will need to find the platforms that your audience are using.',
    },
    {
      title: 'How to Set Up the Best SEO for Your Website',
      desc: 'Many might think that the more social media platforms you advertise on, the better the results are gonna be. We at Blue Hands disagree. If there are long-term results and big engagement you want, you will need to find the platforms that your audience are using.',
    },
  ];

  @ViewChild('element') element!: ElementRef;

  viewport?: ViewportService;
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.viewport = new ViewportService(this.element);
      this.viewport.observe();
    });
  }
}
