import { AbstractControl} from '@angular/forms';

export function validatePostcode(control: AbstractControl): {[key: string]:any} | null {
  const postcode = control.value;
  const isValid = /^\d{4}-\d{3}$/.test(postcode);
  if (isValid) {
    return null;
  } else {
    return { invalidPostcode: true };
  }
}
