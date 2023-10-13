import { DataService } from '../services/data.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { validateAge } from '../validators/validate.age';
import { validateNif } from '../validators/validate.nif';
import { validatePostcode } from '../validators/validate.postcode';
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
    address: new FormControl('', [Validators.required]),
    postcode: new FormControl('')
  });
  countries: any;
  cities: any;
  selectedCountry: any = {
    id: 0, name: ''
  };
  constructor(private dataService: DataService) {}
  
  ngOnInit(): void {
    this.showAll();
    this.profile.get('selectedCountry')?.valueChanges.subscribe(country => {
      this.selectedCountry = country;
      // Update the cities and postcode validators
      this.onSelect(this.selectedCountry.id);
    });
  
  }


  showAll(){
    this.dataService.getAll().subscribe(
      (data: any) => {
        this.countries = data;
        //console.log(this.countries);
      }
    );
  }

  onSelect(countryId: any){
    this.dataService.getAll().subscribe((res: any)=>{
      this.cities = res['cities'].filter((res:any)=> res.countryId == countryId.value);
      this.updatePostcodeValidators();
    });
  }

  private updatePostcodeValidators(): void {
    const postcodeControl = this.profile.get('postcode');
    
    if (postcodeControl) {
      const countryCode = this.selectedCountry.id;
      console.log(`country code is ${countryCode}`);
      if (countryCode == 1) { 
        postcodeControl.clearValidators();
        postcodeControl.addValidators([Validators.required, validatePostcode]);
      } else {
        postcodeControl.clearValidators();
        postcodeControl.addValidators([Validators.required]);
      }
      console.log(postcodeControl.errors);
     
      // Update the validity status of the control
      postcodeControl.updateValueAndValidity();
    }
  }

  isFormValid(): boolean {
    return this.profile.valid;
  }

}
