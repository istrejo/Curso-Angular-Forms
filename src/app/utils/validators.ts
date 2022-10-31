import { AbstractControl } from '@angular/forms';

const isNumber = (value: string): boolean => !isNaN(parseInt(value, 10));

const containsNumber = (value: string): boolean => {
  return value.split('').find((v) => isNumber(v)) !== undefined;
};
export class MyValidators {
  static isPriceValid(control: AbstractControl) {
    const value = control.value;
    if (value > 10000) {
      return { price_invalid: true };
    }

    return null;
  }

  static validatePassword(control: AbstractControl) {
    const value = control.value;

    if (value.length === 0) return null;

    if (!containsNumber(value)) {
      return { invalid_password: true };
    }
    return null;
  }

  static matchPasswords(control: AbstractControl) {
    const password = control.get('password').value;
    const confirmPassword = control.get('confirmPassword').value;

    if (password === confirmPassword) {
      return null;
    }

    return { match_password: true };
  }
}
