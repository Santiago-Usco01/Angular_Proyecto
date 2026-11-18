# CLAUDE.md

Página informativa del Festival Folclórico de Neiva, hecha con Angular para la clase de Tecnología Web (USCO). Sin base de datos ni backend.

## Comandos

Todo se corre dentro de `festival/` (el proyecto Angular está en esa subcarpeta, no en la raíz).

```bash
cd festival
npm install
npx ng serve     # http://localhost:4200
npx ng build     # revisar que compile sin errores
```

El repo tiene `.claude/launch.json` con la configuración `festival` para arrancar el servidor desde la app de Claude.

## Estilo del código (importante)

El proyecto debe verse como hecho por un estudiante de cuarto semestre de software con conocimiento básico de Angular, no como código generado por IA.

- Código simple y directo: componentes standalone, `@for` / `@if`, `ReactiveFormsModule`. Sin signals, sin servicios, sin abstracciones innecesarias.
- Nombres de variables, clases y archivos en español (`inicio`, `programacion`, `inscripcion`, `tarjeta`).
- Los datos de cada página (programación, artistas) van como arreglos dentro del `.ts` de esa página.
- Pocos comentarios, cortos y en español.
- Mantener la página informativa y sencilla; no agregar funciones que la clase no pide.

## Estructura

- `festival/src/app/components/`: navbar y footer.
- `festival/src/app/pages/`: inicio, programacion, artistas, inscripcion (cada uno con `.ts` y `.html`).
- `festival/src/app/app.routes.ts`: las rutas.
- `festival/src/styles.scss`: todos los estilos. Los colores están en el bloque `:root` del inicio (rojo oscuro, amarillo, fondo crema).
- `festival/public/img/`: fotos. `festival/public/logo-neiva.png` y `favicon.ico`: escudo usado como ícono de la pestaña.

## Contenido

Las fechas (26 de junio al 5 de julio de 2027), la programación y los nombres de los artistas son de ejemplo. Los lugares (Parque Santander, Malecón, Teatro Pigoanza, Estadio Guillermo Plazas Alcid) son sitios reales de Neiva. Si se agrega contenido nuevo, mantenerlo como ejemplo y no presentarlo como información oficial.

El formulario de inscripción solo muestra los datos en pantalla; no los guarda en ningún lado.

## Git

- Repositorio: https://github.com/Santiago-Usco01/Angular_Proyecto.git
- Ramas: `main` (estable) y `develop` (donde se trabaja).
- Hacer commit y push solo cuando el usuario lo pida, siempre a `develop`. No fusionar a `main` sin que lo pida.
- Mensajes de commit cortos y en español.
