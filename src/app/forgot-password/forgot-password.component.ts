import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
  standalone: false
})
export class ForgotPasswordComponent {

  email: string = '';
  isLoading: boolean = false;
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private loginService: LoginService) {}

  sendPasswordReset(form: NgForm) {
    this.errorMessage = '';
    this.successMessage = '';

    if (!form.valid || !this.email) {
      this.errorMessage = 'Please enter a valid email address';
      return;
    }

    this.isLoading = true;

    this.loginService.resetPassword(this.email)
      .then(() => {
        this.isLoading = false;
        this.successMessage = 'Password reset email sent! Please check your inbox.';
        this.email = '';
      })
      .catch((error) => {
        this.isLoading = false;
        this.errorMessage = this.getFriendlyErrorMessage(error.code);
      });
  }

  private getFriendlyErrorMessage(errorCode: string): string {
    const errorMessages: { [key: string]: string } = {
      'auth/user-not-found': 'No account found with this email',
      'auth/invalid-email': 'Invalid email address',
      'auth/too-many-requests': 'Too many requests. Please try again later'
    };
    return errorMessages[errorCode] || 'Failed to send reset email. Please try again';
  }
}
