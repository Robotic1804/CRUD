import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { LoginService } from '../login/login.service';
import { LoggerService } from '../shared/logger.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  standalone: false
})
export class UserProfileComponent implements OnInit {
  user: firebase.User | null = null;
  displayName: string = '';
  email: string = '';
  photoURL: string = '';
  emailVerified: boolean = false;
  creationTime: string = '';
  lastSignInTime: string = '';
  isLoading: boolean = true;
  errorMessage: string = '';
  successMessage: string = '';

  constructor(
    private loginService: LoginService,
    private router: Router,
    private logger: LoggerService
  ) {}

  ngOnInit(): void {
    this.loadUserProfile();
  }

  loadUserProfile(): void {
    this.isLoading = true;

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
        this.displayName = user.displayName || 'Not set';
        this.email = user.email || '';
        this.photoURL = user.photoURL || 'https://via.placeholder.com/150';
        this.emailVerified = user.emailVerified;
        this.creationTime = user.metadata.creationTime || '';
        this.lastSignInTime = user.metadata.lastSignInTime || '';
        this.isLoading = false;
      } else {
        this.router.navigate(['/login']);
      }
    });
  }

  sendVerificationEmail(): void {
    if (this.user && !this.emailVerified) {
      this.errorMessage = '';
      this.successMessage = '';

      this.user.sendEmailVerification()
        .then(() => {
          this.successMessage = 'Verification email sent! Please check your inbox.';
          this.logger.log('Verification email sent to:', this.email);
        })
        .catch((error) => {
          this.errorMessage = 'Failed to send verification email. Please try again.';
          this.logger.error('Error sending verification email:', error);
        });
    }
  }

  logout(): void {
    this.loginService.logOut();
  }
}
