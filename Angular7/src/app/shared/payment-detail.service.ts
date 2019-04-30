import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService
{
  formData: PaymentDetail;
  readonly rootURL = 'http://localhost:56351/api/';

  constructor(private http:HttpClient) { }

  //aqui consumo todos los servicios:
  PostPaymentDetails(formData:PaymentDetail)
  {
    return  this.http.post(this.rootURL + 'PaymentDetails',formData) ;

  }
}

