/* About page app */
(function () {
  const { Chrome, AboutPage, Extra, End } = window.VKWeb;
  const SITE = window.SITE;

  function About() {
    const [lang, setLang] = Chrome.useLang();
    const t = SITE[lang];
    return (
      <>
        <Chrome.Nav t={t} lang={lang} setLang={setLang} current="about" />
        <AboutPage.AboutHero t={t} img={SITE.img} />
        <AboutPage.Bio t={t} img={SITE.img} />
        <AboutPage.Experience t={t} />
        <AboutPage.Highlights t={t} />
        <Extra.Footprint t={t} footprint={SITE.footprint} lang={lang} />
        <End.Credentials t={t} />
        <End.Contact t={t} />
        <Chrome.Footer t={t} />
      </>
    );
  }
  if (window.__dsRoot) { try { window.__dsRoot.unmount(); } catch(e) {} }
  const rootEl = document.getElementById("root");
  ReactDOM.createRoot(rootEl).render(<About />);
})();
