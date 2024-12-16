import { Component } from '@angular/core';

@Component({
  selector: 'app-tva',
  standalone: false,
  
  templateUrl: './tva.component.html',
  styleUrl: './tva.component.scss'
})
export class TvaComponent {
//à saisir ou choisir:
  ht /*: number*/ = 0;
  tauxTva /* : number*/ = 20; //en %

  listeTaux = [ 5, 10, 20]; //liste des taux possibles (en %)

//à calculer et afficher:
  tva /*:number*/ = 0;
  ttc /*:number*/ = 0;

onCalculerTvaEtTtc(){
  this.tva = this.ht * this.tauxTva / 100;
  this.ttc = Number(this.tva) + Number(this.ht);
}

}
