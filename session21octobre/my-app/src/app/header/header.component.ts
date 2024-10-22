import { Component, Input } from '@angular/core';
import { PreferencesService } from '../common/service/preferences.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
   @Input() 
   titre="titre_par_defaut";

   constructor(public preferencesService : PreferencesService){
    //injection de dépendance par constructeur
   }
}
