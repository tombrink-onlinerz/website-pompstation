function DetailRow({ k, v }) {
  return (
    <li className="flex flex-col gap-0.5 border-b border-anthracite/10 pb-4">
      <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-anthracite/50">{k}</span>
      <span className="text-anthracite text-base">{v}</span>
    </li>
  );
}

function App() {
  return (
    <div className="font-sans text-anthracite">
      <SiteNav current="groepen" />

      <PageHero
        kicker="Groepen & afhuren · Bedrijfsdiner"
        title="Het"
        titleAccent="bedrijfsdiner"
        lead="Een besloten diner voor uw team, klanten of relaties. Klassiek aan tafel, uitgeserveerd in gangen."
        image="images/restaurant-service.jpg"
        position="center 30%" />

      <section className="bg-cream py-20 md:py-28 border-b border-anthracite/10">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <div className="eyebrow text-bordeaux mb-4">Details</div>
            <ul className="space-y-5">
              {[
                ["Capaciteit","10–180 gasten"],
                ["Menu","3, 4 of 5 gangen"],
                ["Keuze","Vlees, vis of vega per gang"],
                ["Wijnarrangement","Add-on · vooraf te boeken"],
                ["Ruimte","Restaurant of exclusief"],
                ["Live muziek","Donderdag t/m zaterdag"],
              ].map(([k, v]) => <DetailRow key={k} k={k} v={v} />)}
            </ul>
            <a href="offerte.html" className="btn-primary mt-8 inline-flex items-center gap-3 px-7 py-4 text-sm font-medium tracking-wide">
              Offerte aanvragen →
            </a>
          </div>
          <div className="md:col-span-8">
            <p className="text-anthracite/80 text-lg leading-relaxed">
              Een bedrijfsdiner bij Pompstation combineert topkeuken met de unieke sfeer van een monument uit 1912. Kaarslicht, een open keuken en live jazz — het perfecte decor voor een diner dat indruk maakt.
            </p>
            <p className="mt-5 text-anthracite/80 text-lg leading-relaxed">
              Het groepsmenu biedt per gang keuze uit vlees, vis of vega seizoensmenu. Wijnarrangementen zijn vooraf in te boeken als add-on. Voor kleinere gezelschappen is reservering in het restaurant ook mogelijk zonder exclusieve huur.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-4">
              <div className="overflow-hidden" style={{height:'280px'}}>
                <Photo src="images/restaurant-service.jpg" alt="Service in het restaurant" className="w-full h-full" position="center 30%" />
              </div>
              <div className="overflow-hidden" style={{height:'280px'}}>
                <Photo src="images/service-candles.jpg" alt="Kaarslicht sfeer" className="w-full h-full" position="center 40%" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bordeaux text-cream py-16 md:py-20">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <h2 className="h-display text-cream text-4xl md:text-6xl">Bedrijfsdiner reserveren?</h2>
            <p className="mt-3 text-cream/75 text-lg">Vraag een offerte aan — we reageren binnen 1 werkdag.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="offerte.html" className="inline-flex items-center justify-center gap-2 bg-cream text-bordeaux px-7 py-4 font-medium text-sm tracking-wide hover:bg-cream/90 transition-colors">
              Offerte aanvragen →
            </a>
            <a href="tel:+31202279885" className="inline-flex items-center justify-center gap-2 border border-cream/30 text-cream px-7 py-4 font-medium text-sm tracking-wide hover:border-cream/60 transition-colors">
              +31 20 227 9885
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(App));
