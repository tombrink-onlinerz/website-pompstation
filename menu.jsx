const t = window._t || ((nl) => nl);
/* ============================================================
   MENU PAGE
   ============================================================ */
const { useState } = React;

const MENU_FORMULES = [
  { gangen: t("3 gangen","3 courses"), price: "€42", note: t("Voor-, hoofd- en nagerecht","Starter, main and dessert"), image: "images/steak-fire.jpg" },
  { gangen: t("4 gangen","4 courses"), price: "€52", note: t("Met tussengerecht","With intermediate course"), popular: true, image: "images/restaurant-service.jpg" },
  { gangen: t("5 gangen","5 courses"), price: "€62", note: t("Het volledige proeverijmenu","The full tasting menu"), image: "images/food-fish.jpg" },
];

const GROEPEN_FORMULES = [
  { gangen: t("3 gangen","3 courses"), price: "€47", note: "Keuze uit vlees, vis of vega seizoensmenu", image: "images/steak-fire.jpg" },
  { gangen: t("4 gangen","4 courses"), price: "€57", note: "Met tussengerecht · keuze per gang", popular: true, image: "images/restaurant-service.jpg" },
  { gangen: t("5 gangen","5 courses"), price: "€65", note: "Volledig proeverijmenu · keuze per gang", image: "images/food-fish.jpg" },
];

const MENU_SECTIONS = [
  {
    title: t("Voorgerechten","Starters"),
    items: [
      { n: "Ceviche", d: "Leche de tigre, watermeloen, witte perzik, duindoornbes-olie", p: "16" },
      { n: "Burrata", d: "Tomatensalade, tomatenchutney, tzatziki, basilicumolie", p: "13" },
      { n: "“Pompstation” runder­carpaccio", d: "Knoflook, rucola, Parmezaan-brick", p: "15", award: true },
      { n: "Vitello tonnato", d: "Tonijnsaus, kappertjes, Amsterdamse ui, kalfsjus", p: "14" },
    ],
  },
  {
    title: t("Tussengerechten","Intermediate courses"),
    items: [
      { n: "Ravioli kabeljauw", d: "Courgette, basilicum, munt, eigeel", p: "16" },
      { n: "Brisket", d: "Focaccia, zwarte-knoflookmayonaise, gepekelde seizoensgroenten", p: "15" },
      { n: "Cous cous", d: "Seizoensgroenten, tajine, Zuid-mediterrane kruiden", p: "22" },
    ],
  },
  {
    title: t("Hoofdgerechten","Main courses"),
    items: [
      { n: "Côte de Boeuf", d: "800 gram · van Noord-Hollandse Holstein · voor twee", p: "78" },
      { n: "Catch of the day", d: "Dagverse vis van lokale leveranciers", p: "dagprijs" },
      { n: "Tournedos", d: "Dry-aged uit eigen kast, seizoensgarnituur, rode­wijnjus", p: "34" },
      { n: "Geroosterde knolselderij", d: "Vegetarisch · misoglacé, hazelnoot, bladpeterselie", p: "26" },
    ],
  },
  {
    title: t("Oesters & rauw","Oysters & raw"),
    items: [
      { n: "Wilde Wad-oesters", d: "Per stuk", p: "3,75" },
      { n: "Wilde Wad-oesters", d: "Zes stuks", p: "21,50" },
    ],
  },
  {
    title: t("Nagerechten","Desserts"),
    items: [
      { n: "Yoghurtcrème", d: "Honeycomb, honingcrumble", p: "11" },
      { n: "Brownie", d: "Rood fruit, notencrumble", p: "11" },
      { n: "Kaasplateau", d: "Selectie Europese kazen, vijgenchutney", p: "15" },
    ],
  },
];

const WINE = [
  { n: "Wijnarrangement — 3 glazen", d: "Per gang een passend glas, geselecteerd door de bediening", p: "27" },
  { n: "Wijnarrangement — 4 glazen", d: "Inclusief tussengerecht", p: "34" },
  { n: "Glas van de week", d: "Wisselende selectie aan de bar", p: "vanaf 6,5" },
];

