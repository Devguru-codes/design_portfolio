import { projects, site } from './src/projects.js';

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const isHome = ['/', '/index.html'].includes(window.location.pathname);

/* ─────────────────────────────────────────────────────────────────────────────
   Scroll reveal
   ───────────────────────────────────────────────────────────────────────────*/

function initReveal() {
  const elements = document.querySelectorAll('.fade-up');

  if (reduceMotion) {
    elements.forEach((el) => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      });
    },
    { threshold: 0.1 }
  );

  elements.forEach((el) => observer.observe(el));
}

/* ─────────────────────────────────────────────────────────────────────────────
   Smooth scrolling — also handles "/#work" links used by the shared nav, which
   point at the current page when you are already on the homepage.
   ───────────────────────────────────────────────────────────────────────────*/

function initSmoothScroll() {
  document.addEventListener('click', (e) => {
    const anchor = e.target.closest('a[href*="#"]');
    if (!anchor) return;

    const url = new URL(anchor.href, window.location.href);
    if (url.pathname !== window.location.pathname || !url.hash || url.hash === '#') return;

    const target = document.querySelector(url.hash);
    if (!target) return;

    e.preventDefault();
    target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
    history.pushState(null, '', url.hash);
  });
}

/* ─────────────────────────────────────────────────────────────────────────────
   Contact dialog — native <dialog> gives us the focus trap and Esc for free.
   ───────────────────────────────────────────────────────────────────────────*/

function initContactDialog() {
  const dialog = document.createElement('dialog');
  dialog.className = 'contact-modal';
  dialog.id = 'contact-dialog';
  /* Padding lives on .modal-inner, not on the <dialog>. A padded dialog reports
     clicks in its own padding band as clicks on the dialog element, which is
     indistinguishable from a backdrop click — so the modal would close when you
     clicked just inside its edge. */
  dialog.innerHTML = `
    <div class="modal-inner">
      <button type="button" class="modal-close" id="modal-close" aria-label="Close contact details">&times;</button>
      <h2>Get in touch</h2>
      <p><span class="label">Email</span><br><a class="value" href="mailto:${site.email}">${site.email}</a></p>
      <p><span class="label">Phone</span><br><a class="value" href="tel:${site.phone}">${site.phone.replace('+91', '')}</a></p>
      <div class="modal-actions">
        <button type="button" class="btn btn-primary" id="copy-email">Copy email</button>
        <a class="btn btn-outline" href="${site.github}" target="_blank" rel="noopener">GitHub</a>
        <a class="btn btn-outline" href="${site.linkedin}" target="_blank" rel="noopener">LinkedIn</a>
      </div>
    </div>`;
  document.body.appendChild(dialog);

  document.addEventListener('click', (e) => {
    if (e.target.closest('#contact-btn')) {
      dialog.showModal();
      return;
    }

    if (e.target.closest('#modal-close')) {
      dialog.close();
      return;
    }

    // Clicking the backdrop closes: the dialog element itself only receives the
    // click when it lands outside the padded content box.
    if (e.target === dialog) {
      dialog.close();
      return;
    }

    const copy = e.target.closest('#copy-email');
    if (copy) {
      navigator.clipboard
        .writeText(site.email)
        .then(() => {
          const original = copy.textContent;
          copy.textContent = 'Copied';
          setTimeout(() => {
            copy.textContent = original;
          }, 2000);
        })
        .catch(() => {
          copy.textContent = site.email;
        });
    }
  });
}

/* ─────────────────────────────────────────────────────────────────────────────
   Case-study furniture: reading progress + generated table of contents
   ───────────────────────────────────────────────────────────────────────────*/

function initReadingProgress() {
  const bar = document.getElementById('progress-bar');
  const article = document.querySelector('.content-block');
  if (!bar || !article) return;

  /* Measured from live rects rather than cached offsets: these pages lazy-load
     large diagrams, so the article's height and position both change after the
     last scroll event. A ResizeObserver catches those shifts. */
  const update = () => {
    const rect = article.getBoundingClientRect();
    const scrollable = rect.height - window.innerHeight;
    const passed = -rect.top;
    const progress = scrollable <= 0 ? 1 : passed / scrollable;
    bar.style.width = `${Math.min(100, Math.max(0, progress * 100))}%`;
  };

  update();
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update, { passive: true });
  new ResizeObserver(update).observe(article);
}

const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');

