import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
})
export class Navbar {
  // sube al inicio de la página (sirve cuando ya estás en esa misma página)
  subirArriba() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
