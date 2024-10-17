import { Component } from '@angular/core';
import { TvaComponent } from './tva/tva.component';
import { CalculatriceComponent } from './calculatrice/calculatrice.component';
import { TogglePanelComponent } from "../common/component/toggle-panel/toggle-panel.component";

@Component({
  selector: 'app-basic',
  standalone: true,
  imports: [CalculatriceComponent, TvaComponent, TogglePanelComponent],
  templateUrl: './basic.component.html',
  styleUrl: './basic.component.scss'
})
export class BasicComponent {

}