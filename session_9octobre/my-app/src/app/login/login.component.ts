import { Component } from '@angular/core';
import { Login } from '../common/data/login';
import { LoginService } from '../common/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  public login : Login = new Login();
  public message :string ="";
  public connected : boolean = false;

  public onLogin(){
    // this.message = "donnees saisies = " + JSON.stringify(this.login);
    this.connected = false; //avant essai
    this.loginService.postLogin$(this.login)
        .subscribe(
          {
            next: (loginResponse) =>{ 
              this.message = loginResponse.message;
              this.connected = loginResponse.status;
             },
            error: (err)=>console.log(err)
          }
        )
  }

  constructor(private loginService: LoginService) { }
  ngOnInit(): void {}
}
