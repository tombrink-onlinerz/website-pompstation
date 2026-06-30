/* ============================================================
   SHARED COMPONENTS — Pompstation site
   Loaded before each page's own *.jsx. Exposes globals.
   ============================================================ */
const { useState, useEffect, useRef } = React;
const t = window._t || ((nl) => nl);

/* Real-world contact data (pompstation.nu) */
const PS = {
  address1: "Zeeburgerdijk 52",
  address2: "1094 AE Amsterdam",
  area: "Amsterdam-Oost · Indische Buurt",
  phone: "+31 20 227 9885",
  phoneHref: "tel:+31202279885",
  email: "info@pompstation.nu",
  eventsEmail: "events@pompstation.nu",
  reserveUrl: "https://www.pompstation.nu/",
  openReservation: function(e) { if (e) e.preventDefault(); if (typeof window.openReservation === 'function') { window.openReservation(); } else { window.open('https://www.pompstation.nu/', '_blank'); } },
};

/* ---------- Photo ---------- */
function Photo({ src, alt, className = "", overlay = 0, position = "center" }) {
  return (
    <div className={`relative overflow-hidden bg-anthracite ${className}`}>
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: position }}
        loading="lazy" />
      {overlay > 0 &&
        <div className="absolute inset-0" style={{ background: `rgba(0,0,0,${overlay})` }}></div>
      }
    </div>);
}

/* ---------- Lang toggle ---------- */
function LangToggle({ solid }) {
  const lang = window._L || 'nl';
  const col = solid ? '#2A2A2A' : '#F5EFE6';
  return (
    <div style={{ display:'flex', alignItems:'center', gap:1, fontFamily:"'DM Sans',sans-serif", fontSize:11, letterSpacing:'0.07em' }}>
      {['nl','en'].map((l, i) => (
        <React.Fragment key={l}>
          {i > 0 && <span style={{ color:col, opacity:0.25, margin:'0 1px', fontSize:9 }}>|</span>}
          <button
            onClick={() => window._setL && window._setL(l)}
            style={{ padding:'3px 5px', background:'none', border:'none', cursor:'pointer',
                     fontWeight: lang===l ? 700 : 400, color:col,
                     opacity: lang===l ? 1 : 0.42, textTransform:'uppercase', fontSize:11,
                     fontFamily:"inherit" }}>
            {l}
          </button>
        </React.Fragment>
      ))}
    </div>
  );
}

/* ---------- Nav ---------- */
const NAV_LINKS = [
  { l: t("Menu", "Menu"), h: "menu.html", key: "menu" },
  { l: t("Live muziek", "Live music"), h: "agenda.html", key: "agenda" },
  { l: t("Ruimtes", "Spaces"), h: "ruimtes.html", key: "ruimtes", dropdown: [
    { l: t("Het Restaurant","The Restaurant"), h: "ruimte-restaurant.html" },
    { l: t("De Vide","The Mezzanine"),       h: "ruimte-vide.html" },
    { l: t("Het Terras","The Terrace"),       h: "ruimte-terras.html" },
    { l: t("Volledig Exclusief","Fully Exclusive"), h: "ruimte-exclusief.html" },
  ]},
  { l: t("Afhuren & groepen", "Private hire"), h: "groepen.html", key: "groepen" },
  { l: t("Verhaal", "Our story"), h: "verhaal.html", key: "verhaal" },
  { l: t("Contact", "Contact"), h: "contact.html", key: "contact" },
];

