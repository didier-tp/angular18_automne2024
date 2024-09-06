import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PreferencesService } from '../common/service/preferences.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit , OnChanges{

  @Input()
  titre = "titreParDefaut";

  constructor(public preferencesService : PreferencesService)  {
     console.log("dans constructeur de HeaderComponent , titre=" + this.titre)
     }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges avec changes=" + JSON.stringify(changes));
  }

  ngOnInit(): void { console.log("dans ngOnInit() de HeaderComponent , titre=" + this.titre)
   }

}

