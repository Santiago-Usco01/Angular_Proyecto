import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-inicio',
  imports: [RouterLink],
  templateUrl: './inicio.html',
})
export class Inicio {
  nombre = 'Festival Folclórico de Neiva';
  fechas = '26 de junio al 5 de julio de 2027';
  lugar = 'Neiva, Huila';
}
