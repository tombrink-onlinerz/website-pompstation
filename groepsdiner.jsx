function PompstationGroepsdiner(props) { return <PompstationGroepsdinerClass {...props} />; }
class PompstationGroepsdinerClass extends React.Component {
  renderVals() {
      return { cfg: {
        details: [
          { k: 'Capaciteit', v: '10–180 gasten' },
          { k: 'Menu', v: '3 · 4 · 5 gangen' },
          { k: 'Keuze', v: 'Vlees, vis of vega per gang' },
          { k: 'Wijnarrangement', v: 'Add-on · vooraf te boeken' },
          { k: 'Live muziek', v: 'Donderdag t/m zaterdag' },
          { k: 'Reserveren', v: 'Minimaal 3 werkdagen vooruit' },
        ],
        gangen: [
          { gangen: 3, prijs: '€47', label: 'Keuze vlees, vis of vega' },
          { gangen: 4, prijs: '€57', label: 'Met tussengerecht', featured: true },
          { gangen: 5, prijs: '€65', label: 'Volledig proeverijmenu' },
        ],
        usps: [
      { "n": "01", "t": "Vanaf 10 personen", "d": "Groepen vanaf 10 personen reserveren via het aanvraagformulier of telefonisch — ook op korte termijn." },
      { "n": "02", "t": "Groepsmenu's", "d": "Drie, vier of vijf gangen van de houtskoolgrill, wisselend met het seizoen, inclusief vegetarisch menu." },
      { "n": "03", "t": "Sfeer inbegrepen", "d": "Kaarslicht, een twaalf meter hoge hal en live jazz en soul op donderdag tot en met zaterdag." }
    ],
        paras: [
          'Het groepsdiner bij Pompstation is een apart menu, speciaal samengesteld voor gezelschappen vanaf 10 personen. Per gang kiest u uit een vlees-, vis- of vega seizoensmenu — samengesteld door de keuken op basis van het beste van het moment.',
          'Kies voor 3, 4 of 5 gangen. Wijnarrangementen zijn vooraf in te boeken als add-on — ook verkrijgbaar per glas voor losse tafels. Grote groepen kunnen het restaurant gedeeltelijk of geheel reserveren.',
        ],
        photos: [
          { src: 'images/steak-fire.jpg', pos: 'center', h: 280 },
          { src: 'images/food-fish.jpg', pos: 'center', h: 280 },
        ],
        ctaLabel: 'Groepsdiner aanvragen',
        ctaTitle: 'Groepsdiner boeken?',
      }};
    }
  render() {
    const V = this.renderVals ? this.renderVals() : {};
    return (
      <div style={{ fontFamily: "'DM Sans',system-ui,sans-serif", color: "#2A2A2A", overflowX: "hidden" }}>
        <PSNav current="groepen" />
        {' '}
        <PSHero kicker="Groepen & afhuren · Groepsdiner" title="Het" titleAccent="groepsdiner" lead="Aan een lange tafel, uitgeserveerd in gangen. Altijd keuze uit vlees, vis of vega seizoensmenu — voor elk gezelschap van 10 personen of meer." image="images/groepsdiner-overhead.jpg" position="center 40%" heightVh="50" minHeight="360" cta1Label="Brochure downloaden" cta1Href="#brochure" cta2Label="Offerte aanvragen" cta2Href="#brochure" />
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
if (__root) ReactDOM.createRoot(__root).render(<PompstationGroepsdiner />);
