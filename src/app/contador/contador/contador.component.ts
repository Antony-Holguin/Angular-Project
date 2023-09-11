import {Component} from '@angular/core';

@Component({
    selector:'app-contador',
    template:`
        <h1>{{titulo}}</h1>
        <button (click)="restar()">-5</button>
        <span>{{base}}</span>
        <button (click)="sumar()">+5</button>  
    
    `,
})

export class ContadorComponent{
    titulo:string = 'Contador App';
  numero:number = 10;
  base : number = 5;

  sumar(){
    this.base +=5;
  }

  restar(){
    this.base -=5;
    this.base <=0 ? this.base=0: this.base-5;
  }
}