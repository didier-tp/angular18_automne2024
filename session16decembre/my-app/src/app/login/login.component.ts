import { Component } from '@angular/core';
import { Login } from '../common/data/login';

@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  public login : Login = new Login();
  public message :string ="";
  public onLogin(){
       this.message = "donnees saisies = " + JSON.stringify(this.login);
  }
}
