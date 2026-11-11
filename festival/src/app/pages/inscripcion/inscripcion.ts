import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-inscripcion',
  imports: [ReactiveFormsModule],
  templateUrl: './inscripcion.html',
})
export class Inscripcion {
  enviado = false;
  datos: any = null;

  formulario = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
    correo: new FormControl('', [Validators.required, Validators.email]),
    telefono: new FormControl('', [Validators.pattern('^[0-9]{7,10}$')]),
    asistentes: new FormControl(1, [Validators.required, Validators.min(1), Validators.max(10)]),
    actividad: new FormControl('', [Validators.required]),
  });

  enviar() {
    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      return;
    }
    this.datos = this.formulario.value;
    this.enviado = true;
  }

  nuevaInscripcion() {
    this.formulario.reset({ asistentes: 1 });
    this.enviado = false;
  }
}
