import { Injectable } from '@angular/core';
import { Patientlist } from './patientlist';
import { Observable,throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PatientlistService {

  selectedContact: Patientlist;
  patient: Patientlist[];
   
  baseURL = 'http://localhost:3000/patient';

  headers = new HttpHeaders().set('Patient-Type', 'application/json');

  constructor(public http: HttpClient){};

  postPatient(patient: Patientlist){
    
    return this.http.post(this.baseURL, patient);
  }
  // postPatient(data: Patientlist): Observable<any> {
  //   let API_URL = `${this.baseURL}/patient`;
  //   return this.http.post(this.baseURL, data)
  // }

  getPatientList() {
    return this.http.get(this.baseURL);
  }

  putPatient(patient: Patientlist) {
    return this.http.patch(this.baseURL + `/${patient._id}`, patient);
  }

  deletePatient(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}
