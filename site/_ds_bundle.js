/* @ds-bundle: {"format":3,"namespace":"VildanKaraKayacanAdvisoryBrandSystem_6a049d","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Field","sourcePath":"components/core/Field.jsx"},{"name":"Quote","sourcePath":"components/core/Quote.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"},{"name":"ServiceCard","sourcePath":"components/core/ServiceCard.jsx"},{"name":"StatBlock","sourcePath":"components/core/StatBlock.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"}],"sourceHashes":{"components/core/Button.jsx":"5219f6512193","components/core/Eyebrow.jsx":"47a8636d7403","components/core/Field.jsx":"82ae42cf897f","components/core/Quote.jsx":"e378eb34b56a","components/core/SectionHeading.jsx":"4c64552791f0","components/core/ServiceCard.jsx":"e540614cdd5f","components/core/StatBlock.jsx":"7b8e6c3c7f55","components/core/Tag.jsx":"6d88072174f3","sections-top.jsx":"7987064036a2","ui_kits/website/app-about.jsx":"a3c276a5c813","ui_kits/website/app-article.jsx":"f441604a3025","ui_kits/website/app-home.jsx":"40a5aec6a176","ui_kits/website/app-insights.jsx":"ae6771b74826","ui_kits/website/app-project.jsx":"984871d70f11","ui_kits/website/app-projects.jsx":"e296985450a2","ui_kits/website/chrome.jsx":"873a941d8bdb","ui_kits/website/data.js":"5cec7949931f","ui_kits/website/helpers.jsx":"82f2db5a0474","ui_kits/website/page-about.jsx":"455974b07b43","ui_kits/website/page-detail.jsx":"5f4268df6b1d","ui_kits/website/sections-approach.jsx":"09d329c3c16e","ui_kits/website/sections-end.jsx":"ec4c2e823e01","ui_kits/website/sections-extra.jsx":"bc5b3aa272e9","ui_kits/website/sections-mid.jsx":"1a7c4b8213a4","ui_kits/website/sections-top.jsx":"6095a01f8064"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.VildanKaraKayacanAdvisoryBrandSystem_6a049d = window.VildanKaraKayacanAdvisoryBrandSystem_6a049d || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — the brand's primary action. Sentence case, sharp corners,
 * calm hover (darken) and press (1px nudge). Three variants.
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  type = "button",
  disabled = false,
  trailingArrow = false,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: "9px 16px",
      fontSize: "13px"
    },
    md: {
      padding: "13px 24px",
      fontSize: "15px"
    },
    lg: {
      padding: "16px 32px",
      fontSize: "16px"
    }
  };
  const base = {
    fontFamily: "var(--font-sans)",
    fontWeight: 500,
    letterSpacing: "0.005em",
    lineHeight: 1,
    border: "1px solid transparent",
    borderRadius: "var(--r-sm)",
    cursor: disabled ? "not-allowed" : "pointer",
    display: "inline-flex",
    alignItems: "center",
    gap: "10px",
    transition: "background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out)",
    textDecoration: "none",
    whiteSpace: "nowrap",
    opacity: disabled ? 0.45 : 1,
    ...sizes[size]
  };
  const variants = {
    primary: {
      background: "var(--ink-800)",
      color: "var(--text-on-ink)",
      borderColor: "var(--ink-800)"
    },
    secondary: {
      background: "transparent",
      color: "var(--text-strong)",
      borderColor: "var(--line-strong)"
    },
    accent: {
      background: "var(--accent)",
      color: "var(--on-accent)",
      borderColor: "var(--accent)"
    },
    ghost: {
      background: "transparent",
      color: "var(--text-strong)",
      borderColor: "transparent",
      padding: "8px 4px"
    }
  };
  const hover = {
    primary: (e, on) => {
      e.currentTarget.style.background = on ? "var(--ink-900)" : "var(--ink-800)";
    },
    secondary: (e, on) => {
      e.currentTarget.style.background = on ? "var(--mist-50)" : "transparent";
      e.currentTarget.style.borderColor = on ? "var(--ink-800)" : "var(--line-strong)";
    },
    accent: (e, on) => {
      e.currentTarget.style.background = on ? "var(--accent-strong)" : "var(--accent)";
      e.currentTarget.style.borderColor = on ? "var(--accent-strong)" : "var(--accent)";
    },
    ghost: (e, on) => {
      e.currentTarget.style.color = on ? "var(--accent-strong)" : "var(--text-strong)";
    }
  };
  const handlers = disabled ? {} : {
    onMouseEnter: e => hover[variant](e, true),
    onMouseLeave: e => {
      hover[variant](e, false);
      e.currentTarget.style.transform = "translateY(0)";
    },
    onMouseDown: e => {
      e.currentTarget.style.transform = "translateY(1px)";
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = "translateY(0)";
    }
  };
  const content = /*#__PURE__*/React.createElement(React.Fragment, null, children, trailingArrow && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      color: variant === "accent" ? "var(--on-accent)" : "var(--accent-strong)",
      fontSize: "1.1em"
    }
  }, "\u2192"));
  const merged = {
    ...base,
    ...variants[variant],
    ...style
  };
  if (href && !disabled) {
    return /*#__PURE__*/React.createElement("a", _extends({
      href: href,
      style: merged,
      onClick: onClick
    }, handlers, rest), content);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    style: merged,
    onClick: onClick,
    disabled: disabled
  }, handlers, rest), content);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
/**
 * Eyebrow — the brand's signature kicker: mono, uppercase, wide-tracked,
 * preceded by a short gold tick. Sits above headlines.
 */
function Eyebrow({
  children,
  tick = true,
  onInk = false,
  style = {}
}) {
  const color = onInk ? "var(--gold-400)" : "var(--accent-strong)";
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--t-micro)",
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      color,
      fontWeight: 500,
      display: "inline-flex",
      alignItems: "center",
      gap: "12px",
      ...style
    }
  }, tick && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: "28px",
      height: "1px",
      background: color,
      display: "inline-block"
    }
  }), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/Field.jsx
try { (() => {
/**
 * Field — labeled text input / textarea for the contact form.
 * Mono label, hairline underline that turns gold on focus.
 */
function Field({
  label,
  name,
  type = "text",
  placeholder,
  textarea = false,
  rows = 4,
  required = false,
  style = {}
}) {
  const [focus, setFocus] = React.useState(false);
  const control = {
    width: "100%",
    fontFamily: "var(--font-sans)",
    fontSize: "var(--t-body)",
    color: "var(--text-strong)",
    background: "transparent",
    border: "none",
    borderBottom: `1.5px solid ${focus ? "var(--accent)" : "var(--line-strong)"}`,
    padding: "10px 0",
    outline: "none",
    transition: "border-color var(--dur-fast) var(--ease-out)",
    resize: "vertical"
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--t-micro)",
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: focus ? "var(--accent-strong)" : "var(--text-muted)",
      transition: "color var(--dur-fast) var(--ease-out)"
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--accent)"
    }
  }, " *")), textarea ? /*#__PURE__*/React.createElement("textarea", {
    name: name,
    rows: rows,
    placeholder: placeholder,
    required: required,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: control
  }) : /*#__PURE__*/React.createElement("input", {
    name: name,
    type: type,
    placeholder: placeholder,
    required: required,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: control
  }));
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Field.jsx", error: String((e && e.message) || e) }); }

// components/core/Quote.jsx
try { (() => {
/**
 * Quote — editorial pull quote / testimonial. Large serif, leading gold
 * rule, mono attribution. Works on paper or ink.
 */
function Quote({
  children,
  author,
  role,
  onInk = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      display: "flex",
      flexDirection: "column",
      gap: "24px",
      maxWidth: "26ch",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: "44px",
      height: "1px",
      background: "var(--accent)"
    }
  }), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: "var(--font-serif)",
      fontSize: "var(--t-display-m)",
      lineHeight: 1.22,
      letterSpacing: "var(--ls-display)",
      fontStyle: "italic",
      fontWeight: 300,
      color: onInk ? "var(--text-on-ink)" : "var(--text-strong)"
    }
  }, children), (author || role) && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--t-caption)",
      letterSpacing: "0.06em",
      color: onInk ? "var(--text-on-ink-muted)" : "var(--text-muted)"
    }
  }, author && /*#__PURE__*/React.createElement("span", {
    style: {
      color: onInk ? "var(--gold-400)" : "var(--accent-strong)"
    }
  }, author), author && role && " · ", role));
}
Object.assign(__ds_scope, { Quote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Quote.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeading.jsx
try { (() => {
/**
 * SectionHeading — the canonical eyebrow → headline → lede stack.
 * Centerable; honours the brand measure on the lede.
 */
function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "left",
  onInk = false,
  maxWidth = "20ch",
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "18px",
      alignItems: align === "center" ? "center" : "flex-start",
      textAlign: align,
      ...style
    }
  }, eyebrow && /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    onInk: onInk
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: "var(--t-display-m)",
      lineHeight: "var(--lh-snug)",
      letterSpacing: "var(--ls-display)",
      color: onInk ? "var(--text-on-ink)" : "var(--text-strong)",
      maxWidth,
      margin: 0
    }
  }, title), lede && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--t-body-l)",
      lineHeight: 1.55,
      color: onInk ? "var(--text-on-ink-muted)" : "var(--text-muted)",
      maxWidth: "var(--measure)",
      margin: 0
    }
  }, lede));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/core/ServiceCard.jsx
try { (() => {
/**
 * ServiceCard — numbered offer card. Paper surface, hairline border,
 * gold index, serif title. Calm lift on hover when interactive.
 */
function ServiceCard({
  index,
  title,
  children,
  tags = [],
  href,
  style = {}
}) {
  const [hover, setHover] = React.useState(false);
  const interactive = Boolean(href);
  return /*#__PURE__*/React.createElement("a", {
    href: href || undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "16px",
      background: "var(--surface-card)",
      border: "1px solid var(--line)",
      borderRadius: "var(--r-md)",
      padding: "32px 30px",
      textDecoration: "none",
      cursor: interactive ? "pointer" : "default",
      transition: "transform var(--dur) var(--ease-out), box-shadow var(--dur) var(--ease-out), border-color var(--dur) var(--ease-out)",
      transform: interactive && hover ? "translateY(-4px)" : "translateY(0)",
      boxShadow: interactive && hover ? "var(--shadow-md)" : "var(--shadow-sm)",
      borderColor: interactive && hover ? "var(--line-accent)" : "var(--line)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "13px",
      letterSpacing: "0.14em",
      color: "var(--accent-strong)"
    }
  }, String(index).padStart(2, "0")), interactive && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      color: "var(--accent-strong)",
      fontSize: "18px",
      transition: "transform var(--dur) var(--ease-out)",
      transform: hover ? "translateX(3px)" : "none"
    }
  }, "\u2192")), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: "var(--t-head-m)",
      lineHeight: 1.15,
      letterSpacing: "var(--ls-head)",
      color: "var(--text-strong)",
      margin: 0
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--t-body-s)",
      lineHeight: 1.6,
      color: "var(--text-muted)",
      margin: 0
    }
  }, children), tags.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "8px",
      marginTop: "4px"
    }
  }, tags.map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "10px",
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      color: "var(--text-faint)",
      border: "1px solid var(--line)",
      borderRadius: "var(--r-pill)",
      padding: "4px 10px"
    }
  }, t))));
}
Object.assign(__ds_scope, { ServiceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ServiceCard.jsx", error: String((e && e.message) || e) }); }

// components/core/StatBlock.jsx
try { (() => {
/**
 * StatBlock — a figure + label pair for credibility rows.
 * Serif figure, mono label, optional gold rule above.
 */
function StatBlock({
  figure,
  label,
  onInk = false,
  rule = true,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      ...style
    }
  }, rule && /*#__PURE__*/React.createElement("span", {
    style: {
      width: "32px",
      height: "1px",
      background: "var(--accent)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: "var(--t-display-m)",
      lineHeight: 1,
      letterSpacing: "var(--ls-display)",
      color: onInk ? "var(--text-on-ink)" : "var(--text-strong)"
    }
  }, (function () {
    var m = typeof figure === "string" && figure.match(/^(Up to)\s+(.+)$/i);
    if (!m) return figure;
    return [/*#__PURE__*/React.createElement("span", {
      key: "pre",
      style: {
        display: "block",
        fontFamily: "var(--font-mono)",
        fontSize: "var(--t-micro)",
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        color: onInk ? "var(--text-on-ink-muted)" : "var(--text-muted)",
        marginBottom: "4px"
      }
    }, m[1]), m[2]];
  })()), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--t-micro)",
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: onInk ? "var(--text-on-ink-muted)" : "var(--text-muted)"
    }
  }, label));
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
/**
 * Tag — mono, uppercase pill for capabilities and metadata
 * (SAP · S/4HANA, Generative AI). Hairline by default; "solid" inverts.
 */