function initToc() {
  const article = document.querySelector('.content-block');
  if (!article) return;

  const headings = [...article.querySelectorAll('h2')];
  if (headings.length < 3) return;

  const toc = document.createElement('nav');
  toc.className = 'toc';
  toc.setAttribute('aria-label', 'On this page');

  const list = document.createElement('ol');
  headings.forEach((heading, i) => {
    if (!heading.id) heading.id = slugify(heading.textContent) || `section-${i}`;

    const item = document.createElement('li');
    const link = document.createElement('a');
    link.href = `#${heading.id}`;
    link.textContent = heading.textContent;
    item.appendChild(link);
    list.appendChild(item);
  });

  toc.innerHTML = '<p class="toc__label">On this page</p>';
  toc.appendChild(list);
  document.body.appendChild(toc);

  const links = new Map(headings.map((h) => [h.id, toc.querySelector(`a[href="#${h.id}"]`)]));

  /* Highlight the last heading scrolled past, not whichever one happens to be
     inside a narrow band — otherwise the whole of a long section reads as
     "nowhere" in the contents. */
  const spy = () => {
    const line = 120;
    let current = headings[0];
    for (const heading of headings) {
      if (heading.getBoundingClientRect().top <= line) current = heading;
      else break;
    }

    links.forEach((link, id) => {
      if (link) link.setAttribute('aria-current', current.id === id ? 'true' : 'false');
    });
  };

  spy();
  window.addEventListener('scroll', spy, { passive: true });
  window.addEventListener('resize', spy, { passive: true });
}

/* ─────────────────────────────────────────────────────────────────────────────
   Mermaid — only fetched when the page actually has a diagram.
   ───────────────────────────────────────────────────────────────────────────*/

async function initMermaid() {
  const nodes = document.querySelectorAll('.mermaid');
  if (!nodes.length) return;

  const { default: mermaid } = await import(
    'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs'
  );

  mermaid.initialize({ startOnLoad: false, theme: 'dark' });

  // Mermaid replaces the source text with an <svg>, so capture the definition
  // first: it is the only text alternative these diagrams have, and rendering
  // destroys it. Each diagram gets a name plus an expandable source listing.
  const alternatives = [...nodes].map((node) => {
    const source = node.textContent.trim();
    const titleLine = source.match(/^\s*title\s+(.+)$/m);
    const kind = source.split(/\s+/)[0] || 'diagram';
    const name = titleLine ? titleLine[1].trim() : `${kind} diagram`;

    node.setAttribute('role', 'img');
    node.setAttribute('aria-label', name);
    return { node, source, name };
  });

  try {
    await mermaid.run({ querySelector: '.mermaid' });
  } catch (err) {
    console.error('Mermaid failed to render:', err);
  }

  alternatives.forEach(({ node, source, name }) => {
    const details = document.createElement('details');
    details.className = 'diagram-alt';

    const summary = document.createElement('summary');
    summary.textContent = `Text description: ${name}`;

    const pre = document.createElement('pre');
    pre.textContent = source;

    details.append(summary, pre);
    node.insertAdjacentElement('afterend', details);
  });
}

/* ─────────────────────────────────────────────────────────────────────────────
   Guided tour
   ───────────────────────────────────────────────────────────────────────────*/

const TOUR_KEY = 'tour_completed';

function tourSteps() {
  const projectSteps = projects
    .filter((p) => p.tour)
    .map((p) => ({
      selector: `[data-tour="${p.slug}"]`,
      title: p.cardTitle,
      text: p.tour,
      position: 'top',
    }));

  return [
    {
      selector: 'nav',
      title: 'Navigation',
      text: 'Use "Work" to jump to the case studies, "About" for background, and "Contact" for my email and socials.',
      position: 'bottom',
    },
    {
      selector: '.hero',
      title: 'Welcome',
      text: `I'm ${site.name}, a final-year student at IIIT Nagpur working as a product manager. This site collects my product and UX work.`,
      position: 'bottom',
    },
    {
      selector: '#work',
      title: 'Case studies',
      text: 'Each card is a full project — research, personas, wireframes, architecture and metrics. Click any card to read it.',
      position: 'top',
    },
    ...projectSteps,
    {
      selector: '#about',
      title: 'About me',
      text: 'Background on how I work, at the intersection of systems engineering, data and user experience.',
      position: 'top',
    },
    {
      selector: 'footer',
      title: 'Links',
      text: 'Email, phone, GitHub, LinkedIn and my full developer portfolio. You can replay this tour from here any time.',
      position: 'top',
    },
  ];
}

