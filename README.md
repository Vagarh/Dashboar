# HealthTrack

HealthTrack es una plantilla de tablero construida con **Next.js** y pensada para desplegarse en **Firebase App Hosting**. Incluye páginas de ejemplo para monitorear actividad de salud, administrar pacientes y generar reportes.

## Objetivo
Proporcionar un punto de partida claro para crear dashboards en Next.js integrando estilos con Tailwind y componentes de shadcn/ui. El repositorio también contiene una configuración inicial de **Genkit** para futuras funciones de IA.

## Contenido del repositorio
- `src/app` – páginas y diseños de la aplicación.
  - `(app)/dashboard` – métricas de salud con gráficos y tablas.
  - `(app)/calendar` – calendario interactivo para citas y eventos.
  - `(app)/invoices` – sección de reportes generados.
  - `(app)/contacts` – listado de pacientes o contactos.
- `src/components` – componentes reutilizables.
- `src/ai` – integración básica con Genkit y Google AI.
- `docs` – documentación adicional, incluyendo el archivo [`blueprint.md`](docs/blueprint.md).

## Herramientas utilizadas
- **Next.js 15** y **React 18**
- **TypeScript**
- **Tailwind CSS** junto con **shadcn/ui**
- **Firebase** (App Hosting)
- **Genkit** con el modelo *Gemini* de Google AI

## Alcance
La aplicación demuestra:
- Un tablero con métricas y gráficos.
- Visualización de citas en un calendario.
- Gestión básica de pacientes y reportes.
- Estructura lista para extenderse con flujos de IA.

## Uso básico
1. Instalar dependencias:
   ```bash
   npm install
   ```
2. Iniciar el entorno de desarrollo:
   ```bash
   npm run dev
   ```
3. De manera opcional, ejecutar las funciones de IA en modo desarrollo:
   ```bash
   npm run genkit:dev
   ```

Este repositorio sirve para explorar las capacidades de Next.js junto con Firebase y Genkit, y se puede ampliar para adaptarlo a distintos casos de uso.
