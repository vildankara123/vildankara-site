/* Shared chrome — Nav + Footer across all pages. window.VKWeb.Chrome */
(function () {
  const { useState, useEffect } = React;

  /* ---------------- NAV ---------------- */
  function Nav({ t, lang, setLang, current, solid }) {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
      const onScroll = () => setScrolled(window.scrollY > 40);
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }, []);
    const dark = solid || scrolled;
    return (
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        transition: "background var(--dur) var(--ease-out), box-shadow var(--dur), backdrop-filter var(--dur)",
        background: "rgba(10,20,33,0.96)",
        backdropFilter: "saturate(140%) blur(12px)",
        boxShadow: "0 1px 0 rgba(236,240,244,0.10)",
      }}>
        <div className="container" style={{ display: "flex", alignItems: "center", gap: "20px", height: scrolled ? "64px" : "82px", transition: "height var(--dur) var(--ease-out)" }}>
          <a href="index.html" style={{ display: "flex", flexDirection: "column", lineHeight: 1.15, marginRight: "auto", whiteSpace: "nowrap" }}>
            <span style={{ fontFamily: "var(--font-serif)", fontSize: "19px", color: "var(--text-on-ink)", letterSpacing: "0.01em" }}>{t.brand.name}</span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "9px", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--accent-on-ink)", marginTop: "4px" }}>{t.brand.role}</span>
          </a>
          <div className="vk-navlinks" style={{ display: "flex", gap: "24px" }}>
            {t.nav.map((n) => {
              const active = current === n.id;
              return (
                <a key={n.id} href={n.href} className="vk-navlink"
                  style={{ fontFamily: "var(--font-sans)", fontSize: "14px", fontWeight: 500, color: active ? "var(--text-on-ink)" : "var(--text-on-ink-muted)", letterSpacing: "0.01em", whiteSpace: "nowrap", borderBottom: active ? "1px solid var(--accent-on-ink)" : "1px solid transparent", paddingBottom: "2px", transition: "color var(--dur-fast)" }}
                  onMouseEnter={(e) => e.currentTarget.style.color = "var(--text-on-ink)"}
                  onMouseLeave={(e) => e.currentTarget.style.color = active ? "var(--text-on-ink)" : "var(--text-on-ink-muted)"}>{n.label}</a>
              );
            })}
          </div>
          <button onClick={() => setLang(lang === "en" ? "tr" : "en")} aria-label="Toggle language"
            style={{ fontFamily: "var(--font-mono)", fontSize: "11px", fontWeight: 500, letterSpacing: "0.1em", color: "var(--text-on-ink)", background: "transparent", border: "1px solid rgba(236,240,244,0.28)", padding: "6px 10px", borderRadius: "var(--r-sm)", cursor: "pointer", transition: "border-color var(--dur-fast)" }}
            onMouseEnter={(e) => e.currentTarget.style.borderColor = "var(--accent-on-ink)"}
            onMouseLeave={(e) => e.currentTarget.style.borderColor = "rgba(236,240,244,0.28)"}>
            {lang === "en" ? "TR" : "EN"}
          </button>
          <a href="index.html#contact" className="vk-navcta"
            style={{ fontFamily: "var(--font-sans)", fontSize: "14px", fontWeight: 500, color: "var(--on-accent)", background: "var(--accent)", padding: "10px 18px", borderRadius: "var(--r-sm)", whiteSpace: "nowrap", transition: "background var(--dur-fast)" }}
            onMouseEnter={(e) => e.currentTarget.style.background = "var(--gold-400)"}
            onMouseLeave={(e) => e.currentTarget.style.background = "var(--accent)"}>{t.cta}</a>
        </div>
      </nav>
    );
  }

  /* ---------------- FOOTER ---------------- */
  function Footer({ t }) {
    const c = t.contact;
    return (
      <footer style={{ background: "var(--ink-900)", padding: "64px 0 40px", borderTop: "1px solid var(--line-on-ink)" }}>
        <div className="container">
          <div className="vk-footer-top" style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: "40px", paddingBottom: "40px", borderBottom: "1px solid var(--line-on-ink)" }}>
            <div style={{ maxWidth: "30ch" }}>
              <div style={{ fontFamily: "var(--font-serif)", fontSize: "22px", color: "var(--text-on-ink)" }}>{t.brand.name}</div>
              <div style={{ width: "40px", height: "1px", background: "var(--accent)", margin: "12px 0" }} />
              <p style={{ fontSize: "var(--t-body-s)", color: "var(--text-on-ink-muted)", margin: 0, lineHeight: 1.5 }}>{t.footer.tagline}</p>
            </div>
            <div>
              <div style={ftCol}>{t.footer.colPages}</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {t.nav.map((n) => (
                  <a key={n.id} href={n.href} style={ftLink}
                    onMouseEnter={(e) => e.currentTarget.style.color = "var(--accent-on-ink)"}
                    onMouseLeave={(e) => e.currentTarget.style.color = "var(--text-on-ink-muted)"}>{n.label}</a>
                ))}
              </div>
            </div>
            <div>
              <div style={ftCol}>{t.footer.colContact}</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <a href={"mailto:" + c.email} style={ftLink}>{c.email}</a>
                <a href={"tel:" + c.phone.replace(/\s/g, "")} style={ftLink}>{c.phone}</a>
                <span style={{ ...ftLink, cursor: "default" }}>{c.location}</span>
              </div>
            </div>
            <div>
              <div style={ftCol}>{t.footer.colFollow}</div>
              <a href="#" style={ftLink}
                onMouseEnter={(e) => e.currentTarget.style.color = "var(--accent-on-ink)"}
                onMouseLeave={(e) => e.currentTarget.style.color = "var(--text-on-ink-muted)"}>LinkedIn ↗</a>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", gap: "20px", flexWrap: "wrap", marginTop: "28px" }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.08em", color: "var(--text-on-ink-faint)" }}>{t.footer.copy}</span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-on-ink-faint)" }}>{t.brand.role} · EMEA & MENA</span>
          </div>
        </div>
      </footer>
    );
  }

  const ftCol = { fontFamily: "var(--font-mono)", fontSize: "10.5px", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--accent-on-ink)", marginBottom: "16px" };
  const ftLink = { fontFamily: "var(--font-sans)", fontSize: "var(--t-body-s)", color: "var(--text-on-ink-muted)", transition: "color var(--dur-fast)" };

  /* Shared language hook: reads ?lang= or localStorage, persists both. */
  function useLang() {
    const [lang, setLang] = useState(() => {
      const q = new URLSearchParams(location.search).get("lang");
      return q || localStorage.getItem("vk-lang") || "en";
    });
    useEffect(() => {
      localStorage.setItem("vk-lang", lang);
      document.documentElement.lang = lang;
    }, [lang]);
    return [lang, setLang];
  }

  window.VKWeb = window.VKWeb || {};
  window.VKWeb.Chrome = { Nav, Footer, useLang };
})();
