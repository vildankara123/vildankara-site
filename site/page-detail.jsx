/* Detail pages — Article & Project. exposes window.VKWeb.Detail */
(function () {
  const { Reveal } = window.VKWeb;
  const DS = window.VildanKaraKayacanAdvisoryBrandSystem_6a049d;
  const SITE = window.SITE;

  const STATUS = {
    "Active": "#1F8A5B", "Aktif": "#1F8A5B",
    "In development": "#C18A2E", "Geliştiriliyor": "#C18A2E",
    "Coming soon": "#3C6FB0", "Yakında": "#3C6FB0",
  };

  function getId(len) {
    const n = parseInt(new URLSearchParams(location.search).get("id") || "0", 10);
    return isNaN(n) ? 0 : Math.max(0, Math.min(len - 1, n));
  }
  const qlang = (lang) => "&lang=" + lang;

  /* ---------------- ARTICLE DETAIL ---------------- */
  function ArticleDetail({ t, lang }) {
    const items = t.insights.items;
    const id = getId(items.length);
    const it = items[id];
    const L = SITE.detail[lang].labels;
    const body = SITE.detail[lang].insightBodies[id] || [];
    const others = items.map((x, i) => ({ x, i })).filter((o) => o.i !== id).slice(0, 3);

    return (
      <>
        <header style={{ position: "relative", overflow: "hidden", background: "var(--ink-900)", padding: "140px 0 var(--section-y)" }}>
          <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "url(https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&w=1600&q=70)", backgroundSize: "cover", backgroundPosition: "center", filter: "grayscale(1) brightness(0.6) contrast(1.08)", opacity: 0.4 }} />
          <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(10,20,33,0.9) 0%, rgba(10,20,33,0.72) 50%, rgba(10,20,33,0.92) 100%)" }} />
          <div className="container" style={{ position: "relative", maxWidth: "820px" }}>
            <Reveal>
              <a href={"insights.html?lang=" + lang} style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--accent-on-ink)" }}>← {L.back}</a>
            </Reveal>
            <Reveal delay={60}>
              <div style={{ display: "flex", gap: "12px", fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-on-ink-faint)", margin: "26px 0 16px" }}>
                <span style={{ color: "var(--accent-on-ink)" }}>{it.tag}</span><span>· {it.read}</span>
              </div>
            </Reveal>
            {it.img && (
              <Reveal delay={90}>
                <div style={{ margin: "6px 0 28px", borderRadius: "var(--r-md)", overflow: "hidden", border: "1px solid var(--line-on-ink)", boxShadow: "0 26px 54px -30px rgba(0,0,0,0.75)", aspectRatio: "16 / 8", background: "var(--ink-800)" }}>
                  <img src={it.img} alt={it.title} loading="lazy" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
              </Reveal>
            )}
            <Reveal delay={100}>
              <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2.2rem, 1.3rem + 3vw, 3.4rem)", lineHeight: 1.1, letterSpacing: "-0.02em", color: "var(--text-on-ink)", margin: 0 }}>{it.title}</h1>
            </Reveal>
            <Reveal delay={150}>
              <p style={{ fontSize: "var(--t-body-l)", lineHeight: 1.55, color: "var(--text-on-ink-muted)", margin: "22px 0 0", maxWidth: "56ch" }}>{it.text}</p>
            </Reveal>
            <Reveal delay={200}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginTop: "30px", paddingTop: "22px", borderTop: "1px solid var(--line-on-ink)" }}>
                <span style={{ fontFamily: "var(--font-serif)", fontSize: "16px", color: "var(--text-on-ink)" }}>{L.byline}</span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "10.5px", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-on-ink-faint)" }}>· {t.brand.role}</span>
              </div>
            </Reveal>
          </div>
        </header>

        <article style={{ background: "var(--paper)", padding: "var(--section-y) 0" }}>
          <div className="container" style={{ maxWidth: "720px" }}>
            {body.map((p, i) => (
              <Reveal key={i} delay={i * 40}>
                <p style={{ fontSize: "1.1875rem", lineHeight: 1.75, color: "var(--text-body)", margin: "0 0 1.5rem", maxWidth: "none" }}>{p}</p>
              </Reveal>
            ))}
            <div style={{ marginTop: "20px", paddingTop: "32px", borderTop: "1px solid var(--line)", display: "flex", gap: "14px", flexWrap: "wrap" }}>
              <DS.Button variant="accent" trailingArrow href={"index.html#contact"}>{L.talk}</DS.Button>
              <a href={"insights.html?lang=" + lang} style={{ fontFamily: "var(--font-sans)", fontSize: "15px", fontWeight: 500, color: "var(--text-strong)", border: "1px solid var(--border-strong)", borderRadius: "var(--r-sm)", padding: "13px 24px" }}>{L.back}</a>
            </div>
          </div>
        </article>

        <section style={{ background: "var(--mist-50)", padding: "var(--section-y) 0", borderTop: "1px solid var(--line)" }}>
          <div className="container">
            <div className="eyebrow" style={{ marginBottom: "28px" }}>{L.related}</div>
            <div className="vk-insights-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "18px" }}>
              {others.map(({ x, i }) => (
                <a key={i} href={"article.html?id=" + i + qlang(lang)} style={{ display: "block", background: "var(--surface-card)", border: "1px solid var(--line)", borderRadius: "var(--r-md)", padding: "24px", boxShadow: "var(--shadow-sm)" }}>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "10.5px", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--accent-strong)", marginBottom: "12px" }}>{x.tag} · {x.read}</div>
                  <div style={{ fontFamily: "var(--font-serif)", fontSize: "1.2rem", lineHeight: 1.2, color: "var(--text-strong)" }}>{x.title}</div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </>
    );
  }

  /* ---------------- PROJECT DETAIL ---------------- */
  function ProjectDetail({ t, lang }) {
    const items = t.projects.items;
    const id = getId(items.length);
    const it = items[id];
    const L = SITE.detail[lang].labels;
    const body = SITE.detail[lang].projectBodies[id] || [];
    const features = SITE.detail[lang].projectFeatures[id] || [];
    const dot = STATUS[it.status] || "var(--slate-400)";
    const others = items.map((x, i) => ({ x, i })).filter((o) => o.i !== id).slice(0, 3);

    return (
      <>
        <header style={{ position: "relative", overflow: "hidden", background: "var(--ink-900)", padding: "140px 0 var(--section-y)" }}>
          <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "url(https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&w=1600&q=70)", backgroundSize: "cover", backgroundPosition: "center", filter: "grayscale(1) brightness(0.6) contrast(1.08)", opacity: 0.4 }} />
          <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(10,20,33,0.9) 0%, rgba(10,20,33,0.72) 50%, rgba(10,20,33,0.92) 100%)" }} />
          <div className="container" style={{ position: "relative", maxWidth: "900px" }}>
            <Reveal>
              <a href={"projects.html?lang=" + lang} style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--accent-on-ink)" }}>← {L.backProjects}</a>
            </Reveal>
            <Reveal delay={60}>
              <div style={{ display: "flex", alignItems: "center", gap: "16px", margin: "26px 0 16px" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--accent-on-ink)" }}>{it.kind}</span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "7px", fontFamily: "var(--font-mono)", fontSize: "10.5px", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-on-ink-faint)" }}>
                  <span style={{ width: "7px", height: "7px", borderRadius: "999px", background: dot }} />{it.status}
                </span>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2.4rem, 1.4rem + 3.2vw, 3.8rem)", lineHeight: 1.06, letterSpacing: "-0.022em", color: "var(--text-on-ink)", margin: 0 }}>{it.name}</h1>
            </Reveal>
            <Reveal delay={150}>
              <p style={{ fontSize: "var(--t-body-l)", lineHeight: 1.55, color: "var(--text-on-ink-muted)", margin: "22px 0 0", maxWidth: "52ch" }}>{it.body}</p>
            </Reveal>
            {it.link && it.link !== "#" && it.link !== "#contact" && (
              <Reveal delay={200}>
                <div style={{ marginTop: "32px" }}>
                  <DS.Button variant="accent" trailingArrow href={it.link}>{L.visit}</DS.Button>
                </div>
              </Reveal>
            )}
          </div>
        </header>

        <section style={{ background: "var(--paper)", padding: "var(--section-y) 0" }}>
          <div className="container vk-pd-grid" style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: "64px", alignItems: "start" }}>
            <div>
              {body.map((p, i) => (
                <Reveal key={i} delay={i * 50}>
                  <p style={{ fontSize: "1.125rem", lineHeight: 1.72, color: "var(--text-body)", margin: "0 0 1.4rem", maxWidth: "none" }}>{p}</p>
                </Reveal>
              ))}
              <Reveal>
                <div style={{ marginTop: "20px", display: "flex", gap: "14px", flexWrap: "wrap" }}>
                  <DS.Button variant="accent" trailingArrow href="index.html#contact">{L.talk}</DS.Button>
                  <a href={"projects.html?lang=" + lang} style={{ fontFamily: "var(--font-sans)", fontSize: "15px", fontWeight: 500, color: "var(--text-strong)", border: "1px solid var(--border-strong)", borderRadius: "var(--r-sm)", padding: "13px 24px" }}>{L.backProjects}</a>
                </div>
              </Reveal>
            </div>
            <Reveal delay={100}>
              <div style={{ background: "var(--surface-card)", border: "1px solid var(--line)", borderRadius: "var(--r-md)", padding: "28px", boxShadow: "var(--shadow-sm)" }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "var(--t-micro)", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--accent-strong)", paddingBottom: "16px", marginBottom: "8px", borderBottom: "1px solid var(--line)" }}>{L.features}</div>
                <ul style={{ display: "flex", flexDirection: "column" }}>
                  {features.map((f, i) => (
                    <li key={i} style={{ display: "flex", gap: "12px", alignItems: "baseline", fontSize: "var(--t-body-s)", color: "var(--text-body)", padding: "13px 0", borderBottom: i < features.length - 1 ? "1px solid var(--line)" : "none" }}>
                      <span style={{ color: "var(--accent-strong)" }}>—</span>{f}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </section>

        <section style={{ background: "var(--bg-ink)", padding: "var(--section-y) 0" }}>
          <div className="container">
            <div className="eyebrow eyebrow--on-ink" style={{ marginBottom: "28px" }}>{L.related}</div>
            <div className="vk-projects-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "18px" }}>
              {others.map(({ x, i }) => (
                <a key={i} href={"project.html?id=" + i + qlang(lang)} style={{ display: "block", background: "rgba(236,240,244,0.04)", border: "1px solid var(--line-on-ink)", borderRadius: "var(--r-md)", padding: "24px" }}>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "10.5px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--accent-on-ink)", marginBottom: "12px" }}>{x.kind}</div>
                  <div style={{ fontFamily: "var(--font-serif)", fontSize: "1.3rem", color: "var(--text-on-ink)" }}>{x.name}</div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </>
    );
  }

  window.VKWeb = window.VKWeb || {};
  window.VKWeb.Detail = { ArticleDetail, ProjectDetail };
})();
