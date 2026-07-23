const t = window._t || ((nl) => nl);
/* ============================================================
   VACATURES (CAREERS) PAGE
   ============================================================ */

const VACANCIES = [
  { role: t("Zelfstandig werkend kok","Independent chef"), team: t("Keuken","Kitchen"), type: t("Fulltime · 38 uur","Full-time · 38 hrs"), desc: t("Je draait zelfstandig je post in een open keuken met seizoensgebonden, lokale producten en dry-aged vlees uit eigen kast.","You run your own station in an open kitchen with seasonal, local produce and dry-aged meat from our own cabinet.") },
  { role: t("Chef de partie","Chef de partie"), team: t("Keuken","Kitchen"), type: "32–38 uur", desc: t("Verantwoordelijk voor je eigen partij — van mise en place tot uitserveren tijdens drukke muziekavonden.","Responsible for your own section — from mise en place to service during busy music evenings.") },
  { role: t("Restaurantmedewerker / bediening","Restaurant server"), team: t("Bediening","Front of house"), type: t("Part- of fulltime","Part- or full-time"), desc: t("Het visitekaartje van Pompstation. Je adviseert over kaart en wijn en maakt van elke avond een belevenis.","The face of Pompstation. You advise on the menu and wine and turn every evening into an experience.") },
  { role: t("Bartender","Bartender"), team: "Bar", type: t("Weekend of fulltime","Weekend or full-time"), desc: t("Cocktails, wijn en een goed verhaal aan de bar — ook tijdens live optredens en events.","Cocktails, wine and great conversation at the bar — also during live performances and events.") },
  { role: t("Eventcoördinator","Event coordinator"), team: t("Events & groepen","Events & groups"), type: t("Fulltime","Full-time"), desc: t("Eén aanspreekpunt voor bruiloften, bedrijfsfeesten en groepsdiners — van eerste offerte tot de avond zelf.","Single point of contact for weddings, corporate events and group dinners — from first quote to the night itself.") },
  { role: t("Spoelkeuken / afwas","Kitchen porter / washing up"), team: t("Keuken","Kitchen"), type: t("Bijbaan","Part-time"), desc: t("De motor achter de keuken. Flexibele avond- en weekenddiensten, ideaal naast studie.","The engine of the kitchen. Flexible evening and weekend shifts, ideal alongside studies.") },
];

const PERKS = [
  { t: t("Een monument als werkplek","A monument as your workplace"), d: t("Werken onder een plafond van twaalf meter in een watergemaal uit 1912.","Working beneath a twelve-metre ceiling in a 1912 waterworks.") },
  { t: t("Live muziek tijdens je dienst","Live music during your shift"), d: t("Jazz, soul en bossa nova als geluidsdecor — geen avond hetzelfde.","Jazz, soul and bossa nova as your soundtrack — no two evenings the same.") },
  { t: t("Goede voorwaarden","Good terms"), d: t("Marktconform salaris, reiskostenvergoeding en doorgroeimogelijkheden.","Market-rate salary, travel allowance and career development opportunities.") },
  { t: t("Personeelskorting & teamdiners","Staff discount & team dinners"), d: t("Korting op eten en drinken, plus gezamenlijke proeverijen.","Discount on food and drinks, plus team tastings.") },
  { t: t("Internationaal team","International team"), d: t("Een hecht, gemêleerd team waar ruimte is voor jouw inbreng.","A close-knit, diverse team with room for your input.") },
  { t: t("Vaste vrije maandag","Mondays off"), d: t("We zijn op maandag gesloten — en kennen een jaarlijkse zomerstop.","We close on Mondays — and have an annual summer break.") },
];

function VacancyRow({ v }) {
  return (
    <a href={`mailto:${PS.email}?subject=Sollicitatie%20${encodeURIComponent(v.role)}`}
      className="fade-up group grid md:grid-cols-12 gap-3 md:gap-6 items-baseline py-7 border-t border-anthracite/15 hover:bg-cream-warm/60 transition-colors -mx-4 px-4">
      <div className="md:col-span-7">
        <h3 className="h-serif text-2xl md:text-3xl text-anthracite group-hover:text-bordeaux transition-colors">{v.role}</h3>
        <p className="mt-2 text-anthracite/65 leading-relaxed max-w-xl">{v.desc}</p>
      </div>
      <div className="md:col-span-3 text-sm text-anthracite/75">
        <span className="eyebrow text-bordeaux">{v.team}</span>
        <div className="mt-1 font-mono text-anthracite/60">{v.type}</div>
      </div>
      <div className="md:col-span-2 md:text-right">
        <span className="inline-flex items-center gap-2 text-bordeaux font-medium text-sm">{t("Solliciteer","Apply")} <span className="transition-transform group-hover:translate-x-1">→</span></span>
      </div>
    </a>);
}

