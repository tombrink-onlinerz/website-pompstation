function PompstationBedrijfsdiner(props) { return <PompstationBedrijfsdinerClass {...props} />; }
class PompstationBedrijfsdinerClass extends React.Component {
  renderVals() {
      return { cfg: {
        details: [
          { k: 'Capaciteit', v: '10–180 gasten' },
          { k: 'Menu', v: '3, 4 of 5 gangen' },
          { k: 'Keuze', v: 'Vlees, vis of vega per gang' },
          { k: 'Wijnarrangement', v: 'Add-on · vooraf te boeken' },
          { k: 'Ruimte', v: 'Restaurant of exclusief' },
          { k: 'Live muziek', v: 'Donderdag t/m zaterdag' },
        ],
        usps: [
      { "n": "01", "t": "Groepsmenu's", "d": "Drie, vier of vijf gangen van de houtskoolgrill, wisselend met het seizoen, inclusief vegetarische lijn." },
      { "n": "02", "t": "Semi-exclusief of exclusief", "d": "De vide met eigen bar voor 20 tot 100 gasten, of de volledige machinehal voor uw bedrijf alleen." },
      { "n": "03", "t": "Live muziek", "d": "Donderdag tot en met zaterdag live jazz en soul op de achtergrond — praten blijft altijd mogelijk." }
    ],
        paras: [
          'Een bedrijfsdiner bij Pompstation combineert topkeuken met de unieke sfeer van een monument uit 1912. Kaarslicht, een open keuken en live jazz — het perfecte decor voor een diner dat indruk maakt.',
          'Het groepsmenu biedt per gang keuze uit vlees, vis of vega seizoensmenu. Wijnarrangementen zijn vooraf in te boeken als add-on. Voor kleinere gezelschappen is reservering in het restaurant ook mogelijk zonder exclusieve huur.',
        ],
        photos: [
          { src: 'images/restaurant-service.jpg', pos: 'center 30%', h: 280 },
          { src: 'images/service-candles.jpg', pos: 'center 40%', h: 280 },
        ],
        ctaLabel: 'Offerte aanvragen',
        ctaTitle: 'Bedrijfsdiner reserveren?',
      }};
    }
  render() {
    const V = this.renderVals ? this.renderVals() : {};
    return (
      <div style={{ fontFamily: "'DM Sans',system-ui,sans-serif", color: "#2A2A2A", overflowX: "hidden" }}>
        <PSNav current="groepen" />
        {' '}
        <PSHero kicker="Groepen & afhuren · Bedrijfsdiner" title="Het" titleAccent="bedrijfsdiner" lead="Een besloten diner voor uw team, klanten of relaties. Klassiek aan tafel, uitgeserveerd in gangen." image="images/restaurant-service.jpg" position="center 30%" heightVh="62" minHeight="440" />
        {' '}
        <PSEventDetail config={V.cfg} />
        {' '}
        <section style={{ background: "#F5EFE6", padding: "clamp(46px, 8vw, 96px) 0", borderTop: "1px solid rgba(42,42,42,0.1)" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 clamp(20px, 5vw, 40px)" }}>
            <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#5C1A1B", marginBottom: "16px" }}>Het menu</div>
            <div>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "24px", marginBottom: "32px", flexWrap: "wrap" }}>
            <div>
              <h3 style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", textTransform: "uppercase", color: "#2A2A2A", fontSize: "clamp(25px, 5.2vw, 40px)", lineHeight: "0.95", margin: "0 0 2px" }}>De groepsmenukaart</h3>
              <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(42,42,42,0.42)" }}>The group menu</div>
            </div>
            <Hov as="a" href="pompstation-groepsmenu.pdf" target="_blank" rel="noopener" download="Pompstation-groepsmenu.pdf" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#5C1A1B", color: "#F5EFE6", padding: "12px 20px", fontSize: "14px", fontWeight: "500", whiteSpace: "nowrap", transition: "background 0.2s ease" }} styleHover={{ background: "#3F0F10" }}>↓ Download groepsmenu PDF</Hov>
          </div>
          <p style={{ margin: "0 0 32px", maxWidth: "640px", color: "rgba(42,42,42,0.7)", lineHeight: "1.65" }}>Per gang kiest iedere gast uit onderstaande gerechten. Bij het viergangenmenu komt er een tussengerecht bij, bij vijf gangen een extra proefgang.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "clamp(20px, 5vw, 48px)" }}>
            <div>
              <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#5C1A1B", marginBottom: "12px" }}>Voorgerecht</div>
              
