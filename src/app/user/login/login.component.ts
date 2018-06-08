import { Component, OnInit } from '@angular/core';
import {UserCredentials} from '../user-credentials';
import {AuthenticationService} from '../services/authentication.service';
import {Data, Router} from '@angular/router';
import {ErrorDialogComponent} from '../../UI/error-dialog/error-dialog.component';
import {DialogService} from '../../UI/services/dialog.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userCredentials: UserCredentials;
  loginFailed: boolean;
  errorMessage: string;

  constructor(private authenticationService: AuthenticationService, private router: Router, private dialogService: DialogService) {
    this.userCredentials = new UserCredentials();
    this.loginFailed = false;
    this.errorMessage = '';
  }

  ngOnInit() {
    this.authenticationService.signOutUser();
  }

  onSignIn() {
    console.log(this.userCredentials);
    this.loginFailed = false;
    this.router.navigate(['/']).then(() => {

    })
    this.errorMessage = '';
    this.authenticationService.signInUser(this.userCredentials)
      .subscribe(result => {
        this.router.navigate(['/contacts']);
      }, error => {
        this.userCredentials.username = '';
        this.userCredentials.password = '';
        this.loginFailed = true;
        this.dialogService.errorDialog('Sign in failed!');
        // this.errorMessage = 'Sign in failed';
        console.error('User sign in failed');
      });
  }

}