const COCKTAILS = [
  { n: "Het Gemaal", d: "Gin, Italiaanse vermouth, bitter, sinaasappelschil", p: "13" },
  { n: "Hooghuis", d: "Mezcal, limoen, agave, grapefruit", p: "13,5" },
  { n: "Zeeburg Sour", d: "Bourbon, citroen, eiwit, Angostura", p: "13" },
  { n: "Vide Spritz", d: "Prosecco, vlierbloesem, munt, tonic", p: "12" },
  { n: "Indische Buurt", d: "Donkere rum, gember, limoen, kaneel", p: "13" },
  { n: "Huisaperitief", d: "Huisgemaakte limoncello, prosecco, munt", p: "10" },
];

const MOCKTAILS = [
  { n: "Pomp 0%", d: "Gember, limoen, bruisend water, rozemarijn", p: "8" },
  { n: "Tuin & Tonic", d: "Komkommer, vlierbloesem, tonic", p: "8" },
  { n: "Koffie & afsluiter", d: "Espresso, of een glas grappa / limoncello", p: "vanaf 4" },
];

function FormuleCard({ f }) {
  return (
    <div className="flex flex-col">
    <div className="overflow-hidden" style={{height:'220px'}}>
      <img src={f.image} alt={f.gangen} className="w-full h-full object-cover" style={{filter: f.popular ? 'brightness(0.85)' : 'none'}} />
    </div>
    <div className={`relative p-7 md:p-9 flex-1 ${f.popular ? "bg-bordeaux text-cream" : "bg-cream-warm text-anthracite border border-x border-b border-anthracite/10"}`}>
      {f.popular &&
        <div className="absolute -top-3 left-6 bg-bordeaux-dark text-cream eyebrow px-3 py-1.5">{t("★ Meest gekozen","★ Most popular")}</div>
      }
      <h3 className="h-serif text-3xl md:text-4xl">{f.gangen}</h3>
      <div className="mt-5 flex items-baseline gap-2">
        <span className="h-display text-5xl md:text-6xl">{f.price}</span>
        <span className={`text-sm ${f.popular ? "text-cream/70" : "text-anthracite/60"}`}>p.p.</span>
      </div>
      <div className={`mt-2 text-sm ${f.popular ? "text-cream/75" : "text-anthracite/70"}`}>{f.note}</div>
    </div>
    </div>);
}

function MenuRow({ it }) {
  return (
    <div className="flex items-baseline gap-4 py-4 border-b border-anthracite/10 group">
      <div className="flex-1">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="h-serif text-xl md:text-2xl text-anthracite">{it.n}</span>
          {it.award && <span className="eyebrow text-bordeaux border border-bordeaux/40 px-1.5 py-0.5">bekroond</span>}
        </div>
        <div className="mt-1 text-sm text-anthracite/65 leading-relaxed">{it.d}</div>
      </div>
      <div className="h-display text-2xl md:text-3xl text-bordeaux whitespace-nowrap">
        {/^[0-9]/.test(it.p) ? <>€{it.p}</> : <span className="text-lg md:text-xl italic h-serif normal-case">{it.p}</span>}
      </div>
    </div>);
}

