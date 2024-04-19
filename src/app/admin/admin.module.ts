import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistaComponent } from './view/gestion/artista/artista.component';
import { CancionesComponent } from './view/gestion/canciones/canciones.component';
import { MaestroCancionesComponent } from './view/maestro/maestro-canciones/maestro-canciones.component';
import { MaestroArtistaComponent } from './view/maestro/maestro-artista/maestro-artista.component';
import { AdminComponent } from './admin.component';



@NgModule({
  declarations: [
    AdminComponent,
    ArtistaComponent,
    CancionesComponent,
    MaestroCancionesComponent,
    MaestroArtistaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
