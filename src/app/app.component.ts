import { Component } from '@angular/core';
import {AuthenticationService} from './_services/index';
import { Router } from '@angular/router';
import {DropdownModule} from "./_directives/index";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private authService:AuthenticationService,private router:Router){}

  get isLoggedIn(){
    return this.authService.isLoggedIn();
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
