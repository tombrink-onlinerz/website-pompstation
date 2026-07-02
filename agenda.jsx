const t = window._t || ((nl) => nl);
/* ============================================================
   AGENDA / LIVE MUZIEK PAGE
   ============================================================ */

const GENRES = [
  { t: t("Jazz & soul","Jazz & soul"), d: t("Het hart van de programmering — swingend, warm, intiem.","The heart of our programme — swinging, warm, intimate.") },
  { t: t("Tango","Tango"), d: t("Bandoneon en strijkers onder het twaalf meter hoge plafond.","Bandoneon and strings beneath the twelve-metre ceiling.") },
  { t: t("Bossa & nova","Bossa nova"), d: t("Braziliaanse zwoele klanken bij een laat glas wijn.","Brazilian sultry sounds with a late glass of wine.") },
];

const AGENDA = [
  { day: "Do", date: "Donderdag", act: "Trio Nocturne", genre: "Jazz / soul", time: "20:00–23:00", note: "Wekelijkse jamsessie" },
  { day: "Vr", date: "Vrijdag", act: "Wisselende programmering", genre: "Jazz / soul", time: "20:30–00:00", featured: true },
  { day: "Za", date: "Zaterdag", act: "Wisselende programmering", genre: "Tango / bossa", time: "20:30–00:30", featured: true },
];

