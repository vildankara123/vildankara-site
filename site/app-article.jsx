/* Article detail page app */
(function () {
  const { Chrome, Detail } = window.VKWeb;
  const SITE = window.SITE;
  function ArticlePage() {
    const [lang, setLang] = Chrome.useLang();
    const t = SITE[lang];
    return (
      <>
        <Chrome.Nav t={t} lang={lang} setLang={setLang} current="insights" solid />
        <Detail.ArticleDetail t={t} lang={lang} />
        <Chrome.Footer t={t} lang={lang} />
      </>
    );
  }
  if (window.__dsRoot) { try { window.__dsRoot.unmount(); } catch(e) {} }
  const rootEl = document.getElementById("root");
  ReactDOM.createRoot(rootEl).render(<ArticlePage />);
})();
