import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
  }
)
export class ProfileComponent {
  profile = new FormGroup({
    fullName: new FormControl(''),
    email: new FormControl(''),
  });
}
