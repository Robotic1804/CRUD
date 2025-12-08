import { Component, OnInit } from '@angular/core';
import { LoginService } from './login/login.service';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent implements OnInit {


  constructor(private loginService: LoginService) { }


  ngOnInit(): void {
    // Firebase is now initialized in main.ts before Angular starts

    // Handle Google Sign-In redirect result
    this.loginService.handleRedirectResult().catch(error => {
      // Silently handle errors, they will be shown in LoginComponent if needed
      console.error('Error handling redirect:', error);
    });
  }

 
  estaLogueado() {

    return this.loginService.estaLogueado()

  }

  logOut(){
    
    this.loginService.logOut();

  }

}
