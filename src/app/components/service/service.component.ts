import { ViewportService } from './../../services';
import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  Input,
} from '@angular/core';

interface ServiceI {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss'],
})
export class ServiceComponent implements AfterViewInit {
  @ViewChild('element') element!: ElementRef;
  @Input('title') title = true;
  viewport?: ViewportService;

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.viewport = new ViewportService(this.element, true, 0.2);
      this.viewport.observe();
    });
  }

  services: ServiceI[] = [
    {
      icon: 'assets/svg/phone.svg',
      title: 'Paid social',
      description:
        'Many might think that the more social media platforms you advertise on, the better the results are gonna be. We at Blue Hands disagree. If there are long-term results and big engagement you want, you will need to find the platforms that your audience are using.',
    },
    {
      icon: 'assets/svg/search.svg',
      title: 'SEO',
      description:
        'Many might think that the more social media platforms you advertise on, the better the results are gonna be. We at Blue Hands disagree. If there are long-term results and big engagement you want, you will need to find the platforms that your audience are using.',
    },
    {
      icon: 'assets/svg/megaphone.svg',
      title: 'Google Ads',
      description:
        'Many might think that the more social media platforms you advertise on, the better the results are gonna be. We at Blue Hands disagree. If there are long-term results and big engagement you want, you will need to find the platforms that your audience are using.',
    },
    {
      icon: 'assets/svg/camera.svg',
      title: 'Content',
      description:
        'Many might think that the more social media platforms you advertise on, the better the results are gonna be. We at Blue Hands disagree. If there are long-term results and big engagement you want, you will need to find the platforms that your audience are using.',
    },
  ];
}
