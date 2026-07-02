/* Home page sections — Perspective · WhereIHelp · WhyClients · AboutTeaser
   Exposes window.VKWeb.HomeSections */
(function () {
  const DS = window.VildanKaraKayacanAdvisoryBrandSystem_6a049d;
  const { Reveal, Disc, Glyph } = window.VKWeb;

  /* ---------------- OUR PERSPECTIVE (horizontal journey rail, on paper) ---------------- */
  function Perspective({ t }) {
    const P = t.home.perspective;
    return (
      <section id="perspective" className="vk-core-onink" style={{ position: "relative", overflow: "hidden", background: "var(--ink-900)", padding: "var(--section-y) 0" }}>
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=70)", backgroundSize: "cover", backgroundPosition: "center", opacity: 0.55 }} />
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(10,20,33,0.74) 0%, rgba(10,20,33,0.64) 45%, rgba(10,20,33,0.86) 100%)" }} />
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "radial-gradient(54% 50% at 50% 0%, rgba(190,150,87,0.14) 0%, transparent 60%)" }} />
        <div className="container" style={{ position: "relative" }}>
          <Reveal style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "18px" }}>
            <span className="eyebrow eyebrow--on-ink">{P.eyebrow}</span>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "var(--t-display-m)", lineHeight: 1.1, letterSpacing: "-0.018em", color: "var(--text-on-ink)", margin: 0, maxWidth: "24ch" }}>
              {P.title.map((l, i) => {
                if (i !== P.title.length - 1) return <span key={i} style={{ display: "block" }}>{l}</span>;
                const idx = l.lastIndexOf(" ");
                const head = idx > 0 ? l.slice(0, idx + 1) : "";
                const tail = idx > 0 ? l.slice(idx + 1) : l;
                return <span key={i} style={{ display: "block" }}>{head}<span style={{ color: "var(--accent-on-ink)" }}>{tail}</span></span>;
              })}
            </h2>
            <p style={{ fontSize: "var(--t-body-l)", lineHeight: 1.55, color: "var(--text-on-ink-muted)", margin: 0, maxWidth: "62ch" }}>{P.lede}</p>
          </Reveal>

          <Reveal className="vk-core" delay={80}>
            <div className="vk-core-flow">
              <span className="vk-core-rail" aria-hidden="true" />
              {P.flow.map((s, i) => (
                <div className="vk-core-step" key={i}>
                  <span className="vk-core-disc"><Disc name={s.icon} size={78} icon={33} /></span>
                  <div className="vk-core-name">{s.title}</div>
                  <span className="vk-core-namerule" aria-hidden="true" />
                  <p className="vk-core-body">{s.body}</p>
                </div>
              ))}
            </div>

            <div className="vk-core-enable">
              <span className="vk-core-enable-ic" aria-hidden="true"><Glyph name="chip" size={30} sw={1.4} /></span>
              <div className="vk-core-enable-txt">
                <div className="vk-core-enable-label">{P.enable.label}</div>
                <div className="vk-core-enable-items">
                  {P.enable.items.map((it, k) => (
                    <React.Fragment key={k}>{k > 0 ? <span className="vk-core-enable-dot">{"   ·   "}</span> : null}{it}</React.Fragment>
                  ))}
                </div>
              </div>
            </div>

            <p className="vk-core-note">
              <span className="vk-core-note-lead">{P.note.lead}</span>{" "}
              <span>{P.note.rest}</span>{" "}
              <span className="vk-core-note-em">{P.note.em}</span>
            </p>
          </Reveal>
        </div>
      </section>
    );
  }

  /* ---------------- MANIFESTO (light, editorial — between hero and services) ---------------- */
  function Manifesto({ t }) {
    const M = t.home.manifesto;
    return (
      <section id="manifesto" style={{ position: "relative", background: "var(--paper)", padding: "var(--section-y) 0" }}>
        <div className="container">
          <div className="vk-mani">
            <div className="vk-mani-head">
              <span className="eyebrow">{M.eyebrow}</span>
              <h2 className="vk-mani-title">{M.title.map((l, i) => <span key={i}>{l} </span>)}</h2>
            </div>
            <blockquote className="vk-mani-body">
              {M.paras.map((p, i) => (
                <p key={i} className="vk-mani-p">{i === 0 ? "“" : ""}{p}{i === M.paras.length - 1 ? "”" : ""}</p>
              ))}
              <footer className="vk-mani-cite">— {M.cite}</footer>
            </blockquote>
          </div>
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
            <p style={{ fontSize: "var(--t-body-l)", lineHeight: 1.55, color: "var(--text-muted)", margin: 0, maxWidth: "60ch" }}>{H.sub}</p>
          </Reveal>
          <div className="vk-blog-grid">
            {H.posts.map((p, i) => (
              <Reveal as="article" className="vk-blog-card" key={i} delay={i * 90}>
                <span className="vk-blog-img" style={{ backgroundImage: `url(${p.img})` }} aria-hidden="true" />
                <div className="vk-blog-card-body">
                  <span className="vk-blog-label">{p.label}</span>
                  <h3 className="vk-blog-title">{p.title}</h3>
                  <span className="vk-blog-rule" aria-hidden="true" />
                  <p className="vk-blog-excerpt">{p.body}</p>
                  <blockquote className="vk-blog-quote">{p.quote}</blockquote>
                  <a className="vk-blog-more" href={p.href}>{H.readMore} <span aria-hidden="true">→</span></a>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal style={{ textAlign: "center", marginTop: "42px", display: "flex", flexDirection: "column", alignItems: "center", gap: "18px" }}>
            <span style={{ fontSize: "0.95rem", color: "var(--text-muted)" }}>{H.more}</span>
            <a href="insights.html" style={{ fontFamily: "var(--font-sans)", fontSize: "15px", fontWeight: 500, color: "var(--text-strong)", background: "transparent", border: "1px solid var(--accent)", borderRadius: "var(--r-sm)", padding: "13px 26px", display: "inline-flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>{H.cta} <span aria-hidden="true">→</span></a>
          </Reveal>
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
          <div className="vk-about2">
            <Reveal as="div" className="vk-about2-left">
              <span className="eyebrow">{A.eyebrow}</span>
              <h2 className="vk-about2-title">
                {A.title.map((l, i) => (
                  <span key={i} style={{ display: "block", color: i === A.title.length - 1 ? "var(--accent-strong)" : "var(--text-strong)" }}>{l}</span>
                ))}
              </h2>
              <div className="vk-about2-list">
                {A.items.map((it, i) => (
                  <div className="vk-about2-item" key={i}>
                    <span className="vk-about2-ic" aria-hidden="true"><Glyph name={it.icon} size={30} sw={1.4} /></span>
                    <div>
                      <h3 className="vk-about2-h">{it.title}</h3>
                      <p className="vk-about2-p">{it.body}</p>
                    </div>
                  </div>
                ))}
              </div>
              <a className="vk-about2-link" href="about.html">{A.cta} <span aria-hidden="true">→</span></a>
            </Reveal>
            <Reveal as="div" className="vk-about2-media" delay={100}>
              <div className="vk-about2-photo" style={{ backgroundImage: `url(${img.seated})` }} aria-hidden="true" />
              <div className="vk-about2-quote">
                <span className="vk-about2-qmark" aria-hidden="true">“</span>
                <p>{A.quote}</p>
                <span className="vk-about2-qrule" aria-hidden="true" />
              </div>
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
  /* ---------------- SERVICES (Assess · Plan · Deliver · Sustain, detailed) ---------------- */
  function Services({ t, onNav, ctaHref }) {
    const S = t.svc;
    const img = window.SITE.img;
    const secRef = React.useRef(null);
    React.useEffect(() => {
      const root = secRef.current;
      if (!root) return;
      const els = root.querySelectorAll(".vk-reveal, .vk-reveal-r");
      if (!("IntersectionObserver" in window)) { els.forEach((el) => el.classList.add("is-in")); return; }
      const io = new IntersectionObserver((entries) => {
        entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); } });
      }, { threshold: 0.15, rootMargin: "0px 0px -8% 0px" });
      els.forEach((el) => io.observe(el));
      return () => io.disconnect();
    }, []);
    const pointIcons = ["target", "people"];
    const points = [S.lede, S.asideBody];
    return (
      <section id="services" ref={secRef} style={{ position: "relative", background: "var(--paper)" }}>
        <div className="vk-svc-hdband">
          <div className="vk-svc-headimg" aria-hidden="true" />
          <div className="container" style={{ position: "relative" }}>
            <div className="vk-svcd-hd">
              <div className="vk-reveal">
                <span className="eyebrow eyebrow--on-ink">{S.eyebrow}</span>
                <h2 className="vk-svcd-hd-title">{S.title.map((l, i) => <span key={i}>{l}{i < S.title.length - 1 ? " " : ""}</span>)}</h2>
                <span className="vk-svcd-hd-rule" aria-hidden="true" />
              </div>
              <div className="vk-svc-hd-points vk-reveal" style={{ transitionDelay: "100ms" }}>
                {points.map((p, i) => (
                  <div className="vk-svc-hd-point" key={i}>
                    <span className="vk-svc-hd-ic" aria-hidden="true"><Glyph name={pointIcons[i]} size={24} sw={1.4} /></span>
                    <p>{p}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="container vk-svc-cardarea">
          <div className="vk-svcs-list">
            {S.stages.map((s, i) => (
              <div className="vk-svcs-card vk-reveal" key={i} style={{ transitionDelay: (i * 90) + "ms" }}>
                <span className="vk-svcs-icon" aria-hidden="true"><Glyph name={s.icon} size={26} sw={1.5} /></span>
                <h3 className="vk-svcs-title">{s.step.split("\n").map((ln, li) => <React.Fragment key={li}>{li > 0 ? <br /> : null}{ln}</React.Fragment>)}</h3>
                <span className="vk-svcs-trule" aria-hidden="true" />
                <p className="vk-svcs-body">{s.body}</p>
                <ul className="vk-svcs-items">
                  {s.items.map((it, k) => <li key={k}>{it}</li>)}
                </ul>
              </div>
            ))}
          </div>

          <div className="vk-svcd-cta vk-reveal" style={{ transitionDelay: "80ms" }}>
            <div className="vk-svcd-cta-main">
              <span className="eyebrow eyebrow--on-ink">{S.cta.eyebrow}</span>
              <h3>{S.cta.title}</h3>
              {(S.cta.paras || [S.cta.body]).map((p, i) => <p key={i}>{p}</p>)}
            </div>
            <div className="vk-svcd-cta-side">
              <ul className="vk-svcd-cta-bullets">
                {(S.cta.bullets || []).map((b, i) => <li key={i}>{b}</li>)}
              </ul>
              <DS.Button variant="accent" trailingArrow href={ctaHref || "services.html"}>{S.cta.button}</DS.Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  window.VKWeb.HomeSections = { Perspective, Manifesto, Services, WhereIHelp, WhyClients, HowIThink, AboutTeaser, Approach };
})();
