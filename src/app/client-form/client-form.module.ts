import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClientFormRoutingModule } from './client-form-routing.module';
import { CreatedClientComponent } from './components/created-client/created-client.component';
import { IdentityComponent } from './components/identity/identity.component';
import { AddressComponent } from './components/address/address.component';
import { ClientComponent } from './components/client/client.component';

import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    CreatedClientComponent, 
    IdentityComponent, 
    AddressComponent, 
    ClientComponent],
  imports: [
    CommonModule,
    ClientFormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatIconModule,
    MaterialFileInputModule,
    MatTableModule,
  ]
})
export class ClientFormModule { }
