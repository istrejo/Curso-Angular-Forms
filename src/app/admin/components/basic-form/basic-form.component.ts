import { Component, OnInit } from '@angular/core';

import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss'],
})
export class BasicFormComponent implements OnInit {
  nameField: FormControl = new FormControl('');
  emailField: FormControl = new FormControl('');
  phoneField: FormControl = new FormControl('');
  colorField: FormControl = new FormControl('#fff');
  dateField: FormControl = new FormControl(0);
  ageField: FormControl = new FormControl(15);

  categoryField: FormControl = new FormControl('category-1');
  tagField: FormControl = new FormControl('tag-1');

  constructor() {}

  ngOnInit(): void {
    this.nameField.valueChanges.subscribe(console.log);
  }

  getInputValue() {
    console.log(this.nameField.value);
  }
}
