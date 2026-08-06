function PompstationRuimteVide(props) { return <PompstationRuimteVideClass {...props} />; }
class PompstationRuimteVideClass extends React.Component {
  renderVals() {
      return { cfg: {
        details: [
          { k: 'Capaciteit', v: '50 – 100 gasten' },
          { k: 'Indeling', v: 'Staand of zittend' },
          { k: 'Eigen bar', v: 'Inclusief bartender' },
          { k: 'Eigen entree', v: 'Apart van het restaurant' },
          { k: 'Uitzicht', v: 'Op de volledige zaal' },
          { k: 'A/V', v: 'Scherm + geluidssysteem' },
        ],
        paras: [
          'De vide is de verhoogde galerij van Pompstation, gelegen boven de hoofdzaal. Vanuit hier heeft u een uniek uitzicht op de hal, de open keuken en het podium — terwijl u volledig privé zit.',
          'Met een eigen bar, bartender en aparte ingang is de vide ideaal voor borrels, presentaties, verjaardagsfeesten of een besloten diner. U profiteert van de sfeer van het restaurant, maar bent er geen onderdeel van.',
        ],
        photos: [
          { src: 'images/live-band-vide.jpg', pos: 'center 40%', h: 400, full: true },
        ],
        ctaLabel: 'Vraag een offerte aan',
        ctaLink: 'contact.html',
        ctaTitle: 'De vide reserveren?',
        ctaSub: 'Neem contact op voor een offerte op maat.',
        ctaButtons: [
          { label: 'Neem contact op', href: 'contact.html', variant: 'solid' },
          { label: 'events@pompstation.nu', href: 'mailto:events@pompstation.nu', variant: 'outline' },
        ],
      }};
    }
  render() {
    const V = this.renderVals ? this.renderVals() : {};
    return (
      <div style={{ fontFamily: "'DM Sans',system-ui,sans-serif", color: "#2A2A2A", overflowX: "hidden" }}>
        <PSNav current="ruimtes" />
        {' '}
        <PSHero kicker="Ruimtes · De vide" title="De" titleAccent="vide" lead="Privé boven de zaal — met uitzicht op de hal, een eigen bar en aparte entree. Voor 50 tot 100 gasten." image="images/bride-vide.jpg" position="center 30%" heightVh="62" minHeight="440" />
        {' '}
        <PSEventDetail config={V.cfg} />
        {' '}
        <PSFooter />
      </div>
    );
  }
}

const __root = document.getElementById('root');
if (__root) ReactDOM.createRoot(__root).render(<PompstationRuimteVide />);
