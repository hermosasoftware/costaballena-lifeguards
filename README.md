# Guardavidas Costa Ballena · Website

Static website for **Guardavidas Costa Ballena** (Southern Zone Lifeguards Association, Costa Rica), commissioned by a **private team** and built with [Astro](https://astro.build/).

It includes home, donations, community support (sponsors), contact, and support form pages, with content in **English** and **Spanish**.

## Requirements

- **Node.js** ≥ 22.12 (see `package.json` → `engines`)

## Setup and commands

```bash
npm install
```

| Command           | Description                                              |
| ----------------- | -------------------------------------------------------- |
| `npm run dev`     | Development server (default `localhost:4321`)            |
| `npm run build`   | Production build output in `dist/`                       |
| `npm run preview` | Preview the production build locally                     |

## Project layout (overview)

```
src/
  assets/       # Images and assets imported by Vite
  components/   # Astro components (HomePage, DonatePage, etc.)
  i18n/         # Copy and routes per language
  layouts/      # Page shell (header/footer)
  pages/        # Site routes (including /es/…)
public/         # Static files served as-is (favicon, etc.)
```

## Rights and use of the code

This repository is **private development** for the association. Intellectual property, use of the code, and publication of the site are governed by the **agreement between the development company and Guardavidas Costa Ballena**, not by an open-source software license.
