import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function customEmailValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!control.value) {
      return { required: true }; // Add a required error if the field is empty
    }

    if (!emailPattern.test(control.value)) {
      return { invalidEmail: true }; // Add an invalidEmail error if the email doesn't match the pattern
    }

    return null; // If validation passes, return null
  };
}
