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
        kicker={t("Groepen & afhuren · Meeting & vergadering","Groups & hire · Meeting & conference")}
        title={t("Meeting","Meeting")}
        titleAccent={t("& vergadering","& conference")}
        lead={t("Een inspirerende omgeving voor uw vergadering, workshop of teamdag. Buiten het kantoor, maar volledig gefaciliteerd.","An inspiring setting for your meeting, workshop or team day. Out of the office, but fully facilitated.")}
        image="images/restaurant-zaal.jpg"
        position="center 20%"
        ctas={[{label:t("Brochure downloaden","Download brochure"),href:"brochure-corporate.html"},{label:t("Offerte aanvragen","Request a quote"),href:"offerte.html"}]}
        />

      <section className="bg-cream py-20 md:py-28 border-b border-anthracite/10">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <div className="eyebrow text-bordeaux mb-4">{t("Details","Details")}</div>
            <ul className="space-y-5">
              {[
                [t("Capaciteit","Capacity"),t("10–60 personen","10–60 persons")],
                [t("Ruimte","Venue"),t("Besloten deel van het restaurant","Private section of the restaurant")],
                [t("Daglicht","Daylight"),t("Hoge ramen, natuurlijk licht","High windows, natural light")],
                [t("Catering","Catering"),t("Koffie, lunch of diner op aanvraag","Coffee, lunch or dinner on request")],
                [t("Tijdstip","Timing"),t("Dagdeel of hele dag mogelijk","Half day or full day")],
                [t("Locatie","Location"),"Zeeburgerdijk 52, Amsterdam-Oost"],
              ].map(([k, v]) => <DetailRow key={k} k={k} v={v} />)}
            </ul>
            <a href="offerte.html" className="btn-primary mt-8 inline-flex items-center gap-3 px-7 py-4 text-sm font-medium tracking-wide">
              {t("Beschikbaarheid aanvragen","Check availability")} →
            </a>
          </div>
          <div className="md:col-span-8">
            <p className="text-anthracite/80 text-lg leading-relaxed">
              {t("Vergaderen in een monumentaal pand werkt anders. De industriële architectuur, het hoge plafond en het daglicht creëren een omgeving die inspireert en ruimte geeft voor heldere gedachten — ver weg van het kantoor, maar op slechts een paar minuten van het centrum van Amsterdam.","Meeting in a monumental building works differently. The industrial architecture, the high ceiling and the natural light create an environment that inspires and gives space for clear thinking — far from the office, yet just a few minutes from the centre of Amsterdam.")}
            </p>
            <p className="mt-5 text-anthracite/80 text-lg leading-relaxed">
              {t("Wij verzorgen koffie, lunch of een afsluiting met diner op aanvraag. De ruimte is geschikt voor vergaderingen, workshops, presentaties en trainingen. Neem contact op voor uw specifieke opzet en wensen.","We provide coffee, lunch or a closing dinner on request. The space is suitable for meetings, workshops, presentations and training sessions. Please get in touch for your specific setup and requirements.")}
            </p>
            <div className="mt-10 grid grid-cols-2 gap-4">
              <div className="col-span-2 overflow-hidden" style={{height:'320px'}}>
                <Photo src="images/restaurant-zaal.jpg" alt="De grote zaal" className="w-full h-full" position="center 20%" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bordeaux text-cream py-16 md:py-20">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <h2 className="h-display text-cream text-4xl md:text-6xl">{t("Vergadering plannen?","Planning a meeting?")}</h2>
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
