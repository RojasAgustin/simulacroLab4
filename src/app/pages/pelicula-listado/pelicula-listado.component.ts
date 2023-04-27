import { Component,Input,Output,EventEmitter } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';

@Component({
  selector: 'app-pelicula-listado',
  templateUrl: './pelicula-listado.component.html',
  styleUrls: ['./pelicula-listado.component.css']
})
export class PeliculaListadoComponent {
  listaPeliculas:Pelicula[];
  unaPelicula:any;

  constructor(){

    this.listaPeliculas = [];
    this.listaPeliculas.push(new Pelicula(1,"Titanic","amor","21/07/1999",19,"Titanic.jpg"));
    this.listaPeliculas.push(new Pelicula(2,"Wall-E","a","14/12/2005",191,"Wall-e.jpg"));
    this.listaPeliculas.push(new Pelicula(3,"Scream","terror","01/05/2001",97,"scream.jpg"));
  }
  mostrarPelicula($event:any){
    console.info("En el main: ",$event);
    this.unaPelicula = $event;
  }
}
