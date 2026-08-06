function PompstationMenu(props) { return <PompstationMenuClass {...props} />; }
class PompstationMenuClass extends React.Component {
  state = { groepsMode: false };
    renderVals() {
      const g = this.state.groepsMode;
      const tab = (active) => ({
        padding: '12px 20px', fontSize: '14px', fontWeight: 500, cursor: 'pointer',
        border: 'none', transition: 'all 0.2s ease',
        background: active ? '#5C1A1B' : 'transparent',
        color: active ? '#F5EFE6' : 'rgba(42,42,42,0.6)',
        fontFamily: "'DM Sans',sans-serif",
      });
      return {
        groepsMode: g,
        setAlacarte: () => this.setState({ groepsMode: false }),
        setGroeps: () => this.setState({ groepsMode: true }),
        tabAlacarte: tab(!g),
        tabGroeps: tab(g),
      };
    }
  render() {
    const V = this.renderVals ? this.renderVals() : {};
    return (
      <div style={{ fontFamily: "'DM Sans',system-ui,sans-serif", color: "#2A2A2A", overflowX: "hidden" }}>
        <PSNav current="menu" />
        {' '}
        <PSHero kicker="À la carte · vlees, vis & vegetarisch" title="Het" titleAccent="menu" lead="Kies à la carte of ga voor een 3-, 4- of 5-gangenformule. De kaart wisselt met het seizoen — lokaal, duurzaam en biologisch waar het kan." image="images/chef-kitchen.jpg" position="center 35%" heightVh="62" minHeight="440" />
        {' '}
        {' '}
        <section style={{ background: "#F5EFE6", padding: "48px 0", borderBottom: "1px solid rgba(42,42,42,0.1)" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 40px" }}>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "40px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "4px", background: "#EFE7D9", border: "1px solid rgba(42,42,42,0.15)", padding: "4px" }}>
                <button type="button" onClick={V.setAlacarte} style={V.tabAlacarte}>
                  À la carte
                </button>
                <button type="button" onClick={V.setGroeps} style={V.tabGroeps}>
                  Groepsmenu{' '}
                  <span style={{ fontSize: "12px", fontWeight: "400", opacity: "0.7", marginLeft: "4px" }}>
                    10+ pers.
                  </span>
                </button>
              </div>
            </div>
            {' '}
            {(V.groepsMode) ? (<React.Fragment>
              <div>
                <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "24px", marginBottom: "56px", flexWrap: "wrap" }}>
                  <div style={{ maxWidth: "672px" }}>
                    <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#5C1A1B", marginBottom: "16px" }}>
                      De formule
                    </div>
                    {' '}
                    <h2 style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", textTransform: "uppercase", color: "#2A2A2A", fontSize: "72px", lineHeight: "0.88", margin: "0" }}>
                      Drie, vier of
                      <br />
                      <span style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontStyle: "italic", textTransform: "none", fontWeight: "400", color: "#5C1A1B" }}>
                        vijf gangen.
                      </span>
                    </h2>
                  </div>
                  <div style={{ maxWidth: "384px", display: "flex", flexDirection: "column", gap: "16px", color: "rgba(42,42,42,0.7)", lineHeight: "1.65" }}>
                    <p style={{ margin: "0" }}>
                      Kies het aantal gangen voor uw groep. Per gang altijd keuze uit{' '}
                      <strong>
                        vlees
                      </strong>
                      ,{' '}
                      <strong>
                        vis
                      </strong>
                      {' '}of{' '}
                      <strong>
                        vega seizoensmenu
                      </strong>
                      . Wijnarrangementen zijn toe te voegen als add-on.
                    </p>
                    <p style={{ margin: "0" }}>
                      Allergieën of wensen? Laat het ons weten — wij passen het menu graag aan.
                    </p>
                    <a href="groepen.html" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#5C1A1B", fontWeight: "500" }}>
                      Offerte aanvragen
                      <span>
                        →
                      </span>
                    </a>
                  </div>
                </div>
                {' '}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "24px" }}>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <div style={{ overflow: "hidden", height: "220px" }}>
                      <img src="images/steak-fire.jpg" alt="3 gangen" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                    <div style={{ position: "relative", padding: "36px", flex: "1", background: "#EFE7D9", color: "#2A2A2A", border: "1px solid rgba(42,42,42,0.1)", borderTop: "none" }}>
                      <h3 style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontWeight: "400", fontSize: "36px", margin: "0" }}>
                        3 gangen
                      </h3>
                      {' '}
                      <div style={{ marginTop: "20px", display: "flex", alignItems: "baseline", gap: "8px" }}>
                        <span style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", textTransform: "uppercase", fontSize: "60px" }}>
                          €47
                        </span>
                        <span style={{ fontSize: "14px", color: "rgba(42,42,42,0.6)" }}>
                          p.p.
                        </span>
                      </div>
                      {' '}
                      <div style={{ marginTop: "8px", fontSize: "14px", color: "rgba(42,42,42,0.7)" }}>
                        Keuze uit vlees, vis of vega seizoensmenu
                      </div>
                    </div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <div style={{ overflow: "hidden", height: "220px" }}>
                      <img src="images/restaurant-service.jpg" alt="4 gangen" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.85)" }} />
                    </div>
                    <div style={{ position: "relative", padding: "36px", flex: "1", background: "#5C1A1B", color: "#F5EFE6" }}>
                      <div style={{ position: "absolute", top: "-12px", left: "24px", background: "#3F0F10", color: "#F5EFE6", fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", padding: "6px 12px" }}>
                        ★ Meest gekozen
                      </div>
                      {' '}
                      <h3 style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontWeight: "400", fontSize: "36px", margin: "0" }}>
                        4 gangen
                      </h3>
                      {' '}
                      <div style={{ marginTop: "20px", display: "flex", alignItems: "baseline", gap: "8px" }}>
                        <span style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", textTransform: "uppercase", fontSize: "60px" }}>
                          €57
                        </span>
                        <span style={{ fontSize: "14px", color: "rgba(245,239,230,0.7)" }}>
                          p.p.
                        </span>
                      </div>
                      {' '}
                      <div style={{ marginTop: "8px", fontSize: "14px", color: "rgba(245,239,230,0.75)" }}>
                        Met tussengerecht · keuze per gang
                      </div>
                    </div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <div style={{ overflow: "hidden", height: "220px" }}>
                      <img src="images/food-fish.jpg" alt="5 gangen" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                    <div style={{ position: "relative", padding: "36px", flex: "1", background: "#EFE7D9", color: "#2A2A2A", border: "1px solid rgba(42,42,42,0.1)", borderTop: "none" }}>
                      <h3 style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontWeight: "400", fontSize: "36px", margin: "0" }}>
                        5 gangen
                      </h3>
                      {' '}
                      <div style={{ marginTop: "20px", display: "flex", alignItems: "baseline", gap: "8px" }}>
                        <span style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", textTransform: "uppercase", fontSize: "60px" }}>
                          €65
                        </span>
                        <span style={{ fontSize: "14px", color: "rgba(42,42,42,0.6)" }}>
                          p.p.
                        </span>
                      </div>
                      {' '}
                      <div style={{ marginTop: "8px", fontSize: "14px", color: "rgba(42,42,42,0.7)" }}>
                        Volledig proeverijmenu · keuze per gang
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </React.Fragment>) : null}
          </div>
        </section>
        {' '}
        {' '}
        <section style={{ background: "#F5EFE6", padding: "96px 0" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 40px" }}>
            <div style={{ marginBottom: "48px", display: "flex", gap: "16px", alignItems: "center", justifyContent: "space-between", padding: "20px", background: "#EFE7D9", border: "1px solid rgba(42,42,42,0.1)", flexWrap: "wrap" }}>
              <div>
                <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#5C1A1B", marginBottom: "4px" }}>
                  Menukaart 2026
                </div>
                {' '}
                <p style={{ margin: "0", fontSize: "14px", color: "rgba(42,42,42,0.7)" }}>
                  Download de volledige menukaart als PDF
                </p>
              </div>
              <Hov as="a" href="#" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#5C1A1B", color: "#F5EFE6", padding: "12px 20px", fontSize: "14px", fontWeight: "500", whiteSpace: "nowrap", transition: "background 0.2s ease" }} styleHover={{ background: "#3F0F10" }}>
                ↓ Download menu PDF
              </Hov>
            </div>
            {' '}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px 64px" }}>
              <div>
                <h3 style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", textTransform: "uppercase", color: "#2A2A2A", fontSize: "36px", margin: "0 0 4px" }}>
                  Voorgerechten
                </h3>
                {' '}
                <div style={{ width: "48px", height: "2px", background: "#5C1A1B", marginBottom: "16px" }} />
                {' '}
                <div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "16px", padding: "16px 0", borderBottom: "1px solid rgba(42,42,42,0.1)" }}>
                    <div style={{ flex: "1" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                        <span style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontSize: "24px", color: "#2A2A2A" }}>
                          Carpaccio van Barossa
                        </span>
                      </div>
                      <div style={{ marginTop: "4px", fontSize: "14px", color: "rgba(42,42,42,0.65)", lineHeight: "1.6" }}>
                        Rucola, bieslookmayonaise, Parmezaan, pijnboompitten
                      </div>
                    </div>
                    <div style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", fontSize: "30px", color: "#5C1A1B", whiteSpace: "nowrap" }}>
                      €15
                    </div>
                  </div>
                  {' '}
                  <div style={{ display: "flex", alignItems: "baseline", gap: "16px", padding: "16px 0", borderBottom: "1px solid rgba(42,42,42,0.1)" }}>
                    <div style={{ flex: "1" }}>
                      <span style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontSize: "24px", color: "#2A2A2A" }}>
                        Steak Tartare Klassiek (80gr)
                      </span>
                      <div style={{ marginTop: "4px", fontSize: "14px", color: "rgba(42,42,42,0.65)", lineHeight: "1.6" }}>
                        'Barrossa' met kappertjes, sjalot, augurk, peterselie, crouton en eidooierdressing (op beenmerg +6)
                      </div>
                    </div>
                    <div style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", fontSize: "30px", color: "#5C1A1B", whiteSpace: "nowrap" }}>
                      €15
                    </div>
                  </div>
                  {' '}
                  <div style={{ display: "flex", alignItems: "baseline", gap: "16px", padding: "16px 0", borderBottom: "1px solid rgba(42,42,42,0.1)" }}>
                    <div style={{ flex: "1" }}>
                      <span style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontSize: "24px", color: "#2A2A2A" }}>
                        Zeebaars Ceviche
                      </span>
                      <div style={{ marginTop: "4px", fontSize: "14px", color: "rgba(42,42,42,0.65)", lineHeight: "1.6" }}>
                        Leche de tigre, chili, koriander, rode ui
                      </div>
                    </div>
                    <div style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", fontSize: "30px", color: "#5C1A1B", whiteSpace: "nowrap" }}>
                      €16
                    </div>
                  </div>
                  {' '}
                  <div style={{ display: "flex", alignItems: "baseline", gap: "16px", padding: "16px 0", borderBottom: "1px solid rgba(42,42,42,0.1)" }}>
                    <div style={{ flex: "1" }}>
                      <span style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontSize: "24px", color: "#2A2A2A" }}>
                        Gegrilde Gamba's van de Houtskoolbarbecue
                      </span>
                      <div style={{ marginTop: "4px", fontSize: "14px", color: "rgba(42,42,42,0.65)", lineHeight: "1.6" }}>
                        Boter, chili, knoflook en peterselie
                      </div>
                    </div>
                    <div style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", fontSize: "30px", color: "#5C1A1B", whiteSpace: "nowrap" }}>
                      €16
                    </div>
                  </div>
                  {' '}
                  <div style={{ display: "flex", alignItems: "baseline", gap: "16px", padding: "16px 0", borderBottom: "1px solid rgba(42,42,42,0.1)" }}>
                    <div style={{ flex: "1" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                        <span style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontSize: "24px", color: "#2A2A2A" }}>
                          Burrata ♥
                        </span>
                        <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#2C3E37", border: "1px solid rgba(44,62,55,0.4)", padding: "2px 6px" }}>
                          veg
                        </span>
                      </div>
                      <div style={{ marginTop: "4px", fontSize: "14px", color: "rgba(42,42,42,0.65)", lineHeight: "1.6" }}>
                        Geroosterde 'San Marzano' tomaat, broodkruim, basilicumolie
                      </div>
                    </div>
                    <div style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", fontSize: "30px", color: "#5C1A1B", whiteSpace: "nowrap" }}>
                      €15
                    </div>
                  </div>
                  {' '}
                  <div style={{ display: "flex", alignItems: "baseline", gap: "16px", padding: "16px 0", borderBottom: "1px solid rgba(42,42,42,0.1)" }}>
                    <div style={{ flex: "1" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                        <span style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontSize: "24px", color: "#2A2A2A" }}>
                          Parmigiana ♥
                        </span>
                        <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#2C3E37", border: "1px solid rgba(44,62,55,0.4)", padding: "2px 6px" }}>
                          veg
                        </span>
                      </div>
                      <div style={{ marginTop: "4px", fontSize: "14px", color: "rgba(42,42,42,0.65)", lineHeight: "1.6" }}>
                        Aubergine, tomaat, basilicum, parmigiano, buffalo mozzarella
                      </div>
                    </div>
                    <div style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", fontSize: "30px", color: "#5C1A1B", whiteSpace: "nowrap" }}>
                      €14
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", textTransform: "uppercase", color: "#2A2A2A", fontSize: "36px", margin: "0 0 4px" }}>
                  Oesters
                </h3>
                {' '}
                <div style={{ width: "48px", height: "2px", background: "#5C1A1B", marginBottom: "16px" }} />
                {' '}
                <div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "16px", padding: "16px 0", borderBottom: "1px solid rgba(42,42,42,0.1)" }}>
                    <div style={{ flex: "1" }}>
                      <span style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontSize: "24px", color: "#2A2A2A" }}>
                        Ierse Oesters p.p.
                      </span>
                      <div style={{ marginTop: "4px", fontSize: "14px", color: "rgba(42,42,42,0.65)" }}>
                        Per stuk
                      </div>
                    </div>
                    <div style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", fontSize: "30px", color: "#5C1A1B", whiteSpace: "nowrap" }}>
                      €4,50
                    </div>
                  </div>
                  {' '}
                  <div style={{ display: "flex", alignItems: "baseline", gap: "16px", padding: "16px 0", borderBottom: "1px solid rgba(42,42,42,0.1)" }}>
                    <div style={{ flex: "1" }}>
                      <span style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontSize: "24px", color: "#2A2A2A" }}>
                        Seizoensoesters p.p.
                      </span>
                      <div style={{ marginTop: "4px", fontSize: "14px", color: "rgba(42,42,42,0.65)" }}>
                        Per stuk
                      </div>
                    </div>
                    <div style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", fontSize: "30px", color: "#5C1A1B", whiteSpace: "nowrap" }}>
                      €3,50
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ gridColumn: "span 2" }}>
                <h3 style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", textTransform: "uppercase", color: "#2A2A2A", fontSize: "36px", margin: "0 0 4px" }}>
                  Steaks — Houtskoolbarbecue
                </h3>
                {' '}
                <p style={{ fontSize: "14px", color: "rgba(42,42,42,0.6)", margin: "0 0 8px" }}>
                  Geserveerd medium rare
                </p>
                {' '}
                <div style={{ width: "48px", height: "2px", background: "#5C1A1B", marginBottom: "16px" }} />
                {' '}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 64px" }}>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
                      <span style={{ fontWeight: "600", color: "#2A2A2A", fontSize: "14px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                        Black Angus Ierland
                      </span>
                      <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(42,42,42,0.4)" }}>
                        grasgevoerd
                      </span>
                    </div>
                    {' '}
                    <div style={{ display: "flex", alignItems: "baseline", gap: "16px", padding: "16px 0", borderBottom: "1px solid rgba(42,42,42,0.1)" }}>
                      <div style={{ flex: "1" }}>
                        <span style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontSize: "24px", color: "#2A2A2A" }}>
                          Tournedos (200gr)
                        </span>
                      </div>
                      <div style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", fontSize: "30px", color: "#5C1A1B", whiteSpace: "nowrap" }}>
                        €30
                      </div>
                    </div>
                    {' '}
                    <div style={{ display: "flex", alignItems: "baseline", gap: "16px", padding: "16px 0", borderBottom: "1px solid rgba(42,42,42,0.1)" }}>
                      <div style={{ flex: "1" }}>
                        <span style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontSize: "24px", color: "#2A2A2A" }}>
                          Picanha (200gr)
                        </span>
                      </div>
                      <div style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", fontSize: "30px", color: "#5C1A1B", whiteSpace: "nowrap" }}>
                        €22
                      </div>
                    </div>
                  </div>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
                      <span style={{ fontWeight: "600", color: "#2A2A2A", fontSize: "14px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                        Dutch Dubbeldoel
                      </span>
                      <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(42,42,42,0.4)" }}>
                        grasgevoerd
                      </span>
                    </div>
                    {' '}
                    <div style={{ display: "flex", alignItems: "baseline", gap: "16px", padding: "16px 0", borderBottom: "1px solid rgba(42,42,42,0.1)" }}>
                      <div style={{ flex: "1" }}>
                        <span style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontSize: "24px", color: "#2A2A2A" }}>
                          Côte de Boeuf (600gr)
                        </span>
                      </div>
                      <div style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", fontSize: "30px", color: "#5C1A1B", whiteSpace: "nowrap" }}>
                        €48
                      </div>
                    </div>
                    {' '}
                    <div style={{ display: "flex", alignItems: "baseline", gap: "16px", padding: "16px 0", borderBottom: "1px solid rgba(42,42,42,0.1)" }}>
                      <div style={{ flex: "1" }}>
                        <span style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontSize: "24px", color: "#2A2A2A" }}>
                          Rib-eye (250gr)
                        </span>
                      </div>
                      <div style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", fontSize: "30px", color: "#5C1A1B", whiteSpace: "nowrap" }}>
                        €28
                      </div>
                    </div>
                    {' '}
                    <div style={{ display: "flex", alignItems: "baseline", gap: "16px", padding: "16px 0", borderBottom: "1px solid rgba(42,42,42,0.1)" }}>
                      <div style={{ flex: "1" }}>
                        <span style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontSize: "24px", color: "#2A2A2A" }}>
                          Skirt Steak (200gr)
                        </span>
                      </div>
                      <div style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", fontSize: "30px", color: "#5C1A1B", whiteSpace: "nowrap" }}>
                        €21
                      </div>
                    </div>
                  </div>
                  <div style={{ gridColumn: "span 2", marginTop: "16px", fontSize: "14px", color: "rgba(42,42,42,0.6)", fontStyle: "italic" }}>
                    Huisgemaakte sauzen erbij +1,50: pepersaus · béarnaise · jus de veau · chimichurri
                  </div>
                </div>
              </div>
              <div style={{ gridColumn: "span 2" }}>
                <h3 style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", textTransform: "uppercase", color: "#2A2A2A", fontSize: "36px", margin: "0 0 4px" }}>
                  Bijgerechten
                </h3>
                {' '}
                <div style={{ width: "48px", height: "2px", background: "#5C1A1B", marginBottom: "16px" }} />
                {' '}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 64px" }}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "16px", padding: "16px 0", borderBottom: "1px solid rgba(42,42,42,0.1)" }}>
                    <div style={{ flex: "1" }}>
                      <span style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontSize: "24px", color: "#2A2A2A" }}>
                        Brood & boter
                      </span>
                    </div>
                    <div style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", fontSize: "30px", color: "#5C1A1B", whiteSpace: "nowrap" }}>
                      €4,50
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "16px", padding: "16px 0", borderBottom: "1px solid rgba(42,42,42,0.1)" }}>
                    <div style={{ flex: "1" }}>
                      <span style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontSize: "24px", color: "#2A2A2A" }}>
                        Friet
                      </span>
                    </div>
                    <div style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", fontSize: "30px", color: "#5C1A1B", whiteSpace: "nowrap" }}>
                      €5
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "16px", padding: "16px 0", borderBottom: "1px solid rgba(42,42,42,0.1)" }}>
                    <div style={{ flex: "1" }}>
                      <span style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontSize: "24px", color: "#2A2A2A" }}>
                        Padrón pepers
                      </span>
                    </div>
                    <div style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", fontSize: "30px", color: "#5C1A1B", whiteSpace: "nowrap" }}>
                      €5
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "16px", padding: "16px 0", borderBottom: "1px solid rgba(42,42,42,0.1)" }}>
                    <div style={{ flex: "1" }}>
                      <span style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontSize: "24px", color: "#2A2A2A" }}>
                        Geroosterde aardappelen
                      </span>
                    </div>
                    <div style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", fontSize: "30px", color: "#5C1A1B", whiteSpace: "nowrap" }}>
                      €6
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "16px", padding: "16px 0", borderBottom: "1px solid rgba(42,42,42,0.1)" }}>
                    <div style={{ flex: "1" }}>
                      <span style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontSize: "24px", color: "#2A2A2A" }}>
                        Seizoensgroenten
                      </span>
                    </div>
                    <div style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", fontSize: "30px", color: "#5C1A1B", whiteSpace: "nowrap" }}>
                      €5
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "16px", padding: "16px 0", borderBottom: "1px solid rgba(42,42,42,0.1)" }}>
                    <div style={{ flex: "1" }}>
                      <span style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontSize: "24px", color: "#2A2A2A" }}>
                        Groene salade met Parmezaan en citrusdressing
                      </span>
                    </div>
                    <div style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", fontSize: "30px", color: "#5C1A1B", whiteSpace: "nowrap" }}>
                      €6
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "16px", padding: "16px 0", borderBottom: "1px solid rgba(42,42,42,0.1)" }}>
                    <div style={{ flex: "1" }}>
                      <span style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontSize: "24px", color: "#2A2A2A" }}>
                        Rund beenmerg
                      </span>
                    </div>
                    <div style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", fontSize: "30px", color: "#5C1A1B", whiteSpace: "nowrap" }}>
                      €6,50
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {' '}
            <div style={{ marginTop: "48px", padding: "20px", background: "#EFE7D9", border: "1px solid rgba(42,42,42,0.1)", fontSize: "14px", color: "rgba(42,42,42,0.7)", fontFamily: "'JetBrains Mono',monospace", lineHeight: "1.6" }}>
              Allergieën of dieetwensen? Informeer uw ober. Wij accepteren geen contant geld.
            </div>
          </div>
        </section>
        {' '}
        {' '}
        <section style={{ background: "#EFE7D9", padding: "96px 0", borderTop: "1px solid rgba(42,42,42,0.1)" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 40px" }}>
            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "24px", marginBottom: "56px", flexWrap: "wrap" }}>
              <div style={{ maxWidth: "672px" }}>
                <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#5C1A1B", marginBottom: "16px" }}>
                  Aan de bar
                </div>
                {' '}
                <h2 style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", textTransform: "uppercase", color: "#2A2A2A", fontSize: "72px", lineHeight: "0.88", margin: "0" }}>
                  De
                  <br />
                  <span style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontStyle: "italic", textTransform: "none", fontWeight: "400", color: "#5C1A1B" }}>
                    cocktailkaart.
                  </span>
                </h2>
              </div>
              <p style={{ maxWidth: "384px", color: "rgba(42,42,42,0.7)", lineHeight: "1.65" }}>
                Huisgemaakte siropen, verse kruiden en een huisaperitief van limoncello met prosecco. Ook prima zonder diner — schuif gewoon aan bij de bar.
              </p>
            </div>
            {' '}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px 64px" }}>
              <div>
                <h3 style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", textTransform: "uppercase", color: "#2A2A2A", fontSize: "36px", margin: "0 0 8px" }}>
                  Signature
                </h3>
                {' '}
                <div style={{ width: "48px", height: "2px", background: "#5C1A1B", marginBottom: "16px" }} />
                {' '}
                <div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "16px", padding: "16px 0", borderBottom: "1px solid rgba(42,42,42,0.1)" }}>
                    <div style={{ flex: "1" }}>
                      <span style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontSize: "24px", color: "#2A2A2A" }}>
                        Het Gemaal
                      </span>
                      <div style={{ marginTop: "4px", fontSize: "14px", color: "rgba(42,42,42,0.65)" }}>
                        Gin, Italiaanse vermouth, bitter, sinaasappelschil
                      </div>
                    </div>
                    <div style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", fontSize: "30px", color: "#5C1A1B", whiteSpace: "nowrap" }}>
                      €13
                    </div>
                  </div>
                  {' '}
                  <div style={{ display: "flex", alignItems: "baseline", gap: "16px", padding: "16px 0", borderBottom: "1px solid rgba(42,42,42,0.1)" }}>
                    <div style={{ flex: "1" }}>
                      <span style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontSize: "24px", color: "#2A2A2A" }}>
                        Hooghuis
                      </span>
                      <div style={{ marginTop: "4px", fontSize: "14px", color: "rgba(42,42,42,0.65)" }}>
                        Mezcal, limoen, agave, grapefruit
                      </div>
                    </div>
                    <div style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", fontSize: "30px", color: "#5C1A1B", whiteSpace: "nowrap" }}>
                      €13,5
                    </div>
                  </div>
                  {' '}
                  <div style={{ display: "flex", alignItems: "baseline", gap: "16px", padding: "16px 0", borderBottom: "1px solid rgba(42,42,42,0.1)" }}>
                    <div style={{ flex: "1" }}>
                      <span style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontSize: "24px", color: "#2A2A2A" }}>
                        Zeeburg Sour
                      </span>
                      <div style={{ marginTop: "4px", fontSize: "14px", color: "rgba(42,42,42,0.65)" }}>
                        Bourbon, citroen, eiwit, Angostura
                      </div>
                    </div>
                    <div style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", fontSize: "30px", color: "#5C1A1B", whiteSpace: "nowrap" }}>
                      €13
                    </div>
                  </div>
                  {' '}
                  <div style={{ display: "flex", alignItems: "baseline", gap: "16px", padding: "16px 0", borderBottom: "1px solid rgba(42,42,42,0.1)" }}>
                    <div style={{ flex: "1" }}>
                      <span style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontSize: "24px", color: "#2A2A2A" }}>
                        Vide Spritz
                      </span>
                      <div style={{ marginTop: "4px", fontSize: "14px", color: "rgba(42,42,42,0.65)" }}>
                        Prosecco, vlierbloesem, munt, tonic
                      </div>
                    </div>
                    <div style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", fontSize: "30px", color: "#5C1A1B", whiteSpace: "nowrap" }}>
                      €12
                    </div>
                  </div>
                  {' '}
                  <div style={{ display: "flex", alignItems: "baseline", gap: "16px", padding: "16px 0", borderBottom: "1px solid rgba(42,42,42,0.1)" }}>
                    <div style={{ flex: "1" }}>
                      <span style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontSize: "24px", color: "#2A2A2A" }}>
                        Indische Buurt
                      </span>
                      <div style={{ marginTop: "4px", fontSize: "14px", color: "rgba(42,42,42,0.65)" }}>
                        Donkere rum, gember, limoen, kaneel
                      </div>
                    </div>
                    <div style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", fontSize: "30px", color: "#5C1A1B", whiteSpace: "nowrap" }}>
                      €13
                    </div>
                  </div>
                  {' '}
                  <div style={{ display: "flex", alignItems: "baseline", gap: "16px", padding: "16px 0", borderBottom: "1px solid rgba(42,42,42,0.1)" }}>
                    <div style={{ flex: "1" }}>
                      <span style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontSize: "24px", color: "#2A2A2A" }}>
                        Huisaperitief
                      </span>
                      <div style={{ marginTop: "4px", fontSize: "14px", color: "rgba(42,42,42,0.65)" }}>
                        Huisgemaakte limoncello, prosecco, munt
                      </div>
                    </div>
                    <div style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", fontSize: "30px", color: "#5C1A1B", whiteSpace: "nowrap" }}>
                      €10
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", textTransform: "uppercase", color: "#2A2A2A", fontSize: "36px", margin: "0 0 8px" }}>
                  Alcoholvrij & afsluiters
                </h3>
                {' '}
                <div style={{ width: "48px", height: "2px", background: "#5C1A1B", marginBottom: "16px" }} />
                {' '}
                <div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "16px", padding: "16px 0", borderBottom: "1px solid rgba(42,42,42,0.1)" }}>
                    <div style={{ flex: "1" }}>
                      <span style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontSize: "24px", color: "#2A2A2A" }}>
                        Pomp 0%
                      </span>
                      <div style={{ marginTop: "4px", fontSize: "14px", color: "rgba(42,42,42,0.65)" }}>
                        Gember, limoen, bruisend water, rozemarijn
                      </div>
                    </div>
                    <div style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", fontSize: "30px", color: "#5C1A1B", whiteSpace: "nowrap" }}>
                      €8
                    </div>
                  </div>
                  {' '}
                  <div style={{ display: "flex", alignItems: "baseline", gap: "16px", padding: "16px 0", borderBottom: "1px solid rgba(42,42,42,0.1)" }}>
                    <div style={{ flex: "1" }}>
                      <span style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontSize: "24px", color: "#2A2A2A" }}>
                        Tuin & Tonic
                      </span>
                      <div style={{ marginTop: "4px", fontSize: "14px", color: "rgba(42,42,42,0.65)" }}>
                        Komkommer, vlierbloesem, tonic
                      </div>
                    </div>
                    <div style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", fontSize: "30px", color: "#5C1A1B", whiteSpace: "nowrap" }}>
                      €8
                    </div>
                  </div>
                  {' '}
                  <div style={{ display: "flex", alignItems: "baseline", gap: "16px", padding: "16px 0", borderBottom: "1px solid rgba(42,42,42,0.1)" }}>
                    <div style={{ flex: "1" }}>
                      <span style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontSize: "24px", color: "#2A2A2A" }}>
                        Koffie & afsluiter
                      </span>
                      <div style={{ marginTop: "4px", fontSize: "14px", color: "rgba(42,42,42,0.65)" }}>
                        Espresso, of een glas grappa / limoncello
                      </div>
                    </div>
                    <div style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontStyle: "italic", fontSize: "20px", color: "#5C1A1B", whiteSpace: "nowrap" }}>
                      vanaf 4
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {' '}
        {' '}
        <section style={{ background: "#2C3E37", color: "#F5EFE6", padding: "96px 0" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 40px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(12,1fr)", gap: "48px", alignItems: "flex-start" }}>
              <div style={{ gridColumn: "span 4" }}>
                <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(245,239,230,0.6)", marginBottom: "16px" }}>
                  Bij het menu
                </div>
                {' '}
                <h2 style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontWeight: "400", fontSize: "48px", margin: "0" }}>
                  Wijnarrangementen
                </h2>
                {' '}
                <p style={{ margin: "16px 0 0", color: "rgba(245,239,230,0.75)", lineHeight: "1.65" }}>
                  Een uitgebreide wijnkaart met passende glazen bij elk gerecht. Wijnarrangementen zijn vooraf te boeken als add-on bij een groepsreservering — ook verkrijgbaar per glas voor losse tafels.
                </p>
              </div>
              <div style={{ gridColumn: "span 8" }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: "16px", padding: "16px 0", borderBottom: "1px solid rgba(245,239,230,0.2)" }}>
                  <div style={{ flex: "1" }}>
                    <div style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontSize: "24px" }}>
                      Wijnarrangement — 3 glazen
                    </div>
                    <div style={{ marginTop: "4px", fontSize: "14px", color: "rgba(245,239,230,0.65)" }}>
                      Per gang een passend glas, geselecteerd door de bediening
                    </div>
                  </div>
                  <div style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", fontSize: "30px", whiteSpace: "nowrap" }}>
                    €27
                  </div>
                </div>
                {' '}
                <div style={{ display: "flex", alignItems: "baseline", gap: "16px", padding: "16px 0", borderBottom: "1px solid rgba(245,239,230,0.2)" }}>
                  <div style={{ flex: "1" }}>
                    <div style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontSize: "24px" }}>
                      Wijnarrangement — 4 glazen
                    </div>
                    <div style={{ marginTop: "4px", fontSize: "14px", color: "rgba(245,239,230,0.65)" }}>
                      Inclusief tussengerecht
                    </div>
                  </div>
                  <div style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", fontSize: "30px", whiteSpace: "nowrap" }}>
                    €34
                  </div>
                </div>
                {' '}
                <div style={{ display: "flex", alignItems: "baseline", gap: "16px", padding: "16px 0", borderBottom: "1px solid rgba(245,239,230,0.2)" }}>
                  <div style={{ flex: "1" }}>
                    <div style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontSize: "24px" }}>
                      Glas van de week
                    </div>
                    <div style={{ marginTop: "4px", fontSize: "14px", color: "rgba(245,239,230,0.65)" }}>
                      Wisselende selectie aan de bar
                    </div>
                  </div>
                  <div style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontStyle: "italic", fontSize: "20px", whiteSpace: "nowrap" }}>
                    vanaf 6,5
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {' '}
        <PSSfeer bg="cream" lead="Kaarslicht, een twaalf meter hoog plafond en de geur uit de open keuken. Zo eet u bij Pompstation." />
        {' '}
        {' '}
        <section style={{ background: "#EFE7D9", padding: "96px 0" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 40px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
              <Hov as="a" href="https://www.pompstation.nu/" target="_blank" rel="noopener" style={{ display: "block", background: "#F5EFE6", border: "1px solid rgba(42,42,42,0.15)", padding: "40px", transition: "border-color 0.2s ease" }} styleHover={{ borderColor: "#5C1A1B" }}>
                <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#5C1A1B", marginBottom: "12px" }}>
                  Kom proeven
                </div>
                {' '}
                <div style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", textTransform: "uppercase", color: "#2A2A2A", fontSize: "48px", lineHeight: "0.9" }}>
                  Reserveer een tafel
                </div>
                {' '}
                <div style={{ marginTop: "16px", color: "rgba(42,42,42,0.7)" }}>
                  Lunch, diner of borrel — met live jazz do–za.
                </div>
                {' '}
                <div style={{ marginTop: "24px", display: "inline-flex", alignItems: "center", gap: "8px", color: "#5C1A1B", fontWeight: "500" }}>
                  Naar reserveren
                  <span>
                    →
                  </span>
                </div>
              </Hov>
              <Hov as="a" href="groepen.html" style={{ display: "block", background: "#5C1A1B", color: "#F5EFE6", padding: "40px", transition: "background 0.2s ease" }} styleHover={{ background: "#3F0F10" }}>
                <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(245,239,230,0.7)", marginBottom: "12px" }}>
                  Met een groep
                </div>
                {' '}
                <div style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", textTransform: "uppercase", color: "#F5EFE6", fontSize: "48px", lineHeight: "0.9" }}>
                  Groepsmenu's vanaf €47
                </div>
                {' '}
                <div style={{ marginTop: "16px", color: "rgba(245,239,230,0.75)" }}>
                  Vaste menu's voor gezelschappen van 10 tot 360.
                </div>
                {' '}
                <div style={{ marginTop: "24px", display: "inline-flex", alignItems: "center", gap: "8px", color: "#F5EFE6", fontWeight: "500" }}>
                  Afhuren & groepen
                  <span>
                    →
                  </span>
                </div>
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
if (__root) ReactDOM.createRoot(__root).render(<PompstationMenu />);
