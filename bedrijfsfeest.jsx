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
        kicker={t("Groepen & afhuren · Bedrijfsfeest","Groups & hire · Company party")}
        title={t("Het","The")}
        titleAccent={t("bedrijfsfeest","company party")}
        lead={t("Van een informele borrel tot een gala voor het hele bedrijf. Pompstation is de locatie die iedereen bijblijft.","From an informal reception to a company-wide gala. Pompstation is the venue everyone will remember.")}
        image="images/event-staand.jpg"
        position="center 50%"
        ctas={[{label:t("Brochure downloaden","Download brochure"),href:"brochure-corporate.html"},{label:t("Offerte aanvragen","Request a quote"),href:"offerte.html"}]}
        />

      <section className="bg-cream py-20 md:py-28 border-b border-anthracite/10">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <div className="eyebrow text-bordeaux mb-4">{t("Details","Details")}</div>
            <ul className="space-y-5">
              {[
                [t("Capaciteit","Capacity"),t("20–360 gasten","20–360 guests")],
                [t("Formaat","Format"),t("Borrel, diner of walking dinner","Reception, dinner or walking dinner")],
                [t("Ruimte","Venue"),t("Vide, exclusief of terras","Mezzanine, exclusive or terrace")],
                [t("Muziek","Music"),t("Podium & eigen geluidsinstallatie","Stage & own sound system")],
                [t("Eindtijd","End time"),t("Tot 03:00 in het weekend","Until 03:00 at weekends")],
                [t("Event manager","Event manager"),t("Vaste begeleiding","Dedicated coordinator")],
              ].map(([k, v]) => <DetailRow key={k} k={k} v={v} />)}
            </ul>
            <a href="offerte.html" className="btn-primary mt-8 inline-flex items-center gap-3 px-7 py-4 text-sm font-medium tracking-wide">
              {t("Offerte aanvragen","Request a quote")} →
            </a>
          </div>
          <div className="md:col-span-8">
            <p className="text-anthracite/80 text-lg leading-relaxed">
              {t("Of u nu een jaarlijkse personeelsavond, een productlancering of een jubileumfeest organiseert — Pompstation biedt de ruimte, de sfeer en de ervaring om er een avond van te maken die uw collega's nog lang herinneren.","Whether you are organising an annual staff evening, a product launch or an anniversary party — Pompstation offers the space, the atmosphere and the experience to create an evening your colleagues will remember for years.")}
            </p>
            <p className="mt-5 text-anthracite/80 text-lg leading-relaxed">
              {t("Wij verzorgen het volledige traject: van de capaciteitsindeling en het menu tot de muziek en de timing. Uw event manager is vanaf de eerste afspraak tot het einde van de avond het vaste aanspreekpunt.","We handle the complete journey: from capacity planning and the menu to the music and timing. Your event manager is the single point of contact from the first meeting to the end of the evening.")}
            </p>
            <div className="mt-10 grid grid-cols-2 gap-4">
              <div className="overflow-hidden" style={{height:'280px'}}>
                <Photo src="images/event-staand.jpg" alt="Feest in de vide" className="w-full h-full" position="center 50%" />
              </div>
              <div className="overflow-hidden" style={{height:'280px'}}>
                <Photo src="images/cocktail.jpg" alt="Cocktails bij het bedrijfsfeest" className="w-full h-full" position="center 30%" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bordeaux text-cream py-16 md:py-20">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <h2 className="h-display text-cream text-4xl md:text-6xl">{t("Bedrijfsfeest plannen?","Planning a company party?")}</h2>
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
