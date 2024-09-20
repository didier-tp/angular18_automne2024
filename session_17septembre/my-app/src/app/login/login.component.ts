import { Component, OnInit } from '@angular/core';
import { Login } from '../common/data/login'
import { LoginService } from '../common/service/login.service';
import { LoginResponse } from '../common/data/loginResponse';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public login: Login = new Login();
  public message: string = "";
  public ok=false;

  public onLogin() {
   // this.message = "donnees saisies = " + JSON.stringify(this.login);
   this.ok=false;//avant d'essayer
   this._loginService.postLogin$(this.login)
   .subscribe(
    {
      next: (resp: LoginResponse) => { this.manageLoginResponse(resp); },
      error: (err) => { console.log("error:" + err); this.message="erreur technique" }
    }
   );
  }

  manageLoginResponse(resp: LoginResponse){
       this.message=resp.message;
       this.ok=resp.status;

       //mémoriser le jeton d'authentification
       sessionStorage.setItem("access_token",resp.token??"");

       console.log("loginResponse="+JSON.stringify(resp));
  }

  constructor(private _loginService : LoginService) {
    //injection de dépendance
   }
  ngOnInit(): void { }
}