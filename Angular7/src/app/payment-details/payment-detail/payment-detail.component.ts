import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';
import { NgForm } from '@angular/forms';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styles: []
})
export class PaymentDetailComponent implements OnInit {

  constructor(private service: PaymentDetailService, private toastr: ToastrService) {
  }

  ngOnInit() {

    this.resetForm();


  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.form.reset();
    } else {
      this.service.formData = {
        PaymentDetailsId: 0,
        CardOwnerName: '',
        CardNumber: '',
        ExpirationDate: '',
        CVV: ''
      };
    }

  }

  onSubmit(form: NgForm) {
    if (this.service.formData.PaymentDetailsId === 0) {

      this.insertRecord(form);
    } else {

      this.updateRecord(form);
    }
  }

  insertRecord(form: NgForm) {
    this.service.postPaymentDetails().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.success('Submitted Successfully.', 'Payment Detail Register.');
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    );
  }

  updateRecord(form: NgForm) {
    this.service.putPaymentDetails().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.info('Updated Successfully.', 'Payment Detail Register.');
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    );
  }

}
