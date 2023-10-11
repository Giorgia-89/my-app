import { Component } from '@angular/core';
import { AbstractControl, FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'formulario',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  profile = new FormGroup({
    fullName: new FormControl('',  [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    nif: new FormControl('', [Validators.required, this.validLength.bind(this)]),
  });
  
  isFormValid(): boolean {
    return this.profile.valid;
  }

  validLength(control: AbstractControl) {
    const nif = control.value;
    if(nif && nif.length === 9){
      
      return null;
    } else {
      return { invalidNifLength: true}
    }
  }
}

