import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import AOS from 'aos';
@Component({
  selector: 'app-pro2',
  templateUrl: './pro2.component.html',
  styleUrls: ['./pro2.component.css'],
})
export class Pro2Component implements OnInit {
  // ===============================form 1================================
  public myForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    AOS.init();
    this.myForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      console.warn('Form submitted:', this.myForm.value);
    } else {
      this.myForm.markAllAsTouched();
    }
  }

  // =======================form 2==================
  loginForm = new FormGroup({
    id: new FormControl('', [Validators.required]),
    // Validators.email for email
    password: new FormControl('', Validators.required),
  });

  loginUser() {
    console.warn(this.loginForm.value);
  }
  get id() {
    return this.loginForm.get('id');
  }
  get password() {
    return this.loginForm.get('password');
  }
}
