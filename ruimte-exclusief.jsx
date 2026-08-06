function PompstationRuimteExclusief(props) { return <PompstationRuimteExclusiefClass {...props} />; }
class PompstationRuimteExclusiefClass extends React.Component {
  renderVals() {
      return { cfg: {
        details: [
          { k: 'Capaciteit', v: 'tot 360 gasten' },
          { k: 'Inclusief', v: 'Zaal, vide & terras' },
          { k: 'Catering', v: 'Volledig verzorgd' },
          { k: 'A/V', v: 'Professioneel systeem' },
          { k: 'Bar', v: 'Meerdere bars mogelijk' },
          { k: 'Ervaring', v: '15+ jaar evenementen' },
        ],
        paras: [
          'Bij een volledig exclusieve huur staan de zaal, de vide en het terras volledig tot uw beschikking. U bepaalt de inrichting, het programma en het menu — wij zorgen voor de rest.',
          'Pompstation heeft meer dan 15 jaar ervaring met grootschalige evenementen: bruiloften, galadiners, bedrijfsfeesten en productlanceringen. Ons eventteam denkt van begin tot eind met u mee.',
        ],
        photos: [
          { src: 'images/bride.jpg', pos: 'center 25%', h: 260 },
          { src: 'images/restaurant-zaal.jpg', pos: 'center 20%', h: 260 },
        ],
        ctaLabel: 'Vraag een offerte aan',
        ctaLink: 'contact.html',
        ctaTitle: 'Uw evenement plannen?',
        ctaSub: 'Ons eventteam helpt u graag verder.',
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
        <PSHero kicker="Ruimtes · Volledig exclusief" title="Uw avond," titleAccent="onze locatie" lead="De gehele locatie voor uw eigen avond — bruiloften, galadiners, productlanceringen. Voor tot 360 gasten." image="images/event-fullhall.jpg" position="center 40%" heightVh="62" minHeight="440" />
        {' '}
        <PSEventDetail config={V.cfg} />
        {' '}
        <PSFooter />
      </div>
    );
  }
}

const __root = document.getElementById('root');
if (__root) ReactDOM.createRoot(__root).render(<PompstationRuimteExclusief />);
