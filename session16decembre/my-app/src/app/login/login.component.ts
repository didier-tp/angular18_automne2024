import { Component } from '@angular/core';
import { Login, LoginResponse } from '../common/data/login';
import { LoginService } from '../common/service/login.service';
import { messageFromError } from '../common/util/util';
import { SessionServiceService } from '../common/service/session-service.service';
import { User } from '../common/data/user';

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

  constructor(private _loginService : LoginService,
              private _sessionService : SessionServiceService
  ){
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
     if(this.ok){
      this._sessionService.setUser(new User(loginResponse.username,true));
     }else{
      this._sessionService.setUser(new User("?",false));
     }
     console.log(JSON.stringify(loginResponse));
     sessionStorage.setItem("access_token",loginResponse.token??"");
  }

}
