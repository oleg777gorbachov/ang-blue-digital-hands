import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  ViewChild,
} from '@angular/core';
import { ViewportService } from 'src/app/services';

interface snowflakeI {
  x: number;
  y: number;
  size: number;
  speed: number;
}

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss'],
})
export class StarsComponent implements AfterViewInit {
  @ViewChild('snowfall')
  canvas!: ElementRef<HTMLCanvasElement>;
  @ViewChild('rocket')
  rocket!: ElementRef<HTMLImageElement>;
  @ViewChild('container')
  container!: ElementRef<HTMLDivElement>;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    const canvas = this.canvas.nativeElement;
    const container = this.container.nativeElement;
    canvas.width = container.clientWidth;
    canvas.height = container.clientHeight;
    this.snowflakes = this.snowflakes.map((e) => {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: e.size,
        speed: e.speed,
      };
    });
  }

  viewport?: ViewportService;
  snowflakes: snowflakeI[] = [];

  ngAfterViewInit(): void {
    setTimeout(() => {
      // Initialize snowflake positions, sizes, and velocities
      const canvas = this.canvas.nativeElement;
      const ctx = canvas.getContext('2d');

      this.canvas.nativeElement.width =
        this.container.nativeElement.clientWidth;
      this.canvas.nativeElement.height =
        this.container.nativeElement.clientHeight;

      const numFlakes = 1000;

      for (let i = 0; i < numFlakes; i++) {
        this.snowflakes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2,
          speed: Math.random(),
        });
      }

      const animate = () => {
        if (!ctx) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        this.snowflakes.forEach((flake) => {
          ctx.beginPath();
          ctx.arc(flake.x, flake.y, flake.size, 0, Math.PI * 2);
          ctx.fillStyle = '#ffffff';
          ctx.fill();

          flake.y += flake.speed;
          if (flake.y > canvas.height) {
            flake.y = 0;
          }
        });

        requestAnimationFrame(animate);
      };

      animate();

      this.viewport = new ViewportService(this.canvas, true);
      this.viewport.observe();
    });
  }
}
