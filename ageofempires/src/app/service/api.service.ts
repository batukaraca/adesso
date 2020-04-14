import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEventType } from '@angular/common/http';
import { Units } from '../model/units';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getLists() {
    return this.http.get<Units[]>('assets/age-of-empires-units.json')
      .toPromise()
      .then(response => {
        const key = 'units';
        return response[key];
      });
  }
}
