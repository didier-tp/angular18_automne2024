import { Component } from '@angular/core';
import { PreferencesService } from '../common/service/preferences.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  listeCouleurs : string[] = [ "lightyellow", "white",
    "lightgrey" , "lightgreen" , "lightpink" , "lightblue"] ;
    constructor(public preferencesService : PreferencesService) { }
}
