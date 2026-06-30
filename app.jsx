const { useState, useEffect, useRef, useMemo } = React;
const t = window._t || ((nl) => nl);

/* ============================================================
   PHOTO — real image with optional dark overlay
   PLACEHOLDER — striped fallback with monospace caption
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

function Placeholder({ label, variant = "dark", className = "", aspect = "" }) {
  const cls = variant === "cream" ? "ph-stripes-cream text-anthracite/60" :
  variant === "bordeaux" ? "ph-stripes-bordeaux text-cream/80" :
  "ph-stripes text-cream/70";
  return (
    <div className={`relative overflow-hidden ${cls} ${aspect} ${className}`}>
      <div className="absolute inset-0 flex items-end justify-start p-4 md:p-5">
        <div className="font-mono text-[10px] md:text-[11px] tracking-[0.18em] uppercase opacity-80 border border-current px-2 py-1">
          {label}
        </div>
      </div>
      <div className="absolute top-3 right-3 w-6 h-6 border border-current opacity-30"></div>
    </div>);

}

/* ============================================================
   NAV
   ============================================================ */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? "bg-cream/95 backdrop-blur border-b border-anthracite/10" : "bg-transparent"}`}>
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 h-16 md:h-20 flex items-center justify-between">
        <a href="index.html" className="flex items-center gap-3">
          <img
            src="images/logo.webp"
            alt="Pompstation"
            className="h-4 md:h-5 w-auto transition-all"
            style={{ filter: scrolled ? "brightness(0)" : "none" }} />
          
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="index.html"
          className={`hover:opacity-70 transition-opacity ${scrolled ? "text-anthracite" : "text-cream"}`}>
            ← Terug naar home
          </a>
          {["Ruimtes", t("Capaciteit","Capacity"), "Menu's", "Voorbeelden", "Inbegrepen"].map((l, i) =>
          <a key={i} href={`#${["rooms", "capacity", "menus", "cases", "included"][i]}`}
          className={`hover:opacity-70 transition-opacity ${scrolled ? "text-anthracite" : "text-cream"}`}>
              {l}
            </a>
          )}
        </nav>
        <a href="offerte.html" className="btn-primary px-5 py-2.5 text-sm font-medium tracking-wide">
          Offerte aanvragen
        </a>
      </div>
    </header>);

}

/* ============================================================
   HERO
   ============================================================ */
function Hero() {
  return (
    <section id="top" className="relative h-screen min-h-[680px] w-full overflow-hidden">
      {/* Background photo */}
      <div className="absolute inset-0">
        <Photo
          src="images/event-staand.jpg"
          alt="Bedrijfsborrel bij Pompstation Amsterdam"
          className="w-full h-full"
          position="center 40%"
        ctas={[{label:t("Brochure downloaden","Download brochure"),href:"brochure-corporate.html"},{label:t("Offerte aanvragen","Request a quote"),href:"offerte.html"}]}
        />
        
        <div className="absolute inset-0 hero-vignette"></div>
      </div>

      {/* Top brand strip */}
      <div className="absolute top-0 left-0 right-0 z-10 hidden md:block">
        <div className="max-w-[1440px] mx-auto px-10 pt-28">
          <div className="flex items-center gap-3 text-cream/70 eyebrow">
            <span className="w-8 h-px bg-cream/40"></span>
            <span>Anno 1912 · Amsterdam · Westerpark</span>
          </div>
        </div>
      </div>

      {/* Headline block */}
      <div className="absolute inset-0 z-10 flex items-end md:items-center">
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 w-full pb-32 md:pb-0">
          <div className="max-w-[1100px]">
            <div className="eyebrow text-cream/80 mb-5 md:mb-7 flex items-center gap-3">
              <span className="w-8 h-px bg-cream/40"></span>
              Groepen · Events · Afhuur
            </div>
            <h1 className="h-display text-cream text-[52px] sm:text-[80px] md:text-[120px] lg:text-[150px]">
              Groepen <span className="h-serif italic normal-case font-normal tracking-normal text-cream/95">&</span><br />
              events <span className="h-serif italic normal-case font-normal tracking-normal text-cream/95">bij</span> Pompstation.
            </h1>
            <p className="mt-6 md:mt-8 max-w-xl text-cream/85 text-base md:text-lg leading-relaxed">
              Van een lange tafel voor 10 tot de hele zaal voor 360 — dineren, borrelen,
              bruiloften en feesten in een monument uit 1912.
            </p>
            <div className="mt-8 md:mt-10 flex flex-wrap gap-3 md:gap-4">
              <a href="offerte.html" className="btn-primary px-7 py-4 text-sm md:text-base font-medium tracking-wide inline-flex items-center gap-3 group">
                Check beschikbaarheid
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a href="#menus" className="btn-outline text-cream px-7 py-4 text-sm md:text-base font-medium tracking-wide hover:bg-cream/10 inline-flex items-center gap-2">
                <span>↓</span> Download menukaarten
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Trust bar — bottom of hero */}
      <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-cream/15 bg-black/30 backdrop-blur-sm overflow-hidden">
        <div className="flex marquee-track whitespace-nowrap py-4 text-cream/85 eyebrow gap-0">
          {Array.from({ length: 2 }).map((_, k) =>
          <div key={k} className="flex items-center gap-10 px-5 shrink-0">
              <span className="flex items-center gap-2"><span className="w-1 h-1 bg-cream/60 rounded-full"></span> Officiële trouwlocatie gemeente Amsterdam</span>
              <span className="flex items-center gap-2"><span className="w-1 h-1 bg-cream/60 rounded-full"></span> 15 jaar ervaring met events</span>
              <span className="flex items-center gap-2"><span className="w-1 h-1 bg-cream/60 rounded-full"></span> Eigen geluidsinstallatie & podium</span>
              <span className="flex items-center gap-2"><span className="w-1 h-1 bg-cream/60 rounded-full"></span> Vergunning tot 03:00 in het weekend</span>
              <span className="flex items-center gap-2"><span className="w-1 h-1 bg-cream/60 rounded-full"></span> 14 meter hoge vide · Amsterdamse School</span>
            </div>
          )}
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute right-5 md:right-10 bottom-24 md:bottom-28 z-10 text-cream/70 eyebrow hidden md:flex flex-col items-center gap-3">
        <span className="rotate-90 origin-center mt-6">SCROLL</span>
        <span className="w-px h-12 bg-cream/40"></span>
      </div>
    </section>);

}

