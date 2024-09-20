import { Injectable } from '@angular/core';
import { Devise } from '../data/devise';
import { Observable, of } from 'rxjs';
import { delay, map} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';


export interface ConvertRes {
  source :string; //ex: "EUR",
  target :string; //ex: "USD",
  amount :number; //ex: 200.0
  result :number; //ex: 217.3913
};


@Injectable({
  providedIn: 'root'
})
export class DeviseService {

  

  private _withoutSecurity = false; 

  public set withoutSecurity(value:boolean){
    this._withoutSecurity=value;
    this.publicOrPrivateBaseUrl=this._withoutSecurity?this.publicBaseUrl:this.privateBaseUrl;
  }

  public get  withoutSecurity():boolean{
    return this._withoutSecurity;
  }
  //full baseUrl = "https://www.d-defrance.fr/tp/devise-api/public or private";
  //_apiBaseUrl ="https://www.d-defrance.fr/tp/devise-api";
  //_apiBaseUrl ="http://localhost:8233/devise-api"

  _apiBaseUrl ="tp/devise-api"; //with ng serve --proxy-config proxy.conf.json
  publicBaseUrl = `${this._apiBaseUrl}/public`;
  privateBaseUrl = `${this._apiBaseUrl}/private`;
  publicOrPrivateBaseUrl : string =this.privateBaseUrl; //with security by default

 constructor(private http: HttpClient){
 }

  public getAllDevises$() : Observable<Devise[]>{
     const url = `${this.publicBaseUrl}/devise`;
     console.log( "url = " + url);
     return this.http.get<Devise[]>(url)
     .pipe(
         map( tabDevises => tabDevises.sort((d1,d2) => d1?d1.code.localeCompare(d2.code):0)) 
     );
  }

  public getDeviseByCode$(code:string) : Observable<Devise>{
    const url = `${this.publicBaseUrl}/devise/${code}`;
    console.log( "url = " + url);
    return this.http.get<Devise>(url);
  }


  public deleteDevise$(deviseCode : string):Observable<any>{
    const url = `${this.publicOrPrivateBaseUrl}/devise/${deviseCode}?v=true`;
    console.log("deleteUrl=" + url );
    return this.http.delete<any>(url);
  }

  postDevise$(d :Devise): Observable<Devise>{
    const url = `${this.publicOrPrivateBaseUrl}/devise`;
    return this.http.post<Devise>(url,d /*input envoyé au serveur*/);
    //this.http.post<TypeReponseRetourneParServeur>(url_web_service , donnee_a_envoyer)
  }


  putDevise$(d :Devise): Observable<Devise>{
    const url = `${this.publicOrPrivateBaseUrl}/devise?v=true`; 
    return this.http.put<Devise>(url,d );
    //this.http.put<TypeReponseRetourneParServeur>(url_web_service , donnee_a_envoyer)
  }
  

  public convertir$(montant: number,
                   codeDeviseSrc : string, 
                   codeDeviseTarget : string
                   ) : Observable<number> {                    
    let url = this.publicBaseUrl 
    + `/convert?source=${codeDeviseSrc}&target=${codeDeviseTarget}&amount=${montant}`;
    console.log("url="+url);
  
    return this.http.get<ConvertRes>(url).pipe(
      map((convertRes) => convertRes.result)
    );
    
  }

}