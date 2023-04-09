import { ErrorService, ViewportService } from './../../services';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements AfterViewInit {
  myForm!: FormGroup;
  formErrorMessage = 'Your form invalid';
  @ViewChild('element') element!: ElementRef;

  viewport?: ViewportService;

  ngAfterViewInit() {
    setTimeout(() => {
      this.viewport = new ViewportService(this.element, true);
      this.viewport.observe();
    });
  }
  constructor(
    private formBuilder: FormBuilder,
    private ErrorService: ErrorService
  ) {
    this.myForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.minLength(3)]],
      comment: ['', [Validators.required, Validators.minLength(25)]],
    });
  }

  submit(e: Event) {
    e.preventDefault();
    if (!this.myForm.valid) {
      this.ErrorService.fastDelete(this.formErrorMessage);
      this.ErrorService.add(this.formErrorMessage);
      return;
    }
  }

  get name() {
    return this.myForm.controls.name;
  }

  get email() {
    return this.myForm.controls.email;
  }

  get subject() {
    return this.myForm.controls.subject;
  }

  get comment() {
    return this.myForm.controls.comment;
  }
}
