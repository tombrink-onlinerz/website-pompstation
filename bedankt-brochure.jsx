function PompstationBedanktBrochure(props) { return <PompstationBedanktBrochureClass {...props} />; }
class PompstationBedanktBrochureClass extends React.Component {
  render() {
    const V = this.renderVals ? this.renderVals() : {};
    return (
      <div style={{ fontFamily: "'DM Sans',system-ui,sans-serif", minHeight: "100vh", background: "#5C1A1B", display: "flex", flexDirection: "column" }}>
        <PSNav solid="true" />
        <div style={{ flex: "1", display: "flex", alignItems: "center", justifyContent: "center", padding: "160px 20px" }}>
          <div style={{ textAlign: "center", color: "#F5EFE6", maxWidth: "576px", margin: "0 auto" }}>
            <div style={{ width: "64px", height: "64px", margin: "0 auto 40px", border: "1px solid rgba(245,239,230,0.5)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F5EFE6" strokeWidth="1.5">
                <path d="M3 8 L12 13 L21 8 M3 8 L3 18 L21 18 L21 8" />
              </svg>
            </div>
            {' '}
            <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(245,239,230,0.55)", marginBottom: "16px" }}>
              Brochure Groepen & afhuren onderweg
            </div>
            {' '}
            <h1 style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", textTransform: "uppercase", fontSize: "112px", lineHeight: "0.9", margin: "0 0 24px" }}>
              Bedankt!
            </h1>
            {' '}
            <p style={{ color: "rgba(245,239,230,0.75)", fontSize: "18px", lineHeight: "1.65", maxWidth: "448px", margin: "0 auto" }}>
              Download de brochure direct via de knop hieronder.
            </p>
            {' '}
            <div style={{ marginTop: "32px" }}>
              <Hov as="a" href="assets/pompstation-brochure.pdf" target="_blank" rel="noopener" download="Pompstation-brochure.pdf" style={{ display: "inline-flex", alignItems: "center", gap: "12px", background: "#F5EFE6", color: "#5C1A1B", padding: "16px 32px", fontSize: "14px", fontWeight: "500", letterSpacing: "0.02em", transition: "background 0.2s ease" }} styleHover={{ background: "rgba(245,239,230,0.9)" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                </svg>
                Brochure Groepen & afhuren downloaden
              </Hov>
            </div>
            {' '}
            <p style={{ margin: "24px 0 0", color: "rgba(245,239,230,0.45)", fontSize: "14px", fontFamily: "'JetBrains Mono',monospace" }}>
              Vragen? Bel ons op{' '}
              <a href="tel:+31202279885" style={{ textDecoration: "underline" }}>
                +31 20 227 9885
              </a>
            </p>
            {' '}
            <div style={{ marginTop: "32px", display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
              <Hov as="a" href="groepen.html" style={{ display: "inline-flex", alignItems: "center", gap: "8px", border: "1px solid rgba(245,239,230,0.4)", color: "#F5EFE6", padding: "14px 28px", fontSize: "14px", letterSpacing: "0.02em", transition: "background 0.2s ease" }} styleHover={{ background: "rgba(245,239,230,0.1)" }}>
                Offerte aanvragen →
              </Hov>
              <Hov as="a" href="index.html" style={{ display: "inline-flex", alignItems: "center", gap: "8px", border: "1px solid rgba(245,239,230,0.4)", color: "#F5EFE6", padding: "14px 28px", fontSize: "14px", letterSpacing: "0.02em", transition: "background 0.2s ease" }} styleHover={{ background: "rgba(245,239,230,0.1)" }}>
                Terug naar home
              </Hov>
            </div>
          </div>
        </div>
        <PSFooter />
      </div>
    );
  }
}

const __root = document.getElementById('root');
if (__root) ReactDOM.createRoot(__root).render(<PompstationBedanktBrochure />);