/* ============================================================
   INTRO — small bridge section
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
            Anno 1912 · originele machinezaal
          </div>
        </div>
        <div className="md:col-span-8 order-1 md:order-2">
          <div className="eyebrow text-bordeaux mb-4">01 · De locatie</div>
          <h2 className="h-serif text-anthracite text-3xl md:text-5xl lg:text-6xl">
            Een monumentaal <em className="text-bordeaux">waterpompstation</em> uit 1912,
            in Amsterdamse School-stijl, met een vide van veertien meter hoog —
            en vijftien jaar ervaring in het ontvangen van groepen.
          </h2>
          <div className="mt-8 grid grid-cols-3 gap-6 md:gap-10 max-w-xl">
            <div>
              <div className="h-display text-bordeaux text-4xl md:text-5xl">14m</div>
              <div className="mt-1 text-sm text-anthracite/70">hoogte vide</div>
            </div>
            <div>
              <div className="h-display text-bordeaux text-4xl md:text-5xl">360</div>
              <div className="mt-1 text-sm text-anthracite/70">max. capaciteit</div>
            </div>
            <div>
              <div className="h-display text-bordeaux text-4xl md:text-5xl">03:00</div>
              <div className="mt-1 text-sm text-anthracite/70">eindtijd weekend</div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}

/* ============================================================
   ROOMS — three cards
   ============================================================ */
const ROOMS = [
{
  n: "02 · Ruimte één",
  title: "Groepsdiner in het restaurant",
  facts: ["10–40 personen aan lange tafel", "Zonder afhuur, vast menu", "3/4/5 gangen vanaf €47 p.p."],
  price: "vanaf",
  priceValue: "€47",
  priceSuffix: "p.p.",
  cta: "Reserveer een groepsdiner",
  image: "images/restaurant-service.jpg",
  imagePosition: "center 30%",
  placeholder: "Lange tafel · Restaurant · 30 couverts",
  accent: "bordeaux"
},
{
  n: "03 · Ruimte twee",
  title: "Vide afhuren",
  facts: ["50–80 personen sit-down / tot 100 walking", "Eigen bar, eigen trap", "Perfecte akoestiek"],
  price: "vanaf",
  priceValue: "Op aanvraag",
  priceSuffix: "",
  cta: "Vraag offerte aan voor de vide",
  image: "images/bride-vide.jpg",
  imagePosition: "center 30%",
  placeholder: "Vide · Eigen bar · Walking dinner",
  accent: "forest"
},
{
  n: "04 · Ruimte drie",
  title: "Volledig exclusief afhuren",
  facts: ["50–360 personen", "Inclusief terras, podium, DJ-set", "Huur €2.250 + omzetgarantie vanaf €7.500 (ma–wo)"],
  price: "huur",
  priceValue: "€2.250",
  priceSuffix: "+ omzetgarantie",
  cta: "Vraag offerte aan voor exclusieve huur",
  image: "images/event-fullhall.jpg",
  imagePosition: "center 40%",
  placeholder: "Volledige zaal · 250 gasten · Bruiloft",
  accent: "bordeaux",
  featured: true,
  badge: "Meest gekozen voor bruiloften"
},
{
  n: "05 · Terras",
  title: "Terras afhuren",
  facts: ["20–200 personen (sit-down of staand)", "Besloten buitenruimte, omringd door groen", "Seizoensgebonden · voorjaar t/m herfst"],
  price: "op",
  priceValue: "aanvraag",
  priceSuffix: "",
  cta: "Vraag offerte aan voor het terras",
  image: "images/terras-outdoor.jpg",
  imagePosition: "center 50%",
  placeholder: "Terras · 20–200 gasten",
  accent: "forest"
}];


function RoomCard({ room, idx }) {
  const isFeatured = room.featured;
  return (
    <article
      className={`card-lift relative flex flex-col ${isFeatured ? "bg-bordeaux text-cream shadow-2xl" : "bg-cream-warm text-anthracite border border-anthracite/10"}`}>
      
      {isFeatured &&
      <div className="absolute -top-3 left-5 z-10 bg-bordeaux text-cream eyebrow px-3 py-1.5">
          ★ {room.badge}
        </div>
      }
      <div className="relative aspect-[4/3] overflow-hidden">
        {room.image ?
        <Photo src={room.image} alt={room.placeholder} className="w-full h-full" position={room.imagePosition || "center"} /> :

        <Placeholder label={room.placeholder} variant={isFeatured ? "bordeaux" : "dark"} className="w-full h-full" />
        }
      </div>
      <div className="p-6 md:p-8 flex-1 flex flex-col">
        <div className={`eyebrow ${isFeatured ? "text-brass" : "text-bordeaux"} mb-3`}>{room.n}</div>
        <h3 className="h-serif text-3xl md:text-[34px] leading-tight">{room.title}</h3>
        <ul className="mt-5 space-y-3 text-[15px] leading-relaxed">
          {room.facts.map((f, i) =>
          <li key={i} className="flex gap-3">
              <span className={`mt-1.5 w-1.5 h-1.5 shrink-0 ${isFeatured ? "bg-brass" : "bg-bordeaux"}`}></span>
              <span className={isFeatured ? "text-cream/85" : "text-anthracite/80"}>{f}</span>
            </li>
          )}
        </ul>
        <div className="mt-auto pt-6 border-t border-current/15 flex items-end justify-between gap-4" style={{marginTop:'auto',paddingTop:'1.5rem'}}>
          <div>
            <div className={`eyebrow ${isFeatured ? "text-cream/60" : "text-anthracite/55"}`}>{room.price}</div>
            <div className="h-display text-3xl md:text-4xl mt-1">{room.priceValue}</div>
            {room.priceSuffix &&
            <div className={`text-xs mt-1 ${isFeatured ? "text-cream/60" : "text-anthracite/55"}`}>{room.priceSuffix}</div>
            }
          </div>
        </div>
        <a
          href="offerte.html"
          className={`mt-6 inline-flex items-center justify-between gap-3 px-5 py-4 text-sm font-medium tracking-wide group ${
          isFeatured ? "bg-cream text-bordeaux hover:bg-cream-warm" : "bg-bordeaux text-cream hover:bg-bordeaux-dark"} transition-colors`
          }>
          
          <span>{room.cta}</span>
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </a>
      </div>
    </article>);

}

