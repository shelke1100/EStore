import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,RouterOutlet],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] 
})
export class LoginComponent {
  loginObj: any = {
    userName: '',
    password: '' 
  };

  constructor(private router: Router) {}

  onLogin() {
    if(this.loginObj.userName == "admin" && this.loginObj.password == "839085") 
    {
      this.router.navigateByUrl('/layout'); 
        
    } 
    else
     {
      alert('Check UserId and password');
    }
  }
}
