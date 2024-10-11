import { Injectable } from '@angular/core';
import { Devise } from '../data/devise';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';
import { throwError } from 'rxjs';

export interface ConvertRes {
  source: string; //ex: "EUR",
  target: string; //ex: "USD",
  amount: number; //ex: 200.0
  result: number; //ex: 217.3913
};

@Injectable({
  providedIn: 'root'
})
export class DeviseService {

  //private _apiBaseUrl = "https://www.d-defrance.fr/tp/devise-api";
  private _apiBaseUrl = "tp/devise-api"; //via proxy.conf.json en dev/ng-serve
  
  constructor(private _http: HttpClient) { }
  
  public getAllDevises$(): Observable<Devise[]> {
    let url = this._apiBaseUrl + "/public/devise";
    console.log("url = " + url);
    return this._http.get<Devise[]>(url);
  }

  putDevise$(d :Devise): Observable<Devise>{
    const url = `${this._apiBaseUrl}/private/devise?v=true`;
    return this._http.put<Devise>(url,d /*input envoyé au serveur*/);
  }

  public convertir$(montant: number,
    codeDeviseSrc: string,
    codeDeviseTarget: string
  ): Observable<number> {
    const url = this._apiBaseUrl + "/public/convert"
      + `?source=${codeDeviseSrc}`
      + `&target=${codeDeviseTarget}&amount=${montant}`;
    //console.log( "url = " + url);
    
    if(montant < 0)
      throw throwError(   () => new Error("erreur montant invalide") );

      return this._http.get<ConvertRes>(url)
      .pipe(
        map((res: ConvertRes) => res.result)
      );

  
  }
}