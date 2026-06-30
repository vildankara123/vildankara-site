/* About page sections — exposes window.VKWeb.AboutPage */
(function () {
  const DS = window.VildanKaraKayacanAdvisoryBrandSystem_6a049d;
  const { Reveal, Heading } = window.VKWeb;

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
              <div style={{ fontFamily: "var(--font-sans)", fontSize: "var(--t-body-l)", fontWeight: 500, color: "var(--accent-on-ink)", marginTop: "16px" }}>{a.role}</div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "var(--t-micro)", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-on-ink-faint)", marginTop: "10px" }}>{a.tags}</div>
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
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: "var(--t-micro)", letterSpacing: "0.1em", color: "var(--accent-strong)", marginTop: "10px" }}>{job.dates}</div>
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

  window.VKWeb = window.VKWeb || {};
  window.VKWeb.AboutPage = { AboutHero, Bio, Experience, Highlights };
})();
