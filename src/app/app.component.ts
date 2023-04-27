import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'otraVariable';
  edad1 = 0;
  edad2 = 0;
  promedio:number = 0;
  suma:number = 0;

  Calcular() {
    this.suma = Number(this.edad1)+ Number(this.edad2);
    this.promedio = this.suma/2;
  }
  Limpiar(){
    this.edad1 = 0;
    this.edad2 = 0;
    this.promedio = 0;
    this.suma = 0;
  }
}
