import { Component } from '@angular/core';
import { Router } from '@angular/router';
//Attention, si optimisation SSR depuis angular 17, pas de { Router } from 'express' ici !!!! (sinon erreur "process is not defined")
import { firstValueFrom } from 'rxjs';
import { Login, LoginResponse } from '../common/data/login';
import { LoginService } from '../common/service/login.service';
import { messageFromError } from '../common/util/util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
//login = new Login();
login = new Login("user1","pwd1","user");
message = "";
status = false;

constructor(private loginService: LoginService,private router : Router){
   //injection de dépendance
}

onLoginV1(){
 //V1:
 //this.message="valeurs saisies=" + JSON.stringify(this.login);
 //V2:
 this.loginService.postLogin$(this.login).subscribe(
   {
     next: (loginResponse: LoginResponse) => {
       this.message=loginResponse.message;
       this.status = loginResponse.status;
     },
     error: (err) => {
       console.log("error:" + err);
       this.message = messageFromError(err, "echec login")
     }
   }
 );
}

async onLogin(){
   sessionStorage.setItem("access_token","");
   try{
     let loginResponse = await firstValueFrom( this.loginService.postLogin$(this.login));
     this.message=loginResponse.message;
     this.status = loginResponse.status;  
     sessionStorage.setItem("access_token",loginResponse.token);
     //NB: "access_token" plutot que "token" or "authToken" for angular-oauth2-oidc extension compatibility
     //this.router.navigate([ '/ngr-conversion']); //navigation possible par programmation
   }
   catch(err){
     console.log("error:" + err);
     this.message =  "echec login";
   }
}
}
