import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private storage: Storage,
    private router: Router
  ) { }

  async canActivate() {
    const isLoggedIn = await this.storage.get("IS_LOGGED_IN");
    if (isLoggedIn)
      return true;
    else
      this.router.navigateByUrl('/login');
  }
}
