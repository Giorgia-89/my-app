import { Component } from '@angular/core';
import { AbstractControl, FormGroup, FormControl, Validators } from '@angular/forms';
import { stdnum } from 'stdnum';
import { validateAge } from '../shared/validate.age';


@Component({
  selector: 'formulario',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  profile = new FormGroup({
    fullName: new FormControl('',  [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    nif: new FormControl('', [Validators.required, this.validateNif.bind(this)]),
    dateOfBirth: new FormControl('', [Validators.required, validateAge])
  });

  isFormValid(): boolean {
    return this.profile.valid;
  }

  validateNif(control: AbstractControl): { [key: string]: any } | null {
    const nif = control.value;
    const isValid = stdnum['PT']['nif'].validate(nif);
    if (isValid.isValid) {
      return null;
    } else {
      return { invalidNif: true};
    }
  }
}

//console.log(stdnum['PT']['nif'].validate); 
const today = new Date();

const dateOfBirth = new Date('04/02/1989');
const currentDate = new Date();
console.log(`today is ${currentDate}`);
let age = currentDate.getFullYear() - dateOfBirth.getFullYear();
const month = currentDate.getMonth() - dateOfBirth.getMonth();
if (month < 0 || month === 0 && currentDate.getDate() < dateOfBirth.getDate()) {
  age--;
}
console.log(`Age is ${age}`);