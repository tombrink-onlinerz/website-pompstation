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
              <div style={{ marginTop: "72px" }}>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "24px", marginBottom: "32px", flexWrap: "wrap" }}>
            <div>
              <h3 style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", textTransform: "uppercase", color: "#2A2A2A", fontSize: "40px", lineHeight: "0.95", margin: "0 0 2px" }}>De groepsmenukaart</h3>
              <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(42,42,42,0.42)" }}>The group menu</div>
            </div>
            <Hov as="a" href="assets/pompstation-groepsmenu.pdf" target="_blank" rel="noopener" download="Pompstation-groepsmenu.pdf" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#5C1A1B", color: "#F5EFE6", padding: "12px 20px", fontSize: "14px", fontWeight: "500", whiteSpace: "nowrap", transition: "background 0.2s ease" }} styleHover={{ background: "#3F0F10" }}>↓ Download groepsmenu PDF</Hov>
          </div>
          <p style={{ margin: "0 0 32px", maxWidth: "640px", color: "rgba(42,42,42,0.7)", lineHeight: "1.65" }}>Per gang kiest iedere gast uit onderstaande gerechten. Bij het viergangenmenu komt er een tussengerecht bij, bij vijf gangen een extra proefgang.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "48px" }}>
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
              <Hov as="a" href="assets/pompstation-event-drinks.png" target="_blank" rel="noopener" download="Pompstation-dranken-events.png" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#5C1A1B", color: "#F5EFE6", padding: "12px 20px", fontSize: "14px", fontWeight: "500", whiteSpace: "nowrap", transition: "background 0.2s ease" }} styleHover={{ background: "#3F0F10" }}>↓ Drankenkaart events</Hov>
            </div>
            <div style={{ padding: "20px", background: "#EFE7D9", border: "1px solid rgba(42,42,42,0.1)", display: "flex", flexDirection: "column", gap: "12px", alignItems: "flex-start" }}>
              <div>
                <div style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontSize: "24px", color: "#2A2A2A" }}>Banqueting book 2026–2027</div>
                <p style={{ margin: "4px 0 0", fontSize: "14px", color: "rgba(42,42,42,0.7)" }}>Alle arrangementen, zalen en mogelijkheden voor groepen en afhuren op een rij.</p>
              </div>
              <Hov as="a" href="assets/pompstation-banqueting-book.pdf" target="_blank" rel="noopener" download="Pompstation-banqueting-book.pdf" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#5C1A1B", color: "#F5EFE6", padding: "12px 20px", fontSize: "14px", fontWeight: "500", whiteSpace: "nowrap", transition: "background 0.2s ease" }} styleHover={{ background: "#3F0F10" }}>↓ Banqueting book PDF</Hov>
            </div>
          </div>
        </div>
            </React.Fragment>) : null}
          </div>
        </section>
        {' '}
        {' '}
        {(!V.groepsMode) ? (<React.Fragment>
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
              <Hov as="a" href="assets/pompstation-menukaart-2026.pdf" target="_blank" rel="noopener" download="Pompstation-menukaart-2026.pdf" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#5C1A1B", color: "#F5EFE6", padding: "12px 20px", fontSize: "14px", fontWeight: "500", whiteSpace: "nowrap", transition: "background 0.2s ease" }} styleHover={{ background: "#3F0F10" }}>
                ↓ Download menu PDF
              </Hov>
            </div>
            {' '}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px 64px" }}>
              <div>
                <h3 style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", textTransform: "uppercase", color: "#2A2A2A", fontSize: "36px", margin: "0 0 4px" }}>
                  Voorgerechten
                </h3>
                <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(42,42,42,0.42)", marginBottom: "10px" }}>Starters</div>
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
                        <span style={{ display: "block", marginTop: "2px", fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.06em", color: "rgba(42,42,42,0.42)" }}>Carpaccio from Barossa</span><span style={{ display: "block", marginTop: "6px" }}>Rucola, bieslookmayonaise, Parmezaan, pijnboompitten<br /><span style={{ color: "rgba(42,42,42,0.45)", fontStyle: "italic" }}>Arugula, chives mayonnaise, parmesan cheese and pine nuts</span></span>
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
                        <span style={{ display: "block", marginTop: "2px", fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.06em", color: "rgba(42,42,42,0.42)" }}>Steak Tartare Classic (80gr)</span><span style={{ display: "block", marginTop: "6px" }}>'Barrossa' met kappertjes, sjalot, augurk, peterselie, crouton en eidooierdressing (op beenmerg +6)<br /><span style={{ color: "rgba(42,42,42,0.45)", fontStyle: "italic" }}>Made from “Barrosa” with capers, shallot, pickles and parsley, bread crouton and egg yolk dressing (served on bone marrow +6)</span></span>
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
                        <span style={{ display: "block", marginTop: "2px", fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.06em", color: "rgba(42,42,42,0.42)" }}>Seabass Ceviche</span><span style={{ display: "block", marginTop: "6px" }}>Leche de tigre, chili, koriander, rode ui<br /><span style={{ color: "rgba(42,42,42,0.45)", fontStyle: "italic" }}>Leche de tigre, chili, coriander, red onion</span></span>
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
                        <span style={{ display: "block", marginTop: "2px", fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.06em", color: "rgba(42,42,42,0.42)" }}>Roasted Gamba's from the Charcoal Grill</span><span style={{ display: "block", marginTop: "6px" }}>Boter, chili, knoflook en peterselie<br /><span style={{ color: "rgba(42,42,42,0.45)", fontStyle: "italic" }}>Butter, chilli, garlic and parsley</span></span>
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
                        <span style={{ display: "block", marginTop: "6px" }}>Geroosterde 'San Marzano' tomaat, broodkruim, basilicumolie<br /><span style={{ color: "rgba(42,42,42,0.45)", fontStyle: "italic" }}>Roasted “San Marzano” tomato, bread crumble, basil oil</span></span>
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
                        <span style={{ display: "block", marginTop: "6px" }}>Aubergine, tomaat, basilicum, parmigiano, buffalo mozzarella<br /><span style={{ color: "rgba(42,42,42,0.45)", fontStyle: "italic" }}>Aubergine, tomato, basil, parmigiano, buffalo mozzarella</span></span>
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
                <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(42,42,42,0.42)", marginBottom: "10px" }}>Oysters</div>
                {' '}
                <div style={{ width: "48px", height: "2px", background: "#5C1A1B", marginBottom: "16px" }} />
                {' '}
                <div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "16px", padding: "16px 0", borderBottom: "1px solid rgba(42,42,42,0.1)" }}>
                    <div style={{ flex: "1" }}>
                      <span style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontSize: "24px", color: "#2A2A2A" }}>
                        Ierse Oesters p.p.<span style={{ display: "block", marginTop: "2px", fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.06em", color: "rgba(42,42,42,0.42)" }}>Irish Oysters p/p</span>
                      </span>
                      <div style={{ marginTop: "4px", fontSize: "14px", color: "rgba(42,42,42,0.65)" }}>
                        
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
                        Seizoensoesters p.p.<span style={{ display: "block", marginTop: "2px", fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.06em", color: "rgba(42,42,42,0.42)" }}>Seasonal Oysters p/p</span>
                      </span>
                      <div style={{ marginTop: "4px", fontSize: "14px", color: "rgba(42,42,42,0.65)" }}>
                        
                      </div>
                    </div>
                    <div style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", fontSize: "30px", color: "#5C1A1B", whiteSpace: "nowrap" }}>
                      €3,50
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ gridColumn: "span 2", display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "24px", padding: "24px", background: "#EFE7D9", border: "1px solid rgba(42,42,42,0.1)" }}>
                <div style={{ gridColumn: "span 3", fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#5C1A1B" }}>Dagelijks wisselend · Daily changing menu</div>
                <div>
                  <div style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontSize: "24px", color: "#2A2A2A" }}>Catch of the day</div>
                  <div style={{ marginTop: "4px", fontSize: "14px", color: "rgba(42,42,42,0.65)", lineHeight: "1.6" }}>Elke dag verse vis van de houtskoolgrill<span style={{ color: "rgba(42,42,42,0.45)", fontStyle: "italic" }}><br />Every day fresh fish from the charcoal grill</span></div>
                </div>
                <div>
                  <div style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontSize: "24px", color: "#2A2A2A" }}>Steak specials</div>
                  <div style={{ marginTop: "4px", fontSize: "14px", color: "rgba(42,42,42,0.65)", lineHeight: "1.6" }}>Wisselende cuts van de grill<span style={{ color: "rgba(42,42,42,0.45)", fontStyle: "italic" }}><br />Changing cuts from the grill</span></div>
                </div>
                <div>
                  <div style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontSize: "24px", color: "#2A2A2A" }}>Seizoensgroenten</div>
                  <div style={{ marginTop: "4px", fontSize: "14px", color: "rgba(42,42,42,0.65)", lineHeight: "1.6" }}>Naar wat de markt biedt<span style={{ color: "rgba(42,42,42,0.45)", fontStyle: "italic" }}><br />Seasonal vegetables</span></div>
                </div>
              </div>
              <div style={{ gridColumn: "span 2" }}>
                <h3 style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", textTransform: "uppercase", color: "#2A2A2A", fontSize: "36px", margin: "0 0 4px" }}>
                  Steaks — Houtskoolbarbecue
                </h3>
                <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(42,42,42,0.42)", marginBottom: "6px" }}>Steaks — Charcoal BBQ</div>
                {' '}
                <p style={{ fontSize: "14px", color: "rgba(42,42,42,0.6)", margin: "0 0 8px" }}>
                  Geserveerd medium rare<span style={{ color: "rgba(42,42,42,0.42)", fontStyle: "italic" }}> · served medium rare</span>
                </p>
                {' '}
                <div style={{ width: "48px", height: "2px", background: "#5C1A1B", marginBottom: "16px" }} />
                {' '}
                <div style={{ display: "flex", gap: "0 64px", alignItems: "flex-start" }}>
                <div style={{ flex: "1", minWidth: "0" }}>
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
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", margin: "32px 0 12px" }}>
                      <span style={{ fontWeight: "600", color: "#2A2A2A", fontSize: "14px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                        Puro Angus Uruguay
                      </span>
                      <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(42,42,42,0.4)" }}>
                        graangevoerd
                      </span>
                    </div>
                    <div style={{ display: "flex", alignItems: "baseline", gap: "16px", padding: "16px 0", borderBottom: "1px solid rgba(42,42,42,0.1)" }}>
                      <div style={{ flex: "1" }}>
                        <span style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontSize: "24px", color: "#2A2A2A" }}>
                          Entrecôte (250gr)
                        </span>
                      </div>
                      <div style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", fontSize: "30px", color: "#5C1A1B", whiteSpace: "nowrap" }}>
                        €27
                      </div>
                    </div>
                  </div>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", margin: "32px 0 12px" }}>
                      <span style={{ fontWeight: "600", color: "#2A2A2A", fontSize: "14px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                        Chicken Pays Basque
                      </span>
                      <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(42,42,42,0.4)" }}>
                        maisgevoerd
                      </span>
                    </div>
                    <div style={{ display: "flex", alignItems: "baseline", gap: "16px", padding: "16px 0", borderBottom: "1px solid rgba(42,42,42,0.1)" }}>
                      <div style={{ flex: "1" }}>
                        <span style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontSize: "24px", color: "#2A2A2A" }}>
                          Half Chicken
                        </span>
                        <span style={{ display: "block", marginTop: "2px", fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.06em", color: "rgba(42,42,42,0.42)" }}>Halve kip van de houtskoolgrill</span>
                      </div>
                      <div style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", fontSize: "30px", color: "#5C1A1B", whiteSpace: "nowrap" }}>
                        €22
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ flex: "1", minWidth: "0" }}>
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
                    <div style={{ display: "flex", alignItems: "baseline", gap: "16px", padding: "16px 0", borderBottom: "1px solid rgba(42,42,42,0.1)" }}>
                      <div style={{ flex: "1" }}>
                        <span style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontSize: "24px", color: "#2A2A2A" }}>
                          Short Ribs (300gr)
                        </span>
                      </div>
                      <div style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", fontSize: "30px", color: "#5C1A1B", whiteSpace: "nowrap" }}>
                        €24
                      </div>
                    </div>
                  </div>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", margin: "32px 0 12px" }}>
                      <span style={{ fontWeight: "600", color: "#2A2A2A", fontSize: "14px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                        Wagyu A5 Japan
                      </span>
                      <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(42,42,42,0.4)" }}>
                        graangevoerd
                      </span>
                    </div>
                    <div style={{ display: "flex", alignItems: "baseline", gap: "16px", padding: "16px 0", borderBottom: "1px solid rgba(42,42,42,0.1)" }}>
                      <div style={{ flex: "1" }}>
                        <span style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontSize: "24px", color: "#2A2A2A" }}>
                          Lady steak (150gr)
                        </span>
                      </div>
                      <div style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", fontSize: "30px", color: "#5C1A1B", whiteSpace: "nowrap" }}>
                        €27
                      </div>
                    </div>
                  </div>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", margin: "32px 0 12px" }}>
                      <span style={{ fontWeight: "600", color: "#2A2A2A", fontSize: "14px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                        Barrosa Spanje
                      </span>
                      <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(42,42,42,0.4)" }}>
                        grasgevoerd
                      </span>
                    </div>
                    <div style={{ display: "flex", alignItems: "baseline", gap: "16px", padding: "16px 0", borderBottom: "1px solid rgba(42,42,42,0.1)" }}>
                      <div style={{ flex: "1" }}>
                        <span style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontSize: "24px", color: "#2A2A2A" }}>
                          Steak Tartare Classic (140gr)
                        </span>
                        <div style={{ marginTop: "6px", fontSize: "14px", color: "rgba(42,42,42,0.65)", lineHeight: "1.6" }}>Van 'Barrosa', garnituur apart geserveerd<span style={{ color: "rgba(42,42,42,0.45)", fontStyle: "italic" }}><br />From “Barrosa”, garnishes served separately</span></div>
                      </div>
                      <div style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", fontSize: "30px", color: "#5C1A1B", whiteSpace: "nowrap" }}>
                        €22
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
              <div style={{ marginTop: "16px", fontSize: "14px", color: "rgba(42,42,42,0.6)", fontStyle: "italic" }}>
                    Huisgemaakte sauzen erbij +1,50: pepersaus · béarnaise · jus de veau · chimichurri<br /><span style={{ opacity: 0.75 }}>Add homemade sauces +1.50: pepper sauce · béarnaise · jus de veau · chimichurri</span>
                  </div>
              </div>
              <div style={{ gridColumn: "span 2" }}>
                <h3 style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", textTransform: "uppercase", color: "#2A2A2A", fontSize: "36px", margin: "0 0 4px" }}>
                  Bijgerechten
                </h3>
                <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(42,42,42,0.42)", marginBottom: "10px" }}>Side dishes</div>
                {' '}
                <div style={{ width: "48px", height: "2px", background: "#5C1A1B", marginBottom: "16px" }} />
                {' '}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 64px" }}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "16px", padding: "16px 0", borderBottom: "1px solid rgba(42,42,42,0.1)" }}>
                    <div style={{ flex: "1" }}>
                      <span style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontSize: "24px", color: "#2A2A2A" }}>
                        Brood & boter<span style={{ display: "block", marginTop: "2px", fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.06em", color: "rgba(42,42,42,0.42)" }}>Bread & Butter</span>
                      </span>
                    </div>
                    <div style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", fontSize: "30px", color: "#5C1A1B", whiteSpace: "nowrap" }}>
                      €4,50
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "16px", padding: "16px 0", borderBottom: "1px solid rgba(42,42,42,0.1)" }}>
                    <div style={{ flex: "1" }}>
                      <span style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontSize: "24px", color: "#2A2A2A" }}>
                        Friet<span style={{ display: "block", marginTop: "2px", fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.06em", color: "rgba(42,42,42,0.42)" }}>Fries</span>
                      </span>
                    </div>
                    <div style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", fontSize: "30px", color: "#5C1A1B", whiteSpace: "nowrap" }}>
                      €5
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "16px", padding: "16px 0", borderBottom: "1px solid rgba(42,42,42,0.1)" }}>
                    <div style={{ flex: "1" }}>
                      <span style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontSize: "24px", color: "#2A2A2A" }}>
                        Padrón pepers<span style={{ display: "block", marginTop: "2px", fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.06em", color: "rgba(42,42,42,0.42)" }}>Padrón peppers</span>
                      </span>
                    </div>
                    <div style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", fontSize: "30px", color: "#5C1A1B", whiteSpace: "nowrap" }}>
                      €5
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "16px", padding: "16px 0", borderBottom: "1px solid rgba(42,42,42,0.1)" }}>
                    <div style={{ flex: "1" }}>
                      <span style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontSize: "24px", color: "#2A2A2A" }}>
                        Geroosterde aardappelen<span style={{ display: "block", marginTop: "2px", fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.06em", color: "rgba(42,42,42,0.42)" }}>Roasted potatoes</span>
                      </span>
                    </div>
                    <div style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", fontSize: "30px", color: "#5C1A1B", whiteSpace: "nowrap" }}>
                      €6
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "16px", padding: "16px 0", borderBottom: "1px solid rgba(42,42,42,0.1)" }}>
                    <div style={{ flex: "1" }}>
                      <span style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontSize: "24px", color: "#2A2A2A" }}>
                        Seizoensgroenten<span style={{ display: "block", marginTop: "2px", fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.06em", color: "rgba(42,42,42,0.42)" }}>Seasonal vegetables</span>
                      </span>
                    </div>
                    <div style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", fontSize: "30px", color: "#5C1A1B", whiteSpace: "nowrap" }}>
                      €5
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "16px", padding: "16px 0", borderBottom: "1px solid rgba(42,42,42,0.1)" }}>
                    <div style={{ flex: "1" }}>
                      <span style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontSize: "24px", color: "#2A2A2A" }}>
                        Groene salade met Parmezaan en citrusdressing<span style={{ display: "block", marginTop: "2px", fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.06em", color: "rgba(42,42,42,0.42)" }}>Green salad with Parmesan and citrus dressing</span>
                      </span>
                    </div>
                    <div style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", fontSize: "30px", color: "#5C1A1B", whiteSpace: "nowrap" }}>
                      €6
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "16px", padding: "16px 0", borderBottom: "1px solid rgba(42,42,42,0.1)" }}>
                    <div style={{ flex: "1" }}>
                      <span style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontSize: "24px", color: "#2A2A2A" }}>
                        Rund beenmerg<span style={{ display: "block", marginTop: "2px", fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.06em", color: "rgba(42,42,42,0.42)" }}>Beef bone marrow</span>
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
              Allergieën of dieetwensen? Informeer uw ober. Wij accepteren geen contant geld.<br /><span style={{ opacity: 0.7 }}>If you have any allergies or dietary restrictions, please inform your waiter. We do not accept cash.</span>
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
        </React.Fragment>) : null}
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
