import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isAuth: boolean;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.isAuth = this.authService.isAuth;
  }


/**
 * Method called when the user click on the signout button
 */

  onClickSignOut() {
    this.authService.signOut();
    this.router.navigate(['auth']);
  }
}
