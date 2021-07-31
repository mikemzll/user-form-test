import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ROUTES } from 'src/app/client-form/constants/routes.constants';
import { ADDRESS } from '../../constants/address.constants';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  public addressForm: FormGroup = new FormGroup({
    index: new FormControl(''),
    country: new FormControl(null, Validators.required),
    region: new FormControl(''),
    city: new FormControl(null, Validators.required),
    street: new FormControl(''),
    house: new FormControl('')
  });

  private destroy$: Subject<boolean> = new Subject<boolean>();
  private params;

  public countryOptionList = ADDRESS.countryOptionList;
  public cityOptionList = [{
    name: 'спочатку оберіть країну',
    type: null
  }];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.paramMap
    .pipe(takeUntil(this.destroy$))
    .subscribe((params) => {
      this.params = params;
    });

    this.addressForm.get('country').valueChanges
    .pipe(takeUntil(this.destroy$))
    .subscribe((changes) => {

      if (!(changes && ADDRESS.cityOptions[changes])) {
        this.cityOptionList = [{
          name: 'спочатку оберіть країну',
          type: null
        }];

        return;
      };

      this.cityOptionList = ADDRESS.cityOptions[changes];
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  public navigateToNextPage() {
    this.router.navigate([ROUTES.IDENTITY, {
      ...this.params.params, 
      ...this.addressForm.getRawValue()
    }]);
  }
  
}
