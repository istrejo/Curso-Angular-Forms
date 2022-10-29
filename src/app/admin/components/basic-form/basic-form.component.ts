import { Component, OnInit } from '@angular/core';

import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss'],
})
export class BasicFormComponent implements OnInit {
  nameField: FormControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(10),
  ]);
  emailField: FormControl = new FormControl('');
  phoneField: FormControl = new FormControl('');
  colorField: FormControl = new FormControl('#fff');
  dateField: FormControl = new FormControl(0);
  ageField: FormControl = new FormControl(15);

  categoryField: FormControl = new FormControl('category-1');
  tagField: FormControl = new FormControl('tag-1');

  agreeField: FormControl = new FormControl(false);
  genderField: FormControl = new FormControl();
  zoneField: FormControl = new FormControl();

  constructor() {}

  ngOnInit(): void {
    this.nameField.valueChanges.subscribe(console.log);
  }

  getInputValue() {
    console.log(this.nameField.value);
  }
}
