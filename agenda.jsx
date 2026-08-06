function PompstationAgenda(props) { return <PompstationAgendaClass {...props} />; }
class PompstationAgendaClass extends React.Component {
  renderVals() {
      const dayStyle = (featured) => ({
        width: '56px', height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: 800, textTransform: 'uppercase', fontSize: '24px',
        background: featured ? '#5C1A1B' : '#EFE7D9',
        color: featured ? '#F5EFE6' : '#2A2A2A',
        border: featured ? 'none' : '1px solid rgba(42,42,42,0.15)',
      });
      return {
        agenda: [
          { day: 'Do', act: 'Trio Nocturne', sub: 'Donderdag · Wekelijkse jamsessie', genre: 'Jazz / soul', time: '20:00–23:00', dayStyle: dayStyle(false) },
          { day: 'Vr', act: 'Wisselende programmering', sub: 'Vrijdag', genre: 'Jazz / soul', time: '20:30–00:00', dayStyle: dayStyle(true) },
          { day: 'Za', act: 'Wisselende programmering', sub: 'Zaterdag', genre: 'Tango / bossa', time: '20:30–00:30', dayStyle: dayStyle(true) },
        ],
      };
    }
  render() {
    const V = this.renderVals ? this.renderVals() : {};
    return (
      <div style={{ fontFamily: "'DM Sans',system-ui,sans-serif", color: "#2A2A2A", overflowX: "hidden" }}>
        <PSNav current="agenda" />
        {' '}
        <PSHero kicker="Live muziek · donderdag t/m zaterdag" title="Live" titleAccent="muziek" lead="Door de perfecte akoestiek van de hoge hal klinkt jazz, soul, tango en bossa nova als achtergrond bij uw diner. Geen toegang, geen reservering nodig — schuif gewoon aan." image="images/live-muziek-intiem.jpg" position="center 40%" heightVh="62" minHeight="440" />
        {' '}
        {' '}
        <div style={{ background: "rgba(168,138,90,0.15)", borderBottom: "1px solid rgba(168,138,90,0.3)" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "16px 40px", display: "flex", alignItems: "center", gap: "16px" }}>
            <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "12px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#A88A5A", flexShrink: "0" }}>
              Zomerstop
            </span>
            <p style={{ color: "rgba(42,42,42,0.8)", fontSize: "14px", margin: "0" }}>
              De live muziek pauzeert tijdelijk — we zijn terug op 12 augustus. Reserveer alvast een tafel voor het nieuwe seizoen.
            </p>
            <a href="reserveren.html" style={{ marginLeft: "auto", flexShrink: "0", fontSize: "14px", fontWeight: "500", color: "#5C1A1B", whiteSpace: "nowrap" }}>
              Reserveer →
            </a>
          </div>
        </div>
        {' '}
        {' '}
        <section style={{ background: "#F5EFE6", padding: "96px 0", borderBottom: "1px solid rgba(42,42,42,0.1)" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 40px" }}>
            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "24px", marginBottom: "56px", flexWrap: "wrap" }}>
              <div>
                <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#5C1A1B", marginBottom: "16px" }}>
                  Deze week op het podium
                </div>
                {' '}
                <h2 style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", textTransform: "uppercase", color: "#2A2A2A", fontSize: "72px", lineHeight: "0.9", margin: "0" }}>
                  Vaste
                  <br />
                  <span style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontStyle: "italic", textTransform: "none", fontWeight: "400", color: "#5C1A1B" }}>
                    avonden.
                  </span>
                </h2>
              </div>
              <p style={{ maxWidth: "384px", color: "rgba(42,42,42,0.7)", lineHeight: "1.65" }}>
                Een wisselende programmering met internationale artiesten. Reserveer een tafel om verzekerd te zijn van een plek bij het optreden.
              </p>
            </div>
            {' '}
            <div>
              {(V.agenda || []).map((a, $index) => (
                <React.Fragment key={$index}>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(12,1fr)", gap: "24px", alignItems: "center", padding: "24px 0", borderTop: "1px solid rgba(42,42,42,0.15)" }}>
                    <div style={{ gridColumn: "span 1" }}>
                      <div style={a.dayStyle}>
                        {a.day}
                      </div>
                    </div>
                    <div style={{ gridColumn: "span 7" }}>
                      <div style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontSize: "30px", color: "#2A2A2A" }}>
                        {a.act}
                      </div>
                      <div style={{ marginTop: "4px", fontSize: "14px", color: "rgba(42,42,42,0.6)" }}>
                        {a.sub}
                      </div>
                    </div>
                    <div style={{ gridColumn: "span 2", fontSize: "16px", color: "rgba(42,42,42,0.75)" }}>
                      {a.genre}
                    </div>
                    <div style={{ gridColumn: "span 2", textAlign: "right", fontFamily: "'JetBrains Mono',monospace", fontSize: "14px", color: "#5C1A1B" }}>
                      {a.time}
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </div>
            {' '}
            <div style={{ marginTop: "32px", fontSize: "14px", color: "rgba(42,42,42,0.55)", fontFamily: "'JetBrains Mono',monospace" }}>
              Programmering onder voorbehoud — volg ons voor de actuele line-up. Tijdens privé-events vervalt de reguliere muziekavond.
            </div>
          </div>
        </section>
        {' '}
        {' '}
        <section style={{ background: "#5C1A1B", color: "#F5EFE6", padding: "96px 0" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 40px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(12,1fr)", gap: "32px", marginBottom: "64px" }}>
              <div style={{ gridColumn: "span 5" }}>
                <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#A88A5A", marginBottom: "16px" }}>
                  Wat je hoort
                </div>
                {' '}
                <h2 style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", textTransform: "uppercase", color: "#F5EFE6", fontSize: "72px", lineHeight: "0.9", margin: "0" }}>
                  Het geluid
                  <br />
                  <span style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontStyle: "italic", textTransform: "none", fontWeight: "400", color: "rgba(245,239,230,0.8)" }}>
                    van het huis.
                  </span>
                </h2>
              </div>
              <div style={{ gridColumn: "span 7", paddingTop: "48px" }}>
                <p style={{ color: "rgba(245,239,230,0.75)", fontSize: "18px", lineHeight: "1.65", maxWidth: "576px", margin: "0" }}>
                  Eigen geluidsinstallatie, een echt podium en een akoestiek die een twaalf meter hoge industriële hal je cadeau doet. Meestal jazzy & soulful, soms tango of bossa nova.
                </p>
              </div>
            </div>
            {' '}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1px", background: "rgba(245,239,230,0.1)" }}>
              <div style={{ background: "#5C1A1B", padding: "32px" }}>
                <div style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", textTransform: "uppercase", color: "#A88A5A", fontSize: "30px", marginBottom: "12px" }}>
                  01
                </div>
                <h3 style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontSize: "24px", color: "#F5EFE6", margin: "0" }}>
                  Jazz & soul
                </h3>
                <p style={{ margin: "8px 0 0", fontSize: "14px", color: "rgba(245,239,230,0.65)", lineHeight: "1.6" }}>
                  Het hart van de programmering — swingend, warm, intiem.
                </p>
              </div>
              <div style={{ background: "#5C1A1B", padding: "32px" }}>
                <div style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", textTransform: "uppercase", color: "#A88A5A", fontSize: "30px", marginBottom: "12px" }}>
                  02
                </div>
                <h3 style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontSize: "24px", color: "#F5EFE6", margin: "0" }}>
                  Tango
                </h3>
                <p style={{ margin: "8px 0 0", fontSize: "14px", color: "rgba(245,239,230,0.65)", lineHeight: "1.6" }}>
                  Bandoneon en strijkers onder het twaalf meter hoge plafond.
                </p>
              </div>
              <div style={{ background: "#5C1A1B", padding: "32px" }}>
                <div style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", textTransform: "uppercase", color: "#A88A5A", fontSize: "30px", marginBottom: "12px" }}>
                  03
                </div>
                <h3 style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontSize: "24px", color: "#F5EFE6", margin: "0" }}>
                  Bossa nova
                </h3>
                <p style={{ margin: "8px 0 0", fontSize: "14px", color: "rgba(245,239,230,0.65)", lineHeight: "1.6" }}>
                  Braziliaanse zwoele klanken bij een laat glas wijn.
                </p>
              </div>
            </div>
          </div>
        </section>
        {' '}
        {' '}
        <section style={{ background: "#F5EFE6", padding: "96px 0", borderBottom: "1px solid rgba(42,42,42,0.1)" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 40px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
            <div style={{ width: "100%", aspectRatio: "4/3", overflow: "hidden", background: "#2A2A2A" }}>
              <img src="images/dj-vinyl.jpg" alt="DJ en vinyl bij Pompstation" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div style={{ background: "#EFE7D9", border: "1px solid rgba(42,42,42,0.1)", padding: "48px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#5C1A1B", marginBottom: "16px" }}>
                Privé & events
              </div>
              <h2 style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", textTransform: "uppercase", color: "#2A2A2A", fontSize: "48px", lineHeight: "0.95", margin: "0 0 16px" }}>
                Eigen line-up voor uw feest
              </h2>
              <p style={{ color: "rgba(42,42,42,0.75)", fontSize: "18px", lineHeight: "1.65", margin: "0" }}>
                Bij afhuur regelen we de muziek met u mee — van een jazztrio bij het diner tot een DJ-set die de zaal tot diep in de nacht laat dansen. Inclusief podium, geluid en hulp bij de boeking.
              </p>
              <a href="groepen.html" style={{ marginTop: "32px", display: "inline-flex", alignItems: "center", gap: "8px", color: "#5C1A1B", fontWeight: "500" }}>
                Bekijk afhuren & groepen
                <span>
                  →
                </span>
              </a>
            </div>
          </div>
        </section>
        {' '}
        <PSSfeer bg="cream-warm" lead="Volle zaal, een band op het podium en de akoestiek van twaalf meter hoog. Zo klinkt een avond bij Pompstation." />
        {' '}
        {' '}
        <section style={{ background: "#F5EFE6", padding: "96px 0" }}>
          <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 40px", textAlign: "center" }}>
            <h2 style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", textTransform: "uppercase", color: "#2A2A2A", fontSize: "72px", lineHeight: "0.9", margin: "0" }}>
              Dineren met live jazz
            </h2>
            {' '}
            <p style={{ margin: "20px auto 0", color: "rgba(42,42,42,0.7)", fontSize: "18px", maxWidth: "576px" }}>
              Reserveer een tafel op een muziekavond en maak er een complete avond van.
            </p>
            {' '}
            <div style={{ marginTop: "32px", display: "flex", flexWrap: "wrap", gap: "12px", justifyContent: "center" }}>
              <Hov as="a" href="https://www.pompstation.nu/" target="_blank" rel="noopener" style={{ background: "#5C1A1B", color: "#F5EFE6", padding: "16px 28px", fontSize: "16px", fontWeight: "500", letterSpacing: "0.02em", transition: "background 0.2s ease" }} styleHover={{ background: "#3F0F10" }}>
                Reserveer een tafel
              </Hov>
              <Hov as="a" href="menu.html" style={{ border: "1px solid #2A2A2A", color: "#2A2A2A", padding: "16px 28px", fontSize: "16px", fontWeight: "500", letterSpacing: "0.02em", transition: "all 0.2s ease" }} styleHover={{ background: "#5C1A1B", color: "#F5EFE6", borderColor: "#5C1A1B" }}>
                Bekijk het menu
              </Hov>
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
if (__root) ReactDOM.createRoot(__root).render(<PompstationAgenda />);
