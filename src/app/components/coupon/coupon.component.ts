import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.css'],
})
export class CouponComponent implements OnInit {
  couponIsOpen = false;
  constructor() {}

  ngOnInit(): void {}
  handleCouponClick() {
    this.couponIsOpen = !this.couponIsOpen;
  }
}