function Rooms() {
  return (
    <section id="rooms" className="bg-cream py-20 md:py-32">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-20">
          <div className="max-w-2xl">
            <div className="eyebrow text-bordeaux mb-4">02 · Vier opties</div>
            <h2 className="h-display text-anthracite text-5xl md:text-7xl lg:text-8xl">
              Vier opties voor<br />
              <span className="h-serif italic normal-case font-normal text-bordeaux">groepen & events</span>
            </h2>
          </div>
          <p className="md:max-w-sm text-anthracite/70 leading-relaxed">
            Van een lange tafel voor 25 in het restaurant tot 360 gasten exclusief
            met DJ-set en terras. Kies de schaal die bij uw groep past.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 items-stretch">
          {ROOMS.map((r, i) => <RoomCard key={i} room={r} idx={i} />)}
        </div>
      </div>
    </section>);

}

/* ============================================================
   CAPACITY TABLE
   ============================================================ */
const CAPACITY_ROWS = [
{ room: "Restaurant", sit: "10–40", walk: "—", borrel: "—", ceremony: "—" },
{ room: "Vide", sit: "20–100", walk: "tot 100", borrel: "tot 120", ceremony: "tot 100" },
{ room: t("Volledig exclusief","Fully exclusive"), sit: "tot 250", walk: "tot 360", borrel: "tot 360", ceremony: "tot 200" },
{ room: "Terras (seizoen)", sit: "20–80", walk: "tot 200", borrel: "tot 200", ceremony: "—" }];


