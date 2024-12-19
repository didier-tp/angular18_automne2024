import { Injectable, signal } from '@angular/core';
import { User } from '../data/user';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionServiceService {

  private  _user : User = new User();

  private _userSignal = signal(this._user);

  private _userBS = new BehaviorSubject(this._user);

  public setUser(u : User){
    //on met à jour le user , et les versions "signal" , "BehaviorSubject"
    this._user=u;
    this._userBS.next(u);
    this._userSignal.set(u);
  }

  //plein de public get en version User , signal , BehaviorSubject
  public get userSignal(){
    return this._userSignal;
  }

  public get userBs(){
    return this._userBS;
  }

  public get user(){
    return this._user;
  }

  constructor() { }
}
