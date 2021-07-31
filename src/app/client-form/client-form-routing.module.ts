import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddressComponent } from './components/address/address.component';
import { ClientComponent } from './components/client/client.component';
import { CreatedClientComponent } from './components/created-client/created-client.component';
import { IdentityComponent } from './components/identity/identity.component';
import { ROUTES, REQUIRED_PARAMS } from './constants/routes.constants';
import { ClientFormGuard } from './services/client-form.guard';

const routes: Routes = [{
    path: ROUTES.CLIENT,
    component: ClientComponent
  }, {
    path: ROUTES.ADDRESS,
    component: AddressComponent,
    data: {
      requiresParams: REQUIRED_PARAMS.client
    },
    canActivate: [ClientFormGuard] 
  }, {
    path: ROUTES.IDENTITY,
    component: IdentityComponent,
    data: {
      requiresParams: [
        ...REQUIRED_PARAMS.client, 
        ...REQUIRED_PARAMS.address
      ]
    },
    canActivate: [ClientFormGuard] 
  }, {
    path: ROUTES.CREATED_CLIENT,
    component: CreatedClientComponent,
    data: {
      requiresParams: [
        ...REQUIRED_PARAMS.client, 
        ...REQUIRED_PARAMS.address, 
        ...REQUIRED_PARAMS.identity
      ]
    },
    canActivate: [ClientFormGuard] 
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientFormRoutingModule { }
