import { AbstractControl } from '@angular/forms';
import { stdnum } from 'stdnum';

export function validateNif(control: AbstractControl): { [key: string]: any } | null {
  const nif = control.value;
  const isValid = stdnum['PT']['nif'].validate(nif);
  if (isValid.isValid) {
    return null;
  } else {
    return { invalidNif: true};
  }
}
