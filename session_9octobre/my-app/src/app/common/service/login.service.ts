import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../data/login';
import { LoginResponse } from '../data/login-response';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

    //private _apiBaseUrl = "https://www.d-defrance.fr/tp/standalone-login-api";
    private _apiBaseUrl = "tp/standalone-login-api"; //via proxy.conf.json en dev/ng-serve
  
    constructor(private _http: HttpClient) { }

  public postLogin$(login: Login): Observable<LoginResponse>{
        const url = this._apiBaseUrl + "/public/auth";
        return this._http.post<LoginResponse>(url,login);
  }
}
