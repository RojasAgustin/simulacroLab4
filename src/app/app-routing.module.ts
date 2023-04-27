import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidoComponent } from './pages/bienvenido/bienvenido.component';
import { BusquedaComponent } from './pages/busqueda/busqueda.component';
import { PeliculaListadoComponent } from './pages/pelicula-listado/pelicula-listado.component';
const routes: Routes = [
  {
    path:'',
    component:BienvenidoComponent
  },
  {
    path:"bienvenido",
    component:BienvenidoComponent
  },
  {
    path:"pelicula/listado",
    component:PeliculaListadoComponent
  },
  {
    path:"busqueda",
    component:BusquedaComponent
  }
  // {
  //   path:"**",
  //   component: ErrorComponent//Va siempre ultimo este. Es como un default de error

  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
