import { Component, input } from '@angular/core';

@Component({
  selector: 'app-toggle-panel',
  templateUrl: './toggle-panel.component.html',
  styleUrl: './toggle-panel.component.scss'
})
export class TogglePanelComponent {
  
  //@Input() //old version without signal
  title=input("defaultTitle");//as signal

  toggleP=false;
}
