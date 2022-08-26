import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CouponComponent } from './components/coupon/coupon.component';
import { CouponFormComponent } from './components/coupon/coupon-form/coupon-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CouponListComponent } from './components/coupon-list/coupon-list.component';
@NgModule({
  declarations: [
    AppComponent,
    CouponComponent,
    CouponFormComponent,
    CouponListComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
