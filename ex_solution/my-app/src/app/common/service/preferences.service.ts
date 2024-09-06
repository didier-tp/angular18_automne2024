import { Injectable } from '@angular/core';
import { inject, PLATFORM_ID } from "@angular/core";
import {  isPlatformBrowser, isPlatformServer  } from "@angular/common";

/*
NB: avec angular 17+, pour ne pas être embêté avec localStorage 
il faut si besoin ajouter 
"ssr": false,  "prerender": false 
dans angular.json près des lignes 72,73
  "development": {
              "optimization": false,
              "extractLicenses": false,
              "sourceMap": true,
              "ssr": false, 
              "prerender": false 
            }

OU BIEN MIEUX ENCORE (si SSR est souhaité/utilisé), 

import { Component, inject, PLATFORM_ID } from "@angular/core";
import { DOCUMENT, isPlatformBrowser, isPlatformServer } from "@angular/common";

export class AppComponent {
    private readonly platform = inject(PLATFORM_ID);
    private readonly document = inject(DOCUMENT);

    constructor() {
        if (isPlatformBrowser(this.platform)) {
            console.warn("browser");
            // Safe to use document, window, localStorage, etc. :-)
            console.log(document);
        }

        if (isPlatformServer(this.platform)) {
            console.warn("server");
            // Not smart to use document here, however, we can inject it ;-)
            console.log(this.document);
        }
    }
}

*/

@Injectable({
  providedIn: 'root'
})
export class PreferencesService {
  private readonly platform = inject(PLATFORM_ID);

  //public couleurFondPreferee :string = 'lightgrey';//v1 public
  //V2:
  private _couleurFondPreferee :string ;

  public get couleurFondPreferee(){
    return this._couleurFondPreferee;
  }

  public set couleurFondPreferee(c:string){
    this._couleurFondPreferee=c;
    if (isPlatformBrowser(this.platform)) {
      console.warn("browser platform (csr)");
      // Safe to use document, window, localStorage, etc. :-)
      if(localStorage)
        localStorage.setItem('preferences.couleurFond',c);
     }
  
  }

  constructor() { 
    let c :string | null = 'lightgrey';
    if (isPlatformBrowser(this.platform)) {
      if(localStorage)
         c= localStorage.getItem('preferences.couleurFond');
    }   
    this._couleurFondPreferee = c?c:'lightgrey';
  }


}
