function App() {
  const t = window._t || ((nl) => nl);

  const options = [
    {
      title: t("Groepsdiner", "Group Dinner"),
      sub: t("Vanaf 10 personen", "From 10 persons"),
      desc: t("3, 4 of 5 gangen — vanaf €47 p.p. Keuze uit vlees, vis of vega per gang.", "3, 4 or 5 courses — from €47 p.p. Choice of meat, fish or veg."),
      href: "groepsdiner.html",
      image: "images/groepsdiner-overhead.jpg",
    },
    {
      title: t("Groepslunch", "Group Lunch"),
      sub: t("Besloten teamlunch", "Private team lunch"),
      desc: t("Een verzorgde lunch in monumentale setting. Ideaal voor teamdagen en bijeenkomsten.", "A catered lunch in a monumental setting. Ideal for team days."),
      href: "groepslunch.html",
      image: "images/terras-groep.jpg",
    },
    {
      title: t("Bedrijfsborrel", "Corporate Drinks"),
      sub: t("Staand of zittend", "Standing or seated"),
      desc: t("Borrelen met uw team of relaties in een unieke industriële sfeer. Catering op maat.", "Drinks with your team or clients in a unique industrial setting."),
      href: "bedrijfsborrel.html",
      image: "images/event-staand.jpg",
    },
    {
      title: t("Bedrijfsdiner", "Corporate Dinner"),
      sub: t("Stijlvol zakelijk", "Stylish business dining"),
      desc: t("Zakelijk diner in een monumentale ruimte. Maatwerk voor 10 tot 180 personen.", "Business dinner in a monumental space. Custom for 10 to 180 persons."),
      href: "bedrijfsdiner.html",
      image: "images/service-candles.jpg",
    },
    {
      title: t("Bedrijfsfeest", "Company Party"),
      sub: t("Tot 400 personen", "Up to 400 persons"),
      desc: t("Uw bedrijfsfeest op een unieke locatie. Pompstation biedt ruimtes tot 400 personen.", "Your company party at a unique venue. Up to 400 persons."),
      href: "bedrijfsfeest.html",
      image: "images/event-fullhall.jpg",
    },
    {
      title: t("Vergadering", "Meeting"),
      sub: t("Met catering", "With catering"),
      desc: t("Inspirerende vergaderruimtes met lunch of borrel-catering in Amsterdam.", "Inspiring meeting rooms with lunch or drinks catering in Amsterdam."),
      href: "vergadering.html",
      image: "images/interior-vide.jpg",
    },
    {
      title: t("Bruiloft", "Wedding"),
      sub: t("Trouwlocatie Amsterdam", "Wedding venue Amsterdam"),
      desc: t("Ceremony, bruiloftsdiner en feest in een rijksmonument. Tot 400 gasten.", "Ceremony, wedding dinner and party in a listed monument. Up to 400 guests."),
      href: "bruiloft.html",
      image: "images/bride.jpg",
    },
  ];

  return (
    <div className="font-sans text-anthracite">
      <SiteNav current="groepen" />

      <PageHero
        kicker={t("Groepen & Afhuren", "Groups & Private Hire")}
        title={t("Een locatie", "A venue")}
        titleAccent={t("voor elk evenement", "for every event")}
        lead={t(
          "Van groepsdiner tot bedrijfsfeest, van teamlunch tot bruiloft. Pompstation biedt unieke ruimtes voor groepen vanaf 10 personen.",
          "From group dinner to company party, from team lunch to wedding. Pompstation offers unique spaces for groups from 10 persons."
        )}
        image="images/event-fullhall.jpg"
        position="center 40%"
        height="h-[55vh] min-h-[380px]"
        ctas={[
          { label: t("Offerte aanvragen", "Request a quote"), href: "offerte.html" },
          { label: t("Brochure downloaden", "Download brochure"), href: "brochure-corporate.html" },
        ]}
      />

      {/* Overview grid */}
      <section className="bg-cream py-20 md:py-28 border-b border-anthracite/10">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10">
          <div className="eyebrow text-bordeaux mb-3">{t("Mogelijkheden", "Options")}</div>
          <h2 className="h-display text-anthracite text-4xl md:text-6xl mb-12">
            {t("Wat zoekt u?", "What are you looking for?")}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {options.map((o) => (
              <a
                key={o.href}
                href={o.href}
                className="group block bg-white border border-anthracite/10 card-lift overflow-hidden"
              >
                <div className="overflow-hidden" style={{ height: "220px" }}>
                  <Photo
                    src={o.image}
                    alt={o.title}
                    className="w-full h-full transition-transform duration-700 group-hover:scale-105"
                    position="center"
                  />
                </div>
                <div className="p-6">
                  <div className="eyebrow text-bordeaux mb-2">{o.sub}</div>
                  <h3 className="h-display text-anthracite text-3xl mb-2">{o.title}</h3>
                  <p className="text-anthracite/70 text-sm leading-relaxed">{o.desc}</p>
                  <span className="mt-4 inline-block text-bordeaux text-sm font-medium tracking-wide">
                    {t("Meer informatie", "More info")} →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Capacity bar */}
      <section className="bg-anthracite text-cream py-14">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            ["400", t("max. personen", "max. persons")],
            ["1912", t("gebouwd", "built")],
            ["4", t("unieke ruimtes", "unique spaces")],
            ["10+", t("min. personen", "min. persons")],
          ].map(([num, label]) => (
            <div key={num}>
              <div className="h-display text-cream text-5xl md:text-7xl">{num}</div>
              <div className="eyebrow text-cream/50 mt-2">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-bordeaux text-cream py-16 md:py-20">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <h2 className="h-display text-cream text-4xl md:text-6xl">
              {t("Direct een offerte?", "Request a quote?")}
            </h2>
            <p className="mt-3 text-cream/75 text-lg">
              {t("We reageren binnen 1 werkdag.", "We respond within 1 business day.")}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="offerte.html"
              className="inline-flex items-center justify-center gap-2 bg-cream text-bordeaux px-7 py-4 font-medium text-sm tracking-wide hover:bg-cream/90 transition-colors"
            >
              {t("Offerte aanvragen", "Request quote")} →
            </a>
            <a
              href="tel:+31202279885"
              className="inline-flex items-center justify-center gap-2 border border-cream/30 text-cream px-7 py-4 font-medium text-sm tracking-wide hover:border-cream/60 transition-colors"
            >
              020 227 9885
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
