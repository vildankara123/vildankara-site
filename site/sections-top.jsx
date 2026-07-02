/* SloganHero · Pillars · CredBar — exposes window.VKWeb.Top */
(function () {
  const DS = window.VildanKaraKayacanAdvisoryBrandSystem_6a049d;
  const { Reveal, Disc, Glyph } = window.VKWeb;

  /* ---------------- HERO PAGE (Strategy · Transform · Operate + AI rail) ---------------- */
  function SloganHero({ t, img, onNav }) {
    const H = t.landing.hero1;
    return (
      <header id="top" style={{ position: "relative", background: "var(--bg-ink)", overflow: "hidden" }}>
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: `url(${img.skyline})`, backgroundSize: "cover", backgroundPosition: "center center" }} />
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "linear-gradient(100deg, rgba(8,16,27,0.95) 0%, rgba(9,18,30,0.82) 36%, rgba(10,20,33,0.5) 62%, rgba(10,20,33,0.32) 100%)" }} />
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(8,16,27,0.5) 0%, transparent 20%, transparent 64%, rgba(8,16,27,0.72) 92%, rgba(8,16,27,0.92) 100%)" }} />

        <div className="container" style={{ position: "relative", paddingTop: "120px", paddingBottom: "6px" }}>
          <div className="vk-hero-grid" style={{ maxWidth: "820px" }}>
            {/* Left — eyebrow → headline → rule → subhead → lede → CTAs */}
            <div style={{ minWidth: 0 }}>
              <Reveal>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "14px", fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.26em", textTransform: "uppercase", color: "var(--accent-on-ink)" }}>
                  <span aria-hidden="true" style={{ width: "30px", height: "1px", background: "var(--accent)" }} />
                  {H.eyebrow}
                </span>
              </Reveal>
              <Reveal delay={60}>
                <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2.1rem, 1.1rem + 3.3vw, 3.7rem)", lineHeight: 1.04, letterSpacing: "-0.02em", textTransform: "uppercase", margin: "24px 0 0" }}>
                  {H.headline.map((line, i) => (
                    <span key={i} style={{ display: "block", color: i === 1 ? "var(--accent-on-ink)" : "var(--text-on-ink)" }}>{line}</span>
                  ))}
                </h1>
              </Reveal>
              <Reveal delay={110}>
                <div aria-hidden="true" style={{ width: "62px", height: "2px", background: "var(--accent)", margin: "30px 0 0" }} />
              </Reveal>
              {H.subhead ? (
                <Reveal delay={140}>
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.45rem, 1rem + 1.1vw, 2rem)", lineHeight: 1.16, letterSpacing: "-0.01em", color: "var(--text-on-ink)", margin: "22px 0 0", maxWidth: "19ch" }}>{H.subhead}</p>
                </Reveal>
              ) : null}
              <Reveal delay={180}>
                <p style={{ fontSize: "var(--t-body-l)", lineHeight: 1.62, color: "var(--text-on-ink-muted)", maxWidth: "44rem", margin: "20px 0 0", whiteSpace: "pre-line" }}>{H.lede}</p>
              </Reveal>
              <Reveal delay={230}>
                <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", marginTop: "38px" }}>
                  <DS.Button variant="accent" trailingArrow href="#contact" onClick={(e) => { e.preventDefault(); onNav("contact"); }}>{H.ctaPrimary}</DS.Button>
                  <a href="#services" onClick={(e) => { e.preventDefault(); onNav("services"); }}
                    style={{ fontFamily: "var(--font-sans)", fontSize: "15px", fontWeight: 500, color: "var(--text-on-ink)", background: "transparent", border: "1px solid rgba(236,240,244,0.34)", borderRadius: "var(--r-sm)", padding: "13px 24px", display: "inline-flex", alignItems: "center", gap: "10px", transition: "border-color var(--dur-fast), background var(--dur-fast)" }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--accent-on-ink)"; e.currentTarget.style.background = "rgba(236,240,244,0.05)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(236,240,244,0.34)"; e.currentTarget.style.background = "transparent"; }}>
                    {H.ctaSecondary}
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </header>
    );
  }

  /* ---------------- PILLARS (overview cards + tagline) ---------------- */
  function Pillars({ t }) {
    const H = t.landing.hero1;
    const icons = ["target", "gear", "people"];
    const tagParts = H.tagline.split(/(?<=\.)\s+/);
    return (
      <section id="overview" style={{ position: "relative", background: "var(--bg-ink)", padding: "0 0 var(--section-y)" }}>
        <div className="container" style={{ position: "relative" }}>
          <div className="vk-pillars" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
            {H.pillars.map((p, i) => (
              <Reveal key={i} delay={i * 90}>
                <div style={{ display: "flex", flexDirection: "column", height: "100%", background: "linear-gradient(165deg, var(--ink-800) 0%, var(--ink-900) 100%)", border: "1px solid var(--line-on-ink)", borderRadius: "var(--r-md)", padding: "40px 36px 40px", boxShadow: "0 24px 50px -34px rgba(0,0,0,0.7)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "8px" }}>
                    <Disc name={icons[i]} size={64} icon={28} />
                    <div>
                      <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.85rem", letterSpacing: "-0.01em", color: "var(--accent-on-ink)", margin: 0 }}>{p.title}</h3>
                      <span aria-hidden="true" style={{ display: "block", width: "46px", height: "2px", background: "var(--accent)", marginTop: "12px" }} />
                    </div>
                  </div>
                  <ul style={{ display: "flex", flexDirection: "column", gap: "16px", margin: "26px 0 0" }}>
                    {p.bullets.map((b, j) => (
                      <li key={j} style={{ display: "flex", gap: "14px", fontSize: "1.0625rem", lineHeight: 1.5, color: "var(--text-on-ink-muted)" }}>
                        <span aria-hidden="true" style={{ flexShrink: 0, marginTop: "9px", width: "5px", height: "5px", borderRadius: "999px", background: "var(--accent-on-ink)" }} />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "18px", marginTop: "24px", padding: "26px 32px", border: "1px solid var(--line-on-ink)", borderRadius: "var(--r-md)", background: "rgba(255,255,255,0.015)" }}>
              <Disc name="shield" size={44} icon={22} />
              <span style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.15rem, 0.9rem + 0.7vw, 1.5rem)", letterSpacing: "-0.01em", textAlign: "center" }}>
                {tagParts.map((s, i) => (
                  <span key={i} style={{ color: i === 0 ? "var(--accent-on-ink)" : "var(--text-on-ink)" }}>{s}{i < tagParts.length - 1 ? " " : ""}</span>
                ))}
              </span>
            </div>
          </Reveal>
        </div>
      </section>
    );
  }

  /* ---------------- CRED BAR (kept for reuse) ---------------- */
  function CredBar({ t }) {
    return (
      <section style={{ background: "var(--ink-800)", borderTop: "1px solid var(--line-on-ink)" }}>
        <div className="container vk-credbar" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0" }}>
          {t.stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 70} style={{ padding: "32px 0", paddingLeft: i === 0 ? 0 : "40px", borderLeft: i === 0 ? "none" : "1px solid var(--line-on-ink)" }}>
              <DS.StatBlock figure={s.figure} label={s.label} onInk />
            </Reveal>
          ))}
        </div>
      </section>
    );
  }

  window.VKWeb = window.VKWeb || {};
  window.VKWeb.Top = { SloganHero, Pillars, CredBar };
})();
