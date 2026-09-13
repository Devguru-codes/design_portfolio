# Design portfolio — Devguru Tiwari

Product and UX case studies. Static multi-page site built with Vite, deployed on Vercel at
[design-portfolio-three-tan.vercel.app](https://design-portfolio-three-tan.vercel.app).

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # -> dist/
npm run preview  # serve dist/
```

## How it's put together

There is no framework. Pages are plain HTML assembled at build time by a small Vite plugin
in [`vite.config.js`](vite.config.js), which expands `<!-- include:name -->` comments:

| Include | Comes from |
|---|---|
| `head` | generated per page — title, description, canonical, Open Graph, JSON-LD |
| `nav` / `footer` / `backlink` | `partials/*.html` |
| `work-grid` | generated from `src/projects.js` |
| `case-nav` | generated prev/next links, ordered by `src/projects.js` |

Because includes are expanded during `transformIndexHtml`, the published pages are fully
static HTML — nothing in the work grid depends on JavaScript running.

## Adding a case study

1. Add an entry to [`src/projects.js`](src/projects.js).
2. Create `project_N.html` at the repo root, using an existing case study as the shape.

That's it. Build entries are discovered by globbing `*.html` at the root, so a new page
cannot be left out of the production build — which is what previously caused pages to 404
after deploy.

`src/projects.js` is the single source of truth for the work grid, per-page metadata,
prev/next navigation, the guided tour, and `sitemap.xml`.

## Conventions

- **Colour** lives in custom properties at the top of `style.css`. Use the tokens; the
  accent family is indigo/violet and nothing should introduce a second hue.
- **No inline `style=` attributes.** Add a class.
- **Images** need explicit `width`/`height` and real `alt` text. Large source images are
  resized to 1400px and converted to WebP before committing.
- **Motion** is gated on `prefers-reduced-motion` in both `style.css` and `main.js`.
- Mermaid is imported dynamically and only on pages that contain a `.mermaid` element.

## Checks before deploying

```bash
npm run build && npm run preview
```

- `dist/` contains every `*.html` page plus `sitemap.xml`.
- No horizontal scrollbar at 375px, 768px or 1440px.
- Tab from a cold load reaches the skip link; every control shows a focus ring.
- The contact dialog traps focus and closes on Escape.
