import { UserService } from './../user/user.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuth = false;

  constructor(private userService: UserService) { }

  /**
   * Method for signin the user
   */

  signIn(username, password) {

    return new Promise(
      (res, rej) => {

        setTimeout(() => {

          if (this.userService.user.username === username
            && this.userService.user.password === password) {
            this.isAuth = true;
            res(); // Success
          }
          else {
            rej(' Bad username and/or password')
          }

        }, 1000);

      }
    )

  }

  /**
   * Method for signout the user
   */
  signOut() {
    this.isAuth = false;
  }
}
