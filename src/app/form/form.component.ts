import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { validateAge } from '../validators/validate.age';
import { validateNif } from '../validators/validate.nif';
import { validatePostcode } from '../validators/validate.postcode';
import { validatePhoneNumber } from '../validators/validate.phone.number';
@Component({
  selector: 'formulario',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {

  profile = new FormGroup({
    fullName: new FormControl('',  [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    nif: new FormControl('', [Validators.required, validateNif]),
    dateOfBirth: new FormControl('', [Validators.required, validateAge]),
    countries: new FormControl('', [Validators.required]),
    cities: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    postcode: new FormControl(''),
    phoneNumber: new FormControl('', [Validators.required, validatePhoneNumber]),
    gender: new FormControl('', [Validators.required])
  });

  //define the countries var as an array of arrays
  countries: any = [
    { id: 1, name: 'Portugal'},
    { id: 2, name: 'Spain'},
    { id: 3, name: 'France'},
    { id: 4, name: 'Germany'},
    { id: 5, name: 'Italy'}
  ];
  cities: any = [
    { id: 1, countryId: 1, name: 'Lisboa' },
    { id: 2, countryId: 1, name: 'Porto' },
    { id: 3, countryId: 1, name: 'Braga' },
    { id: 4, countryId: 1, name: 'Coimbra' },
    { id: 5, countryId: 1, name: 'Faro' },
    { id: 6, countryId: 2, name: 'Madrid' },
    { id: 7, countryId: 2, name: 'Barcelona' },
    { id: 8, countryId: 2, name: 'Valencia' },
    { id: 9, countryId: 2, name: 'Sevilla' },
    { id: 10, countryId: 2, name: 'Bilbao' },
    { id: 11, countryId: 3, name: 'Paris' },
    { id: 12, countryId: 3, name: 'Marseille' },
    { id: 13, countryId: 3, name: 'Lyon' },
    { id: 14, countryId: 3, name: 'Toulouse' },
    { id: 15, countryId: 3, name: 'Nice' },
    { id: 16, countryId: 4, name: 'Berlin' },
    { id: 17, countryId: 4, name: 'Hamburg' },
    { id: 18, countryId: 4, name: 'Munich' },
    { id: 19, countryId: 4, name: 'Cologne' },
    { id: 20, countryId: 4, name: 'Frankfurt' },
    { id: 21, countryId: 5, name: 'Rome' },
    { id: 22, countryId: 5, name: 'Milan' },
    { id: 23, countryId: 5, name: 'Naples' },
    { id: 24, countryId: 5, name: 'Turin' },
    { id: 25, countryId: 5, name: 'Palermo'}
  ];
  allCities: any = this.cities;

  ngOnInit(): void {
    this.onSelect();

  }
  onSelect(){
    this.profile.get('countries')?.valueChanges.subscribe((countryId: any) => {
      console.log(`On change country is ${countryId}` );
      this.cities = this.allCities.filter((item: any) => item.countryId == countryId);
      console.log(`Filtered Cities: `, this.cities);

      this.updatePostcodeValidators();
    });
  }

  private updatePostcodeValidators(): void {

    const postcodeControl = this.profile.get('postcode');

    if (postcodeControl) {
      const countryId = this.profile.get('countries')?.value;
      console.log(`countryId is ${countryId}`);
      console.log(`postcode is ${this.profile.get('postcode.value')}`);
      if (countryId === '1') {
        postcodeControl.clearValidators();
        postcodeControl.setValidators([Validators.required, validatePostcode]);
      } else {
        postcodeControl.clearValidators();
        postcodeControl.setValidators([Validators.required]);
      }
      // Update the validity status of the control
      postcodeControl.updateValueAndValidity();
    }
  }

  isFormValid(): boolean {
    return this.profile.valid;
  }

}
