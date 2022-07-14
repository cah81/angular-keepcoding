import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

heroes:string[]=['Spiderma','Ironman','Thor','Hulk','Capitan America','AntMan']
heroeBorrado:string|undefined;

  heroesborrados: string[] =[];


borrarHeroe():void{
  //this.heroes.pop();
  this.heroeBorrado = this.heroes.shift();
  this.heroesborrados.push(String(this.heroeBorrado));
}


//crear un array de heroes borrados y mostrarlos en 
//tiempo real al borrar cada heroe





}

