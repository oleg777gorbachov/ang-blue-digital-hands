import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input() text: string = 'btn';
  @Input() bg: string = '';
  @Input() border: string = '';
  @Input() textColor: string = 'black';

  stylesCheck() {
    const styles: any = {
      color: this.textColor,
    };

    if (this.border) {
      styles.border = '1px solid ' + this.border;
    }

    if (this.bg) {
      styles.background = this.bg;
    }

    return styles;
  }
}
