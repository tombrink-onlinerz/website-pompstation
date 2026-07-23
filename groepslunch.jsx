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
        kicker={t("Groepen & afhuren · Groepslunch","Groups & hire · Group lunch")}
        title={t("De","The")}
        titleAccent={t("groepslunch","group lunch")}
        lead={t("Lunchen in een monumentaal pand met een open keuken en terras. Ideaal voor teamlunches, relatiebezoeken of een gezellige middag met uw groep.","Lunch in a monumental building with an open kitchen and terrace. Ideal for team lunches, client visits or a relaxed afternoon with your group.")}
        image="images/terras-groep.jpg"
        position="center 50%"
        ctas={[{label:t("Brochure downloaden","Download brochure"),href:"brochure-corporate.html"},{label:t("Offerte aanvragen","Request a quote"),href:"offerte.html"}]}
        />

      <section className="bg-cream py-20 md:py-28 border-b border-anthracite/10">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <div className="eyebrow text-bordeaux mb-4">{t("Details","Details")}</div>
            <ul className="space-y-5">
              {[
                [t("Capaciteit","Capacity"),t("10–80 gasten","10–80 guests")],
                [t("Locatie","Venue"),t("Restaurant of terras","Restaurant or terrace")],
                [t("Tijdstip","Timing"),"12:00–16:00"],
                [t("Menu","Menu"),t("Lunch op aanvraag · seizoensgebonden","Lunch on request · seasonal")],
                [t("Wijnarrangement","Wine pairing"),t("Mogelijk bij de lunch","Available with lunch")],
                [t("Terras","Terrace"),t("Beschikbaar bij mooi weer","Available in good weather")],
              ].map(([k, v]) => <DetailRow key={k} k={k} v={v} />)}
            </ul>
            <a href="offerte.html" className="btn-primary mt-8 inline-flex items-center gap-3 px-7 py-4 text-sm font-medium tracking-wide">
              {t("Groepslunch aanvragen","Request a group lunch")} →
            </a>
          </div>
          <div className="md:col-span-8">
            <p className="text-anthracite/80 text-lg leading-relaxed">
              {t("Een groepslunch bij Pompstation is meer dan een tussendoortje. In de grote industriële zaal of op het groene terras geniet uw gezelschap van een verzorgde lunch — samengesteld op basis van het seizoen en uw wensen.","A group lunch at Pompstation is more than a quick bite. In the large industrial hall or on the green terrace, your party enjoys a catered lunch — composed around the season and your wishes.")}
            </p>
            <p className="mt-5 text-anthracite/80 text-lg leading-relaxed">
              {t("Het lunchmenu wordt op aanvraag samengesteld. Reserveer vroeg: lunchslots op populaire tijden zijn beperkt. Op het terras is reserveren ook mogelijk voor groepen.","The lunch menu is composed on request. Book early: lunch slots at popular times are limited. Reservations on the terrace are also possible for groups.")}
            </p>
            <div className="mt-10 grid grid-cols-2 gap-4">
              <div className="overflow-hidden" style={{height:'280px'}}>
                <Photo src="images/terras-groep.jpg" alt={t("Groep op het terras","Group on the terrace")} className="w-full h-full" position="center 50%" />
              </div>
              <div className="overflow-hidden" style={{height:'280px'}}>
                <Photo src="images/terras-diner.jpg" alt={t("Lunch op het terras","Lunch on the terrace")} className="w-full h-full" position="center 30%" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bordeaux text-cream py-16 md:py-20">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <h2 className="h-display text-cream text-4xl md:text-6xl">{t("Groepslunch aanvragen?","Request a group lunch?")}</h2>
            <p className="mt-3 text-cream/75 text-lg">{t("Vraag beschikbaarheid aan — we reageren binnen 1 werkdag.","Request availability — we respond within 1 business day.")}</p>
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
