import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './../../services/auth/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-auth-view',
  templateUrl: './auth-view.component.html',
  styleUrls: ['./auth-view.component.css']
})
export class AuthViewComponent implements OnInit {

  signInForm: FormGroup;

  msg: string;

  constructor(private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {

    this._initForm();
  }


  /**
   * @private
   */

  _initForm() {
    this.signInForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }


  /**
   * Method called when the user click on the submit button
   */
  onSubmitSignIn() {

    const formValues = this.signInForm.value;

    this.authService.signIn(formValues.username, formValues.password)
      .then(() => {
        this.router.navigate(['series']);
      })
      //Failed
      .catch(err => {
        this.msg = err;
      })
  }

}
