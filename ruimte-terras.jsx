function PompstationRuimteTerras(props) { return <PompstationRuimteTerrasClass {...props} />; }
class PompstationRuimteTerrasClass extends React.Component {
  renderVals() {
      return { cfg: {
        badge: 'Zomer 2026 · nu open',
        details: [
          { k: 'Capaciteit', v: 'sit-down 20–80 · staand tot 200' },
          { k: 'Seizoen', v: 'Voorjaar t/m herfst' },
          { k: 'Lunch', v: '12:00 – 16:00' },
          { k: 'Diner', v: 'Op reservering' },
          { k: 'Borrelen', v: '16:00 – sluiting' },
          { k: 'Honden', v: 'Welkom op het terras' },
        ],
        paras: [
          'Het terras van Pompstation ligt verscholen in een rustige binnenplaats, omringd door bamboe en andere beplanting. Het is een oase midden in Amsterdam-Oost — onverwacht groen, onverwacht rustig.',
          'Of u nu komt voor een lunch in de zon, een uitgebreid zomerdiner of gewoon een fles wijn en wat hapjes — op het terras bent u altijd welkom. Het volledige menu is ook buiten beschikbaar.',
        ],
        photos: [
          { src: 'images/terras-diner.jpg', pos: 'center 30%', h: 260 },
          { src: 'images/terras-borrelen.jpg', pos: 'center 30%', h: 260 },
          { src: 'images/terras-koppel.jpg', pos: 'center 40%', h: 300, full: true },
        ],
        ctaLabel: 'Reserveer een terrastafeltje',
        ctaLink: 'https://www.pompstation.nu/',
        ctaTitle: 'Terras reserveren?',
        ctaSub: 'Reserveer online voor losse tafels of vraag een groepsboeking aan.',
        ctaButtons: [
          { label: 'Reserveer online', href: 'https://www.pompstation.nu/', variant: 'solid' },
          { label: 'Groep aanvragen', href: 'offerte.html', variant: 'outline' },
          { label: '+31 20 227 9885', href: 'tel:+31202279885', variant: 'outline' },
        ],
      }};
    }
  render() {
    const V = this.renderVals ? this.renderVals() : {};
    return (
      <div style={{ fontFamily: "'DM Sans',system-ui,sans-serif", color: "#2A2A2A", overflowX: "hidden" }}>
        <PSNav current="ruimtes" />
        {' '}
        <PSHero kicker="Ruimtes · Het terras" title="Het" titleAccent="terras" lead="Omringd door groen, onder een open hemel. Open van het eerste zonnetje tot de laatste gast." image="images/terras-outdoor.jpg" position="center 40%" heightVh="62" minHeight="440" />
        {' '}
        <PSEventDetail config={V.cfg} />
        {' '}
        <PSFooter />
      </div>
    );
  }
}

const __root = document.getElementById('root');
if (__root) ReactDOM.createRoot(__root).render(<PompstationRuimteTerras />);
