function DetailRow({ k, v }) {
const t = window._t || ((nl) => nl);
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
      <SiteNav current="ruimtes" />

      <PageHero
        kicker="Ruimtes · De vide"
        title={t("De","The")}
        titleAccent={t("vide","mezzanine")}
        lead="Privé boven de zaal — met uitzicht op de hal, een eigen bar en aparte entree. Voor 50 tot 100 gasten."
        image="images/bride-vide.jpg"
        position="center 30%"
      />

      <section className="bg-cream py-20 md:py-28 border-b border-anthracite/10">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <div className="eyebrow text-bordeaux mb-4">Details</div>
            <ul className="space-y-5">
              {[["Capaciteit","50 – 100 gasten"],["Indeling","Staand of zittend"],["Eigen bar","Inclusief bartender"],["Eigen entree","Apart van het restaurant"],["Uitzicht","Op de volledige zaal"],["A/V","Scherm + geluidssysteem"]].map(([k,v]) => <DetailRow key={k} k={k} v={v} />)}
            </ul>
            <a href="contact.html" className="btn-primary mt-8 inline-flex items-center gap-3 px-7 py-4 text-sm font-medium tracking-wide">
              Vraag een offerte aan →
            </a>
          </div>
          <div className="md:col-span-8">
            <p className="text-anthracite/80 text-lg leading-relaxed">
              De vide is de verhoogde galerij van Pompstation, gelegen boven de hoofdzaal. Vanuit hier heeft u een uniek uitzicht op de hal, de open keuken en het podium — terwijl u volledig privé zit.
            </p>
            <p className="mt-5 text-anthracite/80 text-lg leading-relaxed">
              Met een eigen bar, bartender en aparte ingang is de vide ideaal voor borrels, presentaties, verjaardagsfeesten of een besloten diner. U profiteert van de sfeer van het restaurant, maar bent er geen onderdeel van.
            </p>
            <div className="mt-10">
              <div className="overflow-hidden" style={{height:'400px'}}>
                <Photo src="images/live-band-vide.jpg" alt="De vide met uitzicht op de hal" className="w-full h-full" position="center 40%" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bordeaux text-cream py-16 md:py-20">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <h2 className="h-display text-cream text-4xl md:text-6xl">De vide reserveren?</h2>
            <p className="mt-3 text-cream/75 text-lg">Neem contact op voor een offerte op maat.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="contact.html" className="inline-flex items-center justify-center gap-2 bg-cream text-bordeaux px-7 py-4 font-medium text-sm tracking-wide hover:bg-cream/90 transition-colors">
              Neem contact op →
            </a>
            <a href="mailto:events@pompstation.nu" className="inline-flex items-center justify-center gap-2 border border-cream/30 text-cream px-7 py-4 font-medium text-sm tracking-wide hover:border-cream/60 transition-colors">
              events@pompstation.nu
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
