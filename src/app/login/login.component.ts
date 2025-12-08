import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
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

  constructor(
    private longinService:LoginService,
    private router: Router
  ){}

  ngOnInit(): void {
    // No longer needed with popup approach
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
      .then(() => {
        this.isLoading = false;
      })
      .catch((error) => {
        this.isLoading = false;
        if (error && error.code) {
          this.errorMessage = this.getFriendlyErrorMessage(error.code);
        }
      });
  }

  cancelLogin() {
    this.isLoading = false;
    this.errorMessage = '';
  }

  closeLogin() {
    this.router.navigate(['/']);
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
