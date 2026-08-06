function PompstationBedrijfsdiner(props) { return <PompstationBedrijfsdinerClass {...props} />; }
class PompstationBedrijfsdinerClass extends React.Component {
  renderVals() {
      return { cfg: {
        details: [
          { k: 'Capaciteit', v: '10–180 gasten' },
          { k: 'Menu', v: '3, 4 of 5 gangen' },
          { k: 'Keuze', v: 'Vlees, vis of vega per gang' },
          { k: 'Wijnarrangement', v: 'Add-on · vooraf te boeken' },
          { k: 'Ruimte', v: 'Restaurant of exclusief' },
          { k: 'Live muziek', v: 'Donderdag t/m zaterdag' },
        ],
        usps: [
      { "n": "01", "t": "Groepsmenu's", "d": "Drie, vier of vijf gangen van de houtskoolgrill, wisselend met het seizoen, inclusief vegetarische lijn." },
      { "n": "02", "t": "Semi-exclusief of exclusief", "d": "De vide met eigen bar voor 20 tot 100 gasten, of de volledige machinehal voor uw bedrijf alleen." },
      { "n": "03", "t": "Live muziek", "d": "Donderdag tot en met zaterdag live jazz en soul op de achtergrond — praten blijft altijd mogelijk." }
    ],
        paras: [
          'Een bedrijfsdiner bij Pompstation combineert topkeuken met de unieke sfeer van een monument uit 1912. Kaarslicht, een open keuken en live jazz — het perfecte decor voor een diner dat indruk maakt.',
          'Het groepsmenu biedt per gang keuze uit vlees, vis of vega seizoensmenu. Wijnarrangementen zijn vooraf in te boeken als add-on. Voor kleinere gezelschappen is reservering in het restaurant ook mogelijk zonder exclusieve huur.',
        ],
        photos: [
          { src: 'images/restaurant-service.jpg', pos: 'center 30%', h: 280 },
          { src: 'images/service-candles.jpg', pos: 'center 40%', h: 280 },
        ],
        ctaLabel: 'Offerte aanvragen',
        ctaTitle: 'Bedrijfsdiner reserveren?',
      }};
    }
  render() {
    const V = this.renderVals ? this.renderVals() : {};
    return (
      <div style={{ fontFamily: "'DM Sans',system-ui,sans-serif", color: "#2A2A2A", overflowX: "hidden" }}>
        <PSNav current="groepen" />
        {' '}
        <PSHero kicker="Groepen & afhuren · Bedrijfsdiner" title="Het" titleAccent="bedrijfsdiner" lead="Een besloten diner voor uw team, klanten of relaties. Klassiek aan tafel, uitgeserveerd in gangen." image="images/restaurant-service.jpg" position="center 30%" heightVh="62" minHeight="440" />
        {' '}
        <PSEventDetail config={V.cfg} />
        {' '}
        <PSFooter />
      </div>
    );
  }
}

const __root = document.getElementById('root');
if (__root) ReactDOM.createRoot(__root).render(<PompstationBedrijfsdiner />);
