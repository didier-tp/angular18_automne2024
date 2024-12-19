import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculService {

  calculTva(ht:number, tauxPct : number){
    return ht*tauxPct/100;
  }

  constructor() { }
}
