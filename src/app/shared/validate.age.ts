import { AbstractControl, ControlConfig } from '@angular/forms';

export function validateAge( control: AbstractControl): { [key: string]: boolean } | null {
  let dobStr = control.value;
  let dateOfBirth = new Date(dobStr);
  const currentDate = new Date();
  let age = currentDate.getFullYear() - dateOfBirth.getFullYear();
  const month = currentDate.getMonth() - dateOfBirth.getMonth();
  if (month < 0 || month === 0 && currentDate.getDate() < dateOfBirth.getDate()) {
    age--;
  }
  if (age >= 18)
  {
    return null;
  } else {
    return {invalidAge: true };
  }
}
