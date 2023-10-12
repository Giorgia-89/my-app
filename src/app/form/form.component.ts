import { Cities, cities, countries, Countries } from './../shared/countries';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, FormControl, Validators } from '@angular/forms';
import { stdnum } from 'stdnum';
import { validateAge } from '../shared/validate.age';

@Component({
  selector: 'formulario',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent  {
  countriesList: Countries[] = countries;
  citiesList: Cities[] = cities;
  filteredCitiesControl = new FormControl([]);;
  profile = new FormGroup({
    fullName: new FormControl('',  [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    nif: new FormControl('', [Validators.required, this.validateNif.bind(this)]),
    dateOfBirth: new FormControl('', [Validators.required, validateAge]),
    country: new FormControl(''),
    filteredCities: this.filteredCitiesControl,
  });
  constructor() {}

  ngOnInit() {
    // Set the default value for filteredCities in ngOnInit
    this.profile.get('filteredCities')?.setValue(this.filterCities());
  }

  isFormValid(): boolean {
    return this.profile.valid;
  }
  

  filterCities(): string[] {
    const selectedCountryId = this.profile.get('country.id')?.value;
    let cityName: string[] = [];

    if (selectedCountryId) {
      cityName = this.citiesList.filter(city => city.countryId === selectedCountryId).map(city => city.cityName);
      
    } else {
      cityName = this.citiesList.map(city => city.cityName);
    }
    return cityName;
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
