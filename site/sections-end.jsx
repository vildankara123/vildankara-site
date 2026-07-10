/* Credentials · Contact — exposes window.VKWeb.End */
(function () {
  const { useState } = React;
  const DS = window.VildanKaraKayacanAdvisoryBrandSystem_6a049d;
  const { Reveal, Heading } = window.VKWeb;

  /* ---------------- CTA BAND (full-bleed cinematic) ---------------- */
  function CtaBand({ t }) {
    const c = t.ctaBand;
    return (
      <section style={{ position: "relative", overflow: "hidden", background: "var(--ink-900)" }}>
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: `url(${window.SITE.aux.cta})`, backgroundSize: "cover", backgroundPosition: "center 35%", filter: "grayscale(1) brightness(0.7) contrast(1.05)" }} />
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "linear-gradient(100deg, rgba(10,20,33,0.94) 0%, rgba(10,20,33,0.74) 45%, rgba(26,43,64,0.58) 100%)" }} />
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "radial-gradient(60% 90% at 0% 100%, rgba(190,150,87,0.26) 0%, transparent 55%)" }} />
        <div className="container" style={{ position: "relative", padding: "clamp(4rem, 3rem + 5vw, 7rem) 0" }}>
          <Reveal>
            <span className="eyebrow eyebrow--on-ink">{c.eyebrow}</span>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "var(--t-display-l)", lineHeight: 1.05, letterSpacing: "-0.022em", color: "var(--text-on-ink)", margin: "22px 0 0", maxWidth: "18ch" }}>{c.title}</h2>
            {c.body ? <p style={{ fontSize: "var(--t-body-l)", lineHeight: 1.55, color: "var(--text-on-ink-muted)", margin: "20px 0 0", maxWidth: "52ch" }}>{c.body}</p> : null}
            <div style={{ marginTop: "32px" }}>
              <DS.Button variant="accent" trailingArrow href="index.html#contact">{c.cta}</DS.Button>
            </div>
          </Reveal>
        </div>
      </section>
    );
  }

  /* ---------------- CREDENTIALS ---------------- */
  function Credentials({ t }) {
    const c = t.credentials;
    return (
      <section id="credentials" style={{ background: "var(--mist-50)", padding: "var(--section-y) 0", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
        <div className="container">
          <Reveal><Heading eyebrow={c.eyebrow} title={c.title} maxWidth="24ch" /></Reveal>
          <div className="vk-cred-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "32px", marginTop: "52px" }}>
            {c.groups.map((g, i) => (
              <Reveal key={g.label} delay={i * 70}>
                <div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "var(--t-micro)", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--accent-strong)", paddingBottom: "14px", marginBottom: "18px", borderBottom: "1px solid var(--line-strong)" }}>{g.label}</div>
                  <ul style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    {g.items.map((it, j) => (
                      <li key={j} style={{ fontSize: "var(--t-body-s)", lineHeight: 1.4, color: "var(--text-body)" }}>{it}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    );
  }

  /* ---------------- CONTACT ---------------- */
  function Contact({ t }) {
    const c = t.contact;
    const [sent, setSent] = useState(false);
    return (
      <section id="contact" style={{ position: "relative", overflow: "hidden", background: "var(--ink-900)", padding: "var(--section-y) 0" }}>
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "url(https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=70)", backgroundSize: "cover", backgroundPosition: "center", filter: "grayscale(1) brightness(0.62) contrast(1.06)", opacity: 0.5 }} />
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "linear-gradient(110deg, rgba(10,20,33,0.92) 0%, rgba(10,20,33,0.74) 45%, rgba(26,43,64,0.5) 100%)" }} />
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "radial-gradient(50% 60% at 0% 100%, rgba(190,150,87,0.16) 0%, transparent 55%)" }} />
        <div className="container vk-contact-grid" style={{ position: "relative", display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: "72px", alignItems: "start" }}>
          <Reveal>
            <Heading eyebrow={c.eyebrow} title={c.title} lede={c.lede} onInk maxWidth="14ch" ledeWidth="46ch" />
            <div style={{ marginTop: "40px", display: "flex", flexDirection: "column", gap: "16px" }}>
              {[["@", c.email, "mailto:" + c.email], ["↗", c.linkedin, "https://www.linkedin.com/in/vildankara/"], ["·", c.location, null], ["·", c.langs, null]].map((row, i) => (
                <div key={i} style={{ display: "flex", gap: "14px", alignItems: "baseline" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--accent-on-ink)", width: "14px" }}>{row[0]}</span>
                  {row[2]
                    ? <a href={row[2]} target={row[2].startsWith("http") ? "_blank" : undefined} rel={row[2].startsWith("http") ? "noopener noreferrer" : undefined} style={{ fontSize: "var(--t-body-s)", color: "var(--text-on-ink)", borderBottom: "1px solid var(--line-on-ink)", paddingBottom: "1px" }}>{row[1]}</a>
                    : <span style={{ fontSize: "var(--t-body-s)", color: "var(--text-on-ink-muted)" }}>{row[1]}</span>}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={100}>
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              style={{ background: "var(--surface-card)", border: "1px solid var(--line)", borderRadius: "var(--r-md)", padding: "36px", boxShadow: "var(--shadow-sm)", display: "flex", flexDirection: "column", gap: "26px" }}>
              {sent ? (
                <div style={{ padding: "40px 8px", textAlign: "center" }}>
                  <div style={{ fontFamily: "var(--font-serif)", fontSize: "var(--t-head-m)", color: "var(--text-strong)", marginBottom: "10px" }}>✓</div>
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "var(--t-head-m)", color: "var(--text-strong)", margin: 0, maxWidth: "28ch", marginInline: "auto" }}>{c.sent}</p>
                </div>
              ) : (
                <>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "22px" }}>
                    <DS.Field label={c.fields.name} name="name" required />
                    <DS.Field label={c.fields.org} name="org" />
                  </div>
                  <DS.Field label={c.fields.email} name="email" type="email" required />
                  <label style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--t-micro)", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-muted)" }}>{c.fields.topic}</span>
                    <select name="topic" style={{ width: "100%", fontFamily: "var(--font-sans)", fontSize: "var(--t-body)", color: "var(--text-strong)", background: "transparent", border: "none", borderBottom: "1.5px solid var(--line-strong)", padding: "10px 0", outline: "none" }}>
                      {c.topics.map((tp) => <option key={tp}>{tp}</option>)}
                    </select>
                  </label>
                  <DS.Field label={c.fields.message} name="message" textarea rows={3} />
                  <DS.Button variant="accent" type="submit" trailingArrow style={{ alignSelf: "flex-start" }}>{c.send}</DS.Button>
                </>
              )}
            </form>
          </Reveal>
        </div>
      </section>
    );
  }

  window.VKWeb = window.VKWeb || {};
  window.VKWeb.End = { Credentials, Contact, CtaBand };
})();
