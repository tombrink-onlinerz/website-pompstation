const t = window._t || ((nl) => nl);
/* ============================================================
   ALGEMENE VOORWAARDEN
   ============================================================ */

const AV_SECTIONS = [
  { h: "Toepasselijkheid", p: ["Deze algemene voorwaarden gelden voor alle reserveringen, bestellingen, evenementen en afhuur bij Restaurant Pompstation, Zeeburgerdijk 52, 1094 AE Amsterdam. Door een reservering te plaatsen of gebruik te maken van onze diensten ga je met deze voorwaarden akkoord."] },
  { h: "Reserveringen", p: ["Reserveren kan online via onze reserveringsmodule of telefonisch. Een reservering is definitief zodra je een bevestiging hebt ontvangen. Bij grote drukte kunnen wij een tafeltijd hanteren; dit melden wij vooraf."] },
  { h: "Annulering & no-show", p: ["Reguliere tafelreserveringen kun je tot 24 uur van tevoren kosteloos annuleren of wijzigen. Bij een no-show of een late annulering van een grote tafel kunnen wij een bedrag per persoon in rekening brengen."] },
  { h: "Groepen, events & afhuur", p: ["Voor groepen vanaf 10 personen en voor (gedeeltelijke) afhuur gelden aparte afspraken. Aanbetaling, een minimale besteding of omzetgarantie en de annuleringstermijnen worden vastgelegd in de offerte. Het definitieve aantal gasten geef je uiterlijk vijf werkdagen voor de datum aan ons door."] },
  { h: "Prijzen & betaling", p: ["Alle prijzen zijn in euro's en inclusief btw. Wij accepteren geen contant geld — betalen kan met pin of creditcard. De rekening wordt op de avond zelf voldaan, tenzij schriftelijk anders is overeengekomen."] },
  { h: "Allergenen & dieetwensen", p: ["Geef allergieën en dieetwensen vooraf of bij aankomst door, zodat wij hier rekening mee kunnen houden. Ondanks alle zorg kunnen wij de aanwezigheid van sporen van allergenen niet volledig uitsluiten."] },
  { h: "Huisregels & toegang", p: ["We willen dat iedereen zich welkom voelt. Onze medewerkers kunnen gasten bij wangedrag de toegang weigeren. Onze live muziek is bedoeld als achtergrond; tijdens privé-events kan de reguliere programmering vervallen."] },
  { h: "Aansprakelijkheid", p: ["Pompstation is niet aansprakelijk voor verlies, diefstal of beschadiging van persoonlijke eigendommen, behoudens in geval van opzet of grove nalatigheid van onze kant."] },
  { h: "Cadeaubonnen", p: ["Cadeaubonnen zijn inwisselbaar voor eten en drinken, niet voor contant geld, en zijn geldig tot de op de bon vermelde datum. Restwaarde blijft staan voor een volgend bezoek."] },
  { h: "Klachten", p: ["Heb je een klacht, laat het ons ter plekke of per e-mail weten via info@pompstation.nu. We nemen elke klacht serieus en reageren zo snel mogelijk, uiterlijk binnen veertien dagen."] },
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
            Voorbeeldtekst — laat de definitieve algemene voorwaarden juridisch controleren voordat de site live gaat.
          </p>
        </div>
      </main>

      <SiteFooter />
      <StickyMobileCTA />
    </div>);
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <LegalPage
    kicker="Goed om te weten"
    title="Algemene voorwaarden"
    intro="Hieronder lees je onder welke voorwaarden je bij Restaurant Pompstation reserveert, dineert en afhuurt. Heb je na het lezen nog vragen? Neem gerust contact met ons op."
    sections={AV_SECTIONS} />
);
