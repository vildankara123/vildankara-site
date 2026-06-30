/* Home page sections — Perspective · WhereIHelp · WhyClients · AboutTeaser
   Exposes window.VKWeb.HomeSections */
(function () {
  const DS = window.VildanKaraKayacanAdvisoryBrandSystem_6a049d;
  const { Reveal, Disc, Glyph } = window.VKWeb;

  /* ---------------- OUR PERSPECTIVE (horizontal journey rail, on paper) ---------------- */
  function Perspective({ t }) {
    const P = t.home.perspective;
    return (
      <section id="perspective" style={{ position: "relative", background: "var(--paper)", padding: "var(--section-y) 0" }}>
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, opacity: 0.5, backgroundImage: "linear-gradient(rgba(10,20,33,0.022) 1px, transparent 1px), linear-gradient(90deg, rgba(10,20,33,0.022) 1px, transparent 1px)", backgroundSize: "64px 64px", maskImage: "radial-gradient(80% 70% at 50% 24%, #000, transparent 78%)", WebkitMaskImage: "radial-gradient(80% 70% at 50% 24%, #000, transparent 78%)" }} />
        <div className="container" style={{ position: "relative" }}>
          <Reveal style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "18px" }}>
            <span className="eyebrow">{P.eyebrow}</span>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "var(--t-display-m)", lineHeight: 1.1, letterSpacing: "-0.018em", color: "var(--text-strong)", margin: 0, maxWidth: "24ch" }}>
              {P.title.map((l, i) => <span key={i} style={{ display: "block" }}>{l}</span>)}
            </h2>
            <p style={{ fontSize: "var(--t-body-l)", lineHeight: 1.55, color: "var(--text-muted)", margin: 0, maxWidth: "62ch" }}>{P.lede}</p>
          </Reveal>

          <Reveal className="vk-core" delay={80}>
            <div className="vk-core-flow">
              <span className="vk-core-rail" aria-hidden="true" />
              {P.flow.map((s, i) => (
                <div className="vk-core-step" key={i}>
                  <span className="vk-core-disc"><Disc name={s.icon} size={78} icon={33} /></span>
                  <div className="vk-core-name">{s.title}</div>
                  <p className="vk-core-body">{s.body}</p>
                </div>
              ))}
            </div>

            <div className="vk-core-enable">
              <div className="vk-core-enable-label">{P.enable.label}</div>
              <div className="vk-core-enable-items">{P.enable.items.join("   ·   ")}</div>
            </div>

            <div className="vk-core-people">
              <div className="vk-core-people-label"><Glyph name="people" size={22} sw={1.8} />{P.people.label}</div>
              <p className="vk-core-people-body">{P.people.body}</p>
            </div>

            <p className="vk-core-note">
              <span>{P.people.note[0]}</span> <span className="vk-core-note-em">{P.people.note[1]}</span>
            </p>
          </Reveal>
        </div>
      </section>
    );
  }

  /* ---------------- WHERE I HELP (three advisory cards, on ink) ---------------- */
  function WhereIHelp({ t, onNav }) {
    const W = t.home.whereIHelp;
    return (
      <section style={{ position: "relative", overflow: "hidden", background: "var(--ink-900)", padding: "var(--section-y) 0" }}>
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, opacity: 0.5, backgroundImage: "linear-gradient(rgba(236,240,244,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(236,240,244,0.03) 1px, transparent 1px)", backgroundSize: "72px 72px", maskImage: "radial-gradient(90% 80% at 50% 20%, #000, transparent 82%)", WebkitMaskImage: "radial-gradient(90% 80% at 50% 20%, #000, transparent 82%)" }} />
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "radial-gradient(50% 50% at 8% 4%, rgba(190,150,87,0.10) 0%, transparent 58%)" }} />
        <div className="container" style={{ position: "relative" }}>
          <Reveal style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
            <span className="eyebrow eyebrow--on-ink">{W.eyebrow}</span>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "var(--t-display-m)", lineHeight: 1.1, letterSpacing: "-0.018em", color: "var(--text-on-ink)", margin: 0, maxWidth: "22ch" }}>{W.title}</h2>
          </Reveal>
          <div className="vk-help-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px", marginTop: "52px" }}>
            {W.items.map((it, i) => (
              <Reveal key={i} delay={i * 90}>
                <div style={{ display: "flex", flexDirection: "column", height: "100%", background: "linear-gradient(165deg, var(--ink-800) 0%, var(--ink-900) 100%)", border: "1px solid var(--line-on-ink)", borderRadius: "var(--r-md)", padding: "38px 34px 32px", boxShadow: "0 24px 50px -34px rgba(0,0,0,0.7)" }}>
                  <Disc name={it.icon} size={62} icon={28} />
                  <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.62rem", letterSpacing: "-0.01em", color: "var(--text-on-ink)", margin: "26px 0 7px" }}>{it.title}</h3>
                  <div style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", fontWeight: 600, color: "var(--accent-on-ink)", marginBottom: "16px" }}>{it.sub}</div>
                  <p style={{ fontSize: "1rem", lineHeight: 1.56, color: "var(--text-on-ink-muted)", margin: 0, flex: 1 }}>{it.body}</p>
                  <a href="index.html#services" onClick={(e) => { e.preventDefault(); onNav("services"); }}
                    style={{ display: "inline-flex", alignItems: "center", gap: "9px", marginTop: "24px", paddingTop: "18px", borderTop: "1px solid var(--line-on-ink)", fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--accent-on-ink)" }}>
                    {W.cta}<span aria-hidden="true">→</span>
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    );
  }

  /* ---------------- WHY CLIENTS WORK WITH ME (three columns, on ink) ---------------- */
  function WhyClients({ t }) {
    const W = t.home.whyClients;
    return (
      <section style={{ position: "relative", overflow: "hidden", background: "var(--ink-800)", padding: "var(--section-y) 0" }}>
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "radial-gradient(50% 55% at 92% 4%, rgba(190,150,87,0.10) 0%, transparent 56%)" }} />
        <div className="container" style={{ position: "relative" }}>
          <Reveal style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
            <span className="eyebrow eyebrow--on-ink">{W.eyebrow}</span>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "var(--t-display-m)", lineHeight: 1.1, letterSpacing: "-0.018em", color: "var(--text-on-ink)", margin: 0, maxWidth: "22ch" }}>{W.title}</h2>
          </Reveal>
          <div className="vk-why-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0", marginTop: "54px" }}>
            {W.items.map((it, i) => (
              <Reveal key={i} delay={i * 80} style={{ padding: "8px 38px", borderLeft: i === 0 ? "none" : "1px solid var(--line-on-ink)" }}>
                <Disc name={it.icon} size={58} icon={26} />
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.5rem", letterSpacing: "-0.01em", color: "var(--text-on-ink)", margin: "24px 0 7px" }}>{it.title}</h3>
                <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.98rem", fontWeight: 600, color: "var(--accent-on-ink)", marginBottom: "15px" }}>{it.sub}</div>
                <p style={{ fontSize: "0.98rem", lineHeight: 1.6, color: "var(--text-on-ink-muted)", margin: 0 }}>{it.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    );
  }

  /* ---------------- HOW I THINK (three quote cards, on paper) ---------------- */
  function HowIThink({ t }) {
    const H = t.home.howIThink;
    return (
      <section style={{ background: "var(--mist-50)", padding: "var(--section-y) 0", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
        <div className="container">
          <Reveal style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
            <span className="eyebrow">{H.eyebrow}</span>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "var(--t-display-m)", lineHeight: 1.1, letterSpacing: "-0.018em", color: "var(--text-strong)", margin: 0, maxWidth: "26ch" }}>
              {H.title.map((l, i) => <span key={i} style={{ display: "block" }}>{l}</span>)}
            </h2>
          </Reveal>
          <div className="vk-think-grid">
            {H.quotes.map((q, i) => (
              <Reveal key={i} delay={i * 90}>
                <div className="vk-think-card">
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.1rem, 0.9rem + 0.5vw, 1.28rem)", lineHeight: 1.5, letterSpacing: "-0.01em", color: "var(--text-strong)", fontStyle: "italic", margin: "0 0 20px" }}>&ldquo;{q.text}&rdquo;</p>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--t-micro)", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--accent-strong)" }}>{q.attr}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    );
  }

  /* ---------------- ABOUT TEASER (split — image + manifesto, on paper) ---------------- */
  function AboutTeaser({ t }) {
    const A = t.home.aboutTeaser;
    const img = window.SITE.img;
    return (
      <section style={{ background: "var(--paper)", padding: "var(--section-y) 0" }}>
        <div className="container">
          <div className="vk-aboutteaser" style={{ display: "grid", gridTemplateColumns: "0.88fr 1.12fr", gap: "60px", alignItems: "center" }}>
            <Reveal style={{ position: "relative" }}>
              <div style={{ position: "relative", borderRadius: "var(--r-md)", overflow: "hidden", border: "1px solid var(--line)", boxShadow: "var(--shadow-md)", aspectRatio: "4 / 3" }}>
                <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: `url(${img.strategy})`, backgroundSize: "cover", backgroundPosition: "center" }} />
                <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 50%, rgba(8,16,27,0.32) 100%)" }} />
              </div>
              <div aria-hidden="true" style={{ position: "absolute", right: "-12px", top: "-12px", width: "64px", height: "64px", borderRight: "2px solid var(--accent)", borderTop: "2px solid var(--accent)", opacity: 0.75 }} />
            </Reveal>
            <Reveal delay={100}>
              <span className="eyebrow">{A.eyebrow}</span>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "var(--t-display-m)", lineHeight: 1.1, letterSpacing: "-0.018em", color: "var(--text-strong)", margin: "18px 0 0" }}>
                {A.title.map((l, i) => <span key={i} style={{ display: "block" }}>{l}</span>)}
              </h2>
              <p style={{ fontSize: "var(--t-body-l)", lineHeight: 1.62, color: "var(--text-muted)", margin: "22px 0 32px", maxWidth: "52ch" }}>{A.body}</p>
              <DS.Button variant="primary" trailingArrow href="about.html">{A.cta}</DS.Button>
            </Reveal>
          </div>
        </div>
      </section>
    );
  }

  /* ---------------- OUR APPROACH (Assess → Plan → Deliver → Sustain, strong band) ---------------- */
  function Approach({ t }) {
    const A = t.home.approach;
    const icons = ["assessment", "route", "layers", "opmodel"];
    return (
      <section id="approach" style={{ position: "relative", overflow: "hidden", background: "var(--ink-900)", padding: "var(--section-y) 0" }}>
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, opacity: 0.5, backgroundImage: "linear-gradient(rgba(236,240,244,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(236,240,244,0.03) 1px, transparent 1px)", backgroundSize: "72px 72px", maskImage: "radial-gradient(92% 80% at 50% 18%, #000, transparent 82%)", WebkitMaskImage: "radial-gradient(92% 80% at 50% 18%, #000, transparent 82%)" }} />
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "radial-gradient(54% 50% at 50% 0%, rgba(190,150,87,0.12) 0%, transparent 58%)" }} />
        <div className="container" style={{ position: "relative" }}>
          <Reveal style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
            <span className="eyebrow eyebrow--on-ink">{A.eyebrow}</span>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "var(--t-display-m)", lineHeight: 1.1, letterSpacing: "-0.018em", color: "var(--text-on-ink)", margin: 0, maxWidth: "24ch" }}>{A.title.map((l, i) => <span key={i} style={{ display: "block" }}>{l}</span>)}</h2>
            <p style={{ fontSize: "var(--t-body-l)", lineHeight: 1.55, color: "var(--text-on-ink-muted)", margin: 0, maxWidth: "58ch" }}>{A.lede}</p>
          </Reveal>
          <div className="vk-appr">
            <div className="vk-appr-line" aria-hidden="true" />
            <div className="vk-appr-row">
              {A.stages.map((s, i) => (
                <Reveal key={i} delay={i * 70} className="vk-appr-cell">
                  <div className="vk-appr-num">{String(i + 1).padStart(2, "0")}</div>
                  <Disc name={icons[i]} size={84} icon={36} />
                  <div className="vk-appr-step">{s.step}</div>
                  <ul className="vk-appr-list">
                    {s.items.map((it, j) => <li key={j}>{it}</li>)}
                  </ul>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  window.VKWeb = window.VKWeb || {};
  window.VKWeb.HomeSections = { Perspective, WhereIHelp, WhyClients, HowIThink, AboutTeaser, Approach };
})();
