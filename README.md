# Portfolio — Ignacio Godoy

Portfolio personal de Ignacio Godoy, Backend Developer Jr. Sitio de una sola página construido con React + Vite + Tailwind CSS, con componentes de [shadcn](https://ui.shadcn.com) y [Cult UI](https://cult-ui.com).

Sitio en vivo: https://portfolio-ignacio-pi.vercel.app/

## Stack

- React 19 + Vite
- Tailwind CSS 4
- shadcn/ui + Cult UI (Radix, Framer Motion) para componentes visuales
- lucide-react para íconos

## Desarrollo

```bash
npm install
npm run dev      # servidor de desarrollo
npm run build    # build de producción
npm run lint     # eslint
npm run preview  # sirve el build de producción localmente
```

## Estructura

```
src/
  App.jsx                  # composición de secciones
  data/                    # contenido (perfil, skills, proyectos, juegos)
  components/
    sections/               # Hero, About, Projects, Skills, Featured, Contact
    ProjectCard.jsx          # tarjeta reutilizada por proyectos y juegos
    ui/                      # componentes de shadcn/Cult UI (no editar a mano salvo necesidad)
```

Los proyectos y juegos se listan en [src/data/projects.js](src/data/projects.js).
