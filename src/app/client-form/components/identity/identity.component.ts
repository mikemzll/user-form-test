import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { IDENTITY } from '../../constants/identity.constants';
import { ROUTES } from '../../constants/routes.constants';

@Component({
  selector: 'app-identity',
  templateUrl: './identity.component.html',
  styleUrls: ['./identity.component.scss']
})
export class IdentityComponent implements OnInit {

  public documentOptionList = IDENTITY.documentOptionList;
  public identityForm: FormGroup = new FormGroup({
    documentType: new FormControl('', Validators.required),
    series: new FormControl(''),
    serialNumber: new FormControl('', Validators.required),
    authority: new FormControl(''),
    dateOfIssue: new FormControl('', Validators.required),
    file: new FormControl('')
  });

  private destroy$: Subject<boolean> = new Subject<boolean>();
  private params;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap
    .pipe(takeUntil(this.destroy$))
    .subscribe((params) => {
      this.params = params;
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  public navigateToNextPage(): void {
    console.log('navigate');
    this.router.navigate([ROUTES.CREATED_CLIENT, {
      ...this.params.params, 
      ...this.identityForm.getRawValue()
    }]);
  }

}