function injectTourStyles() {
  if (document.getElementById('tour-styles')) return;

  const style = document.createElement('style');
  style.id = 'tour-styles';
  style.textContent = `
    .tour-highlight {
      position: fixed; z-index: 10002;
      border: 2px solid var(--accent-1); border-radius: 12px;
      box-shadow: 0 0 0 9999px rgb(0 0 0 / 0.75), 0 0 30px rgb(99 102 241 / 0.5);
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      pointer-events: none;
    }
    .tour-tooltip {
      position: fixed; z-index: 10003;
      background: var(--surface-raised);
      border: 1px solid var(--accent-edge);
      border-radius: 16px; padding: 1.5rem;
      max-width: 380px; width: min(90vw, 380px);
      box-shadow: 0 20px 60px rgb(0 0 0 / 0.5);
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .tour-tooltip h4 {
      color: var(--accent-bright); font-size: 0.8rem;
      text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 0.5rem;
    }
    .tour-tooltip h3 { color: #fff; font-size: 1.2rem; margin-bottom: 0.5rem; }
    .tour-tooltip p { color: var(--text-secondary); font-size: 0.95rem; margin-bottom: 1.25rem; }
    .tour-footer { display: flex; justify-content: space-between; align-items: center; gap: 0.75rem; }
    .tour-progress { color: var(--text-tertiary); font-size: 0.8rem; font-weight: 500; }
    .tour-btns { display: flex; gap: 0.5rem; }
    .tour-btn {
      padding: 0.5rem 1.25rem; border-radius: 100px;
      font-size: 0.85rem; font-weight: 600; font-family: inherit;
      cursor: pointer; border: none; transition: background 0.2s ease, color 0.2s ease;
    }
    .tour-btn-skip { background: transparent; color: var(--text-tertiary); border: 1px solid var(--border-strong); }
    .tour-btn-skip:hover { color: #fff; }
    .tour-btn-next { background: var(--accent-1); color: #fff; }
    .tour-btn-next:hover { background: var(--accent-bright); }
    dialog.tour-dialog {
      border: 1px solid var(--accent-edge); background: var(--surface-raised);
      border-radius: 20px; padding: 2.5rem; text-align: center;
      max-width: 420px; width: min(90vw, 420px); color: var(--text-primary);
    }
    dialog.tour-dialog::backdrop { background: rgb(0 0 0 / 0.8); backdrop-filter: blur(12px); }
    dialog.tour-dialog h2 { color: #fff; font-size: 1.5rem; margin-bottom: 0.75rem; }
    dialog.tour-dialog p { color: var(--text-secondary); margin-bottom: 2rem; }
    .tour-dialog-btns { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }
    .tour-toast {
      position: fixed; bottom: 2rem; left: 50%; transform: translateX(-50%);
      z-index: 10000; background: var(--surface-raised);
      border: 1px solid var(--border-strong); border-radius: 12px;
      padding: 1rem 2rem; color: var(--text-secondary); font-size: 0.95rem;
      transition: opacity 0.5s ease;
    }`;
  document.head.appendChild(style);
}

function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'tour-toast';
  toast.setAttribute('role', 'status');
  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
  }, 2500);
  setTimeout(() => toast.remove(), 3100);
}

function runTour() {
  const steps = tourSteps();
  injectTourStyles();

  const highlight = document.createElement('div');
  highlight.className = 'tour-highlight';

  const tooltip = document.createElement('div');
  tooltip.className = 'tour-tooltip';
  tooltip.setAttribute('role', 'dialog');
  tooltip.setAttribute('aria-live', 'polite');
  tooltip.setAttribute('aria-label', 'Guided tour');

  document.body.append(highlight, tooltip);

  let active = true;
  let frame = null;
  let target = null;
  let config = null;

  function teardown(completed) {
    active = false;
    if (frame) cancelAnimationFrame(frame);
    highlight.remove();
    tooltip.remove();
    document.removeEventListener('keydown', onKeydown);
    localStorage.setItem(TOUR_KEY, 'true');
    if (!completed) showToast('Got it — explore at your own pace.');
  }

  function onKeydown(e) {
    if (e.key === 'Escape') teardown(false);
  }

  function place() {
    if (!active || !target || !config) return;

    const rect = target.getBoundingClientRect();
    const pad = 8;

    highlight.style.top = `${rect.top - pad}px`;
    highlight.style.left = `${rect.left - pad}px`;
    highlight.style.width = `${rect.width + pad * 2}px`;
    highlight.style.height = `${rect.height + pad * 2}px`;

    const tip = tooltip.getBoundingClientRect();
    const margin = 16;
    let top;
    let left;

    if (config.position === 'bottom') {
      top = rect.bottom + margin;
      left = rect.left + rect.width / 2 - tip.width / 2;
    } else if (config.position === 'top') {
      top = rect.top - tip.height - margin;
      left = rect.left + rect.width / 2 - tip.width / 2;
    } else if (config.position === 'right') {
      top = rect.top + rect.height / 2 - tip.height / 2;
      left = rect.right + margin;
    } else {
      top = rect.top + rect.height / 2 - tip.height / 2;
      left = rect.left - tip.width - margin;
    }

    left = Math.max(margin, Math.min(left, window.innerWidth - tip.width - margin));
    if (top < margin) top = rect.bottom + margin;
    if (top + tip.height > window.innerHeight - margin) top = rect.top - tip.height - margin;
    top = Math.max(margin, Math.min(top, window.innerHeight - tip.height - margin));

    tooltip.style.top = `${top}px`;
    tooltip.style.left = `${left}px`;

    frame = requestAnimationFrame(place);
  }

  function goTo(index) {
    if (index >= steps.length) {
      teardown(true);
      showComplete();
      return;
    }

    config = steps[index];
    target = document.querySelector(config.selector);
    if (!target) {
      goTo(index + 1);
      return;
    }

    target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'center' });

    tooltip.innerHTML = `
      <h4>Step ${index + 1} of ${steps.length}</h4>
      <h3>${config.title}</h3>
      <p>${config.text}</p>
      <div class="tour-footer">
        <span class="tour-progress">${index + 1} / ${steps.length}</span>
        <div class="tour-btns">
          <button type="button" class="tour-btn tour-btn-skip">${index === 0 ? 'Skip tour' : 'Skip'}</button>
          <button type="button" class="tour-btn tour-btn-next">${index === steps.length - 1 ? 'Finish' : 'Next'}</button>
        </div>
      </div>`;

    tooltip.querySelector('.tour-btn-next').addEventListener('click', () => goTo(index + 1));
    tooltip.querySelector('.tour-btn-skip').addEventListener('click', () => teardown(false));
    tooltip.querySelector('.tour-btn-next').focus();

    if (!frame) place();
  }

  document.addEventListener('keydown', onKeydown);
  goTo(0);
}

