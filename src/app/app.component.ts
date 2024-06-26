import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './services/user.service'; 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private router: Router, private userService: UserService) { } 

  signOut() {
    this.userService.logout(); 
    this.router.navigate(['/signin']); 
  }
}
