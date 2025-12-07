import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app'
import { LoginService } from './login/login.service';
import { environment } from '../environments/environment.development';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent implements OnInit {
  

  constructor(private loginService: LoginService) { }
  

  ngOnInit(): void {
    firebase.initializeApp(environment.firebase);
  }

 
  estaLogueado() {

    return this.loginService.estaLogueado()

  }

  logOut(){
    
    this.loginService.logOut();

  }

}
