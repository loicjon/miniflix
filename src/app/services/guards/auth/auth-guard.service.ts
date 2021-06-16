import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import {Observable} from "rxjs";
import { Router } from '@angular/router';
import { AuthService } from './../../auth/auth.service';


/**
 * allow us to restrain some path that we don't want it to be seen by some visitors 
 */
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private authService: AuthService, private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

if(this.authService.isAuth) {
  return true;
}
 this.router.navigate(['auth'])
  }
}
