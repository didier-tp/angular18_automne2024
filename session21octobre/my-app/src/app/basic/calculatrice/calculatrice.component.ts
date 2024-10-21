import { Component } from '@angular/core';

@Component({
  selector: 'app-calculatrice',
  templateUrl: './calculatrice.component.html',
  styleUrl: './calculatrice.component.scss'
})
export class CalculatriceComponent {
  a /*:number*/ = 0;
  b = 0;
  res = 0;


  onCalculer(op: string) {
    switch (op) {
      case "+":
        //this.res = this.a + this.b; break;
        this.res = Number(this.a) + Number(this.b); break;
      case "-":
        this.res = this.a - this.b; break;
      case "*":
        this.res = this.a * this.b; break;
      case "/":
        this.res = this.a / this.b; break;
      default:
        this.res = 0;
    }
  }

  //coordonnées relatives de la souris qui survole une div
  x: number = 0;
  y: number = 0;

  onMouseMove(evt: MouseEvent) {
    let currentDiv: HTMLElement = <HTMLElement>evt.target;
    this.x = evt.pageX - currentDiv.offsetLeft;
    this.y = evt.pageY - currentDiv.offsetTop;
  }

  onMouseLeave(evt: MouseEvent) {
    this.x = 0; this.y = 0;
  }

}
