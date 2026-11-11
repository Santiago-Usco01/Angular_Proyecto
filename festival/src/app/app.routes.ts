import { Routes } from '@angular/router';
import { Inicio } from './pages/inicio/inicio';
import { Programacion } from './pages/programacion/programacion';
import { Artistas } from './pages/artistas/artistas';
import { Inscripcion } from './pages/inscripcion/inscripcion';

export const routes: Routes = [
  { path: '', component: Inicio },
  { path: 'programacion', component: Programacion },
  { path: 'artistas', component: Artistas },
  { path: 'inscripcion', component: Inscripcion },
  { path: '**', redirectTo: '' },
];
