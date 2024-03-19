import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Email} from "@models/email.model";

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  sendEmail(email: Email) {
    return this.http.post('http://localhost:3000/send-mail', email);
  }
}