function AgendaPage() {
  useFadeIn();
  return (
    <div className="font-sans text-anthracite">
      <SiteNav current="agenda" />

      <PageHero
        kicker={t("Live muziek · donderdag t/m zaterdag","Live music · Thursday to Saturday")}
        title={t("Live","Live")}
        titleAccent={t("muziek","music")}
        lead={t("Door de perfecte akoestiek van de hoge hal klinkt jazz, soul, tango en bossa nova als achtergrond bij uw diner. Geen toegang, geen reservering nodig — schuif gewoon aan.","The perfect acoustics of the high hall turn jazz, soul, tango and bossa nova into the perfect backdrop to your dinner. No cover charge, no reservation needed — just pull up a chair.")}
        image="images/live-muziek-intiem.jpg"
        position="center 40%" />

      {/* Zomerstop banner */}
      <div className="bg-brass/15 border-b border-brass/30">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 py-4 flex items-center gap-4">
          <span className="font-mono text-xs tracking-[0.15em] uppercase text-brass shrink-0">
            {t("Zomerstop","Summer break")}
          </span>
          <p className="text-anthracite/80 text-sm">
            {t(
              "De live muziek pauzeert tijdelijk — we zijn terug op 12 augustus. Reserveer alvast een tafel voor het nieuwe seizoen.",
              "Live music is on a summer break — we return on 12 August. Reserve a table for the new season."
            )}
          </p>
          <a href="reserveren.html" className="ml-auto shrink-0 text-sm font-medium text-bordeaux hover:underline whitespace-nowrap">
            {t("Reserveer →","Reserve →")}
          </a>
        </div>
      </div>

      {/* Weekly agenda */}
      <section className="bg-cream py-16 md:py-24 border-b border-anthracite/10">
        <div className="max-w-[1100px] mx-auto px-5 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-14">
            <div>
              <div className="eyebrow text-bordeaux mb-4">{t("Deze week op het podium","This week on stage")}</div>
              <h2 className="h-display text-anthracite text-5xl md:text-7xl">{t("Vaste","Regular")}<br /><span className="h-serif italic normal-case font-normal text-bordeaux">{t("avonden.","evenings.")}</span></h2>
            </div>
            <p className="md:max-w-sm text-anthracite/70 leading-relaxed">
              {t("Een wisselende programmering met internationale artiesten. Reserveer een tafel om verzekerd te zijn van een plek bij het optreden.","A varied programme of international artists. Reserve a table to guarantee a seat at the performance.")}
            </p>
          </div>

          <div className="space-y-0">
            {AGENDA.map((a, i) =>
            <div key={i} className={`fade-up grid grid-cols-12 gap-3 md:gap-6 items-center py-6 border-t border-anthracite/15 ${a.featured ? "" : ""}`}>
              <div className="col-span-2 md:col-span-1">
                <div className={`w-11 h-11 md:w-14 md:h-14 flex items-center justify-center h-display text-xl md:text-2xl ${a.featured ? "bg-bordeaux text-cream" : "bg-cream-warm text-anthracite border border-anthracite/15"}`}>{a.day}</div>
              </div>
              <div className="col-span-6 md:col-span-7">
                <div className="h-serif text-xl md:text-3xl text-anthracite">{a.act}</div>
                <div className="mt-1 text-sm text-anthracite/60">{a.date}{a.note && <> · {a.note}</>}</div>
              </div>
              <div className="col-span-4 md:col-span-2 text-sm md:text-base text-anthracite/75">{a.genre}</div>
              <div className="col-span-12 md:col-span-2 md:text-right font-mono text-sm text-bordeaux">{a.time}</div>
            </div>
            )}
          </div>
          <div className="mt-8 text-sm text-anthracite/55 font-mono">
            Programmering onder voorbehoud — volg ons voor de actuele line-up. Tijdens privé-events vervalt de reguliere muziekavond.
          </div>
        </div>
      </section>

      {/* Genres */}
      <section className="bg-bordeaux text-cream py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10">
          <div className="grid md:grid-cols-12 gap-8 mb-12 md:mb-16">
            <div className="md:col-span-5">
              <div className="eyebrow text-brass mb-4">Wat je hoort</div>
              <h2 className="h-display text-cream text-5xl md:text-7xl">Het geluid<br /><span className="h-serif italic normal-case font-normal text-cream/80">van het huis.</span></h2>
            </div>
            <div className="md:col-span-7 md:pt-12">
              <p className="text-cream/75 text-lg leading-relaxed max-w-xl">
                Eigen geluidsinstallatie, een echt podium en een akoestiek die een twaalf meter hoge industriële hal je cadeau doet. Meestal jazzy & soulful, soms tango of bossa nova.
              </p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-cream/10">
            {GENRES.map((g, i) =>
            <div key={i} className="bg-bordeaux p-7 md:p-8 hover:bg-bordeaux-dark/60 transition-colors">
              <div className="h-display text-brass text-2xl md:text-3xl mb-3">0{i + 1}</div>
              <h3 className="h-serif text-2xl text-cream">{g.t}</h3>
              <p className="mt-2 text-sm text-cream/65 leading-relaxed">{g.d}</p>
            </div>
            )}
          </div>
        </div>
      </section>

      {/* Editorial photo split */}
      <section className="bg-cream py-16 md:py-24 border-b border-anthracite/10">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 grid md:grid-cols-2 gap-5 md:gap-6">
          <Photo src="images/dj-vinyl.jpg" alt="DJ en vinyl bij Pompstation" className="w-full aspect-[4/3]" position="center" />
          <div className="bg-cream-warm border border-anthracite/10 p-8 md:p-12 flex flex-col justify-center">
            <div className="eyebrow text-bordeaux mb-4">Privé & events</div>
            <h2 className="h-display text-anthracite text-4xl md:text-6xl mb-4">Eigen line-up voor uw feest</h2>
            <p className="text-anthracite/75 text-lg leading-relaxed">
              Bij afhuur regelen we de muziek met u mee — van een jazztrio bij het diner tot een DJ-set die de zaal tot diep in de nacht laat dansen. Inclusief podium, geluid en hulp bij de boeking.
            </p>
            <a href="groepen.html" className="mt-8 inline-flex items-center gap-2 text-bordeaux font-medium group">Bekijk afhuren & groepen <span className="transition-transform group-hover:translate-x-1">→</span></a>
          </div>
        </div>
      </section>

      <div className="fade-up"><SfeerGallery lead="Volle zaal, een band op het podium en de akoestiek van twaalf meter hoog. Zo klinkt een avond bij Pompstation." /></div>

      {/* CTA */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-[1000px] mx-auto px-5 md:px-10 text-center">
          <h2 className="h-display text-anthracite text-5xl md:text-7xl">Dineren met live jazz</h2>
          <p className="mt-5 text-anthracite/70 text-lg max-w-xl mx-auto">Reserveer een tafel op een muziekavond en maak er een complete avond van.</p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <a href="#" onClick={PS.openReservation} className="btn-primary px-7 py-4 text-sm md:text-base font-medium tracking-wide">Reserveer een tafel</a>
            <a href="menu.html" className="btn-outline text-anthracite px-7 py-4 text-sm md:text-base font-medium tracking-wide hover:bg-bordeaux hover:text-cream transition-colors">Bekijk het menu</a>
          </div>
        </div>
      </section>

      <SiteFooter />
      <StickyMobileCTA />
    </div>);
}

ReactDOM.createRoot(document.getElementById("root")).render(<AgendaPage />);
