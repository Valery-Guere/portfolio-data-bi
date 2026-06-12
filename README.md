# Portfolio Valery Güere / Marketing, Retail & Analytics

Sitio estático profesional basado en el PDF de LinkedIn adjuntado. Presenta un
perfil de Marketing Digital, Gestión Comercial, Retail y Analytics con proyectos
dummy orientados a dashboards ejecutivos.

## Estructura

- `index.html`: estructura de la página.
- `styles.css`: diseño responsive, animaciones y layout.
- `app.js`: datos dummy, filtros, navegación y gráficos interactivos en canvas.
- `assets/analytics-hero.png`: imagen principal del hero.
- `assets/cv-valery-guere-solorzano.pdf`: CV real descargable desde el botón.
- `assets/cv-valery-guere.txt`: versión de texto editable basada en el PDF.

## Cómo ejecutarlo

Abre `index.html` directamente en el navegador.

También puedes servir la carpeta con cualquier servidor estático local, por
ejemplo:

```bash
python -m http.server 8080
```

Luego entra a `http://localhost:8080`.

## Personalización rápida

- Cambia el nombre, rol y frases principales en `index.html`.
- Edita los proyectos, KPIs, tablas y series de gráficos en `app.js`.
- Ajusta colores, espaciados y estilo visual desde las variables de `styles.css`.

No usa APIs externas. Los datos de dashboards son ficticios y están incluidos
dentro del código.