function CapacityTable() {
  return (
    <section id="capacity" className="bg-bordeaux text-cream py-20 md:py-32 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10">
        <div className="grid md:grid-cols-12 gap-8 mb-12 md:mb-16">
          <div className="md:col-span-5">
            <div className="eyebrow text-brass mb-4">03 · Capaciteit</div>
            <h2 className="h-display text-cream text-5xl md:text-7xl">
              Past mijn<br />groep hier?
            </h2>
          </div>
          <div className="md:col-span-7 md:pt-12">
            <p className="text-cream/75 text-lg leading-relaxed max-w-xl">
              Een snel overzicht per ruimte en per opstelling.
              Bel ons als uw groep tussen twee schalen valt — we lossen het op.
            </p>
          </div>
        </div>

        <div className="overflow-x-auto -mx-5 md:mx-0">
          <table className="w-full min-w-[640px] border-collapse">
            <thead>
              <tr className="border-b border-cream/20">
                <th className="text-left py-5 px-4 md:px-6 eyebrow text-cream/60 font-normal">Ruimte</th>
                <th className="text-left py-5 px-4 md:px-6 eyebrow text-cream/60 font-normal">Sit-down diner</th>
                <th className="text-left py-5 px-4 md:px-6 eyebrow text-cream/60 font-normal">Walking dinner</th>
                <th className="text-left py-5 px-4 md:px-6 eyebrow text-cream/60 font-normal">Borrel</th>
                <th className="text-left py-5 px-4 md:px-6 eyebrow text-cream/60 font-normal">Ceremonie</th>
              </tr>
            </thead>
            <tbody>
              {CAPACITY_ROWS.map((r, i) =>
              <tr key={i} className="border-b border-cream/10 hover:bg-cream/[0.03] transition-colors">
                  <td className="py-5 px-4 md:px-6 font-serif text-xl md:text-2xl text-cream">{r.room}</td>
                  <td className="py-5 px-4 md:px-6 text-cream/85 font-mono text-sm">{r.sit}</td>
                  <td className="py-5 px-4 md:px-6 text-cream/85 font-mono text-sm">{r.walk}</td>
                  <td className="py-5 px-4 md:px-6 text-cream/85 font-mono text-sm">{r.borrel}</td>
                  <td className="py-5 px-4 md:px-6 text-cream/85 font-mono text-sm">{r.ceremony}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="mt-8 text-sm text-cream/55 font-mono">
          Alle getallen indicatief — definitieve capaciteit afhankelijk van opstelling.
        </div>
      </div>
    </section>);

}

/* ============================================================
   MENUS
   ============================================================ */
const MENUS = [
{ name: "Drie gangen", price: "€47", subtitle: "Voor-, hoofd-, nagerecht", type: "Sit-down" },
{ name: "Vier gangen", price: "€57", subtitle: "Met amuse of tussengerecht", type: "Sit-down", popular: true },
{ name: "Vijf gangen", price: "€65", subtitle: "Het volledige proeverijmenu", type: "Sit-down" }];

const DRINKS = [
{ name: "Unlimited Basics", price: "€36", desc: "Bier, wijn, frisdrank — onbeperkt" },
{ name: "Unlimited Specials", price: "€68", desc: "Inclusief speciale wijnen & cocktails" },
{ name: "Diner Package", price: "€21", desc: "Twee uur tijdens het diner" }];


function Menus() {
  return (
    <section id="menus" className="bg-cream py-20 md:py-32 border-b border-anthracite/10">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10">
        <div className="grid md:grid-cols-12 gap-8 mb-12 md:mb-16 items-end">
          <div className="md:col-span-7">
            <div className="eyebrow text-bordeaux mb-4">04 · Menu's & arrangementen</div>
            <h2 className="h-display text-anthracite text-5xl md:text-7xl">
              <span className="h-serif italic normal-case font-normal text-bordeaux">Sit-down</span> of<br />
              walking dinner.
            </h2>
          </div>
          <div className="md:col-span-5">
            <p className="text-anthracite/70 leading-relaxed">
              <strong className="text-anthracite">Sit-down</strong> — klassiek aan tafel, uitgeserveerd in gangen.
              <br /><br />
              <strong className="text-anthracite">Walking dinner</strong> — gasten lopen rond, gerechtjes komen langs.
              Bij ons typisch op de vide of bij exclusieve huur.
            </p>
          </div>
        </div>

        {/* Menu prijspunten */}
        <div className="grid md:grid-cols-3 gap-5 md:gap-6 mb-12">
          {MENUS.map((m, i) =>
          <div key={i} className={`relative p-7 md:p-9 ${m.popular ? "bg-bordeaux text-cream" : "bg-cream-warm text-anthracite border border-anthracite/10"}`}>
              {m.popular &&
            <div className="absolute -top-3 left-6 bg-bordeaux-dark text-cream eyebrow px-3 py-1.5">★ Populair</div>
            }
              <div className={`eyebrow ${m.popular ? "text-cream/70" : "text-anthracite/55"}`}>{m.type}</div>
              <h3 className="h-serif text-3xl md:text-4xl mt-3">{m.name}</h3>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="h-display text-5xl md:text-6xl">{m.price}</span>
                <span className={`text-sm ${m.popular ? "text-cream/70" : "text-anthracite/60"}`}>p.p.</span>
              </div>
              <div className={`mt-2 text-sm ${m.popular ? "text-cream/75" : "text-anthracite/70"}`}>{m.subtitle}</div>
              <button className={`mt-8 inline-flex items-center gap-2 text-sm font-medium tracking-wide border-b pb-1 ${m.popular ? "border-cream/60 hover:border-cream" : "border-anthracite/40 hover:border-anthracite"} transition-colors`}>
                <span>↓</span> Download menukaart (PDF)
              </button>
            </div>
          )}
        </div>

        {/* Drank-arrangementen */}
        <div className="bg-forest text-cream p-7 md:p-10">
          <div className="grid md:grid-cols-12 gap-6 md:gap-10 items-center">
            <div className="md:col-span-4">
              <div className="eyebrow text-cream/60 mb-3">Drank-arrangementen</div>
              <h3 className="h-serif text-3xl md:text-4xl">Eet je menu, drink onbeperkt.</h3>
            </div>
            <div className="md:col-span-8 grid sm:grid-cols-3 gap-5">
              {DRINKS.map((d, i) =>
              <div key={i} className="border-t border-cream/25 pt-4">
                  <div className="h-display text-3xl">{d.price}</div>
                  <div className="text-sm font-medium mt-1">{d.name}</div>
                  <div className="text-xs text-cream/70 mt-1.5 leading-relaxed">{d.desc}</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>);

}

/* ============================================================
   USE CASES — social proof carousel
   ============================================================ */
const CASES = [
{
  eyebrow: "Bedrijfsborrel",
  title: "80 personen op de vide",
  quote: "De akoestiek is verbluffend en het team dacht in elke fase mee.",
  author: "Marleen — HR @ creatief bureau",
  image: "images/cocktail.jpg",
  imagePosition: "center 30%",
  placeholder: "Borrel · Vide · 80 gasten",
  accent: "bordeaux"
},
{
  eyebrow: "Familiediner",
  title: "25 personen aan lange tafel",
  quote: "Onze opa werd 80 — de zaal voelde even helemaal van ons.",
  author: "Famile De Vries",
  image: "images/interior-vide.jpg",
  imagePosition: "center 60%",
  placeholder: "Familiediner · Restaurant · 25",
  accent: "forest"
},
{
  eyebrow: "Bruiloft",
  title: "200 gasten exclusief",
  quote: "Ceremonie op de vide, diner en feest tot 03:00. Eén locatie, één avond.",
  author: "Esmee & Joris",
  image: "images/bride-vide.jpg",
  imagePosition: "center 30%",
  placeholder: "Bruiloft · Volledig exclusief · 200",
  accent: "bordeaux"
},
{
  eyebrow: "Verjaardag",
  title: "60 op het terras",
  quote: "Junimiddag, terras open, live band in de zaal. We blijven kletsen erover.",
  author: "Sander — 40 jaar",
  image: "images/live-band-vide.jpg",
  imagePosition: "center 30%",
  placeholder: "Verjaardag · Terras · 60",
  accent: "forest"
}];


function Cases() {
  const scrollerRef = useRef(null);
  const [active, setActive] = useState(0);

  const scrollTo = (i) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.children[i];
    if (card) el.scrollTo({ left: card.offsetLeft - 20, behavior: "smooth" });
  };

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const onScroll = () => {
      const sl = el.scrollLeft;
      let closest = 0;
      let min = Infinity;
      Array.from(el.children).forEach((c, i) => {
        const d = Math.abs(c.offsetLeft - 20 - sl);
        if (d < min) {min = d;closest = i;}
      });
      setActive(closest);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="cases" className="bg-cream-warm py-20 md:py-32 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-14">
          <div>
            <div className="eyebrow text-bordeaux mb-4">05 · Voorbeelden</div>
            <h2 className="h-display text-anthracite text-5xl md:text-7xl">
              Vier mogelijkheden,<br />
              <span className="h-serif italic normal-case font-normal text-bordeaux">Elk voor een bijzonder event.</span>
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => scrollTo(Math.max(0, active - 1))}
              className="w-12 h-12 border border-anthracite/30 hover:bg-bordeaux hover:text-cream transition-colors flex items-center justify-center"
              aria-label="Vorige">
              ←</button>
            <button
              onClick={() => scrollTo(Math.min(CASES.length - 1, active + 1))}
              className="w-12 h-12 border border-anthracite/30 hover:bg-bordeaux hover:text-cream transition-colors flex items-center justify-center"
              aria-label="Volgende">
              →</button>
          </div>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="flex gap-5 md:gap-6 overflow-x-auto snap-x-mandatory no-scrollbar px-5 md:px-10 pb-4"
        style={{ scrollPaddingLeft: "20px" }}>
        
        {CASES.map((c, i) =>
        <article
          key={i}
          className="snap-start shrink-0 w-[85vw] sm:w-[60vw] md:w-[520px] bg-cream border border-anthracite/10">
          
            <div className="relative aspect-[4/3] overflow-hidden">
              {c.image ?
            <Photo src={c.image} alt={c.placeholder} className="w-full h-full" position={c.imagePosition || "center"} /> :

            <Placeholder label={c.placeholder} variant={c.accent === "bordeaux" ? "bordeaux" : "dark"} className="w-full h-full" />
            }
            </div>
            <div className="p-6 md:p-8">
              <div className="eyebrow text-bordeaux">{c.eyebrow}</div>
              <h3 className="h-serif text-2xl md:text-3xl mt-2 text-anthracite">{c.title}</h3>
              <blockquote className="mt-5 text-anthracite/80 leading-relaxed">
                <span className="font-serif italic text-bordeaux text-2xl leading-none mr-1">"</span>
                {c.quote}
              </blockquote>
              <div className="mt-4 text-sm text-anthracite/55 font-mono">— {c.author}</div>
            </div>
          </article>
        )}
        <div className="shrink-0 w-5 md:w-10"></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-5 md:px-10 mt-6 flex gap-1.5">
        {CASES.map((_, i) =>
        <button
          key={i}
          onClick={() => scrollTo(i)}
          className={`h-1 transition-all ${i === active ? "w-12 bg-bordeaux" : "w-6 bg-anthracite/20"}`}
          aria-label={`Naar case ${i + 1}`}>
        </button>
        )}
      </div>
    </section>);

}

/* ============================================================
   WHAT'S INCLUDED
   ============================================================ */
const INCLUDED = [
{ title: "Geluidsinstallatie", desc: "Eigen PA, mics, mengtafel", icon: "wave" },
{ title: "Podium", desc: "Voor band, speech of DJ-set", icon: "stage" },
{ title: "Hulp met entertainment", desc: "Bands, DJ's, sprekers uit ons netwerk", icon: "sparkle" },
{ title: "Event manager", desc: "Eén vast aanspreekpunt vooraf en op de dag", icon: "person" },
{ title: "Terras bij mooi weer", desc: "Spontaan uitbreidbaar in het zomerseizoen", icon: "sun" },
{ title: "Vergunning tot 03:00", desc: "Vrijdag en zaterdag — dansen mag", icon: "moon" }];


function IncludedIcon({ name }) {
  const stroke = "#5C1A1B";
  const s = { width: 32, height: 32, viewBox: "0 0 32 32", fill: "none", stroke, strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" };
  switch (name) {
    case "wave":return <svg {...s}><path d="M3 16 Q 7 8, 11 16 T 19 16 T 27 16" /><path d="M3 22 Q 7 14, 11 22 T 19 22 T 27 22" opacity="0.4" /></svg>;
    case "stage":return <svg {...s}><rect x="4" y="14" width="24" height="10" /><path d="M8 14 V 8 M24 14 V 8" /><circle cx="16" cy="6" r="2" /></svg>;
    case "sparkle":return <svg {...s}><path d="M16 4 L 18 14 L 28 16 L 18 18 L 16 28 L 14 18 L 4 16 L 14 14 Z" /></svg>;
    case "person":return <svg {...s}><circle cx="16" cy="11" r="4" /><path d="M6 27 Q 6 18, 16 18 Q 26 18, 26 27" /></svg>;
    case "sun":return <svg {...s}><circle cx="16" cy="16" r="6" /><path d="M16 3 V 6 M16 26 V 29 M3 16 H 6 M26 16 H 29 M6.5 6.5 L 8.5 8.5 M23.5 23.5 L 25.5 25.5 M6.5 25.5 L 8.5 23.5 M23.5 8.5 L 25.5 6.5" /></svg>;
    case "moon":return <svg {...s}><path d="M22 18 A 10 10 0 1 1 14 6 A 8 8 0 0 0 22 18 Z" /></svg>;
    default:return null;
  }
}

function Included() {
  return (
    <section id="included" className="bg-cream py-20 md:py-32 border-b border-anthracite/10">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10">
        <div className="grid md:grid-cols-12 gap-8 mb-12 md:mb-16">
          <div className="md:col-span-5">
            <div className="eyebrow text-bordeaux mb-4">06 · Inbegrepen</div>
            <h2 className="h-display text-anthracite text-5xl md:text-7xl">
              Wat zit er<br />
              <span className="h-serif italic normal-case font-normal text-bordeaux">standaard</span> bij.
            </h2>
          </div>
          <div className="md:col-span-7 md:pt-10">
            <p className="text-anthracite/70 text-lg leading-relaxed max-w-xl">
              Geen losse offertes voor licht, geluid of personeel. Eén prijs, één team — onze event manager regelt de avond met u.
            </p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-px bg-anthracite/10">
          {INCLUDED.map((it, i) =>
          <div key={i} className="bg-cream p-6 md:p-8 hover:bg-cream-warm transition-colors group">
              <div className="w-12 h-12 border border-bordeaux/30 flex items-center justify-center mb-5 group-hover:bg-bordeaux/5 transition-colors">
                <IncludedIcon name={it.icon} />
              </div>
              <h3 className="font-serif text-2xl text-anthracite">{it.title}</h3>
              <p className="mt-2 text-sm text-anthracite/65 leading-relaxed">{it.desc}</p>
            </div>
          )}
        </div>
      </div>
    </section>);

}

/* ============================================================
   EVENT TYPES
   ============================================================ */
const EVENT_TYPES_LIST = [
  { title: "Bruiloft", sub: "Ceremonie, diner & feest", cap: "20–360", href: "bruiloft.html", image: "images/events-bride.jpg", pos: "center 35%" },
  { title: "Bedrijfsfeest", sub: "Borrel, diner of gala", cap: "20–360", href: "bedrijfsfeest.html", image: "images/event-staand.jpg", pos: "center 50%" },
  { title: "Bedrijfsdiner", sub: "Besloten sit-down diner", cap: "10–180", href: "bedrijfsdiner.html", image: "images/restaurant-service.jpg", pos: "center 30%" },
  { title: "Bedrijfsborrel", sub: "Borrel & hapjes", cap: "20–360", href: "bedrijfsborrel.html", image: "images/cocktail.jpg", pos: "center 30%" },
  { title: t("Groepsdiner","Group dining"), sub: "Lange tafel, groepsmenu", cap: "10–180", href: "groepsdiner.html", image: "images/interior-vide.jpg", pos: "center 60%" },
  { title: "Groepslunch", sub: "Lunch met uw gezelschap", cap: "10–80", href: "groepslunch.html", image: "images/terras-groep.jpg", pos: "center 50%" },
  { title: "Meeting & vergadering", sub: "Besloten bijeenkomst", cap: "10–60", href: "vergadering.html", image: "images/restaurant-zaal.jpg", pos: "center 20%" },
];

function EventTypes() {
  return (
    <section className="bg-cream-warm py-20 md:py-28 border-b border-anthracite/10">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div>
            <div className="eyebrow text-bordeaux mb-4">Voor elk type event</div>
            <h2 className="h-display text-anthracite text-5xl md:text-7xl">
              Wat organiseert<br />
              <span className="h-serif italic normal-case font-normal text-bordeaux">u bij ons?</span>
            </h2>
          </div>
          <p className="md:max-w-sm text-anthracite/70 leading-relaxed">
            Van bruiloft tot vergadering — elk type event heeft zijn eigen aanpak. Klik voor details.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {EVENT_TYPES_LIST.map((et, i) => (
            <a key={i} href={et.href} className="group flex flex-col bg-cream border border-anthracite/10 hover:border-bordeaux transition-colors">
              <div className="overflow-hidden" style={{height:'160px'}}>
                <Photo src={et.image} alt={et.title} className="w-full h-full transition-transform duration-700 group-hover:scale-105" position={et.pos} />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <div className="h-display text-bordeaux text-2xl leading-none">{et.cap}</div>
                <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-anthracite/50 mt-0.5 mb-3">personen</div>
                <h3 className="h-serif text-anthracite text-lg leading-snug flex-1">{et.title}</h3>
                <p className="mt-1 text-xs text-anthracite/55 leading-relaxed">{et.sub}</p>
                <div className="mt-3 inline-flex items-center gap-1.5 text-bordeaux text-xs font-medium group-hover:gap-2.5 transition-all">
                  Meer info <span>→</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   FORM
   ============================================================ */
function Form() {
  const [form, setForm] = useState({
    type: "",
    people: 60,
    date: "",
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    privacy: false
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validate = (f) => {
    const e = {};
    if (!f.type) e.type = "Selecteer een type";
    if (!f.date) e.date = "Kies een datum";
    if (!f.name || f.name.trim().length < 2) e.name = "Vul uw naam in";
    if (!f.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) e.email = "Geldig e-mailadres";
    if (!f.phone || f.phone.replace(/\D/g, "").length < 8) e.phone = "Geldig telefoonnummer";
    if (!f.privacy) e.privacy = "Accepteer de privacyverklaring";
    return e;
  };

  useEffect(() => {
    setErrors(validate(form));
  }, [form]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate(form);
    setTouched({ type: true, date: true, name: true, email: true, phone: true, privacy: true });
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
    }
  };

  const slidePct = (form.people - 10) / (360 - 10) * 100;

  if (submitted) {
    return (
      <section id="form" className="bg-bordeaux text-cream py-24 md:py-40">
        <div className="max-w-[800px] mx-auto px-5 md:px-10 text-center">
          <div className="w-16 h-16 mx-auto border border-cream/50 flex items-center justify-center mb-6">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F5EFE6" strokeWidth="1.5"><path d="M5 12 L 10 17 L 19 7" /></svg>
          </div>
          <div className="eyebrow text-cream/60 mb-4">Aanvraag ontvangen</div>
          <h2 className="h-display text-5xl md:text-7xl">
            Dank u, {form.name.split(" ")[0]}.
          </h2>
          <p className="mt-6 text-cream/80 text-lg leading-relaxed max-w-md mx-auto">
            We reageren binnen 1 werkdag.
            Voor spoed: <a href="tel:+31641655027" className="underline">+31 6 41 65 50 27</a>
          </p>
          <button
            onClick={() => {setSubmitted(false);setForm({ type: "", people: 60, date: "", name: "", email: "", phone: "", company: "", message: "", privacy: false });setTouched({});}}
            className="mt-10 btn-outline text-cream px-7 py-3.5 text-sm hover:bg-cream/10">
            
            Nieuwe aanvraag
          </button>
        </div>
      </section>);

  }

  return (
    <section id="form" className="bg-bordeaux text-cream py-20 md:py-32 relative overflow-hidden">
      {/* Decorative arch */}
      <div className="absolute -right-32 top-20 w-[500px] h-[500px] border-[80px] border-cream/[0.04] rounded-t-full hidden md:block" aria-hidden="true"></div>

      <div className="max-w-[1280px] mx-auto px-5 md:px-10 grid md:grid-cols-12 gap-10 md:gap-16 relative">
        <div className="md:col-span-5">
          <div className="eyebrow text-brass mb-4">07 · Offerte aanvragen</div>
          <h2 className="h-display text-cream text-5xl md:text-7xl">
            Vertel ons<br />
            <span className="h-serif italic normal-case font-normal text-cream/80">over uw avond.</span>
          </h2>
          <p className="mt-6 text-cream/70 leading-relaxed max-w-md">
            We bouwen een offerte op maat — inclusief menu, drank, set-up en eventuele entertainment-suggesties.
          </p>

          <div className="mt-10 pt-8 border-t border-cream/15 space-y-5 max-w-md">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 shrink-0 border border-cream/25 flex items-center justify-center text-brass">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" /></svg>
              </div>
              <div>
                <div className="text-sm text-cream/55 font-mono">Bel direct</div>
                <a href="tel:+31641655027" className="text-cream hover:text-brass transition-colors">+31 6 41 65 50 27</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 shrink-0 border border-cream/25 flex items-center justify-center text-brass">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="4" width="20" height="16" /><path d="M2 6 L 12 13 L 22 6" /></svg>
              </div>
              <div>
                <div className="text-sm text-cream/55 font-mono">E-mail</div>
                <a href="mailto:events@pompstation.nu" className="text-cream hover:text-brass transition-colors">events@pompstation.nu</a>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="md:col-span-7 space-y-6">
          {/* Type */}
          <div>
            <label className="eyebrow text-cream/55 block mb-3">Type gelegenheid</label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {[
              { v: "bedrijfsfeest", l: "Bedrijfsfeest" },
              { v: "bedrijfsborrel", l: "Bedrijfsborrel" },
              { v: "zakelijke-lunch", l: "Zakelijke lunch" },
              { v: "vriendengroep", l: "Vriendengroep" },
              { v: "verjaardag", l: "Verjaardag" },
              { v: "bruiloft", l: "Bruiloft" },
              { v: "anders", l: "Anders" }].
              map((opt) =>
              <button
                key={opt.v}
                type="button"
                onClick={() => {setForm((f) => ({ ...f, type: opt.v }));setTouched((t) => ({ ...t, type: true }));}}
                className={`px-4 py-3.5 text-sm border transition-all text-left ${
                form.type === opt.v ?
                "bg-cream border-cream text-bordeaux" :
                "border-cream/25 text-cream/85 hover:border-cream/60"}`
                }>
                
                  {opt.l}
                </button>
              )}
            </div>
            {touched.type && errors.type && <div className="mt-2 text-brass text-sm font-mono">{errors.type}</div>}
          </div>

          {/* People slider */}
          <div>
            <div className="flex items-baseline justify-between mb-3">
              <label className="eyebrow text-cream/55">Aantal personen</label>
              <div className="h-display text-3xl text-brass">{form.people}</div>
            </div>
            <input
              type="range"
              min="10"
              max="360"
              step="5"
              value={form.people}
              onChange={(e) => setForm((f) => ({ ...f, people: parseInt(e.target.value) }))}
              className="range-slider w-full"
              style={{ '--fill': `${slidePct}%` }} />
            
            <div className="flex justify-between mt-2 text-xs font-mono text-cream/45">
              <span>10</span>
              <span>100</span>
              <span>200</span>
              <span>360</span>
            </div>
          </div>

          {/* Date */}
          <div>
            <label className="eyebrow text-cream/55 block mb-3">Gewenste datum</label>
            <input
              type="date"
              value={form.date}
              onChange={(e) => {setForm((f) => ({ ...f, date: e.target.value }));setTouched((t) => ({ ...t, date: true }));}}
              onBlur={() => setTouched((t) => ({ ...t, date: true }))}
              className="w-full px-4 py-3.5 bg-transparent border border-cream/25 text-cream placeholder:text-cream/40 focus:border-brass focus:outline-none transition-colors"
              style={{ colorScheme: "dark" }} />
            
            {touched.date && errors.date && <div className="mt-2 text-brass text-sm font-mono">{errors.date}</div>}
          </div>

          {/* Name + email */}
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="eyebrow text-cream/55 block mb-3">Naam</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                onBlur={() => setTouched((t) => ({ ...t, name: true }))}
                placeholder="Voornaam Achternaam"
                className="w-full px-4 py-3.5 bg-transparent border border-cream/25 text-cream placeholder:text-cream/40 focus:border-brass focus:outline-none transition-colors" />
              
              {touched.name && errors.name && <div className="mt-2 text-brass text-sm font-mono">{errors.name}</div>}
            </div>
            <div>
              <label className="eyebrow text-cream/55 block mb-3">E-mail</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                onBlur={() => setTouched((t) => ({ ...t, email: true }))}
                placeholder="naam@bedrijf.nl"
                className="w-full px-4 py-3.5 bg-transparent border border-cream/25 text-cream placeholder:text-cream/40 focus:border-brass focus:outline-none transition-colors" />
              
              {touched.email && errors.email && <div className="mt-2 text-brass text-sm font-mono">{errors.email}</div>}
            </div>
          </div>

          {/* Bedrijfsnaam */}
          <div>
            <label className="eyebrow text-cream/55 block mb-3">Bedrijfsnaam <span className="opacity-50 normal-case tracking-normal font-normal">(optioneel)</span></label>
            <input
              type="text"
              value={form.company}
              onChange={(e) => setForm((f) => ({ ...f, company: e.target.value }))}
              placeholder="Naam van uw bedrijf of organisatie"
              className="w-full px-4 py-3.5 bg-transparent border border-cream/25 text-cream placeholder:text-cream/40 focus:border-brass focus:outline-none transition-colors" />
          </div>

          {/* Phone */}
          <div>
            <label className="eyebrow text-cream/55 block mb-3">Telefoon</label>
            <input
              type="tel"
              value={form.phone}
              onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
              onBlur={() => setTouched((t) => ({ ...t, phone: true }))}
              placeholder="+31 6 …"
              className="w-full px-4 py-3.5 bg-transparent border border-cream/25 text-cream placeholder:text-cream/40 focus:border-brass focus:outline-none transition-colors" />
            
            {touched.phone && errors.phone && <div className="mt-2 text-brass text-sm font-mono">{errors.phone}</div>}
          </div>

          {/* Message */}
          <div>
            <label className="eyebrow text-cream/55 block mb-3">Bericht <span className="opacity-50 normal-case tracking-normal">(optioneel)</span></label>
            <textarea
              rows="3"
              value={form.message}
              onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
              placeholder="Bijzondere wensen, dieetwensen, vraag over entertainment…"
              className="w-full px-4 py-3.5 bg-transparent border border-cream/25 text-cream placeholder:text-cream/40 focus:border-brass focus:outline-none transition-colors resize-none">
            </textarea>
          </div>

          <div className="pt-3">
            <div className="flex items-start gap-3 mb-5">
              <input type="checkbox" id="groepen-privacy" checked={!!form.privacy}
                onChange={e => setForm(f => ({...f, privacy: e.target.checked}))}
                className="mt-1 w-4 h-4 cursor-pointer flex-shrink-0 accent-cream" />
              <label htmlFor="groepen-privacy" className="text-sm text-cream/70 leading-relaxed">
                Ik ga akkoord met de{' '}
                <a href="privacy.html" className="text-cream underline hover:text-cream/80 transition-colors">privacyverklaring</a>
                {' '}van Pompstation.
              </label>
            </div>
            {touched.privacy && errors.privacy && <div className="mb-3 text-brass text-sm font-mono">{errors.privacy}</div>}
            <button
              type="submit"
              className="w-full md:w-auto bg-cream text-bordeaux hover:bg-cream-warm transition-colors px-10 py-5 text-base font-medium tracking-wide inline-flex items-center justify-center gap-3 group">
              
              <span>Offerte aanvragen</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </button>
            <p className="mt-4 text-sm text-cream/60 font-mono">
              We reageren binnen 1 werkdag.
            </p>
          </div>
        </form>
      </div>
    </section>);

}

/* ============================================================
   FOOTER
   ============================================================ */
function Footer() {
  return (
    <footer className="bg-anthracite text-cream">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 py-16 md:py-24">
        <img src="images/logo.webp" alt="Pompstation" className="h-7 md:h-9 w-auto mb-10 md:mb-14 opacity-90" />
        <div className="grid md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-7">
            <div className="eyebrow text-cream/60 mb-4">Liever even bellen?</div>
            <a href="tel:+31641655027" className="h-display block text-cream text-5xl md:text-7xl lg:text-8xl hover:text-cream/80 transition-colors">
              +31 6 41 65 50 27
            </a>
            <a href="mailto:events@pompstation.nu" className="mt-4 inline-block font-serif text-2xl md:text-3xl italic text-cream/85 hover:text-cream transition-colors">
              events@pompstation.nu
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
                Vr–za · 17:00–01:00
              </span>
            </address>
          </div>
        </div>
      </div>
      <div className="border-t border-cream/15">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 py-6 flex flex-col md:flex-row justify-between gap-4 text-xs font-mono text-cream/55">
          <div>© 2026 Restaurant Pompstation — gevestigd in een monument uit 1912</div>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a href="vacatures.html" className="hover:text-cream transition-colors">Vacatures</a>
            <a href="algemene-voorwaarden.html" className="hover:text-cream transition-colors">Algemene voorwaarden</a>
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
      <div className="grid grid-cols-3 bg-anthracite text-cream border-t border-cream/15">
        <a href="tel:+31641655027" className="py-3.5 text-center text-sm font-medium border-r border-cream/15 active:bg-anthracite-soft">
          <div className="text-base">📞</div>
          <div className="mt-0.5 text-xs">Bel</div>
        </a>
        <a href="offerte.html" className="py-3.5 text-center text-sm font-medium bg-bordeaux active:bg-bordeaux-dark">
          <div className="text-base">✶</div>
          <div className="mt-0.5 text-xs">Offerte</div>
        </a>
        <a href="#menus" className="py-3.5 text-center text-sm font-medium border-l border-cream/15 active:bg-anthracite-soft">
          <div className="text-base">↓</div>
          <div className="mt-0.5 text-xs">Brochure</div>
        </a>
      </div>
    </div>);

}

/* ============================================================
   FADE-IN OBSERVER (wraps sections)
   ============================================================ */
function useFadeIn() {
  useEffect(() => {
    const els = document.querySelectorAll(".fade-up");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {if (e.isIntersecting) {e.target.classList.add("is-visible");io.unobserve(e.target);}});
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
      <div className="fade-up"><Intro /></div>
      <div className="fade-up"><Rooms /></div>
      <div className="fade-up"><CapacityTable /></div>
      <div className="fade-up"><Menus /></div>
      <div className="fade-up"><Cases /></div>
      <div className="fade-up"><Included /></div>
      <div className="fade-up"><EventTypes /></div>
      <div className="fade-up"><Form /></div>
      <Footer />
      <StickyMobileCTA />
    </div>);

}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);