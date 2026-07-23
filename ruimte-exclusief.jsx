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
        kicker={t("Ruimtes · Volledig exclusief","Spaces · Fully exclusive")}
        title={t("Uw avond,","Your evening,")}
        titleAccent={t("onze locatie","our venue")}
        lead={t("De gehele locatie voor uw eigen avond — bruiloften, galadiners, productlanceringen. Voor tot 360 gasten.","The entire venue for your own evening — weddings, gala dinners, product launches. For up to 360 guests.")}
        image="images/event-fullhall.jpg"
        position="center 40%"
      />

      <section className="bg-cream py-20 md:py-28 border-b border-anthracite/10">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <div className="eyebrow text-bordeaux mb-4">{t("Details","Details")}</div>
            <ul className="space-y-5">
              {[
                [t("Capaciteit","Capacity"),t("tot 360 gasten","up to 360 guests")],
                [t("Inclusief","Included"),t("Zaal, vide & terras","Hall, mezzanine & terrace")],
                [t("Catering","Catering"),t("Volledig verzorgd","Fully catered")],
                [t("A/V","A/V"),t("Professioneel systeem","Professional system")],
                [t("Bar","Bar"),t("Meerdere bars mogelijk","Multiple bars possible")],
                [t("Ervaring","Experience"),t("15+ jaar evenementen","15+ years of events")],
              ].map(([k,v]) => <DetailRow key={k} k={k} v={v} />)}
            </ul>
            <a href="contact.html" className="btn-primary mt-8 inline-flex items-center gap-3 px-7 py-4 text-sm font-medium tracking-wide">
              {t("Vraag een offerte aan","Request a quote")} →
            </a>
          </div>
          <div className="md:col-span-8">
            <p className="text-anthracite/80 text-lg leading-relaxed">
              {t("Bij een volledig exclusieve huur staan de zaal, de vide en het terras volledig tot uw beschikking. U bepaalt de inrichting, het programma en het menu — wij zorgen voor de rest.","With fully exclusive hire, the hall, the mezzanine and the terrace are entirely at your disposal. You decide the layout, the programme and the menu — we take care of the rest.")}
            </p>
            <p className="mt-5 text-anthracite/80 text-lg leading-relaxed">
              {t("Pompstation heeft meer dan 15 jaar ervaring met grootschalige evenementen: bruiloften, galadiners, bedrijfsfeesten en productlanceringen. Ons eventteam denkt van begin tot eind met u mee.","Pompstation has more than 15 years of experience with large-scale events: weddings, gala dinners, corporate parties and product launches. Our event team thinks along with you from start to finish.")}
            </p>
            <div className="mt-10 grid grid-cols-2 gap-4">
              <div className="overflow-hidden" style={{height:'260px'}}>
                <Photo src="images/bride.jpg" alt={t("Bruiloft bij Pompstation","Wedding at Pompstation")} className="w-full h-full" position="center 25%" />
              </div>
              <div className="overflow-hidden" style={{height:'260px'}}>
                <Photo src="images/restaurant-zaal.jpg" alt={t("De grote zaal","The grand hall")} className="w-full h-full" position="center 20%" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bordeaux text-cream py-16 md:py-20">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <h2 className="h-display text-cream text-4xl md:text-6xl">{t("Uw evenement plannen?","Planning your event?")}</h2>
            <p className="mt-3 text-cream/75 text-lg">{t("Ons eventteam helpt u graag verder.","Our event team is happy to help.")}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="contact.html" className="inline-flex items-center justify-center gap-2 bg-cream text-bordeaux px-7 py-4 font-medium text-sm tracking-wide hover:bg-cream/90 transition-colors">
              {t("Neem contact op","Get in touch")} →
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
