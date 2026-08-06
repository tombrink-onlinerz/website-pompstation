function PompstationContact(props) { return <PompstationContactClass {...props} />; }
class PompstationContactClass extends React.Component {
  state = { sent: false, subject: 'reservering' };
    renderVals() {
      const s = this.state.subject;
      const btn = (active) => ({
        padding: '12px', fontSize: '14px', cursor: 'pointer', transition: 'all 0.2s ease',
        background: active ? '#F5EFE6' : 'transparent',
        border: active ? '1px solid #F5EFE6' : '1px solid rgba(245,239,230,0.25)',
        color: active ? '#5C1A1B' : 'rgba(245,239,230,0.85)',
        fontFamily: "'DM Sans',sans-serif",
      });
      return {
        sent: this.state.sent,
        open: !this.state.sent,
        submit: (e) => { e.preventDefault(); this.setState({ sent: true }); },
        setSubjReservering: () => this.setState({ subject: 'reservering' }),
        setSubjAfhuren: () => this.setState({ subject: 'afhuren' }),
        setSubjCadeaubon: () => this.setState({ subject: 'cadeaubon' }),
        setSubjAnders: () => this.setState({ subject: 'anders' }),
        subjReservering: btn(s === 'reservering'),
        subjAfhuren: btn(s === 'afhuren'),
        subjCadeaubon: btn(s === 'cadeaubon'),
        subjAnders: btn(s === 'anders'),
      };
    }
  render() {
    const V = this.renderVals ? this.renderVals() : {};
    return (
      <div style={{ fontFamily: "'DM Sans',system-ui,sans-serif", color: "#2A2A2A", overflowX: "hidden" }}>
        <PSNav current="contact" />
        {' '}
        <PSHero kicker="Zeeburgerdijk 52 · Amsterdam-Oost" title="Contact" lead="Reserveren, de route of een vraag over afhuren — u vindt ons hier." image="images/interior-vide.jpg" position="center 30%" heightVh="52" minHeight="380" />
        {' '}
        {' '}
        <section style={{ background: "#5C1A1B", color: "#F5EFE6" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 40px", display: "grid", gridTemplateColumns: "repeat(3,1fr)" }}>
            <a href="tel:+31202279885" style={{ padding: "36px 0", paddingRight: "32px", display: "block" }}>
              <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(245,239,230,0.55)", marginBottom: "8px" }}>
                Bel ons
              </div>
              {' '}
              <Hov as="div" style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontSize: "30px", color: "#F5EFE6" }} styleHover={{ color: "#A88A5A" }}>
                +31 20 227 9885
              </Hov>
            </a>
            <a href="mailto:info@pompstation.nu" style={{ padding: "36px 32px", display: "block", borderLeft: "1px solid rgba(245,239,230,0.15)", borderRight: "1px solid rgba(245,239,230,0.15)" }}>
              <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(245,239,230,0.55)", marginBottom: "8px" }}>
                Algemeen
              </div>
              {' '}
              <Hov as="div" style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontSize: "30px", color: "#F5EFE6" }} styleHover={{ color: "#A88A5A" }}>
                info@pompstation.nu
              </Hov>
            </a>
            <a href="mailto:events@pompstation.nu" style={{ padding: "36px 0", paddingLeft: "32px", display: "block" }}>
              <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(245,239,230,0.55)", marginBottom: "8px" }}>
                Events & afhuren
              </div>
              {' '}
              <Hov as="div" style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontSize: "30px", color: "#F5EFE6" }} styleHover={{ color: "#A88A5A" }}>
                events@pompstation.nu
              </Hov>
            </a>
          </div>
        </section>
        {' '}
        {' '}
        <section style={{ background: "#F5EFE6", padding: "96px 0", borderBottom: "1px solid rgba(42,42,42,0.1)" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 40px", display: "grid", gridTemplateColumns: "repeat(12,1fr)", gap: "48px" }}>
            <div style={{ gridColumn: "span 5" }}>
              <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#5C1A1B", marginBottom: "16px" }}>
                Adres & openingstijden
              </div>
              {' '}
              <address style={{ fontStyle: "normal", marginBottom: "32px" }}>
                <div style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontSize: "40px", color: "#2A2A2A", lineHeight: "1.1" }}>
                  Zeeburgerdijk 52
                </div>
                {' '}
                <div style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontSize: "40px", color: "#2A2A2A", lineHeight: "1.1" }}>
                  1094 AE Amsterdam
                </div>
                {' '}
                <div style={{ marginTop: "8px", color: "rgba(42,42,42,0.6)" }}>
                  Amsterdam-Oost · Indische Buurt
                </div>
              </address>
              {' '}
              <div style={{ borderTop: "1px solid rgba(42,42,42,0.15)" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 0", borderBottom: "1px solid rgba(42,42,42,0.1)", opacity: "0.5" }}>
                  <span style={{ color: "#2A2A2A", fontWeight: "500", width: "96px" }}>
                    Maandag
                  </span>
                  <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "14px", color: "rgba(42,42,42,0.75)" }}>
                    Gesloten
                  </span>
                </div>
                {' '}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 0", borderBottom: "1px solid rgba(42,42,42,0.1)", opacity: "0.5" }}>
                  <span style={{ color: "#2A2A2A", fontWeight: "500", width: "96px" }}>
                    Dinsdag
                  </span>
                  <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "14px", color: "rgba(42,42,42,0.75)" }}>
                    Gesloten
                  </span>
                </div>
                {' '}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 0", borderBottom: "1px solid rgba(42,42,42,0.1)" }}>
                  <span style={{ color: "#2A2A2A", fontWeight: "500", width: "96px" }}>
                    Woensdag
                  </span>
                  <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "14px", color: "rgba(42,42,42,0.75)" }}>
                    17:00 – 00:00
                  </span>
                </div>
                {' '}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 0", borderBottom: "1px solid rgba(42,42,42,0.1)" }}>
                  <span style={{ color: "#2A2A2A", fontWeight: "500", width: "96px" }}>
                    Donderdag
                  </span>
                  <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "14px", color: "rgba(42,42,42,0.75)" }}>
                    17:00 – 00:00
                  </span>
                </div>
                {' '}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 0", borderBottom: "1px solid rgba(42,42,42,0.1)" }}>
                  <span style={{ color: "#2A2A2A", fontWeight: "500", width: "96px" }}>
                    Vrijdag
                  </span>
                  <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "14px", color: "rgba(42,42,42,0.75)" }}>
                    17:00 – 01:00
                  </span>
                </div>
                {' '}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 0", borderBottom: "1px solid rgba(42,42,42,0.1)" }}>
                  <span style={{ color: "#2A2A2A", fontWeight: "500", width: "96px" }}>
                    Zaterdag
                  </span>
                  <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "14px", color: "rgba(42,42,42,0.75)" }}>
                    17:00 – 01:00
                  </span>
                </div>
                {' '}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 0", borderBottom: "1px solid rgba(42,42,42,0.1)", opacity: "0.5" }}>
                  <span style={{ color: "#2A2A2A", fontWeight: "500", width: "96px" }}>
                    Zondag
                  </span>
                  <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "14px", color: "rgba(42,42,42,0.75)" }}>
                    Gesloten
                  </span>
                </div>
              </div>
              {' '}
              <p style={{ marginTop: "20px", fontSize: "14px", color: "rgba(42,42,42,0.55)", fontFamily: "'JetBrains Mono',monospace", lineHeight: "1.6" }}>
                Wij accepteren geen contant geld meer.
              </p>
            </div>
            <div style={{ gridColumn: "span 7" }}>
              <div style={{ position: "relative", width: "100%", height: "100%", minHeight: "360px", overflow: "hidden", border: "1px solid rgba(42,42,42,0.15)", background: "#EFE7D9" }}>
                <iframe title="Kaart — Pompstation, Zeeburgerdijk 52 Amsterdam" src="https://www.openstreetmap.org/export/embed.html?bbox=4.9335%2C52.3640%2C4.9465%2C52.3700&layer=mapnik&marker=52.3670%2C4.9400" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", border: "0", filter: "grayscale(0.3) contrast(1.05)" }} loading="lazy" />
                {' '}
                <Hov as="a" href="https://www.google.com/maps/search/?api=1&query=Pompstation+Zeeburgerdijk+52+Amsterdam" target="_blank" rel="noopener" style={{ position: "absolute", bottom: "16px", right: "16px", background: "#5C1A1B", color: "#F5EFE6", padding: "10px 16px", fontSize: "14px", fontWeight: "500", letterSpacing: "0.02em", boxShadow: "0 8px 20px rgba(0,0,0,0.2)", transition: "background 0.2s ease" }} styleHover={{ background: "#3F0F10" }}>
                  Plan je route →
                </Hov>
              </div>
            </div>
          </div>
        </section>
        {' '}
        {' '}
        <section style={{ background: "#EFE7D9", padding: "96px 0" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 40px" }}>
            <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#5C1A1B", marginBottom: "16px" }}>
              Zo kom je hier
            </div>
            {' '}
            <h2 style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", textTransform: "uppercase", color: "#2A2A2A", fontSize: "60px", lineHeight: "0.9", margin: "0 0 56px" }}>
              Bereikbaarheid
            </h2>
            {' '}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "1px", background: "rgba(42,42,42,0.1)" }}>
              <div style={{ background: "#F5EFE6", padding: "32px" }}>
                <div style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", textTransform: "uppercase", color: "#5C1A1B", fontSize: "30px", marginBottom: "12px" }}>
                  01
                </div>
                <h3 style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontSize: "24px", color: "#2A2A2A", margin: "0" }}>
                  Met de tram
                </h3>
                <p style={{ margin: "8px 0 0", fontSize: "14px", color: "rgba(42,42,42,0.65)", lineHeight: "1.6" }}>
                  Tram 14 rijdt rechtstreeks vanaf Amsterdam Centraal en stopt voor de deur.
                </p>
              </div>
              <div style={{ background: "#F5EFE6", padding: "32px" }}>
                <div style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", textTransform: "uppercase", color: "#5C1A1B", fontSize: "30px", marginBottom: "12px" }}>
                  02
                </div>
                <h3 style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontSize: "24px", color: "#2A2A2A", margin: "0" }}>
                  Lopen vanaf het station
                </h3>
                <p style={{ margin: "8px 0 0", fontSize: "14px", color: "rgba(42,42,42,0.65)", lineHeight: "1.6" }}>
                  Vanaf station Muiderpoort is het ongeveer 9 minuten lopen.
                </p>
              </div>
              <div style={{ background: "#F5EFE6", padding: "32px" }}>
                <div style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", textTransform: "uppercase", color: "#5C1A1B", fontSize: "30px", marginBottom: "12px" }}>
                  03
                </div>
                <h3 style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontSize: "24px", color: "#2A2A2A", margin: "0" }}>
                  Met de boot
                </h3>
                <p style={{ margin: "8px 0 0", fontSize: "14px", color: "rgba(42,42,42,0.65)", lineHeight: "1.6" }}>
                  Aanmeren kan bij de steiger aan de Nieuwe Vaart, ter hoogte van de Cruquiusweg.
                </p>
              </div>
              <div style={{ background: "#F5EFE6", padding: "32px" }}>
                <div style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", textTransform: "uppercase", color: "#5C1A1B", fontSize: "30px", marginBottom: "12px" }}>
                  04
                </div>
                <h3 style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontSize: "24px", color: "#2A2A2A", margin: "0" }}>
                  Parkeren
                </h3>
                <p style={{ margin: "8px 0 0", fontSize: "14px", color: "rgba(42,42,42,0.65)", lineHeight: "1.6" }}>
                  In de straten rondom Pompstation. Na 21:00 uur en op zondag gratis.
                </p>
              </div>
            </div>
          </div>
        </section>
        {' '}
        <PSSfeer bg="cream" lead="Even sfeer proeven voordat u langskomt — de hal, de bar, het terras en de zaal." />
        {' '}
        {' '}
        <section style={{ background: "#5C1A1B", color: "#F5EFE6", padding: "96px 0" }}>
          <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 40px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(12,1fr)", gap: "48px" }}>
              <div style={{ gridColumn: "span 5" }}>
                <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#A88A5A", marginBottom: "16px" }}>
                  Stuur een bericht
                </div>
                {' '}
                <h2 style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", textTransform: "uppercase", color: "#F5EFE6", fontSize: "60px", lineHeight: "0.9", margin: "0" }}>
                  Een vraag?
                  <br />
                  <span style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontStyle: "italic", textTransform: "none", fontWeight: "400", color: "rgba(245,239,230,0.8)" }}>
                    Laat het weten.
                  </span>
                </h2>
                {' '}
                <p style={{ margin: "20px 0 0", color: "rgba(245,239,230,0.7)", lineHeight: "1.65" }}>
                  Voor een tafelreservering verwijzen we je naar onze reserveringsmodule. Voor alle andere vragen — afhuren, cadeaubonnen, samenwerkingen — gebruik dit formulier.
                </p>
                {' '}
                <a href="https://www.pompstation.nu/" target="_blank" rel="noopener" style={{ marginTop: "24px", display: "inline-flex", alignItems: "center", gap: "8px", color: "#A88A5A", fontWeight: "500" }}>
                  Direct een tafel reserveren
                  <span>
                    →
                  </span>
                </a>
              </div>
              <div style={{ gridColumn: "span 7" }}>
                {(V.sent) ? (<React.Fragment>
                  <div style={{ border: "1px solid rgba(245,239,230,0.2)", padding: "48px", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <div style={{ width: "56px", height: "56px", border: "1px solid rgba(245,239,230,0.4)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F5EFE6" strokeWidth="1.5">
                        <path d="M5 12 L 10 17 L 19 7" />
                      </svg>
                    </div>
                    <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(245,239,230,0.6)", marginBottom: "12px" }}>
                      Bericht verstuurd
                    </div>
                    <h3 style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", textTransform: "uppercase", color: "#F5EFE6", fontSize: "44px", margin: "0" }}>
                      Bedankt.
                    </h3>
                    <p style={{ margin: "16px 0 0", color: "rgba(245,239,230,0.75)", maxWidth: "384px" }}>
                      We nemen zo snel mogelijk contact met je op. Spoed? Bel{' '}
                      <a href="tel:+31202279885" style={{ color: "#F5EFE6", textDecoration: "underline" }}>
                        +31 20 227 9885
                      </a>
                      .
                    </p>
                  </div>
                </React.Fragment>) : null}
                {' '}
                {(V.open) ? (<React.Fragment>
                  <form onSubmit={V.submit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                    <div>
                      <label style={{ display: "block", fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(245,239,230,0.55)", marginBottom: "12px" }}>
                        Onderwerp
                      </label>
                      {' '}
                      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "8px" }}>
                        <button type="button" onClick={V.setSubjReservering} style={V.subjReservering}>
                          Reservering
                        </button>
                        <button type="button" onClick={V.setSubjAfhuren} style={V.subjAfhuren}>
                          Afhuren
                        </button>
                        <button type="button" onClick={V.setSubjCadeaubon} style={V.subjCadeaubon}>
                          Cadeaubon
                        </button>
                        <button type="button" onClick={V.setSubjAnders} style={V.subjAnders}>
                          Anders
                        </button>
                      </div>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                      <div>
                        <label style={{ display: "block", fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(245,239,230,0.55)", marginBottom: "12px" }}>
                          Naam
                        </label>
                        {' '}
                        <input type="text" placeholder="Voornaam Achternaam" style={{ width: "100%", background: "transparent", border: "1px solid rgba(245,239,230,0.25)", color: "#F5EFE6", padding: "14px 16px", fontSize: "14px", outline: "none", fontFamily: "'DM Sans',sans-serif" }} />
                      </div>
                      <div>
                        <label style={{ display: "block", fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(245,239,230,0.55)", marginBottom: "12px" }}>
                          E-mail
                        </label>
                        {' '}
                        <input type="email" placeholder="naam@email.nl" style={{ width: "100%", background: "transparent", border: "1px solid rgba(245,239,230,0.25)", color: "#F5EFE6", padding: "14px 16px", fontSize: "14px", outline: "none", fontFamily: "'DM Sans',sans-serif" }} />
                      </div>
                    </div>
                    <div>
                      <label style={{ display: "block", fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(245,239,230,0.55)", marginBottom: "12px" }}>
                        Bericht
                      </label>
                      {' '}
                      <textarea rows="4" placeholder="Waarmee kunnen we je helpen?" style={{ width: "100%", background: "transparent", border: "1px solid rgba(245,239,230,0.25)", color: "#F5EFE6", padding: "14px 16px", fontSize: "14px", outline: "none", resize: "none", fontFamily: "'DM Sans',sans-serif" }} />
                    </div>
                    <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", paddingTop: "4px" }}>
                      <input type="checkbox" style={{ marginTop: "4px", width: "16px", height: "16px", accentColor: "#5C1A1B", flexShrink: "0" }} />
                      <label style={{ fontSize: "14px", color: "rgba(245,239,230,0.7)", lineHeight: "1.6" }}>
                        Ik ga akkoord met de{' '}
                        <a href="#" style={{ color: "#F5EFE6", textDecoration: "underline" }}>
                          privacyverklaring
                        </a>
                        {' '}van Pompstation.
                      </label>
                    </div>
                    <Hov as="button" type="submit" style={{ alignSelf: "flex-start", background: "#F5EFE6", color: "#5C1A1B", padding: "16px 32px", fontSize: "16px", fontWeight: "500", letterSpacing: "0.02em", border: "none", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "12px", transition: "background 0.2s ease" }} styleHover={{ background: "#EFE7D9" }}>
                      <span>
                        Verstuur bericht
                      </span>
                      <span>
                        →
                      </span>
                    </Hov>
                  </form>
                </React.Fragment>) : null}
              </div>
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
if (__root) ReactDOM.createRoot(__root).render(<PompstationContact />);
