import { Injectable } from '@angular/core';
import { Login } from '../data/login';
import { Observable } from 'rxjs';
import { LoginResponse } from '../data/loginResponse';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

     //private _apiBaseUrl ="https://www.d-defrance.fr/tp/standalone-login-api";
  private _apiBaseUrl ="tp/standalone-login-api";


  constructor(private _http: HttpClient) { }


  public postLogin$(login: Login): Observable<LoginResponse>{
    let url=this._apiBaseUrl+"/public/auth";
    return this._http.post<LoginResponse>(url,login);
  }
}