import { Component } from '@angular/core';
import { Login } from '../common/data/login';
import { LoginService } from '../common/service/login.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss' ]
})
export class LoginComponent {
  public login : Login = new Login();
  public message :string ="";
  public connected : boolean = false;

  public onLoginV1(){
    // this.message = "donnees saisies = " + JSON.stringify(this.login);
    this.connected = false; //avant essai
    this.loginService.postLogin$(this.login)
        .subscribe(
          {
            next: (loginResponse) =>{ 
              this.message = loginResponse.message;
              this.connected = loginResponse.status;
              sessionStorage.setItem("access_token",loginResponse.token??"");
             },
            error: (err)=>console.log(err)
          }
        )
  }

  public async onLogin(){
    // this.message = "donnees saisies = " + JSON.stringify(this.login);
    this.connected = false; //avant essai
    try{
      const loginResponse = await firstValueFrom(this.loginService.postLogin$(this.login))
      this.message = loginResponse.message;
      this.connected = loginResponse.status;
      sessionStorage.setItem("access_token",loginResponse.token??"");
    }catch(ex){
      console.log("echec http:" + ex)
    }
  }

  constructor(private loginService: LoginService) { }
  ngOnInit(): void {}
}
