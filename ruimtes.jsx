function App() {
const t = window._t || ((nl) => nl);
  useEffect(() => {
    const els = document.querySelectorAll(".fade-up");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="font-sans text-anthracite">
      <SiteNav current="ruimtes" />

      <PageHero
        kicker={t("Onze locatie","Our venue")}
        title={t("Ruimtes","Spaces")}
        titleAccent={t("& sfeer","& atmosphere")}
        lead={t("Van een tafel voor twee tot een gala voor driehonderd — Pompstation biedt een ruimte voor elk gezelschap.","From a table for two to a gala for three hundred — Pompstation has a space for every occasion.")}
        image="images/restaurant-zaal.jpg"
        position="center 20%"
      />

      {/* Gebouw intro */}
      <section className="bg-cream py-20 md:py-28 border-b border-anthracite/10">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5 fade-up">
            <div className="eyebrow text-bordeaux mb-4">{t("Het gebouw","The building")}</div>
            <h2 className="h-display text-anthracite text-4xl md:text-6xl">
              {t("Een monument","A monument")}<br />
              <span className="h-serif italic normal-case font-normal text-bordeaux">van 1912.</span>
            </h2>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[["12m","vrije hoogte"],["360","max gasten"],["4","ruimtes"]].map(([n,l]) => (
                <div key={l}>
                  <div className="h-display text-bordeaux text-4xl">{n}</div>
                  <div className="mt-1 text-xs text-anthracite/60 font-mono uppercase tracking-wider">{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="md:col-span-7 fade-up">
            <p className="text-anthracite/80 text-lg leading-relaxed">
              Pompstation is een voormalig watergemaal in Amsterdam-Oost, omgebouwd tot een van de meest bijzondere restaurantlocaties van de stad. De industriële hal met zijn plafond van 12 meter hoog biedt ruimte voor zowel een romantisch diner als een groot evenement.
            </p>
            <p className="mt-5 text-anthracite/80 text-lg leading-relaxed">
              Afhankelijk van de gelegenheid kiest u voor de restaurantzaal, de vide, het terras of de gehele locatie exclusief. Elke ruimte heeft zijn eigen karakter — maar deelt dezelfde sfeer.
            </p>
          </div>
        </div>
      </section>

      {/* Ruimtes grid */}
      <section className="bg-cream-warm py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10">
          <h2 className="h-display text-anthracite text-4xl md:text-6xl mb-12 md:mb-16 fade-up">
            {t("Vier ruimtes,","Four spaces,")}<br />
            <span className="h-serif italic normal-case font-normal text-bordeaux">{t("één locatie.","one venue.")}</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 fade-up">
            {[
              { naam:"Het restaurant", cap:"2–180", sub:"personen", img:"images/restaurant-zaal.jpg", pos:"center 20%", href:"ruimte-restaurant.html", body:"De grote zaal met open keuken, kaarslicht en live jazz. Voor diner, lunch of een besloten avond." },
              { naam:t("De vide","The mezzanine"), cap:"20–100", sub:"personen", img:"images/bride-vide.jpg", pos:"center 30%", href:"ruimte-vide.html", body:"De verhoogde galerij met uitzicht op de zaal. Privé, maar toch deel van de sfeer." },
              { naam:t("Het terras","The terrace"), cap:"20–200", sub:"personen", img:"images/terras-outdoor.jpg", pos:"center 50%", href:"ruimte-terras.html", body:"Omringd door groen, onder een open hemel. Reserveren voor tafels en groepen is mogelijk." },
              { naam:t("Volledig exclusief","Fully exclusive"), cap:"tot 360", sub:"personen", img:"images/live-band-vide.jpg", pos:"center 40%", href:"ruimte-exclusief.html", body:"De hele locatie voor uw eigen avond — bruiloften, galadiners en productlanceringen." },
            ].map((r, i) => (
              <a key={i} href={r.href} className="group flex flex-col bg-cream border border-anthracite/10 hover:border-bordeaux transition-colors">
                <div className="overflow-hidden" style={{height:'220px'}}>
                  <Photo src={r.img} alt={r.naam} className="w-full h-full transition-transform duration-700 group-hover:scale-105" position={r.pos} />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="h-display text-bordeaux text-4xl leading-none">{r.cap}</div>
                  <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-anthracite/50 mt-0.5 mb-4">{r.sub}</div>
                  <h3 className="h-serif text-anthracite text-xl leading-snug">{r.naam}</h3>
                  <p className="mt-3 text-sm text-anthracite/65 leading-relaxed flex-1">{r.body}</p>
                  <div className="mt-5 inline-flex items-center gap-2 text-bordeaux text-sm font-medium group-hover:gap-3 transition-all">
                    Bekijk ruimte <span>→</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(App));
