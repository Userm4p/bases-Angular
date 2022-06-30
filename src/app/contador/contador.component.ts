import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <h1>{{ title }}</h1>
    <h3>La base es {{ base }}</h3>

    <button (click)="operar(+1)">+{{ base }}</button>

    <span>{{ numero }}</span>

    <button (click)="operar(-1)">-{{ base }}</button>
  `,
  styleUrls: ['../app.component.css']
})
export class ContadorComponent {
    title : string = 'Contador App';
    numero : number = 10;
    base: number = 10;
  
    operar(operator:number) {
      this.numero += operator*this.base;
    }
}
