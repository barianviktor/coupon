import { Component, OnDestroy, OnInit } from '@angular/core';
import { CouponService } from 'src/app/services/coupon.service';
import { CouponForm } from 'src/app/interfaces/coupon-form';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-coupon-list',
  templateUrl: './coupon-list.component.html',
  styleUrls: ['./coupon-list.component.css'],
})
export class CouponListComponent implements OnInit, OnDestroy {
  //coupons: CouponForm[] = [];
  //private couponSubscription: Subscription;
  constructor(/* private couponService: CouponService */) {
    /* this.couponSubscription = this.couponService.getCoupons().subscribe((x) => {
      this.coupons = x;
      console.log(this.coupons);
    }); */
  }

  ngOnInit(): void {}
  ngOnDestroy(): void {
    //this.couponSubscription.unsubscribe();
  }
}
