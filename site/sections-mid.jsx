/* Services · Work — exposes window.VKWeb.Mid */
(function () {
  const { useState } = React;
  const DS = window.VildanKaraKayacanAdvisoryBrandSystem_6a049d;
  const { Reveal, Heading } = window.VKWeb;

  /* ---------------- SERVICES (image header + big title + bullets) ---------------- */
  function ServiceCard({ it, i, img }) {
    const [hover, setHover] = useState(false);
    return (
      <a href="services.html" className="vk-scard"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          display: "flex", flexDirection: "column", height: "100%",
          background: "var(--surface-card)", borderRadius: "var(--r-md)", overflow: "hidden",
          border: "1px solid", borderColor: hover ? "var(--line-accent)" : "var(--line)",
          boxShadow: hover ? "var(--shadow-md)" : "var(--shadow-sm)",
          transform: hover ? "translateY(-3px)" : "translateY(0)",
          transition: "border-color var(--dur), box-shadow var(--dur), transform var(--dur) var(--ease-out)",
        }}>
        {/* small cool-duotone header image with index */}
        <div style={{ position: "relative", height: "118px", overflow: "hidden" }}>
          <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: `url(${img})`, backgroundSize: "cover", backgroundPosition: "center",
            filter: "grayscale(1) brightness(0.72) contrast(1.06)", transform: hover ? "scale(1.07)" : "scale(1)", transition: "transform 1.1s var(--ease-out)" }} />
          <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(10,20,33,0.34) 0%, rgba(10,20,33,0.30) 50%, rgba(10,20,33,0.66) 100%)" }} />
          <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "radial-gradient(120% 90% at 100% 0%, rgba(190,150,87,0.26) 0%, transparent 58%)", opacity: hover ? 1 : 0.7, transition: "opacity var(--dur)" }} />
          <span style={{ position: "absolute", top: "14px", left: "20px", fontFamily: "var(--font-mono)", fontSize: "12px", letterSpacing: "0.16em", color: "var(--gold-200)" }}>{String(i + 1).padStart(2, "0")}</span>
        </div>
        {/* content */}
        <div style={{ display: "flex", flexDirection: "column", flex: 1, padding: "26px 26px 28px" }}>
          <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "var(--t-head-m)", lineHeight: 1.15, letterSpacing: "-0.015em", color: "var(--text-strong)", margin: "0 0 8px" }}>{it.title}</h3>
          <div style={{ fontFamily: "var(--font-sans)", fontSize: "var(--t-body)", fontWeight: 600, lineHeight: 1.35, color: "var(--accent-strong)", marginBottom: "12px" }}>{it.short}</div>
          {it.desc ? <p style={{ fontSize: "var(--t-body-s)", lineHeight: 1.6, color: "var(--text-muted)", margin: "0 0 20px" }}>{it.desc}</p> : null}
          <ul style={{ display: "flex", flexDirection: "column", gap: "12px", flex: 1 }}>
            {it.bullets.map((b, j) => (
              <li key={j} style={{ display: "flex", gap: "12px", fontSize: "var(--t-body-s)", lineHeight: 1.5, color: "var(--text-body)" }}>
                <span aria-hidden="true" style={{ color: "var(--accent)", flexShrink: 0, marginTop: "1px" }}>—</span>{b}
              </li>
            ))}
          </ul>
          <span aria-hidden="true" style={{ marginTop: "22px", paddingTop: "16px", borderTop: "1px solid var(--line)", fontFamily: "var(--font-sans)", fontSize: "var(--t-body-s)", fontWeight: 600, color: hover ? "var(--accent-strong)" : "var(--text-strong)", transition: "color var(--dur-fast)", display: "inline-flex", alignItems: "center", gap: "8px" }}>
            {it.tags.join(" · ")}
          </span>
        </div>
      </a>
    );
  }

  function HealthBand({ t }) {
    const h = t.services.healthcheck;
    if (!h) return null;
    return (
      <Reveal>
        <div className="vk-health" style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: "44px", alignItems: "center", marginTop: "20px", padding: "40px 44px", borderRadius: "var(--r-md)", background: "linear-gradient(120deg, var(--ink-800) 0%, var(--ink-700) 100%)", border: "1px solid var(--line-on-ink)", boxShadow: "var(--shadow-md)" }}>
        <div>
          <span className="eyebrow eyebrow--on-ink" style={{ marginBottom: "16px" }}>{h.eyebrow}</span>
          <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "var(--t-display-m)", color: "var(--text-on-ink)", margin: "14px 0 14px", letterSpacing: "-0.01em" }}>{h.title}</h3>
          <p style={{ fontSize: "var(--t-body)", lineHeight: 1.6, color: "var(--text-on-ink-muted)", margin: 0, maxWidth: "46ch" }}>{h.body}</p>
        </div>
        <div>
          <ul style={{ display: "flex", flexDirection: "column", gap: "13px", marginBottom: "26px" }}>
            {h.bullets.map((b, i) => (
              <li key={i} style={{ display: "flex", gap: "12px", fontSize: "var(--t-body-s)", lineHeight: 1.4, color: "var(--text-on-ink)" }}>
                <span aria-hidden="true" style={{ color: "var(--accent-on-ink)", flexShrink: 0 }}>—</span>{b}
              </li>
            ))}
          </ul>
          <DS.Button variant="accent" trailingArrow href="#contact">{h.cta}</DS.Button>
        </div>
        </div>
      </Reveal>
    );
  }

  /* ---------------- JOURNEY (end-to-end transformation partnership) ---------------- */
  const JICONS = [
    "M12 2a10 10 0 100 20 10 10 0 000-20zm0 4a6 6 0 100 12 6 6 0 000-12zm0 4a2 2 0 100 4 2 2 0 000-4z",
    "M9 4h6a1 1 0 011 1h1a2 2 0 012 2v12a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h1a1 1 0 011-1zm-.5 9.5l2 2 4-4",
    "M9 11a3 3 0 100-6 3 3 0 000 6zm8 0a3 3 0 100-6 3 3 0 000 6zM3 20a6 6 0 0112 0M15 20a6 6 0 016-6",
    "M12 9a3 3 0 100 6 3 3 0 000-6zm9 3l-2-1 .3-2.2-2-1.2-1.6 1.5-2-.8L12 3l-.7 2.3-2 .8L7.7 4.6l-2 1.2L6 8 4 9l1 3-1 3 2 1-.3 2.2 2 1.2 1.6-1.5 2 .8L12 21l.7-2.3 2-.8 1.6 1.5 2-1.2L18 16l2-1z",
    "M9 11a3 3 0 100-6 3 3 0 000 6zM3 20a6 6 0 0112 0M16 11l2 2 4-4",
    "M4 10h16M5 10l7-5 7 5M6 10v8M10 10v8M14 10v8M18 10v8M3 21h18",
    "M4 19V5m0 14h16M7 16l3-4 3 2 5-6m0 0h-3m3 0v3",
  ];

  function JNode({ d }) {
    return (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={d} /></svg>
    );
  }

  function wavePath(n) {
    const cx = (i) => i * 100 + 50;
    const cy = (i) => (i % 2 === 0 ? 30 : 60);
    let d = `M 0 ${cy(0)} L ${cx(0)} ${cy(0)}`;
    for (let i = 1; i < n; i++) {
      const x0 = cx(i - 1), y0 = cy(i - 1), x1 = cx(i), y1 = cy(i);
      const mx = (x0 + x1) / 2;
      d += ` C ${mx} ${y0} ${mx} ${y1} ${x1} ${y1}`;
    }
    d += ` L ${n * 100} ${cy(n - 1)}`;
    return d;
  }

  function Journey({ t }) {
    const j = t.services.journey;
    if (!j) return null;
    const n = j.steps.length;
    return (
      <section id="services" style={{ position: "relative", overflow: "hidden", background: "var(--ink-900)", padding: "var(--section-y) 0" }}>
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, opacity: 0.5, backgroundImage: "linear-gradient(rgba(236,240,244,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(236,240,244,0.03) 1px, transparent 1px)", backgroundSize: "72px 72px", maskImage: "radial-gradient(95% 80% at 50% 20%, #000, transparent 82%)", WebkitMaskImage: "radial-gradient(95% 80% at 50% 20%, #000, transparent 82%)" }} />
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "radial-gradient(50% 50% at 92% 4%, rgba(190,150,87,0.12) 0%, transparent 58%)" }} />
        <div className="container" style={{ position: "relative" }}>
          <Reveal style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
            <span className="eyebrow eyebrow--on-ink eyebrow--plain" style={{ letterSpacing: "0.28em" }}>{j.eyebrow}</span>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "var(--t-display-m)", lineHeight: 1.12, letterSpacing: "-0.015em", color: "var(--text-on-ink)", margin: 0, maxWidth: "24ch" }}>{j.title}</h2>
            <p style={{ fontSize: "var(--t-body)", lineHeight: 1.62, color: "var(--text-on-ink-muted)", margin: 0, maxWidth: "64ch" }}>{j.lede}</p>
          </Reveal>
          <div className="vk-tl" style={{ marginTop: "60px" }}>
            <div className="vk-tl-line" aria-hidden="true" />
            <div className="vk-tl-row" style={{ gridTemplateColumns: `repeat(${n}, 1fr)` }}>
              {j.steps.map((s, i) => {
                const top = i % 2 === 0;
                const label = (
                  <div className="vk-tl-label">
                    <div className="vk-tl-num">{String(i + 1).padStart(2, "0")}</div>
                    <div className="vk-tl-title">{s.title}</div>
                    <p className="vk-tl-body">{s.body}</p>
                  </div>
                );
                return (
                  <Reveal key={i} delay={i * 60} className={"vk-tl-cell " + (top ? "is-top" : "is-bot")}>
                    <div className="vk-tl-top">{top ? label : null}</div>
                    <div className="vk-tl-node"><span className="vk-tl-dot"><JNode d={JICONS[i % JICONS.length]} /></span></div>
                    <div className="vk-tl-bot">{top ? null : label}</div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    );
  }

  function Services({ t }) {
    const s = t.services;
    const imgs = window.SITE.serviceImages;
    return (
      <section style={{ position: "relative", overflow: "hidden", background: "var(--paper)", padding: "var(--section-y) 0" }}>
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: `url(${imgs[4]})`, backgroundSize: "cover", backgroundPosition: "right center", filter: "grayscale(1) brightness(1.18)", opacity: 0.06, maskImage: "linear-gradient(to left, #000 0%, transparent 58%)", WebkitMaskImage: "linear-gradient(to left, #000 0%, transparent 58%)" }} />
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, opacity: 0.5, backgroundImage: "linear-gradient(rgba(10,20,33,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(10,20,33,0.025) 1px, transparent 1px)", backgroundSize: "64px 64px", maskImage: "radial-gradient(80% 70% at 80% 30%, #000, transparent 75%)", WebkitMaskImage: "radial-gradient(80% 70% at 80% 30%, #000, transparent 75%)" }} />
        <div className="container" style={{ position: "relative" }}>
          <Reveal><Heading eyebrow={s.eyebrow} title={s.title} lede={s.lede} /></Reveal>
          <div className="vk-services-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "18px", margin: "40px 0 16px" }}>
            {s.items.map((it, i) => (
              <Reveal key={it.title} delay={(i % 3) * 80}>
                <ServiceCard it={it} i={i} img={imgs[i % imgs.length]} />
              </Reveal>
            ))}
          </div>
          <HealthBand t={t} />
        </div>
      </section>
    );
  }

  /* ---------------- WORK (2×3 split, simple) ---------------- */
  function WorkItem({ item, index }) {
    const [hover, setHover] = useState(false);
    return (
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          display: "grid", gridTemplateColumns: "auto 1fr", gap: "22px", alignItems: "start",
          padding: "28px 4px", borderTop: "1px solid var(--line-on-ink)",
          transition: "background var(--dur)", cursor: "default",
        }}
      >
        <span style={{ fontFamily: "var(--font-serif)", fontSize: "1.6rem", lineHeight: 1, color: hover ? "var(--accent-on-ink)" : "var(--text-on-ink-faint)", transition: "color var(--dur)", width: "34px" }}>
          {String(index + 1).padStart(2, "0")}
        </span>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontFamily: "var(--font-serif)", fontSize: "1.22rem", lineHeight: 1.3, letterSpacing: "-0.01em", color: "var(--text-on-ink)", margin: 0 }}>{item.result}</p>
          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", fontFamily: "var(--font-mono)", fontSize: "10.5px", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-on-ink-faint)" }}>
            <span style={{ color: "var(--accent-on-ink)" }}>{item.sector}</span>
            <span>{item.role}</span>
            <span>{item.client}</span>
          </div>
        </div>
      </div>
    );
  }

  function Work({ t }) {
    const w = t.work;
    const items = w.items.slice(0, 6);
    const left = items.filter((_, i) => i % 2 === 0);
    const right = items.filter((_, i) => i % 2 === 1);
    return (
      <section id="work" style={{ position: "relative", overflow: "hidden", background: "var(--ink-800)", padding: "var(--section-y) 0" }}>
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=70)", backgroundSize: "cover", backgroundPosition: "center", filter: "grayscale(1) brightness(0.62) contrast(1.08)", opacity: 0.6 }} />
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(10,20,33,0.82) 0%, rgba(10,20,33,0.58) 45%, rgba(10,20,33,0.86) 100%)" }} />
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, opacity: 0.5, backgroundImage: "linear-gradient(rgba(236,240,244,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(236,240,244,0.035) 1px, transparent 1px)", backgroundSize: "72px 72px", maskImage: "radial-gradient(90% 80% at 50% 30%, #000, transparent 80%)", WebkitMaskImage: "radial-gradient(90% 80% at 50% 30%, #000, transparent 80%)" }} />
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "radial-gradient(55% 55% at 100% 0%, rgba(190,150,87,0.14) 0%, transparent 55%)" }} />
        <div className="container" style={{ position: "relative" }}>
          <Reveal><Heading eyebrow={w.eyebrow} title={w.title} onInk maxWidth="20ch" /></Reveal>
          <div className="vk-work-split" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 56px", marginTop: "32px" }}>
            <div style={{ borderBottom: "1px solid var(--line-on-ink)" }}>
              {left.map((item, i) => <Reveal key={i} delay={i * 60}><WorkItem item={item} index={i * 2} /></Reveal>)}
            </div>
            <div style={{ borderBottom: "1px solid var(--line-on-ink)" }}>
              {right.map((item, i) => <Reveal key={i} delay={i * 60}><WorkItem item={item} index={i * 2 + 1} /></Reveal>)}
            </div>
          </div>
        </div>
      </section>
    );
  }

  window.VKWeb = window.VKWeb || {};
  window.VKWeb.Mid = { Services, Journey, Work };
})();
