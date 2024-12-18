import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../../common/service/produit.service';


@Component({
  selector: 'app-seuil',
  standalone:false,
  templateUrl: './seuil.component.html',
  styleUrls: ['./seuil.component.scss']
})
export class SeuilComponent implements OnInit {

  public seuilMax=100; //à saisir

  onSeuilChange(){
    this._produitService.changerSeuil(this.seuilMax);
  }

  constructor(private _produitService : ProduitService) { }

  ngOnInit(): void {
  }

}
