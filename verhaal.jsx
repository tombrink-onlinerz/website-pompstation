const t = window._t || ((nl) => nl);
/* ============================================================
   VERHAAL (STORY) PAGE
   ============================================================ */

const TIMELINE = [
  { year: "1912", title: t("Gebouwd als watergemaal","Built as a waterworks"), body: t("Opgetrokken in de karakteristieke stijl van de Amsterdamse School. In de machinekamer — nu het restaurant — stonden vier gigantische stoompompen die het water de stad uit pompten.","Built in the distinctive Amsterdam School style. In the machine room — now the restaurant — four enormous steam pumps pushed water out of the city.") },
  { year: "1940", title: t("Geëlektrificeerd","Electrified"), body: t("De stoommachines maken plaats voor elektrische pompen. Bij ernstige storingen wekken dieselmotoren de benodigde stroom op.","The steam engines make way for electric pumps. In the event of serious failures, diesel motors generate the necessary power.") },
  { year: t("jaren ’80","1980s"), title: t("Pompen naar de kelder","Pumps moved to the basement"), body: t("De pompen verhuizen naar de kelder, direct onder de vloer. Ze draaien nog altijd — op regenachtige dagen voel je een zachte trilling door het gebouw.","The pumps move to the basement, directly beneath the floor. They still run — on rainy days you can feel a gentle vibration through the building.") },
  { year: "1996", title: t("Buiten dienst","Decommissioned"), body: t("Waternet neemt een nieuw gemaal in gebruik, 150 meter verderop. Het monument wacht op een tweede leven.","Waternet opens a new pumping station 150 metres away. The monument awaits a new life.") },
  { year: t("nu","today"), title: t("Restaurant & podium","Restaurant & stage"), body: t("Vandaag dineren, borrelen en dansen gasten onder een plafond van twaalf meter, met live jazz en de architectuur als hoofdrolspeler.","Today guests dine, drink and dance beneath a twelve-metre ceiling, with live jazz and the architecture as the star of the show.") },
];

const REVIEWS = [
  { q: t("Geweldige plek voor fijnproevers. Verschillende formules met heerlijke vlees-, vis- en vegetarische opties.","A great spot for food lovers. Different menus with delicious meat, fish and vegetarian options."), a: "Guest · Google" },
  { q: t("Fantastisch eten en buitengewone service — een van mijn favoriete plekken in Amsterdam. De live jamsessies zijn de kers op de taart.","Fantastic food and extraordinary service — one of my favourite spots in Amsterdam. The live jam sessions are the cherry on top."), a: "Guest · Google" },
  { q: t("Nog nooit zo'n heerlijke steak gegeten. Smolt op de tong. Vriendelijke bediening en goede service.","Never had such a delicious steak. Melted on the tongue. Friendly staff and great service."), a: "Guest · Eet.nu" },
];