function showComplete() {
  const dialog = document.createElement('dialog');
  dialog.className = 'tour-dialog';
  dialog.innerHTML = `
    <h2>That's the tour</h2>
    <p>You're all set. The case studies are the interesting part.</p>
    <div class="tour-dialog-btns">
      <button type="button" class="btn btn-solid" id="tour-done">Start exploring</button>
    </div>`;
  document.body.appendChild(dialog);
  dialog.showModal();

  const finish = () => {
    dialog.remove();
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
  };

  dialog.querySelector('#tour-done').addEventListener('click', () => {
    dialog.close();
    finish();
  });

  // Escape fires `close` without going through the button, so clean up there too
  // rather than leaving an orphaned <dialog> in the document.
  dialog.addEventListener('close', finish);
}

function offerTour() {
  injectTourStyles();

  const dialog = document.createElement('dialog');
  dialog.className = 'tour-dialog';
  dialog.innerHTML = `
    <h2>Welcome</h2>
    <p>Want a quick guided overview of the site? It takes about a minute.</p>
    <div class="tour-dialog-btns">
      <button type="button" class="btn btn-solid" id="tour-yes">Show me around</button>
      <button type="button" class="btn btn-outline" id="tour-no">No thanks</button>
    </div>`;
  document.body.appendChild(dialog);
  dialog.showModal();

  const dismiss = () => {
    dialog.close();
    dialog.remove();
  };

  dialog.querySelector('#tour-yes').addEventListener('click', () => {
    dismiss();
    runTour();
  });

  dialog.querySelector('#tour-no').addEventListener('click', () => {
    dismiss();
    localStorage.setItem(TOUR_KEY, 'true');
    showToast('Got it — explore at your own pace.');
  });

  // Escape on the offer counts as "no thanks".
  dialog.addEventListener('cancel', () => {
    localStorage.setItem(TOUR_KEY, 'true');
  });
  dialog.addEventListener('close', () => dialog.remove());
}

function initTour() {
  const replay = document.getElementById('replay-tour');
  if (replay) {
    replay.addEventListener('click', () => {
      localStorage.removeItem(TOUR_KEY);
      if (isHome) {
        window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
        offerTour();
      } else {
        window.location.href = '/';
      }
    });
  }

  if (!isHome || reduceMotion) return;
  if (localStorage.getItem(TOUR_KEY)) return;

  setTimeout(offerTour, 1500);
}

/* ─────────────────────────────────────────────────────────────────────────── */

function init() {
  /* Content is hidden until initReveal() runs, so a throw in any one of these
     would leave the page blank from that point on. Isolate each step. */
  const steps = [
    initReveal,
    initSmoothScroll,
    initContactDialog,
    initReadingProgress,
    initToc,
    initMermaid,
    initTour,
  ];

  for (const step of steps) {
    try {
      step();
    } catch (err) {
      console.error(`${step.name} failed:`, err);
    }
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
