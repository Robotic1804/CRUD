import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: false
})
export class RegisterComponent {

  errorMessage: string = '';
  successMessage: string = '';
  isLoading: boolean = false;

  constructor(private loginService: LoginService) {}

  register(form: NgForm) {
    this.errorMessage = '';
    this.successMessage = '';
    this.isLoading = true;

    const email = form.value.email;
    const password = form.value.password;
    const confirmPassword = form.value.confirmPassword;

    // Validaciones
    if (!email || !password || !confirmPassword) {
      this.errorMessage = 'All fields are required';
      this.isLoading = false;
      return;
    }

    if (password !== confirmPassword) {
      this.errorMessage = 'Passwords do not match';
      this.isLoading = false;
      return;
    }

    if (password.length < 6) {
      this.errorMessage = 'Password must be at least 6 characters';
      this.isLoading = false;
      return;
    }

    // Llamar al servicio de registro
    this.loginService.register(email, password)
      .then(() => {
        this.isLoading = false;
        this.successMessage = 'Registration successful! Redirecting...';
      })
      .catch((error: any) => {
        this.isLoading = false;
        this.errorMessage = this.getFriendlyErrorMessage(error.code);
      });
  }

  private getFriendlyErrorMessage(errorCode: string): string {
    const errorMessages: { [key: string]: string } = {
      'auth/email-already-in-use': 'This email is already registered',
      'auth/invalid-email': 'Invalid email address',
      'auth/operation-not-allowed': 'Email/password accounts are not enabled',
      'auth/weak-password': 'Password is too weak',
      'auth/network-request-failed': 'Network error. Please check your connection'
    };
    return errorMessages[errorCode] || 'Registration failed. Please try again';
  }
}
