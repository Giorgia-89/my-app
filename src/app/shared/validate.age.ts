import { AbstractControl, ControlConfig } from '@angular/forms';

export function validateAge(
    control: AbstractControl
  ): { [key: string]: boolean } | null {
    const dobStr = control.value;
    const dateOfBirth = new Date(dobStr);

    if (isNaN(dateOfBirth.getTime())) {
      return { invalidDate: true };
    }
    const currentDate = new Date();
    console.log(`today is ${currentDate}`);
    let age = currentDate.getFullYear() - dateOfBirth.getFullYear();
    const month = currentDate.getMonth() - dateOfBirth.getMonth();
    if (month < 0 || month === 0 && currentDate.getDate() < dateOfBirth.getDate()) {
      age--;
    }
    if (age > 18)
    {
      return null;
    } else {
      return {invalidAge: true };
    }
}
