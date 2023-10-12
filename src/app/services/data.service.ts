import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { countries } from '../validators/countries';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  url_ = 'assets/countries.json';
  getAll(): any {
    return this.http.get<any>(this.url_)
  }
}
