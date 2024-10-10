import { Component, Input, OnInit } from '@angular/core';
import { PreferencesService } from '../common/service/preferences.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
   ngOnInit(): void {
     console.log(" dans ngOnInit() ,  titre="+this.titre);
   }

   constructor(public preferencesService : PreferencesService){
    console.log(" dans constructor() ,  titre="+this.titre);
   }

   @Input()
   titre = "titreParDefaut"
}
