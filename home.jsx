function PompstationHome(props) { return <PompstationHomeClass {...props} />; }
class PompstationHomeClass extends React.Component {
  state = { scrolled: false };
  
    componentDidMount() {
      this._onScroll = () => {
        const s = window.scrollY > 40;
        if (s !== this.state.scrolled) this.setState({ scrolled: s });
      };
      window.addEventListener('scroll', this._onScroll, { passive: true });
  
      // Fade-in on scroll
      const els = Array.from(document.querySelectorAll('[data-fade]'));
      els.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.9s cubic-bezier(0.22,1,0.36,1), transform 0.9s cubic-bezier(0.22,1,0.36,1)';
      });
      if ('IntersectionObserver' in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach(e => {
            if (e.isIntersecting) {
              e.target.style.opacity = '1';
              e.target.style.transform = 'translateY(0)';
              io.unobserve(e.target);
            }
          });
        }, { threshold: 0.12 });
        els.forEach(el => io.observe(el));
        this._io = io;
      } else {
        els.forEach(el => { el.style.opacity = '1'; el.style.transform = 'none'; });
      }
    }
  
    componentWillUnmount() {
      if (this._onScroll) window.removeEventListener('scroll', this._onScroll);
      if (this._io) this._io.disconnect();
    }
  
    renderVals() {
      const solid = this.state.scrolled;
      return {
        reserveUrl: 'https://www.pompstation.nu/',
        headerStyle: {
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 40,
          transition: 'all 0.3s ease',
          background: solid ? 'rgba(245,239,230,0.95)' : 'transparent',
          backdropFilter: solid ? 'blur(8px)' : 'none',
          borderBottom: solid ? '1px solid rgba(42,42,42,0.1)' : '1px solid transparent',
        },
        logoStyle: {
          height: '20px', width: 'auto', transition: 'all 0.3s ease',
          filter: solid ? 'brightness(0)' : 'none',
        },
        navLinkStyle: {
          transition: 'opacity 0.2s ease',
          color: solid ? '#2A2A2A' : '#F5EFE6',
        },
        langNlStyle: { padding: '3px 5px', fontWeight: 700, color: solid ? '#2A2A2A' : '#F5EFE6', textTransform: 'uppercase', fontSize: '11px' },
        langSepStyle: { color: solid ? '#2A2A2A' : '#F5EFE6', opacity: 0.25, margin: '0 1px', fontSize: '9px' },
        langEnStyle: { padding: '3px 5px', fontWeight: 400, color: solid ? '#2A2A2A' : '#F5EFE6', opacity: 0.42, textTransform: 'uppercase', fontSize: '11px', cursor: 'pointer' },
      };
    }
  render() {
    const V = this.renderVals ? this.renderVals() : {};
    return (
      <div style={{ fontFamily: "'DM Sans',system-ui,sans-serif", color: "#2A2A2A", overflowX: "hidden" }}>
        <PSNav current="home" />
        {' '}
        {' '}
        <section id="top" style={{ position: "relative", height: "100vh", minHeight: "680px", width: "100%", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: "0" }}>
            <img src="images/interior-vide.jpg" alt="Interieur Pompstation met vide en lange tafels" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 35%" }} />
            {' '}
            <div style={{ position: "absolute", inset: "0", background: "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.35) 100%), linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 35%, rgba(0,0,0,0.55) 100%)" }} />
          </div>
          {' '}
          <div style={{ position: "absolute", top: "0", left: "0", right: "0", zIndex: "10" }}>
            <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "clamp(46px, 8vw, 112px) clamp(20px, 5vw, 40px) 0" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", color: "rgba(245,239,230,0.7)", fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase" }}>
                <span style={{ width: "32px", height: "1px", background: "rgba(245,239,230,0.4)" }} />
                <span>
                  Anno 1912 · Amsterdam Oost · Indische Buurt
                </span>
              </div>
            </div>
          </div>
          {' '}
          <div style={{ position: "absolute", inset: "0", zIndex: "10", display: "flex", alignItems: "center" }}>
            <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 clamp(20px, 5vw, 40px)", width: "100%" }}>
              <div style={{ maxWidth: "1100px" }}>
                <h1 style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", letterSpacing: "-0.005em", lineHeight: "0.88", textTransform: "uppercase", color: "#F5EFE6", fontSize: "clamp(48px, 13vw, 134px)", margin: "0" }}>
                  Borrelen{' '}
                  <span style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontStyle: "italic", textTransform: "none", fontWeight: "400", letterSpacing: "normal", color: "rgba(245,239,230,0.95)" }}>
                    &
                  </span>
                  <br />
                  {' '}Dineren{' '}
                  <span style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontStyle: "italic", textTransform: "none", fontWeight: "400", letterSpacing: "normal", color: "rgba(245,239,230,0.95)" }}>
                    bij
                  </span>
                  {' '}Pompstation.
                </h1>
                {' '}
                <p style={{ margin: "32px 0 0", maxWidth: "576px", color: "rgba(245,239,230,0.85)", fontSize: "18px", lineHeight: "1.65" }}>
                  Dineren, borrelen en live jazz in een monumentaal watergemaal uit 1912. Voor twee aan tafel — of met 360 de hele zaal.
                </p>
                {' '}
                <div style={{ marginTop: "40px", display: "flex", flexWrap: "wrap", gap: "16px" }}>
                  <Hov as="a" href="#keuze" style={{ background: "#5C1A1B", color: "#F5EFE6", padding: "16px 28px", fontSize: "16px", fontWeight: "500", letterSpacing: "0.02em", display: "inline-flex", alignItems: "center", gap: "12px", transition: "background 0.2s ease" }} styleHover={{ background: "#3F0F10" }}>
                    Wat wordt het?
                    <span>
                      ↓
                    </span>
                  </Hov>
                  <Hov as="a" href="menu.html" style={{ border: "1px solid #F5EFE6", color: "#F5EFE6", padding: "16px 28px", fontSize: "16px", fontWeight: "500", letterSpacing: "0.02em", display: "inline-flex", alignItems: "center", gap: "8px", transition: "background 0.2s ease" }} styleHover={{ background: "rgba(245,239,230,0.1)" }}>
                    Bekijk het menu
                  </Hov>
                </div>
              </div>
            </div>
          </div>
          {' '}
          <div style={{ position: "absolute", bottom: "0", left: "0", right: "0", zIndex: "10", borderTop: "1px solid rgba(245,239,230,0.15)", background: "rgba(0,0,0,0.3)", backdropFilter: "blur(4px)", overflow: "hidden" }}>
            <div style={{ display: "flex", whiteSpace: "nowrap", padding: "16px 0", color: "rgba(245,239,230,0.85)", fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", width: "max-content", animation: "ps-marquee 40s linear infinite" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "clamp(20px, 5vw, 40px)", padding: "0 20px", flexShrink: "0" }}>
                <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ width: "4px", height: "4px", background: "rgba(245,239,230,0.6)", borderRadius: "50%" }} />
                  Live jazz · donderdag t/m zaterdag
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ width: "4px", height: "4px", background: "rgba(245,239,230,0.6)", borderRadius: "50%" }} />
                  Bekroonde carpaccio & dry-aged steaks
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ width: "4px", height: "4px", background: "rgba(245,239,230,0.6)", borderRadius: "50%" }} />
                  Groot zonnig terras in de tuin
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ width: "4px", height: "4px", background: "rgba(245,239,230,0.6)", borderRadius: "50%" }} />
                  Vis & vegetarisch van het seizoen
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ width: "4px", height: "4px", background: "rgba(245,239,230,0.6)", borderRadius: "50%" }} />
                  Officiële trouwlocatie gemeente Amsterdam
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "clamp(20px, 5vw, 40px)", padding: "0 20px", flexShrink: "0" }}>
                <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ width: "4px", height: "4px", background: "rgba(245,239,230,0.6)", borderRadius: "50%" }} />
                  Live jazz · donderdag t/m zaterdag
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ width: "4px", height: "4px", background: "rgba(245,239,230,0.6)", borderRadius: "50%" }} />
                  Bekroonde carpaccio & dry-aged steaks
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ width: "4px", height: "4px", background: "rgba(245,239,230,0.6)", borderRadius: "50%" }} />
                  Groot zonnig terras in de tuin
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ width: "4px", height: "4px", background: "rgba(245,239,230,0.6)", borderRadius: "50%" }} />
                  Vis & vegetarisch van het seizoen
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ width: "4px", height: "4px", background: "rgba(245,239,230,0.6)", borderRadius: "50%" }} />
                  Officiële trouwlocatie gemeente Amsterdam
                </span>
              </div>
            </div>
          </div>
        </section>
        {' '}
        {' '}
        <section data-fade="1" style={{ background: "#EFE7D9", padding: "clamp(46px, 8vw, 112px) 0", borderBottom: "1px solid rgba(42,42,42,0.1)" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(20px, 5vw, 40px)", display: "grid", gridTemplateColumns: "repeat(12,1fr)", gap: "clamp(34px, 6.5vw, 56px)", alignItems: "stretch" }}>
            <div style={{ gridColumn: "span 5", display: "flex", flexDirection: "column", gap: "clamp(20px, 5vw, 40px)" }}>
              <div>
                <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#5C1A1B", marginBottom: "16px" }}>Bar Restaurant Pompstation Amsterdam</div>
                <h2 style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", textTransform: "uppercase", color: "#2A2A2A", fontSize: "clamp(38px, 9vw, 72px)", lineHeight: "0.88", margin: "0" }}>
                  Steakhouse<br />&amp; grill in<br />
                  <span style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontStyle: "italic", textTransform: "none", fontWeight: "400", color: "#5C1A1B" }}>Amsterdam-Oost.</span>
                </h2>
              </div>
              <div style={{ flex: "1", minHeight: "320px", overflow: "hidden" }}><img src="images/food-steak.jpg" alt="Gegrilde steak van de houtskoolgrill bij Pompstation Amsterdam" style={{ width: "100%", height: "100%", objectFit: "cover" }} /></div>
            </div>
            <div style={{ gridColumn: "span 7", display: "flex", flexDirection: "column", gap: "20px" }}>
              <p style={{ margin: "0", fontFamily: "'Instrument Serif',Georgia,serif", fontSize: "clamp(21px, 4.2vw, 28px)", lineHeight: "1.4", color: "#2A2A2A", textWrap: "pretty" }}>Bar Restaurant Pompstation is gevestigd in een voormalig waterpompstation uit 1912 aan de Zeeburgerdijk in Amsterdam-Oost. Wij serveren premium gegrilde steaks, lokale vis en vegetarische gerechten — altijd vers bereid op ons houtskoolvuur.</p>
              <p style={{ margin: "0", color: "rgba(42,42,42,0.75)", lineHeight: "1.75", fontSize: "17px", textWrap: "pretty" }}>Dit alles in ons industriële pand met New Yorkse uitstraling, in combinatie met live jazz- en soulmuziek op donderdagavond, vrijdagavond en zaterdagavond. Onze live muziek is altijd op de achtergrond en zorgt voor een echte beleving en avond uit — perfect voor een date night of als u iets te vieren heeft.</p>
              <p style={{ margin: "0", color: "rgba(42,42,42,0.75)", lineHeight: "1.75", fontSize: "17px", textWrap: "pretty" }}>Bij Pompstation Amsterdam draait het om eten van de houtskoolgrill: premium steaks, gegrilde vis, oesters en smoked groenten, aangevuld met wagyu-specials en een uitgebreide cocktail- en wijnkaart. Dankzij de ruime opzet en het hoge plafond is Pompstation net zo goed een eventlocatie voor bedrijfsborrels, bedrijfsfeesten en bedrijfsdiners als een plek voor een romantisch etentje of een borrel op het terras.</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "12px 24px", marginTop: "4px", fontSize: "15px" }}>
                <a href="menu.html" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#5C1A1B", fontWeight: "500" }}>Bekijk het menu <span>→</span></a>
                <a href="verhaal.html" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#5C1A1B", fontWeight: "500" }}>Over ons <span>→</span></a>
                <a href="faq.html" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#5C1A1B", fontWeight: "500" }}>Veelgestelde vragen <span>→</span></a>
              </div>
              <div style={{ marginTop: "auto", paddingTop: "20px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div style={{ aspectRatio: "1/1", overflow: "hidden" }}><img src="images/groepsdiner-overhead.jpg" alt="Gegrilde vis op bord bij Pompstation Amsterdam" style={{ width: "100%", height: "100%", objectFit: "cover" }} /></div>
                <div style={{ aspectRatio: "1/1", overflow: "hidden" }}><img src="images/food-burrata.jpg" alt="Vegetarisch gerecht met burrata bij Pompstation Amsterdam" style={{ width: "100%", height: "100%", objectFit: "cover" }} /></div>
              </div>
            </div>
          </div>
        </section>
        {' '}
        <section id="keuze" data-fade="1" style={{ background: "#F5EFE6", padding: "clamp(46px, 8vw, 128px) 0", borderBottom: "1px solid rgba(42,42,42,0.1)" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(20px, 5vw, 40px)" }}>
            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "24px", marginBottom: "64px", flexWrap: "wrap" }}>
              <div style={{ maxWidth: "672px" }}>
                <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#5C1A1B", marginBottom: "16px" }}>
                  Twee manieren om te komen
                </div>
                {' '}
                <h2 style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", letterSpacing: "-0.005em", lineHeight: "0.88", textTransform: "uppercase", color: "#2A2A2A", fontSize: "clamp(44px, 11vw, 96px)", margin: "0" }}>
                  Een tafel,
                  <br />
                  {' '}
                  <span style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontStyle: "italic", textTransform: "none", fontWeight: "400", color: "#5C1A1B" }}>
                    of de hele zaal.
                  </span>
                </h2>
              </div>
              <p style={{ maxWidth: "384px", color: "rgba(42,42,42,0.8)", lineHeight: "1.65", fontSize: "18px" }}>
                Kom zomaar langs voor een diner, borrel of een middag op het terras — of huur (een deel van) Pompstation af voor uw eigen avond.
              </p>
            </div>
            {' '}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", alignItems: "start" }}>
              <Hov as="article" style={{ position: "relative", display: "flex", flexDirection: "column", background: "#EFE7D9", color: "#2A2A2A", border: "1px solid rgba(42,42,42,0.1)", transition: "transform 0.4s cubic-bezier(0.22,1,0.36,1)" }} styleHover={{ transform: "translateY(-6px)" }}>
                <div style={{ position: "relative", aspectRatio: "16/10", overflow: "hidden" }}>
                  <img src="images/terras-dining.jpg" alt="Eten & drinken" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%" }} />
                </div>
                <div style={{ padding: "clamp(20px, 5vw, 40px)", flex: "1", display: "flex", flexDirection: "column" }}>
                  <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#5C1A1B", marginBottom: "12px" }}>
                    Optie één · Kom langs
                  </div>
                  <h3 style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", textTransform: "uppercase", lineHeight: "0.9", fontSize: "clamp(30px, 6.5vw, 60px)", margin: "0" }}>
                    Eten & drinken
                  </h3>
                  <p style={{ margin: "16px 0 0", fontSize: "18px", lineHeight: "1.65", color: "rgba(42,42,42,0.85)" }}>
                    Zowel in het restaurant als op het terras kunt u lunchen, dineren of borrelen — reserveer een tafel of schuif aan bij de bar.
                  </p>
                  <ul className="ps-nolist" style={{ margin: "24px 0 0", display: "flex", flexDirection: "column", gap: "12px", fontSize: "15px", lineHeight: "1.65" }}>
                    <li style={{ display: "flex", gap: "12px" }}>
                      <span style={{ marginTop: "6px", width: "6px", height: "6px", flexShrink: "0", background: "#5C1A1B" }} />
                      <span style={{ color: "rgba(42,42,42,0.85)" }}>
                        Lunch & diner uit de keuken
                      </span>
                    </li>
                    <li style={{ display: "flex", gap: "12px" }}>
                      <span style={{ marginTop: "6px", width: "6px", height: "6px", flexShrink: "0", background: "#5C1A1B" }} />
                      <span style={{ color: "rgba(42,42,42,0.85)" }}>
                        Borrelen aan de bar of op het terras
                      </span>
                    </li>
                    <li style={{ display: "flex", gap: "12px" }}>
                      <span style={{ marginTop: "6px", width: "6px", height: "6px", flexShrink: "0", background: "#5C1A1B" }} />
                      <span style={{ color: "rgba(42,42,42,0.85)" }}>
                        Terras in de tuin bij mooi weer
                      </span>
                    </li>
                    <li style={{ display: "flex", gap: "12px" }}>
                      <span style={{ marginTop: "6px", width: "6px", height: "6px", flexShrink: "0", background: "#5C1A1B" }} />
                      <span style={{ color: "rgba(42,42,42,0.85)" }}>
                        Live jazz op de achtergrond (do–za)
                      </span>
                    </li>
                  </ul>
                  <Hov as="a" href={V.reserveUrl} target="_blank" rel="noopener" style={{ marginTop: "32px", display: "inline-flex", alignItems: "center", justifyContent: "space-between", gap: "12px", padding: "16px 24px", fontSize: "14px", fontWeight: "500", letterSpacing: "0.02em", background: "#5C1A1B", color: "#F5EFE6", transition: "background 0.2s ease" }} styleHover={{ background: "#3F0F10" }}>
                    <span>
                      Reserveer een tafel
                    </span>
                    <span>
                      →
                    </span>
                  </Hov>
                </div>
              </Hov>
              <Hov as="article" style={{ position: "relative", display: "flex", flexDirection: "column", background: "#5C1A1B", color: "#F5EFE6", boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)", transition: "transform 0.4s cubic-bezier(0.22,1,0.36,1)" }} styleHover={{ transform: "translateY(-6px)" }}>
                <div style={{ position: "absolute", top: "-12px", left: "24px", zIndex: "10", background: "#F5EFE6", color: "#5C1A1B", fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", padding: "6px 12px" }}>
                  ★ Voor groepen & events
                </div>
                <div style={{ position: "relative", aspectRatio: "16/10", overflow: "hidden" }}>
                  <img src="images/event-fullhall.jpg" alt="Pompstation afhuren" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 70%" }} />
                  {' '}
                  <div style={{ position: "absolute", inset: "0", background: "rgba(0,0,0,0.15)" }} />
                </div>
                <div style={{ padding: "clamp(20px, 5vw, 40px)", flex: "1", display: "flex", flexDirection: "column" }}>
                  <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(245,239,230,0.7)", marginBottom: "12px" }}>
                    Optie twee · De zaal is van u
                  </div>
                  <h3 style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", textTransform: "uppercase", lineHeight: "0.9", fontSize: "clamp(30px, 6.5vw, 60px)", margin: "0" }}>
                    Pompstation afhuren
                  </h3>
                  <p style={{ margin: "16px 0 0", fontSize: "18px", lineHeight: "1.65", color: "rgba(245,239,230,0.9)" }}>
                    Een gedeelte of het hele monument — voor groepen van 10 tot 360.
                  </p>
                  <ul className="ps-nolist" style={{ margin: "24px 0 0", display: "flex", flexDirection: "column", gap: "12px", fontSize: "15px", lineHeight: "1.65" }}>
                    <li style={{ display: "flex", gap: "12px" }}>
                      <span style={{ marginTop: "6px", width: "6px", height: "6px", flexShrink: "0", background: "rgba(245,239,230,0.7)" }} />
                      <span style={{ color: "rgba(245,239,230,0.9)" }}>
                        Groepsdiner aan een lange tafel (10–40)
                      </span>
                    </li>
                    <li style={{ display: "flex", gap: "12px" }}>
                      <span style={{ marginTop: "6px", width: "6px", height: "6px", flexShrink: "0", background: "rgba(245,239,230,0.7)" }} />
                      <span style={{ color: "rgba(245,239,230,0.9)" }}>
                        De vide afhuren (50–100)
                      </span>
                    </li>
                    <li style={{ display: "flex", gap: "12px" }}>
                      <span style={{ marginTop: "6px", width: "6px", height: "6px", flexShrink: "0", background: "rgba(245,239,230,0.7)" }} />
                      <span style={{ color: "rgba(245,239,230,0.9)" }}>
                        Volledig exclusief (tot 360)
                      </span>
                    </li>
                    <li style={{ display: "flex", gap: "12px" }}>
                      <span style={{ marginTop: "6px", width: "6px", height: "6px", flexShrink: "0", background: "rgba(245,239,230,0.7)" }} />
                      <span style={{ color: "rgba(245,239,230,0.9)" }}>
                        Bruiloften, bedrijfsfeesten & verjaardagen
                      </span>
                    </li>
                  </ul>
                  <Hov as="a" href="groepen.html" style={{ marginTop: "32px", display: "inline-flex", alignItems: "center", justifyContent: "space-between", gap: "12px", padding: "16px 24px", fontSize: "14px", fontWeight: "500", letterSpacing: "0.02em", background: "#F5EFE6", color: "#5C1A1B", transition: "background 0.2s ease" }} styleHover={{ background: "#EFE7D9" }}>
                    <span>
                      Bekijk alle opties
                    </span>
                    <span>
                      →
                    </span>
                  </Hov>
                </div>
              </Hov>
            </div>
          </div>
        </section>
        {' '}
        {' '}
        <section id="eten" data-fade="1" style={{ background: "#5C1A1B", color: "#F5EFE6", padding: "clamp(46px, 8vw, 128px) 0" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(20px, 5vw, 40px)" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(12,1fr)", gap: "32px", marginBottom: "64px" }}>
              <div style={{ gridColumn: "span 6" }}>
                <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(245,239,230,0.7)", marginBottom: "16px" }}>
                  Wat u kunt verwachten
                </div>
                {' '}
                <h2 style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", letterSpacing: "-0.005em", lineHeight: "0.88", textTransform: "uppercase", color: "#F5EFE6", fontSize: "clamp(38px, 9vw, 72px)", margin: "0" }}>
                  Een avond die
                  <br />
                  {' '}
                  <span style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontStyle: "italic", textTransform: "none", fontWeight: "400", color: "rgba(245,239,230,0.8)" }}>
                    blijft hangen.
                  </span>
                </h2>
              </div>
              <div style={{ gridColumn: "span 6", paddingTop: "48px" }}>
                <p style={{ color: "rgba(245,239,230,0.9)", fontSize: "20px", lineHeight: "1.65", maxWidth: "576px", margin: "0" }}>
                  Het gebouw pompt nog steeds water voor de stad — bij regen voel je soms een lichte trilling. Daarboven: kaarslicht, een keuken op niveau en live muziek onder een plafond van twaalf meter.
                </p>
              </div>
            </div>
            {' '}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
              <article id="menu" style={{ background: "#3F0F10", border: "1px solid rgba(245,239,230,0.15)" }}>
                <div style={{ position: "relative", aspectRatio: "16/9", overflow: "hidden" }}>
                  <img src="images/steak-fire.jpg" alt="Vlees, vis & vega van niveau" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%" }} />
                </div>
                {' '}
                <div style={{ padding: "32px" }}>
                  <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(245,239,230,0.7)", marginBottom: "8px" }}>
                    De keuken
                  </div>
                  {' '}
                  <h3 style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontWeight: "400", lineHeight: "1.05", fontSize: "clamp(25px, 5.2vw, 36px)", color: "#F5EFE6", margin: "0" }}>
                    Vlees, vis & vega van niveau
                  </h3>
                  {' '}
                  <p style={{ margin: "16px 0 0", color: "rgba(245,239,230,0.85)", lineHeight: "1.65", fontSize: "16px" }}>
                    Bekroonde carpaccio van Hollands rund, dry-aged steaks uit eigen kast, verse vis van lokale leveranciers en volwaardige vegetarische gerechten — met een uitgebreide wijnkaart ernaast.
                  </p>
                </div>
              </article>
              <article id="muziek" style={{ background: "#3F0F10", border: "1px solid rgba(245,239,230,0.15)" }}>
                <div style={{ position: "relative", aspectRatio: "16/9", overflow: "hidden" }}>
                  <img src="images/live-band-vide.jpg" alt="Jazz & soul, donderdag t/m zaterdag" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%" }} />
                </div>
                {' '}
                <div style={{ padding: "32px" }}>
                  <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(245,239,230,0.7)", marginBottom: "8px" }}>
                    Live muziek
                  </div>
                  {' '}
                  <h3 style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontWeight: "400", lineHeight: "1.05", fontSize: "clamp(25px, 5.2vw, 36px)", color: "#F5EFE6", margin: "0" }}>
                    Jazz & soul, donderdag t/m zaterdag
                  </h3>
                  {' '}
                  <p style={{ margin: "16px 0 0", color: "rgba(245,239,230,0.85)", lineHeight: "1.65", fontSize: "16px" }}>
                    Door de perfecte akoestiek van de hoge hal klinkt internationale jazz, soul en bossa nova als achtergrond bij uw diner — donderdag tot en met zaterdag.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>
        {' '}
        {' '}
        <section id="seizoen" data-fade="1" style={{ overflow: "hidden" }}>
          <div style={{ display: "grid", gridTemplateColumns: "3fr 2fr", minHeight: "540px" }}>
            <div style={{ background: "#5C1A1B", padding: "clamp(46px, 8vw, 112px) clamp(34px, 6.5vw, 64px)", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "24px" }}>
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#F5EFE6", animation: "ps-pulse 2s ease-in-out infinite" }} />
                <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(245,239,230,0.8)" }}>
                  Zomer 2026 · nu open
                </span>
              </div>
              <h2 style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", textTransform: "uppercase", color: "#F5EFE6", fontSize: "clamp(38px, 9vw, 72px)", lineHeight: "0.92", margin: "0" }}>
                Ons heerlijke
                <br />
                {' '}
                <span style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontStyle: "italic", textTransform: "none", fontWeight: "400", color: "rgba(245,239,230,0.75)" }}>
                  terras is geopend.
                </span>
              </h2>
              <p style={{ margin: "28px 0 0", color: "rgba(245,239,230,0.8)", fontSize: "18px", lineHeight: "1.65", maxWidth: "512px" }}>
                Geniet van zomerse gerechten, koude drankjes en de sfeer van Amsterdam-Oost — omringd door groen, onder een open hemel.
              </p>
              <div style={{ marginTop: "36px" }}>
                <Hov as="a" href={V.reserveUrl} target="_blank" rel="noopener" style={{ display: "inline-flex", alignItems: "center", gap: "12px", background: "#F5EFE6", color: "#5C1A1B", padding: "16px 28px", fontWeight: "500", fontSize: "14px", letterSpacing: "0.02em", transition: "background 0.2s ease" }} styleHover={{ background: "rgba(245,239,230,0.9)" }}>
                  Reserveer een terrastafeltje
                  <span>
                    →
                  </span>
                </Hov>
              </div>
            </div>
            <div style={{ position: "relative", minHeight: "340px" }}>
              <img src="images/terras-borrelen.jpg" alt="Terras Pompstation" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%" }} />
            </div>
          </div>
        </section>
        {' '}
        {' '}
        <section id="terras" data-fade="1" style={{ background: "#F5EFE6", padding: "clamp(46px, 8vw, 128px) 0", borderBottom: "1px solid rgba(42,42,42,0.1)" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(20px, 5vw, 40px)" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(12,1fr)", gap: "clamp(20px, 5vw, 48px)", alignItems: "center" }}>
              <div style={{ gridColumn: "span 7", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div style={{ gridColumn: "span 2", overflow: "hidden", height: "380px" }}>
                  <img src="images/terras-koppel.jpg" alt="Mensen op het terras bij Pompstation" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%" }} />
                </div>
                <div style={{ overflow: "hidden", height: "220px" }}>
                  <img src="images/terras-tafel.jpg" alt="Buiten eten op het terras" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%" }} />
                </div>
                <div style={{ overflow: "hidden", height: "220px" }}>
                  <img src="images/food-burrata.jpg" alt="Gerecht op het terras" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 50%" }} />
                </div>
              </div>
              <div style={{ gridColumn: "span 5" }}>
                <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#5C1A1B", marginBottom: "16px" }}>
                  Het terras
                </div>
                {' '}
                <h2 style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", textTransform: "uppercase", color: "#2A2A2A", fontSize: "clamp(30px, 6.5vw, 60px)", lineHeight: "0.88", margin: "0" }}>
                  Buiten zitten,
                  <br />
                  {' '}
                  <span style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontStyle: "italic", textTransform: "none", fontWeight: "400", color: "#5C1A1B" }}>
                    goed eten.
                  </span>
                </h2>
                {' '}
                <p style={{ margin: "20px 0 0", color: "rgba(42,42,42,0.75)", lineHeight: "1.65" }}>
                  Bij Pompstation kiest u zelf hoe u geniet. Lunch, diner, borrelen — aan een tafel binnen of buiten op ons terras.
                </p>
                {' '}
                <ul className="ps-nolist" style={{ margin: "32px 0 0", display: "flex", flexDirection: "column", borderTop: "1px solid rgba(30,20,18,0.1)" }}>
                  <li style={{ padding: "20px 0", display: "flex", gap: "16px", alignItems: "flex-start", borderBottom: "1px solid rgba(30,20,18,0.1)" }}>
                    <span style={{ marginTop: "4px", width: "20px", height: "20px", flexShrink: "0", borderRadius: "50%", border: "1px solid rgba(42,42,42,0.3)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#2A2A2A" }} />
                    </span>
                    <div>
                      <div style={{ fontWeight: "500", color: "#2A2A2A", fontSize: "16px" }}>
                        Binnen in het restaurant
                      </div>
                      {' '}
                      <div style={{ marginTop: "4px", fontSize: "14px", color: "rgba(42,42,42,0.65)", lineHeight: "1.65" }}>
                        Kaarslicht, een plafond van 12 meter en live jazz op de achtergrond. Het volledige menu, ook bij slecht weer.
                      </div>
                    </div>
                  </li>
                  <li style={{ padding: "20px 0", display: "flex", gap: "16px", alignItems: "flex-start" }}>
                    <span style={{ marginTop: "4px", width: "20px", height: "20px", flexShrink: "0", borderRadius: "50%", border: "1px solid rgba(92,26,27,0.5)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#5C1A1B" }} />
                    </span>
                    <div>
                      <div style={{ fontWeight: "500", color: "#5C1A1B", fontSize: "16px" }}>
                        Buiten op het terras
                      </div>
                      {' '}
                      <div style={{ marginTop: "4px", fontSize: "14px", color: "rgba(42,42,42,0.65)", lineHeight: "1.65" }}>
                        Omringd door groen, op een steenworp van de stad. Reserveren op het terras is ook mogelijk.
                      </div>
                    </div>
                  </li>
                </ul>
                {' '}
                <Hov as="a" href={V.reserveUrl} target="_blank" rel="noopener" style={{ marginTop: "32px", display: "inline-flex", alignItems: "center", gap: "8px", background: "#5C1A1B", color: "#F5EFE6", padding: "14px 24px", fontSize: "14px", fontWeight: "500", letterSpacing: "0.02em", transition: "background 0.2s ease" }} styleHover={{ background: "#3F0F10" }}>
                  Reserveer een tafel
                  <span>
                    →
                  </span>
                </Hov>
              </div>
            </div>
          </div>
        </section>
        {' '}
        {' '}
        <section id="groepen" data-fade="1" style={{ background: "#5C1A1B", color: "#F5EFE6", padding: "clamp(46px, 8vw, 128px) 0" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(20px, 5vw, 40px)" }}>
            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "24px", marginBottom: "64px", flexWrap: "wrap" }}>
              <div style={{ maxWidth: "672px" }}>
                <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(245,239,230,0.7)", marginBottom: "16px" }}>
                  Afhuren & groepen
                </div>
                {' '}
                <h2 style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", textTransform: "uppercase", color: "#F5EFE6", fontSize: "clamp(38px, 9vw, 72px)", lineHeight: "0.88", margin: "0" }}>
                  Uw avond,
                  <br />
                  {' '}
                  <span style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontStyle: "italic", textTransform: "none", fontWeight: "400", color: "rgba(245,239,230,0.75)" }}>
                    onze locatie.
                  </span>
                </h2>
              </div>
              <p style={{ maxWidth: "384px", color: "rgba(245,239,230,0.8)", lineHeight: "1.65", fontSize: "18px" }}>
                Van een intiem groepsdiner tot een volledig exclusieve avond voor driehonderd gasten — Pompstation heeft een formule voor elk gezelschap.
              </p>
            </div>
            {' '}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "24px" }}>
              <article style={{ display: "flex", flexDirection: "column", overflow: "hidden" }}>
                <div style={{ position: "relative", overflow: "hidden", height: "240px" }}>
                  <img src="images/terras-groep.jpg" alt="Gasten aan tafel tijdens een groepsdiner bij Pompstation" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%" }} />
                </div>
                <div style={{ padding: "32px", display: "flex", flexDirection: "column", flex: "1", borderTop: "1px solid rgba(245,239,230,0.1)", background: "#3F0F10" }}>
                  <div style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", textTransform: "uppercase", color: "rgba(245,239,230,0.4)", fontSize: "clamp(30px, 6.5vw, 48px)", marginBottom: "4px", lineHeight: "1" }}>
                    10–40
                  </div>
                  <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "10px", letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(245,239,230,0.5)", marginBottom: "20px" }}>
                    personen
                  </div>
                  <h3 style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontWeight: "400", color: "#F5EFE6", fontSize: "clamp(21px, 4.2vw, 28px)", lineHeight: "1.25", margin: "0" }}>
                    Groepsdiner aan een lange tafel
                  </h3>
                  <p style={{ margin: "16px 0 0", color: "rgba(245,239,230,0.7)", lineHeight: "1.65", fontSize: "15px", flex: "1" }}>
                    Voor verjaardagen, jubilea, teamdiners of vriendengroepen. Een lange tafel, het volledige menu en een vaste contactpersoon die alles regelt.
                  </p>
                </div>
              </article>
              <article style={{ display: "flex", flexDirection: "column", overflow: "hidden" }}>
                <div style={{ position: "relative", overflow: "hidden", height: "240px" }}>
                  <img src="images/bride-vide.jpg" alt="De vide afhuren" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%" }} />
                </div>
                <div style={{ padding: "32px", display: "flex", flexDirection: "column", flex: "1", borderTop: "1px solid rgba(245,239,230,0.1)", background: "#3F0F10" }}>
                  <div style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", textTransform: "uppercase", color: "rgba(245,239,230,0.4)", fontSize: "clamp(30px, 6.5vw, 48px)", marginBottom: "4px", lineHeight: "1" }}>
                    50–100
                  </div>
                  <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "10px", letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(245,239,230,0.5)", marginBottom: "20px" }}>
                    personen
                  </div>
                  <h3 style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontWeight: "400", color: "#F5EFE6", fontSize: "clamp(21px, 4.2vw, 28px)", lineHeight: "1.25", margin: "0" }}>
                    De vide afhuren
                  </h3>
                  <p style={{ margin: "16px 0 0", color: "rgba(245,239,230,0.7)", lineHeight: "1.65", fontSize: "15px", flex: "1" }}>
                    Huur de vide af voor een borrel, presentatie of feest. Met eigen bar, ingang en zicht op de volledige hal. Privé, maar toch deel van de sfeer.
                  </p>
                </div>
              </article>
              <article style={{ display: "flex", flexDirection: "column", overflow: "hidden" }}>
                <div style={{ position: "relative", overflow: "hidden", height: "240px" }}>
                  <img src="images/event-fullhall.jpg" alt="Volledig exclusief" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%" }} />
                </div>
                <div style={{ padding: "32px", display: "flex", flexDirection: "column", flex: "1", borderTop: "1px solid rgba(245,239,230,0.1)", background: "#3F0F10" }}>
                  <div style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", textTransform: "uppercase", color: "rgba(245,239,230,0.4)", fontSize: "clamp(30px, 6.5vw, 48px)", marginBottom: "4px", lineHeight: "1" }}>
                    Tot 360
                  </div>
                  <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "10px", letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(245,239,230,0.5)", marginBottom: "20px" }}>
                    personen
                  </div>
                  <h3 style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontWeight: "400", color: "#F5EFE6", fontSize: "clamp(21px, 4.2vw, 28px)", lineHeight: "1.25", margin: "0" }}>
                    Volledig exclusief
                  </h3>
                  <p style={{ margin: "16px 0 0", color: "rgba(245,239,230,0.7)", lineHeight: "1.65", fontSize: "15px", flex: "1" }}>
                    De hele locatie voor uw eigen avond. Bruiloften, galadiners, productlanceringen — Pompstation staat geheel tot uw beschikking.
                  </p>
                </div>
              </article>
              <article style={{ display: "flex", flexDirection: "column", overflow: "hidden" }}>
                <div style={{ position: "relative", overflow: "hidden", height: "240px" }}>
                  <img src="images/terras-outdoor.jpg" alt="Het terras afhuren" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 50%" }} />
                </div>
                <div style={{ padding: "32px", display: "flex", flexDirection: "column", flex: "1", borderTop: "1px solid rgba(245,239,230,0.1)", background: "#3F0F10" }}>
                  <div style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", textTransform: "uppercase", color: "rgba(245,239,230,0.4)", fontSize: "clamp(30px, 6.5vw, 48px)", marginBottom: "4px", lineHeight: "1" }}>
                    20–200
                  </div>
                  <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "10px", letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(245,239,230,0.5)", marginBottom: "20px" }}>
                    personen
                  </div>
                  <h3 style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontWeight: "400", color: "#F5EFE6", fontSize: "clamp(21px, 4.2vw, 28px)", lineHeight: "1.25", margin: "0" }}>
                    Het terras afhuren
                  </h3>
                  <p style={{ margin: "16px 0 0", color: "rgba(245,239,230,0.7)", lineHeight: "1.65", fontSize: "15px", flex: "1" }}>
                    Ons zonnige buitenterras voor groepen. Sit-down voor 20–80 gasten, staand tot 200. Ideaal voor zomerse borrels, lunches en buitenevenementen.
                  </p>
                </div>
              </article>
            </div>
            {' '}
            <div style={{ marginTop: "48px", display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <Hov as="a" href="groepen.html" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", padding: "16px 32px", background: "#F5EFE6", color: "#5C1A1B", fontWeight: "500", letterSpacing: "0.02em", fontSize: "14px", transition: "background 0.2s ease" }} styleHover={{ background: "rgba(245,239,230,0.9)" }}>
                Bekijk alle afhuur-opties
              </Hov>
              <Hov as="a" href="groepen.html" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", padding: "16px 32px", border: "1px solid rgba(245,239,230,0.3)", color: "#F5EFE6", fontWeight: "500", letterSpacing: "0.02em", fontSize: "14px", transition: "border-color 0.2s ease" }} styleHover={{ borderColor: "rgba(245,239,230,0.6)" }}>
                Vraag een offerte aan
              </Hov>
            </div>
          </div>
        </section>
        {' '}
        {' '}
        <section id="sfeer" data-fade="1" style={{ background: "#EFE7D9", padding: "clamp(46px, 8vw, 128px) 0", borderBottom: "1px solid rgba(42,42,42,0.1)" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(20px, 5vw, 40px)" }}>
            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "24px", marginBottom: "64px", flexWrap: "wrap" }}>
              <div style={{ maxWidth: "672px" }}>
                <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#5C1A1B", marginBottom: "16px" }}>
                  Sfeer
                </div>
                {' '}
                <h2 style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", textTransform: "uppercase", color: "#2A2A2A", fontSize: "clamp(44px, 11vw, 96px)", lineHeight: "0.88", margin: "0" }}>
                  Proef de
                  <br />
                  {' '}
                  <span style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontStyle: "italic", textTransform: "none", fontWeight: "400", color: "#5C1A1B" }}>
                    sfeer vooraf.
                  </span>
                </h2>
              </div>
              <p style={{ maxWidth: "384px", color: "rgba(42,42,42,0.8)", lineHeight: "1.65", fontSize: "18px" }}>
                Kaarslicht onder een plafond van twaalf meter, jazz die door de hal galmt en een keuken die er staat. Een eerste indruk van een avond bij Pompstation.
              </p>
            </div>
            {' '}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gridAutoRows: "215px", gridAutoFlow: "dense", gap: "16px" }}>
              <figure style={{ position: "relative", overflow: "hidden", background: "#2A2A2A", margin: "0", gridColumn: "span 2", gridRow: "span 2" }}>
                <img src="images/interior-vide.jpg" alt="De grote hal · 12 m hoog" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 35%" }} />
                <figcaption style={{ position: "absolute", bottom: "0", left: "0", padding: "20px" }}>
                  <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#F5EFE6", border: "1px solid rgba(245,239,230,0.45)", padding: "4px 8px", background: "rgba(0,0,0,0.25)", backdropFilter: "blur(4px)" }}>
                    De grote hal · 12 m hoog
                  </span>
                </figcaption>
              </figure>
              <figure style={{ position: "relative", overflow: "hidden", background: "#2A2A2A", margin: "0" }}>
                <img src="images/food-burrata.jpg" alt="Uit de open keuken" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%" }} />
                <figcaption style={{ position: "absolute", bottom: "0", left: "0", padding: "12px" }}>
                  <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#F5EFE6", border: "1px solid rgba(245,239,230,0.45)", padding: "4px 8px", background: "rgba(0,0,0,0.25)", backdropFilter: "blur(4px)" }}>
                    Uit de open keuken
                  </span>
                </figcaption>
              </figure>
              <figure style={{ position: "relative", overflow: "hidden", background: "#2A2A2A", margin: "0" }}>
                <img src="images/cocktail.jpg" alt="Borrelen aan de bar" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%" }} />
                <figcaption style={{ position: "absolute", bottom: "0", left: "0", padding: "12px" }}>
                  <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#F5EFE6", border: "1px solid rgba(245,239,230,0.45)", padding: "4px 8px", background: "rgba(0,0,0,0.25)", backdropFilter: "blur(4px)" }}>
                    Borrelen aan de bar
                  </span>
                </figcaption>
              </figure>
              <figure style={{ position: "relative", overflow: "hidden", background: "#2A2A2A", margin: "0", gridRow: "span 2" }}>
                <img src="images/groepsdiner-overhead.jpg" alt="Groepen & events" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%" }} />
                <figcaption style={{ position: "absolute", bottom: "0", left: "0", padding: "20px" }}>
                  <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#F5EFE6", border: "1px solid rgba(245,239,230,0.45)", padding: "4px 8px", background: "rgba(0,0,0,0.25)", backdropFilter: "blur(4px)" }}>
                    Groepen & events
                  </span>
                </figcaption>
              </figure>
              <figure style={{ position: "relative", overflow: "hidden", background: "#2A2A2A", margin: "0", gridRow: "span 2" }}>
                <img src="images/live-muziek-intiem.jpg" alt="Live jazz op de vide" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%" }} />
                <figcaption style={{ position: "absolute", bottom: "0", left: "0", padding: "20px" }}>
                  <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#F5EFE6", border: "1px solid rgba(245,239,230,0.45)", padding: "4px 8px", background: "rgba(0,0,0,0.25)", backdropFilter: "blur(4px)" }}>
                    Live jazz op de vide
                  </span>
                </figcaption>
              </figure>
              <figure style={{ position: "relative", overflow: "hidden", background: "#2A2A2A", margin: "0", gridColumn: "span 2" }}>
                <img src="images/historic-1912.jpg" alt="Anno 1912" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
                <figcaption style={{ position: "absolute", bottom: "0", left: "0", padding: "20px" }}>
                  <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#F5EFE6", border: "1px solid rgba(245,239,230,0.45)", padding: "4px 8px", background: "rgba(0,0,0,0.25)", backdropFilter: "blur(4px)" }}>
                    Anno 1912
                  </span>
                </figcaption>
              </figure>
              <figure style={{ position: "relative", overflow: "hidden", background: "#2A2A2A", margin: "0" }}>
                <img src="images/terras-koppel.jpg" alt="Op het terras" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%" }} />
                <figcaption style={{ position: "absolute", bottom: "0", left: "0", padding: "12px" }}>
                  <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#F5EFE6", border: "1px solid rgba(245,239,230,0.45)", padding: "4px 8px", background: "rgba(0,0,0,0.25)", backdropFilter: "blur(4px)" }}>
                    Op het terras
                  </span>
                </figcaption>
              </figure>
              <figure style={{ position: "relative", overflow: "hidden", background: "#2A2A2A", margin: "0" }}>
                <img src="images/terras-champagne.jpg" alt="Zomerse borrels" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%" }} />
                <figcaption style={{ position: "absolute", bottom: "0", left: "0", padding: "12px" }}>
                  <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#F5EFE6", border: "1px solid rgba(245,239,230,0.45)", padding: "4px 8px", background: "rgba(0,0,0,0.25)", backdropFilter: "blur(4px)" }}>
                    Zomerse borrels
                  </span>
                </figcaption>
              </figure>
              <figure style={{ position: "relative", overflow: "hidden", background: "#2A2A2A", margin: "0" }}>
                <img src="images/bride.jpg" alt="Bruiloften" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 25%" }} />
                <figcaption style={{ position: "absolute", bottom: "0", left: "0", padding: "12px" }}>
                  <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#F5EFE6", border: "1px solid rgba(245,239,230,0.45)", padding: "4px 8px", background: "rgba(0,0,0,0.25)", backdropFilter: "blur(4px)" }}>
                    Bruiloften
                  </span>
                </figcaption>
              </figure>
              <figure style={{ position: "relative", overflow: "hidden", background: "#2A2A2A", margin: "0" }}>
                <img src="images/groepsdiner-overhead.jpg" alt="Met uw gezelschap" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 20%" }} />
                <figcaption style={{ position: "absolute", bottom: "0", left: "0", padding: "12px" }}>
                  <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#F5EFE6", border: "1px solid rgba(245,239,230,0.45)", padding: "4px 8px", background: "rgba(0,0,0,0.25)", backdropFilter: "blur(4px)" }}>
                    Met uw gezelschap
                  </span>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>
        {' '}
        {' '}
        <section data-fade="1" style={{ background: "#F5EFE6", padding: "clamp(46px, 8vw, 128px) 0", borderBottom: "1px solid rgba(42,42,42,0.1)" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(20px, 5vw, 40px)", display: "grid", gridTemplateColumns: "repeat(12,1fr)", gap: "clamp(20px, 5vw, 48px)", alignItems: "center" }}>
            <div style={{ gridColumn: "span 4" }}>
              <div style={{ width: "100%", aspectRatio: "3/4", overflow: "hidden", background: "#2A2A2A" }}>
                <img src="images/historic-1912.jpg" alt="Het pompstation in 1912 — originele machinezaal" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
              </div>
              {' '}
              <div style={{ marginTop: "12px", fontFamily: "'JetBrains Mono',monospace", fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(42,42,42,0.55)" }}>
                Anno 1912 · originele machinezaal
              </div>
            </div>
            <div style={{ gridColumn: "span 8" }}>
              <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#5C1A1B", marginBottom: "16px" }}>
                De locatie
              </div>
              {' '}
              <h2 style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontWeight: "400", lineHeight: "1.05", color: "#2A2A2A", fontSize: "clamp(30px, 6.5vw, 60px)", margin: "0" }}>
                Een voormalig{' '}
                <em style={{ color: "#5C1A1B" }}>
                  watergemaal
                </em>
                {' '}uit 1912 in Amsterdam-Oost — industrieel, hoog en imposant. Van buiten onopvallend, van binnen adembenemend.
              </h2>
              {' '}
              <div style={{ marginTop: "32px", display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "clamp(20px, 5vw, 40px)", maxWidth: "576px" }}>
                <div>
                  <div style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", textTransform: "uppercase", color: "#5C1A1B", fontSize: "clamp(30px, 6.5vw, 48px)" }}>
                    12m
                  </div>
                  {' '}
                  <div style={{ marginTop: "4px", fontSize: "14px", color: "rgba(42,42,42,0.7)" }}>
                    vrije hoogte
                  </div>
                </div>
                <div>
                  <div style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", textTransform: "uppercase", color: "#5C1A1B", fontSize: "clamp(30px, 6.5vw, 48px)" }}>
                    360
                  </div>
                  {' '}
                  <div style={{ marginTop: "4px", fontSize: "14px", color: "rgba(42,42,42,0.7)" }}>
                    max. capaciteit
                  </div>
                </div>
                <div>
                  <div style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", textTransform: "uppercase", color: "#5C1A1B", fontSize: "clamp(30px, 6.5vw, 48px)" }}>
                    15 jr
                  </div>
                  {' '}
                  <div style={{ marginTop: "4px", fontSize: "14px", color: "rgba(42,42,42,0.7)" }}>
                    ervaring met events
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {' '}
        {' '}
        <section data-fade="1" style={{ background: "#EFE7D9", padding: "clamp(46px, 8vw, 112px) 0" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(20px, 5vw, 40px)" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
              <Hov as="a" href={V.reserveUrl} target="_blank" rel="noopener" style={{ display: "block", background: "#F5EFE6", border: "1px solid rgba(42,42,42,0.15)", padding: "clamp(20px, 5vw, 40px)", transition: "border-color 0.2s ease" }} styleHover={{ borderColor: "#5C1A1B" }}>
                <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#5C1A1B", marginBottom: "12px" }}>
                  Kom langs
                </div>
                {' '}
                <div style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", textTransform: "uppercase", color: "#2A2A2A", fontSize: "clamp(30px, 6.5vw, 48px)", lineHeight: "0.9" }}>
                  Reserveer een tafel
                </div>
                {' '}
                <div style={{ marginTop: "16px", color: "rgba(42,42,42,0.7)" }}>
                  Lunch, diner, borrel of terras.
                </div>
                {' '}
                <div style={{ marginTop: "24px", display: "inline-flex", alignItems: "center", gap: "8px", color: "#5C1A1B", fontWeight: "500" }}>
                  Naar reserveren
                  <span>
                    →
                  </span>
                </div>
              </Hov>
              <a href="groepen.html" style={{ position: "relative", overflow: "hidden", display: "block", background: "#5C1A1B", color: "#F5EFE6", padding: "clamp(20px, 5vw, 40px)" }}>
                <img src="images/event-staand.jpg" alt="Groepsevenement Pompstation" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%" }} />
                {' '}
                <div style={{ position: "absolute", inset: "0", background: "rgba(0,0,0,0.55)" }} />
                {' '}
                <div style={{ position: "relative", zIndex: "10" }}>
                  <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(245,239,230,0.7)", marginBottom: "12px" }}>
                    Met een groep of event
                  </div>
                  {' '}
                  <div style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", textTransform: "uppercase", color: "#F5EFE6", fontSize: "clamp(30px, 6.5vw, 48px)", lineHeight: "0.9" }}>
                    Vraag een offerte aan
                  </div>
                  {' '}
                  <div style={{ marginTop: "16px", color: "rgba(245,239,230,0.75)" }}>
                    Afhuur van 10 tot 360 personen.
                  </div>
                  {' '}
                  <div style={{ marginTop: "24px", display: "inline-flex", alignItems: "center", gap: "8px", color: "#F5EFE6", fontWeight: "500" }}>
                    Bekijk afhuur & groepen
                    <span>
                      →
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>
        {' '}
        {' '}
        <footer id="contact" style={{ background: "#2A2A2A", color: "#F5EFE6" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "clamp(46px, 8vw, 96px) clamp(20px, 5vw, 40px)" }}>
            <img src="images/logo.webp" alt="Pompstation" style={{ height: "36px", width: "auto", marginBottom: "56px", opacity: "0.9" }} />
            {' '}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(12,1fr)", gap: "clamp(20px, 5vw, 40px)", alignItems: "flex-end" }}>
              <div style={{ gridColumn: "span 7" }}>
                <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(245,239,230,0.6)", marginBottom: "16px" }}>
                  Reserveren of even bellen?
                </div>
                {' '}
                <Hov as="a" href="tel:+31202279885" style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", textTransform: "uppercase", display: "block", color: "#F5EFE6", fontSize: "clamp(44px, 11vw, 96px)", lineHeight: "0.88", transition: "color 0.2s ease" }} styleHover={{ color: "rgba(245,239,230,0.8)" }}>
                  +31 20 227 9885
                </Hov>
                {' '}
                <Hov as="a" href="mailto:info@pompstation.nu" style={{ marginTop: "16px", display: "inline-block", fontFamily: "'Instrument Serif',Georgia,serif", fontSize: "clamp(21px, 4.2vw, 30px)", fontStyle: "italic", color: "rgba(245,239,230,0.85)", transition: "color 0.2s ease" }} styleHover={{ color: "#F5EFE6" }}>
                  info@pompstation.nu
                </Hov>
              </div>
              <div style={{ gridColumn: "span 5", paddingLeft: "32px", borderLeft: "1px solid rgba(245,239,230,0.2)" }}>
                <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(245,239,230,0.6)", marginBottom: "16px" }}>
                  Pompstation
                </div>
                {' '}
                <address style={{ fontStyle: "normal", color: "rgba(245,239,230,0.85)", lineHeight: "1.65" }}>
                  Zeeburgerdijk 52
                  <br />
                  {' '}1094 AE Amsterdam
                  <br />
                  <br />
                  {' '}
                  <span style={{ color: "rgba(245,239,230,0.6)", fontSize: "14px", fontFamily: "'JetBrains Mono',monospace" }}>
                    Wo–do · 17:00–00:00
                    <br />
                    {' '}Vr–za · 17:00–01:00
                    <br />
                    {' '}Live muziek · zomerstop t/m 12 aug
                  </span>
                </address>
              </div>
            </div>
          </div>
          {' '}
          <div style={{ borderTop: "1px solid rgba(245,239,230,0.15)" }}>
            <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "24px clamp(20px, 5vw, 40px)", display: "flex", justifyContent: "space-between", gap: "16px", fontSize: "12px", fontFamily: "'JetBrains Mono',monospace", color: "rgba(245,239,230,0.55)", flexWrap: "wrap" }}>
              <div>
                © 2026 Restaurant Pompstation — gevestigd in een monument uit 1912
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 24px" }}>
                <Hov as="a" href="menu.html" style={{ color: "rgba(245,239,230,0.55)" }} styleHover={{ color: "#F5EFE6" }}>
                  Menu
                </Hov>
                <Hov as="a" href="verhaal.html" style={{ color: "rgba(245,239,230,0.55)" }} styleHover={{ color: "#F5EFE6" }}>
                  Verhaal
                </Hov>
                <Hov as="a" href="groepen.html" style={{ color: "rgba(245,239,230,0.55)" }} styleHover={{ color: "#F5EFE6" }}>
                  Afhuren & groepen
                </Hov>
                <Hov as="a" href="contact.html" style={{ color: "rgba(245,239,230,0.55)" }} styleHover={{ color: "#F5EFE6" }}>
                  Contact
                </Hov>
                <Hov as="a" href="#" style={{ color: "rgba(245,239,230,0.55)" }} styleHover={{ color: "#F5EFE6" }}>
                  Vacatures
                </Hov>
                <Hov as="a" href="#" style={{ color: "rgba(245,239,230,0.55)" }} styleHover={{ color: "#F5EFE6" }}>
                  Algemene voorwaarden
                </Hov>
                <Hov as="a" href="#" style={{ color: "rgba(245,239,230,0.55)" }} styleHover={{ color: "#F5EFE6" }}>
                  Privacy
                </Hov>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

const __root = document.getElementById('root');
if (__root) ReactDOM.createRoot(__root).render(<PompstationHome />);
