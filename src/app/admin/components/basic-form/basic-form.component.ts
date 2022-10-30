import { Component, OnInit } from '@angular/core';

import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';

import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss'],
})
export class BasicFormComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.initForm();
  }

  ngOnInit(): void {
    // this.nameField.valueChanges.subscribe(console.log);
    // this.form.valueChanges.subscribe(console.log);
  }

  private initForm(): FormGroup {
    return this.fb.group({
      fullName: this.fb.group({
        name: [
          '',
          [
            Validators.required,
            Validators.maxLength(10),
            Validators.pattern(/^[a-zA-Z]+$/),
          ],
        ],
        last: [
          '',
          [
            Validators.required,
            Validators.maxLength(10),
            Validators.pattern(/^[a-zA-Z]+$/),
          ],
        ],
      }),
      email: ['', [Validators.required, Validators.email]],
      phone: [
        0,
        [
          Validators.required,
          Validators.pattern(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/),
        ],
      ],
      color: ['#000000'],
      date: [''],
      age: ['', [Validators.required, Validators.min(18), Validators.max(100)]],
      category: [''],
      tag: [''],
      agree: [false, [Validators.requiredTrue]],
      gender: [''],
      zone: [''],
    });
  }

  save() {
    if (this.form.valid) {
      console.log(this.form.value);
    } else {
      this.form.markAllAsTouched();
    }
  }

  get nameField() {
    return this.form.get('fullName.name');
  }

  get isNameFieldValid() {
    return this.nameField.touched && this.nameField.valid;
  }

  get isNameFieldInvalid() {
    return this.nameField.touched && this.nameField.invalid;
  }

  get lastField() {
    return this.form.get('fullName.last');
  }

  get isLastFieldValid() {
    return this.lastField.touched && this.lastField.valid;
  }

  get isLastFieldInvalid() {
    return this.lastField.touched && this.lastField.invalid;
  }

  get emailField() {
    return this.form.get('email');
  }

  get phoneField() {
    return this.form.get('phone');
  }

  get colorField() {
    return this.form.get('color');
  }

  get dateField() {
    return this.form.get('date');
  }

  get ageField() {
    return this.form.get('age');
  }

  get categoryField() {
    return this.form.get('category');
  }

  get tagField() {
    return this.form.get('tag');
  }

  get agreeField() {
    return this.form.get('agree');
  }

  get genderField() {
    return this.form.get('gender');
  }

  get zoneField() {
    return this.form.get('zone');
  }
}
