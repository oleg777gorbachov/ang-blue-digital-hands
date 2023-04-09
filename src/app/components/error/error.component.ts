import { ErrorService } from '../../services';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
})
export class ErrorComponent implements OnInit, OnDestroy {
  @Input() message!: string;

  constructor(public ErrorService: ErrorService) {}

  ngOnInit(): void {
    if (this.message) this.ErrorService.add(this.message);
  }

  ngOnDestroy(): void {
    this.ErrorService.delete(this.message);
  }

  close() {
    this.ErrorService.delete(this.message);
  }
}
