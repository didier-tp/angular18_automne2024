import { Component } from '@angular/core';
import { Login, LoginResponse } from '../common/data/login';
import { LoginService } from '../common/service/login.service';
import { messageFromError } from '../common/util/util';

@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  public login : Login = new Login("admin1","pwd1","admin");
  public message :string ="";
  public ok=false;

  constructor(private _loginService : LoginService){
      //injection de dépendance
  }

  public onLogin(){
      // this.message = "donnees saisies = " + JSON.stringify(this.login);
      this._loginService.postLogin$(this.login)
        .subscribe(
          {
          next: (loginResponse : LoginResponse) => { 
            this.manageLoginResponse(loginResponse);
           },
          error: (err) => { console.log("error:" + err) ;
                    this.message = messageFromError(err,"echec technique login");
                  }
          }
        );
  }

  manageLoginResponse(loginResponse : LoginResponse){
     this.message=loginResponse.message;
     this.ok = loginResponse.status;
     console.log(JSON.stringify(loginResponse));
     sessionStorage.setItem("access_token",loginResponse.token??"");
  }

}
