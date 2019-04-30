import { PaymentDetail } from './payment-detail.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {
  public formData: PaymentDetail;
  readonly rootURL = 'http://localhost:56351/api';
  list: PaymentDetail[];

  constructor(private http: HttpClient) { }

  postPaymentDetails() {
    return this.http.post(this.rootURL + '/PaymentDetails', this.formData);
  }

  putPaymentDetails() {
    return this.http.put(this.rootURL + '/PaymentDetails/'+ this.formData.PaymentDetailsId, this.formData);
  }

   deletePaymentDetails(PaymentDetailsId) {
    return this.http.delete(this.rootURL + '/PaymentDetails/'+ PaymentDetailsId);
  }

  refreshList(){
    this.http.get(this.rootURL + '/PaymentDetails')
    .toPromise()
    .then(res => this.list = res as PaymentDetail[]);
  }
}

