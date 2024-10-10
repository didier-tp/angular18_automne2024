import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
   ngOnInit(): void {
     console.log(" dans ngOnInit() ,  titre="+this.titre);
   }

   constructor(){
    console.log(" dans constructor() ,  titre="+this.titre);
   }

   @Input()
   titre = "titreParDefaut"
}
