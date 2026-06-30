/* Projects (Applied AI) · Insights (blog) · Global Footprint map
   exposes window.VKWeb.Extra */
(function () {
  const { useState, useEffect, useRef } = React;
  const { Reveal, Heading } = window.VKWeb;

  const STATUS = {
    "Active": "#1F8A5B", "Aktif": "#1F8A5B",
    "In development": "#C18A2E", "Geliştiriliyor": "#C18A2E",
    "Coming soon": "#3C6FB0", "Yakında": "#3C6FB0",
  };

  const q = (lang) => (lang ? "&lang=" + lang : "");

  /* "View all →" link */
  function MoreLink({ href, label, onInk }) {
    return (
      <div style={{ marginTop: "40px", display: "flex", justifyContent: "flex-end" }}>
        <a href={href} style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontFamily: "var(--font-sans)", fontSize: "var(--t-body-s)", fontWeight: 600, color: onInk ? "var(--accent-on-ink)" : "var(--accent-strong)" }}>{label} <span aria-hidden="true">→</span></a>
      </div>
    );
  }

  /* ---------------- PROJECTS (Applied AI) ---------------- */
  function Projects({ t, lang, limit, page }) {
    const p = t.projects;
    const imgs = window.SITE.projectImages;
    const items = limit ? p.items.slice(0, limit) : p.items;
    return (
      <section id="projects" style={{ background: "var(--paper)", padding: page ? "140px 0 var(--section-y)" : "var(--section-y) 0", borderTop: page ? "none" : "1px solid var(--line)" }}>
        <div className="container">
          <Reveal><Heading eyebrow={p.eyebrow} title={p.title} lede={p.lede} maxWidth="22ch" /></Reveal>
          <div className="vk-projects-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "18px", marginTop: "40px" }}>
            {items.map((it, i) => {
              const dot = STATUS[it.status] || "var(--slate-400)";
              return (
                <Reveal key={it.name} delay={(i % 3) * 80}>
                  <a href={"project.html?id=" + i + q(lang)} className="vk-proj-card" style={{ height: "100%", display: "flex", flexDirection: "column", background: "var(--ink-800)", border: "1px solid var(--line-on-ink)", borderRadius: "var(--r-md)", overflow: "hidden", boxShadow: "var(--shadow-md)", transition: "transform var(--dur) var(--ease-out), box-shadow var(--dur) var(--ease-out), border-color var(--dur)" }}>
                    {/* header image rectangle */}
                    <div style={{ position: "relative", height: "156px", overflow: "hidden" }}>
                      <div className="vk-proj-img" aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: `url(${imgs[i % imgs.length]})`, backgroundSize: "cover", backgroundPosition: "center", filter: "grayscale(1) brightness(0.7) contrast(1.05)", transition: "transform 1.1s var(--ease-out)" }} />
                      <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(10,20,33,0.30) 0%, rgba(10,20,33,0.42) 45%, rgba(14,27,46,0.97) 100%)" }} />
                      <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "radial-gradient(120% 90% at 100% 0%, rgba(190,150,87,0.26) 0%, transparent 60%)" }} />
                      <span style={{ position: "absolute", top: "14px", left: "18px", fontFamily: "var(--font-mono)", fontSize: "var(--t-micro)", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--gold-200)", textShadow: "0 1px 6px rgba(0,0,0,0.5)" }}>{it.kind}</span>
                      <span style={{ position: "absolute", top: "13px", right: "16px", display: "inline-flex", alignItems: "center", gap: "7px", fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-on-ink-muted)", textShadow: "0 1px 6px rgba(0,0,0,0.5)" }}>
                        <span style={{ width: "7px", height: "7px", borderRadius: "999px", background: dot, boxShadow: "0 0 0 2px rgba(255,255,255,0.2)" }} />{it.status}
                      </span>
                      <h3 style={{ position: "absolute", left: "20px", right: "20px", bottom: "16px", fontFamily: "var(--font-serif)", fontSize: "1.7rem", lineHeight: 1.06, letterSpacing: "-0.015em", color: "var(--text-on-ink)", margin: 0, textShadow: "0 2px 12px rgba(0,0,0,0.5)" }}>{it.name}</h3>
                    </div>
                    {/* content */}
                    <div style={{ display: "flex", flexDirection: "column", flex: 1, padding: "20px 24px 22px", background: "var(--ink-800)" }}>
                      <p style={{ fontSize: "var(--t-body-s)", lineHeight: 1.6, color: "var(--text-on-ink-muted)", margin: "0 0 20px", flex: 1 }}>{it.body}</p>
                      <span className="vk-proj-link"
                        style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontFamily: "var(--font-sans)", fontSize: "var(--t-body-s)", fontWeight: 600, color: "var(--accent-on-ink)", borderTop: "1px solid var(--line-on-ink)", paddingTop: "16px" }}>
                        {p.details} <span aria-hidden="true">→</span>
                      </span>
                    </div>
                  </a>
                </Reveal>
              );
            })}
          </div>
          {limit && !page && limit < p.items.length && <MoreLink href={"projects.html" + (lang ? "?lang=" + lang : "")} label={p.all} />}
        </div>
      </section>
    );
  }

  /* ---------------- INSIGHTS (blog) ---------------- */
  function Insights({ t, lang, limit, page }) {
    const ins = t.insights;
    const imgs = window.SITE.insightImages;
    const items = limit ? ins.items.slice(0, limit) : ins.items;
    return (
      <section id="insights" style={{ position: "relative", overflow: "hidden", background: "var(--ink-800)", padding: page ? "140px 0 var(--section-y)" : "var(--section-y) 0" }}>
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=70)", backgroundSize: "cover", backgroundPosition: "top center", filter: "grayscale(1) brightness(0.6) contrast(1.08)", opacity: 0.5 }} />
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(10,20,33,0.84) 0%, rgba(10,20,33,0.6) 45%, rgba(10,20,33,0.88) 100%)" }} />
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, opacity: 0.5, backgroundImage: "linear-gradient(rgba(236,240,244,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(236,240,244,0.035) 1px, transparent 1px)", backgroundSize: "72px 72px", maskImage: "radial-gradient(90% 80% at 30% 25%, #000, transparent 80%)", WebkitMaskImage: "radial-gradient(90% 80% at 30% 25%, #000, transparent 80%)" }} />
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "radial-gradient(55% 55% at 0% 0%, rgba(190,150,87,0.12) 0%, transparent 55%)" }} />
        <div className="container" style={{ position: "relative" }}>
          <Reveal><Heading eyebrow={ins.eyebrow} title={ins.title} lede={ins.lede} onInk maxWidth="22ch" /></Reveal>
          <div className="vk-insights-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "18px", marginTop: "40px" }}>
            {items.map((it, i) => (
              <Reveal key={i} delay={(i % 3) * 70}>
                <a href={"article.html?id=" + i + q(lang)} className="vk-insight"
                  style={{ display: "flex", flexDirection: "column", height: "100%", background: "var(--ink-900)", border: "1px solid var(--line-on-ink)", borderRadius: "var(--r-md)", overflow: "hidden", transition: "transform var(--dur) var(--ease-out), border-color var(--dur)" }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.borderColor = "var(--line-accent)"; e.currentTarget.querySelector(".vk-in-t").style.color = "var(--accent-on-ink)"; const im = e.currentTarget.querySelector(".vk-in-img"); if (im) im.style.transform = "scale(1.06)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.borderColor = "var(--line-on-ink)"; e.currentTarget.querySelector(".vk-in-t").style.color = "var(--text-on-ink)"; const im = e.currentTarget.querySelector(".vk-in-img"); if (im) im.style.transform = "scale(1)"; }}>
                  <div style={{ position: "relative", height: "132px", overflow: "hidden" }}>
                    <div className="vk-in-img" aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: `url(${imgs[i % imgs.length]})`, backgroundSize: "cover", backgroundPosition: "center", filter: "grayscale(1) brightness(0.72) contrast(1.05)", transition: "transform 1.1s var(--ease-out)" }} />
                    <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(10,20,33,0.26) 0%, rgba(10,20,33,0.36) 55%, rgba(10,20,33,0.86) 100%)" }} />
                    <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "radial-gradient(120% 90% at 100% 0%, rgba(190,150,87,0.22) 0%, transparent 60%)" }} />
                    <div style={{ position: "absolute", left: "18px", bottom: "12px", display: "flex", gap: "10px", fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#fff", textShadow: "0 1px 6px rgba(0,0,0,0.5)" }}>
                      <span>{it.tag}</span><span style={{ opacity: 0.75 }}>· {it.read}</span>
                    </div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", flex: 1, padding: "22px 22px 24px" }}>
                    <h3 className="vk-in-t" style={{ fontFamily: "var(--font-serif)", fontSize: "1.3rem", lineHeight: 1.18, letterSpacing: "-0.01em", color: "var(--text-on-ink)", margin: "0 0 10px", transition: "color var(--dur-fast)" }}>{it.title}</h3>
                    <p style={{ fontSize: "var(--t-body-s)", lineHeight: 1.6, color: "var(--text-on-ink-muted)", margin: "0 0 20px", flex: 1 }}>{it.text}</p>
                    <span style={{ fontFamily: "var(--font-sans)", fontSize: "var(--t-body-s)", fontWeight: 600, color: "var(--accent-on-ink)" }}>{ins.readMore} →</span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
          {limit && !page && limit < ins.items.length && <MoreLink href={"insights.html" + (lang ? "?lang=" + lang : "")} label={ins.all} onInk />}
        </div>
      </section>
    );
  }

  /* ---------------- GLOBAL FOOTPRINT (Leaflet) ---------------- */
  function Footprint({ t, footprint, lang }) {
    const f = t.footprintHead;
    const mapEl = useRef(null);
    const mapRef = useRef(null);
    const [sel, setSel] = useState(null);

    useEffect(() => {
      if (!mapEl.current || !window.L || mapRef.current) return;
      const L = window.L;
      const map = L.map(mapEl.current, { scrollWheelZoom: false, zoomControl: true, attributionControl: false }).setView([41, 26], 3);
      L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", { subdomains: "abcd", maxZoom: 10 }).addTo(map);
      footprint.forEach((c, idx) => {
        const m = L.circleMarker([c.lat, c.lng], {
          radius: 7, color: "#D2B27D", weight: 2, fillColor: "#BE9657", fillOpacity: 0.85,
        }).addTo(map);
        m.on("click", () => { setSel(idx); m.setStyle({ radius: 9 }); });
        m.on("mouseover", () => m.setStyle({ fillOpacity: 1, radius: 9 }));
        m.on("mouseout", () => m.setStyle({ fillOpacity: 0.85, radius: 7 }));
      });
      mapRef.current = map;
      setTimeout(() => map.invalidateSize(), 200);
    }, []);

    const c = sel != null ? footprint[sel] : null;
    const name = c ? (lang === "tr" ? c.name_tr : c.name_en) : null;
    const projects = c ? (lang === "tr" ? c.projects_tr : c.projects_en) : [];

    return (
      <section id="footprint" style={{ background: "var(--ink-900)", padding: "var(--section-y) 0", borderTop: "1px solid var(--line-on-ink)" }}>
        <div className="container">
          <Reveal><Heading eyebrow={f.eyebrow} title={f.title} lede={f.lede} onInk maxWidth="20ch" ledeWidth="48ch" /></Reveal>
          <div className="vk-map-grid" style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: "28px", marginTop: "48px", alignItems: "stretch" }}>
            <Reveal>
              <div ref={mapEl} className="vk-map" style={{ height: "100%", minHeight: "440px", borderRadius: "var(--r-md)", overflow: "hidden", border: "1px solid var(--line-on-ink)" }} />
            </Reveal>
            <Reveal delay={120}>
              <div style={{ height: "100%", minHeight: "440px", background: "var(--ink-700)", border: "1px solid var(--line-on-ink)", borderRadius: "var(--r-md)", padding: "30px", display: "flex", flexDirection: "column" }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "10.5px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--accent-on-ink)", marginBottom: "16px" }}>
                  {c ? name : f.hint}
                </div>
                {c ? (
                  <>
                    <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.9rem", color: "var(--text-on-ink)", margin: "0 0 20px" }}>{name}</h3>
                    <ul style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                      {projects.map((pr, i) => (
                        <li key={i} style={{ display: "flex", gap: "12px", fontSize: "var(--t-body-s)", lineHeight: 1.45, color: "var(--text-on-ink-muted)" }}>
                          <span style={{ color: "var(--accent-on-ink)", flexShrink: 0 }}>—</span>{pr}
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", flex: 1, gap: "10px" }}>
                    <div style={{ fontFamily: "var(--font-serif)", fontSize: "3.4rem", lineHeight: 1, color: "var(--accent-on-ink)" }}>16</div>
                    <p style={{ fontSize: "var(--t-body-s)", color: "var(--text-on-ink-muted)", margin: 0, maxWidth: "26ch" }}>{f.lede}</p>
                  </div>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    );
  }

  window.VKWeb.Extra = { Projects, Insights, Footprint };
})();
