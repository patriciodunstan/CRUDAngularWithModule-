import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistaComponent } from './view/gestion/artista/artista.component';
import { MaestroArtistaComponent } from './view/maestro/maestro-artista/maestro-artista.component';
import { CancionesComponent } from './view/gestion/canciones/canciones.component';
import { MaestroCancionesComponent } from './view/maestro/maestro-canciones/maestro-canciones.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: AdminComponent
  },
  {
    path: 'artista/:id',
    component: ArtistaComponent
  },
  {
    path: 'maestroArtista',
    component: MaestroArtistaComponent,
  },
  {
    path: 'canciones/:id',
    component: CancionesComponent
  },
  {
    path: 'maestroCanciones',
    component: MaestroCancionesComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
