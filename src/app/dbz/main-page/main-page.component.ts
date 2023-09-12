import { Component } from '@angular/core';
import { personaje } from '../interfaces/personaje.interface';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent{
  personajes:personaje[]=[
    {
      name:'Personaje 1',
      powerLevel:100
    },
    {
      name:'Personaje 2',
      powerLevel:200
    },
    {
      name:'Personaje 3',
      powerLevel:300
    }
  ]
  ;

  nuevo:personaje={
    name:'',
    powerLevel:0
  }

  agregarPersonaje(){
    if(this.nuevo.name.trim().length == 0 ){
      alert("LLena bien man");
      return;
    }else{
      this.personajes.push(this.nuevo);
      console.log(this.personajes);
      this.nuevo ={
        name:'',
        powerLevel:0
      }
    }
    
  }

  imprimeAlgo(event:any){
    console.log(event.target.value);
  }
}

