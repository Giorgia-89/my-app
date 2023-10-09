import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  profile = new FormGroup({
    fullName: new FormControl(''),
    email: new FormControl(''),
  });
}
