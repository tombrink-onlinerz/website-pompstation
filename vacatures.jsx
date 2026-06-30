const t = window._t || ((nl) => nl);
/* ============================================================
   VACATURES (CAREERS) PAGE
   ============================================================ */

const VACANCIES = [
  { role: "Zelfstandig werkend kok", team: "Keuken", type: "Fulltime · 38 uur", desc: "Je draait zelfstandig je post in een open keuken met seizoensgebonden, lokale producten en dry-aged vlees uit eigen kast." },
  { role: "Chef de partie", team: "Keuken", type: "32–38 uur", desc: "Verantwoordelijk voor je eigen partij — van mise en place tot uitserveren tijdens drukke muziekavonden." },
  { role: "Restaurantmedewerker / bediening", team: "Bediening", type: "Part- of fulltime", desc: "Het visitekaartje van Pompstation. Je adviseert over kaart en wijn en maakt van elke avond een belevenis." },
  { role: "Bartender", team: "Bar", type: "Weekend of fulltime", desc: "Cocktails, wijn en een goed verhaal aan de bar — ook tijdens live optredens en events." },
  { role: "Eventcoördinator", team: "Events & groepen", type: "Fulltime", desc: "Eén aanspreekpunt voor bruiloften, bedrijfsfeesten en groepsdiners — van eerste offerte tot de avond zelf." },
  { role: "Spoelkeuken / afwas", team: "Keuken", type: "Bijbaan", desc: "De motor achter de keuken. Flexibele avond- en weekenddiensten, ideaal naast studie." },
];

const PERKS = [
  { t: "Een monument als werkplek", d: "Werken onder een plafond van twaalf meter in een watergemaal uit 1912." },
  { t: "Live muziek tijdens je dienst", d: "Jazz, soul en bossa nova als geluidsdecor — geen avond hetzelfde." },
  { t: "Goede voorwaarden", d: "Marktconform salaris, reiskostenvergoeding en doorgroeimogelijkheden." },
  { t: "Personeelskorting & teamdiners", d: "Korting op eten en drinken, plus gezamenlijke proeverijen." },
  { t: "Internationaal team", d: "Een hecht, gemêleerd team waar ruimte is voor jouw inbreng." },
  { t: "Vaste vrije maandag", d: "We zijn op maandag gesloten — en kennen een jaarlijkse zomerstop." },
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
        <span className="inline-flex items-center gap-2 text-bordeaux font-medium text-sm">Solliciteer <span className="transition-transform group-hover:translate-x-1">→</span></span>
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
        title="Kom in ons"
        titleAccent="team"
        lead="Houd je van gastvrijheid, goed eten en live muziek? We zijn doorlopend op zoek naar koks, bediening en bartenders die van een avondje uit een belevenis maken."
        image="images/chef-kitchen.jpg"
        position="center 35%" />

      {/* Intro */}
      <section className="bg-cream py-16 md:py-24 border-b border-anthracite/10">
        <div className="max-w-[1000px] mx-auto px-5 md:px-10">
          <div className="eyebrow text-bordeaux mb-6">Wie we zoeken</div>
          <p className="h-serif text-anthracite text-3xl md:text-5xl leading-[1.1]">
            Pompstation draait op mensen die <em className="text-bordeaux">gastvrijheid</em> in de vingers hebben
            en het leuk vinden om in een <em className="text-bordeaux">bijzonder gebouw</em> te werken — met de zaal, het terras en de events die daarbij horen.
          </p>
        </div>
      </section>

      {/* Open positions */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-[1100px] mx-auto px-5 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-6 md:mb-10">
            <h2 className="h-display text-anthracite text-5xl md:text-7xl">Open<br /><span className="h-serif italic normal-case font-normal text-bordeaux">vacatures.</span></h2>
            <p className="md:max-w-sm text-anthracite/70 leading-relaxed">
              Geen passende functie ertussen? Stuur een open sollicitatie — we houden je gegevens graag bij de hand.
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
          <div className="eyebrow text-bordeaux mb-4">Wat wij bieden</div>
          <h2 className="h-display text-anthracite text-4xl md:text-6xl mb-10 md:mb-14">Meer dan een baantje</h2>
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

      <div className="fade-up"><SfeerGallery bg="bg-cream" lead="Dit is waar je zou werken — de hal, de bar, het podium en de tuin." /></div>

      {/* Apply CTA */}
      <section className="bg-bordeaux text-cream py-20 md:py-28">
        <div className="max-w-[1000px] mx-auto px-5 md:px-10 text-center">
          <div className="eyebrow text-cream/60 mb-5">Solliciteren</div>
          <h2 className="h-display text-cream text-5xl md:text-7xl">Stuur ons je verhaal</h2>
          <p className="mt-5 text-cream/75 text-lg max-w-xl mx-auto">
            Mail je cv en een korte motivatie — vermeld de functie waarvoor je solliciteert. We nemen snel contact op.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <a href={`mailto:${PS.email}?subject=Sollicitatie%20Pompstation`} className="bg-cream text-bordeaux hover:bg-cream-warm transition-colors px-7 py-4 text-sm md:text-base font-medium tracking-wide">Mail je sollicitatie</a>
            <a href={PS.phoneHref} className="btn-outline text-cream px-7 py-4 text-sm md:text-base font-medium tracking-wide hover:bg-cream/10">Of bel {PS.phone}</a>
          </div>
        </div>
      </section>

      <SiteFooter />
      <StickyMobileCTA />
    </div>);
}

ReactDOM.createRoot(document.getElementById("root")).render(<VacaturesPage />);
