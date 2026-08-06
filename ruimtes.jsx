function PompstationRuimtes(props) { return <PompstationRuimtesClass {...props} />; }
class PompstationRuimtesClass extends React.Component {
  renderVals() {
      return {
        rooms: [
          { naam: 'Het restaurant', cap: '2–180', img: 'images/restaurant-zaal.jpg', pos: 'center 20%', href: 'ruimte-restaurant.html', body: 'De grote zaal met open keuken, kaarslicht en live jazz. Voor diner, lunch of een besloten avond.' },
          { naam: 'De vide', cap: '20–100', img: 'images/bride-vide.jpg', pos: 'center 30%', href: 'ruimte-vide.html', body: 'De verhoogde galerij met uitzicht op de zaal. Privé, maar toch deel van de sfeer.' },
          { naam: 'Het terras', cap: '20–200', img: 'images/terras-outdoor.jpg', pos: 'center 50%', href: 'ruimte-terras.html', body: 'Omringd door groen, onder een open hemel. Reserveren voor tafels en groepen is mogelijk.' },
          { naam: 'Volledig exclusief', cap: 'tot 360', img: 'images/live-band-vide.jpg', pos: 'center 40%', href: 'ruimte-exclusief.html', body: 'De hele locatie voor uw eigen avond — bruiloften, galadiners en productlanceringen.' },
        ],
      };
    }
  render() {
    const V = this.renderVals ? this.renderVals() : {};
    return (
      <div style={{ fontFamily: "'DM Sans',system-ui,sans-serif", color: "#2A2A2A", overflowX: "hidden" }}>
        <PSNav current="ruimtes" />
        {' '}
        <PSHero kicker="Onze locatie" title="Ruimtes" titleAccent="& sfeer" lead="Van een tafel voor twee tot een gala voor driehonderd — Pompstation biedt een ruimte voor elk gezelschap." image="images/restaurant-zaal.jpg" position="center 20%" heightVh="62" minHeight="440" />
        {' '}
        {' '}
        <section style={{ background: "#F5EFE6", padding: "112px 0", borderBottom: "1px solid rgba(42,42,42,0.1)" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 40px", display: "grid", gridTemplateColumns: "repeat(12,1fr)", gap: "48px", alignItems: "flex-start" }}>
            <div style={{ gridColumn: "span 5" }}>
              <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#5C1A1B", marginBottom: "16px" }}>
                Het gebouw
              </div>
              {' '}
              <h2 style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", textTransform: "uppercase", color: "#2A2A2A", fontSize: "60px", lineHeight: "0.9", margin: "0" }}>
                Een monument
                <br />
                <span style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontStyle: "italic", textTransform: "none", fontWeight: "400", color: "#5C1A1B" }}>
                  van 1912.
                </span>
              </h2>
              {' '}
              <div style={{ marginTop: "32px", display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "16px" }}>
                <div>
                  <div style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", textTransform: "uppercase", color: "#5C1A1B", fontSize: "36px" }}>
                    12m
                  </div>
                  <div style={{ marginTop: "4px", fontSize: "11px", color: "rgba(42,42,42,0.6)", fontFamily: "'JetBrains Mono',monospace", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                    vrije hoogte
                  </div>
                </div>
                <div>
                  <div style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", textTransform: "uppercase", color: "#5C1A1B", fontSize: "36px" }}>
                    360
                  </div>
                  <div style={{ marginTop: "4px", fontSize: "11px", color: "rgba(42,42,42,0.6)", fontFamily: "'JetBrains Mono',monospace", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                    max gasten
                  </div>
                </div>
                <div>
                  <div style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", textTransform: "uppercase", color: "#5C1A1B", fontSize: "36px" }}>
                    4
                  </div>
                  <div style={{ marginTop: "4px", fontSize: "11px", color: "rgba(42,42,42,0.6)", fontFamily: "'JetBrains Mono',monospace", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                    ruimtes
                  </div>
                </div>
              </div>
            </div>
            <div style={{ gridColumn: "span 7" }}>
              <p style={{ color: "rgba(42,42,42,0.8)", fontSize: "18px", lineHeight: "1.65", margin: "0" }}>
                Pompstation is een voormalig watergemaal in Amsterdam-Oost, omgebouwd tot een van de meest bijzondere restaurantlocaties van de stad. De industriële hal met zijn plafond van 12 meter hoog biedt ruimte voor zowel een romantisch diner als een groot evenement.
              </p>
              {' '}
              <p style={{ color: "rgba(42,42,42,0.8)", fontSize: "18px", lineHeight: "1.65", margin: "20px 0 0" }}>
                Afhankelijk van de gelegenheid kiest u voor de restaurantzaal, de vide, het terras of de gehele locatie exclusief. Elke ruimte heeft zijn eigen karakter — maar deelt dezelfde sfeer.
              </p>
            </div>
          </div>
        </section>
        {' '}
        {' '}
        <section style={{ background: "#EFE7D9", padding: "112px 0" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 40px" }}>
            <h2 style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", textTransform: "uppercase", color: "#2A2A2A", fontSize: "60px", lineHeight: "0.9", margin: "0 0 64px" }}>
              Vier ruimtes,
              <br />
              <span style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontStyle: "italic", textTransform: "none", fontWeight: "400", color: "#5C1A1B" }}>
                één locatie.
              </span>
            </h2>
            {' '}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "24px" }}>
              {(V.rooms || []).map((r, $index) => (
                <React.Fragment key={$index}>
                  <Hov as="a" href={r.href} style={{ display: "flex", flexDirection: "column", background: "#F5EFE6", border: "1px solid rgba(42,42,42,0.1)", transition: "border-color 0.2s ease" }} styleHover={{ borderColor: "#5C1A1B" }}>
                    <div style={{ overflow: "hidden", height: "220px" }}>
                      <img src={r.img} alt={r.naam} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: r.pos }} />
                    </div>
                    <div style={{ padding: "24px", display: "flex", flexDirection: "column", flex: "1" }}>
                      <div style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", textTransform: "uppercase", color: "#5C1A1B", fontSize: "36px", lineHeight: "1" }}>
                        {r.cap}
                      </div>
                      <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(42,42,42,0.5)", margin: "2px 0 16px" }}>
                        personen
                      </div>
                      <h3 style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontSize: "20px", color: "#2A2A2A", lineHeight: "1.25", margin: "0" }}>
                        {r.naam}
                      </h3>
                      <p style={{ margin: "12px 0 0", fontSize: "14px", color: "rgba(42,42,42,0.65)", lineHeight: "1.6", flex: "1" }}>
                        {r.body}
                      </p>
                      <div style={{ marginTop: "20px", display: "inline-flex", alignItems: "center", gap: "8px", color: "#5C1A1B", fontSize: "14px", fontWeight: "500" }}>
                        Bekijk ruimte
                        <span>
                          →
                        </span>
                      </div>
                    </div>
                  </Hov>
                </React.Fragment>
              ))}
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
if (__root) ReactDOM.createRoot(__root).render(<PompstationRuimtes />);
