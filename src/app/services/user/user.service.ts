import { Injectable } from '@angular/core';
import { User } from './../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User;
/**
 * here we set up the login information for our user
 */
  constructor() { 
    this.user = new User(
      'admin',
       'azerty');
   }

/**
 * @param user
 */
   updateUser(user: User){
     this.user = user;
   }
}
