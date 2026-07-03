/* Insights page app */
(function () {
  const { Chrome, Extra, End } = window.VKWeb;
  const SITE = window.SITE;

  function InsightsPage() {
    const [lang, setLang] = Chrome.useLang();
    const t = SITE[lang];
    return (
      <>
        <Chrome.Nav t={t} lang={lang} setLang={setLang} current="insights" solid />
        <Extra.Insights t={t} lang={lang} page />
        <End.Contact t={t} />
        <Chrome.Footer t={t} lang={lang} />
      </>
    );
  }
  if (window.__dsRoot) { try { window.__dsRoot.unmount(); } catch(e) {} }
  const rootEl = document.getElementById("root");
  ReactDOM.createRoot(rootEl).render(<InsightsPage />);
})();
