import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculService {

     tva(ht:number,tauxPct:number){
      return ht * tauxPct/100;
     }

  constructor() { }
}