function MenuPage() {
  const [groepsMode, setGroepsMode] = useState(false);
  useFadeIn();
  const formules = groepsMode ? GROEPEN_FORMULES : MENU_FORMULES;
  return (
    <div className="font-sans text-anthracite">
      <SiteNav current="menu" />

      <PageHero
        kicker={t("À la carte · vlees, vis & vegetarisch","À la carte · meat, fish & vegetarian")}
        title={t("Het","The")}
        titleAccent={t("menu","menu")}
        lead="Kies à la carte of ga voor een 3-, 4- of 5-gangenformule. De kaart wisselt met het seizoen — lokaal, duurzaam en biologisch waar het kan."
        image="images/chef-kitchen.jpg"
        position="center 35%" />

      {/* Formules */}
      <section className="bg-cream py-8 md:py-12 border-b border-anthracite/10">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10">

          {/* Toggle */}
          <div className="flex justify-center mb-8 md:mb-10">
          <div className="flex items-center gap-1 bg-cream-warm border border-anthracite/15 p-1 w-fit">
            <button type="button" onClick={() => setGroepsMode(false)}
              className={`px-5 py-3 text-sm font-medium transition-all ${!groepsMode ? 'bg-bordeaux text-cream' : 'text-anthracite/60 hover:text-anthracite'}`}>
              À la carte
            </button>
            <button type="button" onClick={() => setGroepsMode(true)}
              className={`px-5 py-3 text-sm font-medium transition-all ${groepsMode ? 'bg-bordeaux text-cream' : 'text-anthracite/60 hover:text-anthracite'}`}>
              Groepsmenu <span className="text-xs font-normal opacity-70 ml-1">10+ pers.</span>
            </button>
          </div>
          </div>

          {groepsMode && (<>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-14">
              <div className="max-w-2xl">
                <div className="eyebrow text-bordeaux mb-4">{t("De formule","Set menu")}</div>
                <h2 className="h-display text-anthracite text-4xl sm:text-5xl md:text-7xl">
                  {t("Drie, vier of","Three, four or")}<br />
                  <span className="h-serif italic normal-case font-normal text-bordeaux">{t("vijf gangen.","five courses.")}</span>
                </h2>
              </div>
              <div className="md:max-w-sm space-y-4 text-anthracite/70 leading-relaxed">
                <p>Kies het aantal gangen voor uw groep. Per gang altijd keuze uit <strong>vlees</strong>, <strong>vis</strong> of <strong>vega seizoensmenu</strong>. Wijnarrangementen zijn toe te voegen als add-on.</p>
                <p>Allergieën of wensen? Laat het ons weten — wij passen het menu graag aan.</p>
                <a href="groepen.html" className="inline-flex items-center gap-2 text-bordeaux font-medium hover:text-bordeaux-dark transition-colors group">Offerte aanvragen <span className="transition-transform group-hover:translate-x-1">→</span></a>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-5 md:gap-6">
              {GROEPEN_FORMULES.map((f, i) => <FormuleCard key={i} f={f} />)}
            </div>
          </>)}


        </div>
      </section>

      {/* Kaart */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-[1100px] mx-auto px-5 md:px-10">
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            {MENU_SECTIONS.map((s, i) =>
            <div key={i} className={`fade-up ${i === MENU_SECTIONS.length - 1 && MENU_SECTIONS.length % 2 ? "" : ""}`}>
              <h3 className="h-display text-3xl md:text-4xl text-anthracite mb-2">{s.title}</h3>
              <div className="w-12 h-0.5 bg-bordeaux mb-4"></div>
              <div>
                {s.items.map((it, j) => <MenuRow key={j} it={it} />)}
              </div>
            </div>
            )}
          </div>

          <div className="mt-12 p-5 bg-cream-warm border border-anthracite/10 text-sm text-anthracite/70 font-mono leading-relaxed">
            Gerechten wisselen met het seizoen — vraag de bediening naar dagsuggesties en allergenen.
            Wij accepteren geen contant geld meer.
          </div>
        </div>
      </section>

      {/* Cocktailkaart */}
      <section id="cocktails" className="bg-cream-warm py-16 md:py-24 border-t border-anthracite/10">
        <div className="max-w-[1100px] mx-auto px-5 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-14">
            <div className="max-w-2xl">
              <div className="eyebrow text-bordeaux mb-4">Aan de bar</div>
              <h2 className="h-display text-anthracite text-5xl md:text-7xl">
                De<br />
                <span className="h-serif italic normal-case font-normal text-bordeaux">cocktailkaart.</span>
              </h2>
            </div>
            <p className="md:max-w-sm text-anthracite/70 leading-relaxed">
              Huisgemaakte siropen, verse kruiden en een huisaperitief van limoncello met prosecco. Ook prima zonder diner — schuif gewoon aan bij de bar.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            <div className="fade-up">
              <h3 className="h-display text-3xl md:text-4xl text-anthracite mb-2">Signature</h3>
              <div className="w-12 h-0.5 bg-bordeaux mb-4"></div>
              <div>{COCKTAILS.map((it, j) => <MenuRow key={j} it={it} />)}</div>
            </div>
            <div className="fade-up">
              <h3 className="h-display text-3xl md:text-4xl text-anthracite mb-2">Alcoholvrij & afsluiters</h3>
              <div className="w-12 h-0.5 bg-bordeaux mb-4"></div>
              <div>{MOCKTAILS.map((it, j) => <MenuRow key={j} it={it} />)}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Wijn */}
      <section className="bg-forest text-cream py-16 md:py-24">
        <div className="max-w-[1100px] mx-auto px-5 md:px-10">
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">
            <div className="md:col-span-4">
              <div className="eyebrow text-cream/60 mb-4">Bij het menu</div>
              <h2 className="h-serif text-4xl md:text-5xl">Wijn­arrangementen</h2>
              <p className="mt-4 text-cream/75 leading-relaxed">
                Een uitgebreide wijnkaart met passende glazen bij elk gerecht. Wijnarrangementen zijn vooraf te boeken als add-on bij een groepsreservering — ook verkrijgbaar per glas voor losse tafels.
              </p>
            </div>
            <div className="md:col-span-8">
              {WINE.map((w, i) =>
              <div key={i} className="flex items-baseline gap-4 py-4 border-b border-cream/20">
                <div className="flex-1">
                  <div className="h-serif text-xl md:text-2xl">{w.n}</div>
                  <div className="mt-1 text-sm text-cream/65">{w.d}</div>
                </div>
                <div className="h-display text-2xl md:text-3xl whitespace-nowrap">
                  {/^[0-9]/.test(w.p) ? <>€{w.p}</> : <span className="text-lg italic h-serif normal-case">{w.p}</span>}
                </div>
              </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <div className="fade-up"><SfeerGallery bg="bg-cream" lead="Kaarslicht, een twaalf meter hoog plafond en de geur uit de open keuken. Zo eet u bij Pompstation." /></div>

      {/* CTA */}
      <section className="bg-cream-warm py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10">
          <div className="grid md:grid-cols-2 gap-5 md:gap-6">
            <a href="#" onClick={PS.openReservation} className="group bg-cream border border-anthracite/15 p-8 md:p-10 hover:border-bordeaux transition-colors">
              <div className="eyebrow text-bordeaux mb-3">Kom proeven</div>
              <div className="h-display text-anthracite text-4xl md:text-5xl">{t("Reserveer een tafel","Reserve a table")}</div>
              <div className="mt-4 text-anthracite/70">Lunch, diner of borrel — met live jazz do–za.</div>
              <div className="mt-6 inline-flex items-center gap-2 text-bordeaux font-medium">Naar reserveren <span className="transition-transform group-hover:translate-x-1">→</span></div>
            </a>
            <a href="groepen.html" className="group bg-bordeaux text-cream p-8 md:p-10 hover:bg-bordeaux-dark transition-colors">
              <div className="eyebrow text-cream/70 mb-3">Met een groep</div>
              <div className="h-display text-cream text-4xl md:text-5xl">Groepsmenu's vanaf €47</div>
              <div className="mt-4 text-cream/75">Vaste menu's voor gezelschappen van 10 tot 360.</div>
              <div className="mt-6 inline-flex items-center gap-2 text-cream font-medium">Afhuren & groepen <span className="transition-transform group-hover:translate-x-1">→</span></div>
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
      <StickyMobileCTA />
    </div>);
}

ReactDOM.createRoot(document.getElementById("root")).render(<MenuPage />);
