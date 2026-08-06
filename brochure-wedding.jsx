function PompstationBrochureWedding(props) { return <PompstationBrochureWeddingClass {...props} />; }
class PompstationBrochureWeddingClass extends React.Component {
  render() {
    const V = this.renderVals ? this.renderVals() : {};
    return (
      <div style={{ fontFamily: "'DM Sans',system-ui,sans-serif", color: "#2A2A2A", overflowX: "hidden" }}>
        <PSNav current="groepen" />
        {' '}
        <PSHero kicker="Wedding Brochure 2026–2027" title="Ontvang onze" titleAccent="brochure" lead="Alles over trouwen bij Pompstation — ceremonie, diner, feest en tarieven." image="images/bride-vide.jpg" position="center 30%" heightVh="50" minHeight="380" />
        {' '}
        <PSBrochure variant="wedding" />
        {' '}
        <PSFooter />
      </div>
    );
  }
}

const __root = document.getElementById('root');
if (__root) ReactDOM.createRoot(__root).render(<PompstationBrochureWedding />);
