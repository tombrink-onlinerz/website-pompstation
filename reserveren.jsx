function PompstationReserveren(props) { return <PompstationReserverenClass {...props} />; }
class PompstationReserverenClass extends React.Component {
  render() {
    const V = this.renderVals ? this.renderVals() : {};
    return (
      <div style={{ fontFamily: "'DM Sans',system-ui,sans-serif", color: "#2A2A2A", overflowX: "hidden" }}>
        <PSNav current="reserveren" solid="true" />
        {' '}
        <section style={{ background: "#5C1A1B", color: "#F5EFE6", padding: "160px 0 64px" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 40px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(245,239,230,0.5)", marginBottom: "16px" }}>
              <span style={{ width: "32px", height: "1px", background: "rgba(245,239,230,0.3)" }} />
              <span>
                Tafel reserveren
              </span>
            </div>
            {' '}
            <h1 style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", textTransform: "uppercase", color: "#F5EFE6", fontSize: "128px", lineHeight: "1", margin: "0" }}>
              Reserveren
            </h1>
            {' '}
            <p style={{ margin: "20px 0 0", maxWidth: "512px", color: "rgba(245,239,230,0.7)", fontSize: "18px", lineHeight: "1.65" }}>
              Reserveer direct een tafel voor lunch, diner of borrel — voor twee of voor het hele gezelschap.
            </p>
          </div>
        </section>
        {' '}
        <section style={{ background: "#EFE7D9" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <iframe src="https://live.tebi.co/ecom/reservations/545611_61f1bdcadbcd5e67d2be1f8e8a0615ae50c2599a0297b11367005fc172a09609" title="Reserveringssysteem Pompstation" style={{ width: "100%", minHeight: "700px", border: "none", display: "block" }} loading="eager" allow="payment" />
          </div>
        </section>
        {' '}
        <section style={{ background: "#F5EFE6", borderTop: "1px solid rgba(42,42,42,0.1)", padding: "64px 0" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 40px", display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "48px" }}>
            <div>
              <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#5C1A1B", marginBottom: "8px" }}>
                Adres
              </div>
              {' '}
              <p style={{ color: "rgba(42,42,42,0.8)", fontSize: "14px", lineHeight: "1.65", margin: "0" }}>
                Zeeburgerdijk 52
                <br />
                1094 AE Amsterdam
              </p>
            </div>
            <div>
              <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#5C1A1B", marginBottom: "8px" }}>
                Openingstijden
              </div>
              {' '}
              <p style={{ color: "rgba(42,42,42,0.8)", fontSize: "14px", lineHeight: "1.65", margin: "0" }}>
                Di – Zo · 12:00 – 23:00
              </p>
            </div>
            <div>
              <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#5C1A1B", marginBottom: "8px" }}>
                Vragen?
              </div>
              {' '}
              <p style={{ color: "rgba(42,42,42,0.8)", fontSize: "14px", lineHeight: "1.65", margin: "0" }}>
                <a href="tel:+31202279885">
                  +31 20 227 9885
                </a>
                <br />
                <a href="mailto:info@pompstation.nu">
                  info@pompstation.nu
                </a>
              </p>
            </div>
          </div>
        </section>
        {' '}
        <PSFooter />
      </div>
    );
  }
}

const __root = document.getElementById('root');
if (__root) ReactDOM.createRoot(__root).render(<PompstationReserveren />);
