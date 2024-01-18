import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function passwordValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    // Check if the password contains at least one special character, one number, and one alphabet
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);
    const hasNumber = /\d/.test(value);
    const hasAlphabet = /[a-zA-Z]/.test(value);

    // Check if the password has a minimum length of 8 characters
    const isLengthValid = value.length >= 8;

    // Set the custom error 'invalidPassword' if any validation fails
    return hasSpecialChar && hasNumber && hasAlphabet && isLengthValid ? null : { invalidPassword: true };
  };
}
