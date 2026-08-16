function PompstationBedanktReservering(props) { return <PompstationBedanktReserveringClass {...props} />; }
class PompstationBedanktReserveringClass extends React.Component {
  render() {
    const V = this.renderVals ? this.renderVals() : {};
    return (
      <div style={{ fontFamily: "'DM Sans',system-ui,sans-serif", minHeight: "100vh", background: "#5C1A1B", display: "flex", flexDirection: "column" }}>
        <PSNav solid="true" />
        <div style={{ flex: "1", display: "flex", alignItems: "center", justifyContent: "center", padding: "clamp(46px, 8vw, 160px) 20px" }}>
          <div style={{ textAlign: "center", color: "#F5EFE6", maxWidth: "576px", margin: "0 auto" }}>
            <div style={{ width: "64px", height: "64px", margin: "0 auto 40px", border: "1px solid rgba(245,239,230,0.5)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F5EFE6" strokeWidth="1.5">
                <path d="M5 12 L 10 17 L 19 7" />
              </svg>
            </div>
            {' '}
            <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(245,239,230,0.55)", marginBottom: "16px" }}>
              Reservering bevestigd
            </div>
            {' '}
            <h1 style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", textTransform: "uppercase", fontSize: "clamp(44px, 11vw, 88px)", lineHeight: "0.9", margin: "0 0 24px" }}>
              Tot ziens bij Pompstation.
            </h1>
            {' '}
            <p style={{ color: "rgba(245,239,230,0.75)", fontSize: "18px", lineHeight: "1.65", maxWidth: "448px", margin: "0 auto" }}>
              Uw reservering is bevestigd. U ontvangt een bevestiging per e-mail. We verheugen ons op uw bezoek.
            </p>
            {' '}
            <div style={{ margin: "40px auto 0", border: "1px solid rgba(245,239,230,0.2)", padding: "28px 32px", textAlign: "left", maxWidth: "384px" }}>
              <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(245,239,230,0.5)", marginBottom: "16px" }}>
                Uw bezoek
              </div>
              {' '}
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "14px", color: "rgba(245,239,230,0.8)", fontFamily: "'JetBrains Mono',monospace" }}>
                <div style={{ display: "flex", justifyContent: "space-between", gap: "16px" }}>
                  <span style={{ color: "rgba(245,239,230,0.5)" }}>
                    Adres
                  </span>
                  <span style={{ textAlign: "right" }}>
                    Zeeburgerdijk 52
                    <br />
                    1094 AE Amsterdam
                  </span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", gap: "16px" }}>
                  <span style={{ color: "rgba(245,239,230,0.5)" }}>
                    Openingstijden
                  </span>
                  <span style={{ textAlign: "right" }}>
                    Wo–do 17:00–00:00
                    <br />
                    Vr–za 17:00–01:00
                  </span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", gap: "16px" }}>
                  <span style={{ color: "rgba(245,239,230,0.5)" }}>
                    Telefoon
                  </span>
                  <a href="tel:+31202279885" style={{ textDecoration: "underline" }}>
                    +31 20 227 9885
                  </a>
                </div>
              </div>
            </div>
            {' '}
            <div style={{ marginTop: "32px", display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
              <Hov as="a" href="menu.html" style={{ display: "inline-flex", alignItems: "center", gap: "8px", border: "1px solid rgba(245,239,230,0.4)", color: "#F5EFE6", padding: "14px 28px", fontSize: "14px", letterSpacing: "0.02em", transition: "background 0.2s ease" }} styleHover={{ background: "rgba(245,239,230,0.1)" }}>
                Bekijk het menu →
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
if (__root) ReactDOM.createRoot(__root).render(<PompstationBedanktReservering />);
