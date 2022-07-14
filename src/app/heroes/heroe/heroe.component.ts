import { Component } from "@angular/core";

@Component({
    selector:"app-heroe",
    templateUrl:"./heroe.component.html"
})
export class HeroeComponent {
    nombre:string="Iroman";
    edad:number=45;

    get nombreCapitalizado():string{

        return this.nombre.toUpperCase();
    }
//esto es una funcion
    obtenerNombre():string{
        //manera de concatenar objetos 
        //el $ se usa para incrustar variables dentro 
        // de un cadena de String 
        return `${this.nombre} - ${this.edad}`;

    }
    cambiarNombre():void{
        this.nombre="Spiderman";
    }

    cambiarEdad():void{
        console.log('hey...')
        this.edad=30;
    }

}