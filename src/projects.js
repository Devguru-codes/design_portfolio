// Single source of truth for every case study on the site.
//
// Drives: the work grid on the homepage, per-page <head> metadata, prev/next
// links at the foot of each case study, the guided tour, and sitemap.xml.
// Adding a project means adding one entry here and one <name>.html file —
// nothing else needs touching.

export const site = {
  name: 'Devguru Tiwari',
  url: 'https://design-portfolio-three-tan.vercel.app',
  role: 'Product Manager',
  tagline: 'Product Manager who ships. Research, prototype, build, measure.',
  description:
    'Case studies by Devguru Tiwari — product and UX work across institutional memory, ' +
    'AI voice systems, fintech, e-commerce checkout and IoT. Research through to shipped systems.',
  email: 'devguruatwork@gmail.com',
  phone: '+919354926131',
  github: 'https://github.com/Devguru-codes',
  linkedin: 'https://www.linkedin.com/in/devguru-tiwari',
  fullPortfolio: 'https://my-portfolio-website-silk-one.vercel.app/',
};

export const projects = [
  {
    slug: 'callosum',
    href: '/project_6.html',
    file: 'project_6.html',
    tag: 'AI / Institutional Memory',
    title: 'Callosum — Verified Institutional Memory',
    cardTitle: 'Verified Institutional Memory',
    blurb:
      'An AI system that answers questions about an organisation’s decisions and cannot ' +
      'fabricate the answer. Every fact carries a verbatim quote located character-for-character ' +
      'in a source document — if the quote is not found, the fact never enters the system.',
    description:
      'Callosum case study — taking a board-governance product from market research and a ' +
      'clickable prototype through to a shipped knowledge-graph system with a measured evaluation.',
    thumb: '/callosum/dashboard.webp',
    og: '/og/callosum.jpg',
    thumbAlt: 'The Callosum board dashboard, showing daily brief, board readiness and graph health',
    featured: true,
    year: '2026',
    role: 'Product & UX lead — co-built',
    stack: 'Postgres 16 + pgvector · Neo4j 5 · FastAPI · Next.js 16',
    opportunity: 'Disruptive',
    tour:
      'My flagship. I took a board-governance product from market research and a clickable ' +
      'prototype through to a shipped system with a measured evaluation — the full arc, ' +
      'in one case study.',
    links: [
      { label: 'Research & PRD', href: 'https://github.com/Devguru-codes/meridian_pre_intern_work' },
      {
        label: 'Live prototype',
        href: 'https://devguru-codes.github.io/meridian_pre_intern_work/Meridian_prototype/Meridian%20Dashboard.dc.html',
      },
      { label: 'Source', href: 'https://github.com/Cloverag/callosum' },
    ],
  },
  {
    slug: 'voice-call-centre',
    href: '/project_1.html',
    file: 'project_1.html',
    tag: 'AI / Voice UX',
    title: 'AI Voice Call Centre',
    cardTitle: 'AI Voice Call Centre',
    blurb:
      'An open-source, multi-agent voice platform with real-time STT, LLM reasoning, and TTS ' +
      'that replaces traditional call centre workflows.',
    description:
      'Case study — designing and building a multi-agent AI voice platform with real-time ' +
      'speech recognition, LLM reasoning and neural text-to-speech.',
    thumb: '/covers/voice.svg',
    thumbDecorative: true,
    og: '/og/voice.jpg',
    featured: false,
    year: '2026',
    role: 'Product & design',
    stack: 'Faster Whisper · Groq Llama-3 · Edge TTS · WebSockets',
    opportunity: 'Disruptive',
    tour:
      'A multi-agent AI voice platform that replaces traditional call centres using real-time ' +
      'speech recognition, LLM reasoning, and neural text-to-speech.',
    links: [],
  },
  {
    slug: 'meeting-minutes',
    href: '/project_2.html',
    file: 'project_2.html',
    tag: 'AI / Productivity',
    title: 'Meeting Minutes AI',
    cardTitle: 'Meeting Minutes AI',
    blurb:
      'An end-to-end pipeline that joins Google Meet, records audio, transcribes with speaker ' +
      'diarization, and generates structured meeting notes.',
    description:
      'Case study — an end-to-end pipeline that joins meetings, transcribes with speaker ' +
      'diarization and generates structured notes automatically.',
    thumb: '/covers/minutes.svg',
    thumbDecorative: true,
    og: '/og/minutes.jpg',
    featured: false,
    year: '2026',
    role: 'Product & design',
    stack: 'Speaker diarization · LLM summarisation · Automation',
    opportunity: 'Adjacent',
    tour:
      'An end-to-end AI pipeline that joins Google Meet, records audio, transcribes with speaker ' +
      'identification, and generates structured meeting notes automatically.',
    links: [],
  },
  {
    slug: 'money-mentor',
    href: '/project_3.html',
    file: 'project_3.html',
    tag: 'Fintech / AI',
    title: 'AI Money Mentor (DhanSarthi)',
    cardTitle: 'AI Money Mentor',
    blurb:
      'Designing DhanSarthi, an AI-powered personal finance assistant that brings affordable, ' +
      'on-demand advice to everyday users.',
    description:
      'Case study — designing DhanSarthi, a multi-agent AI personal finance assistant for ' +
      'the Indian mass market.',
    thumb: '/covers/money.svg',
    thumbDecorative: true,
    og: '/og/money.jpg',
    featured: false,
    year: '2026',
    role: 'Product & UX research',
    stack: 'Multi-agent orchestration · Conversational UI',
    opportunity: 'Disruptive',
    tour: null,
    links: [],
  },
  {
    slug: 'checkout-friction',
    href: '/project_4.html',
    file: 'project_4.html',
    tag: 'E-Commerce UX',
    title: 'Reducing Checkout Friction',
    cardTitle: 'Reducing Checkout Friction',
    blurb:
      'An overhaul of Snapdeal’s mobile checkout to cut cart abandonment and boost ' +
      'conversions in the Indian e-commerce market.',
    description:
      'Case study — overhauling Snapdeal’s mobile checkout to cut cart abandonment in ' +
      'India’s value-driven e-commerce market.',
    thumb: '/covers/checkout.svg',
    thumbDecorative: true,
    og: '/og/checkout.jpg',
    featured: false,
    year: '2026',
    role: 'UX research & design',
    stack: 'Heuristic audit · Journey mapping · Conversion design',
    opportunity: 'Linear',
    tour: null,
    links: [],
  },
  {
    slug: 'smart-home',
    href: '/project_5.html',
    file: 'project_5.html',
    tag: 'IoT UX',
    title: 'Unified Smart Home Dashboard',
    cardTitle: 'Smart Home Dashboard',
    blurb:
      'A unified, widget-based mobile interface designed to simplify everyday smart device ' +
      'management and routines.',
    description:
      'Case study — a unified, widget-based smart home dashboard that collapses multi-app ' +
      'routines into a single tap.',
    thumb: '/covers/smarthome.webp',
    og: '/og/smarthome.jpg',
    thumbAlt: 'High-fidelity concept for the unified smart home dashboard',
    featured: false,
    year: '2026',
    role: 'Product & UX design',
    stack: 'IoT · Widget system · Scene automation',
    opportunity: 'Adjacent',
    tour: null,
    links: [],
  },
];

export const bySlug = (slug) => projects.find((p) => p.slug === slug);
export const byFile = (file) => projects.find((p) => p.file === file);
