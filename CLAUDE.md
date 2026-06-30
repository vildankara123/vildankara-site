# CLAUDE.md — Vildan Kara Kayacan Advisory Website

This file is read automatically by Claude Code. It tells you how this project works so you
can continue building it on any machine.

## What this is

A high-fidelity, **bilingual (EN ⇄ TR)** one-page advisory website for **Vildan Kara Kayacan**
(SAP & AI transformation executive advisory). It is built with **React 18 + Babel Standalone in
the browser** — there is **no build step and no node_modules**. Every `.jsx` file is transpiled
live in the page via `<script type="text/babel">`.

The visual system is *Ink · Gold · Mist* — a dark navy (`--ink`), gold accent (`--accent`, `#BE9657`),
on warm paper. Serif display type + mono eyebrows + sans body.

## How to run it

No install. Just serve the `site/` folder over HTTP and open `index.html`:

```bash
cd site
python3 -m http.server 8000
# open http://localhost:8000/index.html
```

(Open over HTTP, not `file://` — the `.jsx` files are fetched, which `file://` blocks.)

Pages: `index.html` (home), `about.html`, `projects.html`, `project.html`, `insights.html`, `article.html`.

## Architecture

`index.html` loads, in order:
1. React + ReactDOM + Babel (CDN, pinned with integrity hashes — keep them).
2. `_ds_bundle.js` — the **compiled design-system component library**, exposed on a global
   namespace (e.g. `window.<Namespace>`). Buttons, cards, fields, etc. live here.
3. `data.js` — **all site copy, bilingual**, on `window.SITE`. EN and TR mirror each other.
4. Leaflet (for the world map on the home page).
5. The `.jsx` files (helpers, chrome, sections, app) as Babel scripts.

### File map (`site/`)
- `index.html` — home shell + script load order + responsive CSS links.
- `styles.css` + `site.css` — global tokens + page CSS. `tokens/*.css` holds the raw design tokens.
- `data.js` — `window.SITE`, every string in EN + TR. **Edit copy here, in both languages.**
- `helpers.jsx` — `Reveal` (scroll-reveal), `Heading`, shared `Glyph`/`Disc` icon helpers → `window.VKWeb`.
- `chrome.jsx` — nav + footer chrome.
- `sections-top.jsx` — Nav · Hero · CredBar · the **Approach band** (Assess → Plan → Deliver → Sustain timeline).
- `sections-mid.jsx` — Services · Work.
- `sections-landing.jsx` — landing-specific blocks (journey rail).
- `sections-home.jsx` — home sections incl. **Perspective** ("everything moves together" connected flow + AI Enablement + People & Adoption gold band).
- `sections-approach.jsx`, `sections-extra.jsx`, `sections-end.jsx` — remaining home sections, About/Credentials/Contact/Footer.
- `app-home.jsx` — language + scroll state, composition, React mount. Other `app-*.jsx` + `page-*.jsx` drive the inner pages.

## Conventions — IMPORTANT

- **No `const styles = {}` at module scope.** Each Babel script shares global scope, so name style
  objects uniquely (e.g. `const heroStyles = {}`) or use inline styles. Name collisions break the page.
- **Share components across files via `window`** — `Object.assign(window.VKWeb, { ... })` at the end of a file.
- **Bilingual:** every user-facing string lives in `data.js` under both `en` and `tr`. When you add or
  change copy, update **both**. The language toggle persists in `localStorage` as `vk-lang`.
- **Colors & type:** use the CSS custom properties / tokens already defined (`--ink`, `--accent`,
  `--paper`, `--font-serif`, etc.). Don't invent new hex values.
- **Canonical HTML / JSX:** close every element, double-quote attributes.
- Keep the pinned React/Babel CDN URLs **with their `integrity` hashes**.

## The design system itself

The components in `_ds_bundle.js` are **compiled output** from a separate design-system project
(the root of the original workspace: `tokens/`, `components/`, `foundations/`, `styles.css`). If you
only need to evolve the website, edit the files in `site/`. To change the component library itself,
you need that source project — `_ds_bundle.js` is generated, **do not hand-edit it**.

## Recently worked on
- Approach band redesigned as a connected gold-node timeline (`sections-top.jsx` + `site.css` `.vk-flow*`).
- Perspective section: title back to "Transformation succeeds when everything moves together", four-step
  flow joined by a continuous gold rail through gold-ringed icon discs, dark **AI Enablement Layer** band,
  solid-gold **People & Adoption** band, and the closing line "Transformation changes systems. *People
  change organisations.*" (`sections-home.jsx` + `site.css` `.vk-core*`).
