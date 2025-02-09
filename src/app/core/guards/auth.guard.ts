import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router
  ) { }

  async canActivate() {
    const tokenUser = JSON.parse(localStorage.getItem('TOKEN'));
    if (tokenUser?.authToken) {
      return true;
    }
    else {
      this.router.navigateByUrl('/login');
    }
  }
}
