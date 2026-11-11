import { Component } from '@angular/core';

@Component({
  selector: 'app-artistas',
  templateUrl: './artistas.html',
})
export class Artistas {
  artistas = [
    { nombre: 'Ballet Folclórico Opita', tipo: 'Danza', descripcion: 'Grupo de danza con trajes típicos del Huila.' },
    { nombre: 'Trío Los Cantores del Magdalena', tipo: 'Música', descripcion: 'Trío que interpreta bambucos y pasillos.' },
    { nombre: 'Banda Municipal de Neiva', tipo: 'Música', descripcion: 'Banda que acompaña los desfiles y actos oficiales.' },
    { nombre: 'Comparsa San Pedrito', tipo: 'Comparsa', descripcion: 'Comparsa infantil con disfraces y carrozas.' },
    { nombre: 'Grupo Rajaleña Viva', tipo: 'Música', descripcion: 'Grupo dedicado a la rajaleña y la música campesina.' },
    { nombre: 'Academia de Danza Tierra Huilense', tipo: 'Danza', descripcion: 'Presentación de bailes tradicionales del departamento.' },
  ];
}