function VacaturesPage() {
  useFadeIn();
  return (
    <div className="font-sans text-anthracite">
      <SiteNav />

      <PageHero
        kicker={t("Werken bij Pompstation","Working at Pompstation")}
        title={t("Kom in ons","Join our")}
        titleAccent={t("team","team")}
        lead={t("Houd je van gastvrijheid, goed eten en live muziek? We zijn doorlopend op zoek naar koks, bediening en bartenders die van een avondje uit een belevenis maken.","Do you love hospitality, great food and live music? We are continuously looking for chefs, servers and bartenders who turn a night out into an experience.")}
        image="images/chef-kitchen.jpg"
        position="center 35%" />

      {/* Intro */}
      <section className="bg-cream py-16 md:py-24 border-b border-anthracite/10">
        <div className="max-w-[1000px] mx-auto px-5 md:px-10">
          <div className="eyebrow text-bordeaux mb-6">{t("Wie we zoeken","Who we're looking for")}</div>
          <p className="h-serif text-anthracite text-3xl md:text-5xl leading-[1.1]">
            {t("Pompstation draait op mensen die","Pompstation runs on people who have")} <em className="text-bordeaux">{t("gastvrijheid","hospitality")}</em> {t("in de vingers hebben en het leuk vinden om in een","in their DNA and enjoy working in a")} <em className="text-bordeaux">{t("bijzonder gebouw","remarkable building")}</em> {t("te werken — met de zaal, het terras en de events die daarbij horen.","— with the hall, the terrace and the events that come with it.")}
          </p>
        </div>
      </section>

      {/* Open positions */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-[1100px] mx-auto px-5 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-6 md:mb-10">
            <h2 className="h-display text-anthracite text-5xl md:text-7xl">{t("Open","Open")}<br /><span className="h-serif italic normal-case font-normal text-bordeaux">{t("vacatures.","positions.")}</span></h2>
            <p className="md:max-w-sm text-anthracite/70 leading-relaxed">
              {t("Geen passende functie ertussen? Stuur een open sollicitatie — we houden je gegevens graag bij de hand.","Nothing suitable? Send an open application — we are happy to keep your details on file.")}
            </p>
          </div>
          <div>
            {VACANCIES.map((v, i) => <VacancyRow key={i} v={v} />)}
          </div>
          <div className="border-t border-anthracite/15"></div>
        </div>
      </section>

      {/* Perks */}
      <section className="bg-cream-warm py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10">
          <div className="eyebrow text-bordeaux mb-4">{t("Wat wij bieden","What we offer")}</div>
          <h2 className="h-display text-anthracite text-4xl md:text-6xl mb-10 md:mb-14">{t("Meer dan een baantje","More than a job")}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-anthracite/10">
            {PERKS.map((p, i) =>
            <div key={i} className="bg-cream p-7 md:p-8">
              <div className="h-display text-bordeaux text-2xl md:text-3xl mb-3">0{i + 1}</div>
              <h3 className="h-serif text-2xl text-anthracite">{p.t}</h3>
              <p className="mt-2 text-sm text-anthracite/65 leading-relaxed">{p.d}</p>
            </div>
            )}
          </div>
        </div>
      </section>

      <div className="fade-up"><SfeerGallery bg="bg-cream" lead={t("Dit is waar je zou werken — de hal, de bar, het podium en de tuin.","This is where you would work — the hall, the bar, the stage and the garden.")} /></div>

      {/* Apply CTA */}
      <section className="bg-bordeaux text-cream py-20 md:py-28">
        <div className="max-w-[1000px] mx-auto px-5 md:px-10 text-center">
          <div className="eyebrow text-cream/60 mb-5">{t("Solliciteren","Apply")}</div>
          <h2 className="h-display text-cream text-5xl md:text-7xl">{t("Stuur ons je verhaal","Send us your story")}</h2>
          <p className="mt-5 text-cream/75 text-lg max-w-xl mx-auto">
            {t("Mail je cv en een korte motivatie — vermeld de functie waarvoor je solliciteert. We nemen snel contact op.","Email your CV and a short motivation letter — include the position you are applying for. We will be in touch quickly.")}
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <a href={`mailto:${PS.email}?subject=Sollicitatie%20Pompstation`} className="bg-cream text-bordeaux hover:bg-cream-warm transition-colors px-7 py-4 text-sm md:text-base font-medium tracking-wide">{t("Mail je sollicitatie","Send your application")}</a>
            <a href={PS.phoneHref} className="btn-outline text-cream px-7 py-4 text-sm md:text-base font-medium tracking-wide hover:bg-cream/10">{t("Of bel","Or call")} {PS.phone}</a>
          </div>
        </div>
      </section>

      <SiteFooter />
      <StickyMobileCTA />
    </div>);
}

ReactDOM.createRoot(document.getElementById("root")).render(<VacaturesPage />);
