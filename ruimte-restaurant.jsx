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
      <SiteNav current="ruimtes" />

      <PageHero
        kicker={t("Ruimtes · Het restaurant","Spaces · The restaurant")}
        title={t("De grote","The grand")}
        titleAccent={t("zaal","hall")}
        lead={t("Kaarslicht onder een plafond van 12 meter, een open keuken en live jazz op de achtergrond — voor 10 tot 180 gasten.","Candlelight beneath a 12-metre ceiling, an open kitchen and live jazz in the background — for 10 to 180 guests.")}
        image="images/restaurant-zaal.jpg"
        position="center 20%"
      />

      <section className="bg-cream py-20 md:py-28 border-b border-anthracite/10">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <div className="eyebrow text-bordeaux mb-4">{t("Details","Details")}</div>
            <ul className="space-y-5">
              {[
                [t("Capaciteit","Capacity"),t("2 – 180 gasten","2 – 180 guests")],
                [t("Indeling","Layout"),t("Tafels voor 2 tot 20 pers.","Tables for 2 to 20 guests")],
                [t("Plafond","Ceiling"),t("12 meter vrije hoogte","12 metres of open height")],
                [t("Open keuken","Open kitchen"),t("Zichtbaar vanuit de zaal","Visible from the hall")],
                [t("Live muziek","Live music"),t("Donderdag t/m zaterdag","Thursday to Saturday")],
                [t("Parkeren","Parking"),t("Vrij parkeren in de buurt","Free parking nearby")],
              ].map(([k,v]) => <DetailRow key={k} k={k} v={v} />)}
            </ul>
            <a href="#" onClick={(e) => { e.preventDefault(); window.openReservation ? window.openReservation() : window.open('https://www.pompstation.nu/','_blank'); }} className="btn-primary mt-8 inline-flex items-center gap-3 px-7 py-4 text-sm font-medium tracking-wide">
              {t("Reserveer een tafel","Reserve a table")} →
            </a>
          </div>
          <div className="md:col-span-8">
            <p className="text-anthracite/80 text-lg leading-relaxed">
              {t("De grote zaal van Pompstation is het hart van het restaurant. Het voormalige watergemaal biedt een industrieel decor dat zijn gelijke niet kent: bakstenen muren, stalen constructies en een plafond van 12 meter hoog.","The grand hall of Pompstation is the heart of the restaurant. The former waterworks offers an industrial setting like no other: brick walls, steel structures and a ceiling twelve metres high.")}
            </p>
            <p className="mt-5 text-anthracite/80 text-lg leading-relaxed">
              {t("Overdag valt het daglicht door hoge ramen naar binnen. 's Avonds creëren kaarslicht en de warme sfeer van de bar een intieme beleving, terwijl de open keuken steeds zichtbaar blijft.","By day, daylight streams in through tall windows. In the evening, candlelight and the warm atmosphere of the bar create an intimate experience, while the open kitchen remains in view throughout.")}
            </p>
            <div className="mt-10 grid grid-cols-2 gap-4">
              <div className="overflow-hidden" style={{height:'280px'}}>
                <Photo src="images/restaurant-service.jpg" alt={t("Service in het restaurant","Service in the restaurant")} className="w-full h-full" position="center 30%" />
              </div>
              <div className="overflow-hidden" style={{height:'280px'}}>
                <Photo src="images/steak-fire.jpg" alt={t("Uit de open keuken","From the open kitchen")} className="w-full h-full" position="center" />
              </div>
              <div className="col-span-2 overflow-hidden" style={{height:'320px'}}>
                <Photo src="images/service-candles.jpg" alt={t("Kaarslicht sfeer","Candlelit atmosphere")} className="w-full h-full" position="center 40%" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bordeaux text-cream py-16 md:py-20">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <h2 className="h-display text-cream text-4xl md:text-6xl">{t("Een tafel reserveren?","Reserve a table?")}</h2>
            <p className="mt-3 text-cream/75 text-lg">{t("Bel ons of reserveer direct online.","Call us or reserve directly online.")}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#" onClick={(e) => { e.preventDefault(); window.openReservation ? window.openReservation() : window.open('https://www.pompstation.nu/','_blank'); }} className="inline-flex items-center justify-center gap-2 bg-cream text-bordeaux px-7 py-4 font-medium text-sm tracking-wide hover:bg-cream/90 transition-colors">
              {t("Reserveer online","Reserve online")} →
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
