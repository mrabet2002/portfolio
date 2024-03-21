import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Email} from "@models/email.model";
import { apiconfig } from '../utils/api-config';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  sendEmail(email: Email) {
    return this.http.post(`${apiconfig.baseurl}/send-mail`, email);
  }
}
