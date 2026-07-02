/* About page sections — exposes window.VKWeb.AboutPage */
(function () {
  const DS = window.VildanKaraKayacanAdvisoryBrandSystem_6a049d;
  const { Reveal, Heading, Glyph } = window.VKWeb;

  /* Render **bold** segments inside a plain string as <strong>. */
  function rich(s) {
    return s.split("**").map((seg, i) => i % 2
      ? <strong key={i} style={{ color: "var(--text-on-ink)", fontWeight: 600 }}>{seg}</strong>
      : seg);
  }

  /* ---------------- ABOUT HERO ---------------- */
  function AboutHero({ t, img }) {
    const a = t.aboutPage;
    return (
      <header style={{ position: "relative", background: "var(--bg-ink)", overflow: "hidden" }}>
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "url(https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&w=1600&q=70)", backgroundSize: "cover", backgroundPosition: "center", filter: "grayscale(1) brightness(0.6) contrast(1.08)", opacity: 0.42 }} />
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "linear-gradient(120deg, rgba(10,20,33,0.92) 0%, rgba(10,20,33,0.7) 55%, rgba(26,43,64,0.5) 100%)" }} />
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "radial-gradient(70% 70% at 88% 16%, rgba(190,150,87,0.16) 0%, transparent 56%)" }} />
        <div className="container vk-abouthero" style={{ position: "relative", display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "56px", alignItems: "center", paddingTop: "150px", paddingBottom: "var(--section-y)" }}>
          <div style={{ minWidth: 0 }}>
            <Reveal><span className="eyebrow eyebrow--on-ink">{a.eyebrow}</span></Reveal>
            <Reveal delay={60}>
              <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2.6rem, 1.4rem + 3.6vw, 4.2rem)", lineHeight: 1.06, letterSpacing: "-0.022em", color: "var(--text-on-ink)", margin: "22px 0 0" }}>{a.name}</h1>
            </Reveal>
            <Reveal delay={110}>
              {a.role ? <div style={{ fontFamily: "var(--font-sans)", fontSize: "var(--t-body-l)", fontWeight: 500, color: "var(--accent-on-ink)", marginTop: "16px" }}>{a.role}</div> : null}
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "var(--t-micro)", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-on-ink-faint)", marginTop: a.role ? "10px" : "16px" }}>{a.tags}</div>
            </Reveal>
            <Reveal delay={160}>
              <p style={{ fontSize: "var(--t-body-l)", lineHeight: 1.6, color: "var(--text-on-ink-muted)", maxWidth: "40ch", margin: "26px 0 0" }}>{a.lede}</p>
            </Reveal>
            <Reveal delay={210}>
              <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", marginTop: "34px" }}>
                <DS.Button variant="accent" trailingArrow href={a.cvHref}>{a.cvLabel}</DS.Button>
                <a href="index.html#contact" style={{ fontFamily: "var(--font-sans)", fontSize: "15px", fontWeight: 500, color: "var(--text-on-ink)", border: "1px solid rgba(236,240,244,0.32)", borderRadius: "var(--r-sm)", padding: "13px 24px", display: "inline-flex", alignItems: "center", transition: "border-color var(--dur-fast)" }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = "var(--accent-on-ink)"}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = "rgba(236,240,244,0.32)"}>{t.contact.title}</a>
              </div>
            </Reveal>
          </div>
          <Reveal delay={120} className="vk-abouthero-photo" style={{ justifySelf: "end" }}>
            <div style={{ position: "relative", width: "min(360px, 34vw)", aspectRatio: "4/5", borderRadius: "var(--r-md)", overflow: "hidden", border: "1px solid var(--line-accent)", boxShadow: "var(--shadow-lg)" }}>
              <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: `url(${window.SITE.aux.aboutHero})`, backgroundSize: "cover", backgroundPosition: "center", filter: "grayscale(1) brightness(0.72) contrast(1.06)" }} />
              <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "radial-gradient(120% 90% at 100% 0%, rgba(190,150,87,0.22) 0%, transparent 60%)" }} />
              <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(10,20,33,0.10) 40%, rgba(10,20,33,0.58) 100%)" }} />
            </div>
          </Reveal>
        </div>
      </header>
    );
  }

  /* ---------------- BIO ---------------- */
  function Bio({ t, img }) {
    const a = t.aboutPage;
    return (
      <section style={{ background: "var(--paper)", padding: "var(--section-y) 0" }}>
        <div className="container vk-bio-grid" style={{ display: "grid", gridTemplateColumns: "0.8fr 1.2fr", gap: "64px", alignItems: "start" }}>
          <Reveal className="vk-bio-photo">
            <figure style={{ margin: 0 }}>
              <div style={{ position: "relative", aspectRatio: "4/5", borderRadius: "var(--r-md)", overflow: "hidden", border: "1px solid var(--line-strong)", boxShadow: "var(--shadow-md)" }}>
                <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: `url(${window.SITE.aux.aboutBio})`, backgroundSize: "cover", backgroundPosition: "center top", filter: "grayscale(1) brightness(0.74) contrast(1.05)" }} />
                <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "radial-gradient(120% 90% at 0% 100%, rgba(190,150,87,0.18) 0%, transparent 58%)" }} />
              </div>
            </figure>
          </Reveal>
          <div>
            <Reveal><span className="eyebrow">{t.aboutPage.profileNote || "Profile"}</span></Reveal>
            <div style={{ marginTop: "24px", display: "flex", flexDirection: "column", gap: "20px", maxWidth: "62ch" }}>
              {a.bio.map((p, i) => (
                <Reveal key={i} delay={i * 60}>
                  <p style={{ fontSize: "var(--t-body)", lineHeight: 1.7, color: "var(--text-body)", margin: 0 }}>{p}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  /* ---------------- EXPERIENCE TIMELINE ---------------- */
  function Experience({ t }) {
    const a = t.aboutPage;
    return (
      <section style={{ background: "var(--mist-50)", padding: "var(--section-y) 0", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
        <div className="container">
          <Reveal><Heading eyebrow="04 — Experience" title={a.experienceTitle} maxWidth="20ch" /></Reveal>
          <div style={{ marginTop: "52px" }}>
            {a.experience.map((job, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="vk-exp-row" style={{ display: "grid", gridTemplateColumns: "0.9fr 2.1fr", gap: "40px", padding: "36px 0", borderTop: "1px solid var(--line-strong)" }}>
                  <div>
                    <div style={{ fontFamily: "var(--font-serif)", fontSize: "1.3rem", lineHeight: 1.2, color: "var(--text-strong)" }}>{job.company}</div>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: "var(--t-micro)", letterSpacing: "0.1em", color: "var(--accent-strong)", marginTop: "10px" }}>{job.scope || job.dates}</div>
                    <p style={{ fontSize: "var(--t-body-s)", lineHeight: 1.55, color: "var(--text-muted)", margin: "14px 0 0", maxWidth: "34ch" }}>{job.note}</p>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                    {job.roles.map((r, j) => (
                      <div key={j}>
                        <div style={{ fontFamily: "var(--font-sans)", fontSize: "var(--t-body)", fontWeight: 600, color: "var(--text-strong)", marginBottom: "12px" }}>{r.role}</div>
                        <ul style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                          {r.points.map((pt, k) => (
                            <li key={k} style={{ display: "flex", gap: "12px", fontSize: "var(--t-body-s)", lineHeight: 1.55, color: "var(--text-body)" }}>
                              <span style={{ color: "var(--accent-strong)", flexShrink: 0 }}>—</span>{pt}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    );
  }

  /* ---------------- ACHIEVEMENTS + COMPETENCIES ---------------- */
  function Highlights({ t }) {
    const a = t.aboutPage;
    return (
      <section style={{ position: "relative", overflow: "hidden", background: "var(--ink-800)", padding: "var(--section-y) 0" }}>
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=70)", backgroundSize: "cover", backgroundPosition: "center", filter: "grayscale(1) brightness(0.6) contrast(1.08)", opacity: 0.46 }} />
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(10,20,33,0.84) 0%, rgba(10,20,33,0.6) 45%, rgba(10,20,33,0.88) 100%)" }} />
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "radial-gradient(55% 55% at 100% 0%, rgba(190,150,87,0.12) 0%, transparent 55%)" }} />
        <div className="container" style={{ position: "relative" }}>
          <div className="vk-high-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "start" }}>
            <div>
              <Reveal><Heading eyebrow="05 — Track record" title={a.profileTitle} onInk maxWidth="16ch" /></Reveal>
              <ol style={{ marginTop: "36px", display: "flex", flexDirection: "column", gap: "20px", counterReset: "ach" }}>
                {a.achievements.map((it, i) => (
                  <Reveal key={i} delay={i * 50} as="li">
                    <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "18px", paddingBottom: "20px", borderBottom: "1px solid var(--line-on-ink)" }}>
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--accent-on-ink)", paddingTop: "3px" }}>{String(i + 1).padStart(2, "0")}</span>
                      <p style={{ fontSize: "var(--t-body-s)", lineHeight: 1.6, color: "var(--text-on-ink-muted)", margin: 0 }}>{it}</p>
                    </div>
                  </Reveal>
                ))}
              </ol>
            </div>
            <div>
              <Reveal><div className="eyebrow eyebrow--on-ink" style={{ marginBottom: "28px" }}>{a.competenciesTitle}</div></Reveal>
              <Reveal delay={80}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                  {a.competencies.map((c, i) => (
                    <span key={i} style={{ fontFamily: "var(--font-sans)", fontSize: "var(--t-body-s)", color: "var(--text-on-ink)", background: "rgba(236,240,244,0.05)", border: "1px solid var(--line-on-ink)", borderRadius: "var(--r-pill)", padding: "9px 16px" }}>{c}</span>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    );
  }

  /* ---------------- PERSPECTIVE (personal philosophy) ---------------- */
  function Philosophy({ t }) {
    const p = t.aboutPage.philosophy;
    const ints = t.aboutPage.interests;
    if (!p) return null;
    return (
      <section style={{ position: "relative", overflow: "hidden", background: "var(--bg-ink)", padding: "var(--section-y) 0" }}>
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "radial-gradient(58% 58% at 82% 8%, rgba(190,150,87,0.16) 0%, transparent 58%)" }} />
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "radial-gradient(46% 46% at 6% 96%, rgba(190,150,87,0.08) 0%, transparent 60%)" }} />
        <div className="container" style={{ position: "relative" }}>
          <Reveal><span className="eyebrow eyebrow--on-ink">{p.eyebrow}</span></Reveal>
          <div className="vk-phil-head" style={{ display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: "56px", alignItems: "start", marginTop: "26px" }}>
            <Reveal delay={60}>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "var(--t-display-m)", lineHeight: 1.12, letterSpacing: "-0.02em", color: "var(--text-on-ink)", margin: 0, maxWidth: "18ch" }}>{p.title}</h2>
            </Reveal>
            <Reveal delay={110}>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {(Array.isArray(p.lead) ? p.lead : [p.lead]).map((para, i) => (
                  <p key={i} style={{ fontSize: "var(--t-body-l)", lineHeight: 1.66, color: "var(--text-on-ink-muted)", margin: 0 }}>{rich(para)}</p>
                ))}
              </div>
            </Reveal>
          </div>
          <div className="vk-phil-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "40px", marginTop: "56px" }}>
            {p.points.map((it, i) => (
              <Reveal key={i} delay={i * 70}>
                <div style={{ borderTop: "1px solid var(--line-accent)", paddingTop: "22px" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "13px", marginBottom: "14px" }}>
                    {it.icon ? <span style={{ color: "var(--accent-on-ink)", flexShrink: 0, marginTop: "3px" }}><Glyph name={it.icon} size={24} sw={1.3} /></span> : null}
                    <div style={{ fontFamily: "var(--font-serif)", fontSize: "1.28rem", lineHeight: 1.25, color: "var(--accent-on-ink)" }}>{it.title}</div>
                  </div>
                  <p style={{ fontSize: "var(--t-body-s)", lineHeight: 1.66, color: "var(--text-on-ink-muted)", margin: 0 }}>{it.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          {ints && ints.items && ints.items.length ? (
            <div style={{ marginTop: "56px", paddingTop: "34px", borderTop: "1px solid var(--line-on-ink)" }}>
              <Reveal><span className="eyebrow eyebrow--on-ink">{ints.eyebrow}</span></Reveal>
              <div className="vk-phil-int" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "14px", marginTop: "22px" }}>
                {ints.items.map((c, i) => {
                  const label = typeof c === "string" ? c : c.label;
                  const icon = typeof c === "string" ? null : c.icon;
                  return (
                    <Reveal key={i} delay={i * 50}>
                      <div style={{ display: "flex", alignItems: "center", gap: "13px", background: "rgba(236,240,244,0.04)", border: "1px solid var(--line-on-ink)", borderRadius: "var(--r-pill)", padding: "13px 20px", height: "100%" }}>
                        {icon ? <span style={{ color: "var(--accent-on-ink)", flexShrink: 0 }}><Glyph name={icon} size={20} sw={1.4} /></span> : null}
                        <span style={{ fontFamily: "var(--font-sans)", fontSize: "var(--t-body-s)", lineHeight: 1.35, color: "var(--text-on-ink)" }}>{label}</span>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          ) : null}
        </div>
      </section>
    );
  }

  window.VKWeb = window.VKWeb || {};
  window.VKWeb.AboutPage = { AboutHero, Bio, Philosophy, Experience, Highlights };
})();
