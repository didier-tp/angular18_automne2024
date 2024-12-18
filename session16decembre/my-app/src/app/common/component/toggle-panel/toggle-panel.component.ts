import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toggle-panel',
  standalone: false,
  
  templateUrl: './toggle-panel.component.html',
  styleUrl: './toggle-panel.component.scss'
})
export class TogglePanelComponent {
  toggleP /* : boolean */ =false;
  
  @Input()
  title /* : string */ = 'default panel title';
}
