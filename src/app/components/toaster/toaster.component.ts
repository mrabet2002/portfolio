import { Component } from '@angular/core';
import { ToastData } from '@models/toast-data.model';
import { ToasterService } from '@services/toaster.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.css']
})
export class ToasterComponent {
  toastData: ToastData | null = null;
  subscription: Subscription | null = null;

  constructor(private toasterService: ToasterService) { }

  ngOnInit() {
    this.subscription = this.toasterService.toast$.subscribe(toastData => {
      this.toastData = toastData;
      setTimeout(() => {
        this.toastData = null;
      }, toastData.duration || 3000);
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
