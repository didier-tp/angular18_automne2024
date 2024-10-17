import { Component, inject , output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PreferencesService } from '../common/service/preferences.service';
import { DatePipe, NgFor } from '@angular/common';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FormsModule,NgFor,DatePipe],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  today = new Date();
 
  /*
  constructor(public preferencesService: PreferencesService){
    //dependency injection with constructor
  }
  */

  //better dependency injection (in case of inheritance or if used in function)
  public preferencesService = inject(PreferencesService);

  listeCouleurs : string[] = [ "lightyellow", "white",
    "lightgrey" , "lightgreen" , "lightpink" , "lightblue"] ;
  
}


