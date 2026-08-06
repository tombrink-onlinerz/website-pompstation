function PompstationBrochureCorporate(props) { return <PompstationBrochureCorporateClass {...props} />; }
class PompstationBrochureCorporateClass extends React.Component {
  render() {
    const V = this.renderVals ? this.renderVals() : {};
    return (
      <div style={{ fontFamily: "'DM Sans',system-ui,sans-serif", color: "#2A2A2A", overflowX: "hidden" }}>
        <PSNav current="groepen" />
        {' '}
        <PSHero kicker="Brochure Groepen & afhuren" title="Ontvang onze" titleAccent="brochure" lead="Capaciteiten, technische specs, catering en tarieven — alles in één overzicht." image="images/interior-vide.jpg" position="center 40%" heightVh="50" minHeight="380" />
        {' '}
        <PSBrochure variant="corporate" />
        {' '}
        <PSFooter />
      </div>
    );
  }
}

const __root = document.getElementById('root');
if (__root) ReactDOM.createRoot(__root).render(<PompstationBrochureCorporate />);
