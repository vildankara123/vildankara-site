/* Approach / Method band (cyclical) — exposes window.VKWeb.ApproachBand */
(function () {
  const { Reveal, Heading } = window.VKWeb;

  /* SVG cycle: faint ring + clockwise gold arc + 3 haloed nodes, labels outside. */
  function CycleDiagram({ steps }) {
    const cx = 220, cy = 212, R = 122;
    const pt = (deg, r = R) => [cx + r * Math.cos(deg * Math.PI / 180), cy + r * Math.sin(deg * Math.PI / 180)];
    const nodes = [pt(270), pt(30), pt(150)]; // top, bottom-right, bottom-left
    const NR = 46;
    const labelPos = [
      { x: cx, y: nodes[0][1] - NR - 18, anchor: "middle" },
      { x: nodes[1][0], y: nodes[1][1] + NR + 28, anchor: "middle" },
      { x: nodes[2][0], y: nodes[2][1] + NR + 28, anchor: "middle" },
    ];
    const start = pt(305), end = pt(235);
    return (
      <svg viewBox="0 0 440 400" style={{ width: "100%", height: "auto", maxWidth: "460px" }} role="img" aria-label="Continuous delivery cycle">
        <defs>
          <marker id="vkArrow" markerWidth="12" markerHeight="12" refX="5.5" refY="5.5" orient="auto">
            <path d="M0,0 L11,5.5 L0,11 Z" fill="#BE9657" />
          </marker>
          <radialGradient id="vkNode" cx="38%" cy="30%" r="80%">
            <stop offset="0%" stopColor="#22344C" />
            <stop offset="100%" stopColor="#0A1421" />
          </radialGradient>
        </defs>
        {/* faint base ring */}
        <circle cx={cx} cy={cy} r={R} fill="none" stroke="#D7D2C6" strokeWidth="1" opacity="0.7" />
        {/* clockwise gold progress arc with arrowhead */}
        <path d={`M ${start[0].toFixed(1)} ${start[1].toFixed(1)} A ${R} ${R} 0 1 1 ${end[0].toFixed(1)} ${end[1].toFixed(1)}`}
          fill="none" stroke="#BE9657" strokeWidth="2.5" strokeLinecap="round" markerEnd="url(#vkArrow)" />
        {/* center caption */}
        <text x={cx} y={cy - 4} textAnchor="middle" fontFamily="var(--font-mono)" fontSize="10.5" letterSpacing="2.5" fill="#8A6531">CONTINUOUS</text>
        <text x={cx} y={cy + 13} textAnchor="middle" fontFamily="var(--font-mono)" fontSize="10.5" letterSpacing="2.5" fill="#A9B5C0">CYCLE</text>
        {/* nodes */}
        {nodes.map((n, i) => (
          <g key={i}>
            <circle cx={n[0]} cy={n[1]} r={NR + 7} fill="none" stroke="#DCC8A2" strokeWidth="1" opacity="0.55" />
            <circle cx={n[0]} cy={n[1]} r={NR} fill="url(#vkNode)" stroke="#BE9657" strokeWidth="1.5" />
            <text x={n[0]} y={n[1] + 11} textAnchor="middle" fontFamily="var(--font-serif)" fontSize="30" fill="#E7D6B6">{steps[i].n}</text>
            <text x={labelPos[i].x} y={labelPos[i].y} textAnchor={labelPos[i].anchor} fontFamily="var(--font-sans)" fontSize="15" fontWeight="600" letterSpacing="0.01em" fill="#0E1B2E">{steps[i].title}</text>
          </g>
        ))}
      </svg>
    );
  }

  function Approach({ t }) {
    const a = t.approach;
    return (
      <section id="approach" style={{ background: "var(--mist-50)", padding: "var(--section-y) 0", borderTop: "1px solid var(--line)" }}>
        <div className="container vk-approach-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.05fr", gap: "64px", alignItems: "stretch" }}>
          <Reveal className="vk-approach-photo" style={{ display: "flex" }}>
            <div style={{ position: "relative", width: "100%", minHeight: "clamp(380px, 50vh, 600px)", borderRadius: "var(--r-md)", overflow: "hidden", border: "1px solid var(--line-strong)", boxShadow: "var(--shadow-lg)", background: "var(--ink-900)" }}>
              <video autoPlay muted loop playsInline preload="auto" poster="https://assets.mixkit.co/videos/4809/4809-thumb-720-0.jpg"
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", filter: "contrast(1.03) brightness(0.96) saturate(0.92)" }}>
                <source src="https://assets.mixkit.co/videos/4809/4809-720.mp4" type="video/mp4" />
              </video>
              <div aria-hidden="true" style={{ position: "absolute", inset: 0, mixBlendMode: "soft-light", background: "linear-gradient(150deg, rgba(214,178,125,0.55) 0%, rgba(190,150,87,0.30) 60%, transparent 100%)" }} />
              <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "radial-gradient(80% 70% at 100% 0%, rgba(190,150,87,0.16) 0%, transparent 58%)" }} />
              <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(10,20,33,0.06) 60%, rgba(10,20,33,0.4) 100%)" }} />
            </div>
          </Reveal>
          <div>
            <Reveal><Heading eyebrow={a.eyebrow} title={a.title} lede={a.lede} maxWidth="18ch" ledeWidth="46ch" /></Reveal>
            <div style={{ marginTop: "36px" }}>
              {a.steps.map((s, i) => (
                <Reveal key={s.n} delay={i * 80}>
                  <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "24px", padding: "22px 0", borderTop: "1px solid var(--line)" }}>
                    <span style={{ fontFamily: "var(--font-serif)", fontSize: "1.9rem", lineHeight: 1, color: "var(--accent-strong)" }}>{s.n}</span>
                    <div>
                      <h3 style={{ fontFamily: "var(--font-sans)", fontSize: "1.0625rem", fontWeight: 600, letterSpacing: "0.01em", color: "var(--text-strong)", margin: "4px 0 8px" }}>{s.title}</h3>
                      <p style={{ fontSize: "var(--t-body-s)", lineHeight: 1.6, color: "var(--text-muted)", margin: 0, maxWidth: "46ch" }}>{s.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  window.VKWeb = window.VKWeb || {};
  window.VKWeb.ApproachBand = { Approach };
})();
