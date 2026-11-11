import { Component } from '@angular/core';

@Component({
  selector: 'app-programacion',
  templateUrl: './programacion.html',
})
export class Programacion {
  dias = [
    {
      fecha: 'Sábado 26 de junio',
      eventos: [
        { hora: '4:00 p.m.', nombre: 'Inauguración del festival', lugar: 'Parque Santander' },
        { hora: '7:00 p.m.', nombre: 'Noche de bambuco', lugar: 'Malecón del río Magdalena' },
      ],
    },
    {
      fecha: 'Domingo 27 de junio',
      eventos: [
        { hora: '10:00 a.m.', nombre: 'Desfile de comparsas', lugar: 'Centro de la ciudad' },
        { hora: '3:00 p.m.', nombre: 'Muestra gastronómica', lugar: 'Parque Santander' },
      ],
    },
    {
      fecha: 'Sábado 3 de julio',
      eventos: [
        { hora: '2:00 p.m.', nombre: 'Concurso de danza folclórica', lugar: 'Teatro Pigoanza' },
        { hora: '8:00 p.m.', nombre: 'Concierto de música colombiana', lugar: 'Malecón del río Magdalena' },
      ],
    },
    {
      fecha: 'Lunes 5 de julio',
      eventos: [
        { hora: '9:00 a.m.', nombre: 'Gran desfile de clausura', lugar: 'Centro de la ciudad' },
        { hora: '6:00 p.m.', nombre: 'Coronación y cierre del festival', lugar: 'Estadio Guillermo Plazas Alcid' },
      ],
    },
  ];
}
