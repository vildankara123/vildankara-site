/* Shared helpers for the website UI kit. Exposes window.VKWeb. */
(function () {
  const { useRef, useState, useEffect } = React;

  /* Reveal — content is ALWAYS visible. A subtle entrance is layered on
     only as enhancement (no backwards fill), so if the animation engine
     never ticks the element simply stays in its natural, visible state. */
  function Reveal({ children, delay = 0, as = "div", style = {}, className }) {
    const Tag = as;
    return (
      <Tag
        className={className}
        style={{
          animation: `vkRise 620ms var(--ease-out) ${delay}ms 1 normal`,
          ...style,
        }}
      >
        {children}
      </Tag>
    );
  }

  /* Section heading block: eyebrow → serif title → optional lede. */
  function Heading({ eyebrow, title, lede, onInk = false, align = "left", maxWidth = "22ch", ledeWidth = "52ch" }) {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "20px", alignItems: align === "center" ? "center" : "flex-start", textAlign: align }}>
        <span className={"eyebrow" + (onInk ? " eyebrow--on-ink" : "")}>{eyebrow}</span>
        <h2 style={{
          fontFamily: "var(--font-serif)", fontSize: "var(--t-display-m)", lineHeight: "var(--lh-snug)",
          letterSpacing: "var(--ls-display)", margin: 0, maxWidth,
          color: onInk ? "var(--text-on-ink)" : "var(--text-strong)",
        }}>{title}</h2>
        {lede && <p style={{
          fontSize: "var(--t-body-l)", lineHeight: 1.5, margin: 0, maxWidth: ledeWidth,
          color: onInk ? "var(--text-on-ink-muted)" : "var(--text-muted)",
        }}>{lede}</p>}
      </div>
    );
  }

  window.VKWeb = window.VKWeb || {};
  window.VKWeb.Reveal = Reveal;
  window.VKWeb.Heading = Heading;

  /* ---- Shared icon set (24×24 line glyphs) ---- */
  const ICON = {
    target: "M12 3a9 9 0 100 18 9 9 0 000-18zm0 4.2a4.8 4.8 0 100 9.6 4.8 4.8 0 000-9.6zm0 3.1a1.7 1.7 0 100 3.4 1.7 1.7 0 000-3.4z",
    gear: "M12 9a3 3 0 100 6 3 3 0 000-6zm9 3l-2-1 .3-2.2-2-1.2-1.6 1.5-2-.8L12 3l-.7 2.3-2 .8L7.7 4.6l-2 1.2L6 8 4 9l1 3-1 3 2 1-.3 2.2 2 1.2 1.6-1.5 2 .8L12 21l.7-2.3 2-.8 1.6 1.5 2-1.2L18 16l2-1z",
    people: "M9 11a3 3 0 100-6 3 3 0 000 6zm8 0a3 3 0 100-6 3 3 0 000 6zM3 20a6 6 0 0112 0M15 20a6 6 0 016-6",
    shield: "M12 3l7 2.6v5.2c0 4.6-3 7.8-7 9.2-4-1.4-7-4.6-7-9.2V5.6L12 3z",
    assessment: "M8 5H6.5A1.5 1.5 0 005 6.5v12A1.5 1.5 0 006.5 20h11a1.5 1.5 0 001.5-1.5v-12A1.5 1.5 0 0017.5 5H16M9 5a1 1 0 011-1h4a1 1 0 011 1v1H9V5zM8.5 13l2 2 4-4",
    doc: "M14 4H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V9l-5-5zm0 0v5h5M9 13.5h6M9 16.5h4",
    route: "M6 21V4M6 5h11l-2.6 3.5L17 12H6",
    layers: "M12 3l8.5 4.5L12 12 3.5 7.5 12 3zM3.5 12L12 16.5 20.5 12M3.5 16.5L12 21l8.5-4.5",
    pmo: "M9.5 4h5v4h-5zM4 16h5v4H4zM15 16h5v4h-5zM12 8v3M6.5 16v-2.5h11V16",
    opmodel: "M12 3a2.2 2.2 0 100 4.4 2.2 2.2 0 000-4.4zM5 16.4a2.2 2.2 0 100 4.4 2.2 2.2 0 000-4.4zm14 0a2.2 2.2 0 100 4.4 2.2 2.2 0 000-4.4zM12 7.4v3.4m0 0l-5.4 5.6M12 10.8l5.4 5.6",
    headset: "M4 14v-2a8 8 0 0116 0v2M4 14a2 2 0 012-2h1v6H6a2 2 0 01-2-2zm16 0a2 2 0 00-2-2h-1v6h1a2 2 0 002-2zM17 18v.5A2.5 2.5 0 0114.5 21H12",
    barup: "M5 21V4M5 21h16M9 17v-4M13 17V9M17 17v-6M8.5 8.5l3.5-3.5 3 3 4.5-4.5",
    globe: "M12 3a9 9 0 100 18 9 9 0 000-18zm0 0c2.6 2.4 2.6 15.6 0 18m0-18c-2.6 2.4-2.6 15.6 0 18M3.4 9h17.2M3.4 15h17.2",
    trend: "M4 18l5.5-6 3.5 3 7-8m0 0h-4.2m4.2 0v4.2",
    calendar: "M7 3v3M17 3v3M4.5 9h15M6 5h12a1.5 1.5 0 011.5 1.5V19A1.5 1.5 0 0118 20.5H6A1.5 1.5 0 014.5 19V6.5A1.5 1.5 0 016 5zm3.5 9l2 2 4-4",
    arrow: "M5 12h14M13 6l6 6-6 6",
    compass: "M12 3a9 9 0 100 18 9 9 0 000-18zm3.4 5.6l-2 5.4-5.4 2 2-5.4 5.4-2z",
    bulb: "M9.5 18h5M10.5 21h3M12 3a6 6 0 00-3.6 10.8c.5.4.85.98.95 1.62l.1.58h5.1l.1-.58c.1-.64.45-1.22.95-1.62A6 6 0 0012 3z",
    chip: "M9 2v2.5M15 2v2.5M9 19.5V22M15 19.5V22M2 9h2.5M2 15h2.5M19.5 9H22M19.5 15H22M6.5 6.5h11v11h-11zM10 10h4v4h-4z",
    heart: "M12 20.5l-1.35-1.24C5.9 14.94 3 12.3 3 9.02 3 6.4 5.05 4.35 7.65 4.35c1.47 0 2.88.69 3.85 1.78.97-1.09 2.38-1.78 3.85-1.78C21 4.35 21 6.4 21 9.02c0 3.28-2.9 5.92-7.65 10.24L12 20.5z",
    leaf: "M12 21v-8.5M12 12.5C11.5 8 8.3 5 4 5c0 4.4 3.2 7.5 8 7.5zm0 0c.5-4 3.4-6.5 7.5-6.5 0 4-2.9 6.5-7.5 6.5z",
  };

  function Glyph({ name, d, size = 26, sw = 1.4 }) {
    return (
      <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={d || ICON[name]} /></svg>
    );
  }

  /* Dark, gold-ringed disc (hero features, rail nodes, group headers, CTA). */
  function Disc({ name, size = 84, icon = 34, ring = true }) {
    return (
      <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: size + "px", height: size + "px", borderRadius: "999px", flexShrink: 0,
        color: "var(--accent-on-ink)",
        background: "radial-gradient(64% 64% at 40% 32%, rgba(34,49,71,0.95) 0%, rgba(9,18,30,0.95) 100%)",
        border: ring ? "1px solid var(--accent)" : "1px solid var(--line-on-ink)",
        boxShadow: "0 12px 28px -16px rgba(190,150,87,0.5)" }}>
        <Glyph name={name} size={icon} sw={1.3} />
      </span>
    );
  }

  /* Light mist circle with accent icon (service-card rows on paper). */
  function MistIcon({ name, size = 52, icon = 24 }) {
    return (
      <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: size + "px", height: size + "px", borderRadius: "999px", flexShrink: 0,
        color: "var(--accent-strong)", background: "var(--mist-50)", border: "1px solid var(--line)" }}>
        <Glyph name={name} size={icon} sw={1.5} />
      </span>
    );
  }

  window.VKWeb.ICON = ICON;
  window.VKWeb.Glyph = Glyph;
  window.VKWeb.Disc = Disc;
  window.VKWeb.MistIcon = MistIcon;
})();
