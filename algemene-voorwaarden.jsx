const t = window._t || ((nl) => nl);
/* ============================================================
   ALGEMENE VOORWAARDEN
   ============================================================ */

const AV_SECTIONS = [
  { h: t("Toepasselijkheid","Applicability"), p: [t("Deze algemene voorwaarden gelden voor alle reserveringen, bestellingen, evenementen en afhuur bij Restaurant Pompstation, Zeeburgerdijk 52, 1094 AE Amsterdam. Door een reservering te plaatsen of gebruik te maken van onze diensten ga je met deze voorwaarden akkoord.","These terms and conditions apply to all reservations, orders, events and private hire at Restaurant Pompstation, Zeeburgerdijk 52, 1094 AE Amsterdam. By making a reservation or using our services, you agree to these terms.")] },
  { h: t("Reserveringen","Reservations"), p: [t("Reserveren kan online via onze reserveringsmodule of telefonisch. Een reservering is definitief zodra je een bevestiging hebt ontvangen. Bij grote drukte kunnen wij een tafeltijd hanteren; dit melden wij vooraf.","You can reserve online via our reservation module or by telephone. A reservation is confirmed once you have received confirmation. During busy periods we may apply a table time; we will notify you in advance.")] },
  { h: t("Annulering & no-show","Cancellation & no-show"), p: [t("Reguliere tafelreserveringen kun je tot 24 uur van tevoren kosteloos annuleren of wijzigen. Bij een no-show of een late annulering van een grote tafel kunnen wij een bedrag per persoon in rekening brengen.","Regular table reservations can be cancelled or changed free of charge up to 24 hours in advance. In the event of a no-show or a late cancellation of a large table, we may charge an amount per person.")] },
  { h: t("Groepen, events & afhuur","Groups, events & private hire"), p: [t("Voor groepen vanaf 10 personen en voor (gedeeltelijke) afhuur gelden aparte afspraken. Aanbetaling, een minimale besteding of omzetgarantie en de annuleringstermijnen worden vastgelegd in de offerte. Het definitieve aantal gasten geef je uiterlijk vijf werkdagen voor de datum aan ons door.","Separate arrangements apply to groups of 10 or more and to (partial) private hire. A deposit, a minimum spend or revenue guarantee and the cancellation periods are set out in the quote. You confirm the final number of guests to us no later than five working days before the date.")] },
  { h: t("Prijzen & betaling","Prices & payment"), p: [t("Alle prijzen zijn in euro's en inclusief btw. Wij accepteren geen contant geld — betalen kan met pin of creditcard. De rekening wordt op de avond zelf voldaan, tenzij schriftelijk anders is overeengekomen.","All prices are in euros and include VAT. We do not accept cash — payment is possible by debit or credit card. The bill is settled on the evening itself, unless otherwise agreed in writing.")] },
  { h: t("Allergenen & dieetwensen","Allergens & dietary requirements"), p: [t("Geef allergieën en dieetwensen vooraf of bij aankomst door, zodat wij hier rekening mee kunnen houden. Ondanks alle zorg kunnen wij de aanwezigheid van sporen van allergenen niet volledig uitsluiten.","Please let us know about allergies and dietary requirements in advance or on arrival so we can take them into account. Despite all care, we cannot fully rule out the presence of traces of allergens.")] },
  { h: t("Huisregels & toegang","House rules & access"), p: [t("We willen dat iedereen zich welkom voelt. Onze medewerkers kunnen gasten bij wangedrag de toegang weigeren. Onze live muziek is bedoeld als achtergrond; tijdens privé-events kan de reguliere programmering vervallen.","We want everyone to feel welcome. Our staff may refuse entry to guests in the event of misconduct. Our live music is intended as background; during private events the regular programme may be cancelled.")] },
  { h: t("Aansprakelijkheid","Liability"), p: [t("Pompstation is niet aansprakelijk voor verlies, diefstal of beschadiging van persoonlijke eigendommen, behoudens in geval van opzet of grove nalatigheid van onze kant.","Pompstation is not liable for loss, theft or damage to personal belongings, except in cases of intent or gross negligence on our part.")] },
  { h: t("Cadeaubonnen","Gift vouchers"), p: [t("Cadeaubonnen zijn inwisselbaar voor eten en drinken, niet voor contant geld, en zijn geldig tot de op de bon vermelde datum. Restwaarde blijft staan voor een volgend bezoek.","Gift vouchers are redeemable for food and drink, not for cash, and are valid until the date stated on the voucher. Any remaining balance stays available for a future visit.")] },
  { h: t("Klachten","Complaints"), p: [t("Heb je een klacht, laat het ons ter plekke of per e-mail weten via info@pompstation.nu. We nemen elke klacht serieus en reageren zo snel mogelijk, uiterlijk binnen veertien dagen.","If you have a complaint, let us know on the spot or by email at info@pompstation.nu. We take every complaint seriously and respond as soon as possible, within fourteen days at the latest.")] },
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
            {t("Voorbeeldtekst — laat de definitieve algemene voorwaarden juridisch controleren voordat de site live gaat.","Sample text — have the final terms and conditions checked legally before the site goes live.")}
          </p>
        </div>
      </main>

      <SiteFooter />
      <StickyMobileCTA />
    </div>);
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <LegalPage
    kicker={t("Goed om te weten","Good to know")}
    title={t("Algemene voorwaarden","Terms & conditions")}
    intro={t("Hieronder lees je onder welke voorwaarden je bij Restaurant Pompstation reserveert, dineert en afhuurt. Heb je na het lezen nog vragen? Neem gerust contact met ons op.","Below you can read the conditions under which you reserve, dine and hire at Restaurant Pompstation. Still have questions after reading? Feel free to contact us.")}
    sections={AV_SECTIONS} />
);
