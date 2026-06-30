/* Services groups · Trust · CTA band — exposes window.VKWeb.Landing */
(function () {
  const DS = window.VildanKaraKayacanAdvisoryBrandSystem_6a049d;
  const { Reveal, Heading, Disc, Glyph, MistIcon } = window.VKWeb;

  const TONE = {
    "navy":      { bg: "var(--ink-800)", color: "var(--text-on-ink)", sub: "var(--text-on-ink-muted)" },
    "navy-deep": { bg: "var(--ink-900)", color: "var(--text-on-ink)", sub: "var(--text-on-ink-muted)" },
    "gold":      { bg: "var(--accent)",  color: "var(--on-accent)",   sub: "rgba(10,20,33,0.72)" },
  };

  /* ---------------- JOURNEY RAIL (Strategy → Transformation → Operations) ---------------- */
  function Rail({ nodes }) {
    const icons = ["target", "gear", "people"];
    return (
      <div className="vk-srail" style={{ display: "flex", alignItems: "flex-start", margin: "56px auto 0", maxWidth: "880px" }}>
        {nodes.map((n, i) => (
          <React.Fragment key={i}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flex: "0 0 auto", width: "150px" }}>
              <Disc name={icons[i]} size={84} icon={36} />
              <div style={{ fontFamily: "var(--font-serif)", fontSize: "0.95rem", fontWeight: 500, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--text-strong)", marginTop: "18px", textAlign: "center" }}>{n.title}</div>
            </div>
            {i < nodes.length - 1 && (
              <div className="vk-srail-link" style={{ flex: 1, display: "flex", alignItems: "center", gap: "10px", marginTop: "41px" }}>
                <span aria-hidden="true" style={{ flex: 1, height: 0, borderTop: "1.5px dashed var(--accent)", opacity: 0.55 }} />
                <span aria-hidden="true" style={{ width: "6px", height: "6px", borderRadius: "999px", background: "var(--accent)" }} />
                <span aria-hidden="true" style={{ flex: 1, height: 0, borderTop: "1.5px dashed var(--accent)", opacity: 0.55 }} />
                <span style={{ color: "var(--accent)", display: "flex" }}><Glyph name="arrow" size={18} sw={1.6} /></span>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    );
  }

  /* ---------------- SERVICE GROUP COLUMN ---------------- */
  function GroupColumn({ g, icon }) {
    const tone = TONE[g.tone] || TONE.navy;
    return (
      <div style={{ display: "flex", flexDirection: "column", height: "100%", background: "var(--surface-card)", border: "1px solid var(--line)", borderRadius: "var(--r-md)", overflow: "hidden", boxShadow: "var(--shadow-sm)" }}>
        {/* header band */}
        <div style={{ display: "flex", alignItems: "center", gap: "18px", padding: "26px 28px", background: tone.bg }}>
          <Disc name={icon} size={58} icon={26} />
          <div style={{ minWidth: 0 }}>
            <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.5rem", letterSpacing: "0.08em", textTransform: "uppercase", color: tone.color, margin: 0 }}>{g.title}</h3>
            <div style={{ fontSize: "0.95rem", color: tone.sub, marginTop: "4px" }}>{g.sub}</div>
          </div>
        </div>
        {/* service rows */}
        <div style={{ display: "flex", flexDirection: "column", flex: 1, padding: "8px 28px 12px" }}>
          {g.items.map((it, j) => (
            <div key={j} style={{ display: "flex", gap: "18px", padding: "26px 0", borderTop: j === 0 ? "none" : "1px solid var(--line)" }}>
              <MistIcon name={it.icon} size={52} icon={24} />
              <div style={{ minWidth: 0 }}>
                <h4 style={{ fontFamily: "var(--font-serif)", fontSize: "1.18rem", lineHeight: 1.22, letterSpacing: "-0.01em", color: "var(--text-strong)", margin: "2px 0 8px" }}>{it.title}</h4>
                <p style={{ fontSize: "0.95rem", lineHeight: 1.52, color: "var(--text-muted)", margin: 0 }}>{it.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  /* ---------------- TRUST STRIP ---------------- */
  function Trust({ items }) {
    return (
      <Reveal>
        <div className="vk-trust" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0", marginTop: "26px", padding: "30px 8px", border: "1px solid var(--line)", borderRadius: "var(--r-md)", background: "var(--mist-50)" }}>
          {items.map((it, i) => (
            <div key={i} style={{ display: "flex", gap: "16px", padding: "4px 28px", borderLeft: i === 0 ? "none" : "1px solid var(--line)" }}>
              <span style={{ color: "var(--accent-strong)", flexShrink: 0, marginTop: "2px" }}><Glyph name={it.icon} size={28} sw={1.5} /></span>
              <div style={{ minWidth: 0 }}>
                <div style={{ fontFamily: "var(--font-serif)", fontSize: "1.12rem", letterSpacing: "-0.01em", color: "var(--text-strong)", marginBottom: "6px" }}>{it.title}</div>
                <p style={{ fontSize: "0.9rem", lineHeight: 1.45, color: "var(--text-muted)", margin: 0 }}>{it.body}</p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    );
  }

  /* ---------------- CTA BAND ---------------- */
  function CtaBand({ band, onNav }) {
    return (
      <Reveal>
        <div className="vk-ctaband" style={{ display: "flex", alignItems: "center", gap: "28px", flexWrap: "wrap", marginTop: "24px", padding: "32px 40px", borderRadius: "var(--r-md)", background: "linear-gradient(120deg, var(--ink-800) 0%, var(--ink-900) 100%)", border: "1px solid var(--line-on-ink)", boxShadow: "var(--shadow-md)" }}>
          <Disc name="calendar" size={56} icon={26} />
          <div style={{ flex: 1, minWidth: "260px" }}>
            <div style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.3rem, 1rem + 0.9vw, 1.7rem)", lineHeight: 1.2, letterSpacing: "-0.01em", color: "var(--text-on-ink)" }}>{band.title}</div>
            <p style={{ fontSize: "var(--t-body)", color: "var(--text-on-ink-muted)", margin: "8px 0 0" }}>{band.body}</p>
          </div>
          <DS.Button variant="accent" trailingArrow href="#contact" onClick={(e) => { e.preventDefault(); onNav("contact"); }}>{band.cta}</DS.Button>
        </div>
      </Reveal>
    );
  }

  /* ---------------- SECTION WRAPPER ---------------- */
  function Services({ t, onNav }) {
    const L = t.landing;
    const groupIcons = ["target", "gear", "people"];
    return (
      <section id="services" style={{ position: "relative", background: "var(--paper)", padding: "var(--section-y) 0" }}>
        <div className="container" style={{ position: "relative" }}>
          <Reveal>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "20px" }}>
              <span className="eyebrow">{L.eyebrow}</span>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "var(--t-display-m)", lineHeight: 1.08, letterSpacing: "-0.018em", margin: 0, maxWidth: "20ch" }}>
                {L.headline.map((line, i) => (
                  <span key={i} style={{ display: "block", color: i === 1 ? "var(--accent-strong)" : "var(--text-strong)" }}>{line}</span>
                ))}
              </h2>
              <p style={{ fontSize: "var(--t-body-l)", lineHeight: 1.55, color: "var(--text-muted)", margin: 0, maxWidth: "64ch" }}>{L.lede}</p>
            </div>
          </Reveal>
          <div className="vk-groups" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px", marginTop: "56px" }}>
            {L.groups.map((g, i) => (
              <Reveal key={i} delay={i * 90}><GroupColumn g={g} icon={groupIcons[i]} /></Reveal>
            ))}
          </div>
        </div>
      </section>
    );
  }

  window.VKWeb = window.VKWeb || {};
  window.VKWeb.Landing = { Services };
})();
