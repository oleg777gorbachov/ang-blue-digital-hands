import { Injectable } from '@angular/core';

interface ErrorI {
  message: string;
  hide: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  errors: ErrorI[] = [];
  timeout = 5000;

  private isInclude(error: string) {
    let include = false;
    this.errors.forEach((e) => (e.message === error ? (include = true) : null));
    return include;
  }

  add(error: string) {
    if (!this.isInclude(error)) {
      this.errors.push({ message: error, hide: false });
      setTimeout(() => {
        this.delete(error);
      }, this.timeout);
    }
  }

  delete(error: string) {
    let index = -1;
    this.errors.forEach((e, i) => (e.message === error ? (index = i) : null));
    if (index === -1) return;
    this.errors[index] = { ...this.errors[index], hide: true };
    setTimeout(
      () => (this.errors = this.errors.filter((e) => e.message !== error)),
      300
    );
  }
  fastDelete(error: string) {
    this.errors = this.errors.filter((e) => e.message !== error);
  }
}
