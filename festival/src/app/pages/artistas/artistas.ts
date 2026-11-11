import { Component } from '@angular/core';

@Component({
  selector: 'app-artistas',
  templateUrl: './artistas.html',
})
export class Artistas {
  artistas = [
    { nombre: 'Ballet Folclórico Opita', tipo: 'Danza', imagen: 'img/artista-ballet.webp', descripcion: 'Pareja de baile con trajes típicos del Huila.' },
    { nombre: 'Comparsa San Pedrito', tipo: 'Comparsa', imagen: 'img/artista-comparsa.png', descripcion: 'Comparsa con disfraces y mucho color para los desfiles.' },
    { nombre: 'Academia de Danza Tierra Huilense', tipo: 'Danza', imagen: 'img/artista-academia.webp', descripcion: 'Presentación de bailes tradicionales del departamento.' },
    { nombre: 'Grupo Rajaleña Viva', tipo: 'Danza', imagen: 'img/artista-rajalena.webp', descripcion: 'Grupo dedicado a la rajaleña y al baile campesino.' },
    { nombre: 'Cuadro Folclórico Sol del Magdalena', tipo: 'Danza', imagen: 'img/artista-tierra.webp', descripcion: 'Bailarines que muestran el bambuco en las calles.' },
    { nombre: 'Danzas Los Palmeros', tipo: 'Danza', imagen: 'img/artista-palmeros.webp', descripcion: 'Grupo de baile con vestuario blanco y negro.' },
  ];
}
