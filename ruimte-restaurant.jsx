function PompstationRuimteRestaurant(props) { return <PompstationRuimteRestaurantClass {...props} />; }
class PompstationRuimteRestaurantClass extends React.Component {
  renderVals() {
      return { cfg: {
        details: [
          { k: 'Capaciteit', v: '2 – 180 gasten' },
          { k: 'Indeling', v: 'Tafels voor 2 tot 20 pers.' },
          { k: 'Plafond', v: '12 meter vrije hoogte' },
          { k: 'Open keuken', v: 'Zichtbaar vanuit de zaal' },
          { k: 'Live muziek', v: 'Donderdag t/m zaterdag' },
          { k: 'Parkeren', v: 'Vrij parkeren in de buurt' },
        ],
        paras: [
          'De grote zaal van Pompstation is het hart van het restaurant. Het voormalige watergemaal biedt een industrieel decor dat zijn gelijke niet kent: bakstenen muren, stalen constructies en een plafond van 12 meter hoog.',
          "Overdag valt het daglicht door hoge ramen naar binnen. 's Avonds creëren kaarslicht en de warme sfeer van de bar een intieme beleving, terwijl de open keuken steeds zichtbaar blijft.",
        ],
        photos: [
          { src: 'images/restaurant-service.jpg', pos: 'center 30%', h: 280 },
          { src: 'images/steak-fire.jpg', pos: 'center', h: 280 },
          { src: 'images/service-candles.jpg', pos: 'center 40%', h: 320, full: true },
        ],
        ctaLabel: 'Reserveer een tafel',
        ctaLink: 'https://www.pompstation.nu/',
        ctaTitle: 'Een tafel reserveren?',
        ctaSub: 'Bel ons of reserveer direct online.',
        ctaButtons: [
          { label: 'Reserveer online', href: 'https://www.pompstation.nu/', variant: 'solid' },
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
        <PSHero kicker="Ruimtes · Het restaurant" title="De grote" titleAccent="zaal" lead="Kaarslicht onder een plafond van 12 meter, een open keuken en live jazz op de achtergrond — voor 10 tot 180 gasten." image="images/restaurant-zaal.jpg" position="center 20%" heightVh="62" minHeight="440" />
        {' '}
        <PSEventDetail config={V.cfg} />
        {' '}
        <PSFooter />
      </div>
    );
  }
}

const __root = document.getElementById('root');
if (__root) ReactDOM.createRoot(__root).render(<PompstationRuimteRestaurant />);