function SiteNav({ current, transparentTop = true }) {
  const [scrolled, setScrolled] = useState(!transparentTop);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!transparentTop) return;
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [transparentTop]);

  const solid = scrolled || !transparentTop;

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${solid ? "bg-cream/95 backdrop-blur border-b border-anthracite/10" : "bg-transparent"}`}>
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 h-16 md:h-20 flex items-center justify-between">
        <a href="index.html" className="flex items-center gap-3 shrink-0" aria-label="Pompstation — home">
          <img
            src="images/logo.webp"
            alt="Pompstation"
            className="h-4 md:h-5 w-auto transition-all"
            style={{ filter: solid ? "brightness(0)" : "none" }} />
        </a>

        <nav className="hidden lg:flex items-center gap-7 text-sm">
          {NAV_LINKS.map((it) => it.dropdown ? (
            <div key={it.key} className="relative group">
              <a href={it.h}
                className={`inline-flex items-center gap-1 transition-opacity hover:opacity-60 ${solid ? "text-anthracite" : "text-cream"} ${current === it.key ? "border-b-2 border-bordeaux pb-0.5" : ""}`}>
                {it.l}
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className="mt-px opacity-50">
                  <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 z-50">
                <div className="bg-cream border border-anthracite/10 shadow-xl min-w-[200px] py-2">
                  {it.dropdown.map((sub) => (
                    <a key={sub.h} href={sub.h}
                      className="block px-5 py-2.5 text-anthracite text-sm hover:bg-anthracite/5 transition-colors whitespace-nowrap">
                      {sub.l}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <a key={it.key} href={it.h}
              className={`transition-opacity hover:opacity-60 ${solid ? "text-anthracite" : "text-cream"} ${current === it.key ? "border-b-2 border-bordeaux pb-0.5" : ""}`}>
              {it.l}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LangToggle solid={solid} />
          <a href="#" onClick={PS.openReservation} className="btn-primary px-4 md:px-5 py-2.5 text-sm font-medium tracking-wide whitespace-nowrap">
            {t("Reserveer een tafel", "Reserve a table")}
          </a>
          <button
            className={`lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 ${solid ? "text-anthracite" : "text-cream"}`}
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu">
            <span className={`block w-6 h-px bg-current transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`}></span>
            <span className={`block w-6 h-px bg-current transition-opacity ${open ? "opacity-0" : ""}`}></span>
            <span className={`block w-6 h-px bg-current transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden overflow-hidden bg-cream border-b border-anthracite/10 transition-all duration-300 ${open ? "max-h-[32rem]" : "max-h-0"}`}>
        <nav className="px-5 py-3 flex flex-col">
          <a href="index.html" className="py-3 text-anthracite border-b border-anthracite/10 text-lg h-serif">{t("Home", "Home")}</a>
          {NAV_LINKS.map((it) => it.dropdown ? (
            <div key={it.key}>
              <a href={it.h} className={`py-3 border-b border-anthracite/10 text-lg h-serif block ${current === it.key ? "text-bordeaux" : "text-anthracite"}`}>{it.l}</a>
              <div className="pl-4 flex flex-col">
                {it.dropdown.map((sub) => (
                  <a key={sub.h} href={sub.h} className="py-2 border-b border-anthracite/6 text-base text-anthracite/70 hover:text-bordeaux transition-colors">{sub.l}</a>
                ))}
              </div>
            </div>
          ) : (
            <a key={it.key} href={it.h} className={`py-3 border-b border-anthracite/10 text-lg h-serif ${current === it.key ? "text-bordeaux" : "text-anthracite"}`}>{it.l}</a>
          ))}
        </nav>
      </div>
    </header>);
}

/* ---------- Page hero (interior pages) ---------- */
function PageHero({ kicker, title, titleAccent, lead, image, position = "center", height = "h-[62vh] min-h-[440px]", ctas }) {
  const t = window._t || ((nl) => nl);
  return (
    <section className={`relative ${height} w-full overflow-hidden`}>
      <div className="absolute inset-0">
        <Photo src={image} alt={title} className="w-full h-full" position={position} />
        <div className="absolute inset-0 hero-vignette"></div>
      </div>
      <div className="absolute inset-0 z-10 flex items-end">
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 w-full pb-12 md:pb-16">
          {kicker &&
            <div className="flex items-center gap-3 text-cream/75 eyebrow mb-5">
              <span className="w-8 h-px bg-cream/40"></span>
              <span>{kicker}</span>
            </div>
          }
          <h1 className="h-display text-cream text-[52px] sm:text-[80px] md:text-[112px] lg:text-[136px]">
            {title}{titleAccent && <> <span className="h-serif italic normal-case font-normal tracking-normal text-cream/95">{titleAccent}</span></>}
          </h1>
          {lead &&
            <p className="mt-5 max-w-xl text-cream/85 text-base md:text-lg leading-relaxed">{lead}</p>
          }
          {ctas && ctas.length > 0 &&
            <div className="mt-7 flex flex-wrap gap-3">
              {ctas.map((cta, i) => (
                <a key={i} href={cta.href}
                  className={i === 0
                    ? "inline-flex items-center gap-2 bg-cream text-bordeaux px-6 py-3.5 text-sm font-medium tracking-wide hover:bg-cream/90 transition-colors"
                    : "inline-flex items-center gap-2 border border-cream/40 text-cream px-6 py-3.5 text-sm font-medium tracking-wide hover:border-cream/70 transition-colors"}>
                  {cta.label}
                </a>
              ))}
            </div>
          }
        </div>
      </div>
    </section>);
}

/* ---------- Footer ---------- */
function SiteFooter() {
  return (
    <footer className="bg-anthracite text-cream">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 py-16 md:py-24">
        <img src="images/logo.webp" alt="Pompstation" className="h-7 md:h-9 w-auto mb-10 md:mb-14 opacity-90" />
        <div className="grid md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-7">
            <div className="eyebrow text-cream/60 mb-4">{t("Reserveren of even bellen?", "Reservations & enquiries")}</div>
            <a href={PS.phoneHref} className="h-display block text-cream text-3xl sm:text-5xl md:text-7xl lg:text-8xl hover:text-cream/80 transition-colors">
              {PS.phone}
            </a>
            <a href={`mailto:${PS.email}`} className="mt-4 inline-block font-serif text-lg sm:text-2xl md:text-3xl italic text-cream/85 hover:text-cream transition-colors break-all">
              {PS.email}
            </a>
          </div>
          <div className="md:col-span-5 md:pl-8 md:border-l border-cream/20">
            <div className="eyebrow text-cream/60 mb-4">Pompstation</div>
            <address className="not-italic text-cream/85 leading-relaxed">
              {PS.address1}<br />
              {PS.address2}<br />
              <br />
              <span className="text-cream/60 text-sm font-mono">
                Wo–do · 17:00–00:00<br />
                Vr–za · 17:00–01:00<br />
                {t("Live muziek · do–za", "Live music · Thu–Sat")}
              </span>
            </address>
          </div>
        </div>
      </div>
      <div className="border-t border-cream/15">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 py-6 flex flex-col md:flex-row justify-between gap-4 text-xs font-mono text-cream/55">
          <div>{t("© 2026 Restaurant Pompstation — gevestigd in een monument uit 1912", "© 2026 Restaurant Pompstation — housed in a 1912 monument")}</div>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a href="menu.html" className="hover:text-cream transition-colors">Menu</a>
            <a href="verhaal.html" className="hover:text-cream transition-colors">{t("Verhaal", "Our story")}</a>
            <a href="agenda.html" className="hover:text-cream transition-colors">{t("Live muziek", "Live music")}</a>
            <a href="groepen.html" className="hover:text-cream transition-colors">{t("Afhuren & groepen", "Private hire")}</a>
            <a href="contact.html" className="hover:text-cream transition-colors">Contact</a>
            <a href="vacatures.html" className="hover:text-cream transition-colors">{t("Vacatures", "Vacancies")}</a>
            <a href="algemene-voorwaarden.html" className="hover:text-cream transition-colors">{t("Algemene voorwaarden", "Terms & conditions")}</a>
            <a href="privacy.html" className="hover:text-cream transition-colors">Privacy</a>
          </div>
        </div>
      </div>
    </footer>);
}

/* ---------- Sticky mobile CTA ---------- */
function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className={`lg:hidden fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300 ${visible ? "translate-y-0" : "translate-y-full"}`}>
      <div className="grid grid-cols-3 bg-bordeaux text-cream border-t border-cream/15">
        <a href={PS.phoneHref} className="py-3 text-center border-r border-cream/15 active:bg-bordeaux-dark">
          <div className="text-base">📞</div>
          <div className="mt-0.5 text-xs">{t("Bel", "Call")}</div>
        </a>
        <a href="#" onClick={PS.openReservation} className="py-3 text-center bg-bordeaux active:bg-bordeaux-dark">
          <div className="text-base">✶</div>
          <div className="mt-0.5 text-xs">{t("Reserveer", "Reserve")}</div>
        </a>
        <a href="groepen.html" className="py-3 text-center border-l border-cream/15 active:bg-bordeaux-dark">
          <div className="text-base">⊞</div>
          <div className="mt-0.5 text-xs">{t("Afhuren", "Hire")}</div>
        </a>
      </div>
    </div>);
}

/* ---------- Sfeer gallery (gedeeld) ---------- */
const SFEER_ITEMS = [
  { image: "images/restaurant-zaal.jpg", position: "center 20%", label: t("De grote hal · 12 m hoog", "The grand hall · 12 m high"), span: "col-span-2 row-span-2" },
  { image: "images/food-burrata.jpg", position: "center 40%", label: t("Uit de open keuken", "From the open kitchen"), span: "col-span-1 row-span-1" },
  { image: "images/cocktail.jpg", position: "center 30%", label: t("Borrelen aan de bar", "Drinks at the bar"), span: "col-span-1 row-span-1" },
  { image: "images/groepsdiner-overhead.jpg", position: "center 30%", label: t("Groepen & events", "Groups & events"), span: "col-span-1 row-span-1 md:row-span-2" },
  { image: "images/live-muziek-intiem.jpg", position: "center 40%", label: t("Live jazz donderdag t/m zaterdag", "Live jazz Thursday to Saturday"), span: "col-span-1 row-span-1 md:row-span-2" },
  { image: "images/terras-oesters.jpg", position: "center 40%", label: t("Terras · seizoen open", "Terrace · season open"), span: "col-span-2 row-span-1" },
];

function SfeerGallery({ bg = "bg-cream-warm", lead }) {
  return (
    <section id="sfeer" className={`${bg} py-20 md:py-32 border-b border-anthracite/10`}>
      <div className="max-w-[1280px] mx-auto px-5 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div className="max-w-2xl">
            <div className="eyebrow text-bordeaux mb-4">{t("Sfeer", "Atmosphere")}</div>
            <h2 className="h-display text-anthracite text-5xl md:text-7xl lg:text-8xl">
              {t("Proef de", "Preview the")}<br />
              <span className="h-serif italic normal-case font-normal text-bordeaux">{t("sfeer vooraf.", "atmosphere.")}</span>
            </h2>
          </div>
          <p className="md:max-w-sm text-anthracite/80 leading-relaxed text-lg">
            {lead || t("Kaarslicht onder een plafond van twaalf meter, jazz die door de hal galmt en een keuken die er staat. Een eerste indruk van een avond bij Pompstation.", "Candlelight beneath a twelve-metre ceiling, jazz echoing through the hall and a kitchen that delivers. A first impression of an evening at Pompstation.")}
          </p>
        </div>
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 [grid-auto-rows:150px] sm:[grid-auto-rows:185px] md:[grid-auto-rows:215px]"
          style={{ gridAutoFlow: "dense" }}>
          {SFEER_ITEMS.map((s, i) =>
          <figure key={i} className={`group relative overflow-hidden bg-anthracite ${s.span}`}>
            <Photo src={s.image} alt={s.label} className="w-full h-full" position={s.position} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/0 to-transparent opacity-80 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500"></div>
            <figcaption className="absolute bottom-0 left-0 p-3 md:p-5 md:translate-y-2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-500">
              <span className="font-mono text-[10px] md:text-[11px] tracking-[0.18em] uppercase text-cream border border-cream/45 px-2 py-1 bg-black/25 backdrop-blur-sm">{s.label}</span>
            </figcaption>
          </figure>
          )}
        </div>
      </div>
    </section>);
}

/* ---------- Brochure Download Section ---------- */
const N8N_WEBHOOK_WEDDING   = "";
const N8N_WEBHOOK_CORPORATE = "";
const BREVO_API_KEY = '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';
const BREVO_URL = 'https://api.brevo.com/v3/smtp/email';

function BrochureDownload({ type }) {
  // type: "wedding" | "corporate"
  const isWedding = type === "wedding";
  const t = window._t || ((nl) => nl);
  const webhook = isWedding ? N8N_WEBHOOK_WEDDING : N8N_WEBHOOK_CORPORATE;
  const [form, setForm] = useState({ name: "", phone: "", email: "", people: "", privacy: false });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [done, setDone] = useState(false);
  const [sending, setSending] = useState(false);
  const [serverError, setServerError] = useState(null);

  const validate = (f) => {
    const e = {};
    if (!f.name || f.name.trim().length < 2) e.name = t("Vul uw naam in","Please enter your name");
    if (!f.phone || f.phone.replace(/\D/g,"").length < 8) e.phone = t("Geldig telefoonnummer","Valid phone number");
    if (!f.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) e.email = t("Geldig e-mailadres","Valid email address");
    if (!f.people) e.people = t("Vul groepsgrootte in","Please enter group size");
    if (!f.privacy) e.privacy = t("Accepteer de privacyverklaring","Please accept the privacy policy");
    return e;
  };

  useEffect(() => { if (Object.keys(touched).length) setErrors(validate(form)); }, [form]);
  const set = k => ev => setForm(f => ({ ...f, [k]: ev.target.value }));
  const blur = k => () => setTouched(p => ({ ...p, [k]: true }));

  const submit = async (ev) => {
    ev.preventDefault();
    const errs = validate(form);
    setTouched({ name:true, phone:true, email:true, people:true, privacy:true });
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    setSending(true); setServerError(null);
    try {
      const html = `<h2>Brochure aanvraag — ${isWedding ? 'Wedding' : 'Corporate'}</h2>
        <p><strong>Naam:</strong> ${form.name}</p>
        <p><strong>E-mail:</strong> ${form.email}</p>
        <p><strong>Telefoon:</strong> ${form.phone}</p>
        <p><strong>Groepsgrootte:</strong> ${form.people}</p>`;
      const res = await fetch(BREVO_URL, {
        method: 'POST',
        headers: { 'api-key': BREVO_API_KEY, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sender: { name: 'Website Pompstation', email: 'events@pompstation.nu' },
          to: [{ email: 'events@pompstation.nu', name: 'Pompstation Events' }],
          replyTo: { email: form.email, name: form.name },
          subject: `[Brochure] ${isWedding ? 'Wedding' : 'Corporate'} — ${form.name}`,
          htmlContent: html,
        }),
      });
      if (res.ok || res.status === 201) { window.location.href = 'bedankt-brochure.html?type=' + encodeURIComponent(type) + '&email=' + encodeURIComponent(form.email); }
      else { setServerError(t("Er ging iets mis. Probeer opnieuw.","Something went wrong. Please try again.")); }
    } catch { setServerError(t("Geen verbinding. Probeer opnieuw.","No connection. Please try again.")); }
    finally { setSending(false); }
  };

  const bg = isWedding ? "bg-bordeaux" : "bg-anthracite";
  const inputCls = "w-full bg-cream/10 border border-cream/20 text-cream placeholder-cream/30 px-4 py-3.5 text-sm focus:outline-none focus:border-cream/55 transition-colors";
  const errCls = "mt-1.5 text-brass text-xs font-mono";
  const labelCls = "block eyebrow text-cream/55 mb-2";

  return (
    <section className={`${bg} text-cream py-20 md:py-28`}>
      <div className="max-w-[1280px] mx-auto px-5 md:px-10">
        <div className="grid md:grid-cols-12 gap-12 items-center">

          {/* Left */}
          <div className="md:col-span-4">
            <div className="eyebrow text-brass mb-4">{t("Brochure","Brochure")}</div>
            <h2 className="h-display text-cream text-4xl md:text-5xl leading-tight">
              {isWedding
                ? <>{t("Wedding","Wedding")}<br /><em>{t("Brochure 2026","Brochure 2026")}</em></>
                : <>{t("Corporate","Corporate")}<br /><em>{t("Brochure 2026","Brochure 2026")}</em></>}
            </h2>
            <p className="mt-5 text-cream/65 text-base leading-relaxed">
              {isWedding
                ? t("Ontvang onze complete brochure met alle mogelijkheden, menuopties, tarieven en de ervaringen van andere bruidsparen.","Receive our complete brochure with all options, menu choices, rates and experiences from other couples.")
                : t("Ontvang onze complete brochure met capaciteiten, technische specificaties, catering-opties en tarieven.","Receive our complete brochure with capacities, technical specifications, catering options and rates.")}
            </p>
            <p className="mt-3 text-cream/45 text-sm font-mono">
              {t("De brochure wordt naar uw e-mailadres gestuurd.","The brochure will be sent to your email address.")}
            </p>
          </div>

          {/* Right: form or success */}
          <div className="md:col-span-7 md:col-start-6">
            {!done ? (
              <form onSubmit={submit} noValidate className="space-y-0">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelCls}>{t("Naam","Name")} *</label>
                    <input type="text" value={form.name} onChange={set("name")} onBlur={blur("name")}
                      placeholder={isWedding ? t("Emma & Lars","Emma & Lars") : t("Jan de Vries","Jan de Vries")}
                      className={inputCls} />
                    {touched.name && errors.name && <p className={errCls}>{errors.name}</p>}
                  </div>
                  <div>
                    <label className={labelCls}>{t("Telefoonnummer","Phone")} *</label>
                    <input type="tel" value={form.phone} onChange={set("phone")} onBlur={blur("phone")}
                      placeholder="+31 6 12 34 56 78" className={inputCls} />
                    {touched.phone && errors.phone && <p className={errCls}>{errors.phone}</p>}
                  </div>
                  <div>
                    <label className={labelCls}>{t("E-mailadres","Email")} *</label>
                    <input type="email" value={form.email} onChange={set("email")} onBlur={blur("email")}
                      placeholder="naam@bedrijf.nl" className={inputCls} />
                    {touched.email && errors.email && <p className={errCls}>{errors.email}</p>}
                  </div>
                  <div>
                    <label className={labelCls}>{isWedding ? t("Aantal gasten","Number of guests") : t("Groepsgrootte","Group size")} *</label>
                    <input type="number" min="2" max="380" value={form.people} onChange={set("people")} onBlur={blur("people")}
                      placeholder={isWedding ? t("bv. 120","e.g. 120") : t("bv. 80","e.g. 80")}
                      className={inputCls} />
                    {touched.people && errors.people && <p className={errCls}>{errors.people}</p>}
                  </div>
                </div>
                {serverError && <p className="mt-4 text-brass text-sm font-mono">{serverError}</p>}
                <div className="flex items-start gap-3 pt-5">
                  <input type="checkbox" id="brochure-privacy" checked={!!form.privacy}
                    onChange={e => setForm(f => ({...f, privacy: e.target.checked}))}
                    className="mt-1 w-4 h-4 cursor-pointer flex-shrink-0 accent-cream" />
                  <label htmlFor="brochure-privacy" className="text-sm text-cream/70 leading-relaxed">
                    {t("Ik ga akkoord met de ","I agree to the ")}
                    <a href="privacy.html" className="text-cream underline hover:text-cream/80 transition-colors">{t("privacyverklaring","privacy policy")}</a>
                    {t(" van Pompstation."," of Pompstation.")}
                  </label>
                </div>
                {touched.privacy && errors.privacy && <p className="mt-1.5 text-brass text-xs font-mono">{errors.privacy}</p>}
                <button type="submit" disabled={sending}
                  className="mt-7 inline-flex items-center gap-3 bg-cream text-bordeaux px-8 py-4 text-sm font-medium tracking-wide hover:bg-cream/90 transition-colors disabled:opacity-50">
                  <span>{sending ? t("Versturen…","Sending…") : t("Ontvang de brochure","Receive the brochure")}</span>
                  {!sending && <span>→</span>}
                </button>
              </form>
            ) : (
              <div className="border border-cream/20 p-8 md:p-12">
                <div className="font-mono text-xs tracking-[0.18em] uppercase text-brass mb-4">{t("Verstuurd","Sent")}</div>
                <h3 className="h-display text-cream text-3xl md:text-4xl">{t("Check uw inbox","Check your inbox")}</h3>
                <p className="mt-4 text-cream/65 text-base leading-relaxed">
                  {t("De brochure is onderweg naar","The brochure is on its way to")} <strong className="text-cream">{form.email}</strong>.<br/>
                  {t("We nemen binnenkort contact op.","We will be in touch soon.")}
                </p>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}

/* ---------- Fade-in observer ---------- */
function useFadeIn() {
  useEffect(() => {
    const els = document.querySelectorAll(".fade-up");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

Object.assign(window, { PS, Photo, LangToggle, SiteNav, PageHero, SiteFooter, StickyMobileCTA, useFadeIn, SfeerGallery, BrochureDownload });
