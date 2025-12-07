import {  Injectable } from "@angular/core";
import { Router } from "@angular/router";
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import { LoggerService } from '../shared/logger.service';

@Injectable()
export class LoginService {

    constructor(private router: Router, private logger: LoggerService) {}

    token: string;

    login(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password).then(
            response => {
                firebase.auth().currentUser?.getIdToken().then(
                    token => {
                        this.token = token;
                        localStorage.setItem("token", this.token);
                        this.router.navigate(['/']);
                    }
                );
            }
        ).catch(error => {
            this.logger.error('Error en login:', error);
        });
    }
    

    getIdToken() {
        return localStorage.getItem("token") || '';
    }

    estaLogueado() {
        return !!localStorage.getItem("token");
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