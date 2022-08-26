import { Injectable, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { CouponForm } from '../interfaces/coupon-form';

@Injectable({
  providedIn: 'root',
})
export class CouponService /* implements  OnDestroy */ {
  // coupons: CouponForm[] = [];
  // couponSubscription: Subscription;
  constructor() {
    console.log('couponservice');
    /* this.coupons = [
      {
        fullName: 'Barian Viktor',
        email: 'viktor.barian@t-systems.com',
        phone: 3213123,
        coupon: '3213s345',
      },
    ]; */
    //this.getCoupons().then((data) => (this.coupons = data));
    //console.log(this.coupons);
    /* const observer = this.getCoupons().subscribe((data) => {
      this.coupons = data;
    });
  } */
    /*   getCoupons(): Promise<CouponForm[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
          {
            fullName: 'Barian Viktor',
            email: 'viktor.barian@t-systems.com',
            phone: 3213123,
            coupon: '3213s345',
          },
        ]);
      }, 1000);
    });
  } */
    /* this.probaObserver().subscribe((x) => {
      console.log(x);
    }); */
    /* this.couponSubscription = this.getCoupons().subscribe((x) => {
      this.coupons = x;
      console.log(this.coupons);
    }); */
  }

  setCoupon(form: CouponForm): Observable<boolean> {
    return new Observable((x) => {
      setTimeout(() => {
        localStorage.setItem('coupon', JSON.stringify(form));
        x.complete();
      }, 1000);
    });
  }

  getCoupon(): Observable<CouponForm> {
    return new Observable((x) => {
      setTimeout(() => {
        let couponForm = localStorage.getItem('coupon');
        if (couponForm) x.next(JSON.parse(couponForm));
        x.complete();
      }, 500);
      //subscriber.complete();
    });
  }
  /* probaObserver(): Observable<number> {
    return new Observable((x) => {
      setInterval(() => {
        x.next(1);
      }, 1000);
    });
  } */
  /*  ngOnDestroy(): void {
    this.couponSubscription.unsubscribe();
  } */
}