function Tag({
  children,
  variant = "outline",
  style = {}
}) {
  const variants = {
    outline: {
      background: "transparent",
      color: "var(--text-body)",
      border: "1px solid var(--line-strong)"
    },
    solid: {
      background: "var(--ink-800)",
      color: "var(--text-on-ink)",
      border: "1px solid var(--ink-800)"
    },
    accent: {
      background: "var(--gold-100)",
      color: "var(--gold-700)",
      border: "1px solid var(--gold-200)"
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--t-micro)",
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      padding: "6px 13px",
      borderRadius: "var(--r-pill)",
      display: "inline-flex",
      alignItems: "center",
      lineHeight: 1,
      ...variants[variant],
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// sections-top.jsx
try { (() => {
/* Hero · CredBar — exposes window.VKWeb.Top */
(function () {
  const DS = window.VildanKaraKayacanAdvisoryBrandSystem_6a049d;
  const {
    Reveal
  } = window.VKWeb;

  /* ---------------- HERO ---------------- */
  function Hero({
    t,
    img,
    onNav
  }) {
    const h = t.hero;
    return /*#__PURE__*/React.createElement("header", {
      id: "top",
      style: {
        position: "relative",
        background: "var(--bg-ink)",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      "aria-hidden": "true",
      style: {
        position: "absolute",
        inset: 0,
        backgroundImage: `url(${img.boardroom})`,
        backgroundSize: "cover",
        backgroundPosition: "68% center"
      }
    }), /*#__PURE__*/React.createElement("div", {
      "aria-hidden": "true",
      style: {
        position: "absolute",
        inset: 0,
        background: "linear-gradient(99deg, rgba(8,16,27,0.93) 0%, rgba(9,18,30,0.82) 28%, rgba(10,20,33,0.58) 50%, rgba(10,20,33,0.28) 72%, rgba(12,24,40,0.12) 100%)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      "aria-hidden": "true",
      style: {
        position: "absolute",
        inset: 0,
        background: "linear-gradient(180deg, rgba(8,16,27,0.50) 0%, transparent 24%, transparent 60%, rgba(8,16,27,0.86) 100%)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      "aria-hidden": "true",
      style: {
        position: "absolute",
        inset: 0,
        background: "radial-gradient(66% 60% at 3% 94%, rgba(190,150,87,0.26) 0%, transparent 56%), radial-gradient(56% 50% at 98% 6%, rgba(210,178,125,0.18) 0%, transparent 52%)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      "aria-hidden": "true",
      style: {
        position: "absolute",
        inset: 0,
        opacity: 0.4,
        backgroundImage: "linear-gradient(rgba(236,240,244,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(236,240,244,0.04) 1px, transparent 1px)",
        backgroundSize: "88px 88px",
        maskImage: "linear-gradient(105deg, #000 0%, #000 34%, transparent 60%)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "container",
      style: {
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        minHeight: "100vh",
        paddingTop: "108px",
        paddingBottom: "96px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "760px",
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow eyebrow--on-ink"
    }, h.eyebrow)), /*#__PURE__*/React.createElement(Reveal, {
      delay: 60
    }, /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: "var(--font-serif)",
        fontSize: "clamp(2.7rem, 1.1rem + 5vw, 5rem)",
        lineHeight: 1.04,
        letterSpacing: "-0.024em",
        color: "var(--text-on-ink)",
        margin: "26px 0 0"
      }
    }, h.title.map((line, i) => /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        display: "block",
        fontStyle: i === 1 ? "italic" : "normal",
        color: i === 1 ? "var(--accent-on-ink)" : "var(--text-on-ink)",
        fontFamily: "Verdana"
      }
    }, line)))), /*#__PURE__*/React.createElement(Reveal, {
      delay: 120
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: "var(--t-body-l)",
        lineHeight: 1.62,
        color: "var(--text-on-ink-muted)",
        maxWidth: "34rem",
        margin: "30px 0 0"
      }
    }, h.lede)), /*#__PURE__*/React.createElement(Reveal, {
      delay: 180
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: "14px",
        flexWrap: "wrap",
        marginTop: "38px"
      }
    }, /*#__PURE__*/React.createElement(DS.Button, {
      variant: "accent",
      trailingArrow: true,
      href: "#contact",
      onClick: e => {
        e.preventDefault();
        onNav("contact");
      }
    }, h.ctaPrimary), /*#__PURE__*/React.createElement("a", {
      href: "#services",
      onClick: e => {
        e.preventDefault();
        onNav("services");
      },
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: "15px",
        fontWeight: 500,
        color: "var(--text-on-ink)",
        background: "transparent",
        border: "1px solid rgba(236,240,244,0.32)",
        borderRadius: "var(--r-sm)",
        padding: "13px 24px",
        display: "inline-flex",
        alignItems: "center",
        gap: "10px",
        transition: "border-color var(--dur-fast), background var(--dur-fast)"
      },
      onMouseEnter: e => {
        e.currentTarget.style.borderColor = "var(--accent-on-ink)";
        e.currentTarget.style.background = "rgba(236,240,244,0.05)";
      },
      onMouseLeave: e => {
        e.currentTarget.style.borderColor = "rgba(236,240,244,0.32)";
        e.currentTarget.style.background = "transparent";
      }
    }, h.ctaSecondary)))), /*#__PURE__*/React.createElement(Reveal, {
      delay: 240,
      style: {
        marginTop: "clamp(40px, 7vh, 88px)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: "10.5px",
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        color: "var(--accent-on-ink)",
        marginBottom: "16px"
      }
    }, h.panelLabel), /*#__PURE__*/React.createElement("div", {
      className: "vk-hero-ribbon",
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(3, minmax(0,1fr))",
        gap: "1px",
        background: "rgba(236,240,244,0.14)",
        border: "1px solid rgba(236,240,244,0.14)",
        borderRadius: "var(--r-md)",
        overflow: "hidden"
      }
    }, t.services.items.map((it, i) => /*#__PURE__*/React.createElement("a", {
      key: i,
      href: "#services",
      onClick: e => {
        e.preventDefault();
        onNav("services");
      },
      className: "vk-ribbon-cell",
      style: {
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        padding: "20px 20px 22px",
        background: "rgba(10,20,33,0.34)",
        transition: "background var(--dur-fast)"
      },
      onMouseEnter: e => {
        e.currentTarget.style.background = "rgba(190,150,87,0.12)";
        e.currentTarget.querySelector(".vk-rib-t").style.color = "var(--accent-on-ink)";
        e.currentTarget.querySelector(".vk-rib-bar").style.width = "100%";
      },
      onMouseLeave: e => {
        e.currentTarget.style.background = "rgba(10,20,33,0.34)";
        e.currentTarget.querySelector(".vk-rib-t").style.color = "var(--text-on-ink)";
        e.currentTarget.querySelector(".vk-rib-bar").style.width = "22px";
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: "11px",
        letterSpacing: "0.14em",
        color: "var(--accent-on-ink)"
      }
    }, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("span", {
      className: "vk-rib-t",
      style: {
        fontFamily: "var(--font-serif)",
        fontWeight: 400,
        lineHeight: 1.18,
        letterSpacing: "-0.01em",
        color: "var(--text-on-ink)",
        transition: "color var(--dur-fast)",
        fontSize: "19px"
      }
    }, it.title), /*#__PURE__*/React.createElement("span", {
      className: "vk-rib-bar",
      "aria-hidden": "true",
      style: {
        width: "22px",
        height: "2px",
        background: "var(--accent)",
        marginTop: "2px",
        transition: "width var(--dur) var(--ease-out)"
      }
    })))))), /*#__PURE__*/React.createElement("button", {
      onClick: () => onNav("services"),
      "aria-label": "Scroll",
      style: {
        position: "absolute",
        bottom: "22px",
        right: "var(--gutter)",
        background: "none",
        border: "none",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        gap: "10px"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: "9.5px",
        letterSpacing: "0.24em",
        textTransform: "uppercase",
        color: "var(--text-on-ink-faint)"
      }
    }, "Scroll"), /*#__PURE__*/React.createElement("span", {
      className: "vk-scrollline"
    })));
  }

  /* ---------------- CRED BAR ---------------- */
  function CredBar({
    t
  }) {
    return /*#__PURE__*/React.createElement("section", {
      style: {
        background: "var(--ink-800)",
        borderTop: "1px solid var(--line-on-ink)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "container vk-credbar",
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "0"
      }
    }, t.stats.map((s, i) => /*#__PURE__*/React.createElement(Reveal, {
      key: s.label,
      delay: i * 70,
      style: {
        padding: "32px 0",
        paddingLeft: i === 0 ? 0 : "40px",
        borderLeft: i === 0 ? "none" : "1px solid var(--line-on-ink)"
      }
    }, /*#__PURE__*/React.createElement(DS.StatBlock, {
      figure: s.figure,
      label: s.label,
      onInk: true
    })))));
  }
  window.VKWeb = window.VKWeb || {};
  window.VKWeb.Top = {
    Hero,
    CredBar
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "sections-top.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/app-about.jsx
try { (() => {
/* About page app */
(function () {
  const {
    Chrome,
    AboutPage,
    Extra,
    End
  } = window.VKWeb;
  const SITE = window.SITE;
  function About() {
    const [lang, setLang] = Chrome.useLang();
    const t = SITE[lang];
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Chrome.Nav, {
      t: t,
      lang: lang,
      setLang: setLang,
      current: "about"
    }), /*#__PURE__*/React.createElement(AboutPage.AboutHero, {
      t: t,
      img: SITE.img
    }), /*#__PURE__*/React.createElement(AboutPage.Bio, {
      t: t,
      img: SITE.img
    }), /*#__PURE__*/React.createElement(AboutPage.Experience, {
      t: t
    }), /*#__PURE__*/React.createElement(AboutPage.Highlights, {
      t: t
    }), /*#__PURE__*/React.createElement(Extra.Footprint, {
      t: t,
      footprint: SITE.footprint,
      lang: lang
    }), /*#__PURE__*/React.createElement(End.Credentials, {
      t: t
    }), /*#__PURE__*/React.createElement(End.Contact, {
      t: t
    }), /*#__PURE__*/React.createElement(Chrome.Footer, {
      t: t
    }));
  }
  ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(About, null));
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/app-about.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/app-article.jsx
try { (() => {
/* Article detail page app */
(function () {
  const {
    Chrome,
    Detail
  } = window.VKWeb;
  const SITE = window.SITE;
  function ArticlePage() {
    const [lang, setLang] = Chrome.useLang();
    const t = SITE[lang];
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Chrome.Nav, {
      t: t,
      lang: lang,
      setLang: setLang,
      current: "insights",
      solid: true
    }), /*#__PURE__*/React.createElement(Detail.ArticleDetail, {
      t: t,
      lang: lang
    }), /*#__PURE__*/React.createElement(Chrome.Footer, {
      t: t
    }));
  }
  ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(ArticlePage, null));
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/app-article.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/app-home.jsx
try { (() => {
/* Home page app */
(function () {
  const {
    Chrome,
    Top,
    Mid,
    ApproachBand,
    Extra,
    End
  } = window.VKWeb;
  const SITE = window.SITE;
  function Home() {
    const [lang, setLang] = Chrome.useLang();
    const t = SITE[lang];
    const onNav = id => {
      if (id === "top") {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
        return;
      }
      const el = document.getElementById(id);
      if (!el) return;
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - 58,
        behavior: "smooth"
      });
    };
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Chrome.Nav, {
      t: t,
      lang: lang,
      setLang: setLang,
      current: "services"
    }), /*#__PURE__*/React.createElement(Top.Hero, {
      t: t,
      img: SITE.img,
      onNav: onNav
    }), /*#__PURE__*/React.createElement(Top.CredBar, {
      t: t
    }), /*#__PURE__*/React.createElement(Mid.Services, {
      t: t
    }), /*#__PURE__*/React.createElement(ApproachBand.Approach, {
      t: t,
      img: SITE.img
    }), /*#__PURE__*/React.createElement(Mid.Work, {
      t: t
    }), /*#__PURE__*/React.createElement(Extra.Projects, {
      t: t,
      lang: lang,
      limit: 6
    }), /*#__PURE__*/React.createElement(Extra.Insights, {
      t: t,
      lang: lang,
      limit: 3
    }), /*#__PURE__*/React.createElement(End.Contact, {
      t: t
    }), /*#__PURE__*/React.createElement(Chrome.Footer, {
      t: t
    }));
  }
  ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(Home, null));
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/app-home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/app-insights.jsx
try { (() => {
/* Insights page app */
(function () {
  const {
    Chrome,
    Extra,
    End
  } = window.VKWeb;
  const SITE = window.SITE;
  function InsightsPage() {
    const [lang, setLang] = Chrome.useLang();
    const t = SITE[lang];
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Chrome.Nav, {
      t: t,
      lang: lang,
      setLang: setLang,
      current: "insights",
      solid: true
    }), /*#__PURE__*/React.createElement(Extra.Insights, {
      t: t,
      lang: lang,
      page: true
    }), /*#__PURE__*/React.createElement(End.Contact, {
      t: t
    }), /*#__PURE__*/React.createElement(Chrome.Footer, {
      t: t
    }));
  }
  ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(InsightsPage, null));
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/app-insights.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/app-project.jsx
try { (() => {
/* Project detail page app */
(function () {
  const {
    Chrome,
    Detail
  } = window.VKWeb;
  const SITE = window.SITE;
  function ProjectPage() {
    const [lang, setLang] = Chrome.useLang();
    const t = SITE[lang];
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Chrome.Nav, {
      t: t,
      lang: lang,
      setLang: setLang,
      current: "projects",
      solid: true
    }), /*#__PURE__*/React.createElement(Detail.ProjectDetail, {
      t: t,
      lang: lang
    }), /*#__PURE__*/React.createElement(Chrome.Footer, {
      t: t
    }));
  }
  ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(ProjectPage, null));
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/app-project.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/app-projects.jsx
try { (() => {
/* Projects page app */
(function () {
  const {
    Chrome,
    Extra,
    End
  } = window.VKWeb;
  const SITE = window.SITE;
  function ProjectsPage() {
    const [lang, setLang] = Chrome.useLang();
    const t = SITE[lang];
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Chrome.Nav, {
      t: t,
      lang: lang,
      setLang: setLang,
      current: "projects",
      solid: true
    }), /*#__PURE__*/React.createElement(Extra.Projects, {
      t: t,
      lang: lang,
      page: true
    }), /*#__PURE__*/React.createElement(End.Contact, {
      t: t
    }), /*#__PURE__*/React.createElement(Chrome.Footer, {
      t: t
    }));
  }
  ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(ProjectsPage, null));
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/app-projects.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/chrome.jsx
try { (() => {
/* Shared chrome — Nav + Footer across all pages. window.VKWeb.Chrome */
(function () {
  const {
    useState,
    useEffect
  } = React;

  /* ---------------- NAV ---------------- */
  function Nav({
    t,
    lang,
    setLang,
    current,
    solid
  }) {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
      const onScroll = () => setScrolled(window.scrollY > 40);
      onScroll();
      window.addEventListener("scroll", onScroll, {
        passive: true
      });
      return () => window.removeEventListener("scroll", onScroll);
    }, []);
    const dark = solid || scrolled;
    return /*#__PURE__*/React.createElement("nav", {
      style: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "background var(--dur) var(--ease-out), box-shadow var(--dur), backdrop-filter var(--dur)",
        background: dark ? "rgba(10,20,33,0.94)" : "rgba(10,20,33,0.0)",
        backdropFilter: dark ? "saturate(140%) blur(10px)" : "none",
        boxShadow: dark ? "0 1px 0 rgba(236,240,244,0.10)" : "none"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "container",
      style: {
        display: "flex",
        alignItems: "center",
        gap: "20px",
        height: scrolled ? "64px" : "82px",
        transition: "height var(--dur) var(--ease-out)"
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: "index.html",
      style: {
        display: "flex",
        flexDirection: "column",
        lineHeight: 1.15,
        marginRight: "auto",
        whiteSpace: "nowrap"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-serif)",
        fontSize: "19px",
        color: "var(--text-on-ink)",
        letterSpacing: "0.01em"
      }
    }, t.brand.name), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: "9px",
        letterSpacing: "0.22em",
        textTransform: "uppercase",
        color: "var(--accent-on-ink)",
        marginTop: "4px"
      }
    }, t.brand.role)), /*#__PURE__*/React.createElement("div", {
      className: "vk-navlinks",
      style: {
        display: "flex",
        gap: "24px"
      }
    }, t.nav.map(n => {
      const active = current === n.id;
      return /*#__PURE__*/React.createElement("a", {
        key: n.id,
        href: n.href,
        className: "vk-navlink",
        style: {
          fontFamily: "var(--font-sans)",
          fontSize: "14px",
          fontWeight: 500,
          color: active ? "var(--text-on-ink)" : "var(--text-on-ink-muted)",
          letterSpacing: "0.01em",
          whiteSpace: "nowrap",
          borderBottom: active ? "1px solid var(--accent-on-ink)" : "1px solid transparent",
          paddingBottom: "2px",
          transition: "color var(--dur-fast)"
        },
        onMouseEnter: e => e.currentTarget.style.color = "var(--text-on-ink)",
        onMouseLeave: e => e.currentTarget.style.color = active ? "var(--text-on-ink)" : "var(--text-on-ink-muted)"
      }, n.label);
    })), /*#__PURE__*/React.createElement("button", {
      onClick: () => setLang(lang === "en" ? "tr" : "en"),
      "aria-label": "Toggle language",
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: "11px",
        fontWeight: 500,
        letterSpacing: "0.1em",
        color: "var(--text-on-ink)",
        background: "transparent",
        border: "1px solid rgba(236,240,244,0.28)",
        padding: "6px 10px",
        borderRadius: "var(--r-sm)",
        cursor: "pointer",
        transition: "border-color var(--dur-fast)"
      },
      onMouseEnter: e => e.currentTarget.style.borderColor = "var(--accent-on-ink)",
      onMouseLeave: e => e.currentTarget.style.borderColor = "rgba(236,240,244,0.28)"
    }, lang === "en" ? "TR" : "EN"), /*#__PURE__*/React.createElement("a", {
      href: "index.html#contact",
      className: "vk-navcta",
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: "14px",
        fontWeight: 500,
        color: "var(--on-accent)",
        background: "var(--accent)",
        padding: "10px 18px",
        borderRadius: "var(--r-sm)",
        whiteSpace: "nowrap",
        transition: "background var(--dur-fast)"
      },
      onMouseEnter: e => e.currentTarget.style.background = "var(--gold-400)",
      onMouseLeave: e => e.currentTarget.style.background = "var(--accent)"
    }, t.cta)));
  }

  /* ---------------- FOOTER ---------------- */
  function Footer({
    t
  }) {
    const c = t.contact;
    return /*#__PURE__*/React.createElement("footer", {
      style: {
        background: "var(--ink-900)",
        padding: "64px 0 40px",
        borderTop: "1px solid var(--line-on-ink)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "vk-footer-top",
      style: {
        display: "grid",
        gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
        gap: "40px",
        paddingBottom: "40px",
        borderBottom: "1px solid var(--line-on-ink)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "30ch"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-serif)",
        fontSize: "22px",
        color: "var(--text-on-ink)"
      }
    }, t.brand.name), /*#__PURE__*/React.createElement("div", {
      style: {
        width: "40px",
        height: "1px",
        background: "var(--accent)",
        margin: "12px 0"
      }
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: "var(--t-body-s)",
        color: "var(--text-on-ink-muted)",
        margin: 0,
        lineHeight: 1.5
      }
    }, t.footer.tagline)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: ftCol
    }, t.footer.colPages), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "10px"
      }
    }, t.nav.map(n => /*#__PURE__*/React.createElement("a", {
      key: n.id,
      href: n.href,
      style: ftLink,
      onMouseEnter: e => e.currentTarget.style.color = "var(--accent-on-ink)",
      onMouseLeave: e => e.currentTarget.style.color = "var(--text-on-ink-muted)"
    }, n.label)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: ftCol
    }, t.footer.colContact), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "10px"
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: "mailto:" + c.email,
      style: ftLink
    }, c.email), /*#__PURE__*/React.createElement("a", {
      href: "tel:" + c.phone.replace(/\s/g, ""),
      style: ftLink
    }, c.phone), /*#__PURE__*/React.createElement("span", {
      style: {
        ...ftLink,
        cursor: "default"
      }
    }, c.location))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: ftCol
    }, t.footer.colFollow), /*#__PURE__*/React.createElement("a", {
      href: "#",
      style: ftLink,
      onMouseEnter: e => e.currentTarget.style.color = "var(--accent-on-ink)",
      onMouseLeave: e => e.currentTarget.style.color = "var(--text-on-ink-muted)"
    }, "LinkedIn \u2197"))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        gap: "20px",
        flexWrap: "wrap",
        marginTop: "28px"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: "11px",
        letterSpacing: "0.08em",
        color: "var(--text-on-ink-faint)"
      }
    }, t.footer.copy), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: "11px",
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        color: "var(--text-on-ink-faint)"
      }
    }, t.brand.role, " \xB7 EMEA & MENA"))));
  }
  const ftCol = {
    fontFamily: "var(--font-mono)",
    fontSize: "10.5px",
    letterSpacing: "0.16em",
    textTransform: "uppercase",
    color: "var(--accent-on-ink)",
    marginBottom: "16px"
  };
  const ftLink = {
    fontFamily: "var(--font-sans)",
    fontSize: "var(--t-body-s)",
    color: "var(--text-on-ink-muted)",
    transition: "color var(--dur-fast)"
  };

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
  window.VKWeb.Chrome = {
    Nav,
    Footer,
    useLang
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.js
try { (() => {
/* ============================================================
   Content — Vildan Kara Kayacan · Executive Advisory.
   Multi-page site. Bilingual (EN / TR).
   Voice: third person, professional / advertising register.
   The SUBJECT is Vildan Kara Kayacan (named or implied) — not a
   first person ("I/me"), and not a fictional company structure.
   Region terminology: EMEA & MENA.
   Exposed as window.SITE.
   ============================================================ */
window.SITE = {
  img: {
    portrait: "../../assets/img/vildan-portrait.jpg",
    about: "../../assets/img/vildan-about.png",
    presenting: "../../assets/img/vildan-presenting.jpg",
    strategy: "../../assets/img/vildan-strategy.jpg",
    boardroom: "../../assets/img/hero-boardroom.png"
  },
  /* page filenames used by the shared nav/footer */
  pages: {
    home: "index.html",
    services: "index.html#services",
    work: "index.html#work",
    projects: "projects.html",
    insights: "insights.html",
    about: "about.html",
    contact: "index.html#contact"
  },
  /* Service-area imagery (shared EN/TR), indexed to the six services.
     Real corporate/technology photography (Unsplash CDN), brand-duotoned
     in CSS. SUBSTITUTION: replace with owned/licensed imagery before launch. */
  serviceImages: ["https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=70", /* org change / people */
  "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=70", /* SAP / data center */
  "https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=1000&q=70", /* AI / network */
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=70", /* managed services / dashboards */
  "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1000&q=70", /* PMO / planning */
  "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1000&q=70" /* bid / handshake */],
  /* Project header imagery (shared), indexed to the six projects.
     SUBSTITUTION: replace with owned/product imagery before launch. */
  projectImages: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=70", /* SAP Activa — analytics dashboard */
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=70", /* Segmentil — charts */
  "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=900&q=70", /* Yazbix — writing / journal */
  "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=900&q=70", /* Social Media Studio — social */
  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=70", /* English for Children — learning */
  "https://images.unsplash.com/photo-1488229297570-58520851e868?auto=format&fit=crop&w=900&q=70" /* In progress — abstract lab */],
  /* Insight (article) header imagery — indexed to the six articles.
     Reuses verified Unsplash IDs. SUBSTITUTION: replace before launch. */
  insightImages: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=70", /* SAP fail — data center */
  "https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=900&q=70", /* AI — network */
  "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=900&q=70", /* staying ahead — planning */
  "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=70", /* vendor — handshake */
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=70", /* managed services — dashboards */
  "https://images.unsplash.com/photo-1488229297570-58520851e868?auto=format&fit=crop&w=900&q=70" /* trend — abstract */],
  /* Non-personal corporate imagery for the About page + CTA band. */
  aux: {
    aboutHero: "https://images.unsplash.com/photo-1488229297570-58520851e868?auto=format&fit=crop&w=1100&q=70",
    /* abstract glass */
    aboutBio: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1100&q=70",
    /* strategy / data */
    cta: "../../assets/img/hero-boardroom.png" /* wide boardroom */
  },
  /* Shared 16-country footprint (EMEA & MENA). name/projects per language. */
  footprint: [{
    code: "tr",
    lat: 39.9,
    lng: 32.8,
    name_en: "Türkiye",
    name_tr: "Türkiye",
    projects_en: ["Turkish Airlines — OCM Lead (150+ people)", "Eureko Sigorta — First SAP HANA FSI reference", "Arçelik — MDM Implementation", "Yapı Kredi Bank — First banking ERP programme", "NTT DATA — EMEA & MENA Service Management", "Mercedes-Benz Turkey — Shared Service Operation"],
    projects_tr: ["Türk Hava Yolları — OCM Lideri (150+ kişi)", "Eureko Sigorta — İlk SAP HANA FSI referansı", "Arçelik — MDM Implementasyonu", "Yapı Kredi Bankası — İlk bankacılık ERP programı", "NTT DATA — EMEA & MENA Servis Yönetimi", "Mercedes-Benz Türk — Shared Service Operasyonu"]
  }, {
    code: "de",
    lat: 51.2,
    lng: 10.4,
    name_en: "Germany",
    name_tr: "Almanya",
    projects_en: ["Metro Group AG — Düsseldorf FCC (SAP FI)", "Schnellecke Logistics — Global roll-out (onsite)", "Air Berlin — Business Transformation (onsite)", "Yaşar Holding — Germany Localization"],
    projects_tr: ["Metro Group AG — Düsseldorf FCC (SAP FI Danışmanı)", "Schnellecke Logistics — Global roll-out (onsite)", "Air Berlin — Business Transformation (onsite)", "Yaşar Holding — Almanya Lokalizasyon"]
  }, {
    code: "eg",
    lat: 26.8,
    lng: 30.8,
    name_en: "Egypt",
    name_tr: "Mısır",
    projects_en: ["Metro Group — SAP Roll-out", "Financial process implementation & go-live"],
    projects_tr: ["Metro Group — SAP Roll-out", "Finansal süreç implementasyonu ve go-live"]
  }, {
    code: "kz",
    lat: 48.0,
    lng: 66.9,
    name_en: "Kazakhstan",
    name_tr: "Kazakistan",
    projects_en: ["Metro Group — SAP Roll-out", "International SAP FI implementation"],
    projects_tr: ["Metro Group — SAP Roll-out", "Uluslararası SAP FI implementasyonu"]
  }, {
    code: "sk",
    lat: 48.7,
    lng: 19.7,
    name_en: "Slovakia",
    name_tr: "Slovakya",
    projects_en: ["Metro Group — SAP Roll-out", "Local GAAP & IFRS parallel reporting"],
    projects_tr: ["Metro Group — SAP Roll-out", "Yerel GAAP ve IFRS paralel raporlama"]
  }, {
    code: "be",
    lat: 50.5,
    lng: 4.4,
    name_en: "Belgium",
    name_tr: "Belçika",
    projects_en: ["Metro Group — SAP Roll-out", "Multi-company-code SAP FI setup"],
    projects_tr: ["Metro Group — SAP Roll-out", "Çok şirket kodlu SAP FI kurulumu"]
  }, {
    code: "es",
    lat: 40.4,
    lng: -3.7,
    name_en: "Spain",
    name_tr: "İspanya",
    projects_en: ["Metro Group — SAP Roll-out", "User acceptance testing & go-live"],
    projects_tr: ["Metro Group — SAP Roll-out", "Kullanıcı kabul testi ve go-live"]
  }, {
    code: "bg",
    lat: 42.7,
    lng: 25.5,
    name_en: "Bulgaria",
    name_tr: "Bulgaristan",
    projects_en: ["Metro Group — SAP Roll-out", "SAP FI functional support & training"],
    projects_tr: ["Metro Group — SAP Roll-out", "SAP FI fonksiyonel destek ve eğitim"]
  }, {
    code: "pk",
    lat: 30.4,
    lng: 69.3,
    name_en: "Pakistan",
    name_tr: "Pakistan",
    projects_en: ["Metro Group — SAP Roll-out", "International SAP implementation & training"],
    projects_tr: ["Metro Group — SAP Roll-out", "Uluslararası SAP implementasyonu ve eğitim"]
  }, {
    code: "at",
    lat: 47.5,
    lng: 14.5,
    name_en: "Austria",
    name_tr: "Avusturya",
    projects_en: ["NTT DATA — EMEA Service Coordination", "Integration with European delivery centers"],
    projects_tr: ["NTT DATA — EMEA Servis Koordinasyonu", "Avrupa teslimat merkezleriyle entegrasyon"]
  }, {
    code: "pl",
    lat: 51.9,
    lng: 19.1,
    name_en: "Poland",
    name_tr: "Polonya",
    projects_en: ["NTT DATA — EMEA Service Structure", "Delivery center development & integration"],
    projects_tr: ["NTT DATA — EMEA Servis Yapılanması", "Teslimat merkezi geliştirme ve entegrasyon"]
  }, {
    code: "cz",
    lat: 49.8,
    lng: 15.5,
    name_en: "Czechia",
    name_tr: "Çekya",
    projects_en: ["NTT DATA — EMEA Delivery Coordination", "Local adaptation of central service model"],
    projects_tr: ["NTT DATA — EMEA Delivery Koordinasyonu", "Merkezi servis modelinin yerel adaptasyonu"]
  }, {
    code: "ro",
    lat: 45.9,
    lng: 24.9,
    name_en: "Romania",
    name_tr: "Romanya",
    projects_en: ["NTT DATA — EMEA Delivery Expansion", "New CoE setup support"],
    projects_tr: ["NTT DATA — EMEA Teslimat Genişletme", "Yeni CoE kurulumu desteği"]
  }, {
    code: "ua",
    lat: 48.4,
    lng: 31.2,
    name_en: "Ukraine",
    name_tr: "Ukrayna",
    projects_en: ["NTT DATA — Delivery Center Integration", "Within EMEA SAP service organization"],
    projects_tr: ["NTT DATA — Teslimat Merkezi Entegrasyonu", "EMEA SAP servis organizasyonu kapsamında"]
  }, {
    code: "ae",
    lat: 24.5,
    lng: 54.4,
    name_en: "UAE",
    name_tr: "BAE",
    projects_en: ["NTT DATA — MENA Region Service Management", "Middle East & Africa SAP managed services"],
    projects_tr: ["NTT DATA — MENA Bölgesi Servis Yönetimi", "Orta Doğu & Afrika SAP yönetilen hizmetler"]
  }, {
    code: "sa",
    lat: 24.7,
    lng: 46.7,
    name_en: "Saudi Arabia",
    name_tr: "Suudi Arabistan",
    projects_en: ["NTT DATA — MENA Region Service Expansion", "SAP managed services strategy & delivery"],
    projects_tr: ["NTT DATA — MENA Bölgesi Servis Genişlemesi", "SAP yönetilen hizmetler stratejisi ve teslimat"]
  }],
  /* Detail-page content, keyed by language then item index.
     NOTE: article bodies are professional drafts — replace with final copy. */
  detail: {
    en: {
      labels: {
        back: "All insights",
        backProjects: "All projects",
        byline: "Vildan Kara Kayacan",
        features: "Highlights",
        visit: "Visit project",
        status: "Status",
        related: "Continue reading",
        talk: "Discuss this"
      },
      insightBodies: [["Most S/4HANA programmes are framed as technology migrations. That framing is the first mistake. The platform change is real, but it is rarely what determines success — the operating model, the governance and the people around it are.", "The programmes that endure share a pattern: a staged, low-risk roadmap; a target operating model defined before the build; and change management treated as a workstream, not an afterthought. The ones that fail almost always skipped one of the three.", "Before committing a budget, three questions are worth answering honestly. Is the scope staged so value arrives early? Is there a single owner for the operating model? And is the organisation genuinely ready to work differently on go-live day? If any answer is unclear, that is where the work starts."], ["Artificial intelligence is usually introduced as a tool. The organisations that get real value treat it as an operating-model question instead — where decisions are made, how work flows, who is accountable.", "Pilots are easy; production is hard. The gap is rarely the model. It is governance, data ownership, and the human change required for people to trust and adopt a new way of working.", "A pragmatic path: pick a process where the value is measurable, govern the data and the decisions explicitly, and design adoption as carefully as the technology. AI that nobody uses is not a capability — it is a cost."], ["Change is accelerating, and the distance between leaders and followers is widening. For CIOs, the risk is not a single technology — it is being structurally unprepared when several arrive at once.", "Three areas reward early preparation: a data foundation that AI can actually use; an operating model that can absorb change without re-organising every year; and a governance posture that says yes to experiments without losing control.", "None of these is a project. They are postures — and the time to adopt them is before the pressure, not during it."], ["Vendor selection is where a transformation's risk profile is quietly set. The wrong choice is rarely obvious on day one; it surfaces a year later, in missed milestones and renegotiations.", "The mistakes repeat: scoring on price before fit; letting the integrator design the RFP; confusing a good demo with delivery capability; and negotiating terms that protect the vendor more than the client.", "An evaluation run on the client's side of the table — clear requirements, weighted criteria, reference checks that go beyond the slide — changes the outcome. Independence here is not a nicety; it is risk management."], ["Managed services are often bought as a cost line and managed as one. That is how value leaks. ITIL is not paperwork — it is the structure that turns a service into a predictable, improvable asset.", "Value comes from the model: the right SLA/KPI design, clear accountability, and a continual-improvement loop that is actually run. Without it, a contract becomes a ticket queue.", "The question to ask of any managed-services arrangement is simple: is it getting better every quarter, or just getting through? The answer is usually visible in the governance, not the headcount."], ["Every season brings a new technology that demands attention. Some reshape the enterprise; most do not. The discipline is telling them apart before committing budget and credibility.", "A simple test helps: does it change the economics of something the business already does at scale, or only add a capability nobody was asking for? Lasting change tends to move a number that matters.", "Curiosity and discipline are not opposites. Experiment widely, but commit narrowly — and only where the value is real and measurable."]],
      projectBodies: [["SAP Activa brings artificial intelligence to the discipline of SAP programme management. It scores project health, predicts risk, optimises resource allocation and generates status reporting automatically — extending the SAP Activate methodology with a layer of applied AI.", "Built from real delivery experience, it targets the moments where large programmes quietly go off-track: drifting milestones, hidden resource conflicts and status reports that arrive too late to act on."], ["Segmentil segments enterprise customer portfolios and predicts behaviour using applied AI — RFM analysis, churn prediction and customer-lifetime-value, packaged as a decision-support tool for sales and customer-success teams.", "The goal is not another dashboard but a clearer next action: which accounts to protect, which to grow, and where attention creates the most value."], ["Yazbix is an AI-assisted digital journal — a place to capture thoughts, memories and notes, enriched with speech-to-text, sentiment analysis and smart tagging. It began as a personal experiment in what applied AI can do for everyday memory.", "It is the most personal project in the portfolio, and the one that most directly explores how AI can be quiet, helpful and human."], ["Social Media Studio is an AI-assisted content and scheduling platform for small businesses and founders — content suggestions, timing optimisation and lightweight performance analytics in one place.", "It exists to test a simple idea: that applied AI can give a one-person business the leverage of a small team."], ["English for Children is an interactive English-vocabulary platform built for young learners — visual cards, spoken pronunciation and gamified repetition on an AI-personalised learning path.", "The design question behind it: how does AI personalise learning without removing the joy of it? The answer shapes every screen."], ["A new applied-AI project is currently in development, aimed at a real problem in enterprise transformation. It is early, deliberately so — the right time to share is when it works, not before.", "Details will follow. To hear when it launches, a short note via the contact page is the best way to stay in touch."]],
      projectFeatures: [["Project health scoring", "Risk prediction", "Resource optimisation", "Automated status reporting"], ["RFM segmentation", "Churn prediction", "Customer-lifetime-value", "Sales decision support"], ["Speech-to-text capture", "Sentiment analysis", "Smart tagging", "Private by design"], ["Content suggestions", "Scheduling optimisation", "Performance analytics", "Built for small teams"], ["Visual flashcards", "Spoken pronunciation", "Gamified repetition", "AI-personalised path"], ["In active development", "Enterprise-transformation focus", "Applied AI", "Launching soon"]]
    },
    tr: {
      labels: {
        back: "Tüm yazılar",
        backProjects: "Tüm projeler",
        byline: "Vildan Kara Kayacan",
        features: "Öne çıkanlar",
        visit: "Projeyi gör",
        status: "Durum",
        related: "Okumaya devam et",
        talk: "Bunu konuşalım"
      },
      insightBodies: [["S/4HANA programlarının çoğu bir teknoloji göçü olarak çerçevelenir. İlk hata budur. Platform değişimi gerçektir ama başarıyı nadiren o belirler — etrafındaki işletme modeli, yönetişim ve insanlar belirler.", "Kalıcı programlar aynı deseni paylaşır: aşamalı, düşük riskli bir yol haritası; inşadan önce tanımlanmış bir hedef işletme modeli; ve sonradan akla gelen değil, bir iş kolu olarak ele alınan değişim yönetimi. Başarısız olanlar neredeyse her zaman bu üçünden birini atlamıştır.", "Bütçe ayrılmadan önce üç soru dürüstçe yanıtlanmalı: Kapsam, değerin erken gelmesini sağlayacak şekilde aşamalı mı? İşletme modelinin tek bir sahibi var mı? Ve kurum, go-live gününde gerçekten farklı çalışmaya hazır mı? Herhangi biri net değilse, iş tam orada başlar."], ["Yapay zeka genellikle bir araç olarak tanıtılır. Gerçek değer elde eden kurumlar onu bir işletme modeli sorusu olarak ele alır — kararların nerede verildiği, işin nasıl aktığı, kimin sorumlu olduğu.", "Pilotlar kolaydır; üretim zordur. Aradaki fark nadiren modeldir. Yönetişim, veri sahipliği ve insanların yeni çalışma biçimine güvenip benimsemesi için gereken değişimdir.", "Pragmatik bir yol: değerin ölçülebilir olduğu bir süreç seçin, veriyi ve kararları açıkça yönetin ve benimsemeyi teknoloji kadar dikkatli tasarlayın. Kimsenin kullanmadığı AI bir yetkinlik değil, bir maliyettir."], ["Değişim hızlanıyor ve liderlerle takipçiler arasındaki mesafe açılıyor. CIO'lar için risk tek bir teknoloji değil — birkaçı aynı anda geldiğinde yapısal olarak hazırlıksız olmaktır.", "Üç alan erken hazırlığı ödüllendirir: AI'ın gerçekten kullanabileceği bir veri temeli; her yıl yeniden yapılanmadan değişimi soğurabilen bir işletme modeli; ve kontrolü kaybetmeden deneylere evet diyen bir yönetişim duruşu.", "Bunların hiçbiri bir proje değil. Bunlar duruşlardır — ve onları benimseme zamanı baskı altındayken değil, öncesidir."], ["Tedarikçi seçimi, bir dönüşümün risk profilinin sessizce belirlendiği yerdir. Yanlış seçim ilk gün nadiren belli olur; bir yıl sonra kaçırılan kilometre taşları ve yeniden müzakerelerle ortaya çıkar.", "Hatalar tekrar eder: uyumdan önce fiyata göre puanlama; RFP'yi entegratöre tasarlatma; iyi bir demoyu teslimat yetkinliğiyle karıştırma; ve müşteriden çok tedarikçiyi koruyan şartlar müzakere etme.", "Masanın müşteri tarafında yürütülen bir değerlendirme — net gereksinimler, ağırlıklı kriterler, slaytın ötesine geçen referans kontrolleri — sonucu değiştirir. Buradaki bağımsızlık bir incelik değil; risk yönetimidir."], ["Yönetilen hizmetler çoğu zaman bir maliyet kalemi olarak satın alınır ve öyle yönetilir. Değer böyle sızar. ITIL evrak işi değildir — bir hizmeti öngörülebilir, iyileştirilebilir bir varlığa dönüştüren yapıdır.", "Değer modelden gelir: doğru SLA/KPI tasarımı, net hesap verebilirlik ve gerçekten işletilen bir sürekli iyileştirme döngüsü. Bunlar olmadan bir sözleşme bir talep kuyruğuna döner.", "Herhangi bir yönetilen hizmet düzenlemesine sorulacak soru basittir: her çeyrek daha mı iyi oluyor, yoksa sadece idare mi ediyor? Yanıt genellikle kişi sayısında değil, yönetişimde görünür."], ["Her dönem dikkat isteyen yeni bir teknoloji getirir. Bazıları kurumu yeniden şekillendirir; çoğu şekillendirmez. Disiplin, bütçe ve itibar bağlamadan önce ikisini ayırt etmektir.", "Basit bir test yardımcı olur: işletmenin halihazırda ölçekte yaptığı bir şeyin ekonomisini mi değiştiriyor, yoksa kimsenin istemediği bir yetenek mi ekliyor? Kalıcı değişim genellikle önemli bir sayıyı hareket ettirir.", "Merak ve disiplin zıt değildir. Geniş deneyin ama dar bağlanın — ve yalnızca değerin gerçek ve ölçülebilir olduğu yerde."]],
      projectBodies: [["SAP Activa, yapay zekayı SAP program yönetimi disiplinine taşır. Proje sağlığını skorlar, riski tahmin eder, kaynak tahsisini optimize eder ve durum raporlamasını otomatik üretir — SAP Activate metodolojisini uygulamalı bir AI katmanıyla genişletir.", "Gerçek teslimat deneyiminden doğdu ve büyük programların sessizce rayından çıktığı anları hedefler: kayan kilometre taşları, gizli kaynak çatışmaları ve harekete geçmek için çok geç gelen durum raporları."], ["Segmentil, kurumsal müşteri portföylerini uygulamalı AI ile segmentler ve davranış tahmini üretir — RFM analizi, churn tahmini ve müşteri yaşam boyu değeri; satış ve müşteri başarı ekipleri için bir karar destek aracı olarak.", "Amaç bir gösterge paneli daha değil, daha net bir sonraki adım: hangi hesapların korunacağı, hangilerinin büyütüleceği ve ilginin en çok değer yarattığı yer."], ["Yazbix, yapay zeka destekli bir dijital günlük — düşünceleri, anıları ve notları yakalamak için bir yer; sesten metne, duygu analizi ve akıllı etiketleme ile zenginleştirilmiş. Uygulamalı AI'ın günlük hafıza için ne yapabileceğine dair kişisel bir deney olarak başladı.", "Portföydeki en kişisel proje ve AI'ın sessiz, yardımcı ve insani olabileceğini en doğrudan keşfedeni."], ["Sosyal Medya Stüdyosu, küçük işletmeler ve girişimciler için yapay zeka destekli bir içerik ve zamanlama platformudur — içerik önerileri, zamanlama optimizasyonu ve hafif performans analitikleri tek bir yerde.", "Basit bir fikri sınamak için var: uygulamalı AI, tek kişilik bir işletmeye küçük bir ekibin gücünü verebilir."], ["Çocuklar için İngilizce, genç öğrenciler için tasarlanmış interaktif bir İngilizce kelime platformudur — görsel kartlar, sesli telaffuz ve AI ile kişiselleştirilmiş bir yolda oyunlaştırılmış tekrar.", "Arkasındaki tasarım sorusu: AI öğrenmeyi, keyfini kaçırmadan nasıl kişiselleştirir? Yanıt her ekranı şekillendiriyor."], ["Şu anda geliştirme aşamasında, kurumsal dönüşümdeki gerçek bir problemi hedefleyen yeni bir uygulamalı AI projesi var. Erken aşamada, bilinçli olarak öyle — paylaşmanın doğru zamanı çalıştığında, öncesinde değil.", "Detaylar paylaşılacak. Ne zaman yayınlanacağını duymak için iletişim sayfasından kısa bir not en iyi yol."]],
      projectFeatures: [["Proje sağlık skorlama", "Risk tahmini", "Kaynak optimizasyonu", "Otomatik durum raporlama"], ["RFM segmentasyonu", "Churn tahmini", "Müşteri yaşam boyu değeri", "Satış karar desteği"], ["Sesten metne yakalama", "Duygu analizi", "Akıllı etiketleme", "Tasarımı gereği gizli"], ["İçerik önerileri", "Zamanlama optimizasyonu", "Performans analitiği", "Küçük ekipler için"], ["Görsel kartlar", "Sesli telaffuz", "Oyunlaştırılmış tekrar", "AI ile kişiselleştirilmiş yol"], ["Aktif geliştirmede", "Kurumsal dönüşüm odağı", "Uygulamalı AI", "Yakında"]]
    }
  },
  en: {
    brand: {
      name: "Vildan Kara Kayacan",
      role: "Executive Advisory"
    },
    nav: [{
      id: "services",
      label: "Services",
      href: "index.html#services"
    }, {
      id: "projects",
      label: "Projects",
      href: "projects.html"
    }, {
      id: "insights",
      label: "Insights",
      href: "insights.html"
    }, {
      id: "about",
      label: "About",
      href: "about.html"
    }, {
      id: "contact",
      label: "Contact",
      href: "index.html#contact"
    }],
    cta: "Arrange a consultation",
    hero: {
      eyebrow: "Executive Advisory",
      title: ["SAP or AI.", "Transformation is human", "first, technical second."],
      lede: "Executive advisory for enterprise transformation — SAP, AI and managed services — led from the people side: the organisational change, governance and leadership that turn technology into outcomes that endure.",
      meta: ["25+ years", "EMEA & MENA", "People-led change", "SAP × AI"],
      ctaPrimary: "Arrange a consultation",
      ctaSecondary: "See the services",
      panelLabel: "Practice areas"
    },
    stats: [{
      figure: "25+",
      label: "Years in enterprise transformation"
    }, {
      figure: "16",
      label: "Countries delivered across EMEA & MENA"
    }, {
      figure: "€1M+",
      label: "Programmes delivered to plan"
    }, {
      figure: "35%",
      label: "Operating-cost reduction delivered"
    }],
    services: {
      eyebrow: "01 — Services",
      title: "Six practice areas. One human-centred standard.",
      lede: "Advisory across the full enterprise-transformation agenda — from strategy and vendor selection through delivery, go-live and the operating model. Technology is the easy half; the work that lasts is organisational change, governance and the people who carry it. Every engagement is run for the client's outcome, free of any product or vendor agenda.",
      items: [{
        title: "Organisational Change & Transformation",
        short: "People-led change that actually sticks.",
        bullets: ["Leadership alignment & stakeholder engagement", "Communication & adoption strategy", "Change-readiness & impact assessment", "Training, enablement & go-live support"],
        tags: ["OCM", "Adoption", "Leadership"]
      }, {
        title: "SAP S/4HANA",
        short: "Migration and transformation, end to end.",
        bullets: ["Staged, low-risk transformation roadmap", "Program leadership through go-live", "Target operating model & governance", "Stabilisation & post-go-live support"],
        tags: ["S/4HANA", "Roadmap", "Go-live"]
      }, {
        title: "Artificial Intelligence & Data",
        short: "From AI pilots to production value.",
        bullets: ["Generative-AI strategy & use-case selection", "Data & decision governance", "Adoption & operating-model design", "From pilot to measurable value"],
        tags: ["GenAI", "Governance", "Adoption"]
      }, {
        title: "Managed Services, Operating Model & CoE",
        short: "Service models built to last.",
        bullets: ["ITIL-based service & operating models", "SLA / KPI frameworks & P&L ownership", "Multi-region delivery setup", "SAP / AI Centers of Excellence"],
        tags: ["ITIL", "Operating model", "CoE"]
      }, {
        title: "Program & Portfolio (PMO)",
        short: "Large programmes kept on track.",
        bullets: ["PMO setup & governance frameworks", "Portfolio oversight & reporting", "Risk, scope & budget control", "€1M+ programme delivery"],
        tags: ["PMO", "Governance", "Delivery"]
      }, {
        title: "Bid, RFP & Vendor Advisory",
        short: "On the client's side of the table.",
        bullets: ["RFP / RFI design & evaluation", "Win strategy & solution shaping", "Pricing & commercial modelling", "Final-round negotiation support"],
        tags: ["RFP / RFI", "Win strategy", "Pricing"]
      }],
      healthcheck: {
        eyebrow: "Start here",
        title: "Transformation Health Check",
        body: "An independent diagnostic of where a programme or SAP landscape truly stands — risks, gaps and a clear set of next moves. Often the right first step before committing budget.",
        bullets: ["Programme & delivery risk review", "Operating-model & governance gaps", "Clear, prioritised recommendations"],
        cta: "Request a health check"
      }
    },
    approach: {
      eyebrow: "Method",
      title: "A cycle, not a straight line.",
      lede: "Every engagement follows the same rigour — and keeps looping: understand before advising, design before building, deliver, then improve and begin again.",
      steps: [{
        n: "01",
        title: "Diagnose & Define",
        body: "The landscape, operating model, risks and stakeholders are mapped — a clear, unvarnished read of where things truly stand, and what success means."
      }, {
        n: "02",
        title: "Plan & Design",
        body: "A staged, low-risk roadmap and target operating model are defined, with governance, KPIs and a direct line to business value."
      }, {
        n: "03",
        title: "Deliver & Improve",
        body: "Programmes are led through go-live and stabilisation — then measured, refined and continually improved, feeding the next cycle."
      }],
      caption: "Strategy translated into a staged, governable, continually-improving programme.",
      tagline: "In a methodical approach, success is no accident — it is engineered."
    },
    work: {
      eyebrow: "02 — Selected Engagements",
      title: "Engagements that set the reference.",
      items: [{
        result: "Turkey's first SAP HANA reference implementation in financial services — delivered to plan with a 22-person team.",
        sector: "Financial Services",
        role: "Programme Manager",
        client: "Eureko Sigorta"
      }, {
        result: "Organisational change directed for the country's largest-ever ERP transformation — a ~150-person global programme.",
        sector: "Aviation",
        role: "OCM Lead",
        client: "Turkish Airlines"
      }, {
        result: "Turkey's first SAP global support hub of 100+ FTE established from the ground up, consolidating worldwide delivery for a global OEM.",
        sector: "Automotive",
        role: "Senior Service Manager",
        client: "Daimler CoE"
      }, {
        result: "A 75+ person regional IT service organisation built from zero in three months — demanding SLAs met from day one.",
        sector: "Manufacturing",
        role: "Service Delivery Lead",
        client: "Bosch-Siemens (B/S/H)"
      }, {
        result: "Comprehensive master-data management implementation led with a 12-person team, strengthening data architecture and governance.",
        sector: "Consumer Durables",
        role: "Programme Manager",
        client: "Arçelik"
      }, {
        result: "Managed-services portfolio doubled with strong recurring-revenue growth, while operating costs were reduced by 35% across global delivery.",
        sector: "Cross-industry",
        role: "Service Sales & Delivery Director",
        client: "NTT DATA"
      }]
    },
    projects: {
      eyebrow: "Applied AI",
      title: "Projects built in-house.",
      lede: "Beyond advisory, artificial intelligence is applied directly — a growing portfolio of products built to test where AI creates real value, in enterprise transformation and beyond. Each began as a working experiment; several are live.",
      visit: "Visit project",
      details: "View details",
      all: "All projects",
      items: [{
        name: "SAP Activa",
        kind: "SAP × AI",
        status: "Active",
        body: "An AI toolkit that strengthens SAP programme management: project health scoring, risk prediction, resource optimisation and automated status reporting — SAP Activate methodology integrated with AI.",
        link: "#"
      }, {
        name: "Segmentil",
        kind: "Analytics",
        status: "In development",
        body: "An AI platform that segments enterprise customer portfolios and predicts behaviour — RFM analysis, churn prediction and customer-lifetime-value, as a decision-support tool for sales and customer-success teams.",
        link: "#"
      }, {
        name: "Yazbix",
        kind: "Applied AI",
        status: "Active",
        body: "An AI-assisted digital journal that captures thoughts, memories and notes — with speech-to-text, sentiment analysis and smart tagging, as a personal memory platform.",
        link: "#"
      }, {
        name: "Social Media Studio",
        kind: "Applied AI",
        status: "In development",
        body: "An AI-assisted content and scheduling platform for small businesses and founders — content suggestions, timing optimisation and performance analytics.",
        link: "#"
      }, {
        name: "English for Children",
        kind: "EdTech",
        status: "Active",
        body: "An interactive English-vocabulary platform for children: visual cards, spoken pronunciation and gamified repetition on an AI-personalised learning path.",
        link: "#"
      }, {
        name: "In Progress",
        kind: "Coming soon",
        status: "Coming soon",
        body: "A new applied-AI project in development, aimed at a real problem in enterprise transformation. Details to follow — stay in touch.",
        link: "#contact"
      }]
    },
    insights: {
      eyebrow: "Insights",
      title: "Notes from the transformation frontline.",
      lede: "Perspectives on SAP, AI and the operating models that make change last — written for CIOs and senior IT leaders.",
      readMore: "Read",
      all: "All insights",
      items: [{
        tag: "Article",
        read: "5 min read",
        title: "Why SAP S/4HANA migrations fail",
        text: "The root cause is rarely the technology — it is the gaps in people and process. What separates the programmes that endure."
      }, {
        tag: "Article",
        read: "4 min read",
        title: "How AI is transforming the enterprise",
        text: "AI is not merely a technology; it is an organisational transformation. Where adoption actually succeeds — and why."
      }, {
        tag: "Article",
        read: "3 min read",
        title: "Staying ahead of the sector",
        text: "Change is accelerating. The three areas CIOs need to prepare for today, before they become urgent."
      }, {
        tag: "Article",
        read: "6 min read",
        title: "Ten critical mistakes in vendor selection",
        text: "The wrong vendor can be the single largest risk to a transformation programme. The ten mistakes that surface most often."
      }, {
        tag: "Article",
        read: "4 min read",
        title: "Creating value in managed services",
        text: "ITIL is not just a framework; it is the foundation of operational excellence. How service models create — or destroy — value."
      }, {
        tag: "Article",
        read: "5 min read",
        title: "A passing trend, or lasting change?",
        text: "Should every new technology be treated as a trend? A simple test for telling signal from noise."
      }]
    },
    ctaBand: {
      eyebrow: "Let's talk",
      title: "Transformation that lasts starts with a conversation.",
      cta: "Arrange a consultation"
    },
    footprintHead: {
      eyebrow: "Global Footprint",
      title: "Sixteen countries. One standard of delivery.",
      lede: "Across EMEA & MENA, programmes and service organisations have been delivered in sixteen countries. Select a marker to see the work.",
      hint: "Select a country"
    },
    /* ---- ABOUT PAGE ---- */
    aboutPage: {
      eyebrow: "About",
      name: "Vildan Kara Kayacan",
      role: "Business, Technology & AI Transformation Executive",
      tags: "SAP & Enterprise Architecture · Managed Services · AI Transformation",
      lede: "Twenty-five years turning transformation strategy into measurable business value — for strategic enterprises across EMEA & MENA.",
      bio: ["Vildan Kara Kayacan is a business and technology transformation executive with 25+ years of experience leading large-scale transformation, managed services and global delivery for strategic enterprises across EMEA & MENA. The track record is concrete: a managed-services portfolio doubled, operating costs cut by a third, and multi-country delivery organisations built from the ground up.", "Her work sits at the rare intersection of enterprise SAP transformation and applied artificial intelligence — leading both the technology and the organisational change behind its adoption. Deep SAP delivery, hands-on AI and genuine change management within a single profile: precisely what large organisations need now.", "Today she advises CIOs and executive teams as a trusted partner — guiding them as they navigate S/4HANA migration, managed-services restructuring, AI adoption, the design of a Center of Excellence, or a high-stakes bid that warrants an experienced hand at the table. Engagements are accepted selectively, in an advisory or senior programme-leadership capacity."],
      cvLabel: "Download CV (PDF)",
      cvHref: "#",
      profileTitle: "Selected achievements",
      achievements: ["Established Turkey's first SAP global support hub (100+ FTE) to centralise worldwide service delivery for a global automotive OEM.", "Cut operating costs by 35% while improving service quality and delivery efficiency across global service operations.", "Built a 75+ person regional IT service organisation in three months — meeting demanding SLAs from day one.", "Led the financial-services sector's first SAP HANA reference implementation as an industry reference.", "Doubled the managed-services portfolio with significant recurring-revenue growth on strategic enterprise accounts.", "Delivered €1M+ transformation programmes consistently on time, on budget and with stable go-lives."],
      competenciesTitle: "Core competencies",
      competencies: ["Enterprise & Org. Transformation", "Managed Services & P&L", "Operating-Model Design", "Global Multi-Region Delivery", "Governance, Risk & Quality", "Enterprise Architecture (TOGAF)", "Bid & Proposal Management", "SLA / KPI & Performance", "AI Adoption & Change", "AI & Data-Led Transformation", "SAP / S/4HANA Transformation", "Program & Portfolio Leadership"],
      experienceTitle: "Professional experience",
      experience: [{
        company: "NTT DATA Business Solutions",
        dates: "Nov 2014 – Present",
        note: "Progressive leadership in service strategy, global delivery and programme management for major enterprises across EMEA & MENA.",
        roles: [{
          role: "Director, Service Sales & Delivery Strategy",
          points: ["Owned end-to-end multi-million-euro RFP/RFI processes for strategic IT and managed-services deals — win strategy, solution design, bid management, risk, pricing and final-round negotiation.", "Shaped commercial strategy for multi-year engagements: pricing frameworks, financial modelling, cost structures and contract design.", "Built service strategy and target operating models for managed services and large-scale transformation programmes."]
        }, {
          role: "Director, Global Services Business Integration & Development",
          points: ["Led service integration and expansion across EMEA & MENA, scaling delivery centers and mentoring senior leaders.", "Managed strategic transitions from global to local delivery and from external providers to internal Centers of Excellence."]
        }, {
          role: "Head of PMO & Customer Engagement Office",
          points: ["Set up and ran the PMO, standardising delivery methodology across the portfolio and directing a team of project managers.", "Served as Program / Transformation Lead on priority programmes (incl. B/S/H regional IT org and Daimler 100+ FTE global support hub)."]
        }]
      }, {
        company: "SAP Türkiye",
        dates: "May 2011 – Oct 2014",
        note: "Senior Business Transformation Project Manager — SAP S/4HANA transformation for sector leaders in manufacturing, automotive, financial services and aviation.",
        roles: [{
          role: "Selected programmes",
          points: ["Turkish Airlines — OCM Lead on the country's largest ERP transformation (~150 global team members).", "Eureko Sigorta — Programme Manager on the FS sector's first SAP HANA reference (22-person team).", "Arçelik — Programme Manager on a comprehensive MDM implementation (12-person team).", "Yapı Kredi Bank — trusted-advisor role on the first banking-sector ERP reference."]
        }]
      }, {
        company: "Metro Group Information AG — Düsseldorf, Germany",
        dates: "Oct 2005 – Apr 2011",
        note: "Senior Financial Consultant & Developer.",
        roles: [{
          role: "International SAP roll-outs",
          points: ["Progressed from ABAP development and SAP Basis into finance consulting, delivering international SAP roll-outs across Egypt, Kazakhstan, Slovakia, Türkiye, Belgium, Spain, Bulgaria and Pakistan."]
        }]
      }]
    },
    credentials: {
      eyebrow: "Capabilities",
      title: "Certified. Multilingual. Multi-country.",
      groups: [{
        label: "Certifications",
        items: ["PMI-RMP® — Risk Management Professional", "TOGAF® Enterprise Architecture", "ITIL® Foundation", "SAP Enterprise Architecture", "SAP Activate (Agile — Certified)", "SAP Business Transformation — SAP Academy", "Financial Reporting & Analysis — Deloitte"]
      }, {
        label: "Education",
        items: ["B.Sc. Business Information Systems (Wirtschaftsinformatik)", "Marmara University — German programme (2000–2005)"]
      }, {
        label: "Languages",
        items: ["Turkish — native", "English — fluent (written & spoken)", "German — advanced"]
      }, {
        label: "Reach",
        items: ["EMEA & MENA", "Egypt · Kazakhstan · Slovakia · Austria", "Belgium · Spain · Bulgaria · Pakistan · UAE · KSA"]
      }]
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's work together.",
      lede: "Whether a major bid is being prepared, an SAP or AI programme is underway, or an operating model needs rethinking, a conversation is welcome — including before the path is clear.",
      fields: {
        name: "Name",
        org: "Organisation",
        email: "Email",
        topic: "Area of interest",
        message: "How can I help?"
      },
      topics: ["SAP & S/4HANA", "Artificial Intelligence", "Managed Services", "Program & PMO", "Bid & RFP Advisory", "Center of Excellence", "Other"],
      send: "Send message",
      sent: "Thank you — your message has been received.",
      location: "Istanbul, Türkiye — available globally (remote & onsite)",
      email: "vildan@vildankara.com",
      phone: "+90 553 296 55 75",
      langs: "Turkish · English · German",
      linkedin: "LinkedIn"
    },
    footer: {
      tagline: "Executive advisory for enterprise transformation — SAP, AI, managed services and major bids, across EMEA & MENA.",
      copy: "© 2026 Vildan Kara Kayacan. All rights reserved.",
      colPages: "Pages",
      colContact: "Contact",
      colFollow: "Follow"
    }
  },
  tr: {
    brand: {
      name: "Vildan Kara Kayacan",
      role: "Executive Advisory"
    },
    nav: [{
      id: "services",
      label: "Hizmetler",
      href: "index.html#services"
    }, {
      id: "projects",
      label: "Projeler",
      href: "projects.html"
    }, {
      id: "insights",
      label: "Yazılar",
      href: "insights.html"
    }, {
      id: "about",
      label: "Hakkında",
      href: "about.html"
    }, {
      id: "contact",
      label: "İletişim",
      href: "index.html#contact"
    }],
    cta: "Görüşme planlayın",
    hero: {
      eyebrow: "Executive Advisory",
      title: ["SAP ya da AI.", "Dönüşüm önce insandır,", "sonra teknoloji."],
      lede: "Kurumsal dönüşüm için executive advisory — SAP, AI ve yönetilen hizmetler — insan tarafından yönetilir: teknolojiyi kalıcı sonuçlara dönüştüren organizasyonel değişim, yönetişim ve liderlik.",
      meta: ["25+ yıl", "EMEA & MENA", "İnsan odaklı değişim", "SAP × AI"],
      ctaPrimary: "Görüşme planlayın",
      ctaSecondary: "Hizmetleri görün",
      panelLabel: "Uzmanlık alanları"
    },
    stats: [{
      figure: "25+",
      label: "Yıl kurumsal dönüşüm deneyimi"
    }, {
      figure: "16",
      label: "EMEA & MENA genelinde ülke"
    }, {
      figure: "€1M+",
      label: "Program plana uygun teslim edildi"
    }, {
      figure: "%35",
      label: "Operasyonel maliyet düşüşü sağlandı"
    }],
    services: {
      eyebrow: "01 — Hizmetler",
      title: "Altı uzmanlık alanı. Tek bir insan odaklı standart.",
      lede: "Kurumsal dönüşüm gündeminin tamamında danışmanlık — stratejiden tedarikçi seçimine, teslimattan go-live'a ve işletme modeline kadar. Teknoloji işin kolay yarısı; kalıcı olan iş organizasyonel değişim, yönetişim ve onu taşıyan insanlardır. Her çalışma, hiçbir ürün veya tedarikçi gündeminden bağımsız, müşterinin sonucu için yürütülür.",
      items: [{
        title: "Organizasyonel Değişim & Dönüşüm",
        short: "Gerçekten yerleşen, insan odaklı değişim.",
        bullets: ["Liderlik hizalaması & paydaş katılımı", "İletişim & benimseme stratejisi", "Değişime hazırlık & etki analizi", "Eğitim, etkinleştirme & go-live desteği"],
        tags: ["OCM", "Benimseme", "Liderlik"]
      }, {
        title: "SAP S/4HANA",
        short: "Uçtan uca geçiş ve dönüşüm.",
        bullets: ["Aşamalı, düşük riskli dönüşüm yol haritası", "Go-live'a kadar program liderliği", "Hedef işletme modeli & yönetişim", "Stabilizasyon & go-live sonrası destek"],
        tags: ["S/4HANA", "Yol haritası", "Go-live"]
      }, {
        title: "Yapay Zeka & Veri",
        short: "AI pilotlarından üretim değerine.",
        bullets: ["GenAI stratejisi & kullanım senaryosu seçimi", "Veri & karar yönetişimi", "Benimseme & işletme modeli tasarımı", "Pilottan ölçülebilir değere"],
        tags: ["GenAI", "Yönetişim", "Benimseme"]
      }, {
        title: "Yönetilen Hizmetler, İşletme Modeli & CoE",
        short: "Kalıcı kurulan servis modelleri.",
        bullets: ["ITIL tabanlı servis & işletme modelleri", "SLA / KPI çerçeveleri & P&L sahipliği", "Çok bölgeli teslimat kurulumu", "SAP / AI Mükemmeliyet Merkezleri"],
        tags: ["ITIL", "İşletme modeli", "CoE"]
      }, {
        title: "Program & Portföy (PMO)",
        short: "Büyük programlar kontrol altında.",
        bullets: ["PMO kurulumu & yönetişim çerçeveleri", "Portföy denetimi & raporlama", "Risk, kapsam & bütçe kontrolü", "€1M+ program teslimatı"],
        tags: ["PMO", "Yönetişim", "Teslimat"]
      }, {
        title: "İhale, RFP & Tedarikçi Danışmanlığı",
        short: "Masanın müşteri tarafında.",
        bullets: ["RFP / RFI tasarımı & değerlendirme", "Kazanma stratejisi & çözüm şekillendirme", "Fiyatlama & ticari modelleme", "Son tur müzakere desteği"],
        tags: ["RFP / RFI", "Strateji", "Fiyatlama"]
      }],
      healthcheck: {
        eyebrow: "Buradan başlayın",
        title: "Dönüşüm Health Check",
        body: "Bir programın ya da SAP ortamının gerçekte nerede durduğuna dair bağımsız bir teşhis — riskler, boşluklar ve net bir sonraki adımlar seti. Bütçe ayrılmadan önce çoğu zaman doğru ilk adım.",
        bullets: ["Program & teslimat risk incelemesi", "İşletme modeli & yönetişim boşlukları", "Net, önceliklendirilmiş öneriler"],
        cta: "Health check talep edin"
      }
    },
    approach: {
      eyebrow: "Yöntem",
      title: "Düz bir çizgi değil, bir döngü.",
      lede: "Her çalışma aynı titizliği izler — ve döngü halinde devam eder: tavsiyeden önce anlamak, inşadan önce tasarlamak, teslim etmek, sonra iyileştirip yeniden başlamak.",
      steps: [{
        n: "01",
        title: "Teşhis & Tanımlama",
        body: "Ortam, işletme modeli, riskler ve paydaşlar haritalanır — gerçekte nerede durduğuna ve başarının ne anlama geldiğine dair net bir okuma."
      }, {
        n: "02",
        title: "Planlama & Tasarım",
        body: "Aşamalı, düşük riskli bir yol haritası ve hedef işletme modeli tanımlanır; yönetişim, KPI'lar ve iş değerine doğrudan bir hat ile."
      }, {
        n: "03",
        title: "Teslimat & İyileştirme",
        body: "Programlar go-live ve stabilizasyona kadar yönetilir — sonra ölçülür, rafine edilir ve sürekli iyileştirilir; bir sonraki döngüyü besler."
      }],
      caption: "Strateji; aşamalı, yönetilebilir ve sürekli iyileşen bir programa dönüştürülür.",
      tagline: "Metodik bir yaklaşımda başarı tesadüf değildir — tasarlanır."
    },
    work: {
      eyebrow: "02 — Seçili Çalışmalar",
      title: "Referans olan çalışmalar.",
      items: [{
        result: "Finans sektöründe Türkiye'nin ilk SAP HANA referans implementasyonu — 22 kişilik ekiple plana uygun teslim edildi.",
        sector: "Finans",
        role: "Program Yöneticisi",
        client: "Eureko Sigorta"
      }, {
        result: "Ülkenin en büyük ERP dönüşümünde organizasyonel değişim yönetildi — ~150 kişilik global program.",
        sector: "Havacılık",
        role: "OCM Lideri",
        client: "Türk Hava Yolları"
      }, {
        result: "Global bir OEM için dünya genelinde teslimatı birleştiren, Türkiye'nin ilk 100+ FTE SAP global destek merkezi sıfırdan kuruldu.",
        sector: "Otomotiv",
        role: "Kıdemli Servis Yöneticisi",
        client: "Daimler CoE"
      }, {
        result: "75+ kişilik bölgesel IT servis organizasyonu üç ayda sıfırdan kuruldu — zorlu SLA'lar ilk günden karşılandı.",
        sector: "Üretim",
        role: "Servis Teslimat Lideri",
        client: "Bosch-Siemens (B/S/H)"
      }, {
        result: "12 kişilik ekiple kapsamlı bir ana veri yönetimi (MDM) uygulaması yönetildi; veri mimarisi ve yönetişim güçlendirildi.",
        sector: "Dayanıklı Tüketim",
        role: "Program Yöneticisi",
        client: "Arçelik"
      }, {
        result: "Yönetilen hizmetler portföyü, güçlü yinelenen gelir artışıyla ikiye katlandı; global teslimatta faaliyet maliyetleri %35 düşürüldü.",
        sector: "Sektörler arası",
        role: "Servis Satış & Teslimat Direktörü",
        client: "NTT DATA"
      }]
    },
    projects: {
      eyebrow: "Uygulamalı AI",
      title: "Kendi geliştirdiği projeler.",
      lede: "Danışmanlığın ötesinde, yapay zeka doğrudan uygulanır — AI'ın kurumsal dönüşümde ve ötesinde nerede gerçek değer yarattığını sınamak için geliştirilmiş, büyüyen bir ürün portföyü. Her biri çalışan bir deney olarak başladı; bazıları yayında.",
      visit: "Projeyi gör",
      details: "Detayları gör",
      all: "Tüm projeler",
      items: [{
        name: "SAP Activa",
        kind: "SAP × AI",
        status: "Aktif",
        body: "SAP program yönetimini yapay zeka ile güçlendiren araç seti: proje sağlık skorlama, risk tahmini, kaynak optimizasyonu ve otomatik durum raporlama — SAP Activate metodolojisinin AI ile entegrasyonu.",
        link: "#"
      }, {
        name: "Segmentil",
        kind: "Analitik",
        status: "Geliştiriliyor",
        body: "Kurumsal müşteri portföylerini yapay zeka ile segmentleyen ve davranış tahmini üreten platform — RFM analizi, churn tahmini ve müşteri yaşam boyu değeri; satış ve müşteri başarı ekipleri için karar destek aracı.",
        link: "#"
      }, {
        name: "Yazbix",
        kind: "Uygulamalı AI",
        status: "Aktif",
        body: "Düşünceleri, anıları ve notları yapay zeka desteğiyle kayıt altına alan dijital anı defteri — sesten metne, duygu analizi ve akıllı etiketleme ile kişisel hafıza platformu.",
        link: "#"
      }, {
        name: "Sosyal Medya Stüdyosu",
        kind: "Uygulamalı AI",
        status: "Geliştiriliyor",
        body: "Küçük işletmeler ve girişimciler için yapay zeka destekli içerik ve zamanlama platformu — içerik önerileri, zamanlama optimizasyonu ve performans analitikleri.",
        link: "#"
      }, {
        name: "Çocuklar için İngilizce",
        kind: "EdTech",
        status: "Aktif",
        body: "Çocuklara yönelik interaktif İngilizce kelime platformu: görsel kartlar, sesli telaffuz ve oyunlaştırılmış tekrar — AI ile kişiselleştirilmiş öğrenme yolu.",
        link: "#"
      }, {
        name: "Devam Eden Proje",
        kind: "Yakında",
        status: "Yakında",
        body: "Geliştirme aşamasında yeni bir uygulamalı AI projesi; kurumsal dönüşümdeki gerçek bir problemi hedefliyor. Yakında paylaşılacak — bağlantıda kalın.",
        link: "#contact"
      }]
    },
    insights: {
      eyebrow: "Yazılar",
      title: "Dönüşümün sahasından notlar.",
      lede: "SAP, yapay zeka ve değişimi kalıcı kılan işletme modelleri üzerine bakışlar — CIO'lar ve üst düzey IT liderleri için.",
      readMore: "Oku",
      all: "Tüm yazılar",
      items: [{
        tag: "Makale",
        read: "5 dk okuma",
        title: "SAP S/4HANA geçişlerinde neden başarısız olunur?",
        text: "Temel neden teknoloji değil — insan ve süreç boyutundaki eksiklikler. Kalıcı programları ayıran nedir."
      }, {
        tag: "Makale",
        read: "4 dk okuma",
        title: "Yapay zeka kurumları nasıl dönüştürüyor?",
        text: "AI sadece teknoloji değil, organizasyonel bir dönüşüm. Benimseme nerede gerçekten başarılı olur — ve neden."
      }, {
        tag: "Makale",
        read: "3 dk okuma",
        title: "Sektörün önünde kalmak",
        text: "Değişim hızlanıyor. CIO'ların aciliyet kazanmadan önce bugün hazırlanması gereken üç alan."
      }, {
        tag: "Makale",
        read: "6 dk okuma",
        title: "Tedarikçi seçiminde 10 kritik hata",
        text: "Yanlış tedarikçi seçimi bir dönüşüm programının en büyük riski olabilir. En sık karşılaşılan on hata."
      }, {
        tag: "Makale",
        read: "4 dk okuma",
        title: "Yönetilen hizmetlerde değer yaratma",
        text: "ITIL sadece bir çerçeve değil, operasyonel mükemmelliğin temelidir. Servis modelleri değeri nasıl yaratır — ya da yok eder."
      }, {
        tag: "Makale",
        read: "5 dk okuma",
        title: "Geçici trend mi, kalıcı değişim mi?",
        text: "Her yeni teknolojiyi trend olarak mı görmeli? Sinyali gürültüden ayırmak için basit bir test."
      }]
    },
    ctaBand: {
      eyebrow: "Konuşalım",
      title: "Kalıcı dönüşüm bir görüşmeyle başlar.",
      cta: "Görüşme planlayın"
    },
    footprintHead: {
      eyebrow: "Global Erişim",
      title: "On altı ülke. Tek bir teslimat standardı.",
      lede: "EMEA & MENA genelinde on altı ülkede program ve servis organizasyonları yürütüldü. Detay için bir işaret seçin.",
      hint: "Bir ülke seçin"
    },
    aboutPage: {
      eyebrow: "Hakkında",
      name: "Vildan Kara Kayacan",
      role: "İş, Teknoloji & Yapay Zeka Dönüşüm Yöneticisi",
      tags: "SAP & Kurumsal Mimari · Yönetilen Hizmetler · AI Dönüşümü",
      lede: "Yirmi beş yıl boyunca dönüşüm stratejisini ölçülebilir iş değerine dönüştürdü — EMEA & MENA genelindeki stratejik kurumlar için.",
      bio: ["Vildan Kara Kayacan, EMEA & MENA genelindeki stratejik kurumlar için büyük ölçekli dönüşüm, yönetilen hizmetler ve global teslimatı yöneten, 25+ yıllık deneyime sahip bir iş ve teknoloji dönüşüm yöneticisidir. Sicili somuttur: ikiye katlanan bir yönetilen hizmetler portföyü, üçte bir oranında düşürülen faaliyet maliyetleri ve sıfırdan kurulan çok ülkeli teslimat organizasyonları.", "Çalışması, kurumsal SAP dönüşümü ile uygulanan yapay zekanın nadir kesişiminde yer alır — hem teknolojiyi hem de benimsemenin arkasındaki organizasyonel değişimi yönetir. Derin SAP teslimatı, sahada yapay zeka ve gerçek değişim yönetimi tek bir profilde: büyük kurumların bugün tam da ihtiyaç duyduğu şey.", "Bugün CIO'lara ve yönetim ekiplerine güvenilen bir partner olarak danışmanlık verir — S/4HANA geçişi, yönetilen hizmet yeniden yapılandırması, AI benimseme, bir Mükemmeliyet Merkezi tasarımı ya da deneyimli bir el gerektiren yüksek bahisli ihalelerde yön gösterir. Çalışmalar, danışmanlık veya kıdemli program liderliği rolünde, seçici biçimde kabul edilir."],
      cvLabel: "CV indir (PDF)",
      cvHref: "#",
      profileTitle: "Öne çıkan başarılar",
      achievements: ["Global bir otomotiv OEM'i için dünya geneli servis teslimatını merkezileştirmek üzere Türkiye'nin ilk SAP global destek merkezini (100+ FTE) kurdu.", "Global servis operasyonlarında servis kalitesini ve teslimat verimliliğini artırırken faaliyet maliyetlerini %35 düşürdü.", "Üç ayda 75+ kişilik bölgesel IT servis organizasyonu kurdu — zorlu SLA'ları ilk günden karşıladı.", "Finans sektörünün ilk SAP HANA referans uygulamasını sektör referansı olarak yönetti.", "Stratejik kurumsal hesaplarda önemli yinelenen gelir artışıyla yönetilen hizmetler portföyünü ikiye katladı.", "€1M+ dönüşüm programlarını tutarlı biçimde zamanında, bütçe dahilinde ve stabil go-live'larla teslim etti."],
      competenciesTitle: "Temel yetkinlikler",
      competencies: ["Kurumsal & Org. Dönüşümü", "Yönetilen Hizmetler & P&L", "İşletme Modeli Tasarımı", "Global Çok Bölgeli Teslimat", "Yönetişim, Risk & Kalite", "Kurumsal Mimari (TOGAF)", "Teklif & Öneri Yönetimi", "SLA / KPI & Performans", "AI Benimseme & Değişim", "AI & Veri Odaklı Dönüşüm", "SAP / S/4HANA Dönüşümü", "Program & Portföy Liderliği"],
      experienceTitle: "Profesyonel deneyim",
      experience: [{
        company: "NTT DATA Business Solutions",
        dates: "Kas 2014 – Günümüz",
        note: "EMEA & MENA'daki büyük kurumlar için servis stratejisi, global teslimat ve program yönetiminde aşamalı liderlik.",
        roles: [{
          role: "Direktör, Servis Satışı & Teslimat Stratejisi",
          points: ["Stratejik IT ve yönetilen hizmet anlaşmaları için uçtan uca çok milyon euroluk RFP/RFI süreçlerini yönetti — kazanma stratejisi, çözüm tasarımı, teklif yönetimi, risk, fiyatlama ve son tur müzakere.", "Çok yıllı angajmanlar için ticari strateji şekillendirdi: fiyatlama çerçeveleri, finansal modelleme, maliyet yapıları ve sözleşme tasarımı.", "Yönetilen hizmetler ve büyük ölçekli dönüşüm programları için servis stratejisi ve hedef işletme modelleri kurdu."]
        }, {
          role: "Direktör, Global Servisler İş Entegrasyonu & Geliştirme",
          points: ["EMEA & MENA genelinde servis entegrasyonu ve genişlemesini yönetti; teslimat merkezlerini ölçeklendirdi ve üst düzey liderlere mentörlük yaptı.", "Global teslimattan yerel teslimata ve dış sağlayıcılardan iç Mükemmeliyet Merkezlerine stratejik geçişleri yönetti."]
        }, {
          role: "PMO & Müşteri Katılım Ofisi Başkanı",
          points: ["PMO'yu kurdu ve yönetti; portföy genelinde teslimat metodolojisini standartlaştırdı ve bir proje yöneticileri ekibini yönlendirdi.", "Öncelikli programlarda (B/S/H bölgesel IT org. ve Daimler 100+ FTE global destek merkezi dahil) Program / Dönüşüm Lideri olarak görev yaptı."]
        }]
      }, {
        company: "SAP Türkiye",
        dates: "May 2011 – Eki 2014",
        note: "Kıdemli İş Dönüşümü Proje Yöneticisi — üretim, otomotiv, finans ve havacılık sektör liderleri için SAP S/4HANA dönüşümü.",
        roles: [{
          role: "Seçili programlar",
          points: ["Türk Hava Yolları — Ülkenin en büyük ERP dönüşümünde OCM Lideri (~150 global ekip üyesi).", "Eureko Sigorta — Finans sektörünün ilk SAP HANA referansında Program Yöneticisi (22 kişilik ekip).", "Arçelik — Kapsamlı bir MDM uygulamasında Program Yöneticisi (12 kişilik ekip).", "Yapı Kredi Bankası — İlk bankacılık sektörü ERP referansında güvenilen danışman rolü."]
        }]
      }, {
        company: "Metro Group Information AG — Düsseldorf, Almanya",
        dates: "Eki 2005 – Nis 2011",
        note: "Kıdemli Finansal Danışman & Geliştirici.",
        roles: [{
          role: "Uluslararası SAP roll-out'ları",
          points: ["ABAP geliştirme ve SAP Basis'ten finans danışmanlığına ilerledi; Mısır, Kazakistan, Slovakya, Türkiye, Belçika, İspanya, Bulgaristan ve Pakistan'da uluslararası SAP roll-out'ları gerçekleştirdi."]
        }]
      }]
    },
    credentials: {
      eyebrow: "Yetkinlikler",
      title: "Sertifikalı. Çok dilli. Çok ülkeli.",
      groups: [{
        label: "Sertifikalar",
        items: ["PMI-RMP® — Risk Yönetimi Uzmanı", "TOGAF® Kurumsal Mimari", "ITIL® Foundation", "SAP Kurumsal Mimari", "SAP Activate (Agile — Sertifikalı)", "SAP Business Transformation — SAP Academy", "Finansal Raporlama & Analiz — Deloitte"]
      }, {
        label: "Eğitim",
        items: ["B.Sc. İş Bilgi Sistemleri (Wirtschaftsinformatik)", "Marmara Üniversitesi — Almanca program (2000–2005)"]
      }, {
        label: "Diller",
        items: ["Türkçe — anadil", "İngilizce — ileri (yazılı & sözlü)", "Almanca — ileri"]
      }, {
        label: "Kapsam",
        items: ["EMEA & MENA", "Mısır · Kazakistan · Slovakya · Avusturya", "Belçika · İspanya · Bulgaristan · Pakistan · BAE · S. Arabistan"]
      }]
    },
    contact: {
      eyebrow: "İletişim",
      title: "Birlikte çalışalım.",
      lede: "İster büyük bir ihaleye hazırlanılıyor, ister bir SAP ya da AI programı yürütülüyor, ister bir işletme modeli yeniden ele alınıyor olsun — yol netleşmeden önce dahi bir görüşme memnuniyetle karşılanır.",
      fields: {
        name: "Ad Soyad",
        org: "Kurum",
        email: "E-posta",
        topic: "İlgi alanı",
        message: "Nasıl yardımcı olabilirim?"
      },
      topics: ["SAP & S/4HANA", "Yapay Zeka", "Yönetilen Hizmetler", "Program & PMO", "İhale & RFP Danışmanlığı", "Mükemmeliyet Merkezi", "Diğer"],
      send: "Mesaj gönder",
      sent: "Teşekkürler — mesajınız alındı.",
      location: "İstanbul, Türkiye — global çalışma (uzaktan & yerinde)",
      email: "vildan@vildankara.com",
      phone: "+90 553 296 55 75",
      langs: "Türkçe · İngilizce · Almanca",
      linkedin: "LinkedIn"
    },
    footer: {
      tagline: "Kurumsal dönüşüm için executive advisory — SAP, AI, yönetilen hizmetler ve büyük ihaleler, EMEA & MENA genelinde.",
      copy: "© 2026 Vildan Kara Kayacan. Tüm hakları saklıdır.",
      colPages: "Sayfalar",
      colContact: "İletişim",
      colFollow: "Takip"
    }
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

// ui_kits/website/helpers.jsx
try { (() => {
/* Shared helpers for the website UI kit. Exposes window.VKWeb. */
(function () {
  const {
    useRef,
    useState,
    useEffect
  } = React;

  /* Reveal — content is ALWAYS visible. A subtle entrance is layered on
     only as enhancement (no backwards fill), so if the animation engine
     never ticks the element simply stays in its natural, visible state. */
  function Reveal({
    children,
    delay = 0,
    as = "div",
    style = {},
    className
  }) {
    const Tag = as;
    return /*#__PURE__*/React.createElement(Tag, {
      className: className,
      style: {
        animation: `vkRise 620ms var(--ease-out) ${delay}ms 1 normal`,
        ...style
      }
    }, children);
  }

  /* Section heading block: eyebrow → serif title → optional lede. */
  function Heading({
    eyebrow,
    title,
    lede,
    onInk = false,
    align = "left",
    maxWidth = "22ch",
    ledeWidth = "52ch"
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        alignItems: align === "center" ? "center" : "flex-start",
        textAlign: align
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow" + (onInk ? " eyebrow--on-ink" : "")
    }, eyebrow), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: "var(--font-serif)",
        fontSize: "var(--t-display-m)",
        lineHeight: "var(--lh-snug)",
        letterSpacing: "var(--ls-display)",
        margin: 0,
        maxWidth,
        color: onInk ? "var(--text-on-ink)" : "var(--text-strong)"
      }
    }, title), lede && /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: "var(--t-body-l)",
        lineHeight: 1.5,
        margin: 0,
        maxWidth: ledeWidth,
        color: onInk ? "var(--text-on-ink-muted)" : "var(--text-muted)"
      }
    }, lede));
  }
  window.VKWeb = window.VKWeb || {};
  window.VKWeb.Reveal = Reveal;
  window.VKWeb.Heading = Heading;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/helpers.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/page-about.jsx
try { (() => {
/* About page sections — exposes window.VKWeb.AboutPage */
(function () {
  const DS = window.VildanKaraKayacanAdvisoryBrandSystem_6a049d;
  const {
    Reveal,
    Heading
  } = window.VKWeb;

  /* ---------------- ABOUT HERO ---------------- */
  function AboutHero({
    t,
    img
  }) {
    const a = t.aboutPage;
    return /*#__PURE__*/React.createElement("header", {
      style: {
        position: "relative",
        background: "var(--bg-ink)",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      "aria-hidden": "true",
      style: {
        position: "absolute",
        inset: 0,
        backgroundImage: "url(https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&w=1600&q=70)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        filter: "grayscale(1) brightness(0.6) contrast(1.08)",
        opacity: 0.42
      }
    }), /*#__PURE__*/React.createElement("div", {
      "aria-hidden": "true",
      style: {
        position: "absolute",
        inset: 0,
        background: "linear-gradient(120deg, rgba(10,20,33,0.92) 0%, rgba(10,20,33,0.7) 55%, rgba(26,43,64,0.5) 100%)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      "aria-hidden": "true",
      style: {
        position: "absolute",
        inset: 0,
        background: "radial-gradient(70% 70% at 88% 16%, rgba(190,150,87,0.16) 0%, transparent 56%)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "container vk-abouthero",
      style: {
        position: "relative",
        display: "grid",
        gridTemplateColumns: "1.2fr 0.8fr",
        gap: "56px",
        alignItems: "center",
        paddingTop: "150px",
        paddingBottom: "var(--section-y)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow eyebrow--on-ink"
    }, a.eyebrow)), /*#__PURE__*/React.createElement(Reveal, {
      delay: 60
    }, /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: "var(--font-serif)",
        fontSize: "clamp(2.6rem, 1.4rem + 3.6vw, 4.2rem)",
        lineHeight: 1.06,
        letterSpacing: "-0.022em",
        color: "var(--text-on-ink)",
        margin: "22px 0 0"
      }
    }, a.name)), /*#__PURE__*/React.createElement(Reveal, {
      delay: 110
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: "var(--t-body-l)",
        fontWeight: 500,
        color: "var(--accent-on-ink)",
        marginTop: "16px"
      }
    }, a.role), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: "var(--t-micro)",
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        color: "var(--text-on-ink-faint)",
        marginTop: "10px"
      }
    }, a.tags)), /*#__PURE__*/React.createElement(Reveal, {
      delay: 160
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: "var(--t-body-l)",
        lineHeight: 1.6,
        color: "var(--text-on-ink-muted)",
        maxWidth: "40ch",
        margin: "26px 0 0"
      }
    }, a.lede)), /*#__PURE__*/React.createElement(Reveal, {
      delay: 210
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: "14px",
        flexWrap: "wrap",
        marginTop: "34px"
      }
    }, /*#__PURE__*/React.createElement(DS.Button, {
      variant: "accent",
      trailingArrow: true,
      href: a.cvHref
    }, a.cvLabel), /*#__PURE__*/React.createElement("a", {
      href: "index.html#contact",
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: "15px",
        fontWeight: 500,
        color: "var(--text-on-ink)",
        border: "1px solid rgba(236,240,244,0.32)",
        borderRadius: "var(--r-sm)",
        padding: "13px 24px",
        display: "inline-flex",
        alignItems: "center",
        transition: "border-color var(--dur-fast)"
      },
      onMouseEnter: e => e.currentTarget.style.borderColor = "var(--accent-on-ink)",
      onMouseLeave: e => e.currentTarget.style.borderColor = "rgba(236,240,244,0.32)"
    }, t.contact.title)))), /*#__PURE__*/React.createElement(Reveal, {
      delay: 120,
      className: "vk-abouthero-photo",
      style: {
        justifySelf: "end"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        width: "min(360px, 34vw)",
        aspectRatio: "4/5",
        borderRadius: "var(--r-md)",
        overflow: "hidden",
        border: "1px solid var(--line-accent)",
        boxShadow: "var(--shadow-lg)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      "aria-hidden": "true",
      style: {
        position: "absolute",
        inset: 0,
        backgroundImage: `url(${window.SITE.aux.aboutHero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        filter: "grayscale(1) brightness(0.72) contrast(1.06)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      "aria-hidden": "true",
      style: {
        position: "absolute",
        inset: 0,
        background: "radial-gradient(120% 90% at 100% 0%, rgba(190,150,87,0.22) 0%, transparent 60%)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      "aria-hidden": "true",
      style: {
        position: "absolute",
        inset: 0,
        background: "linear-gradient(180deg, rgba(10,20,33,0.10) 40%, rgba(10,20,33,0.58) 100%)"
      }
    })))));
  }

  /* ---------------- BIO ---------------- */
  function Bio({
    t,
    img
  }) {
    const a = t.aboutPage;
    return /*#__PURE__*/React.createElement("section", {
      style: {
        background: "var(--paper)",
        padding: "var(--section-y) 0"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "container vk-bio-grid",
      style: {
        display: "grid",
        gridTemplateColumns: "0.8fr 1.2fr",
        gap: "64px",
        alignItems: "start"
      }
    }, /*#__PURE__*/React.createElement(Reveal, {
      className: "vk-bio-photo"
    }, /*#__PURE__*/React.createElement("figure", {
      style: {
        margin: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        aspectRatio: "4/5",
        borderRadius: "var(--r-md)",
        overflow: "hidden",
        border: "1px solid var(--line-strong)",
        boxShadow: "var(--shadow-md)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      "aria-hidden": "true",
      style: {
        position: "absolute",
        inset: 0,
        backgroundImage: `url(${window.SITE.aux.aboutBio})`,
        backgroundSize: "cover",
        backgroundPosition: "center top",
        filter: "grayscale(1) brightness(0.74) contrast(1.05)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      "aria-hidden": "true",
      style: {
        position: "absolute",
        inset: 0,
        background: "radial-gradient(120% 90% at 0% 100%, rgba(190,150,87,0.18) 0%, transparent 58%)"
      }
    })))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, t.aboutPage.profileNote || "Profile")), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: "24px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        maxWidth: "62ch"
      }
    }, a.bio.map((p, i) => /*#__PURE__*/React.createElement(Reveal, {
      key: i,
      delay: i * 60
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: "var(--t-body)",
        lineHeight: 1.7,
        color: "var(--text-body)",
        margin: 0
      }
    }, p)))))));
  }

  /* ---------------- EXPERIENCE TIMELINE ---------------- */
  function Experience({
    t
  }) {
    const a = t.aboutPage;
    return /*#__PURE__*/React.createElement("section", {
      style: {
        background: "var(--mist-50)",
        padding: "var(--section-y) 0",
        borderTop: "1px solid var(--line)",
        borderBottom: "1px solid var(--line)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "container"
    }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Heading, {
      eyebrow: "04 \u2014 Experience",
      title: a.experienceTitle,
      maxWidth: "20ch"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: "52px"
      }
    }, a.experience.map((job, i) => /*#__PURE__*/React.createElement(Reveal, {
      key: i,
      delay: i * 60
    }, /*#__PURE__*/React.createElement("div", {
      className: "vk-exp-row",
      style: {
        display: "grid",
        gridTemplateColumns: "0.9fr 2.1fr",
        gap: "40px",
        padding: "36px 0",
        borderTop: "1px solid var(--line-strong)"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-serif)",
        fontSize: "1.3rem",
        lineHeight: 1.2,
        color: "var(--text-strong)"
      }
    }, job.company), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: "var(--t-micro)",
        letterSpacing: "0.1em",
        color: "var(--accent-strong)",
        marginTop: "10px"
      }
    }, job.dates), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: "var(--t-body-s)",
        lineHeight: 1.55,
        color: "var(--text-muted)",
        margin: "14px 0 0",
        maxWidth: "34ch"
      }
    }, job.note)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "24px"
      }
    }, job.roles.map((r, j) => /*#__PURE__*/React.createElement("div", {
      key: j
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: "var(--t-body)",
        fontWeight: 600,
        color: "var(--text-strong)",
        marginBottom: "12px"
      }
    }, r.role), /*#__PURE__*/React.createElement("ul", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "10px"
      }
    }, r.points.map((pt, k) => /*#__PURE__*/React.createElement("li", {
      key: k,
      style: {
        display: "flex",
        gap: "12px",
        fontSize: "var(--t-body-s)",
        lineHeight: 1.55,
        color: "var(--text-body)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--accent-strong)",
        flexShrink: 0
      }
    }, "\u2014"), pt))))))))))));
  }

  /* ---------------- ACHIEVEMENTS + COMPETENCIES ---------------- */
  function Highlights({
    t
  }) {
    const a = t.aboutPage;
    return /*#__PURE__*/React.createElement("section", {
      style: {
        position: "relative",
        overflow: "hidden",
        background: "var(--ink-800)",
        padding: "var(--section-y) 0"
      }
    }, /*#__PURE__*/React.createElement("div", {
      "aria-hidden": "true",
      style: {
        position: "absolute",
        inset: 0,
        backgroundImage: "url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=70)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        filter: "grayscale(1) brightness(0.6) contrast(1.08)",
        opacity: 0.46
      }
    }), /*#__PURE__*/React.createElement("div", {
      "aria-hidden": "true",
      style: {
        position: "absolute",
        inset: 0,
        background: "linear-gradient(180deg, rgba(10,20,33,0.84) 0%, rgba(10,20,33,0.6) 45%, rgba(10,20,33,0.88) 100%)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      "aria-hidden": "true",
      style: {
        position: "absolute",
        inset: 0,
        background: "radial-gradient(55% 55% at 100% 0%, rgba(190,150,87,0.12) 0%, transparent 55%)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "container",
      style: {
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "vk-high-grid",
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "64px",
        alignItems: "start"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Heading, {
      eyebrow: "05 \u2014 Track record",
      title: a.profileTitle,
      onInk: true,
      maxWidth: "16ch"
    })), /*#__PURE__*/React.createElement("ol", {
      style: {
        marginTop: "36px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        counterReset: "ach"
      }
    }, a.achievements.map((it, i) => /*#__PURE__*/React.createElement(Reveal, {
      key: i,
      delay: i * 50,
      as: "li"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "auto 1fr",
        gap: "18px",
        paddingBottom: "20px",
        borderBottom: "1px solid var(--line-on-ink)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: "12px",
        color: "var(--accent-on-ink)",
        paddingTop: "3px"
      }
    }, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: "var(--t-body-s)",
        lineHeight: 1.6,
        color: "var(--text-on-ink-muted)",
        margin: 0
      }
    }, it)))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
      className: "eyebrow eyebrow--on-ink",
      style: {
        marginBottom: "28px"
      }
    }, a.competenciesTitle)), /*#__PURE__*/React.createElement(Reveal, {
      delay: 80
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexWrap: "wrap",
        gap: "10px"
      }
    }, a.competencies.map((c, i) => /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: "var(--t-body-s)",
        color: "var(--text-on-ink)",
        background: "rgba(236,240,244,0.05)",
        border: "1px solid var(--line-on-ink)",
        borderRadius: "var(--r-pill)",
        padding: "9px 16px"
      }
    }, c))))))));
  }
  window.VKWeb = window.VKWeb || {};
  window.VKWeb.AboutPage = {
    AboutHero,
    Bio,
    Experience,
    Highlights
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/page-about.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/page-detail.jsx
try { (() => {
/* Detail pages — Article & Project. exposes window.VKWeb.Detail */
(function () {
  const {
    Reveal
  } = window.VKWeb;
  const DS = window.VildanKaraKayacanAdvisoryBrandSystem_6a049d;
  const SITE = window.SITE;
  const STATUS = {
    "Active": "#1F8A5B",
    "Aktif": "#1F8A5B",
    "In development": "#C18A2E",
    "Geliştiriliyor": "#C18A2E",
    "Coming soon": "#3C6FB0",
    "Yakında": "#3C6FB0"
  };
  function getId(len) {
    const n = parseInt(new URLSearchParams(location.search).get("id") || "0", 10);
    return isNaN(n) ? 0 : Math.max(0, Math.min(len - 1, n));
  }
  const qlang = lang => "&lang=" + lang;

  /* ---------------- ARTICLE DETAIL ---------------- */
  function ArticleDetail({
    t,
    lang
  }) {
    const items = t.insights.items;
    const id = getId(items.length);
    const it = items[id];
    const L = SITE.detail[lang].labels;
    const body = SITE.detail[lang].insightBodies[id] || [];
    const others = items.map((x, i) => ({
      x,
      i
    })).filter(o => o.i !== id).slice(0, 3);
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("header", {
      style: {
        background: "var(--bg-ink)",
        padding: "140px 0 var(--section-y)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "container",
      style: {
        maxWidth: "820px"
      }
    }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("a", {
      href: "insights.html?lang=" + lang,
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: "11px",
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        color: "var(--accent-on-ink)"
      }
    }, "\u2190 ", L.back)), /*#__PURE__*/React.createElement(Reveal, {
      delay: 60
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: "12px",
        fontFamily: "var(--font-mono)",
        fontSize: "11px",
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        color: "var(--text-on-ink-faint)",
        margin: "26px 0 16px"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--accent-on-ink)"
      }
    }, it.tag), /*#__PURE__*/React.createElement("span", null, "\xB7 ", it.read))), /*#__PURE__*/React.createElement(Reveal, {
      delay: 100
    }, /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: "var(--font-serif)",
        fontSize: "clamp(2.2rem, 1.3rem + 3vw, 3.4rem)",
        lineHeight: 1.1,
        letterSpacing: "-0.02em",
        color: "var(--text-on-ink)",
        margin: 0
      }
    }, it.title)), /*#__PURE__*/React.createElement(Reveal, {
      delay: 150
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: "var(--t-body-l)",
        lineHeight: 1.55,
        color: "var(--text-on-ink-muted)",
        margin: "22px 0 0",
        maxWidth: "56ch"
      }
    }, it.text)), /*#__PURE__*/React.createElement(Reveal, {
      delay: 200
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: "12px",
        marginTop: "30px",
        paddingTop: "22px",
        borderTop: "1px solid var(--line-on-ink)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-serif)",
        fontSize: "16px",
        color: "var(--text-on-ink)"
      }
    }, L.byline), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: "10.5px",
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        color: "var(--text-on-ink-faint)"
      }
    }, "\xB7 ", t.brand.role))))), /*#__PURE__*/React.createElement("article", {
      style: {
        background: "var(--paper)",
        padding: "var(--section-y) 0"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "container",
      style: {
        maxWidth: "720px"
      }
    }, body.map((p, i) => /*#__PURE__*/React.createElement(Reveal, {
      key: i,
      delay: i * 40
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: "1.1875rem",
        lineHeight: 1.75,
        color: "var(--text-body)",
        margin: "0 0 1.5rem",
        maxWidth: "none"
      }
    }, p))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: "20px",
        paddingTop: "32px",
        borderTop: "1px solid var(--line)",
        display: "flex",
        gap: "14px",
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement(DS.Button, {
      variant: "accent",
      trailingArrow: true,
      href: "index.html#contact"
    }, L.talk), /*#__PURE__*/React.createElement("a", {
      href: "insights.html?lang=" + lang,
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: "15px",
        fontWeight: 500,
        color: "var(--text-strong)",
        border: "1px solid var(--border-strong)",
        borderRadius: "var(--r-sm)",
        padding: "13px 24px"
      }
    }, L.back)))), /*#__PURE__*/React.createElement("section", {
      style: {
        background: "var(--mist-50)",
        padding: "var(--section-y) 0",
        borderTop: "1px solid var(--line)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "eyebrow",
      style: {
        marginBottom: "28px"
      }
    }, L.related), /*#__PURE__*/React.createElement("div", {
      className: "vk-insights-grid",
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "18px"
      }
    }, others.map(({
      x,
      i
    }) => /*#__PURE__*/React.createElement("a", {
      key: i,
      href: "article.html?id=" + i + qlang(lang),
      style: {
        display: "block",
        background: "var(--surface-card)",
        border: "1px solid var(--line)",
        borderRadius: "var(--r-md)",
        padding: "24px",
        boxShadow: "var(--shadow-sm)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: "10.5px",
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        color: "var(--accent-strong)",
        marginBottom: "12px"
      }
    }, x.tag, " \xB7 ", x.read), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-serif)",
        fontSize: "1.2rem",
        lineHeight: 1.2,
        color: "var(--text-strong)"
      }
    }, x.title)))))));
  }

  /* ---------------- PROJECT DETAIL ---------------- */
  function ProjectDetail({
    t,
    lang
  }) {
    const items = t.projects.items;
    const id = getId(items.length);
    const it = items[id];
    const L = SITE.detail[lang].labels;
    const body = SITE.detail[lang].projectBodies[id] || [];
    const features = SITE.detail[lang].projectFeatures[id] || [];
    const dot = STATUS[it.status] || "var(--slate-400)";
    const others = items.map((x, i) => ({
      x,
      i
    })).filter(o => o.i !== id).slice(0, 3);
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("header", {
      style: {
        background: "var(--bg-ink)",
        padding: "140px 0 var(--section-y)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "container",
      style: {
        maxWidth: "900px"
      }
    }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("a", {
      href: "projects.html?lang=" + lang,
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: "11px",
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        color: "var(--accent-on-ink)"
      }
    }, "\u2190 ", L.backProjects)), /*#__PURE__*/React.createElement(Reveal, {
      delay: 60
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: "16px",
        margin: "26px 0 16px"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: "11px",
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        color: "var(--accent-on-ink)"
      }
    }, it.kind), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: "7px",
        fontFamily: "var(--font-mono)",
        fontSize: "10.5px",
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        color: "var(--text-on-ink-faint)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: "7px",
        height: "7px",
        borderRadius: "999px",
        background: dot
      }
    }), it.status))), /*#__PURE__*/React.createElement(Reveal, {
      delay: 100
    }, /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: "var(--font-serif)",
        fontSize: "clamp(2.4rem, 1.4rem + 3.2vw, 3.8rem)",
        lineHeight: 1.06,
        letterSpacing: "-0.022em",
        color: "var(--text-on-ink)",
        margin: 0
      }
    }, it.name)), /*#__PURE__*/React.createElement(Reveal, {
      delay: 150
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: "var(--t-body-l)",
        lineHeight: 1.55,
        color: "var(--text-on-ink-muted)",
        margin: "22px 0 0",
        maxWidth: "52ch"
      }
    }, it.body)), it.link && it.link !== "#" && it.link !== "#contact" && /*#__PURE__*/React.createElement(Reveal, {
      delay: 200
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: "32px"
      }
    }, /*#__PURE__*/React.createElement(DS.Button, {
      variant: "accent",
      trailingArrow: true,
      href: it.link
    }, L.visit))))), /*#__PURE__*/React.createElement("section", {
      style: {
        background: "var(--paper)",
        padding: "var(--section-y) 0"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "container vk-pd-grid",
      style: {
        display: "grid",
        gridTemplateColumns: "1.4fr 1fr",
        gap: "64px",
        alignItems: "start"
      }
    }, /*#__PURE__*/React.createElement("div", null, body.map((p, i) => /*#__PURE__*/React.createElement(Reveal, {
      key: i,
      delay: i * 50
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: "1.125rem",
        lineHeight: 1.72,
        color: "var(--text-body)",
        margin: "0 0 1.4rem",
        maxWidth: "none"
      }
    }, p))), /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: "20px",
        display: "flex",
        gap: "14px",
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement(DS.Button, {
      variant: "accent",
      trailingArrow: true,
      href: "index.html#contact"
    }, L.talk), /*#__PURE__*/React.createElement("a", {
      href: "projects.html?lang=" + lang,
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: "15px",
        fontWeight: 500,
        color: "var(--text-strong)",
        border: "1px solid var(--border-strong)",
        borderRadius: "var(--r-sm)",
        padding: "13px 24px"
      }
    }, L.backProjects)))), /*#__PURE__*/React.createElement(Reveal, {
      delay: 100
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--surface-card)",
        border: "1px solid var(--line)",
        borderRadius: "var(--r-md)",
        padding: "28px",
        boxShadow: "var(--shadow-sm)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: "var(--t-micro)",
        letterSpacing: "0.16em",
        textTransform: "uppercase",
        color: "var(--accent-strong)",
        paddingBottom: "16px",
        marginBottom: "8px",
        borderBottom: "1px solid var(--line)"
      }
    }, L.features), /*#__PURE__*/React.createElement("ul", {
      style: {
        display: "flex",
        flexDirection: "column"
      }
    }, features.map((f, i) => /*#__PURE__*/React.createElement("li", {
      key: i,
      style: {
        display: "flex",
        gap: "12px",
        alignItems: "baseline",
        fontSize: "var(--t-body-s)",
        color: "var(--text-body)",
        padding: "13px 0",
        borderBottom: i < features.length - 1 ? "1px solid var(--line)" : "none"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--accent-strong)"
      }
    }, "\u2014"), f))))))), /*#__PURE__*/React.createElement("section", {
      style: {
        background: "var(--bg-ink)",
        padding: "var(--section-y) 0"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "eyebrow eyebrow--on-ink",
      style: {
        marginBottom: "28px"
      }
    }, L.related), /*#__PURE__*/React.createElement("div", {
      className: "vk-projects-grid",
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "18px"
      }
    }, others.map(({
      x,
      i
    }) => /*#__PURE__*/React.createElement("a", {
      key: i,
      href: "project.html?id=" + i + qlang(lang),
      style: {
        display: "block",
        background: "rgba(236,240,244,0.04)",
        border: "1px solid var(--line-on-ink)",
        borderRadius: "var(--r-md)",
        padding: "24px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: "10.5px",
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        color: "var(--accent-on-ink)",
        marginBottom: "12px"
      }
    }, x.kind), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-serif)",
        fontSize: "1.3rem",
        color: "var(--text-on-ink)"
      }
    }, x.name)))))));
  }
  window.VKWeb = window.VKWeb || {};
  window.VKWeb.Detail = {
    ArticleDetail,
    ProjectDetail
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/page-detail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/sections-approach.jsx
try { (() => {
/* Approach / Method band (cyclical) — exposes window.VKWeb.ApproachBand */
(function () {
  const {
    Reveal,
    Heading
  } = window.VKWeb;

  /* SVG cycle: faint ring + clockwise gold arc + 3 haloed nodes, labels outside. */
  function CycleDiagram({
    steps
  }) {
    const cx = 220,
      cy = 212,
      R = 122;
    const pt = (deg, r = R) => [cx + r * Math.cos(deg * Math.PI / 180), cy + r * Math.sin(deg * Math.PI / 180)];
    const nodes = [pt(270), pt(30), pt(150)]; // top, bottom-right, bottom-left
    const NR = 46;
    const labelPos = [{
      x: cx,
      y: nodes[0][1] - NR - 18,
      anchor: "middle"
    }, {
      x: nodes[1][0],
      y: nodes[1][1] + NR + 28,
      anchor: "middle"
    }, {
      x: nodes[2][0],
      y: nodes[2][1] + NR + 28,
      anchor: "middle"
    }];
    const start = pt(305),
      end = pt(235);
    return /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 440 400",
      style: {
        width: "100%",
        height: "auto",
        maxWidth: "460px"
      },
      role: "img",
      "aria-label": "Continuous delivery cycle"
    }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("marker", {
      id: "vkArrow",
      markerWidth: "12",
      markerHeight: "12",
      refX: "5.5",
      refY: "5.5",
      orient: "auto"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M0,0 L11,5.5 L0,11 Z",
      fill: "#BE9657"
    })), /*#__PURE__*/React.createElement("radialGradient", {
      id: "vkNode",
      cx: "38%",
      cy: "30%",
      r: "80%"
    }, /*#__PURE__*/React.createElement("stop", {
      offset: "0%",
      stopColor: "#22344C"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: "100%",
      stopColor: "#0A1421"
    }))), /*#__PURE__*/React.createElement("circle", {
      cx: cx,
      cy: cy,
      r: R,
      fill: "none",
      stroke: "#D7D2C6",
      strokeWidth: "1",
      opacity: "0.7"
    }), /*#__PURE__*/React.createElement("path", {
      d: `M ${start[0].toFixed(1)} ${start[1].toFixed(1)} A ${R} ${R} 0 1 1 ${end[0].toFixed(1)} ${end[1].toFixed(1)}`,
      fill: "none",
      stroke: "#BE9657",
      strokeWidth: "2.5",
      strokeLinecap: "round",
      markerEnd: "url(#vkArrow)"
    }), /*#__PURE__*/React.createElement("text", {
      x: cx,
      y: cy - 4,
      textAnchor: "middle",
      fontFamily: "var(--font-mono)",
      fontSize: "10.5",
      letterSpacing: "2.5",
      fill: "#8A6531"
    }, "CONTINUOUS"), /*#__PURE__*/React.createElement("text", {
      x: cx,
      y: cy + 13,
      textAnchor: "middle",
      fontFamily: "var(--font-mono)",
      fontSize: "10.5",
      letterSpacing: "2.5",
      fill: "#A9B5C0"
    }, "CYCLE"), nodes.map((n, i) => /*#__PURE__*/React.createElement("g", {
      key: i
    }, /*#__PURE__*/React.createElement("circle", {
      cx: n[0],
      cy: n[1],
      r: NR + 7,
      fill: "none",
      stroke: "#DCC8A2",
      strokeWidth: "1",
      opacity: "0.55"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: n[0],
      cy: n[1],
      r: NR,
      fill: "url(#vkNode)",
      stroke: "#BE9657",
      strokeWidth: "1.5"
    }), /*#__PURE__*/React.createElement("text", {
      x: n[0],
      y: n[1] + 11,
      textAnchor: "middle",
      fontFamily: "var(--font-serif)",
      fontSize: "30",
      fill: "#E7D6B6"
    }, steps[i].n), /*#__PURE__*/React.createElement("text", {
      x: labelPos[i].x,
      y: labelPos[i].y,
      textAnchor: labelPos[i].anchor,
      fontFamily: "var(--font-sans)",
      fontSize: "15",
      fontWeight: "600",
      letterSpacing: "0.01em",
      fill: "#0E1B2E"
    }, steps[i].title))));
  }
  function Approach({
    t
  }) {
    const a = t.approach;
    return /*#__PURE__*/React.createElement("section", {
      id: "approach",
      style: {
        background: "var(--mist-50)",
        padding: "var(--section-y) 0",
        borderTop: "1px solid var(--line)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "container vk-approach-grid",
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1.05fr",
        gap: "64px",
        alignItems: "stretch"
      }
    }, /*#__PURE__*/React.createElement(Reveal, {
      className: "vk-approach-photo",
      style: {
        display: "flex"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        width: "100%",
        minHeight: "clamp(380px, 50vh, 600px)",
        borderRadius: "var(--r-md)",
        overflow: "hidden",
        border: "1px solid var(--line-strong)",
        boxShadow: "var(--shadow-lg)",
        background: "var(--ink-900)"
      }
    }, /*#__PURE__*/React.createElement("video", {
      autoPlay: true,
      muted: true,
      loop: true,
      playsInline: true,
      preload: "auto",
      poster: "https://assets.mixkit.co/videos/4809/4809-thumb-720-0.jpg",
      style: {
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        filter: "contrast(1.03) brightness(0.96) saturate(0.92)"
      }
    }, /*#__PURE__*/React.createElement("source", {
      src: "https://assets.mixkit.co/videos/4809/4809-720.mp4",
      type: "video/mp4"
    })), /*#__PURE__*/React.createElement("div", {
      "aria-hidden": "true",
      style: {
        position: "absolute",
        inset: 0,
        mixBlendMode: "soft-light",
        background: "linear-gradient(150deg, rgba(214,178,125,0.55) 0%, rgba(190,150,87,0.30) 60%, transparent 100%)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      "aria-hidden": "true",
      style: {
        position: "absolute",
        inset: 0,
        background: "radial-gradient(80% 70% at 100% 0%, rgba(190,150,87,0.16) 0%, transparent 58%)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      "aria-hidden": "true",
      style: {
        position: "absolute",
        inset: 0,
        background: "linear-gradient(180deg, rgba(10,20,33,0.06) 60%, rgba(10,20,33,0.4) 100%)"
      }
    }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Heading, {
      eyebrow: a.eyebrow,
      title: a.title,
      lede: a.lede,
      maxWidth: "18ch",
      ledeWidth: "46ch"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: "36px"
      }
    }, a.steps.map((s, i) => /*#__PURE__*/React.createElement(Reveal, {
      key: s.n,
      delay: i * 80
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "auto 1fr",
        gap: "24px",
        padding: "22px 0",
        borderTop: "1px solid var(--line)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-serif)",
        fontSize: "1.9rem",
        lineHeight: 1,
        color: "var(--accent-strong)"
      }
    }, s.n), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: "1.0625rem",
        fontWeight: 600,
        letterSpacing: "0.01em",
        color: "var(--text-strong)",
        margin: "4px 0 8px"
      }
    }, s.title), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: "var(--t-body-s)",
        lineHeight: 1.6,
        color: "var(--text-muted)",
        margin: 0,
        maxWidth: "46ch"
      }
    }, s.body)))))))));
  }
  window.VKWeb = window.VKWeb || {};
  window.VKWeb.ApproachBand = {
    Approach
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/sections-approach.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/sections-end.jsx
try { (() => {
/* Credentials · Contact — exposes window.VKWeb.End */
(function () {
  const {
    useState
  } = React;
  const DS = window.VildanKaraKayacanAdvisoryBrandSystem_6a049d;
  const {
    Reveal,
    Heading
  } = window.VKWeb;

  /* ---------------- CTA BAND (full-bleed cinematic) ---------------- */
  function CtaBand({
    t
  }) {
    const c = t.ctaBand;
    return /*#__PURE__*/React.createElement("section", {
      style: {
        position: "relative",
        overflow: "hidden",
        background: "var(--ink-900)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      "aria-hidden": "true",
      style: {
        position: "absolute",
        inset: 0,
        backgroundImage: `url(${window.SITE.aux.cta})`,
        backgroundSize: "cover",
        backgroundPosition: "center 35%",
        filter: "grayscale(1) brightness(0.7) contrast(1.05)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      "aria-hidden": "true",
      style: {
        position: "absolute",
        inset: 0,
        background: "linear-gradient(100deg, rgba(10,20,33,0.94) 0%, rgba(10,20,33,0.74) 45%, rgba(26,43,64,0.58) 100%)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      "aria-hidden": "true",
      style: {
        position: "absolute",
        inset: 0,
        background: "radial-gradient(60% 90% at 0% 100%, rgba(190,150,87,0.26) 0%, transparent 55%)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "container",
      style: {
        position: "relative",
        padding: "clamp(4rem, 3rem + 5vw, 7rem) 0"
      }
    }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow eyebrow--on-ink"
    }, c.eyebrow), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: "var(--font-serif)",
        fontSize: "var(--t-display-l)",
        lineHeight: 1.05,
        letterSpacing: "-0.022em",
        color: "var(--text-on-ink)",
        margin: "22px 0 32px",
        maxWidth: "18ch"
      }
    }, c.title), /*#__PURE__*/React.createElement(DS.Button, {
      variant: "accent",
      trailingArrow: true,
      href: "index.html#contact"
    }, c.cta))));
  }

  /* ---------------- CREDENTIALS ---------------- */
  function Credentials({
    t
  }) {
    const c = t.credentials;
    return /*#__PURE__*/React.createElement("section", {
      id: "credentials",
      style: {
        background: "var(--mist-50)",
        padding: "var(--section-y) 0",
        borderTop: "1px solid var(--line)",
        borderBottom: "1px solid var(--line)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "container"
    }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Heading, {
      eyebrow: c.eyebrow,
      title: c.title,
      maxWidth: "24ch"
    })), /*#__PURE__*/React.createElement("div", {
      className: "vk-cred-grid",
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "32px",
        marginTop: "52px"
      }
    }, c.groups.map((g, i) => /*#__PURE__*/React.createElement(Reveal, {
      key: g.label,
      delay: i * 70
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: "var(--t-micro)",
        letterSpacing: "0.16em",
        textTransform: "uppercase",
        color: "var(--accent-strong)",
        paddingBottom: "14px",
        marginBottom: "18px",
        borderBottom: "1px solid var(--line-strong)"
      }
    }, g.label), /*#__PURE__*/React.createElement("ul", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "12px"
      }
    }, g.items.map((it, j) => /*#__PURE__*/React.createElement("li", {
      key: j,
      style: {
        fontSize: "var(--t-body-s)",
        lineHeight: 1.4,
        color: "var(--text-body)"
      }
    }, it)))))))));
  }

  /* ---------------- CONTACT ---------------- */
  function Contact({
    t
  }) {
    const c = t.contact;
    const [sent, setSent] = useState(false);
    return /*#__PURE__*/React.createElement("section", {
      id: "contact",
      style: {
        position: "relative",
        overflow: "hidden",
        background: "var(--ink-900)",
        padding: "var(--section-y) 0"
      }
    }, /*#__PURE__*/React.createElement("div", {
      "aria-hidden": "true",
      style: {
        position: "absolute",
        inset: 0,
        backgroundImage: "url(https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=70)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        filter: "grayscale(1) brightness(0.62) contrast(1.06)",
        opacity: 0.5
      }
    }), /*#__PURE__*/React.createElement("div", {
      "aria-hidden": "true",
      style: {
        position: "absolute",
        inset: 0,
        background: "linear-gradient(110deg, rgba(10,20,33,0.92) 0%, rgba(10,20,33,0.74) 45%, rgba(26,43,64,0.5) 100%)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      "aria-hidden": "true",
      style: {
        position: "absolute",
        inset: 0,
        background: "radial-gradient(50% 60% at 0% 100%, rgba(190,150,87,0.16) 0%, transparent 55%)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "container vk-contact-grid",
      style: {
        position: "relative",
        display: "grid",
        gridTemplateColumns: "1fr 1.1fr",
        gap: "72px",
        alignItems: "start"
      }
    }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Heading, {
      eyebrow: c.eyebrow,
      title: c.title,
      lede: c.lede,
      onInk: true,
      maxWidth: "14ch",
      ledeWidth: "46ch"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: "40px",
        display: "flex",
        flexDirection: "column",
        gap: "16px"
      }
    }, [["@", c.email, "mailto:" + c.email], ["↗", c.linkedin, "#"], ["·", c.location, null], ["·", c.langs, null]].map((row, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: "flex",
        gap: "14px",
        alignItems: "baseline"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: "12px",
        color: "var(--accent-on-ink)",
        width: "14px"
      }
    }, row[0]), row[2] ? /*#__PURE__*/React.createElement("a", {
      href: row[2],
      style: {
        fontSize: "var(--t-body-s)",
        color: "var(--text-on-ink)",
        borderBottom: "1px solid var(--line-on-ink)",
        paddingBottom: "1px"
      }
    }, row[1]) : /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--t-body-s)",
        color: "var(--text-on-ink-muted)"
      }
    }, row[1]))))), /*#__PURE__*/React.createElement(Reveal, {
      delay: 100
    }, /*#__PURE__*/React.createElement("form", {
      onSubmit: e => {
        e.preventDefault();
        setSent(true);
      },
      style: {
        background: "var(--surface-card)",
        border: "1px solid var(--line)",
        borderRadius: "var(--r-md)",
        padding: "36px",
        boxShadow: "var(--shadow-sm)",
        display: "flex",
        flexDirection: "column",
        gap: "26px"
      }
    }, sent ? /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "40px 8px",
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-serif)",
        fontSize: "var(--t-head-m)",
        color: "var(--text-strong)",
        marginBottom: "10px"
      }
    }, "\u2713"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-serif)",
        fontSize: "var(--t-head-m)",
        color: "var(--text-strong)",
        margin: 0,
        maxWidth: "28ch",
        marginInline: "auto"
      }
    }, c.sent)) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "22px"
      }
    }, /*#__PURE__*/React.createElement(DS.Field, {
      label: c.fields.name,
      name: "name",
      required: true
    }), /*#__PURE__*/React.createElement(DS.Field, {
      label: c.fields.org,
      name: "org"
    })), /*#__PURE__*/React.createElement(DS.Field, {
      label: c.fields.email,
      name: "email",
      type: "email",
      required: true
    }), /*#__PURE__*/React.createElement("label", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "8px"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: "var(--t-micro)",
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        color: "var(--text-muted)"
      }
    }, c.fields.topic), /*#__PURE__*/React.createElement("select", {
      name: "topic",
      style: {
        width: "100%",
        fontFamily: "var(--font-sans)",
        fontSize: "var(--t-body)",
        color: "var(--text-strong)",
        background: "transparent",
        border: "none",
        borderBottom: "1.5px solid var(--line-strong)",
        padding: "10px 0",
        outline: "none"
      }
    }, c.topics.map(tp => /*#__PURE__*/React.createElement("option", {
      key: tp
    }, tp)))), /*#__PURE__*/React.createElement(DS.Field, {
      label: c.fields.message,
      name: "message",
      textarea: true,
      rows: 3
    }), /*#__PURE__*/React.createElement(DS.Button, {
      variant: "accent",
      type: "submit",
      trailingArrow: true,
      style: {
        alignSelf: "flex-start"
      }
    }, c.send))))));
  }
  window.VKWeb = window.VKWeb || {};
  window.VKWeb.End = {
    Credentials,
    Contact,
    CtaBand
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/sections-end.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/sections-extra.jsx
try { (() => {
/* Projects (Applied AI) · Insights (blog) · Global Footprint map
   exposes window.VKWeb.Extra */
(function () {
  const {
    useState,
    useEffect,
    useRef
  } = React;
  const {
    Reveal,
    Heading
  } = window.VKWeb;
  const STATUS = {
    "Active": "#1F8A5B",
    "Aktif": "#1F8A5B",
    "In development": "#C18A2E",
    "Geliştiriliyor": "#C18A2E",
    "Coming soon": "#3C6FB0",
    "Yakında": "#3C6FB0"
  };
  const q = lang => lang ? "&lang=" + lang : "";

  /* "View all →" link */
  function MoreLink({
    href,
    label,
    onInk
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: "40px",
        display: "flex",
        justifyContent: "flex-end"
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: href,
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        fontFamily: "var(--font-sans)",
        fontSize: "var(--t-body-s)",
        fontWeight: 600,
        color: onInk ? "var(--accent-on-ink)" : "var(--accent-strong)"
      }
    }, label, " ", /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true"
    }, "\u2192")));
  }

  /* ---------------- PROJECTS (Applied AI) ---------------- */
  function Projects({
    t,
    lang,
    limit,
    page
  }) {
    const p = t.projects;
    const imgs = window.SITE.projectImages;
    const items = limit ? p.items.slice(0, limit) : p.items;
    return /*#__PURE__*/React.createElement("section", {
      id: "projects",
      style: {
        background: "var(--paper)",
        padding: page ? "140px 0 var(--section-y)" : "var(--section-y) 0",
        borderTop: page ? "none" : "1px solid var(--line)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "container"
    }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Heading, {
      eyebrow: p.eyebrow,
      title: p.title,
      lede: p.lede,
      maxWidth: "22ch"
    })), /*#__PURE__*/React.createElement("div", {
      className: "vk-projects-grid",
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "18px",
        marginTop: "40px"
      }
    }, items.map((it, i) => {
      const dot = STATUS[it.status] || "var(--slate-400)";
      return /*#__PURE__*/React.createElement(Reveal, {
        key: it.name,
        delay: i % 3 * 80
      }, /*#__PURE__*/React.createElement("a", {
        href: "project.html?id=" + i + q(lang),
        className: "vk-proj-card",
        style: {
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "var(--ink-800)",
          border: "1px solid var(--line-on-ink)",
          borderRadius: "var(--r-md)",
          overflow: "hidden",
          boxShadow: "var(--shadow-md)",
          transition: "transform var(--dur) var(--ease-out), box-shadow var(--dur) var(--ease-out), border-color var(--dur)"
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          position: "relative",
          height: "156px",
          overflow: "hidden"
        }
      }, /*#__PURE__*/React.createElement("div", {
        className: "vk-proj-img",
        "aria-hidden": "true",
        style: {
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${imgs[i % imgs.length]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "grayscale(1) brightness(0.7) contrast(1.05)",
          transition: "transform 1.1s var(--ease-out)"
        }
      }), /*#__PURE__*/React.createElement("div", {
        "aria-hidden": "true",
        style: {
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, rgba(10,20,33,0.30) 0%, rgba(10,20,33,0.42) 45%, rgba(14,27,46,0.97) 100%)"
        }
      }), /*#__PURE__*/React.createElement("div", {
        "aria-hidden": "true",
        style: {
          position: "absolute",
          inset: 0,
          background: "radial-gradient(120% 90% at 100% 0%, rgba(190,150,87,0.26) 0%, transparent 60%)"
        }
      }), /*#__PURE__*/React.createElement("span", {
        style: {
          position: "absolute",
          top: "14px",
          left: "18px",
          fontFamily: "var(--font-mono)",
          fontSize: "var(--t-micro)",
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "var(--gold-200)",
          textShadow: "0 1px 6px rgba(0,0,0,0.5)"
        }
      }, it.kind), /*#__PURE__*/React.createElement("span", {
        style: {
          position: "absolute",
          top: "13px",
          right: "16px",
          display: "inline-flex",
          alignItems: "center",
          gap: "7px",
          fontFamily: "var(--font-mono)",
          fontSize: "10px",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "var(--text-on-ink-muted)",
          textShadow: "0 1px 6px rgba(0,0,0,0.5)"
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          width: "7px",
          height: "7px",
          borderRadius: "999px",
          background: dot,
          boxShadow: "0 0 0 2px rgba(255,255,255,0.2)"
        }
      }), it.status), /*#__PURE__*/React.createElement("h3", {
        style: {
          position: "absolute",
          left: "20px",
          right: "20px",
          bottom: "16px",
          fontFamily: "var(--font-serif)",
          fontSize: "1.7rem",
          lineHeight: 1.06,
          letterSpacing: "-0.015em",
          color: "var(--text-on-ink)",
          margin: 0,
          textShadow: "0 2px 12px rgba(0,0,0,0.5)"
        }
      }, it.name)), /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          flexDirection: "column",
          flex: 1,
          padding: "20px 24px 22px",
          background: "var(--ink-800)"
        }
      }, /*#__PURE__*/React.createElement("p", {
        style: {
          fontSize: "var(--t-body-s)",
          lineHeight: 1.6,
          color: "var(--text-on-ink-muted)",
          margin: "0 0 20px",
          flex: 1
        }
      }, it.body), /*#__PURE__*/React.createElement("span", {
        className: "vk-proj-link",
        style: {
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          fontFamily: "var(--font-sans)",
          fontSize: "var(--t-body-s)",
          fontWeight: 600,
          color: "var(--accent-on-ink)",
          borderTop: "1px solid var(--line-on-ink)",
          paddingTop: "16px"
        }
      }, p.details, " ", /*#__PURE__*/React.createElement("span", {
        "aria-hidden": "true"
      }, "\u2192")))));
    })), limit && !page && limit < p.items.length && /*#__PURE__*/React.createElement(MoreLink, {
      href: "projects.html" + (lang ? "?lang=" + lang : ""),
      label: p.all
    })));
  }

  /* ---------------- INSIGHTS (blog) ---------------- */
  function Insights({
    t,
    lang,
    limit,
    page
  }) {
    const ins = t.insights;
    const imgs = window.SITE.insightImages;
    const items = limit ? ins.items.slice(0, limit) : ins.items;
    return /*#__PURE__*/React.createElement("section", {
      id: "insights",
      style: {
        position: "relative",
        overflow: "hidden",
        background: "var(--ink-800)",
        padding: page ? "140px 0 var(--section-y)" : "var(--section-y) 0"
      }
    }, /*#__PURE__*/React.createElement("div", {
      "aria-hidden": "true",
      style: {
        position: "absolute",
        inset: 0,
        backgroundImage: "url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=70)",
        backgroundSize: "cover",
        backgroundPosition: "top center",
        filter: "grayscale(1) brightness(0.6) contrast(1.08)",
        opacity: 0.5
      }
    }), /*#__PURE__*/React.createElement("div", {
      "aria-hidden": "true",
      style: {
        position: "absolute",
        inset: 0,
        background: "linear-gradient(180deg, rgba(10,20,33,0.84) 0%, rgba(10,20,33,0.6) 45%, rgba(10,20,33,0.88) 100%)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      "aria-hidden": "true",
      style: {
        position: "absolute",
        inset: 0,
        opacity: 0.5,
        backgroundImage: "linear-gradient(rgba(236,240,244,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(236,240,244,0.035) 1px, transparent 1px)",
        backgroundSize: "72px 72px",
        maskImage: "radial-gradient(90% 80% at 30% 25%, #000, transparent 80%)",
        WebkitMaskImage: "radial-gradient(90% 80% at 30% 25%, #000, transparent 80%)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      "aria-hidden": "true",
      style: {
        position: "absolute",
        inset: 0,
        background: "radial-gradient(55% 55% at 0% 0%, rgba(190,150,87,0.12) 0%, transparent 55%)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "container",
      style: {
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Heading, {
      eyebrow: ins.eyebrow,
      title: ins.title,
      lede: ins.lede,
      onInk: true,
      maxWidth: "22ch"
    })), /*#__PURE__*/React.createElement("div", {
      className: "vk-insights-grid",
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "18px",
        marginTop: "40px"
      }
    }, items.map((it, i) => /*#__PURE__*/React.createElement(Reveal, {
      key: i,
      delay: i % 3 * 70
    }, /*#__PURE__*/React.createElement("a", {
      href: "article.html?id=" + i + q(lang),
      className: "vk-insight",
      style: {
        display: "flex",
        flexDirection: "column",
        height: "100%",
        background: "var(--ink-900)",
        border: "1px solid var(--line-on-ink)",
        borderRadius: "var(--r-md)",
        overflow: "hidden",
        transition: "transform var(--dur) var(--ease-out), border-color var(--dur)"
      },
      onMouseEnter: e => {
        e.currentTarget.style.transform = "translateY(-3px)";
        e.currentTarget.style.borderColor = "var(--line-accent)";
        e.currentTarget.querySelector(".vk-in-t").style.color = "var(--accent-on-ink)";
        const im = e.currentTarget.querySelector(".vk-in-img");
        if (im) im.style.transform = "scale(1.06)";
      },
      onMouseLeave: e => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.borderColor = "var(--line-on-ink)";
        e.currentTarget.querySelector(".vk-in-t").style.color = "var(--text-on-ink)";
        const im = e.currentTarget.querySelector(".vk-in-img");
        if (im) im.style.transform = "scale(1)";
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        height: "132px",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "vk-in-img",
      "aria-hidden": "true",
      style: {
        position: "absolute",
        inset: 0,
        backgroundImage: `url(${imgs[i % imgs.length]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        filter: "grayscale(1) brightness(0.72) contrast(1.05)",
        transition: "transform 1.1s var(--ease-out)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      "aria-hidden": "true",
      style: {
        position: "absolute",
        inset: 0,
        background: "linear-gradient(180deg, rgba(10,20,33,0.26) 0%, rgba(10,20,33,0.36) 55%, rgba(10,20,33,0.86) 100%)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      "aria-hidden": "true",
      style: {
        position: "absolute",
        inset: 0,
        background: "radial-gradient(120% 90% at 100% 0%, rgba(190,150,87,0.22) 0%, transparent 60%)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: "18px",
        bottom: "12px",
        display: "flex",
        gap: "10px",
        fontFamily: "var(--font-mono)",
        fontSize: "10px",
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        color: "#fff",
        textShadow: "0 1px 6px rgba(0,0,0,0.5)"
      }
    }, /*#__PURE__*/React.createElement("span", null, it.tag), /*#__PURE__*/React.createElement("span", {
      style: {
        opacity: 0.75
      }
    }, "\xB7 ", it.read))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        flex: 1,
        padding: "22px 22px 24px"
      }
    }, /*#__PURE__*/React.createElement("h3", {
      className: "vk-in-t",
      style: {
        fontFamily: "var(--font-serif)",
        fontSize: "1.3rem",
        lineHeight: 1.18,
        letterSpacing: "-0.01em",
        color: "var(--text-on-ink)",
        margin: "0 0 10px",
        transition: "color var(--dur-fast)"
      }
    }, it.title), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: "var(--t-body-s)",
        lineHeight: 1.6,
        color: "var(--text-on-ink-muted)",
        margin: "0 0 20px",
        flex: 1
      }
    }, it.text), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: "var(--t-body-s)",
        fontWeight: 600,
        color: "var(--accent-on-ink)"
      }
    }, ins.readMore, " \u2192")))))), limit && !page && limit < ins.items.length && /*#__PURE__*/React.createElement(MoreLink, {
      href: "insights.html" + (lang ? "?lang=" + lang : ""),
      label: ins.all,
      onInk: true
    })));
  }

  /* ---------------- GLOBAL FOOTPRINT (Leaflet) ---------------- */
  function Footprint({
    t,
    footprint,
    lang
  }) {
    const f = t.footprintHead;
    const mapEl = useRef(null);
    const mapRef = useRef(null);
    const [sel, setSel] = useState(null);
    useEffect(() => {
      if (!mapEl.current || !window.L || mapRef.current) return;
      const L = window.L;
      const map = L.map(mapEl.current, {
        scrollWheelZoom: false,
        zoomControl: true,
        attributionControl: false
      }).setView([41, 26], 3);
      L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
        subdomains: "abcd",
        maxZoom: 10
      }).addTo(map);
      footprint.forEach((c, idx) => {
        const m = L.circleMarker([c.lat, c.lng], {
          radius: 7,
          color: "#D2B27D",
          weight: 2,
          fillColor: "#BE9657",
          fillOpacity: 0.85
        }).addTo(map);
        m.on("click", () => {
          setSel(idx);
          m.setStyle({
            radius: 9
          });
        });
        m.on("mouseover", () => m.setStyle({
          fillOpacity: 1,
          radius: 9
        }));
        m.on("mouseout", () => m.setStyle({
          fillOpacity: 0.85,
          radius: 7
        }));
      });
      mapRef.current = map;
      setTimeout(() => map.invalidateSize(), 200);
    }, []);
    const c = sel != null ? footprint[sel] : null;
    const name = c ? lang === "tr" ? c.name_tr : c.name_en : null;
    const projects = c ? lang === "tr" ? c.projects_tr : c.projects_en : [];
    return /*#__PURE__*/React.createElement("section", {
      id: "footprint",
      style: {
        background: "var(--ink-900)",
        padding: "var(--section-y) 0",
        borderTop: "1px solid var(--line-on-ink)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "container"
    }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Heading, {
      eyebrow: f.eyebrow,
      title: f.title,
      lede: f.lede,
      onInk: true,
      maxWidth: "20ch",
      ledeWidth: "48ch"
    })), /*#__PURE__*/React.createElement("div", {
      className: "vk-map-grid",
      style: {
        display: "grid",
        gridTemplateColumns: "1.5fr 1fr",
        gap: "28px",
        marginTop: "48px",
        alignItems: "stretch"
      }
    }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
      ref: mapEl,
      className: "vk-map",
      style: {
        height: "100%",
        minHeight: "440px",
        borderRadius: "var(--r-md)",
        overflow: "hidden",
        border: "1px solid var(--line-on-ink)"
      }
    })), /*#__PURE__*/React.createElement(Reveal, {
      delay: 120
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: "100%",
        minHeight: "440px",
        background: "var(--ink-700)",
        border: "1px solid var(--line-on-ink)",
        borderRadius: "var(--r-md)",
        padding: "30px",
        display: "flex",
        flexDirection: "column"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: "10.5px",
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        color: "var(--accent-on-ink)",
        marginBottom: "16px"
      }
    }, c ? name : f.hint), c ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: "var(--font-serif)",
        fontSize: "1.9rem",
        color: "var(--text-on-ink)",
        margin: "0 0 20px"
      }
    }, name), /*#__PURE__*/React.createElement("ul", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "14px"
      }
    }, projects.map((pr, i) => /*#__PURE__*/React.createElement("li", {
      key: i,
      style: {
        display: "flex",
        gap: "12px",
        fontSize: "var(--t-body-s)",
        lineHeight: 1.45,
        color: "var(--text-on-ink-muted)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--accent-on-ink)",
        flexShrink: 0
      }
    }, "\u2014"), pr)))) : /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        flex: 1,
        gap: "10px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-serif)",
        fontSize: "3.4rem",
        lineHeight: 1,
        color: "var(--accent-on-ink)"
      }
    }, "16"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: "var(--t-body-s)",
        color: "var(--text-on-ink-muted)",
        margin: 0,
        maxWidth: "26ch"
      }
    }, f.lede)))))));
  }
  window.VKWeb.Extra = {
    Projects,
    Insights,
    Footprint
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/sections-extra.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/sections-mid.jsx
try { (() => {
/* Services · Work — exposes window.VKWeb.Mid */
(function () {
  const {
    useState
  } = React;
  const DS = window.VildanKaraKayacanAdvisoryBrandSystem_6a049d;
  const {
    Reveal,
    Heading
  } = window.VKWeb;

  /* ---------------- SERVICES (image header + big title + bullets) ---------------- */
  function ServiceCard({
    it,
    i,
    img
  }) {
    const [hover, setHover] = useState(false);
    return /*#__PURE__*/React.createElement("a", {
      href: "#contact",
      className: "vk-scard",
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      style: {
        display: "flex",
        flexDirection: "column",
        height: "100%",
        background: "var(--surface-card)",
        borderRadius: "var(--r-md)",
        overflow: "hidden",
        border: "1px solid",
        borderColor: hover ? "var(--line-accent)" : "var(--line)",
        boxShadow: hover ? "var(--shadow-md)" : "var(--shadow-sm)",
        transform: hover ? "translateY(-3px)" : "translateY(0)",
        transition: "border-color var(--dur), box-shadow var(--dur), transform var(--dur) var(--ease-out)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        height: "118px",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      "aria-hidden": "true",
      style: {
        position: "absolute",
        inset: 0,
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        filter: "grayscale(1) brightness(0.72) contrast(1.06)",
        transform: hover ? "scale(1.07)" : "scale(1)",
        transition: "transform 1.1s var(--ease-out)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      "aria-hidden": "true",
      style: {
        position: "absolute",
        inset: 0,
        background: "linear-gradient(180deg, rgba(10,20,33,0.34) 0%, rgba(10,20,33,0.30) 50%, rgba(10,20,33,0.66) 100%)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      "aria-hidden": "true",
      style: {
        position: "absolute",
        inset: 0,
        background: "radial-gradient(120% 90% at 100% 0%, rgba(190,150,87,0.26) 0%, transparent 58%)",
        opacity: hover ? 1 : 0.7,
        transition: "opacity var(--dur)"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        top: "14px",
        left: "20px",
        fontFamily: "var(--font-mono)",
        fontSize: "12px",
        letterSpacing: "0.16em",
        color: "var(--gold-200)"
      }
    }, String(i + 1).padStart(2, "0"))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        flex: 1,
        padding: "26px 26px 28px"
      }
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: "var(--font-serif)",
        fontSize: "1.8rem",
        lineHeight: 1.1,
        letterSpacing: "-0.015em",
        color: "var(--text-strong)",
        margin: "0 0 8px"
      }
    }, it.title), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: "1.0625rem",
        fontWeight: 600,
        lineHeight: 1.35,
        color: "var(--accent-strong)",
        marginBottom: "20px"
      }
    }, it.short), /*#__PURE__*/React.createElement("ul", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        flex: 1
      }
    }, it.bullets.map((b, j) => /*#__PURE__*/React.createElement("li", {
      key: j,
      style: {
        display: "flex",
        gap: "12px",
        fontSize: "1rem",
        lineHeight: 1.45,
        color: "var(--text-body)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        color: "var(--accent)",
        flexShrink: 0,
        marginTop: "1px"
      }
    }, "\u2014"), b))), /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        marginTop: "22px",
        paddingTop: "16px",
        borderTop: "1px solid var(--line)",
        fontFamily: "var(--font-sans)",
        fontSize: "var(--t-body-s)",
        fontWeight: 600,
        color: hover ? "var(--accent-strong)" : "var(--text-strong)",
        transition: "color var(--dur-fast)",
        display: "inline-flex",
        alignItems: "center",
        gap: "8px"
      }
    }, it.tags.join(" · "))));
  }
  function HealthBand({
    t
  }) {
    const h = t.services.healthcheck;
    if (!h) return null;
    return /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
      className: "vk-health",
      style: {
        display: "grid",
        gridTemplateColumns: "1.3fr 1fr",
        gap: "44px",
        alignItems: "center",
        marginTop: "20px",
        padding: "40px 44px",
        borderRadius: "var(--r-md)",
        background: "linear-gradient(120deg, var(--ink-800) 0%, var(--ink-700) 100%)",
        border: "1px solid var(--line-on-ink)",
        boxShadow: "var(--shadow-md)"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow eyebrow--on-ink",
      style: {
        marginBottom: "16px"
      }
    }, h.eyebrow), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: "var(--font-serif)",
        fontSize: "var(--t-display-m)",
        color: "var(--text-on-ink)",
        margin: "14px 0 14px",
        letterSpacing: "-0.01em"
      }
    }, h.title), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: "var(--t-body)",
        lineHeight: 1.6,
        color: "var(--text-on-ink-muted)",
        margin: 0,
        maxWidth: "46ch"
      }
    }, h.body)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("ul", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "13px",
        marginBottom: "26px"
      }
    }, h.bullets.map((b, i) => /*#__PURE__*/React.createElement("li", {
      key: i,
      style: {
        display: "flex",
        gap: "12px",
        fontSize: "var(--t-body-s)",
        lineHeight: 1.4,
        color: "var(--text-on-ink)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        color: "var(--accent-on-ink)",
        flexShrink: 0
      }
    }, "\u2014"), b))), /*#__PURE__*/React.createElement(DS.Button, {
      variant: "accent",
      trailingArrow: true,
      href: "#contact"
    }, h.cta))));
  }
  function Services({
    t
  }) {
    const s = t.services;
    const imgs = window.SITE.serviceImages;
    return /*#__PURE__*/React.createElement("section", {
      id: "services",
      style: {
        position: "relative",
        overflow: "hidden",
        background: "var(--paper)",
        padding: "var(--section-y) 0"
      }
    }, /*#__PURE__*/React.createElement("div", {
      "aria-hidden": "true",
      style: {
        position: "absolute",
        inset: 0,
        backgroundImage: `url(${imgs[4]})`,
        backgroundSize: "cover",
        backgroundPosition: "right center",
        filter: "grayscale(1) brightness(1.18)",
        opacity: 0.06,
        maskImage: "linear-gradient(to left, #000 0%, transparent 58%)",
        WebkitMaskImage: "linear-gradient(to left, #000 0%, transparent 58%)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      "aria-hidden": "true",
      style: {
        position: "absolute",
        inset: 0,
        opacity: 0.5,
        backgroundImage: "linear-gradient(rgba(10,20,33,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(10,20,33,0.025) 1px, transparent 1px)",
        backgroundSize: "64px 64px",
        maskImage: "radial-gradient(80% 70% at 80% 30%, #000, transparent 75%)",
        WebkitMaskImage: "radial-gradient(80% 70% at 80% 30%, #000, transparent 75%)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "container",
      style: {
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Heading, {
      eyebrow: s.eyebrow,
      title: s.title,
      lede: s.lede
    })), /*#__PURE__*/React.createElement("div", {
      className: "vk-services-grid",
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "18px",
        margin: "40px 0 16px"
      }
    }, s.items.map((it, i) => /*#__PURE__*/React.createElement(Reveal, {
      key: it.title,
      delay: i % 3 * 80
    }, /*#__PURE__*/React.createElement(ServiceCard, {
      it: it,
      i: i,
      img: imgs[i % imgs.length]
    })))), /*#__PURE__*/React.createElement(HealthBand, {
      t: t
    })));
  }

  /* ---------------- WORK (2×3 split, simple) ---------------- */
  function WorkItem({
    item,
    index
  }) {
    const [hover, setHover] = useState(false);
    return /*#__PURE__*/React.createElement("div", {
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      style: {
        display: "grid",
        gridTemplateColumns: "auto 1fr",
        gap: "22px",
        alignItems: "start",
        padding: "28px 4px",
        borderTop: "1px solid var(--line-on-ink)",
        transition: "background var(--dur)",
        cursor: "default"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-serif)",
        fontSize: "1.6rem",
        lineHeight: 1,
        color: hover ? "var(--accent-on-ink)" : "var(--text-on-ink-faint)",
        transition: "color var(--dur)",
        width: "34px"
      }
    }, String(index + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "12px"
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-serif)",
        fontSize: "1.22rem",
        lineHeight: 1.3,
        letterSpacing: "-0.01em",
        color: "var(--text-on-ink)",
        margin: 0
      }
    }, item.result), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: "14px",
        flexWrap: "wrap",
        fontFamily: "var(--font-mono)",
        fontSize: "10.5px",
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        color: "var(--text-on-ink-faint)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--accent-on-ink)"
      }
    }, item.sector), /*#__PURE__*/React.createElement("span", null, item.role), /*#__PURE__*/React.createElement("span", null, item.client))));
  }
  function Work({
    t
  }) {
    const w = t.work;
    const items = w.items.slice(0, 6);
    const left = items.filter((_, i) => i % 2 === 0);
    const right = items.filter((_, i) => i % 2 === 1);
    return /*#__PURE__*/React.createElement("section", {
      id: "work",
      style: {
        position: "relative",
        overflow: "hidden",
        background: "var(--ink-800)",
        padding: "var(--section-y) 0"
      }
    }, /*#__PURE__*/React.createElement("div", {
      "aria-hidden": "true",
      style: {
        position: "absolute",
        inset: 0,
        backgroundImage: "url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=70)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        filter: "grayscale(1) brightness(0.62) contrast(1.08)",
        opacity: 0.6
      }
    }), /*#__PURE__*/React.createElement("div", {
      "aria-hidden": "true",
      style: {
        position: "absolute",
        inset: 0,
        background: "linear-gradient(180deg, rgba(10,20,33,0.82) 0%, rgba(10,20,33,0.58) 45%, rgba(10,20,33,0.86) 100%)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      "aria-hidden": "true",
      style: {
        position: "absolute",
        inset: 0,
        opacity: 0.5,
        backgroundImage: "linear-gradient(rgba(236,240,244,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(236,240,244,0.035) 1px, transparent 1px)",
        backgroundSize: "72px 72px",
        maskImage: "radial-gradient(90% 80% at 50% 30%, #000, transparent 80%)",
        WebkitMaskImage: "radial-gradient(90% 80% at 50% 30%, #000, transparent 80%)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      "aria-hidden": "true",
      style: {
        position: "absolute",
        inset: 0,
        background: "radial-gradient(55% 55% at 100% 0%, rgba(190,150,87,0.14) 0%, transparent 55%)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "container",
      style: {
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Heading, {
      eyebrow: w.eyebrow,
      title: w.title,
      onInk: true,
      maxWidth: "20ch"
    })), /*#__PURE__*/React.createElement("div", {
      className: "vk-work-split",
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "0 56px",
        marginTop: "32px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        borderBottom: "1px solid var(--line-on-ink)"
      }
    }, left.map((item, i) => /*#__PURE__*/React.createElement(Reveal, {
      key: i,
      delay: i * 60
    }, /*#__PURE__*/React.createElement(WorkItem, {
      item: item,
      index: i * 2
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        borderBottom: "1px solid var(--line-on-ink)"
      }
    }, right.map((item, i) => /*#__PURE__*/React.createElement(Reveal, {
      key: i,
      delay: i * 60
    }, /*#__PURE__*/React.createElement(WorkItem, {
      item: item,
      index: i * 2 + 1
    })))))));
  }
  window.VKWeb = window.VKWeb || {};
  window.VKWeb.Mid = {
    Services,
    Work
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/sections-mid.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/sections-top.jsx
try { (() => {
/* Hero · CredBar — exposes window.VKWeb.Top */
(function () {
  const DS = window.VildanKaraKayacanAdvisoryBrandSystem_6a049d;
  const {
    Reveal
  } = window.VKWeb;

  /* ---------------- HERO ---------------- */
  function Hero({
    t,
    img,
    onNav
  }) {
    const h = t.hero;
    return /*#__PURE__*/React.createElement("header", {
      id: "top",
      style: {
        position: "relative",
        background: "var(--bg-ink)",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      "aria-hidden": "true",
      style: {
        position: "absolute",
        inset: 0,
        backgroundImage: `url(${img.boardroom})`,
        backgroundSize: "cover",
        backgroundPosition: "68% center"
      }
    }), /*#__PURE__*/React.createElement("div", {
      "aria-hidden": "true",
      style: {
        position: "absolute",
        inset: 0,
        background: "linear-gradient(99deg, rgba(8,16,27,0.93) 0%, rgba(9,18,30,0.82) 28%, rgba(10,20,33,0.58) 50%, rgba(10,20,33,0.28) 72%, rgba(12,24,40,0.12) 100%)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      "aria-hidden": "true",
      style: {
        position: "absolute",
        inset: 0,
        background: "linear-gradient(180deg, rgba(8,16,27,0.50) 0%, transparent 24%, transparent 60%, rgba(8,16,27,0.86) 100%)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      "aria-hidden": "true",
      style: {
        position: "absolute",
        inset: 0,
        background: "radial-gradient(66% 60% at 3% 94%, rgba(190,150,87,0.26) 0%, transparent 56%), radial-gradient(56% 50% at 98% 6%, rgba(210,178,125,0.18) 0%, transparent 52%)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      "aria-hidden": "true",
      style: {
        position: "absolute",
        inset: 0,
        opacity: 0.4,
        backgroundImage: "linear-gradient(rgba(236,240,244,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(236,240,244,0.04) 1px, transparent 1px)",
        backgroundSize: "88px 88px",
        maskImage: "linear-gradient(105deg, #000 0%, #000 34%, transparent 60%)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "container",
      style: {
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        minHeight: "100vh",
        paddingTop: "108px",
        paddingBottom: "96px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "760px",
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow eyebrow--on-ink"
    }, h.eyebrow)), /*#__PURE__*/React.createElement(Reveal, {
      delay: 60
    }, /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: "var(--font-serif)",
        fontSize: "clamp(2.7rem, 1.1rem + 5vw, 5rem)",
        lineHeight: 1.04,
        letterSpacing: "-0.024em",
        color: "var(--text-on-ink)",
        margin: "26px 0 0"
      }
    }, h.title.map((line, i) => /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        display: "block",
        fontStyle: i === 1 ? "italic" : "normal",
        color: i === 1 ? "var(--accent-on-ink)" : "var(--text-on-ink)"
      }
    }, line)))), /*#__PURE__*/React.createElement(Reveal, {
      delay: 120
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: "var(--t-body-l)",
        lineHeight: 1.62,
        color: "var(--text-on-ink-muted)",
        maxWidth: "34rem",
        margin: "30px 0 0"
      }
    }, h.lede)), /*#__PURE__*/React.createElement(Reveal, {
      delay: 180
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: "14px",
        flexWrap: "wrap",
        marginTop: "38px"
      }
    }, /*#__PURE__*/React.createElement(DS.Button, {
      variant: "accent",
      trailingArrow: true,
      href: "#contact",
      onClick: e => {
        e.preventDefault();
        onNav("contact");
      }
    }, h.ctaPrimary), /*#__PURE__*/React.createElement("a", {
      href: "#services",
      onClick: e => {
        e.preventDefault();
        onNav("services");
      },
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: "15px",
        fontWeight: 500,
        color: "var(--text-on-ink)",
        background: "transparent",
        border: "1px solid rgba(236,240,244,0.32)",
        borderRadius: "var(--r-sm)",
        padding: "13px 24px",
        display: "inline-flex",
        alignItems: "center",
        gap: "10px",
        transition: "border-color var(--dur-fast), background var(--dur-fast)"
      },
      onMouseEnter: e => {
        e.currentTarget.style.borderColor = "var(--accent-on-ink)";
        e.currentTarget.style.background = "rgba(236,240,244,0.05)";
      },
      onMouseLeave: e => {
        e.currentTarget.style.borderColor = "rgba(236,240,244,0.32)";
        e.currentTarget.style.background = "transparent";
      }
    }, h.ctaSecondary)))), /*#__PURE__*/React.createElement(Reveal, {
      delay: 240,
      style: {
        marginTop: "clamp(40px, 7vh, 88px)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: "10.5px",
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        color: "var(--accent-on-ink)",
        marginBottom: "16px"
      }
    }, h.panelLabel), /*#__PURE__*/React.createElement("div", {
      className: "vk-hero-ribbon",
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(3, minmax(0,1fr))",
        gap: "1px",
        background: "rgba(236,240,244,0.14)",
        border: "1px solid rgba(236,240,244,0.14)",
        borderRadius: "var(--r-md)",
        overflow: "hidden"
      }
    }, t.services.items.map((it, i) => /*#__PURE__*/React.createElement("a", {
      key: i,
      href: "#services",
      onClick: e => {
        e.preventDefault();
        onNav("services");
      },
      className: "vk-ribbon-cell",
      style: {
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        padding: "20px 20px 22px",
        background: "rgba(10,20,33,0.34)",
        transition: "background var(--dur-fast)"
      },
      onMouseEnter: e => {
        e.currentTarget.style.background = "rgba(190,150,87,0.12)";
        e.currentTarget.querySelector(".vk-rib-t").style.color = "var(--accent-on-ink)";
        e.currentTarget.querySelector(".vk-rib-bar").style.width = "100%";
      },
      onMouseLeave: e => {
        e.currentTarget.style.background = "rgba(10,20,33,0.34)";
        e.currentTarget.querySelector(".vk-rib-t").style.color = "var(--text-on-ink)";
        e.currentTarget.querySelector(".vk-rib-bar").style.width = "22px";
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: "11px",
        letterSpacing: "0.14em",
        color: "var(--accent-on-ink)"
      }
    }, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("span", {
      className: "vk-rib-t",
      style: {
        fontFamily: "var(--font-serif)",
        fontSize: "1.18rem",
        fontWeight: 400,
        lineHeight: 1.18,
        letterSpacing: "-0.01em",
        color: "var(--text-on-ink)",
        transition: "color var(--dur-fast)"
      }
    }, it.title), /*#__PURE__*/React.createElement("span", {
      className: "vk-rib-bar",
      "aria-hidden": "true",
      style: {
        width: "22px",
        height: "2px",
        background: "var(--accent)",
        marginTop: "2px",
        transition: "width var(--dur) var(--ease-out)"
      }
    })))))), /*#__PURE__*/React.createElement("button", {
      onClick: () => onNav("services"),
      "aria-label": "Scroll",
      style: {
        position: "absolute",
        bottom: "22px",
        right: "var(--gutter)",
        background: "none",
        border: "none",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        gap: "10px"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: "9.5px",
        letterSpacing: "0.24em",
        textTransform: "uppercase",
        color: "var(--text-on-ink-faint)"
      }
    }, "Scroll"), /*#__PURE__*/React.createElement("span", {
      className: "vk-scrollline"
    })));
  }

  /* ---------------- CRED BAR ---------------- */
  function CredBar({
    t
  }) {
    return /*#__PURE__*/React.createElement("section", {
      style: {
        background: "var(--ink-800)",
        borderTop: "1px solid var(--line-on-ink)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "container vk-credbar",
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "0"
      }
    }, t.stats.map((s, i) => /*#__PURE__*/React.createElement(Reveal, {
      key: s.label,
      delay: i * 70,
      style: {
        padding: "32px 0",
        paddingLeft: i === 0 ? 0 : "40px",
        borderLeft: i === 0 ? "none" : "1px solid var(--line-on-ink)"
      }
    }, /*#__PURE__*/React.createElement(DS.StatBlock, {
      figure: s.figure,
      label: s.label,
      onInk: true
    })))));
  }
  window.VKWeb = window.VKWeb || {};
  window.VKWeb.Top = {
    Hero,
    CredBar
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/sections-top.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Quote = __ds_scope.Quote;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.ServiceCard = __ds_scope.ServiceCard;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.Tag = __ds_scope.Tag;

})();
