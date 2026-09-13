import { readdirSync, readFileSync } from 'fs';
import { resolve, dirname, basename } from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import { projects, site, byFile } from './src/projects.js';

const root = dirname(fileURLToPath(import.meta.url));

/* Every .html file at the project root is a page. Discovering them instead of
   listing them by hand is what stops a new case study from 404ing in production
   because someone forgot to add it to rollupOptions.input. */
const pages = readdirSync(root).filter((f) => f.endsWith('.html'));
const input = Object.fromEntries(pages.map((f) => [basename(f, '.html'), resolve(root, f)]));

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/* ── Generated fragments ─────────────────────────────────────────────────── */

function head(file) {
  const project = byFile(file);
  const isHome = file === 'index.html';

  const isError = file === '404.html';

  const title = isHome
    ? `${site.name} — ${site.role}`
    : isError
      ? `Page not found — ${site.name}`
      : `${project ? project.title : basename(file, '.html')} — Case Study`;
  const description = isHome || isError || !project ? site.description : project.description;
  const url = isHome ? `${site.url}/` : `${site.url}${project ? project.href : '/' + file}`;
  /* Social crawlers are unreliable with WebP and will not render SVG at all, so
     og:image always points at a purpose-built JPEG card, never at the thumbnail. */
  const image = `${site.url}${project && project.og ? project.og : '/og.png'}`;

  const jsonLd = isHome
    ? {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: site.name,
        url: site.url,
        jobTitle: site.role,
        email: `mailto:${site.email}`,
        sameAs: [site.github, site.linkedin],
      }
    : {
        '@context': 'https://schema.org',
        '@type': 'CreativeWork',
        name: project ? project.title : '',
        description,
        url,
        author: { '@type': 'Person', name: site.name, url: site.url },
      };

  return `<meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${esc(title)}</title>
    <meta name="description" content="${esc(description)}" />
    ${isError ? '<meta name="robots" content="noindex" />' : `<link rel="canonical" href="${esc(url)}" />`}
    <meta name="author" content="${esc(site.name)}" />
    <meta name="theme-color" content="#000000" />

    <meta property="og:type" content="${isHome ? 'website' : 'article'}" />
    <meta property="og:site_name" content="${esc(site.name)}" />
    <meta property="og:title" content="${esc(title)}" />
    <meta property="og:description" content="${esc(description)}" />
    <meta property="og:url" content="${esc(url)}" />
    <meta property="og:image" content="${esc(image)}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${esc(title)}" />
    <meta name="twitter:description" content="${esc(description)}" />
    <meta name="twitter:image" content="${esc(image)}" />

    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="/style.css" />
    <noscript><style>.fade-up { opacity: 1 !important; transform: none !important; }</style></noscript>
    <script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`;
}

function workGrid() {
  return projects
    .map((p, i) => {
      /* Projects with a real screenshot use it and describe it. The rest get
         abstract cover art, which is decorative — the card's own heading and
         blurb already carry the meaning, so an alt text here would just be
         noise repeated to a screen reader. */
      const alt = p.thumbDecorative ? '' : esc(p.thumbAlt || '');
      const media = p.thumb
        ? `<div class="card-media"><img src="${p.thumb}" alt="${alt}" width="1600" height="900" loading="lazy" decoding="async" /></div>`
        : `<div class="card-media card-media--glyph cover-${i % 4}" aria-hidden="true"><span>${esc(p.cardTitle.charAt(0))}</span></div>`;

      return `<article class="card fade-up${p.featured ? ' card--featured' : ''}" data-tour="${p.slug}">
            ${media}
            <div class="card-body">
              <span class="card-tag">${esc(p.tag)}</span>
              <h3><a class="card-link" href="${p.href}">${esc(p.cardTitle)}</a></h3>
              <p>${esc(p.blurb)}</p>
              <span class="card-cta" aria-hidden="true">Read case study &rarr;</span>
            </div>
          </article>`;
    })
    .join('\n          ');
}

function caseNav(file) {
  const i = projects.findIndex((p) => p.file === file);
  if (i === -1) return '';
  const prev = projects[(i - 1 + projects.length) % projects.length];
  const next = projects[(i + 1) % projects.length];
  if (prev === next) return '';

  return `<nav class="case-nav" aria-label="More case studies">
        <a class="case-nav__item case-nav__item--prev" href="${prev.href}">
          <span class="case-nav__dir">&larr; Previous</span>
          <span class="case-nav__title">${esc(prev.cardTitle)}</span>
        </a>
        <a class="case-nav__item case-nav__item--next" href="${next.href}">
          <span class="case-nav__dir">Next &rarr;</span>
          <span class="case-nav__title">${esc(next.cardTitle)}</span>
        </a>
      </nav>`;
}

/* ── Plugin ──────────────────────────────────────────────────────────────── */

function htmlPartials() {
  const partial = (name) => readFileSync(resolve(root, 'partials', `${name}.html`), 'utf8').trim();

  return {
    name: 'html-partials',
    transformIndexHtml: {
      order: 'pre',
      handler(html, ctx) {
        const file = basename(ctx.path.split('?')[0]) || 'index.html';

        return html.replace(/[ \t]*<!--\s*include:([a-z-]+)\s*-->/g, (_, name) => {
          if (name === 'head') return head(file);
          if (name === 'work-grid') return workGrid();
          if (name === 'case-nav') return caseNav(file);
          return partial(name);
        });
      },
    },
  };
}

function sitemap() {
  return {
    name: 'sitemap',
    apply: 'build',
    generateBundle() {
      const today = new Date().toISOString().slice(0, 10);
      const urls = [`${site.url}/`, ...projects.map((p) => `${site.url}${p.href}`)];

      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source:
          `<?xml version="1.0" encoding="UTF-8"?>\n` +
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
          urls
            .map((u) => `  <url><loc>${u}</loc><lastmod>${today}</lastmod></url>`)
            .join('\n') +
          `\n</urlset>\n`,
      });
    },
  };
}

export default defineConfig({
  plugins: [htmlPartials(), sitemap()],
  build: {
    rollupOptions: { input },
  },
});
