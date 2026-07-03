/* Project detail page app */
(function () {
  const { Chrome, Detail } = window.VKWeb;
  const SITE = window.SITE;
  function ProjectPage() {
    const [lang, setLang] = Chrome.useLang();
    const t = SITE[lang];
    return (
      <>
        <Chrome.Nav t={t} lang={lang} setLang={setLang} current="projects" solid />
        <Detail.ProjectDetail t={t} lang={lang} />
        <Chrome.Footer t={t} lang={lang} />
      </>
    );
  }
  if (window.__dsRoot) { try { window.__dsRoot.unmount(); } catch(e) {} }
  const rootEl = document.getElementById("root");
  ReactDOM.createRoot(rootEl).render(<ProjectPage />);
})();