              <div style={{ padding: "14px 0", borderBottom: "1px solid rgba(42,42,42,0.1)" }}><span style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontSize: "24px", color: "#2A2A2A" }}>Vitello Tonnato</span></div>
              <div style={{ padding: "14px 0", borderBottom: "1px solid rgba(42,42,42,0.1)" }}><span style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontSize: "24px", color: "#2A2A2A" }}>Zeebaars Ceviche</span><div style={{ marginTop: "2px", fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.06em", color: "rgba(42,42,42,0.42)" }}>Seabass Ceviche</div></div>
              <div style={{ padding: "14px 0", borderBottom: "1px solid rgba(42,42,42,0.1)" }}><span style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontSize: "24px", color: "#2A2A2A" }}>Buffalo Burrata</span></div>
            </div>
            <div>
              <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#5C1A1B", marginBottom: "12px" }}>Hoofdgerecht</div>
              
              <div style={{ padding: "14px 0", borderBottom: "1px solid rgba(42,42,42,0.1)" }}><span style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontSize: "24px", color: "#2A2A2A" }}>Entrecôte</span></div>
              <div style={{ padding: "14px 0", borderBottom: "1px solid rgba(42,42,42,0.1)" }}><span style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontSize: "24px", color: "#2A2A2A" }}>Vis van de dag</span><div style={{ marginTop: "2px", fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.06em", color: "rgba(42,42,42,0.42)" }}>Catch of the Day</div></div>
              <div style={{ padding: "14px 0", borderBottom: "1px solid rgba(42,42,42,0.1)" }}><span style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontSize: "24px", color: "#2A2A2A" }}>Parmigiana</span></div>
            </div>
            <div>
              <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#5C1A1B", marginBottom: "12px" }}>Dessert</div>
              
              <div style={{ padding: "14px 0", borderBottom: "1px solid rgba(42,42,42,0.1)" }}><span style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontSize: "24px", color: "#2A2A2A" }}>Tiramisu</span></div>
              <div style={{ padding: "14px 0", borderBottom: "1px solid rgba(42,42,42,0.1)" }}><span style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontSize: "24px", color: "#2A2A2A" }}>Chocoladetaart</span><div style={{ marginTop: "2px", fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.06em", color: "rgba(42,42,42,0.42)" }}>Chocolate Cake</div></div>
            </div>
          </div>
          <div style={{ marginTop: "32px", display: "flex", gap: "16px", alignItems: "center", justifyContent: "space-between", padding: "20px", background: "#EFE7D9", border: "1px solid rgba(42,42,42,0.1)", flexWrap: "wrap" }}>
            <div>
              <div style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontSize: "24px", color: "#2A2A2A" }}>Ander menu naar keuze?</div>
              <p style={{ margin: "4px 0 0", fontSize: "14px", color: "rgba(42,42,42,0.7)" }}>Neem contact met ons op — wij stellen graag een menu samen dat bij uw gezelschap past.<br /><span style={{ color: "rgba(42,42,42,0.45)", fontStyle: "italic" }}>A different menu? Get in touch and we will put one together for your group.</span></p>
            </div>
            <a href="contact.html" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#5C1A1B", fontWeight: "500", whiteSpace: "nowrap" }}>Contact opnemen <span>→</span></a>
          </div>
          <div style={{ marginTop: "24px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
            <div style={{ padding: "20px", background: "#EFE7D9", border: "1px solid rgba(42,42,42,0.1)", display: "flex", flexDirection: "column", gap: "12px", alignItems: "flex-start" }}>
              <div>
                <div style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontSize: "24px", color: "#2A2A2A" }}>Dranken voor uw event</div>
                <p style={{ margin: "4px 0 0", fontSize: "14px", color: "rgba(42,42,42,0.7)" }}>Wijn, bier, frisdrank en de cocktailselectie — spritz, gin tonics, palomas en moscow mules.</p>
              </div>
              <Hov as="a" href="pompstation-event-drinks.png" target="_blank" rel="noopener" download="Pompstation-dranken-events.png" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#5C1A1B", color: "#F5EFE6", padding: "12px 20px", fontSize: "14px", fontWeight: "500", whiteSpace: "nowrap", transition: "background 0.2s ease" }} styleHover={{ background: "#3F0F10" }}>↓ Drankenkaart events</Hov>
            </div>
            <div style={{ padding: "20px", background: "#EFE7D9", border: "1px solid rgba(42,42,42,0.1)", display: "flex", flexDirection: "column", gap: "12px", alignItems: "flex-start" }}>
              <div>
                <div style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontSize: "24px", color: "#2A2A2A" }}>Banqueting book 2026–2027</div>
                <p style={{ margin: "4px 0 0", fontSize: "14px", color: "rgba(42,42,42,0.7)" }}>Alle arrangementen, zalen en mogelijkheden voor groepen en afhuren op een rij.</p>
              </div>
              <Hov as="a" href="pompstation-banqueting-book.pdf" target="_blank" rel="noopener" download="Pompstation-banqueting-book.pdf" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#5C1A1B", color: "#F5EFE6", padding: "12px 20px", fontSize: "14px", fontWeight: "500", whiteSpace: "nowrap", transition: "background 0.2s ease" }} styleHover={{ background: "#3F0F10" }}>↓ Banqueting book PDF</Hov>
            </div>
          </div>
        </div>
          </div>
        </section>
        {' '}
        {' '}
        <PSFooter />
      </div>
    );
  }
}

const __root = document.getElementById('root');
if (__root) ReactDOM.createRoot(__root).render(<PompstationBedrijfsdiner />);
