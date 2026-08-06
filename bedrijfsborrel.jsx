function PompstationBedrijfsborrel(props) { return <PompstationBedrijfsborrelClass {...props} />; }
class PompstationBedrijfsborrelClass extends React.Component {
  renderVals() {
      return { cfg: {
        details: [
          { k: 'Capaciteit', v: '60–360 gasten' },
          { k: 'Ruimte', v: 'Vide, restaurant of terras' },
          { k: 'Drank', v: 'Unlimited arrangementen beschikbaar' },
          { k: 'Hapjes', v: 'Walking dinner optioneel' },
          { k: 'Bar', v: 'Eigen bar & signature cocktails' },
          { k: 'Eindtijd', v: 'Tot 01:00 (vr–za tot 03:00)' },
        ],
        usps: [
      { "n": "01", "t": "Terras in de binnentuin", "d": "Een groot, zonnig terras dat — uniek in Amsterdam — vooraf te reserveren is, ook voor groepen." },
      { "n": "02", "t": "Eigen bar op de vide", "d": "Voor borrels van 20 tot 100 personen, met zicht op het restaurant en de live muziek beneden." },
      { "n": "03", "t": "Borrelarrangementen", "d": "Bittergarnituur van niveau: oesters, carpaccio, gegrilde gamba's en cocktails van eigen kaart." }
    ],
        paras: [
          'De bar van Pompstation is de perfecte plek voor een bedrijfsborrel. Met huisgemaakte cocktails, een brede wijnkaart en de unieke sfeer van de historische hal voelt een borrel hier altijd bijzonder.',
          'Kies voor de intieme vide, de grote restaurantzaal of het terras in de zomermaanden. Wij bieden drankarrangementen op maat en kunnen een walking dinner toevoegen voor een volledige avond.',
        ],
        photos: [
          { src: 'images/cocktail.jpg', pos: 'center 30%', h: 280 },
          { src: 'images/interior-vide.jpg', pos: 'center 60%', h: 280 },
        ],
        ctaLabel: 'Offerte aanvragen',
        ctaTitle: 'Borrel organiseren?',
      }};
    }
  render() {
    const V = this.renderVals ? this.renderVals() : {};
    return (
      <div style={{ fontFamily: "'DM Sans',system-ui,sans-serif", color: "#2A2A2A", overflowX: "hidden" }}>
        <PSNav current="groepen" />
        {' '}
        <PSHero kicker="Groepen & afhuren · Bedrijfsborrel" title="De" titleAccent="borrel" lead="Informeel samenzijn met collega's, klanten of partners. Van een uurtje netwerken tot een uitgebreide borrel met walking dinner." image="images/cocktail.jpg" position="center 30%" heightVh="62" minHeight="440" cta1Label="Brochure downloaden" cta1Href="#brochure" cta2Label="Offerte aanvragen" cta2Href="#brochure" />
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
if (__root) ReactDOM.createRoot(__root).render(<PompstationBedrijfsborrel />);
