import { Component, OnInit, Input } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CouponService } from 'src/app/services/coupon.service';

@Component({
  selector: 'app-coupon-form',
  templateUrl: './coupon-form.component.html',
  styleUrls: ['./coupon-form.component.css'],
})
export class CouponFormComponent implements OnInit {
  couponForm: FormGroup;
  @Input() couponIsOpen: boolean = false;
  constructor(private fb: FormBuilder, private couponService: CouponService) {
    this.couponForm = fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: [null, [Validators.required, Validators.minLength(7)]],
      coupon: ['', [Validators.required, Validators.pattern(/s345/)]],
    });
  }

  get fullName(): FormControl {
    return this.couponForm.get('fullName') as FormControl;
  }
  get email(): FormControl {
    return this.couponForm.get('email') as FormControl;
  }
  get phoneNumber(): FormControl {
    return this.couponForm.get('phoneNumber') as FormControl;
  }
  get coupon(): FormControl {
    return this.couponForm.get('coupon') as FormControl;
  }
  ngOnInit(): void {
    this.couponService.getCoupon().subscribe((x) => {
      this.couponForm.setValue(x);
    });
  }

  onSubmit() {
    if (this.couponForm.valid) {
      this.couponService.setCoupon(this.couponForm.value).subscribe(
        (x) => {
          console.log(x);
        },
        (err) => {
          alert('hiba');
        },
        () => {
          alert('sikeres submit');
        }
      );
    } else {
      this.couponForm.markAllAsTouched();
    }
  }
  onlyNumber(event: KeyboardEvent): boolean {
    if (/[0-9]/.test(event.key)) {
      return true;
    }
    return false;
  }
}
