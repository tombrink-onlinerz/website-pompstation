function PompstationGroepslunch(props) { return <PompstationGroepslunchClass {...props} />; }
class PompstationGroepslunchClass extends React.Component {
  renderVals() {
      return { cfg: {
        details: [
          { k: 'Capaciteit', v: '10–80 gasten' },
          { k: 'Locatie', v: 'Restaurant of terras' },
          { k: 'Tijdstip', v: '12:00–16:00' },
          { k: 'Menu', v: 'Lunch op aanvraag · seizoensgebonden' },
          { k: 'Wijnarrangement', v: 'Mogelijk bij de lunch' },
          { k: 'Terras', v: 'Beschikbaar bij mooi weer' },
        ],
        usps: [
      { "n": "01", "t": "Lunch op aanvraag", "d": "Ook buiten de reguliere openingstijden en op andere dagen — de zaal gaat voor uw groep open." },
      { "n": "02", "t": "Binnen of buiten", "d": "In de hal onder twaalf meter plafond, of op het reserveerbare terras in de binnentuin." },
      { "n": "03", "t": "Combineer met een vaartocht", "d": "De aanlegplaats ligt op vijf minuten lopen — lunch en boottocht zijn goed te combineren." }
    ],
        paras: [
          'Een groepslunch bij Pompstation is meer dan een tussendoortje. In de grote industriële zaal of op het groene terras geniet uw gezelschap van een verzorgde lunch — samengesteld op basis van het seizoen en uw wensen.',
          'Het lunchmenu wordt op aanvraag samengesteld. Reserveer vroeg: lunchslots op populaire tijden zijn beperkt. Op het terras is reserveren ook mogelijk voor groepen.',
        ],
        photos: [
          { src: 'images/terras-groep.jpg', pos: 'center 50%', h: 280 },
          { src: 'images/terras-diner.jpg', pos: 'center 30%', h: 280 },
        ],
        ctaLabel: 'Groepslunch aanvragen',
        ctaTitle: 'Groepslunch aanvragen?',
        ctaSub: 'Vraag beschikbaarheid aan — we reageren binnen 1 werkdag.',
      }};
    }
  render() {
    const V = this.renderVals ? this.renderVals() : {};
    return (
      <div style={{ fontFamily: "'DM Sans',system-ui,sans-serif", color: "#2A2A2A", overflowX: "hidden" }}>
        <PSNav current="groepen" />
        {' '}
        <PSHero kicker="Groepen & afhuren · Groepslunch" title="De" titleAccent="groepslunch" lead="Lunchen in een monumentaal pand met een open keuken en terras. Ideaal voor teamlunches, relatiebezoeken of een gezellige middag met uw groep." image="images/terras-groep.jpg" position="center 50%" heightVh="62" minHeight="440" cta1Label="Brochure downloaden" cta1Href="#brochure" cta2Label="Offerte aanvragen" cta2Href="#brochure" />
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
if (__root) ReactDOM.createRoot(__root).render(<PompstationGroepslunch />);
