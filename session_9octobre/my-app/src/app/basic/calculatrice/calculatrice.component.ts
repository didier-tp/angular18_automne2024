import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-calculatrice',
  templateUrl: './calculatrice.component.html',
  styleUrl: './calculatrice.component.scss'
})
export class CalculatriceComponent {

  modeChoisi : string = "simple" // ou "sophistiquee"

  a /*: number*/ = 0;
  b: number = 0;
  res: number = 0;

  onCalculer(op: string) {
    switch (op) {
      case "+":
        this.res = Number(this.a) + Number(this.b); break;
      case "-":
        this.res = this.a - this.b; break;
      case "*":
        this.res = this.a * this.b; break;
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
  constructor(public route:ActivatedRoute) { 
    this.route.params.subscribe(
      (params: Params) => {
        this.modeChoisi = params['mode'];
        //NB: mode est le nom loique du paramètre en fin de route
        // { path: 'calculatrice/:mode' } dans app-routing.module.ts
       }
    )
  }

  ngOnInit(): void { }

}
