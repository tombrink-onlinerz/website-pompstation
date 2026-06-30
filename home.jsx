const { useState, useEffect, useRef } = React;
const t = window._t || ((nl) => nl);

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
                     fontFamily:'inherit' }}>
            {l}
          </button>
        </React.Fragment>
      ))}
    </div>
  );
}

/* ============================================================
   PHOTO
   ============================================================ */
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

/* ============================================================
   NAV
   ============================================================ */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const solid = scrolled || open;
  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${solid ? "bg-cream/95 backdrop-blur border-b border-anthracite/10" : "bg-transparent"}`}>
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 h-16 md:h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <img
            src="images/logo.webp"
            alt="Pompstation"
            className="h-4 md:h-5 w-auto transition-all"
            style={{ filter: solid ? "brightness(0)" : "none" }} />
        </a>
        <nav className="hidden lg:flex items-center gap-7 text-sm">
          {[
            { l: t("Menu","Menu"), h: "menu.html" },
            { l: t("Verhaal","Our story"), h: "verhaal.html" },
            { l: t("Live muziek","Live music"), h: "agenda.html" },
            { l: t("Afhuren & groepen","Private hire"), h: "groepen.html" },
            { l: t("Contact","Contact"), h: "contact.html" },
          ].map((it, i) =>
          <a key={i} href={it.h}
          className={`hover:opacity-70 transition-opacity ${solid ? "text-anthracite" : "text-cream"}`}>
            {it.l}
          </a>
          )}
        </nav>
        <div className="flex items-center gap-3">
          <LangToggle solid={solid} />
          <a href="#" onClick={(e) => { e.preventDefault(); window.openReservation ? window.openReservation() : window.open('https://www.pompstation.nu/','_blank'); }} className="btn-primary px-4 md:px-5 py-2.5 text-sm font-medium tracking-wide whitespace-nowrap">
            {t("Reserveer een tafel","Reserve a table")}
          </a>
          <button
            className={`lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 ${solid ? "text-anthracite" : "text-cream"}`}
            onClick={() => setOpen(o => !o)}
            aria-label="Menu">
            <span className={`block w-6 h-px bg-current transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`}></span>
            <span className={`block w-6 h-px bg-current transition-opacity ${open ? "opacity-0" : ""}`}></span>
            <span className={`block w-6 h-px bg-current transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`}></span>
          </button>
        </div>
      </div>
      <div className={`lg:hidden overflow-hidden bg-cream border-b border-anthracite/10 transition-all duration-300 ${open ? "max-h-96" : "max-h-0"}`}>
        <nav className="px-5 py-3 flex flex-col">
          {[
            { l: t("Menu","Menu"), h: "menu.html" },
            { l: t("Verhaal","Our story"), h: "verhaal.html" },
            { l: t("Live muziek","Live music"), h: "agenda.html" },
            { l: t("Afhuren & groepen","Private hire"), h: "groepen.html" },
            { l: t("Contact","Contact"), h: "contact.html" },
          ].map((it, i) =>
          <a key={i} href={it.h} className="py-3 border-b border-anthracite/10 text-lg h-serif text-anthracite">{it.l}</a>
          )}
        </nav>
      </div>
    </header>);
}

/* ============================================================
   HERO
   ============================================================ */
function Hero() {
  return (
    <section id="top" className="relative h-screen min-h-[680px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Photo
          src="images/interior-vide.jpg"
          alt="Interieur Pompstation met vide en lange tafels"
          className="w-full h-full"
          position="center 35%" />
        <div className="absolute inset-0 hero-vignette"></div>
      </div>

      <div className="absolute top-0 left-0 right-0 z-10 hidden md:block">
        <div className="max-w-[1440px] mx-auto px-10 pt-28">
          <div className="flex items-center gap-3 text-cream/70 eyebrow">
            <span className="w-8 h-px bg-cream/40"></span>
            <span>{t("Anno 1912 · Amsterdam Oost · Indische Buurt","Est. 1912 · Amsterdam East · Indische Buurt")}</span>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 z-10 flex items-end md:items-center">
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 w-full pb-40 md:pb-0">
          <div className="max-w-[1100px]">
            <h1 className="h-display text-cream text-[45px] sm:text-[70px] md:text-[109px] lg:text-[134px]">
              {t("Borrelen","Drinks")} <span className="h-serif italic normal-case font-normal tracking-normal text-cream/95">&</span><br />
              {t("Dineren","Dining")} <span className="h-serif italic normal-case font-normal tracking-normal text-cream/95">{t("bij","at")}</span> Pompstation.
            </h1>
            <p className="mt-6 md:mt-8 max-w-xl text-cream/85 text-base md:text-lg leading-relaxed">
              {t("Dineren, borrelen en live jazz in een monumentaal watergemaal uit 1912. Voor twee aan tafel — of met 360 de hele zaal.","Dining, drinks and live jazz in a monumental 1912 waterworks. A table for two — or the whole hall for 360.")}
            </p>
            <div className="mt-8 md:mt-10 flex flex-wrap gap-3 md:gap-4">
              <a href="#keuze" className="btn-primary px-7 py-4 text-sm md:text-base font-medium tracking-wide inline-flex items-center gap-3 group">
                {t("Wat wordt het?","What shall it be?")}
                <span className="transition-transform group-hover:translate-y-1">↓</span>
              </a>
              <a href="#menu" className="btn-outline text-cream px-7 py-4 text-sm md:text-base font-medium tracking-wide hover:bg-cream/10 inline-flex items-center gap-2">
                {t("Bekijk het menu","View the menu")}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-cream/15 bg-black/30 backdrop-blur-sm overflow-hidden">
        <div className="flex marquee-track whitespace-nowrap py-4 text-cream/85 eyebrow gap-0">
          {Array.from({ length: 2 }).map((_, k) =>
          <div key={k} className="flex items-center gap-10 px-5 shrink-0">
            <span className="flex items-center gap-2"><span className="w-1 h-1 bg-cream/60 rounded-full"></span> {t("Live jazz · donderdag t/m zaterdag","Live jazz · Thursday to Saturday")}</span>
            <span className="flex items-center gap-2"><span className="w-1 h-1 bg-cream/60 rounded-full"></span> {t("Bekroonde carpaccio & dry-aged steaks","Award-winning carpaccio & dry-aged steaks")}</span>
            <span className="flex items-center gap-2"><span className="w-1 h-1 bg-cream/60 rounded-full"></span> {t("Groot zonnig terras in de tuin","Large sunny garden terrace")}</span>
            <span className="flex items-center gap-2"><span className="w-1 h-1 bg-cream/60 rounded-full"></span> {t("Vis & vegetarisch van het seizoen","Seasonal fish & vegetarian")}</span>
            <span className="flex items-center gap-2"><span className="w-1 h-1 bg-cream/60 rounded-full"></span> {t("Officiële trouwlocatie gemeente Amsterdam","Official wedding venue Amsterdam")}</span>
          </div>
          )}
        </div>
      </div>
    </section>);
}

/* ============================================================
   TWO PATHS — the core choice
   ============================================================ */
const PATHS = [
  {
    kicker: t("Optie één · Kom langs","Option one · Walk in"),
    title: t("Eten & drinken","Food & drink"),
    lead: t("Zowel in het restaurant als op het terras kunt u lunchen, dineren of borrelen — reserveer een tafel of schuif aan bij de bar.","In the restaurant and on the terrace you can lunch, dine or have drinks — reserve a table or pull up a stool at the bar."),
    items: [
      t("Lunch & diner uit de keuken","Lunch & dinner from the kitchen"),
      t("Borrelen aan de bar of op het terras","Drinks at the bar or on the terrace"),
      t("Terras in de tuin bij mooi weer","Garden terrace in good weather"),
      t("Live jazz op de achtergrond (do–za)","Live jazz in the background (Thu–Sat)"),
    ],
    image: "images/terras-dining.jpg",
    imagePosition: "center 30%",
    ctaLabel: t("Reserveer een tafel","Reserve a table"),
    ctaHref: "#",
    external: false,
    variant: "light",
  },
  {
    kicker: t("Optie twee · De zaal is van u","Option two · The venue is yours"),
    title: t("Pompstation afhuren","Hire Pompstation"),
    lead: t("Een gedeelte of het hele monument — voor groepen van 10 tot 360.","Part or all of the monument — for groups of 10 to 360."),
    items: [
      t("Groepsdiner aan een lange tafel (10–40)","Group dinner at a long table (10–40)"),
      t("De vide afhuren (50–100)","Hire the mezzanine (50–100)"),
      t("Volledig exclusief (tot 360)","Fully exclusive (up to 360)"),
      t("Bruiloften, bedrijfsfeesten & verjaardagen","Weddings, corporate events & birthdays"),
    ],
    image: "images/event-fullhall.jpg",
    imagePosition: "center 70%",
    ctaHref: "groepen.html",
    external: false,
    variant: "dark",
    featured: true,
  },
];

function PathCard({ p }) {
  const dark = p.variant === "dark";
  return (
    <article className={`card-lift relative flex flex-col ${dark ? "bg-bordeaux text-cream shadow-2xl" : "bg-cream-warm text-anthracite border border-anthracite/10"}`}>
      {p.featured &&
        <div className="absolute -top-3 left-6 z-10 bg-cream text-bordeaux eyebrow px-3 py-1.5">
          {t("★ Voor groepen & events","★ For groups & events")}
        </div>
      }
      <div className="relative aspect-[16/10] overflow-hidden">
        <Photo src={p.image} alt={p.title} className="w-full h-full" position={p.imagePosition} overlay={dark ? 0.15 : 0} />
      </div>
      {p.extraImages && p.extraImages.length > 0 && (
        <div className="grid grid-cols-3 gap-1">
          {p.extraImages.map((img, i) => (
            <div key={i} className="relative overflow-hidden" style={{height: '140px'}}>
              <Photo src={img.src} alt={img.alt} className="w-full h-full" position="center" overlay={0} />
            </div>
          ))}
        </div>
      )}
      <div className="p-7 md:p-10 flex-1 flex flex-col">
        <div className={`eyebrow mb-3 ${dark ? "text-cream/70" : "text-bordeaux"}`}>{p.kicker}</div>
        <h3 className="h-display text-5xl md:text-6xl leading-[0.9]">{p.title}</h3>
        <p className={`mt-4 text-lg leading-relaxed ${dark ? "text-cream/90" : "text-anthracite/85"}`}>{p.lead}</p>
        <ul className="mt-6 space-y-3 text-[15px] leading-relaxed">
          {p.items.map((it, i) =>
          <li key={i} className="flex gap-3">
            <span className={`mt-1.5 w-1.5 h-1.5 shrink-0 ${dark ? "bg-cream/70" : "bg-bordeaux"}`}></span>
            <span className={dark ? "text-cream/90" : "text-anthracite/85"}>{it}</span>
          </li>
          )}
        </ul>
        <a
          href={p.ctaHref}
          {...(p.external ? { target: "_blank", rel: "noopener" } : {})}
          onClick={p.ctaHref === '#' ? (e) => { e.preventDefault(); window.openReservation ? window.openReservation() : window.open('https://www.pompstation.nu/','_blank'); } : undefined}
          className={`mt-8 inline-flex items-center justify-between gap-3 px-6 py-4 text-sm font-medium tracking-wide group ${
            dark ? "bg-cream text-bordeaux hover:bg-cream-warm" : "bg-bordeaux text-cream hover:bg-bordeaux-dark"
          } transition-colors`}>
          <span>{p.ctaLabel}</span>
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </a>
      </div>
    </article>);
}

function TwoPaths() {
  return (
    <section id="keuze" className="bg-cream py-20 md:py-32 border-b border-anthracite/10">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div className="max-w-2xl">
            <div className="eyebrow text-bordeaux mb-4">{t("Twee manieren om te komen","Two ways to visit")}</div>
            <h2 className="h-display text-anthracite text-5xl md:text-7xl lg:text-8xl">
              {t("Een tafel,","A table,")}<br />
              <span className="h-serif italic normal-case font-normal text-bordeaux">{t("of de hele zaal.","or the whole hall.")}</span>
            </h2>
          </div>
          <p className="md:max-w-sm text-anthracite/80 leading-relaxed text-lg">
            {t("Kom zomaar langs voor een diner, borrel of een middag op het terras — of huur (een deel van) Pompstation af voor uw eigen avond.","Drop by for dinner, drinks or an afternoon on the terrace — or hire (part of) Pompstation for your own evening.")}
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-5 md:gap-6 items-start">
          {PATHS.map((p, i) => <PathCard key={i} p={p} />)}
        </div>
      </div>
    </section>);
}

/* ============================================================
   EXPERIENCE — keuken / muziek / terras (editorial trio)
   ============================================================ */
const EXPERIENCE = [
  {
    id: "menu",
    kicker: t("De keuken","The kitchen"),
    title: t("Vlees, vis & vega van niveau","Meat, fish & veg at the highest level"),
    body: t("Bekroonde carpaccio van Hollands rund, dry-aged steaks uit eigen kast, verse vis van lokale leveranciers en volwaardige vegetarische gerechten — met een uitgebreide wijnkaart ernaast.","Award-winning carpaccio of Dutch beef, dry-aged steaks from our own cabinet, fresh fish from local suppliers and full vegetarian dishes — with an extensive wine list."),
    image: "images/steak-fire.jpg",
    imagePosition: "center 40%",
  },
  {
    id: "muziek",
    kicker: t("Live muziek","Live music"),
    title: t("Jazz & soul, donderdag t/m zaterdag","Jazz & soul, Thursday to Saturday"),
    body: t("Door de perfecte akoestiek van de hoge hal klinkt internationale jazz, soul en bossa nova als achtergrond bij uw diner — donderdag tot en met zaterdag.","The perfect acoustics of the high hall turn international jazz, soul and bossa nova into the perfect backdrop to your dinner — Thursday to Saturday."),
    image: "images/live-band-vide.jpg",
    imagePosition: "center 40%",
  },
];

function Experience() {
  return (
    <section id="eten" className="bg-bordeaux text-cream py-20 md:py-32">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10">
        <div className="grid md:grid-cols-12 gap-8 mb-12 md:mb-16">
          <div className="md:col-span-6">
            <div className="eyebrow text-cream/70 mb-4">{t("Wat u kunt verwachten","What to expect")}</div>
            <h2 className="h-display text-cream text-5xl md:text-7xl">
              {t("Een avond die","An evening that")}<br />
              <span className="h-serif italic normal-case font-normal text-cream/80">{t("blijft hangen.","stays with you.")}</span>
            </h2>
          </div>
          <div className="md:col-span-6 md:pt-12">
            <p className="text-cream/90 text-lg md:text-xl leading-relaxed max-w-xl">
              {t("Het gebouw pompt nog steeds water voor de stad — bij regen voel je soms een lichte trilling. Daarboven: kaarslicht, een keuken op niveau en live muziek onder een plafond van twaalf meter.","The building still pumps water for the city — on rainy days you may feel a gentle vibration. Above: candlelight, a kitchen that delivers and live music beneath a ceiling twelve metres high.")}
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          {EXPERIENCE.map((e, i) =>
          <article key={e.id} id={e.id} className="bg-bordeaux-dark border border-cream/15">
            <div className="relative aspect-[16/9] overflow-hidden">
              <Photo src={e.image} alt={e.title} className="w-full h-full" position={e.imagePosition} />
            </div>
            <div className="p-6 md:p-8">
              <div className="eyebrow text-cream/70 mb-2">{e.kicker}</div>
              <h3 className="h-serif text-3xl md:text-4xl text-cream">{e.title}</h3>
              <p className="mt-4 text-cream/85 leading-relaxed text-[15px] md:text-base">{e.body}</p>
            </div>
          </article>
          )}
        </div>
      </div>
    </section>);
}

/* ============================================================
   LOCATION INTRO
   ============================================================ */
function Intro() {
  return (
    <section className="bg-cream py-20 md:py-32 border-b border-anthracite/10">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 grid md:grid-cols-12 gap-8 md:gap-12 items-center">
        <div className="md:col-span-4 order-2 md:order-1">
          <Photo
            src="images/historic-1912.jpg"
            alt="Het pompstation in 1912 — originele machinezaal"
            className="w-full aspect-[3/4]"
            position="center" />
          <div className="mt-3 font-mono text-[10px] tracking-[0.18em] uppercase text-anthracite/55">
            {t("Anno 1912 · originele machinezaal","Est. 1912 · original machine hall")}
          </div>
        </div>
        <div className="md:col-span-8 order-1 md:order-2">
          <div className="eyebrow text-bordeaux mb-4">{t("De locatie","The venue")}</div>
          <h2 className="h-serif text-anthracite text-3xl md:text-5xl lg:text-6xl">
            {t("Een voormalig","A former")} <em className="text-bordeaux">{t("watergemaal","waterworks")}</em> {t("uit 1912 in Amsterdam-Oost — industrieel, hoog en imposant. Van buiten onopvallend, van binnen adembenemend.","from 1912 in Amsterdam East — industrial, soaring and imposing. Unassuming from outside, breathtaking within.")}
          </h2>
          <div className="mt-8 grid grid-cols-3 gap-6 md:gap-10 max-w-xl">
            <div>
              <div className="h-display text-bordeaux text-4xl md:text-5xl">12m</div>
              <div className="mt-1 text-sm text-anthracite/70">{t("vrije hoogte","ceiling height")}</div>
            </div>
            <div>
              <div className="h-display text-bordeaux text-4xl md:text-5xl">360</div>
              <div className="mt-1 text-sm text-anthracite/70">{t("max. capaciteit","max. capacity")}</div>
            </div>
            <div>
              <div className="h-display text-bordeaux text-4xl md:text-5xl">15 jr</div>
              <div className="mt-1 text-sm text-anthracite/70">{t("ervaring met events","years event experience")}</div>
            </div>
          </div>
        </div>
      </div>
    </section>);
}

/* ============================================================
   SEIZOEN — seasonal banner: terras geopend
   ============================================================ */
function Seizoen() {
  return (
    <section id="seizoen" className="overflow-hidden">
      <div className="grid md:grid-cols-5" style={{minHeight:'540px'}}>
        <div className="md:col-span-3 bg-bordeaux px-8 md:px-16 py-20 md:py-28 flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-cream animate-pulse"></span>
            <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-cream/80">{t("Zomer 2026 · nu open","Summer 2026 · now open")}</span>
          </div>
          <h2 className="h-display text-cream text-4xl sm:text-5xl md:text-6xl xl:text-7xl leading-[0.92]">
            {t("Ons heerlijke","Our wonderful")}<br />
            <span className="h-serif italic normal-case font-normal text-cream/75">{t("terras is geopend.","terrace is open.")}</span>
          </h2>
          <p className="mt-7 text-cream/80 text-lg leading-relaxed max-w-lg">
            Geniet van zomerse gerechten, koude drankjes en de sfeer van Amsterdam-Oost —
            omringd door groen, onder een open hemel.
          </p>
          <div className="mt-9">
            <a href="#" onClick={(e) => { e.preventDefault(); window.openReservation ? window.openReservation() : window.open('https://www.pompstation.nu/','_blank'); }}
              className="inline-flex items-center gap-3 bg-cream text-bordeaux px-7 py-4 font-medium text-sm tracking-wide hover:bg-cream/90 transition-colors">
              {t("Reserveer een terrastafeltje","Reserve a terrace table")} <span>→</span>
            </a>
          </div>
        </div>
        <div className="md:col-span-2 relative" style={{minHeight:'340px'}}>
          <Photo src="images/terras-borrelen.jpg" alt="Terras Pompstation" className="absolute inset-0 w-full h-full" position="center 30%" />
        </div>
      </div>
    </section>);
}

/* ============================================================
   TERRAS — binnen & buiten
   ============================================================ */
function Terras() {
  return (
    <section id="terras" className="bg-cream py-20 md:py-32 border-b border-anthracite/10">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10">
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">

          {/* Foto-kolom: terras groot + interieur klein */}
          <div className="md:col-span-7 grid grid-cols-2 gap-3 md:gap-4">
            <div className="col-span-2 overflow-hidden" style={{height:'380px'}}>
              <Photo src="images/terras-koppel.jpg" alt="Mensen op het terras bij Pompstation" className="w-full h-full" position="center 40%" />
            </div>
            <div className="overflow-hidden" style={{height:'220px'}}>
              <Photo src="images/terras-tafel.jpg" alt="Buiten eten op het terras" className="w-full h-full" position="center 40%" />
            </div>
            <div className="overflow-hidden" style={{height:'220px'}}>
              <Photo src="images/food-burrata.jpg" alt="Gerecht op het terras" className="w-full h-full" position="center 50%" />
            </div>
          </div>

          {/* Tekst-kolom */}
          <div className="md:col-span-5">
            <div className="eyebrow text-bordeaux mb-4">{t("Het terras","The terrace")}</div>
            <h2 className="h-display text-anthracite text-4xl sm:text-5xl md:text-6xl">
              {t("Buiten zitten,","Outside seating,")}<br />
              <span className="h-serif italic normal-case font-normal text-bordeaux">{t("goed eten.","great food.")}</span>
            </h2>
            <p className="mt-5 text-anthracite/75 leading-relaxed">
              {t("Bij Pompstation kiest u zelf hoe u geniet. Lunch, diner, borrelen — aan een tafel binnen of buiten op ons terras.","At Pompstation you choose how you enjoy it. Lunch, dinner, drinks — at a table inside or outside on our terrace.")}
            </p>

            <ul className="mt-8 flex flex-col gap-0" style={{borderTop:'1px solid rgba(30,20,18,0.1)'}}>
              <li className="py-5 flex gap-4 items-start" style={{borderBottom:'1px solid rgba(30,20,18,0.1)'}}>
                <span className="mt-1 w-5 h-5 flex-shrink-0 rounded-full border border-anthracite/30 flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-anthracite"></span>
                </span>
                <div>
                  <div className="font-medium text-anthracite text-base">{t("Binnen in het restaurant","Inside the restaurant")}</div>
                  <div className="mt-1 text-sm text-anthracite/65 leading-relaxed">
                    {t("Kaarslicht, een plafond van 12 meter en live jazz op de achtergrond. Het volledige menu, ook bij slecht weer.","Candlelight, a 12-metre ceiling and live jazz in the background. The full menu, even in bad weather.")}
                  </div>
                </div>
              </li>
              <li className="py-5 flex gap-4 items-start">
                <span className="mt-1 w-5 h-5 flex-shrink-0 rounded-full border border-bordeaux/50 flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-bordeaux"></span>
                </span>
                <div>
                  <div className="font-medium text-bordeaux text-base">{t("Buiten op het terras","Outside on the terrace")}</div>
                  <div className="mt-1 text-sm text-anthracite/65 leading-relaxed">
                    {t("Omringd door groen, op een steenworp van de stad. Reserveren op het terras is ook mogelijk.","Surrounded by greenery, a stone's throw from the city. Reservations for the terrace are also possible.")}
                  </div>
                </div>
              </li>
            </ul>

            <a href="#" onClick={(e) => { e.preventDefault(); window.openReservation ? window.openReservation() : window.open('https://www.pompstation.nu/','_blank'); }}
              className="mt-8 inline-flex items-center gap-2 bg-bordeaux text-cream px-6 py-3.5 text-sm font-medium tracking-wide hover:bg-bordeaux-dark transition-colors">
              Reserveer een tafel <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>);
}

/* ============================================================
   GROEPEN CAPACITEIT
   ============================================================ */
const GROEPEN_OPTIES = [
  {
    capaciteit: "10–40",
    eenheid: t("personen","guests"),
    titel: t("Groepsdiner aan een lange tafel","Group dinner at a long table"),
    body: t("Voor verjaardagen, jubilea, teamdiners of vriendengroepen. Een lange tafel, het volledige menu en een vaste contactpersoon die alles regelt.","For birthdays, anniversaries, team dinners or friend groups. A long table, the full menu and a dedicated contact who handles everything."),
    image: "images/groepsdiner-overhead.jpg",
    position: "center 30%",
  },
  {
    capaciteit: "50–100",
    eenheid: t("personen","guests"),
    titel: t("De vide afhuren","Hire the mezzanine"),
    body: t("Huur de vide af voor een borrel, presentatie of feest. Met eigen bar, ingang en zicht op de volledige hal. Privé, maar toch deel van de sfeer.","Hire the mezzanine for a reception, presentation or party. With its own bar, entrance and view over the full hall. Private, yet still part of the atmosphere."),
    image: "images/bride-vide.jpg",
    position: "center 30%",
  },
  {
    capaciteit: "Tot 360",
    eenheid: t("personen","guests"),
    titel: t("Volledig exclusief","Fully exclusive"),
    body: t("De hele locatie voor uw eigen avond. Bruiloften, galadiners, productlanceringen — Pompstation staat geheel tot uw beschikking.","The entire venue for your own evening. Weddings, gala dinners, product launches — Pompstation is entirely at your disposal."),
    image: "images/event-fullhall.jpg",
    position: "center 40%",
  },
  {
    capaciteit: "20–200",
    eenheid: t("personen","guests"),
    titel: t("Het terras afhuren","Hire the terrace"),
    body: t("Ons zonnige buitenterras voor groepen. Sit-down voor 20–80 gasten, staand tot 200. Ideaal voor zomerse borrels, lunches en buitenevenementen.","Our sunny outdoor terrace for groups. Seated for 20–80 guests, standing up to 200. Perfect for summer receptions, lunches and outdoor events."),
    image: "images/terras-outdoor.jpg",
    position: "center 50%",
  },
];

function GroepenCapaciteit() {
  return (
    <section id="groepen" className="bg-bordeaux text-cream py-20 md:py-32">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div className="max-w-2xl">
            <div className="eyebrow text-cream/70 mb-4">{t("Afhuren & groepen","Private hire & groups")}</div>
            <h2 className="h-display text-cream text-4xl sm:text-5xl md:text-7xl">
              {t("Uw avond,","Your evening,")}<br />
              <span className="h-serif italic normal-case font-normal text-cream/75">{t("onze locatie.","our venue.")}</span>
            </h2>
          </div>
          <p className="md:max-w-sm text-cream/80 leading-relaxed text-lg">
            {t("Van een intiem groepsdiner tot een volledig exclusieve avond voor driehonderd gasten —","From an intimate group dinner to a fully exclusive evening for three hundred guests —")}{" "}
            {t("Pompstation heeft een formule voor elk gezelschap.","Pompstation has a format for every occasion.")}
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {GROEPEN_OPTIES.map((g, i) => (
            <article key={i} className="flex flex-col overflow-hidden">
              <div className="relative overflow-hidden" style={{height:'240px'}}>
                <Photo src={g.image} alt={g.titel} className="w-full h-full" position={g.position} />
              </div>
              <div className="p-7 md:p-8 flex flex-col flex-1 border-t border-cream/10 bg-bordeaux-dark">
                <div className="h-display text-cream/40 text-4xl md:text-5xl mb-1 leading-none">{g.capaciteit}</div>
                <div className="font-mono text-[10px] tracking-[0.16em] uppercase text-cream/50 mb-5">{g.eenheid}</div>
                <h3 className="h-serif text-cream text-2xl md:text-3xl leading-snug">{g.titel}</h3>
                <p className="mt-4 text-cream/70 leading-relaxed text-[15px] flex-1">{g.body}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 md:mt-12 flex flex-col sm:flex-row gap-4">
          <a href="groepen.html" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-cream text-bordeaux font-medium tracking-wide hover:bg-cream/90 transition-colors text-sm">
            {t("Bekijk alle afhuur-opties","View all hire options")}
          </a>
          <a href="offerte.html" className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-cream/30 text-cream font-medium tracking-wide hover:border-cream/60 transition-colors text-sm">
            Vraag een offerte aan
          </a>
        </div>
      </div>
    </section>);
}

/* ============================================================
   SFEER — atmosphere photo gallery
   ============================================================ */
const SFEER = [
  { image: "images/interior-vide.jpg", position: "center 35%", label: t("De grote hal · 12 m hoog","The grand hall · 12 m high"), span: "col-span-2 row-span-2" },
  { image: "images/food-burrata.jpg", position: "center 40%", label: t("Uit de open keuken","From the open kitchen"), span: "col-span-1 row-span-1" },
  { image: "images/cocktail.jpg", position: "center 30%", label: t("Borrelen aan de bar","Drinks at the bar"), span: "col-span-1 row-span-1" },
  { image: "images/groepsdiner-overhead.jpg", position: "center 30%", label: t("Groepen & events","Groups & events"), span: "col-span-1 row-span-1 md:row-span-2" },
  { image: "images/live-muziek-intiem.jpg", position: "center 40%", label: t("Live jazz op de vide","Live jazz on the mezzanine"), span: "col-span-1 row-span-1 md:row-span-2" },
  { image: "images/historic-1912.jpg", position: "center", label: "Anno 1912", span: "col-span-2 row-span-1" },
  { image: "images/terras-koppel.jpg", position: "center 40%", label: t("Op het terras","On the terrace"), span: "col-span-1 row-span-1" },
  { image: "images/terras-champagne.jpg", position: "center 30%", label: t("Zomerse borrels","Summer drinks"), span: "col-span-1 row-span-1" },
  { image: "images/bride.jpg", position: "center 25%", label: t("Bruiloften","Weddings"), span: "col-span-1 row-span-1" },
  { image: "images/groepsdiner-overhead.jpg", position: "center 20%", label: t("Met uw gezelschap","With your group"), span: "col-span-1 row-span-1" },
];

function Sfeer() {
  return (
    <section id="sfeer" className="bg-cream-warm py-20 md:py-32 border-b border-anthracite/10">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div className="max-w-2xl">
            <div className="eyebrow text-bordeaux mb-4">{t("Sfeer","Atmosphere")}</div>
            <h2 className="h-display text-anthracite text-5xl md:text-7xl lg:text-8xl">
              {t("Proef de","Preview the")}<br />
              <span className="h-serif italic normal-case font-normal text-bordeaux">{t("sfeer vooraf.","atmosphere.")}</span>
            </h2>
          </div>
          <p className="md:max-w-sm text-anthracite/80 leading-relaxed text-lg">
            {t("Kaarslicht onder een plafond van twaalf meter, jazz die door de hal galmt en een keuken die er staat. Een eerste indruk van een avond bij Pompstation.","Candlelight beneath a twelve-metre ceiling, jazz echoing through the hall and a kitchen that delivers. A first impression of an evening at Pompstation.")}
          </p>
        </div>
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 [grid-auto-rows:150px] sm:[grid-auto-rows:185px] md:[grid-auto-rows:215px]"
          style={{ gridAutoFlow: "dense" }}>
          {SFEER.map((s, i) =>
          <figure key={i} className={`group relative overflow-hidden bg-anthracite ${s.span}`}>
            <Photo src={s.image} alt={s.label} className="w-full h-full" position={s.position} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/0 to-transparent opacity-80 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500"></div>
            <figcaption className="absolute bottom-0 left-0 p-3 md:p-5 md:translate-y-2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-500">
              <span className="font-mono text-[10px] md:text-[11px] tracking-[0.18em] uppercase text-cream border border-cream/45 px-2 py-1 bg-black/25 backdrop-blur-sm">
                {s.label}
              </span>
            </figcaption>
          </figure>
          )}
        </div>
      </div>
    </section>);
}

/* ============================================================
   CLOSING CTA — repeat the two paths, compact
   ============================================================ */
function ClosingCTA() {
  return (
    <section className="bg-cream-warm py-20 md:py-28">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10">
        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          <a href="#" onClick={(e) => { e.preventDefault(); window.openReservation ? window.openReservation() : window.open('https://www.pompstation.nu/','_blank'); }} className="group bg-cream border border-anthracite/15 p-8 md:p-10 hover:border-bordeaux transition-colors">
            <div className="eyebrow text-bordeaux mb-3">{t("Kom langs","Visit us")}</div>
            <div className="h-display text-anthracite text-4xl md:text-5xl">{t("Reserveer een tafel","Reserve a table")}</div>
            <div className="mt-4 text-anthracite/70">{t("Lunch, diner, borrel of terras.","Lunch, dinner, drinks or terrace.")}</div>
            <div className="mt-6 inline-flex items-center gap-2 text-bordeaux font-medium">
              {t("Naar reserveren","Make a reservation")} <span className="transition-transform group-hover:translate-x-1">→</span>
            </div>
          </a>
          <a href="offerte.html" className="group relative overflow-hidden bg-bordeaux text-cream p-8 md:p-10 hover:bg-bordeaux-dark transition-colors">
            <Photo src="images/event-staand.jpg" alt="Groepsevenement Pompstation" className="absolute inset-0 w-full h-full" position="center 40%" overlay={0.55} />
            <div className="relative z-10">
            <div className="eyebrow text-cream/70 mb-3">{t("Met een groep of event","With a group or event")}</div>
            <div className="h-display text-cream text-4xl md:text-5xl">{t("Vraag een offerte aan","Request a quote")}</div>
            <div className="mt-4 text-cream/75">{t("Afhuur van 10 tot 360 personen.","Private hire for 10 to 360 guests.")}</div>
            <div className="mt-6 inline-flex items-center gap-2 text-cream font-medium">
              {t("Bekijk afhuur & groepen","View private hire & groups")} <span className="transition-transform group-hover:translate-x-1">→</span>
            </div>
            </div>
          </a>
        </div>
      </div>
    </section>);
}

/* ============================================================
   FOOTER
   ============================================================ */
function Footer() {
  return (
    <footer id="contact" className="bg-anthracite text-cream">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 py-16 md:py-24">
        <img src="images/logo.webp" alt="Pompstation" className="h-7 md:h-9 w-auto mb-10 md:mb-14 opacity-90" />
        <div className="grid md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-7">
            <div className="eyebrow text-cream/60 mb-4">{t("Reserveren of even bellen?","Reservations & enquiries")}</div>
            <a href="tel:+31202279885" className="h-display block text-cream text-3xl sm:text-5xl md:text-7xl lg:text-8xl hover:text-cream/80 transition-colors">
              +31 20 227 9885
            </a>
            <a href="mailto:info@pompstation.nu" className="mt-4 inline-block font-serif text-lg sm:text-2xl md:text-3xl italic text-cream/85 hover:text-cream transition-colors break-all">
              info@pompstation.nu
            </a>
          </div>
          <div className="md:col-span-5 md:pl-8 md:border-l border-cream/20">
            <div className="eyebrow text-cream/60 mb-4">Pompstation</div>
            <address className="not-italic text-cream/85 leading-relaxed">
              Zeeburgerdijk 52<br />
              1094 AE Amsterdam<br />
              <br />
              <span className="text-cream/60 text-sm font-mono">
                Wo–do · 17:00–00:00<br />
                Vr–za · 17:00–01:00<br />
                {t("Live muziek · do–za","Live music · Thu–Sat")}
              </span>
            </address>
          </div>
        </div>
      </div>
      <div className="border-t border-cream/15">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 py-6 flex flex-col md:flex-row justify-between gap-4 text-xs font-mono text-cream/55">
          <div>{t("© 2026 Restaurant Pompstation — gevestigd in een monument uit 1912","© 2026 Restaurant Pompstation — housed in a 1912 monument")}</div>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a href="menu.html" className="hover:text-cream transition-colors">Menu</a>
            <a href="verhaal.html" className="hover:text-cream transition-colors">Verhaal</a>
            <a href="agenda.html" className="hover:text-cream transition-colors">Live muziek</a>
            <a href="groepen.html" className="hover:text-cream transition-colors">Afhuren & groepen</a>
            <a href="contact.html" className="hover:text-cream transition-colors">Contact</a>
            <a href="vacatures.html" className="hover:text-cream transition-colors">{t("Vacatures","Vacancies")}</a>
            <a href="algemene-voorwaarden.html" className="hover:text-cream transition-colors">{t("Algemene voorwaarden","Terms & conditions")}</a>
            <a href="privacy.html" className="hover:text-cream transition-colors">Privacy</a>
          </div>
        </div>
      </div>
    </footer>);
}

/* ============================================================
   STICKY MOBILE CTA
   ============================================================ */
function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className={`md:hidden fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300 ${visible ? "translate-y-0" : "translate-y-full"}`}>
      <div className="grid grid-cols-3 bg-bordeaux text-cream border-t border-cream/15">
        <a href="tel:+31202279885" className="py-3.5 text-center text-sm font-medium border-r border-cream/15 active:bg-bordeaux-dark">
          <div className="text-base">📞</div>
          <div className="mt-0.5 text-xs">{t("Bel","Call")}</div>
        </a>
        <a href="#" onClick={(e) => { e.preventDefault(); window.openReservation ? window.openReservation() : window.open('https://www.pompstation.nu/','_blank'); }} className="py-3.5 text-center text-sm font-medium bg-cream text-bordeaux active:bg-cream-warm">
          <div className="text-base">✶</div>
          <div className="mt-0.5 text-xs">{t("Reserveer","Reserve")}</div>
        </a>
        <a href="groepen.html" className="py-3.5 text-center text-sm font-medium border-l border-cream/15 active:bg-bordeaux-dark">
          <div className="text-base">⊞</div>
          <div className="mt-0.5 text-xs">{t("Afhuren","Hire")}</div>
        </a>
      </div>
    </div>);
}

/* ============================================================
   FADE-IN
   ============================================================ */
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

/* ============================================================
   APP
   ============================================================ */
function App() {
  useFadeIn();
  return (
    <div className="font-sans text-anthracite">
      <Nav />
      <Hero />
      <div className="fade-up"><TwoPaths /></div>
      <div className="fade-up"><Experience /></div>
      <div className="fade-up"><Seizoen /></div>
      <div className="fade-up"><Terras /></div>
      <div className="fade-up"><GroepenCapaciteit /></div>
      <div className="fade-up"><Sfeer /></div>
      <div className="fade-up"><Intro /></div>
      <div className="fade-up"><ClosingCTA /></div>
      <Footer />
      <StickyMobileCTA />
    </div>);
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
