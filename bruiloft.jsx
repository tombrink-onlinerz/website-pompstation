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
      <SiteNav current="groepen" />

      <PageHero
        kicker="Groepen & afhuren · Bruiloft"
        title={t("Uw","Your")}
        titleAccent={t("bruiloft","wedding")}
        lead="Ceremonie op de vide, diner in de grote zaal, feest tot 03:00. Één locatie, één onvergetelijke avond."
        image="images/bride.jpg"
        position="center 25%"
        ctas={[{label:t("Brochure downloaden","Download brochure"),href:"brochure-wedding.html"},{label:t("Offerte aanvragen","Request a quote"),href:"offerte.html"}]}
        />

      <section className="bg-cream py-20 md:py-28 border-b border-anthracite/10">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <div className="eyebrow text-bordeaux mb-4">Details</div>
            <ul className="space-y-5">
              {[
                ["Capaciteit","20–360 gasten"],
                ["Locatie","Volledig exclusief"],
                ["Ceremonie","Op de vide · tot 200 pers."],
                ["Diner","Sit-down of walking dinner"],
                ["Feest","DJ-set of live band · tot 03:00"],
                ["Trouwlocatie","Officieel erkend · gemeente Amsterdam"],
              ].map(([k, v]) => <DetailRow key={k} k={k} v={v} />)}
            </ul>
            <a href="offerte.html" className="btn-primary mt-8 inline-flex items-center gap-3 px-7 py-4 text-sm font-medium tracking-wide">
              Offerte aanvragen →
            </a>
          </div>
          <div className="md:col-span-8">
            <p className="text-anthracite/80 text-lg leading-relaxed">
              Pompstation is een officieel erkende trouwlocatie door de gemeente Amsterdam. De voormalige machinezaal uit 1912, met zijn vide van twaalf meter hoog, biedt een uniek decor voor de mooiste dag van uw leven.
            </p>
            <p className="mt-5 text-anthracite/80 text-lg leading-relaxed">
              Van de ceremonie op de vide tot het diner in de grote zaal en het feest tot in de vroege ochtend — wij regelen alles. Eigen geluidsinstallatie, podium, bar en een vaste event manager die de dag van begin tot eind begeleidt.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-4">
              <div className="col-span-2 overflow-hidden" style={{height:'340px'}}>
                <Photo src="images/bride-vide.jpg" alt="Bruiloft bij Pompstation" className="w-full h-full" position="center 30%" />
              </div>
              <div className="overflow-hidden" style={{height:'240px'}}>
                <Photo src="images/events-bride.jpg" alt="Lachend bruidspaar op de vide" className="w-full h-full" position="center 35%" />
              </div>
              <div className="overflow-hidden" style={{height:'240px'}}>
                <Photo src="images/bride.jpg" alt="Bruidspaar bij de lange tafel" className="w-full h-full" position="center 40%" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <BrochureDownload type="wedding" />

      <section className="bg-bordeaux text-cream py-16 md:py-20">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <h2 className="h-display text-cream text-4xl md:text-6xl">Trouwen bij Pompstation?</h2>
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
