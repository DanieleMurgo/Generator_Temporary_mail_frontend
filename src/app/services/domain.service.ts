import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = "https://localhost:7176/api/Mail";

@Injectable({
  providedIn: 'root'
})
export class DomainService {

  constructor(private http: HttpClient) { }

  getFirstDomain(): Observable<any> {
    return this.http.get(API_URL + '/getFirstDomain' , {responseType : 'text'});
  }

  getDomains(): Observable<any> {
    return this.http.get(API_URL + '/getDomains' , {responseType : 'json'})
  }

  postCreateNewUser(data : any): Observable<any> {
    return this.http.post(API_URL + '/newAccount' , data)
  }
}
