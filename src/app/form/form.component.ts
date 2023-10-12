import { DataService } from '../services/data.service';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, FormControl, Validators } from '@angular/forms';
import { stdnum } from 'stdnum';
import { validateAge } from '../validators/validate.age';

@Component({
  selector: 'formulario',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {

  profile = new FormGroup({
    fullName: new FormControl('',  [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    nif: new FormControl('', [Validators.required, this.validateNif.bind(this)]),
    dateOfBirth: new FormControl('', [Validators.required, validateAge]),
  });
  countries: any;
  cities: any;
  selectedCountry: any = {
    id: 0, name: ''
  };
  constructor(private dataService: DataService) {}


  ngOnInit(): void {
    this.showAll();
    this.onSelect(this.selectedCountry.id);
  }

  showAll(){
    this.dataService.getAll().subscribe(
      (data: any) => {
        this.countries = data;
        console.log(this.countries);
      }
    );
  }

  onSelect(countryId: any){
    this.dataService.getAll().subscribe((res: any)=>{
      this.cities = res['cities'].filter((res:any)=> res.countryId == countryId.value);
      console.log(this.cities);
    });
  }

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
