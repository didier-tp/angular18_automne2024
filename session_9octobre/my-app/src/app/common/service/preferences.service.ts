import { Injectable } from '@angular/core';
import { inject, PLATFORM_ID } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class PreferencesService {
  private readonly platform = inject(PLATFORM_ID);

  private _couleurFondPreferee: string;

  public get couleurFondPreferee() {
    return this._couleurFondPreferee;
  }
  public set couleurFondPreferee(c: string) {
    this._couleurFondPreferee = c;
    if (isPlatformBrowser(this.platform)) {
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
    this._couleurFondPreferee = c ? c : 'lightgrey';
  }
}
