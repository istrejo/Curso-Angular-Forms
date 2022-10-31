import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MyValidators } from '../../../utils/validators';

import { AuthService } from './../../../core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.buildForm();
  }

  ngOnInit() {}

  register(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const value = this.form.value;
      this.authService.createUser(value.email, value.password).then(() => {
        this.router.navigate(['/auth/login']);
      });
    }
  }

  private buildForm() {
    this.form = this.formBuilder.group(
      {
        email: ['', [Validators.required]],
        password: ['', [Validators.required, MyValidators.validatePassword]],
        confirmPassword: ['', [Validators.required]],
      },
      {
        validators: MyValidators.matchPasswords,
      }
    );
  }

  get passwordField() {
    return this.form.get('password');
  }
  get confirmPasswordField() {
    return this.form.get('confirmPassword');
  }
}
