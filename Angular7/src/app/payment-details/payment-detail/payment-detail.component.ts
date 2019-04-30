import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';
import { NgForm } from '@angular/forms';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';

@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styles: []
})
export class PaymentDetailComponent implements OnInit {

  constructor(private service:PaymentDetailService) {



   }

  ngOnInit() {

    this.resetForm();
  }

  resetForm(form?: NgForm)
  {
    if(form != null)
    {

      form.resetForm();
      this.service.formData =
      {

        PaymentDetailsId:0,
         CardOwnerName: '',
         CVV:'',
         CardNumber:'',
         ExpirationDate:''
      }

    }

  }

  onSubmit(form:NgForm)
  {
     this.service.PostPaymentDetails(form.value).subscribe(

       res=>
       {
         this.resetForm(form);
       },
       err =>
       {
         console.log(err);
       }

     );
  }

}
