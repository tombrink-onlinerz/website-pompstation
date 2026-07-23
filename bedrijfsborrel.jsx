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
const t = window._t || ((nl) => nl);
  return (
    <div className="font-sans text-anthracite">
      <SiteNav current="groepen" />

      <PageHero
        kicker={t("Groepen & afhuren · Bedrijfsborrel","Groups & hire · Corporate drinks")}
        title={t("De","The")}
        titleAccent={t("borrel","drinks")}
        lead={t("Informeel samenzijn met collega's, klanten of partners. Van een uurtje netwerken tot een uitgebreide borrel met walking dinner.","Informal gathering with colleagues, clients or partners. From a networking hour to an extended reception with walking dinner.")}
        image="images/cocktail.jpg"
        position="center 30%"
        ctas={[{label:t("Brochure downloaden","Download brochure"),href:"brochure-corporate.html"},{label:t("Offerte aanvragen","Request a quote"),href:"offerte.html"}]}
        />

      <section className="bg-cream py-20 md:py-28 border-b border-anthracite/10">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <div className="eyebrow text-bordeaux mb-4">{t("Details","Details")}</div>
            <ul className="space-y-5">
              {[
                [t("Capaciteit","Capacity"),t("20–360 gasten","20–360 guests")],
                [t("Ruimte","Venue"),t("Vide, restaurant of terras","Mezzanine, restaurant or terrace")],
                [t("Drank","Drinks"),t("Unlimited arrangementen beschikbaar","Unlimited arrangements available")],
                [t("Hapjes","Food"),t("Walking dinner optioneel","Walking dinner optional")],
                [t("Bar","Bar"),t("Eigen bar & signature cocktails","Our own bar & signature cocktails")],
                [t("Eindtijd","End time"),t("Tot 01:00 (vr–za tot 03:00)","Until 01:00 (Fri–Sat until 03:00)")],
              ].map(([k, v]) => <DetailRow key={k} k={k} v={v} />)}
            </ul>
            <a href="offerte.html" className="btn-primary mt-8 inline-flex items-center gap-3 px-7 py-4 text-sm font-medium tracking-wide">
              {t("Offerte aanvragen","Request a quote")} →
            </a>
          </div>
          <div className="md:col-span-8">
            <p className="text-anthracite/80 text-lg leading-relaxed">
              {t("De bar van Pompstation is de perfecte plek voor een bedrijfsborrel. Met huisgemaakte cocktails, een brede wijnkaart en de unieke sfeer van de historische hal voelt een borrel hier altijd bijzonder.","The bar at Pompstation is the perfect setting for a corporate drinks reception. With homemade cocktails, an extensive wine list and the unique atmosphere of the historic hall, drinks here always feel special.")}
            </p>
            <p className="mt-5 text-anthracite/80 text-lg leading-relaxed">
              {t("Kies voor de intieme vide, de grote restaurantzaal of het terras in de zomermaanden. Wij bieden drankarrangementen op maat en kunnen een walking dinner toevoegen voor een volledige avond.","Choose the intimate mezzanine, the large restaurant hall or the terrace in summer. We offer bespoke drinks arrangements and can add a walking dinner for a complete evening.")}
            </p>
            <div className="mt-10 grid grid-cols-2 gap-4">
              <div className="overflow-hidden" style={{height:'280px'}}>
                <Photo src="images/cocktail.jpg" alt="Cocktails aan de bar" className="w-full h-full" position="center 30%" />
              </div>
              <div className="overflow-hidden" style={{height:'280px'}}>
                <Photo src="images/interior-vide.jpg" alt="Borrel in de vide" className="w-full h-full" position="center 60%" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bordeaux text-cream py-16 md:py-20">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <h2 className="h-display text-cream text-4xl md:text-6xl">{t("Borrel organiseren?","Planning a drinks reception?")}</h2>
            <p className="mt-3 text-cream/75 text-lg">{t("Vraag een offerte aan — we reageren binnen 1 werkdag.","Request a quote — we respond within 1 business day.")}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="offerte.html" className="inline-flex items-center justify-center gap-2 bg-cream text-bordeaux px-7 py-4 font-medium text-sm tracking-wide hover:bg-cream/90 transition-colors">
              {t("Offerte aanvragen","Request a quote")} →
            </a>
            <a href="tel:+31202279885" className="inline-flex items-center justify-center gap-2 border border-cream/30 text-cream px-7 py-4 font-medium text-sm tracking-wide hover:border-cream/60 transition-colors">
              +31 20 227 9885
            </a>
          </div>
        </div>
      </section>

      <BrochureDownload type="corporate" />

      <SiteFooter />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(App));
