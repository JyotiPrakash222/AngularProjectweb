import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class ToasterService {
  toastersetting: {
    timeout: number;
    progressBar: boolean;
    preventDuplicates: boolean;
    limit: number;
    animation: string;
  };

  constructor(private notification: ToastrService) {
    this.toastersetting = {
      timeout: 700,
      progressBar: true,
      preventDuplicates: false,
      limit: 3,
      animation: 'fade',
    };
  }

  success(message: string, title: string) {
    this.notification.success(message, title, this.toastersetting);
  }
}
