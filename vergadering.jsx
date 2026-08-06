function PompstationVergadering(props) { return <PompstationVergaderingClass {...props} />; }
class PompstationVergaderingClass extends React.Component {
  renderVals() {
      return { cfg: {
        details: [
          { k: 'Capaciteit', v: '10–60 personen' },
          { k: 'Ruimte', v: 'Besloten deel van het restaurant' },
          { k: 'Daglicht', v: 'Hoge ramen, natuurlijk licht' },
          { k: 'Catering', v: 'Koffie, lunch of diner op aanvraag' },
          { k: 'Tijdstip', v: 'Dagdeel of hele dag mogelijk' },
          { k: 'Locatie', v: 'Zeeburgerdijk 52, Amsterdam-Oost' },
        ],
        usps: [
      { "n": "01", "t": "Eigen verdieping", "d": "De vide is een eigen etage met eigen bar en zicht op de monumentale hal — voor 20 tot 100 personen." },
      { "n": "02", "t": "Alles onder één dak", "d": "Vergaderen, lunch, borrel en diner op één adres — geen verplaatsingen in uw programma." },
      { "n": "03", "t": "10 minuten van CS", "d": "Tram 14, 19 en 25 stoppen voor de deur; vanaf de ring A10 rijdt u er in enkele minuten heen." }
    ],
        paras: [
          'Vergaderen in een monumentaal pand werkt anders. De industriële architectuur, het hoge plafond en het daglicht creëren een omgeving die inspireert en ruimte geeft voor heldere gedachten — ver weg van het kantoor, maar op slechts een paar minuten van het centrum van Amsterdam.',
          'Wij verzorgen koffie, lunch of een afsluiting met diner op aanvraag. De ruimte is geschikt voor vergaderingen, workshops, presentaties en trainingen. Neem contact op voor uw specifieke opzet en wensen.',
        ],
        photos: [
          { src: 'images/restaurant-zaal.jpg', pos: 'center 20%', h: 320, full: true },
        ],
        ctaLabel: 'Beschikbaarheid aanvragen',
        ctaTitle: 'Vergadering plannen?',
        ctaSub: 'Vraag beschikbaarheid aan — we reageren binnen 1 werkdag.',
      }};
    }
  render() {
    const V = this.renderVals ? this.renderVals() : {};
    return (
      <div style={{ fontFamily: "'DM Sans',system-ui,sans-serif", color: "#2A2A2A", overflowX: "hidden" }}>
        <PSNav current="groepen" />
        {' '}
        <PSHero kicker="Groepen & afhuren · Meeting & vergadering" title="Meeting" titleAccent="& vergadering" lead="Een inspirerende omgeving voor uw vergadering, workshop of teamdag. Buiten het kantoor, maar volledig gefaciliteerd." image="images/restaurant-zaal.jpg" position="center 20%" heightVh="62" minHeight="440" cta1Label="Brochure downloaden" cta1Href="#brochure" cta2Label="Offerte aanvragen" cta2Href="#brochure" />
        {' '}
        <PSEventDetail config={V.cfg} />
        {' '}
        <PSBrochure variant="corporate" />
        {' '}
        <PSFooter />
      </div>
    );
  }
}

const __root = document.getElementById('root');
if (__root) ReactDOM.createRoot(__root).render(<PompstationVergadering />);
