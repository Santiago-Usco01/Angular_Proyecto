# Festival Folclórico de Neiva

Página web informativa sobre el Festival Folclórico de Neiva (Huila, Colombia), hecha con Angular para la clase de Tecnología Web (USCO).

La página muestra información del festival y tiene un formulario de inscripción. No usa base de datos ni backend: los datos del formulario solo se muestran en pantalla y no se guardan.

> Las fechas, la programación y los nombres de los artistas son de ejemplo para el proyecto de clase.

## Páginas

| Ruta | Contenido |
|---|---|
| `/` | Inicio: banner, datos principales, qué es el festival y qué se puede hacer |
| `/programacion` | Tabla de eventos por día (hora, evento y lugar) |
| `/artistas` | Tarjetas con los grupos invitados |
| `/inscripcion` | Formulario de inscripción y panel con información |

## Formulario de inscripción

Está hecho con formularios reactivos de Angular (`ReactiveFormsModule`). Campos y validaciones:

- **Nombre completo:** obligatorio, mínimo 3 caracteres.
- **Correo electrónico:** obligatorio, con formato de correo.
- **Teléfono:** opcional, solo números (7 a 10 dígitos).
- **Número de asistentes:** obligatorio, entre 1 y 10.
- **Actividad de interés:** obligatoria (desfiles, música, danza o gastronomía).

Los errores aparecen cuando el usuario toca un campo y está mal, o al intentar enviar el formulario incompleto. Si todo está bien, se muestra una pantalla de confirmación con los datos.

## Estructura del proyecto

```
src/
├── index.html
├── styles.scss              # estilos de toda la página
└── app/
    ├── app.ts / app.html    # componente principal (navbar + rutas + footer)
    ├── app.routes.ts        # definición de las rutas
    ├── components/
    │   ├── navbar/
    │   └── footer/
    └── pages/
        ├── inicio/
        ├── programacion/
        ├── artistas/
        └── inscripcion/
public/
├── img/                     # fotos de la página
├── logo-neiva.png           # escudo usado como ícono de la pestaña
└── favicon.ico
```

Los datos de la programación y de los artistas están dentro del archivo `.ts` de cada página. Los colores se definen al inicio de `src/styles.scss` (bloque `:root`).

## Cómo correr el proyecto

Requisitos: Node.js y npm.

```bash
cd festival
npm install
ng serve
```

Luego abrir `http://localhost:4200/` en el navegador. Si `ng` no se reconoce, usar `npx ng serve`.

Para generar la versión de producción:

```bash
ng build
```

## Tecnologías

- Angular (componentes standalone, Router, Reactive Forms)
- TypeScript
- SCSS

## Repositorio

[github.com/Santiago-Usco01/Angular_Proyecto](https://github.com/Santiago-Usco01/Angular_Proyecto). La rama de trabajo es `develop`.
