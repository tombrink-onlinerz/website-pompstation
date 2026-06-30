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
        kicker="Ruimtes · Het restaurant"
        title={t("De grote","The grand")}
        titleAccent={t("zaal","hall")}
        lead="Kaarslicht onder een plafond van 12 meter, een open keuken en live jazz op de achtergrond — voor 10 tot 180 gasten."
        image="images/restaurant-zaal.jpg"
        position="center 20%"
      />

      <section className="bg-cream py-20 md:py-28 border-b border-anthracite/10">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <div className="eyebrow text-bordeaux mb-4">Details</div>
            <ul className="space-y-5">
              {[["Capaciteit","2 – 180 gasten"],["Indeling","Tafels voor 2 tot 20 pers."],["Plafond","12 meter vrije hoogte"],["Open keuken","Zichtbaar vanuit de zaal"],["Live muziek","Donderdag t/m zaterdag"],["Parkeren","Vrij parkeren in de buurt"]].map(([k,v]) => <DetailRow key={k} k={k} v={v} />)}
            </ul>
            <a href="#" onClick={(e) => { e.preventDefault(); window.openReservation ? window.openReservation() : window.open('https://www.pompstation.nu/','_blank'); }} className="btn-primary mt-8 inline-flex items-center gap-3 px-7 py-4 text-sm font-medium tracking-wide">
              Reserveer een tafel →
            </a>
          </div>
          <div className="md:col-span-8">
            <p className="text-anthracite/80 text-lg leading-relaxed">
              De grote zaal van Pompstation is het hart van het restaurant. Het voormalige watergemaal biedt een industrieel decor dat zijn gelijke niet kent: bakstenen muren, stalen constructies en een plafond van 12 meter hoog.
            </p>
            <p className="mt-5 text-anthracite/80 text-lg leading-relaxed">
              Overdag valt het daglicht door hoge ramen naar binnen. 's Avonds creëren kaarslicht en de warme sfeer van de bar een intieme beleving, terwijl de open keuken steeds zichtbaar blijft.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-4">
              <div className="overflow-hidden" style={{height:'280px'}}>
                <Photo src="images/restaurant-service.jpg" alt="Service in het restaurant" className="w-full h-full" position="center 30%" />
              </div>
              <div className="overflow-hidden" style={{height:'280px'}}>
                <Photo src="images/steak-fire.jpg" alt="Uit de open keuken" className="w-full h-full" position="center" />
              </div>
              <div className="col-span-2 overflow-hidden" style={{height:'320px'}}>
                <Photo src="images/service-candles.jpg" alt="Kaarslicht sfeer" className="w-full h-full" position="center 40%" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bordeaux text-cream py-16 md:py-20">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <h2 className="h-display text-cream text-4xl md:text-6xl">Een tafel reserveren?</h2>
            <p className="mt-3 text-cream/75 text-lg">Bel ons of reserveer direct online.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#" onClick={(e) => { e.preventDefault(); window.openReservation ? window.openReservation() : window.open('https://www.pompstation.nu/','_blank'); }} className="inline-flex items-center justify-center gap-2 bg-cream text-bordeaux px-7 py-4 font-medium text-sm tracking-wide hover:bg-cream/90 transition-colors">
              Reserveer online →
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
