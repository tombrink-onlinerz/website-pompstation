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
        kicker="Ruimtes · Het terras"
        title={t("Het","The")}
        titleAccent={t("terras","terrace")}
        lead="Omringd door groen, onder een open hemel. Open van het eerste zonnetje tot de laatste gast."
        image="images/terras-outdoor.jpg"
        position="center 40%"
      />

      <section className="bg-cream py-20 md:py-28 border-b border-anthracite/10">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-bordeaux animate-pulse"></span>
              <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-bordeaux">Zomer 2026 · nu open</span>
            </div>
            <div className="eyebrow text-bordeaux mb-4">Details</div>
            <ul className="space-y-5">
              {[["Capaciteit","sit-down 20–80 · staand tot 200"],["Seizoen","Voorjaar t/m herfst"],["Lunch","12:00 – 16:00"],["Diner","Op reservering"],["Borrelen","16:00 – sluiting"],["Honden","Welkom op het terras"]].map(([k,v]) => <DetailRow key={k} k={k} v={v} />)}
            </ul>
            <div className="mt-8 flex flex-col gap-3">
              <a href="#" onClick={(e) => { e.preventDefault(); window.openReservation ? window.openReservation() : window.open('https://www.pompstation.nu/','_blank'); }} className="btn-primary inline-flex items-center gap-3 px-7 py-4 text-sm font-medium tracking-wide">
                Reserveer een terrastafeltje →
              </a>
              <a href="offerte.html" className="inline-flex items-center gap-3 px-7 py-4 text-sm font-medium tracking-wide border border-bordeaux text-bordeaux hover:bg-bordeaux hover:text-cream transition-colors">
                Groep aanvragen →
              </a>
            </div>
          </div>
          <div className="md:col-span-8">
            <p className="text-anthracite/80 text-lg leading-relaxed">
              Het terras van Pompstation ligt verscholen in een rustige binnenplaats, omringd door bamboe en andere beplanting. Het is een oase midden in Amsterdam-Oost — onverwacht groen, onverwacht rustig.
            </p>
            <p className="mt-5 text-anthracite/80 text-lg leading-relaxed">
              Of u nu komt voor een lunch in de zon, een uitgebreid zomerdiner of gewoon een fles wijn en wat hapjes — op het terras bent u altijd welkom. Het volledige menu is ook buiten beschikbaar.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-4">
              <div className="overflow-hidden" style={{height:'260px'}}>
                <Photo src="images/terras-diner.jpg" alt="Diner op het terras" className="w-full h-full" position="center 30%" />
              </div>
              <div className="overflow-hidden" style={{height:'260px'}}>
                <Photo src="images/terras-borrelen.jpg" alt="Borrelen op het terras" className="w-full h-full" position="center 30%" />
              </div>
              <div className="col-span-2 overflow-hidden" style={{height:'300px'}}>
                <Photo src="images/terras-koppel.jpg" alt="Genieten op het terras" className="w-full h-full" position="center 40%" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bordeaux text-cream py-16 md:py-20">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <h2 className="h-display text-cream text-4xl md:text-6xl">Terras reserveren?</h2>
            <p className="mt-3 text-cream/75 text-lg">Reserveer online voor losse tafels of vraag een groepsboeking aan.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#" onClick={(e) => { e.preventDefault(); window.openReservation ? window.openReservation() : window.open('https://www.pompstation.nu/','_blank'); }} className="inline-flex items-center justify-center gap-2 bg-cream text-bordeaux px-7 py-4 font-medium text-sm tracking-wide hover:bg-cream/90 transition-colors">
              Reserveer online →
            </a>
            <a href="offerte.html" className="inline-flex items-center justify-center gap-2 bg-cream/15 text-cream border border-cream/30 px-7 py-4 font-medium text-sm tracking-wide hover:bg-cream/25 transition-colors">
              Groep aanvragen →
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
