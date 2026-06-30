# Website UI Kit — Advisory One-Pager

A high-fidelity, interactive recreation of **Vildan Kara Kayacan's** advisory website, rebuilt on
this design system. It replaces the original navy-and-teal Wix-style site with the *Ink · Gold · Mist*
editorial system and a third-person, advertising voice.

`index.html` boots React + Babel, loads the compiled `_ds_bundle.js`, and mounts a full one-page site.

## Sections (in order)
1. **Nav** — fixed; transparent over the hero, frosts to translucent ink once scrolled. Brand lockup,
   anchor links, EN ⇄ TR toggle, gold CTA.
2. **Hero** — ink, full-height. Eyebrow → 3-line serif headline (italic accent line) → lede → dual CTA →
   credential meta row, with the portrait framed in a gold hairline. Animated scroll cue.
3. **CredBar** — ink band, four `StatBlock`s with hairline dividers.
4. **Services** — paper. Six numbered `ServiceCard`s (3-up grid).
5. **Work** — ink. Editorial list of five selected programmes; index · result · sector/role/client,
   hover row-lift + `↗`.
6. **About** — paper. Portrait + third-person manifesto + a pull-`Quote`.
7. **Credentials** — mist tint. Four columns: certifications, education, languages, reach.
8. **Contact** — paper. Heading + contact details and a working form card (`Field`s + topic select),
   submit shows a thank-you state.
9. **Footer** — ink. Wordmark, tagline, nav, copyright, LinkedIn.

## Interactions
- **EN ⇄ TR** language toggle swaps *all* copy (persisted in `localStorage` as `vk-lang`).
- Smooth-scroll anchor nav with sticky-offset.
- Scroll-reveal (fade + rise) via `IntersectionObserver`, disabled under `prefers-reduced-motion`.
- Fake contact submit → success state.

## Composition
Built almost entirely from system components — `Button`, `ServiceCard`, `StatBlock`, `Quote`, `Field`
(`window.<Namespace>`) — plus two local helpers in `helpers.jsx` (`Reveal`, `Heading`).

## Files
- `index.html` — shell, script load order, responsive CSS.
- `data.js` — all copy, bilingual (`window.SITE`).
- `helpers.jsx` — `Reveal`, `Heading` (`window.VKWeb`).
- `sections-top.jsx` — Nav · Hero · CredBar.
- `sections-mid.jsx` — Services · Work.
- `sections-end.jsx` — About · Credentials · Contact · Footer.
- `app.jsx` — language + scroll state, composition, mount.

## Notes
- Client names (Eureko Sigorta, Turkish Airlines, B/S/H) appear on the public CV; confirm permission
  before publishing named case studies, or switch to the anonymised labels already in `data.js`.
- Photography is the supplied corporate set in `/assets/img/`. Swap for higher-res originals when available.
