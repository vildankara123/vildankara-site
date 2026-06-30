/* Home page app */
(function () {
  const { Chrome, Top, End, HomeSections } = window.VKWeb;
  const SITE = window.SITE;

  function Home() {
    const [lang, setLang] = Chrome.useLang();
    const t = SITE[lang];
    const onNav = (id) => {
      if (id === "top") { window.scrollTo({ top: 0, behavior: "smooth" }); return; }
      const el = document.getElementById(id);
      if (!el) return;
      window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 58, behavior: "smooth" });
    };
    return (
      <>
        <Chrome.Nav t={t} lang={lang} setLang={setLang} current="services" />
        <Top.SloganHero t={t} img={SITE.img} onNav={onNav} />
        <Top.CredBar t={t} />
        <HomeSections.Perspective t={t} />
        <HomeSections.WhereIHelp t={t} onNav={onNav} />
        <HomeSections.WhyClients t={t} />
        <HomeSections.HowIThink t={t} />
        <HomeSections.AboutTeaser t={t} />
        <End.CtaBand t={t} />
        <End.Contact t={t} />
        <Chrome.Footer t={t} />
      </>
    );
  }

  if (window.__dsRoot) { try { window.__dsRoot.unmount(); } catch(e) {} }
  const rootEl = document.getElementById("root");
  ReactDOM.createRoot(rootEl).render(<Home />);
})();
