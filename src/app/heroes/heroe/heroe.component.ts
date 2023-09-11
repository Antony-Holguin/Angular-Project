import { Component } from "@angular/core";

@Component({
    selector:'app-heroe',
    templateUrl:'./heroe.component.html'
})

export class HeroeComponent{
    nombre : String = "Antonio";
    edad : number = 43;

    //Method
    
    //getter
    get nombreCapitalizado(): String{
        return this.nombre.toUpperCase();
    }
    obtenerNombre():String{
        return `Nombre: ${this.nombre} - ${this.edad}`;
    }

    cambiarNombre():void{
        this.nombre = "Peter parker";
    }

    cambiarEdad():void{
        this.edad = 1020;
    }
}