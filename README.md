# Guardavidas Costa Ballena · Sitio web

Sitio web estático para **Guardavidas Costa Ballena** (Asociación de Guardavidas de la Zona Sur de Costa Rica), construido con [Astro](https://astro.build/).

Incluye páginas inicio, donaciones, apoyo comunitario (sponsors), contacto y formulario de apoyo, con contenido en **inglés** y **español**.

## Requisitos

- **Node.js** ≥ 22.12 (ver `package.json` → `engines`)

## Instalación y uso

```bash
npm install
```

| Comando        | Descripción                                      |
| -------------- | ------------------------------------------------ |
| `npm run dev`  | Servidor de desarrollo (por defecto `localhost:4321`) |
| `npm run build` | Genera el sitio en `dist/`                      |
| `npm run preview` | Previsualiza la build de producción localmente |

## Estructura (resumen)

```
src/
  assets/       # Imágenes y recursos importados por Vite
  components/   # Componentes Astro (HomePage, DonatePage, etc.)
  i18n/         # Textos y rutas por idioma
  layouts/      # Plantilla de página (header/footer)
  pages/        # Rutas del sitio (incl. /es/…)
public/         # Archivos servidos tal cual (favicon, etc.)
```

## Licencia

MIT — ver [LICENSE](./LICENSE).

---

**English:** Static marketing and donation site for Costa Ballena lifeguards (Southern Zone, Costa Rica), Astro-based, bilingual (EN/ES).
