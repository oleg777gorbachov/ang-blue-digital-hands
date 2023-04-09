import { ElementRef, Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ViewportService {
  element: ElementRef;
  observer!: IntersectionObserver;
  close: boolean;
  visible: boolean;
  threshold: number;
  constructor(
    element: ElementRef,
    @Inject(Boolean) close: boolean = true,
    @Inject(Number) threshold = 0.4
  ) {
    this.element = element;
    this.close = close;
    this.visible = this.isInViewport(element);
    this.threshold = threshold;
  }

  private callback = (
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        this.visible = true;
        if (this.close) {
          this.destroy();
        }
      } else {
        this.visible = false;
      }
    });
  };

  observe() {
    const element = this.element.nativeElement;
    const observer = new IntersectionObserver(this.callback, {
      root: null,
      rootMargin: '0px',
      threshold: this.threshold,
    });
    observer.observe(element);
    this.observer = observer;
  }
  destroy() {
    this.observer.disconnect();
  }

  isInViewport(el: ElementRef): boolean {
    const rect = el.nativeElement.getBoundingClientRect();

    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
}
