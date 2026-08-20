function PompstationBedanktContact(props) { return <PompstationBedanktContactClass {...props} />; }
class PompstationBedanktContactClass extends React.Component {
  render() {
    const V = this.renderVals ? this.renderVals() : {};
    return (
      <div style={{ fontFamily: "'DM Sans',system-ui,sans-serif", minHeight: "100vh", background: "#5C1A1B", display: "flex", flexDirection: "column" }}>
        <PSNav solid="true" />
        <div style={{ flex: "1", display: "flex", alignItems: "center", justifyContent: "center", padding: "calc(80px + clamp(46px, 8vw, 80px)) 20px clamp(46px, 8vw, 160px)" }}>
          <div style={{ textAlign: "center", color: "#F5EFE6", maxWidth: "576px", margin: "0 auto" }}>
            <div style={{ width: "64px", height: "64px", margin: "0 auto 40px", border: "1px solid rgba(245,239,230,0.5)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F5EFE6" strokeWidth="1.5">
                <path d="M5 12 L 10 17 L 19 7" />
              </svg>
            </div>
            {' '}
            <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(245,239,230,0.55)", marginBottom: "16px" }}>
              Bericht verstuurd
            </div>
            {' '}
            <h1 style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", textTransform: "uppercase", fontSize: "clamp(44px, 11vw, 112px)", lineHeight: "0.9", margin: "0 0 24px" }}>
              Bedankt.
            </h1>
            {' '}
            <p style={{ color: "rgba(245,239,230,0.75)", fontSize: "18px", lineHeight: "1.65", maxWidth: "448px", margin: "0 auto" }}>
              We nemen zo snel mogelijk contact met u op — uiterlijk{' '}
              <strong style={{ color: "#F5EFE6" }}>
                binnen 1 werkdag
              </strong>
              .
            </p>
            {' '}
            <p style={{ margin: "12px 0 0", color: "rgba(245,239,230,0.5)", fontSize: "14px", fontFamily: "'JetBrains Mono',monospace" }}>
              Spoed? Bel{' '}
              <a href="tel:+31202279885" style={{ textDecoration: "underline" }}>
                +31 20 227 9885
              </a>
            </p>
            {' '}
            <div style={{ marginTop: "40px", display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
              <Hov as="a" href="https://www.pompstation.nu/" target="_blank" rel="noopener" style={{ display: "inline-flex", alignItems: "center", gap: "8px", border: "1px solid rgba(245,239,230,0.4)", color: "#F5EFE6", padding: "14px 28px", fontSize: "14px", letterSpacing: "0.02em", transition: "background 0.2s ease" }} styleHover={{ background: "rgba(245,239,230,0.1)" }}>
                Reserveer een tafel
              </Hov>
              <Hov as="a" href="index.html" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#F5EFE6", color: "#5C1A1B", padding: "14px 28px", fontSize: "14px", fontWeight: "500", letterSpacing: "0.02em", transition: "background 0.2s ease" }} styleHover={{ background: "rgba(245,239,230,0.9)" }}>
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
if (__root) ReactDOM.createRoot(__root).render(<PompstationBedanktContact />);
