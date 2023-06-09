import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, TemplateRef, ViewChild, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'balm-landing',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent {
  sections = [
    {
      title: 'Consultations',
      image: './assets/images/circles/consultations.jpg',
      target: 'consultations',
    },
    {
      title: 'Counselling',
      image: './assets/images/circles/counselling.jpg',
      target: 'counselling',
    },
    {
      title: 'Life Coaching',
      image: './assets/images/circles/life-coaching.jpg',
      target: 'life-coaching',
    },
    {
      title: 'Couple Counselling',
      description: 'Brief description text goes here',
      image: './assets/images/circles/couple-counselling.jpg',
      target: 'couple-counselling',
    },
    {
      title: 'Trauma Therapy',
      image: './assets/images/circles/emdr.png',
      target: 'trauma-therapy',
    },
  ];

  formGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    subject: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required]),
  });

  private readonly _http = inject(HttpClient);

  private readonly _modalService = inject(NgbModal);

  @ViewChild('success', { static: true }) successModal!: TemplateRef<void>;

  @ViewChild('failure', { static: true }) failureModal!: TemplateRef<void>;

  submit() {
    // ensure all fields are complete
    if (this.formGroup.invalid) {
      return;
    }

    this._http
      .post('https://formspree.io/joanne44shiels@gmail.com', {
        name: this.formGroup.value.name,
        phone: this.formGroup.value.phone,
        email: this.formGroup.value.email,
        subject: this.formGroup.value.subject,
        message: this.formGroup.value.message,
      })
      .subscribe({
        next: () => {
          this._modalService.open(this.successModal, { centered: true, animation: false });
        },
        error: () => {
          this._modalService.open(this.failureModal, { centered: true, animation: false });
        },
      });
  }
}
