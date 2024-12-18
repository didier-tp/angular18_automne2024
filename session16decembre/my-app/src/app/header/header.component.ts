import { Component, input, Input } from '@angular/core';
import { PreferencesService } from '../common/service/preferences.service';

@Component({
  selector: 'app-header',
  standalone: false,
  
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  //@Input()
  //titre = "titre_par_defaut";

  titre = input("titre_par_defaut");  //et {{titre()}} du cote .html

  constructor(public preferencesService : PreferencesService) { }
}
