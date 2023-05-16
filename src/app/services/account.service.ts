import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_URL = "https://localhost:7176/api/Mail";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  allMessagesUser(data : any): Observable<any> {
    return this.http.post(API_URL + '/allMessages' , data)
  }
}
