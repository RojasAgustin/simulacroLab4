import { Component,Input,Output,EventEmitter } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css']
})
export class TablaPeliculaComponent {
  @Input() listaRecibida!:Pelicula[];
  @Output() selectPelicula:EventEmitter<any> = new EventEmitter<any>(); 
  
  constructor(){
    
  }
  seleccionarPelicula(pelicula:Pelicula){
    console.info("En el tabla-pelicula: ",pelicula);
    this.selectPelicula.emit(pelicula);
  }
}
