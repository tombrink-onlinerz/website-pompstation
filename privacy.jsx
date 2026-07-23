const t = window._t || ((nl) => nl);
/* ============================================================
   PRIVACYVERKLARING
   ============================================================ */

const PRIVACY_SECTIONS = [
  { h: t("Wie wij zijn","Who we are"), p: [t("Restaurant Pompstation (Zeeburgerdijk 52, 1094 AE Amsterdam) is verwerkingsverantwoordelijke voor de verwerking van persoonsgegevens zoals beschreven in deze verklaring. Wij verwerken gegevens in overeenstemming met de Algemene Verordening Gegevensbescherming (AVG).","Restaurant Pompstation (Zeeburgerdijk 52, 1094 AE Amsterdam) is the controller for the processing of personal data as described in this statement. We process data in accordance with the General Data Protection Regulation (GDPR).")] },
  { h: t("Welke gegevens we verwerken","What data we process"), p: [t("Naam en contactgegevens, details van je reservering of evenement, betaalgegevens (verwerkt via onze betaalprovider) en alle informatie die je achterlaat via onze formulieren, e-mail of telefonisch contact.","Name and contact details, details of your reservation or event, payment data (processed via our payment provider) and any information you leave through our forms, email or telephone contact.")] },
  { h: t("Doeleinden & grondslag","Purposes & legal basis"), p: [t("We gebruiken je gegevens om reserveringen en events af te handelen, te factureren, contact met je op te nemen en onze dienstverlening te verbeteren. De grondslag is de uitvoering van de overeenkomst, een wettelijke verplichting of jouw toestemming.","We use your data to handle reservations and events, to invoice, to contact you and to improve our services. The legal basis is the performance of the contract, a legal obligation or your consent.")] },
  { h: t("Bewaartermijnen","Retention periods"), p: [t("We bewaren je gegevens niet langer dan nodig voor de genoemde doeleinden. Financiële en administratieve gegevens bewaren we conform de wettelijke bewaarplicht van zeven jaar.","We do not keep your data longer than necessary for the purposes stated. Financial and administrative data are kept in accordance with the statutory retention period of seven years.")] },
  { h: t("Delen met derden","Sharing with third parties"), p: [t("We delen gegevens uitsluitend met partijen die ons helpen onze diensten te leveren — zoals ons reserveringssysteem, onze betaalprovider en IT-leveranciers — met passende verwerkersafspraken. Wij verkopen je gegevens nooit aan derden.","We share data only with parties that help us deliver our services — such as our reservation system, our payment provider and IT suppliers — under appropriate data processing agreements. We never sell your data to third parties.")] },
  { h: t("Cookies","Cookies"), p: [t("Onze website gebruikt functionele cookies om de site te laten werken en analytische cookies om het gebruik te meten. Je kunt cookies altijd beheren of verwijderen via de instellingen van je browser.","Our website uses functional cookies to make the site work and analytical cookies to measure usage. You can always manage or delete cookies via your browser settings.")] },
  { h: t("Jouw rechten","Your rights"), p: [t("Je hebt het recht op inzage, correctie, verwijdering, beperking van en bezwaar tegen de verwerking van je gegevens, en op gegevensoverdraagbaarheid. Stuur je verzoek naar info@pompstation.nu; we reageren binnen de wettelijke termijn.","You have the right to access, rectify, erase, restrict and object to the processing of your data, and to data portability. Send your request to info@pompstation.nu; we respond within the statutory period.")] },
  { h: t("Beveiliging","Security"), p: [t("We nemen passende technische en organisatorische maatregelen om je persoonsgegevens te beschermen tegen verlies of onrechtmatige verwerking.","We take appropriate technical and organisational measures to protect your personal data against loss or unlawful processing.")] },
  { h: t("Vragen of een klacht","Questions or a complaint"), p: [t("Heb je vragen over deze verklaring, mail dan info@pompstation.nu. Je hebt ook het recht om een klacht in te dienen bij de Autoriteit Persoonsgegevens.","If you have questions about this statement, email info@pompstation.nu. You also have the right to lodge a complaint with the Dutch Data Protection Authority.")] },
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
          <p className="mt-4 font-mono text-xs tracking-[0.12em] uppercase text-anthracite/50">{t("Laatst bijgewerkt · juni 2026","Last updated · June 2026")}</p>
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
            {t("Voorbeeldtekst — laat de definitieve privacyverklaring juridisch controleren voordat de site live gaat.","Sample text — have the final privacy statement checked legally before the site goes live.")}
          </p>
        </div>
      </main>

      <SiteFooter />
      <StickyMobileCTA />
    </div>);
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <LegalPage
    kicker={t("Jouw gegevens","Your data")}
    title={t("Privacyverklaring","Privacy statement")}
    intro={t("We gaan zorgvuldig om met je persoonsgegevens. In deze verklaring lees je welke gegevens we verzamelen, waarom, en welke rechten je hebt.","We handle your personal data with care. In this statement you can read what data we collect, why, and what rights you have.")}
    sections={PRIVACY_SECTIONS} />
);
