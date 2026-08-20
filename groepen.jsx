function PompstationGroepen(props) { return <PompstationGroepenClass {...props} />; }
class PompstationGroepenClass extends React.Component {
  state = { done: false };
    renderVals() {
      return {
        brochureDone: this.state.done,
        brochureOpen: !this.state.done,
        submitBrochure: (e) => { e.preventDefault(); psSend(e.target, { name: 'Brochure groepen & afhuren', subject: 'Brochure-aanvraag groepen & afhuren', redirect: 'bedankt-brochure.html' }).catch(() => {}); },
        options: [
          { title: 'Groepsdiner', sub: 'Vanaf 10 personen', desc: '3, 4 of 5 gangen — vanaf €47 p.p. Keuze uit vlees, vis of vega per gang.', href: 'groepsdiner.html', image: 'images/groepsdiner-overhead.jpg' },
          { title: 'Groepslunch', sub: 'Besloten teamlunch', desc: 'Een verzorgde lunch in monumentale setting. Ideaal voor teamdagen en bijeenkomsten.', href: 'groepslunch.html', image: 'images/terras-groep.jpg' },
          { title: 'Bedrijfsborrel', sub: 'Staand of zittend', desc: 'Borrelen met uw team of relaties in een unieke industriële sfeer. Catering op maat.', href: 'bedrijfsborrel.html', image: 'images/event-staand.jpg' },
          { title: 'Bedrijfsdiner', sub: 'Stijlvol zakelijk', desc: 'Zakelijk diner in een monumentale ruimte. Maatwerk voor 10 tot 180 personen.', href: 'bedrijfsdiner.html', image: 'images/service-candles.jpg' },
          { title: 'Bedrijfsfeest', sub: 'Tot 400 personen', desc: 'Uw bedrijfsfeest op een unieke locatie. Pompstation biedt ruimtes tot 400 personen.', href: 'bedrijfsfeest.html', image: 'images/event-fullhall.jpg' },
          { title: 'Vergadering', sub: 'Met catering', desc: 'Inspirerende vergaderruimtes met lunch of borrel-catering in Amsterdam.', href: 'vergadering.html', image: 'images/interior-vide.jpg' },
          { title: 'Bruiloft', sub: 'Trouwlocatie Amsterdam', desc: 'Ceremonie, bruiloftsdiner en feest in een rijksmonument. Tot 400 gasten.', href: 'bruiloft.html', image: 'images/bride.jpg' },
        ],
      };
    }
  render() {
    const V = this.renderVals ? this.renderVals() : {};
    return (
      <div style={{ fontFamily: "'DM Sans',system-ui,sans-serif", color: "#2A2A2A", overflowX: "hidden" }}>
        <PSNav current="groepen" />
        {' '}
        <PSHero kicker="Groepen & Afhuren" title="Een locatie" titleAccent="voor elk evenement" lead="Van groepsdiner tot bedrijfsfeest, van teamlunch tot bruiloft. Pompstation biedt unieke ruimtes voor groepen vanaf 10 personen." image="images/event-fullhall.jpg" position="center 40%" heightVh="75" minHeight="520" cta1Label="Offerte aanvragen" cta1Href="#" cta2Label="Brochure downloaden" cta2Href="#brochure" />
        {' '}
        {' '}
        <section style={{ background: "#F5EFE6", padding: "clamp(46px, 8vw, 112px) 0", borderBottom: "1px solid rgba(42,42,42,0.1)" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(20px, 5vw, 40px)" }}>
            <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#5C1A1B", marginBottom: "12px" }}>
              Mogelijkheden
            </div>
            {' '}
            <h2 style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", textTransform: "uppercase", color: "#2A2A2A", fontSize: "clamp(30px, 6.5vw, 60px)", lineHeight: "0.9", margin: "0 0 48px" }}>
              Wat zoekt u?
            </h2>
            {' '}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "24px" }}>
              {(V.options || []).map((o, $index) => (
                <React.Fragment key={$index}>
                  <Hov as="a" href={o.href} style={{ display: "flex", flexDirection: "column", background: "#FFFFFF", border: "1px solid rgba(42,42,42,0.1)", overflow: "hidden", transition: "transform 0.4s cubic-bezier(0.22,1,0.36,1)" }} styleHover={{ transform: "translateY(-6px)" }}>
                    <div style={{ overflow: "hidden", height: "220px" }}>
                      <img src={o.image} alt={o.title} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
                    </div>
                    <div style={{ padding: "24px" }}>
                      <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#5C1A1B", marginBottom: "8px" }}>
                        {o.sub}
                      </div>
                      {' '}
                      <h3 style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", textTransform: "uppercase", color: "#2A2A2A", fontSize: "clamp(21px, 4.2vw, 30px)", margin: "0 0 8px", lineHeight: "1" }}>
                        {o.title}
                      </h3>
                      {' '}
                      <p style={{ color: "rgba(42,42,42,0.7)", fontSize: "14px", lineHeight: "1.6", margin: "0" }}>
                        {o.desc}
                      </p>
                      {' '}
                      <span style={{ marginTop: "16px", display: "inline-block", color: "#5C1A1B", fontSize: "14px", fontWeight: "500", letterSpacing: "0.02em" }}>
                        Meer informatie →
                      </span>
                    </div>
                  </Hov>
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>
        {' '}
        {' '}
        <section style={{ background: "#2A2A2A", color: "#F5EFE6", padding: "clamp(34px, 6.5vw, 56px) 0" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(20px, 5vw, 40px)", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "32px", textAlign: "center" }}>
            <div>
              <div style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", textTransform: "uppercase", color: "#F5EFE6", fontSize: "clamp(38px, 9vw, 72px)", lineHeight: "1" }}>
                400
              </div>
              <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(245,239,230,0.5)", marginTop: "8px" }}>
                max. personen
              </div>
            </div>
            <div>
              <div style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", textTransform: "uppercase", color: "#F5EFE6", fontSize: "clamp(38px, 9vw, 72px)", lineHeight: "1" }}>
                1912
              </div>
              <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(245,239,230,0.5)", marginTop: "8px" }}>
                gebouwd
              </div>
            </div>
            <div>
              <div style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", textTransform: "uppercase", color: "#F5EFE6", fontSize: "clamp(38px, 9vw, 72px)", lineHeight: "1" }}>
                4
              </div>
              <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(245,239,230,0.5)", marginTop: "8px" }}>
                unieke ruimtes
              </div>
            </div>
            <div>
              <div style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", textTransform: "uppercase", color: "#F5EFE6", fontSize: "clamp(38px, 9vw, 72px)", lineHeight: "1" }}>
                10+
              </div>
              <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(245,239,230,0.5)", marginTop: "8px" }}>
                min. personen
              </div>
            </div>
          </div>
        </section>
        {' '}
        {' '}
        <section style={{ background: "#5C1A1B", color: "#F5EFE6", padding: "clamp(46px, 8vw, 80px) 0" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(20px, 5vw, 40px)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "32px", flexWrap: "wrap" }}>
            <div>
              <h2 style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", textTransform: "uppercase", color: "#F5EFE6", fontSize: "clamp(30px, 6.5vw, 60px)", lineHeight: "0.9", margin: "0" }}>
                Direct een offerte?
              </h2>
              {' '}
              <p style={{ margin: "12px 0 0", color: "rgba(245,239,230,0.75)", fontSize: "18px" }}>
                We reageren binnen 1 werkdag.
              </p>
            </div>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <Hov as="a" href="#brochure" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", background: "#F5EFE6", color: "#5C1A1B", padding: "16px 28px", fontWeight: "500", fontSize: "14px", letterSpacing: "0.02em", transition: "background 0.2s ease" }} styleHover={{ background: "rgba(245,239,230,0.9)" }}>
                Offerte aanvragen →
              </Hov>
              <Hov as="a" href="tel:+31202279885" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", border: "1px solid rgba(245,239,230,0.3)", color: "#F5EFE6", padding: "16px 28px", fontWeight: "500", fontSize: "14px", letterSpacing: "0.02em", transition: "border-color 0.2s ease" }} styleHover={{ borderColor: "rgba(245,239,230,0.6)" }}>
                020 227 9885
              </Hov>
            </div>
          </div>
        </section>
        {' '}
        {' '}
        <section id="brochure" style={{ background: "#2A2A2A", color: "#F5EFE6", padding: "clamp(46px, 8vw, 112px) 0" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(20px, 5vw, 40px)" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(12,1fr)", gap: "clamp(20px, 5vw, 48px)", alignItems: "center" }}>
              <div style={{ gridColumn: "span 4" }}>
                <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#A88A5A", marginBottom: "16px" }}>
                  Brochure
                </div>
                {' '}
                <h2 style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", textTransform: "uppercase", color: "#F5EFE6", fontSize: "clamp(30px, 6.5vw, 48px)", lineHeight: "1.1", margin: "0" }}>
                  Brochure
                  <br />
                  <em style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontWeight: "400", textTransform: "none" }}>
                    groepen & afhuren
                  </em>
                </h2>
                {' '}
                <p style={{ margin: "20px 0 0", color: "rgba(245,239,230,0.65)", fontSize: "16px", lineHeight: "1.65" }}>
                  Ontvang onze complete brochure met capaciteiten, technische specificaties, catering-opties en tarieven.
                </p>
                {' '}
                <p style={{ margin: "12px 0 0", color: "rgba(245,239,230,0.45)", fontSize: "14px", fontFamily: "'JetBrains Mono',monospace" }}>
                  U kunt de brochure direct downloaden na het versturen.
                </p>
              </div>
              <div style={{ gridColumn: "6 / span 7" }}>
                {(V.brochureDone) ? (<React.Fragment>
                  <div style={{ border: "1px solid rgba(245,239,230,0.2)", padding: "clamp(20px, 5vw, 48px)" }}>
                    <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "12px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#A88A5A", marginBottom: "16px" }}>
                      Verstuurd
                    </div>
                    {' '}
                    <h3 style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", textTransform: "uppercase", color: "#F5EFE6", fontSize: "clamp(25px, 5.2vw, 40px)", margin: "0" }}>
                      Klaar om te lezen
                    </h3>
                    {' '}
                    <p style={{ margin: "16px 0 0", color: "rgba(245,239,230,0.65)", lineHeight: "1.65" }}>
                      U kunt de brochure nu downloaden. We nemen binnenkort contact op.
                    </p>
                  </div>
                </React.Fragment>) : null}
                {' '}
                {(V.brochureOpen) ? (<React.Fragment>
                  <form onSubmit={V.submitBrochure}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                      <div>
                        <label style={{ display: "block", fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(245,239,230,0.55)", marginBottom: "8px" }}>
                          Naam *
                        </label>
                        {' '}
                        <input type="text" placeholder="Jan de Vries" style={{ width: "100%", background: "rgba(245,239,230,0.1)", border: "1px solid rgba(245,239,230,0.2)", color: "#F5EFE6", padding: "14px 16px", fontSize: "14px", outline: "none", fontFamily: "'DM Sans',sans-serif" }} />
                      </div>
                      <div>
                        <label style={{ display: "block", fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(245,239,230,0.55)", marginBottom: "8px" }}>Particulier of zakelijk *</label>
                        <select style={{ width: "100%", background: "rgba(245,239,230,0.1)", border: "1px solid rgba(245,239,230,0.2)", color: "#F5EFE6", padding: "14px 16px", fontSize: "14px", outline: "none", fontFamily: "'DM Sans',sans-serif", cursor: "pointer" }}>
                          <option>Particulier</option>
                          <option>Zakelijk</option>
                        </select>
                      </div>
                      <div>
                        <label style={{ display: "block", fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(245,239,230,0.55)", marginBottom: "8px" }}>Bedrijfsnaam <span style={{ textTransform: "none", letterSpacing: "0.05em", color: "rgba(245,239,230,0.4)" }}>(optioneel)</span></label>
                        <input type="text" placeholder="Uw bedrijf" style={{ width: "100%", background: "rgba(245,239,230,0.1)", border: "1px solid rgba(245,239,230,0.2)", color: "#F5EFE6", padding: "14px 16px", fontSize: "14px", outline: "none", fontFamily: "'DM Sans',sans-serif" }} />
                      </div>
                      <div>
                        <label style={{ display: "block", fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(245,239,230,0.55)", marginBottom: "8px" }}>
                          Telefoonnummer *
                        </label>
                        {' '}
                        <input type="tel" placeholder="+31 6 12 34 56 78" style={{ width: "100%", background: "rgba(245,239,230,0.1)", border: "1px solid rgba(245,239,230,0.2)", color: "#F5EFE6", padding: "14px 16px", fontSize: "14px", outline: "none", fontFamily: "'DM Sans',sans-serif" }} />
                      </div>
                      <div>
                        <label style={{ display: "block", fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(245,239,230,0.55)", marginBottom: "8px" }}>
                          E-mailadres *
                        </label>
                        {' '}
                        <input type="email" placeholder="naam@bedrijf.nl" style={{ width: "100%", background: "rgba(245,239,230,0.1)", border: "1px solid rgba(245,239,230,0.2)", color: "#F5EFE6", padding: "14px 16px", fontSize: "14px", outline: "none", fontFamily: "'DM Sans',sans-serif" }} />
                      </div>
                      <div>
                        <label style={{ display: "block", fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(245,239,230,0.55)", marginBottom: "8px" }}>
                          Groepsgrootte *
                        </label>
                        {' '}
                        <input type="number" placeholder="bv. 80" style={{ width: "100%", background: "rgba(245,239,230,0.1)", border: "1px solid rgba(245,239,230,0.2)", color: "#F5EFE6", padding: "14px 16px", fontSize: "14px", outline: "none", fontFamily: "'DM Sans',sans-serif" }} />
                      </div>
                    </div>
                    {' '}
                    <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", paddingTop: "20px" }}>
                      <input type="checkbox" style={{ marginTop: "4px", width: "16px", height: "16px", accentColor: "#F5EFE6", flexShrink: "0" }} />
                      <label style={{ fontSize: "14px", color: "rgba(245,239,230,0.7)", lineHeight: "1.6" }}>
                        Ik ga akkoord met de{' '}
                        <a href="#" style={{ color: "#F5EFE6", textDecoration: "underline" }}>
                          privacyverklaring
                        </a>
                        {' '}van Pompstation.
                      </label>
                    </div>
                    {' '}
                    <Hov as="button" type="submit" style={{ marginTop: "28px", display: "inline-flex", alignItems: "center", gap: "12px", background: "#F5EFE6", color: "#5C1A1B", padding: "16px 32px", fontSize: "14px", fontWeight: "500", letterSpacing: "0.02em", border: "none", cursor: "pointer", transition: "background 0.2s ease" }} styleHover={{ background: "rgba(245,239,230,0.9)" }}>
                      <span>
                        Ontvang de brochure
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
if (__root) ReactDOM.createRoot(__root).render(<PompstationGroepen />);
