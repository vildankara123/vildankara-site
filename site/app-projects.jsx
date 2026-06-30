/* Projects page — single "coming soon" statement */
(function () {
  const DS = window.VildanKaraKayacanAdvisoryBrandSystem_6a049d;
  const { Chrome } = window.VKWeb;
  const { Reveal, Disc } = window.VKWeb;
  const SITE = window.SITE;

  function ProjectsPage() {
    const [lang, setLang] = Chrome.useLang();
    const t = SITE[lang];
    const P = t.projectsSoon;
    return (
      <>
        <Chrome.Nav t={t} lang={lang} setLang={setLang} current="projects" solid />
        <section style={{ position: "relative", background: "var(--bg-ink)", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
          <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: `url(${SITE.img.boardroom})`, backgroundSize: "cover", backgroundPosition: "center", opacity: 0.32 }} />
          <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "radial-gradient(130% 100% at 50% 38%, rgba(10,20,33,0.55) 0%, rgba(8,16,27,0.9) 58%, var(--bg-ink) 100%)" }} />
          <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "radial-gradient(50% 46% at 50% 16%, rgba(190,150,87,0.14) 0%, transparent 60%)" }} />
          <div className="container" style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", paddingTop: "120px", paddingBottom: "90px" }}>
            <Reveal style={{ display: "flex", justifyContent: "center" }}><Disc name="route" size={84} icon={36} /></Reveal>
            <Reveal delay={70}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "14px", fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.26em", textTransform: "uppercase", color: "var(--accent-on-ink)", marginTop: "28px" }}>
                <span aria-hidden="true" style={{ width: "30px", height: "1px", background: "var(--accent)" }} />
                {P.eyebrow}
                <span aria-hidden="true" style={{ width: "30px", height: "1px", background: "var(--accent)" }} />
              </span>
            </Reveal>
            <Reveal delay={120}>
              <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2.2rem, 1.1rem + 3.4vw, 3.6rem)", lineHeight: 1.06, letterSpacing: "-0.02em", color: "var(--text-on-ink)", margin: "22px 0 0" }}>{P.title}</h1>
            </Reveal>
            <Reveal delay={170}>
              <p style={{ fontSize: "var(--t-body-l)", lineHeight: 1.66, color: "var(--text-on-ink-muted)", maxWidth: "60ch", margin: "26px auto 0" }}>{P.body}</p>
            </Reveal>
            <Reveal delay={230} style={{ marginTop: "40px" }}>
              <DS.Button variant="accent" trailingArrow href="index.html#contact">{P.cta}</DS.Button>
            </Reveal>
          </div>
        </section>
        <Chrome.Footer t={t} />
      </>
    );
  }
  if (window.__dsRoot) { try { window.__dsRoot.unmount(); } catch(e) {} }
  const rootEl = document.getElementById("root");
  ReactDOM.createRoot(rootEl).render(<ProjectsPage />);
})();
