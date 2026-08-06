function PompstationAlgemeneVoorwaarden(props) { return <PompstationAlgemeneVoorwaardenClass {...props} />; }
class PompstationAlgemeneVoorwaardenClass extends React.Component {
  renderVals() {
      return { cfg: {
        kicker: 'Goed om te weten',
        title: 'Algemene voorwaarden',
        intro: 'Hieronder lees je onder welke voorwaarden je bij Restaurant Pompstation reserveert, dineert en afhuurt. Heb je na het lezen nog vragen? Neem gerust contact met ons op.',
        disclaimer: 'Voorbeeldtekst — laat de definitieve algemene voorwaarden juridisch controleren voordat de site live gaat.',
        sections: [
          { h: 'Toepasselijkheid', body: 'Deze algemene voorwaarden gelden voor alle reserveringen, bestellingen, evenementen en afhuur bij Restaurant Pompstation, Zeeburgerdijk 52, 1094 AE Amsterdam. Door een reservering te plaatsen of gebruik te maken van onze diensten ga je met deze voorwaarden akkoord.' },
          { h: 'Reserveringen', body: 'Reserveren kan online via onze reserveringsmodule of telefonisch. Een reservering is definitief zodra je een bevestiging hebt ontvangen. Bij grote drukte kunnen wij een tafeltijd hanteren; dit melden wij vooraf.' },
          { h: 'Annulering & no-show', body: 'Reguliere tafelreserveringen kun je tot 24 uur van tevoren kosteloos annuleren of wijzigen. Bij een no-show of een late annulering van een grote tafel kunnen wij een bedrag per persoon in rekening brengen.' },
          { h: 'Groepen, events & afhuur', body: 'Voor groepen vanaf 10 personen en voor (gedeeltelijke) afhuur gelden aparte afspraken. Aanbetaling, een minimale besteding of omzetgarantie en de annuleringstermijnen worden vastgelegd in de offerte. Het definitieve aantal gasten geef je uiterlijk vijf werkdagen voor de datum aan ons door.' },
          { h: 'Prijzen & betaling', body: "Alle prijzen zijn in euro's en inclusief btw. Wij accepteren geen contant geld — betalen kan met pin of creditcard. De rekening wordt op de avond zelf voldaan, tenzij schriftelijk anders is overeengekomen." },
          { h: 'Allergenen & dieetwensen', body: 'Geef allergieën en dieetwensen vooraf of bij aankomst door, zodat wij hier rekening mee kunnen houden. Ondanks alle zorg kunnen wij de aanwezigheid van sporen van allergenen niet volledig uitsluiten.' },
          { h: 'Huisregels & toegang', body: 'We willen dat iedereen zich welkom voelt. Onze medewerkers kunnen gasten bij wangedrag de toegang weigeren. Onze live muziek is bedoeld als achtergrond; tijdens privé-events kan de reguliere programmering vervallen.' },
          { h: 'Aansprakelijkheid', body: 'Pompstation is niet aansprakelijk voor verlies, diefstal of beschadiging van persoonlijke eigendommen, behoudens in geval van opzet of grove nalatigheid van onze kant.' },
          { h: 'Cadeaubonnen', body: 'Cadeaubonnen zijn inwisselbaar voor eten en drinken, niet voor contant geld, en zijn geldig tot de op de bon vermelde datum. Restwaarde blijft staan voor een volgend bezoek.' },
          { h: 'Klachten', body: 'Heb je een klacht, laat het ons ter plekke of per e-mail weten via info@pompstation.nu. We nemen elke klacht serieus en reageren zo snel mogelijk, uiterlijk binnen veertien dagen.' },
        ],
      }};
    }
  render() {
    const V = this.renderVals ? this.renderVals() : {};
    return (
      <div style={{ fontFamily: "'DM Sans',system-ui,sans-serif", color: "#2A2A2A", overflowX: "hidden" }}>
        <PSNav solid="true" />
        {' '}
        <PSLegal config={V.cfg} />
        {' '}
        <PSFooter />
      </div>
    );
  }
}

const __root = document.getElementById('root');
if (__root) ReactDOM.createRoot(__root).render(<PompstationAlgemeneVoorwaarden />);
