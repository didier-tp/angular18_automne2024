import { Component, inject } from '@angular/core';
import { PreferencesService } from '../common/service/preferences.service';

@Component({
  selector: 'app-footer',
  standalone: false,
  
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  public preferencesService = inject(PreferencesService);

  listeCouleurs : string[] = [ "lightyellow", "white",
    "lightgrey" , "lightgreen" , "lightpink" , "lightblue"] ;
    /*
    constructor(public preferencesService : PreferencesService) { }
    */
}
