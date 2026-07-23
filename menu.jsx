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
  { gangen: t("3 gangen","3 courses"), price: "€47", note: t("Keuze uit vlees, vis of vega seizoensmenu","Choice of meat, fish or vegetarian seasonal menu"), image: "images/steak-fire.jpg" },
  { gangen: t("4 gangen","4 courses"), price: "€57", note: t("Met tussengerecht · keuze per gang","With intermediate course · choice per course"), popular: true, image: "images/restaurant-service.jpg" },
  { gangen: t("5 gangen","5 courses"), price: "€65", note: t("Volledig proeverijmenu · keuze per gang","Full tasting menu · choice per course"), image: "images/food-fish.jpg" },
];

const MENU_SECTIONS = [
  {
    title: t("Voorgerechten","Starters"),
    items: [
      { n: t("Carpaccio van Barossa","Carpaccio from Barossa"), d: t("Rucola, bieslookmayonaise, Parmezaan, pijnboompitten","Arugula, chives mayonnaise, parmesan cheese and pine nuts"), p: "15" },
      { n: t("Steak Tartare Klassiek (80gr)","Steak Tartare Classic (80gr)"), d: t(`'Barrossa' met kappertjes, sjalot, augurk, peterselie, crouton en eidooierdressing (op beenmerg +6)`,`Made from "Barrossa" with capers, shallot, pickles, parsley, bread crouton and egg yolk dressing (on bone marrow +6)`), p: "15" },
      { n: t("Zeebaars Ceviche","Seabass Ceviche"), d: t("Leche de tigre, chili, koriander, rode ui","Leche de tigre, chili, coriander, red onion"), p: "16" },
      { n: t("Gegrilde Gamba's van de Houtskoolbarbecue","Roasted Gamba's from the Charcoal Grill"), d: t("Boter, chili, knoflook en peterselie","Butter, chilli, garlic and parsley"), p: "16" },
      { n: t("Burrata ♥","Burrata ♥"), d: t(`Geroosterde 'San Marzano' tomaat, broodkruim, basilicumolie`,`Roasted "San Marzano" tomato, bread crumble, basil oil`), p: "15", veg: true },
      { n: t("Parmigiana ♥","Parmigiana ♥"), d: t("Aubergine, tomaat, basilicum, parmigiano, buffalo mozzarella","Aubergine, tomato, basil, parmigiano, buffalo mozzarella"), p: "14", veg: true },
    ],
  },
  {
    title: t("Oesters","Oysters"),
    items: [
      { n: t("Ierse Oesters p.p.","Irish Oysters p/p"), d: t("Per stuk","Per piece"), p: "4,50" },
      { n: t("Seizoensoesters p.p.","Seasonal Oysters p/p"), d: t("Per stuk","Per piece"), p: "3,50" },
    ],
  },
  {
    title: t("Steaks — Houtskoolbarbecue","Steaks — Charcoal BBQ"),
    subtitle: t("Geserveerd medium rare","Served medium rare"),
    subsections: [
      {
        label: t("Black Angus Ierland","Black Angus Ireland"),
        note: t("grasgevoerd","grass fed"),
        items: [
          { n: t("Tournedos (200gr)","Tournedos (200gr)"), p: "30" },
          { n: t("Picanha (200gr)","Picanha (200gr)"), p: "22" },
        ],
      },
      {
        label: t("Dutch Dubbeldoel","Dutch Dubbeldoel"),
        note: t("grasgevoerd","grass fed"),
        items: [
          { n: t("Côte de Boeuf (600gr)","Côte de Boeuf (600gr)"), p: "48" },
          { n: t("Rib-eye (250gr)","Rib-eye (250gr)"), p: "28" },
          { n: t("Skirt Steak (200gr)","Skirt Steak (200gr)"), p: "21" },
        ],
      },
    ],
    sauceNote: t("Huisgemaakte sauzen erbij +1,50: pepersaus · béarnaise · jus de veau · chimichurri","Add homemade sauces +1.50: pepper sauce · béarnaise · jus de veau · chimichurri"),
  },
  {
    title: t("Bijgerechten","Side Dishes"),
    items: [
      { n: t("Brood & boter","Bread & Butter"), p: "4,50" },
      { n: t("Friet","Fries"), p: "5" },
      { n: t("Padrón pepers","Padrón peppers"), p: "5" },
      { n: t("Geroosterde aardappelen","Roasted potatoes"), p: "6" },
      { n: t("Seizoensgroenten","Seasonal vegetables"), p: "5" },
      { n: t("Groene salade met Parmezaan en citrusdressing","Green salad with Parmesan and citrus dressing"), p: "6" },
      { n: t("Rund beenmerg","Beef bone marrow"), p: "6,50" },
    ],
  },
];

const WINE = [
  { n: t("Wijnarrangement — 3 glazen","Wine pairing — 3 glasses"), d: t("Per gang een passend glas, geselecteerd door de bediening","A matching glass for each course, selected by our staff"), p: "27" },
  { n: t("Wijnarrangement — 4 glazen","Wine pairing — 4 glasses"), d: t("Inclusief tussengerecht","Including intermediate course"), p: "34" },
  { n: t("Glas van de week","Glass of the week"), d: t("Wisselende selectie aan de bar","Rotating selection at the bar"), p: t("vanaf 6,5","from 6.5") },
];

