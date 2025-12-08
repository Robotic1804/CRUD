import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    standalone: false
})
export class LoginComponent implements OnInit {

  isLoading: boolean = false;
  errorMessage: string = '';

  constructor(private longinService:LoginService){}

  ngOnInit(): void {
    // Handle Google redirect result
    this.longinService.handleRedirectResult()
      .catch((error) => {
        if (error && error.code) {
          this.errorMessage = this.getFriendlyErrorMessage(error.code);
        }
      });
  }

  login(form: NgForm) {
    this.errorMessage = '';
    this.isLoading = true;

    const email = form.value.email;
    const password = form.value.password;

    this.longinService.login(email, password)
      .then(() => {
        this.isLoading = false;
      })
      .catch((error) => {
        this.isLoading = false;
        this.errorMessage = this.getFriendlyErrorMessage(error.code);
      });
  }

  loginWithGoogle() {
    this.errorMessage = '';
    this.isLoading = true;

    this.longinService.loginWithGoogle()
      .catch((error) => {
        this.isLoading = false;
        this.errorMessage = this.getFriendlyErrorMessage(error.code);
      });
    // Note: The redirect happens here, so isLoading will stay true until redirect
  }

  private getFriendlyErrorMessage(errorCode: string): string {
    const errorMessages: { [key: string]: string } = {
      'auth/user-not-found': 'No account found with this email',
      'auth/wrong-password': 'Incorrect password',
      'auth/invalid-email': 'Invalid email address',
      'auth/user-disabled': 'This account has been disabled',
      'auth/too-many-requests': 'Too many failed attempts. Please try again later',
      'auth/network-request-failed': 'Network error. Please check your connection',
      'auth/popup-closed-by-user': 'Sign-in popup was closed before completing',
      'auth/cancelled-popup-request': 'Only one popup request is allowed at a time'
    };
    return errorMessages[errorCode] || 'Login failed. Please try again';
  }
}
