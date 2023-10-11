import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'formulario',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  profile = new FormGroup({
    fullName: new FormControl('',  [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    nif: new FormControl('', [Validators.required]),
  });
}

/**
 * Validates a Portuguese taxpayer identification number (NIF).
  @param {string} nif - The NIF to validate.
  @returns {boolean} Returns true if the NIF is valid, false otherwise.

export function validateNIF(nif: string) {
  if (nif.length != 9) {
    return false;
  }
  return true;
} */