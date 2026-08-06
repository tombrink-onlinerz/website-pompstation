function PompstationBedrijfsfeest(props) { return <PompstationBedrijfsfeestClass {...props} />; }
class PompstationBedrijfsfeestClass extends React.Component {
  renderVals() {
      return { cfg: {
        details: [
          { k: 'Capaciteit', v: '60–360 gasten' },
          { k: 'Formaat', v: 'Borrel, diner of walking dinner' },
          { k: 'Ruimte', v: 'Vide, exclusief of terras' },
          { k: 'Muziek', v: 'Podium & eigen geluidsinstallatie' },
          { k: 'Eindtijd', v: 'Tot 03:00 in het weekend' },
          { k: 'Event manager', v: 'Vaste begeleiding' },
        ],
        usps: [
      { "n": "01", "t": "Tot 360 gasten", "d": "Van een teamborrel op de vide met eigen bar tot een volledig exclusief bedrijfsfeest in de gehele zaal." },
      { "n": "02", "t": "Live muziek & DJ", "d": "Vaste live-acts van jazz tot soul of uw eigen DJ — de akoestiek van de hoge hal staat bekend als uitstekend." },
      { "n": "03", "t": "Borrelen, dineren & feesten", "d": "Walking dinner, buffet of borrelarrangement, vers bereid op houtskoolvuur, met cocktails van eigen kaart." }
    ],
        paras: [
          'Of u nu een jaarlijkse personeelsavond, een productlancering of een jubileumfeest organiseert — Pompstation biedt de ruimte, de sfeer en de ervaring om er een avond van te maken die uw collega\u2019s nog lang herinneren.',
          'Wij verzorgen het volledige traject: van de capaciteitsindeling en het menu tot de muziek en de timing. Uw event manager is vanaf de eerste afspraak tot het einde van de avond het vaste aanspreekpunt.',
        ],
        photos: [
          { src: 'images/event-staand.jpg', pos: 'center 50%', h: 280 },
          { src: 'images/cocktail.jpg', pos: 'center 30%', h: 280 },
        ],
        ctaLabel: 'Offerte aanvragen',
        ctaTitle: 'Bedrijfsfeest plannen?',
      }};
    }
  render() {
    const V = this.renderVals ? this.renderVals() : {};
    return (
      <div style={{ fontFamily: "'DM Sans',system-ui,sans-serif", color: "#2A2A2A", overflowX: "hidden" }}>
        <PSNav current="groepen" />
        {' '}
        <PSHero kicker="Groepen & afhuren · Bedrijfsfeest" title="Het" titleAccent="bedrijfsfeest" lead="Van een informele borrel tot een gala voor het hele bedrijf. Pompstation is de locatie die iedereen bijblijft." image="images/event-staand.jpg" position="center 50%" heightVh="62" minHeight="440" cta1Label="Brochure downloaden" cta1Href="#brochure" cta2Label="Offerte aanvragen" cta2Href="#brochure" />
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
if (__root) ReactDOM.createRoot(__root).render(<PompstationBedrijfsfeest />);