function VerhaalPage() {
  useFadeIn();
  return (
    <div className="font-sans text-anthracite">
      <SiteNav current="verhaal" />

      <PageHero
        kicker={t("Anno 1912 · Amsterdamse School","Est. 1912 · Amsterdam School")}
        title={t("Ons","Our")}
        titleAccent={t("verhaal","story")}
        lead={t("Een monumentaal watergemaal dat de stad meer dan tachtig jaar droog hield — en nu een van de meest bijzondere eetzalen van Amsterdam is.","A monumental waterworks that kept the city dry for more than eighty years — and is now one of Amsterdam's most extraordinary dining rooms.")}
        image="images/historic-1912.jpg"
        position="center 40%" />

      {/* Intro statement */}
      <section className="bg-cream py-20 md:py-32 border-b border-anthracite/10">
        <div className="max-w-[1000px] mx-auto px-5 md:px-10">
          <div className="eyebrow text-bordeaux mb-6">{t("Het gebouw","The building")}</div>
          <p className="h-serif text-anthracite text-3xl md:text-5xl lg:text-[56px] leading-[1.08]">
            {t("Het robuuste, industriële pand is gebouwd in ","This robust, industrial building was constructed in ")}<em className="text-bordeaux">1912</em>,
            {t(" in de karakteristieke stijl van de Amsterdamse School. Van buiten onopvallend — van binnen "," in the distinctive style of the Amsterdam School. Unassuming from the outside — within, ")}<em className="text-bordeaux">{t("adembenemend hoog.","breathtakingly high.")}</em>
          </p>
        </div>
      </section>

      {/* Two-up photo + text */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 grid md:grid-cols-12 gap-8 md:gap-14 items-center">
          <div className="md:col-span-5 fade-up">
            <Photo src="images/interior-vide.jpg" alt="De hoge machinezaal, nu het restaurant" className="w-full aspect-[3/4]" position="center 35%" />
            <div className="mt-3 font-mono text-[10px] tracking-[0.18em] uppercase text-anthracite/55">{t("De voormalige machinezaal · vandaag","The former machine hall · today")}</div>
          </div>
          <div className="md:col-span-7 fade-up">
            <h2 className="h-display text-anthracite text-4xl md:text-6xl mb-6">{t("Waar ooit de pompen stonden","Where the pumps once stood")}</h2>
            <div className="space-y-4 text-anthracite/75 text-lg leading-relaxed">
              <p>{t("Vroeger stonden hier vier reusachtige waterpompen die via enorme buizen in de kelder en de watertoren het water de stad in pompten. Een technisch tijdschrift uit 1941 noemde de machinekamer “een sieraad voor de stad Amsterdam”.","Four enormous water pumps once stood here, pushing water into the city through vast pipes in the basement and the water tower. A technical journal from 1941 called the machine room “an ornament to the city of Amsterdam”.")}</p>
              <p>{t("In de jaren tachtig verhuisden de pompen naar de kelder, direct onder de vloer. Ze draaien er nog steeds. Vooral op regenachtige dagen gaan ze het water de stad uit pompen — soms te merken aan een zachte trilling die door het hele gebouw resoneert.","In the 1980s the pumps moved to the basement, directly beneath the floor. They still run today — on rainy days you may notice a gentle vibration that resonates through the entire building.")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-bordeaux text-cream py-20 md:py-32">
        <div className="max-w-[1100px] mx-auto px-5 md:px-10">
          <div className="eyebrow text-brass mb-4">{t("Tijdlijn","Timeline")}</div>
          <h2 className="h-display text-cream text-5xl md:text-7xl mb-12 md:mb-16">{t("Ruim een eeuw","Over a century")}<br /><span className="h-serif italic normal-case font-normal text-cream/80">{t("in functie.","in service.")}</span></h2>
          <div className="space-y-0">
            {TIMELINE.map((t, i) =>
            <div key={i} className="fade-up grid md:grid-cols-12 gap-4 md:gap-8 py-8 border-t border-cream/15 items-baseline">
              <div className="md:col-span-3 h-display text-brass text-4xl md:text-5xl">{t.year}</div>
              <div className="md:col-span-9">
                <h3 className="h-serif text-2xl md:text-3xl text-cream">{t.title}</h3>
                <p className="mt-2 text-cream/70 leading-relaxed max-w-2xl">{t.body}</p>
              </div>
            </div>
            )}
          </div>
        </div>
      </section>

      {/* Chef / kitchen */}
      <section className="bg-cream py-16 md:py-24 border-b border-anthracite/10">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 grid md:grid-cols-12 gap-8 md:gap-14 items-center">
          <div className="md:col-span-7 order-2 md:order-1 fade-up">
            <div className="eyebrow text-bordeaux mb-4">{t("De keuken","The kitchen")}</div>
            <h2 className="h-display text-anthracite text-4xl md:text-6xl mb-6">{t("Lokaal, seizoens­gebonden, duurzaam","Local, seasonal, sustainable")}</h2>
            <div className="space-y-4 text-anthracite/75 text-lg leading-relaxed">
              <p>{t("Pompstation stond lang bekend om zijn vlees — de carpaccio en tournedos van Noord-Hollands Holstein-rund werden meermaals geprezen in het Parool. Die traditie blijft, met dry-aged steaks uit eigen kast.","Pompstation has long been known for its meat — the carpaccio and tournedos of North Holland Holstein beef were repeatedly praised in the press. That tradition lives on with dry-aged steaks from our own cabinet.")}</p>
              <p>{t("Daarnaast ligt de nadruk steeds meer op vis en vegetarisch: verfijnde gerechten van lokale, biologische seizoensproducten. Een keuken die meebeweegt met wat de streek te bieden heeft.","Increasingly the focus is on fish and vegetarian: refined dishes of local, organic seasonal produce. A kitchen that moves with what the region has to offer.")}</p>
            </div>
            <a href="menu.html" className="mt-8 inline-flex items-center gap-2 text-bordeaux font-medium group">{t("Bekijk het menu","View the menu")} <span className="transition-transform group-hover:translate-x-1">→</span></a>
          </div>
          <div className="md:col-span-5 order-1 md:order-2 fade-up">
            <Photo src="images/food-steak.jpg" alt="Gerechten uit de keuken van Pompstation" className="w-full aspect-[4/5]" position="center 30%" />
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-cream-warm py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10">
          <div className="eyebrow text-bordeaux mb-10 md:mb-14 text-center">{t("Wat gasten zeggen","What guests say")}</div>
          <div className="grid md:grid-cols-3 gap-5 md:gap-6">
            {REVIEWS.map((r, i) =>
            <blockquote key={i} className="fade-up bg-cream border border-anthracite/10 p-7 md:p-8 flex flex-col">
              <div className="h-serif italic text-bordeaux text-4xl leading-none mb-3">“</div>
              <p className="text-anthracite/85 leading-relaxed flex-1">{r.q}</p>
              <footer className="mt-5 text-sm font-mono text-anthracite/55">— {r.a}</footer>
            </blockquote>
            )}
          </div>
        </div>
      </section>

      <div className="fade-up"><SfeerGallery lead={t("Van de hoge machinezaal tot kaarslicht op tafel — een indruk van het monument zoals het vandaag leeft.","From the soaring machine hall to candlelight at the table — an impression of the monument as it lives today.")} /></div>

      {/* CTA */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-[1000px] mx-auto px-5 md:px-10 text-center">
          <h2 className="h-display text-anthracite text-5xl md:text-7xl">{t("Kom het zelf ervaren","Come and experience it yourself")}</h2>
          <p className="mt-5 text-anthracite/70 text-lg max-w-xl mx-auto">{t("Reserveer een tafel voor diner met live jazz, of ontdek wat er mogelijk is voor uw groep of event.","Reserve a table for dinner with live jazz, or discover what is possible for your group or event.")}</p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <a href="#" onClick={PS.openReservation} className="btn-primary px-7 py-4 text-sm md:text-base font-medium tracking-wide">{t("Reserveer een tafel","Reserve a table")}</a>
            <a href="groepen.html" className="btn-outline text-anthracite px-7 py-4 text-sm md:text-base font-medium tracking-wide hover:bg-bordeaux hover:text-cream transition-colors">{t("Afhuren & groepen","Private hire & groups")}</a>
          </div>
        </div>
      </section>

      <SiteFooter />
      <StickyMobileCTA />
    </div>);
}

ReactDOM.createRoot(document.getElementById("root")).render(<VerhaalPage />);
