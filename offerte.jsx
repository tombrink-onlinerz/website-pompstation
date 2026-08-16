function PompstationOfferte(props) { return <PompstationOfferteClass {...props} />; }
class PompstationOfferteClass extends React.Component {
  state = { submitted: false, type: '', people: 60 };
    renderVals() {
      const types = ['bedrijfsfeest','bedrijfsborrel','zakelijke-lunch','vriendengroep','verjaardag','bruiloft','anders'];
      const typeStyles = {};
      types.forEach(v => {
        const active = this.state.type === v;
        typeStyles[v] = {
          padding: '14px 16px', fontSize: '14px', textAlign: 'left', cursor: 'pointer', transition: 'all 0.2s ease',
          background: active ? '#5C1A1B' : 'transparent',
          border: active ? '1px solid #5C1A1B' : '1px solid rgba(42,42,42,0.2)',
          color: active ? '#F5EFE6' : 'rgba(42,42,42,0.8)',
          fontFamily: "'DM Sans',sans-serif",
        };
      });
      const pct = (this.state.people - 10) / (360 - 10) * 100;
      return {
        submitted: this.state.submitted,
        open: !this.state.submitted,
        people: this.state.people,
        typeStyles,
        rangeStyle: { width: '100%', background: `linear-gradient(to right, #5C1A1B 0%, #5C1A1B ${pct}%, rgba(42,42,42,0.15) ${pct}%, rgba(42,42,42,0.15) 100%)` },
        pick: (e) => this.setState({ type: e.currentTarget.getAttribute('data-v') }),
        setPeople: (e) => this.setState({ people: parseInt(e.target.value) }),
        submit: (e) => { e.preventDefault(); this.setState({ submitted: true }); },
      };
    }
  render() {
    const V = this.renderVals ? this.renderVals() : {};
    return (
      <div style={{ fontFamily: "'DM Sans',system-ui,sans-serif", color: "#2A2A2A", overflowX: "hidden" }}>
        <PSNav current="groepen" solid="true" />
        {' '}
        {' '}
        <section style={{ position: "relative", color: "#F5EFE6", padding: "clamp(46px, 8vw, 144px) 0 clamp(46px, 8vw, 80px)", borderBottom: "1px solid rgba(245,239,230,0.1)", overflow: "hidden" }}>
          <img src="images/event-staand.jpg" alt="Evenement Pompstation" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%" }} />
          {' '}
          <div style={{ position: "absolute", inset: "0", background: "rgba(0,0,0,0.72)" }} />
          {' '}
          <div style={{ position: "relative", zIndex: "10", maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(20px, 5vw, 40px)", display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "24px", flexWrap: "wrap" }}>
            <div>
              <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(245,239,230,0.6)", marginBottom: "16px" }}>
                Offerte aanvragen · groepen & events
              </div>
              {' '}
              <h1 style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", textTransform: "uppercase", color: "#F5EFE6", fontSize: "clamp(48px, 13vw, 120px)", lineHeight: "0.9", margin: "0" }}>
                Offerte
                <br />
                <span style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontStyle: "italic", textTransform: "none", fontWeight: "400", color: "rgba(245,239,230,0.8)" }}>
                  aanvragen.
                </span>
              </h1>
            </div>
            <p style={{ maxWidth: "384px", color: "rgba(245,239,230,0.7)", fontSize: "18px", lineHeight: "1.65" }}>
              Vul het formulier in en we reageren{' '}
              <strong style={{ color: "#F5EFE6" }}>
                binnen 1 werkdag
              </strong>
              {' '}met een offerte op maat — inclusief menu, drank, set-up en entertainment-suggesties.
            </p>
          </div>
        </section>
        {' '}
        {' '}
        <section style={{ background: "#F5EFE6", padding: "clamp(46px, 8vw, 96px) 0" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(20px, 5vw, 40px)", display: "grid", gridTemplateColumns: "repeat(12,1fr)", gap: "clamp(34px, 6.5vw, 64px)" }}>
            <div style={{ gridColumn: "span 4" }}>
              <div style={{ background: "#5C1A1B", color: "#F5EFE6", padding: "clamp(20px, 5vw, 40px)" }}>
                <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(245,239,230,0.6)", marginBottom: "24px" }}>
                  Direct contact
                </div>
                {' '}
                <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
                    <div style={{ width: "40px", height: "40px", flexShrink: "0", border: "1px solid rgba(245,239,230,0.25)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" />
                      </svg>
                    </div>
                    <div>
                      <div style={{ fontSize: "14px", color: "rgba(245,239,230,0.55)", fontFamily: "'JetBrains Mono',monospace", marginBottom: "4px" }}>
                        Bel direct
                      </div>
                      <a href="tel:+31641655027" style={{ color: "#F5EFE6", fontWeight: "500" }}>
                        +31 6 41 65 50 27
                      </a>
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
                    <div style={{ width: "40px", height: "40px", flexShrink: "0", border: "1px solid rgba(245,239,230,0.25)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <rect x="2" y="4" width="20" height="16" />
                        <path d="M2 6 L 12 13 L 22 6" />
                      </svg>
                    </div>
                    <div>
                      <div style={{ fontSize: "14px", color: "rgba(245,239,230,0.55)", fontFamily: "'JetBrains Mono',monospace", marginBottom: "4px" }}>
                        E-mail
                      </div>
                      <a href="mailto:events@pompstation.nu" style={{ color: "#F5EFE6", fontWeight: "500" }}>
                        events@pompstation.nu
                      </a>
                    </div>
                  </div>
                </div>
                {' '}
                <div style={{ marginTop: "40px", paddingTop: "32px", borderTop: "1px solid rgba(245,239,230,0.15)" }}>
                  <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(245,239,230,0.5)", marginBottom: "16px" }}>
                    Ruimtes & capaciteit
                  </div>
                  {' '}
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px", borderBottom: "1px solid rgba(245,239,230,0.1)", paddingBottom: "12px", marginBottom: "12px" }}>
                    <span style={{ color: "rgba(245,239,230,0.7)" }}>
                      Restaurant
                    </span>
                    <span style={{ color: "#F5EFE6", fontWeight: "500" }}>
                      10–180 personen
                    </span>
                  </div>
                  {' '}
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px", borderBottom: "1px solid rgba(245,239,230,0.1)", paddingBottom: "12px", marginBottom: "12px" }}>
                    <span style={{ color: "rgba(245,239,230,0.7)" }}>
                      De vide
                    </span>
                    <span style={{ color: "#F5EFE6", fontWeight: "500" }}>
                      20–100 personen
                    </span>
                  </div>
                  {' '}
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px", borderBottom: "1px solid rgba(245,239,230,0.1)", paddingBottom: "12px", marginBottom: "12px" }}>
                    <span style={{ color: "rgba(245,239,230,0.7)" }}>
                      Het terras
                    </span>
                    <span style={{ color: "#F5EFE6", fontWeight: "500" }}>
                      20–200 personen
                    </span>
                  </div>
                  {' '}
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px", borderBottom: "1px solid rgba(245,239,230,0.1)", paddingBottom: "12px" }}>
                    <span style={{ color: "rgba(245,239,230,0.7)" }}>
                      Volledig exclusief
                    </span>
                    <span style={{ color: "#F5EFE6", fontWeight: "500" }}>
                      tot 360 personen
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ gridColumn: "span 8" }}>
              {(V.submitted) ? (<React.Fragment>
                <div style={{ background: "#5C1A1B", color: "#F5EFE6", padding: "clamp(34px, 6.5vw, 64px) clamp(20px, 5vw, 48px)", textAlign: "center" }}>
                  <div style={{ width: "64px", height: "64px", margin: "0 auto 32px", border: "1px solid rgba(245,239,230,0.5)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F5EFE6" strokeWidth="1.5">
                      <path d="M5 12 L 10 17 L 19 7" />
                    </svg>
                  </div>
                  {' '}
                  <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(245,239,230,0.6)", marginBottom: "16px" }}>
                    Aanvraag ontvangen
                  </div>
                  {' '}
                  <h2 style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", textTransform: "uppercase", fontSize: "clamp(30px, 6.5vw, 56px)", lineHeight: "0.9", margin: "0" }}>
                    Dank u.
                  </h2>
                  {' '}
                  <p style={{ margin: "20px auto 0", color: "rgba(245,239,230,0.75)", fontSize: "18px", lineHeight: "1.65", maxWidth: "384px" }}>
                    We reageren binnen 1 werkdag. Voor spoed:{' '}
                    <a href="tel:+31641655027" style={{ color: "#F5EFE6", textDecoration: "underline" }}>
                      +31 6 41 65 50 27
                    </a>
                  </p>
                </div>
              </React.Fragment>) : null}
              {' '}
              {(V.open) ? (<React.Fragment>
                <form onSubmit={V.submit} style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
                  <div>
                    <label style={{ display: "block", fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(42,42,42,0.55)", marginBottom: "12px" }}>
                      Type gelegenheid
                    </label>
                    {' '}
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "8px" }}>
                      <button type="button" onClick={V.pick} data-v="bedrijfsfeest" style={V.typeStyles.bedrijfsfeest}>
                        Bedrijfsfeest
                      </button>
                      <button type="button" onClick={V.pick} data-v="bedrijfsborrel" style={V.typeStyles.bedrijfsborrel}>
                        Bedrijfsborrel
                      </button>
                      <button type="button" onClick={V.pick} data-v="zakelijke-lunch" style={V.typeStyles['zakelijke-lunch']}>
                        Zakelijke lunch
                      </button>
                      <button type="button" onClick={V.pick} data-v="vriendengroep" style={V.typeStyles.vriendengroep}>
                        Vriendengroep
                      </button>
                      <button type="button" onClick={V.pick} data-v="verjaardag" style={V.typeStyles.verjaardag}>
                        Verjaardag
                      </button>
                      <button type="button" onClick={V.pick} data-v="bruiloft" style={V.typeStyles.bruiloft}>
                        Bruiloft
                      </button>
                      <button type="button" onClick={V.pick} data-v="anders" style={V.typeStyles.anders}>
                        Anders
                      </button>
                    </div>
                  </div>
                  <div>
                    <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: "12px" }}>
                      <label style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(42,42,42,0.55)" }}>
                        Aantal personen
                      </label>
                      <div style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", fontSize: "clamp(25px, 5.2vw, 36px)", color: "#5C1A1B" }}>
                        {V.people}
                      </div>
                    </div>
                    {' '}
                    <input type="range" min="10" max="360" step="5" value={V.people} onInput={V.setPeople} className="ps-range" style={V.rangeStyle} />
                    {' '}
                    <div style={{ display: "flex", justifyContent: "space-between", marginTop: "8px", fontSize: "12px", fontFamily: "'JetBrains Mono',monospace", color: "rgba(42,42,42,0.4)" }}>
                      <span>
                        10
                      </span>
                      <span>
                        100
                      </span>
                      <span>
                        200
                      </span>
                      <span>
                        360
                      </span>
                    </div>
                  </div>
                  <div>
                    <label style={{ display: "block", fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(42,42,42,0.55)", marginBottom: "12px" }}>
                      Gewenste datum
                    </label>
                    {' '}
                    <input type="date" style={{ width: "100%", padding: "14px 16px", background: "#F5EFE6", border: "1px solid rgba(42,42,42,0.2)", color: "#2A2A2A", outline: "none", fontFamily: "'DM Sans',sans-serif" }} />
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                    <div>
                      <label style={{ display: "block", fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(42,42,42,0.55)", marginBottom: "12px" }}>
                        Naam
                      </label>
                      <input type="text" placeholder="Voornaam Achternaam" style={{ width: "100%", padding: "14px 16px", background: "#F5EFE6", border: "1px solid rgba(42,42,42,0.2)", color: "#2A2A2A", outline: "none", fontFamily: "'DM Sans',sans-serif" }} />
                    </div>
                    <div>
                      <label style={{ display: "block", fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(42,42,42,0.55)", marginBottom: "12px" }}>
                        E-mail
                      </label>
                      <input type="email" placeholder="naam@bedrijf.nl" style={{ width: "100%", padding: "14px 16px", background: "#F5EFE6", border: "1px solid rgba(42,42,42,0.2)", color: "#2A2A2A", outline: "none", fontFamily: "'DM Sans',sans-serif" }} />
                    </div>
                  </div>
                  <div>
                    <label style={{ display: "block", fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(42,42,42,0.55)", marginBottom: "12px" }}>
                      Bedrijfsnaam{' '}
                      <span style={{ opacity: "0.5", textTransform: "none", letterSpacing: "normal" }}>
                        (optioneel)
                      </span>
                    </label>
                    <input type="text" placeholder="Naam van uw bedrijf of organisatie" style={{ width: "100%", padding: "14px 16px", background: "#F5EFE6", border: "1px solid rgba(42,42,42,0.2)", color: "#2A2A2A", outline: "none", fontFamily: "'DM Sans',sans-serif" }} />
                  </div>
                  <div>
                    <label style={{ display: "block", fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(42,42,42,0.55)", marginBottom: "12px" }}>
                      Telefoon
                    </label>
                    <input type="tel" placeholder="+31 6 …" style={{ width: "100%", padding: "14px 16px", background: "#F5EFE6", border: "1px solid rgba(42,42,42,0.2)", color: "#2A2A2A", outline: "none", fontFamily: "'DM Sans',sans-serif" }} />
                  </div>
                  <div>
                    <label style={{ display: "block", fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(42,42,42,0.55)", marginBottom: "12px" }}>
                      Bericht{' '}
                      <span style={{ opacity: "0.5", textTransform: "none", letterSpacing: "normal" }}>
                        (optioneel)
                      </span>
                    </label>
                    <textarea rows="4" placeholder="Bijzondere wensen, dieetwensen, vraag over entertainment…" style={{ width: "100%", padding: "14px 16px", background: "#F5EFE6", border: "1px solid rgba(42,42,42,0.2)", color: "#2A2A2A", outline: "none", resize: "none", fontFamily: "'DM Sans',sans-serif" }} />
                  </div>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                    <input type="checkbox" style={{ marginTop: "4px", width: "16px", height: "16px", accentColor: "#5C1A1B", flexShrink: "0" }} />
                    <label style={{ fontSize: "14px", color: "rgba(42,42,42,0.65)", lineHeight: "1.6" }}>
                      Ik ga akkoord met de{' '}
                      <a href="privacy.html" style={{ textDecoration: "underline" }}>
                        privacyverklaring
                      </a>
                      {' '}van Pompstation.
                    </label>
                  </div>
                  <div>
                    <Hov as="button" type="submit" style={{ background: "#5C1A1B", color: "#F5EFE6", padding: "20px clamp(20px, 5vw, 40px)", fontSize: "16px", fontWeight: "500", letterSpacing: "0.02em", border: "none", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "12px", transition: "background 0.2s ease" }} styleHover={{ background: "#3F0F10" }}>
                      <span>
                        Verstuur aanvraag
                      </span>
                      <span>
                        →
                      </span>
                    </Hov>
                    {' '}
                    <p style={{ margin: "16px 0 0", fontSize: "14px", color: "rgba(42,42,42,0.5)", fontFamily: "'JetBrains Mono',monospace" }}>
                      We reageren binnen 1 werkdag. Voor spoed:{' '}
                      <a href="tel:+31641655027" style={{ textDecoration: "underline" }}>
                        +31 6 41 65 50 27
                      </a>
                    </p>
                  </div>
                </form>
              </React.Fragment>) : null}
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
if (__root) ReactDOM.createRoot(__root).render(<PompstationOfferte />);
