/* Services page — practice areas in detail */
(function () {
  const { Chrome, Mid, End, Reveal } = window.VKWeb;
  const DS = window.VildanKaraKayacanAdvisoryBrandSystem_6a049d;
  const SITE = window.SITE;

  function ServicesPage() {
    const [lang, setLang] = Chrome.useLang();
    const t = SITE[lang];
    const S = t.svcDetail.lead;
    return (
      <>
        <Chrome.Nav t={t} lang={lang} setLang={setLang} current="services" solid />
        <header style={{ position: "relative", overflow: "hidden", background: "var(--bg-ink)" }}>
          <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: `url(${SITE.img.skyline})`, backgroundSize: "cover", backgroundPosition: "center" }} />
          <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "linear-gradient(100deg, rgba(8,16,27,0.95) 0%, rgba(9,18,30,0.82) 42%, rgba(10,20,33,0.52) 100%)" }} />
          <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 60%, rgba(8,16,27,0.9) 100%)" }} />
          <div className="container" style={{ position: "relative", paddingTop: "152px", paddingBottom: "84px" }}>
            <div style={{ maxWidth: "860px" }}>
              <Reveal>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "14px", fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.26em", textTransform: "uppercase", color: "var(--accent-on-ink)" }}>
                  <span aria-hidden="true" style={{ width: "30px", height: "1px", background: "var(--accent)" }} />
                  {S.eyebrow}
                </span>
              </Reveal>
              <Reveal delay={60}>
                <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2.2rem, 1.1rem + 3.4vw, 3.6rem)", lineHeight: 1.05, letterSpacing: "-0.02em", color: "var(--text-on-ink)", margin: "22px 0 0" }}>
                  {S.title}
                </h1>
              </Reveal>
              <Reveal delay={110}>
                <div aria-hidden="true" style={{ width: "62px", height: "2px", background: "var(--accent)", margin: "28px 0 0" }} />
              </Reveal>
              <Reveal delay={150}>
                <div style={{ margin: "24px 0 0", maxWidth: "62ch" }}>
                  {S.lede.map((p, i) => <p key={i} style={{ fontSize: "var(--t-body-l)", lineHeight: 1.62, color: "var(--text-on-ink-muted)", margin: i ? "14px 0 0" : "0" }}>{p}</p>)}
                </div>
              </Reveal>
            </div>
          </div>
        </header>
        <section className="vk-sp">
          <div className="container">
            {t.svcDetail.groups.map((g, gi) => (
              <div className="vk-sp-group" key={gi}>
                <div className="vk-sp-head">
                  <Reveal as="div" className={"vk-sp-banner" + (g.image ? "" : " vk-sp-banner--plain")} style={g.image ? { backgroundImage: `url(${g.image})` } : undefined}>
                    <div className="vk-sp-titlebox">
                      <h2 className="vk-sp-title">{g.title}</h2>
                    </div>
                  </Reveal>
                  <Reveal as="div" className="vk-sp-intro" delay={80}>
                    {g.intro.map((p, pi) => <p key={pi}>{p}</p>)}
                  </Reveal>
                </div>
                <div className="vk-sp-rows">
                  {g.rows.map((r, ri) => (
                    <Reveal as="div" className="vk-sp-row" key={ri} delay={ri * 40}>
                      <h3 className="vk-sp-row-title">{r.title}</h3>
                      <span className="vk-sp-arrow" aria-hidden="true">
                        <svg width="34" height="18" viewBox="0 0 34 18" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 9h29M25 3l6 6-6 6" /></svg>
                      </span>
                      <div className="vk-sp-row-desc">
                        {r.desc.map((p, pi) => <p key={pi}>{p}</p>)}
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            ))}

            <Reveal as="div" className="vk-sp-cta">
              <h2 className="vk-sp-cta-title">{t.svcDetail.cta.title}</h2>
              {t.svcDetail.cta.paras.map((p, i) => <p className="vk-sp-cta-p" key={i}>{p}</p>)}
              <DS.Button variant="accent" trailingArrow href="index.html#contact" style={{ marginTop: "18px" }}>{t.svcDetail.cta.button}</DS.Button>
            </Reveal>
          </div>
        </section>
        <End.Contact t={t} />
        <Chrome.Footer t={t} />
      </>
    );
  }
  if (window.__dsRoot) { try { window.__dsRoot.unmount(); } catch(e) {} }
  const rootEl = document.getElementById("root");
  ReactDOM.createRoot(rootEl).render(<ServicesPage />);
})();
