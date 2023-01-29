import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app'
import { LoginService } from './login/login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  

  constructor(private loginService: LoginService) { }
  

  ngOnInit(): void {

    firebase.initializeApp({

      apiKey: "AIzaSyBpS40iQ-UVgPYsWOW6BqwShOQJYEoan_8",
      authDomain: "mis-clientes2-6d900.firebaseapp.com",


    })

  
    
  }

 
  estaLogueado() {

    return this.loginService.estaLogueado()

  }

  logOut(){
    
    this.loginService.logOut();

  }

}
