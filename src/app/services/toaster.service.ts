import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Email} from "@models/email.model";
import { ToasterComponent } from '@components/toaster/toaster.component';
import { Subject } from 'rxjs';
import { ToastData } from '@models/toast-data.model';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  private toastSubject = new Subject<ToastData>();
  toast$ = this.toastSubject.asObservable();

  show(message: string, type?: 'success' | 'error' | 'info' | 'warning', duration = 3000) {
    const toastData: ToastData = { message, type, duration };
    this.toastSubject.next(toastData);
  }

  constructor() { }
}
