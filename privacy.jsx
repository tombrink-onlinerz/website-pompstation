const t = window._t || ((nl) => nl);
/* ============================================================
   PRIVACYVERKLARING
   ============================================================ */

const PRIVACY_SECTIONS = [
  { h: "Wie wij zijn", p: ["Restaurant Pompstation (Zeeburgerdijk 52, 1094 AE Amsterdam) is verwerkingsverantwoordelijke voor de verwerking van persoonsgegevens zoals beschreven in deze verklaring. Wij verwerken gegevens in overeenstemming met de Algemene Verordening Gegevensbescherming (AVG)."] },
  { h: "Welke gegevens we verwerken", p: ["Naam en contactgegevens, details van je reservering of evenement, betaalgegevens (verwerkt via onze betaalprovider) en alle informatie die je achterlaat via onze formulieren, e-mail of telefonisch contact."] },
  { h: "Doeleinden & grondslag", p: ["We gebruiken je gegevens om reserveringen en events af te handelen, te factureren, contact met je op te nemen en onze dienstverlening te verbeteren. De grondslag is de uitvoering van de overeenkomst, een wettelijke verplichting of jouw toestemming."] },
  { h: "Bewaartermijnen", p: ["We bewaren je gegevens niet langer dan nodig voor de genoemde doeleinden. Financiële en administratieve gegevens bewaren we conform de wettelijke bewaarplicht van zeven jaar."] },
  { h: "Delen met derden", p: ["We delen gegevens uitsluitend met partijen die ons helpen onze diensten te leveren — zoals ons reserveringssysteem, onze betaalprovider en IT-leveranciers — met passende verwerkersafspraken. Wij verkopen je gegevens nooit aan derden."] },
  { h: "Cookies", p: ["Onze website gebruikt functionele cookies om de site te laten werken en analytische cookies om het gebruik te meten. Je kunt cookies altijd beheren of verwijderen via de instellingen van je browser."] },
  { h: "Jouw rechten", p: ["Je hebt het recht op inzage, correctie, verwijdering, beperking van en bezwaar tegen de verwerking van je gegevens, en op gegevensoverdraagbaarheid. Stuur je verzoek naar info@pompstation.nu; we reageren binnen de wettelijke termijn."] },
  { h: "Beveiliging", p: ["We nemen passende technische en organisatorische maatregelen om je persoonsgegevens te beschermen tegen verlies of onrechtmatige verwerking."] },
  { h: "Vragen of een klacht", p: ["Heb je vragen over deze verklaring, mail dan info@pompstation.nu. Je hebt ook het recht om een klacht in te dienen bij de Autoriteit Persoonsgegevens."] },
];

function LegalPage({ kicker, title, intro, sections }) {
  useFadeIn();
  return (
    <div className="font-sans text-anthracite">
      <SiteNav transparentTop={false} />

      <header className="bg-cream pt-28 md:pt-36 pb-12 md:pb-16 border-b border-anthracite/10">
        <div className="max-w-[900px] mx-auto px-5 md:px-10">
          <div className="eyebrow text-bordeaux mb-4">{kicker}</div>
          <h1 className="h-display text-anthracite text-5xl md:text-7xl">{title}</h1>
          <p className="mt-4 font-mono text-xs tracking-[0.12em] uppercase text-anthracite/50">Laatst bijgewerkt · juni 2026</p>
        </div>
      </header>

      <main className="bg-cream py-14 md:py-20">
        <div className="max-w-[900px] mx-auto px-5 md:px-10">
          <p className="text-anthracite/70 leading-relaxed text-lg mb-12 md:mb-16">{intro}</p>

          {sections.map((s, i) =>
          <section key={i} className="fade-up grid md:grid-cols-12 gap-2 md:gap-6 py-7 border-t border-anthracite/12">
            <div className="md:col-span-2 h-display text-bordeaux text-2xl md:text-3xl">{String(i + 1).padStart(2, "0")}</div>
            <div className="md:col-span-10">
              <h2 className="h-serif text-2xl md:text-3xl text-anthracite mb-3">{s.h}</h2>
              {s.p.map((para, j) => <p key={j} className="text-anthracite/75 leading-relaxed mb-3 max-w-2xl">{para}</p>)}
            </div>
          </section>
          )}

          <p className="mt-12 p-5 bg-cream-warm border border-anthracite/10 text-sm text-anthracite/60 font-mono leading-relaxed">
            Voorbeeldtekst — laat de definitieve privacyverklaring juridisch controleren voordat de site live gaat.
          </p>
        </div>
      </main>

      <SiteFooter />
      <StickyMobileCTA />
    </div>);
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <LegalPage
    kicker="Jouw gegevens"
    title="Privacyverklaring"
    intro="We gaan zorgvuldig om met je persoonsgegevens. In deze verklaring lees je welke gegevens we verzamelen, waarom, en welke rechten je hebt."
    sections={PRIVACY_SECTIONS} />
);
