import { AbstractControl} from '@angular/forms';

export function validatePhoneNumber(control: AbstractControl): {[key: string]:any} | null {
  const phoneNumber = control.value;
  const isValid = /^[923]\d{8}$/.test(phoneNumber);
  if (isValid) {
    return null;
  } else {
    return { invalidPhoneNumber: true };
  }
}