const COCKTAILS = [
  { n: "Het Gemaal", d: t("Gin, Italiaanse vermouth, bitter, sinaasappelschil","Gin, Italian vermouth, bitters, orange peel"), p: "13" },
  { n: "Hooghuis", d: t("Mezcal, limoen, agave, grapefruit","Mezcal, lime, agave, grapefruit"), p: "13,5" },
  { n: "Zeeburg Sour", d: t("Bourbon, citroen, eiwit, Angostura","Bourbon, lemon, egg white, Angostura"), p: "13" },
  { n: "Vide Spritz", d: t("Prosecco, vlierbloesem, munt, tonic","Prosecco, elderflower, mint, tonic"), p: "12" },
  { n: "Indische Buurt", d: t("Donkere rum, gember, limoen, kaneel","Dark rum, ginger, lime, cinnamon"), p: "13" },
  { n: t("Huisaperitief","House aperitif"), d: t("Huisgemaakte limoncello, prosecco, munt","Homemade limoncello, prosecco, mint"), p: "10" },
];

const MOCKTAILS = [
  { n: "Pomp 0%", d: t("Gember, limoen, bruisend water, rozemarijn","Ginger, lime, sparkling water, rosemary"), p: "8" },
  { n: t("Tuin & Tonic","Garden & Tonic"), d: t("Komkommer, vlierbloesem, tonic","Cucumber, elderflower, tonic"), p: "8" },
  { n: t("Koffie & afsluiter","Coffee & digestif"), d: t("Espresso, of een glas grappa / limoncello","Espresso, or a glass of grappa / limoncello"), p: t("vanaf 4","from 4") },
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
          {it.veg && <span className="eyebrow text-forest border border-forest/40 px-1.5 py-0.5 text-[10px]">veg</span>}
        </div>
        {it.d && <div className="mt-1 text-sm text-anthracite/65 leading-relaxed">{it.d}</div>}
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
        lead={t("Kies à la carte of ga voor een 3-, 4- of 5-gangenformule. De kaart wisselt met het seizoen — lokaal, duurzaam en biologisch waar het kan.","Choose à la carte or opt for a 3-, 4- or 5-course set menu. The menu changes with the season — local, sustainable and organic where possible.")}
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
              {t("Groepsmenu","Group menu")} <span className="text-xs font-normal opacity-70 ml-1">{t("10+ pers.","10+ guests")}</span>
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
                <p>{t("Kies het aantal gangen voor uw groep. Per gang altijd keuze uit ","Choose the number of courses for your group. Each course always offers a choice of ")}<strong>{t("vlees","meat")}</strong>, <strong>{t("vis","fish")}</strong> {t("of","or")} <strong>{t("vega seizoensmenu","vegetarian seasonal menu")}</strong>{t(". Wijnarrangementen zijn toe te voegen als add-on.",". Wine pairings can be added on.")}</p>
                <p>{t("Allergieën of wensen? Laat het ons weten — wij passen het menu graag aan.","Allergies or special requests? Let us know — we're happy to adapt the menu.")}</p>
                <a href="groepen.html" className="inline-flex items-center gap-2 text-bordeaux font-medium hover:text-bordeaux-dark transition-colors group">{t("Offerte aanvragen","Request a quote")} <span className="transition-transform group-hover:translate-x-1">→</span></a>
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
          {/* PDF Download */}
          <div className="mb-12 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between p-5 bg-cream-warm border border-anthracite/10">
            <div>
              <div className="eyebrow text-bordeaux mb-1">{t("Menukaart 2026","Menu Card 2026")}</div>
              <p className="text-sm text-anthracite/70">{t("Download de volledige menukaart als PDF","Download the full menu as PDF")}</p>
            </div>
            <a href="menu-2026.pdf" download className="inline-flex items-center gap-2 bg-bordeaux text-cream px-5 py-3 text-sm font-medium hover:bg-bordeaux-dark transition-colors whitespace-nowrap">
              ↓ {t("Download menu PDF","Download menu PDF")}
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            {MENU_SECTIONS.map((s, i) =>
            <div key={i} className={`fade-up ${s.subsections ? 'md:col-span-2' : ''}`}>
              <h3 className="h-display text-3xl md:text-4xl text-anthracite mb-1">{s.title}</h3>
              {s.subtitle && <p className="text-sm text-anthracite/60 mb-2">{s.subtitle}</p>}
              <div className="w-12 h-0.5 bg-bordeaux mb-4"></div>
              {s.subsections ? (
                <div className="grid sm:grid-cols-2 gap-x-16">
                  {s.subsections.map((sub, k) => (
                    <div key={k}>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="h-sans font-semibold text-anthracite text-sm uppercase tracking-wider">{sub.label}</span>
                        <span className="eyebrow text-anthracite/40 text-[10px]">{sub.note}</span>
                      </div>
                      {sub.items.map((it, j) => <MenuRow key={j} it={it} />)}
                    </div>
                  ))}
                  {s.sauceNote && <div className="sm:col-span-2 mt-4 text-sm text-anthracite/60 italic">{s.sauceNote}</div>}
                </div>
              ) : (
                <div>{s.items.map((it, j) => <MenuRow key={j} it={it} />)}</div>
              )}
            </div>
            )}
          </div>

          <div className="mt-12 p-5 bg-cream-warm border border-anthracite/10 text-sm text-anthracite/70 font-mono leading-relaxed">
            {t("Allergieën of dieetwensen? Informeer uw ober. Wij accepteren geen contant geld.","Allergies or dietary restrictions? Please inform your waiter. We do not accept cash.")}
          </div>
        </div>
      </section>

      {/* Cocktailkaart */}
      <section id="cocktails" className="bg-cream-warm py-16 md:py-24 border-t border-anthracite/10">
        <div className="max-w-[1100px] mx-auto px-5 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-14">
            <div className="max-w-2xl">
              <div className="eyebrow text-bordeaux mb-4">{t("Aan de bar","At the bar")}</div>
              <h2 className="h-display text-anthracite text-5xl md:text-7xl">
                {t("De","The")}<br />
                <span className="h-serif italic normal-case font-normal text-bordeaux">{t("cocktailkaart.","cocktail list.")}</span>
              </h2>
            </div>
            <p className="md:max-w-sm text-anthracite/70 leading-relaxed">
              {t("Huisgemaakte siropen, verse kruiden en een huisaperitief van limoncello met prosecco. Ook prima zonder diner — schuif gewoon aan bij de bar.","Homemade syrups, fresh herbs and a house aperitif of limoncello with prosecco. Just as good without dinner — simply pull up a stool at the bar.")}
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            <div className="fade-up">
              <h3 className="h-display text-3xl md:text-4xl text-anthracite mb-2">Signature</h3>
              <div className="w-12 h-0.5 bg-bordeaux mb-4"></div>
              <div>{COCKTAILS.map((it, j) => <MenuRow key={j} it={it} />)}</div>
            </div>
            <div className="fade-up">
              <h3 className="h-display text-3xl md:text-4xl text-anthracite mb-2">{t("Alcoholvrij & afsluiters","Alcohol-free & digestifs")}</h3>
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
              <div className="eyebrow text-cream/60 mb-4">{t("Bij het menu","With your meal")}</div>
              <h2 className="h-serif text-4xl md:text-5xl">{t("Wijn­arrangementen","Wine pairings")}</h2>
              <p className="mt-4 text-cream/75 leading-relaxed">
                {t("Een uitgebreide wijnkaart met passende glazen bij elk gerecht. Wijnarrangementen zijn vooraf te boeken als add-on bij een groepsreservering — ook verkrijgbaar per glas voor losse tafels.","An extensive wine list with matching glasses for every dish. Wine pairings can be booked in advance as an add-on with a group reservation — also available by the glass for individual tables.")}
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

      <div className="fade-up"><SfeerGallery bg="bg-cream" lead={t("Kaarslicht, een twaalf meter hoog plafond en de geur uit de open keuken. Zo eet u bij Pompstation.","Candlelight, a twelve-metre ceiling and the aromas from the open kitchen. This is how you dine at Pompstation.")} /></div>

      {/* CTA */}
      <section className="bg-cream-warm py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10">
          <div className="grid md:grid-cols-2 gap-5 md:gap-6">
            <a href="#" onClick={PS.openReservation} className="group bg-cream border border-anthracite/15 p-8 md:p-10 hover:border-bordeaux transition-colors">
              <div className="eyebrow text-bordeaux mb-3">{t("Kom proeven","Come and taste")}</div>
              <div className="h-display text-anthracite text-4xl md:text-5xl">{t("Reserveer een tafel","Reserve a table")}</div>
              <div className="mt-4 text-anthracite/70">{t("Lunch, diner of borrel — met live jazz do–za.","Lunch, dinner or drinks — with live jazz Thu–Sat.")}</div>
              <div className="mt-6 inline-flex items-center gap-2 text-bordeaux font-medium">{t("Naar reserveren","Make a reservation")} <span className="transition-transform group-hover:translate-x-1">→</span></div>
            </a>
            <a href="groepen.html" className="group bg-bordeaux text-cream p-8 md:p-10 hover:bg-bordeaux-dark transition-colors">
              <div className="eyebrow text-cream/70 mb-3">{t("Met een groep","With a group")}</div>
              <div className="h-display text-cream text-4xl md:text-5xl">{t("Groepsmenu's vanaf €47","Group menus from €47")}</div>
              <div className="mt-4 text-cream/75">{t("Vaste menu's voor gezelschappen van 10 tot 360.","Set menus for parties of 10 to 360.")}</div>
              <div className="mt-6 inline-flex items-center gap-2 text-cream font-medium">{t("Afhuren & groepen","Groups & private events")} <span className="transition-transform group-hover:translate-x-1">→</span></div>
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
      <StickyMobileCTA />
    </div>);
}

ReactDOM.createRoot(document.getElementById("root")).render(<MenuPage />);
