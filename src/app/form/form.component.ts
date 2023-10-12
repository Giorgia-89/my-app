import { DataService } from '../services/data.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { validateAge } from '../validators/validate.age';
import { validateNif } from '../validators/validate.nif';

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



}
