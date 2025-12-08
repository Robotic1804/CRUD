import {  Injectable } from "@angular/core";
import { Router } from "@angular/router";
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import { LoggerService } from '../shared/logger.service';

@Injectable()
export class LoginService {

    constructor(private router: Router, private logger: LoggerService) {
        // Listen for auth state changes and update token
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                user.getIdToken().then(token => {
                    this.token = token;
                    localStorage.setItem("token", token);
                }).catch(error => {
                    this.logger.error('Error getting token:', error);
                });
            } else {
                this.token = "";
                localStorage.removeItem("token");
            }
        });
    }

    token: string;

    register(email: string, password: string): Promise<void> {
        return firebase.auth().createUserWithEmailAndPassword(email, password).then(
            response => {
                return firebase.auth().currentUser?.getIdToken().then(
                    token => {
                        this.token = token;
                        localStorage.setItem("token", this.token);
                        this.logger.log('Usuario registrado exitosamente');
                        this.router.navigate(['/']);
                    }
                );
            }
        ).catch(error => {
            this.logger.error('Error en registro:', error);
            throw error;
        });
    }

    login(email: string, password: string): Promise<void> {
        return firebase.auth().signInWithEmailAndPassword(email, password).then(
            response => {
                return firebase.auth().currentUser?.getIdToken().then(
                    token => {
                        this.token = token;
                        localStorage.setItem("token", this.token);
                        this.router.navigate(['/']);
                    }
                );
            }
        ).catch(error => {
            this.logger.error('Error en login:', error);
            throw error;
        });
    }
    

    getIdToken() {
        return localStorage.getItem("token") || '';
    }

    estaLogueado() {
        return !!localStorage.getItem("token");
    }

    resetPassword(email: string): Promise<void> {
        return firebase.auth().sendPasswordResetEmail(email)
            .then(() => {
                this.logger.log('Password reset email sent to:', email);
            })
            .catch(error => {
                this.logger.error('Error sending password reset email:', error);
                throw error;
            });
    }

    loginWithGoogle(): Promise<void> {
        const provider = new firebase.auth.GoogleAuthProvider();
        return firebase.auth().signInWithRedirect(provider);
    }

    handleRedirectResult(): Promise<void> {
        return firebase.auth().getRedirectResult()
            .then((result) => {
                if (result.user) {
                    return result.user.getIdToken().then(token => {
                        this.token = token;
                        localStorage.setItem("token", this.token);
                        this.logger.log('Google login successful');
                        this.router.navigate(['/']);
                    });
                }
                return Promise.resolve();
            })
            .catch(error => {
                if (error.code && error.code !== 'auth/popup-closed-by-user') {
                    this.logger.error('Error with Google login:', error);
                }
                return Promise.reject(error);
            });
    }

    logOut() {
        firebase.auth().signOut().then(() => {
            this.token = "";
            localStorage.removeItem("token");
            this.router.navigate(['/']);
            window.location.reload();
        }).catch(error => {
            this.logger.error('Error en logout:', error);
        });
    }

}