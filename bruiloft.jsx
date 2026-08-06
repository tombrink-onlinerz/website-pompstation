function PompstationBruiloft(props) { return <PompstationBruiloftClass {...props} />; }
class PompstationBruiloftClass extends React.Component {
  renderVals() {
      return { cfg: {
        details: [
          { k: 'Capaciteit', v: '60–360 gasten' },
          { k: 'Locatie', v: 'Volledig exclusief' },
          { k: 'Ceremonie', v: 'Op de vide · tot 200 pers.' },
          { k: 'Diner', v: 'Sit-down of walking dinner' },
          { k: 'Feest', v: 'DJ-set of live band · tot 03:00' },
          { k: 'Trouwlocatie', v: 'Officieel erkend · gemeente Amsterdam' },
        ],
        usps: [
      { "n": "01", "t": "Ceremonie, diner & feest", "d": "De hele trouwdag op één adres — geen verplaatsingen tussen locatie, restaurant en feestzaal." },
      { "n": "02", "t": "60 tot 360 gasten", "d": "Intiem op de vide met eigen bar, of de volledige monumentale hal exclusief voor uw bruiloft." },
      { "n": "03", "t": "Eigen draaiboek", "d": "Onze eventmanager begeleidt van eerste rondleiding tot laatste dans; de wedding brochure zet alles op een rij." }
    ],
        paras: [
          'Pompstation is een officieel erkende trouwlocatie door de gemeente Amsterdam. De voormalige machinezaal uit 1912, met zijn vide van twaalf meter hoog, biedt een uniek decor voor de mooiste dag van uw leven.',
          'Van de ceremonie op de vide tot het diner in de grote zaal en het feest tot in de vroege ochtend — wij regelen alles. Eigen geluidsinstallatie, podium, bar en een vaste event manager die de dag van begin tot eind begeleidt.',
        ],
        photos: [
          { src: 'images/bride-vide.jpg', pos: 'center 30%', h: 340, full: true },
          { src: 'images/events-bride.jpg', pos: 'center 35%', h: 240 },
          { src: 'images/bride.jpg', pos: 'center 40%', h: 240 },
        ],
        ctaLabel: 'Offerte aanvragen',
        ctaTitle: 'Trouwen bij Pompstation?',
      }};
    }
  render() {
    const V = this.renderVals ? this.renderVals() : {};
    return (
      <div style={{ fontFamily: "'DM Sans',system-ui,sans-serif", color: "#2A2A2A", overflowX: "hidden" }}>
        <PSNav current="groepen" />
        {' '}
        <PSHero kicker="Groepen & afhuren · Bruiloft" title="Uw" titleAccent="bruiloft" lead="Ceremonie op de vide, diner in de grote zaal, feest tot 03:00. Één locatie, één onvergetelijke avond." image="images/bride.jpg" position="center 25%" heightVh="62" minHeight="440" cta1Label="Brochure downloaden" cta1Href="#brochure" cta2Label="Offerte aanvragen" cta2Href="#brochure" />
        {' '}
        <PSEventDetail config={V.cfg} />
        {' '}
        <PSBrochure variant="wedding" />
        {' '}
        <PSFooter />
      </div>
    );
  }
}

const __root = document.getElementById('root');
if (__root) ReactDOM.createRoot(__root).render(<PompstationBruiloft />);
