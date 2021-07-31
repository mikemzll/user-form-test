import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router, ParamMap } from '@angular/router';
import { ROUTES } from '../constants/routes.constants';

@Injectable({
  providedIn: 'root'
})
export class ClientFormGuard implements CanActivate {
  constructor(
    private router: Router
  ) { }

  public canActivate(route: ActivatedRouteSnapshot, _state: RouterStateSnapshot): boolean {
    const requiredParams = route.data.requiresParams;
    
    if (!requiredParams) return true;
    if (this.checkRequiredParams(requiredParams, route.paramMap)) return true;

    this.router.navigate([ROUTES.CLIENT]);

    return false;
  }

  private checkRequiredParams(requiredParams: string[], queryParamMap: ParamMap): boolean {    
    for (let param of requiredParams) {
      if (!queryParamMap.get(param)) return false;
    }

    return true;
  }
}
