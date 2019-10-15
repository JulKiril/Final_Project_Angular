import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot , Router } from '@angular/router';


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private routes: Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (localStorage.getItem('username') != null){
      setTimeout(() => { localStorage.clear(); }, 3000);
      return true;
    } else {
      this.routes.navigate(['/login']);
      return false;
    }
  }
}
