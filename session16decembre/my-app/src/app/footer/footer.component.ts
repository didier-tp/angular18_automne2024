import { Component, inject } from '@angular/core';
import { PreferencesService } from '../common/service/preferences.service';
import { SessionServiceService } from '../common/service/session-service.service';
import { User } from '../common/data/user';

@Component({
  selector: 'app-footer',
  standalone: false,
  
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  connectedUsername = "?";

  public preferencesService = inject(PreferencesService);
  public sessionService = inject(SessionServiceService);

  ngOnInit(){
    this.sessionService.userBs.subscribe(
      //callback qui sera redeclenchée dès que la valeur de sessionService.userBs
      //sera modifiée dans le futur:
      (u:User)=>{ this.connectedUsername = u.username.toUpperCase()  }
    );
  }

  listeCouleurs : string[] = [ "lightyellow", "white",
    "lightgrey" , "lightgreen" , "lightpink" , "lightblue"] ;
    /*
    constructor(public preferencesService : PreferencesService) { }
    */
}
