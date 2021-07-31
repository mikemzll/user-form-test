import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ROUTES } from 'src/app/client-form/constants/routes.constants';
import { CLIENT } from '../../constants/client.constants';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  public clientForm: FormGroup = new FormGroup({
    firstName: new FormControl('', Validators.required),
    patronymic: new FormControl(''),
    lastName: new FormControl('', Validators.required),
    birthDate: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', [Validators.required, Validators.pattern(/^\d{11}$/gm)]),
    gender: new FormControl(''),
    clientGroup: new FormControl(''),
    coordinator: new FormControl(''),
    noSMS: new FormControl(false),
  });

  public genderOptionList = CLIENT.genderOptionList;
  public clientGroupOptionList = CLIENT.clientGroupOptionList;

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {}

  ngOnDestroy() {}

  public navigateToNextPage() {
    console.log('navigate');
    this.router.navigate([ROUTES.ADDRESS, {...this.clientForm.getRawValue()}]);
  }

}

