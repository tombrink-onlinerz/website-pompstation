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
        kicker={t("Groepen & afhuren · Groepsdiner","Groups & hire · Group dinner")}
        title={t("Het","The")}
        titleAccent={t("groepsdiner","group dinner")}
        lead={t("Aan een lange tafel, uitgeserveerd in gangen. Altijd keuze uit vlees, vis of vega seizoensmenu — voor elk gezelschap van 10 personen of meer.","Seated at a long table, served course by course. Always a choice of meat, fish or vegetarian — for any group of 10 or more.")}
        image="images/groepsdiner-overhead.jpg"
        position="center 40%"
        height="h-[50vh] min-h-[360px]"
        ctas={[{label:t("Brochure downloaden","Download brochure"),href:"brochure-corporate.html"},{label:t("Offerte aanvragen","Request a quote"),href:"offerte.html"}]}
        />

      <section className="bg-cream py-20 md:py-28 border-b border-anthracite/10">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <div className="eyebrow text-bordeaux mb-4">{t("Details","Details")}</div>
            <ul className="space-y-5">
              {[
                [t("Capaciteit","Capacity"),t("10–180 gasten","10–180 guests")],
                [t("Menu","Menu"),t("3 · 4 · 5 gangen","3 · 4 · 5 courses")],
                [t("Keuze","Choice"),t("Vlees, vis of vega per gang","Meat, fish or veg per course")],
                [t("Wijnarrangement","Wine pairing"),t("Add-on · vooraf te boeken","Add-on · book in advance")],
                [t("Live muziek","Live music"),t("Donderdag t/m zaterdag","Thursday to Saturday")],
                [t("Reserveren","Booking"),t("Minimaal 3 werkdagen vooruit","At least 3 working days ahead")],
              ].map(([k, v]) => <DetailRow key={k} k={k} v={v} />)}
            </ul>
            <a href="offerte.html" className="btn-primary mt-8 inline-flex items-center gap-3 px-7 py-4 text-sm font-medium tracking-wide">
              {t("Groepsdiner aanvragen","Request group dinner")} →
            </a>
          </div>
          <div className="md:col-span-8">
            {/* Gangen cards */}
            <div className="grid grid-cols-3 gap-4 mb-10">
              {[
                { gangen: 3, prijs: "€47", label: t("Keuze vlees, vis of vega","Choice of meat, fish or veg") },
                { gangen: 4, prijs: "€57", label: t("Met tussengerecht","With intermediate course"), featured: true },
                { gangen: 5, prijs: "€65", label: t("Volledig proeverijmenu","Full tasting menu") },
              ].map(({ gangen, prijs, label, featured }) => (
                <div key={gangen} className={`p-5 border ${ featured ? 'bg-bordeaux border-bordeaux text-cream' : 'bg-cream border-anthracite/15 text-anthracite'}`}>
                  {featured && <div className="eyebrow text-cream/60 text-[10px] mb-3">{t("Meest gekozen","Most popular")}</div>}
                  <div className={`h-serif text-2xl ${featured ? 'text-cream' : 'text-anthracite'}`}>{gangen} {t("gangen","courses")}</div>
                  <div className={`mt-2 text-4xl font-display font-extrabold tracking-tight ${featured ? 'text-cream' : 'text-anthracite'}`}>{prijs} <span className="text-base font-sans font-normal opacity-70">p.p.</span></div>
                  <div className={`mt-2 text-sm leading-snug ${featured ? 'text-cream/70' : 'text-anthracite/60'}`}>{label}</div>
                </div>
              ))}
            </div>
            <p className="text-anthracite/80 text-lg leading-relaxed">
              {t("Het groepsdiner bij Pompstation is een apart menu, speciaal samengesteld voor gezelschappen vanaf 10 personen. Per gang kiest u uit een vlees-, vis- of vega seizoensmenu — samengesteld door de keuken op basis van het beste van het moment.","The group dinner at Pompstation is a dedicated menu, specially composed for parties of 10 or more. For each course you choose from a meat, fish or vegetarian seasonal menu — put together by the kitchen from the best of the moment.")}
            </p>
            <p className="mt-5 text-anthracite/80 text-lg leading-relaxed">
              {t("Kies voor 3, 4 of 5 gangen. Wijnarrangementen zijn vooraf in te boeken als add-on — ook verkrijgbaar per glas voor losse tafels. Grote groepen kunnen het restaurant gedeeltelijk of geheel reserveren.","Choose 3, 4 or 5 courses. Wine pairings can be booked in advance as an add-on — also available by the glass for individual tables. Large groups may reserve part or all of the restaurant.")}
            </p>
            <div className="mt-10 grid grid-cols-2 gap-4">
              <div className="overflow-hidden" style={{height:'280px'}}>
                <Photo src="images/steak-fire.jpg" alt={t("Uit de open keuken","From the open kitchen")} className="w-full h-full" position="center" />
              </div>
              <div className="overflow-hidden" style={{height:'280px'}}>
                <Photo src="images/food-fish.jpg" alt={t("Visgerecht","Fish dish")} className="w-full h-full" position="center" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bordeaux text-cream py-16 md:py-20">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <h2 className="h-display text-cream text-4xl md:text-6xl">{t("Groepsdiner boeken?","Book a group dinner?")}</h2>
            <p className="mt-3 text-cream/75 text-lg">{t("Vraag een tafel aan — we reageren binnen 1 werkdag.","Request a table — we respond within 1 business day.")}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="offerte.html" className="inline-flex items-center justify-center gap-2 bg-cream text-bordeaux px-7 py-4 font-medium text-sm tracking-wide hover:bg-cream/90 transition-colors">
              {t("Aanvragen","Request")} →
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
