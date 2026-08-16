function PompstationVacatures(props) { return <PompstationVacaturesClass {...props} />; }
class PompstationVacaturesClass extends React.Component {
  renderVals() {
      const mail = (role) => 'mailto:info@pompstation.nu?subject=Sollicitatie%20' + encodeURIComponent(role);
      const vacancies = [
        { role: 'Zelfstandig werkend kok', team: 'Keuken', type: 'Fulltime · 38 uur', desc: 'Je draait zelfstandig je post in een open keuken met seizoensgebonden, lokale producten en dry-aged vlees uit eigen kast.' },
        { role: 'Chef de partie', team: 'Keuken', type: '32–38 uur', desc: 'Verantwoordelijk voor je eigen partij — van mise en place tot uitserveren tijdens drukke muziekavonden.' },
        { role: 'Restaurantmedewerker / bediening', team: 'Bediening', type: 'Part- of fulltime', desc: 'Het visitekaartje van Pompstation. Je adviseert over kaart en wijn en maakt van elke avond een belevenis.' },
        { role: 'Bartender', team: 'Bar', type: 'Weekend of fulltime', desc: 'Cocktails, wijn en een goed verhaal aan de bar — ook tijdens live optredens en events.' },
        { role: 'Eventcoördinator', team: 'Events & groepen', type: 'Fulltime', desc: 'Eén aanspreekpunt voor bruiloften, bedrijfsfeesten en groepsdiners — van eerste offerte tot de avond zelf.' },
        { role: 'Spoelkeuken / afwas', team: 'Keuken', type: 'Bijbaan', desc: 'De motor achter de keuken. Flexibele avond- en weekenddiensten, ideaal naast studie.' },
      ].map(v => ({ ...v, mail: mail(v.role) }));
      const perks = [
        { t: 'Een monument als werkplek', d: 'Werken onder een plafond van twaalf meter in een watergemaal uit 1912.' },
        { t: 'Live muziek tijdens je dienst', d: 'Jazz, soul en bossa nova als geluidsdecor — geen avond hetzelfde.' },
        { t: 'Goede voorwaarden', d: 'Marktconform salaris, reiskostenvergoeding en doorgroeimogelijkheden.' },
        { t: 'Personeelskorting & teamdiners', d: 'Korting op eten en drinken, plus gezamenlijke proeverijen.' },
        { t: 'Internationaal team', d: 'Een hecht, gemêleerd team waar ruimte is voor jouw inbreng.' },
        { t: 'Vaste vrije maandag', d: 'We zijn op maandag gesloten — en kennen een jaarlijkse zomerstop.' },
      ].map((p, i) => ({ ...p, num: '0' + (i + 1) }));
      return { vacancies, perks };
    }
  render() {
    const V = this.renderVals ? this.renderVals() : {};
    return (
      <div style={{ fontFamily: "'DM Sans',system-ui,sans-serif", color: "#2A2A2A", overflowX: "hidden" }}>
        <PSNav />
        {' '}
        <PSHero kicker="Werken bij Pompstation" title="Kom in ons" titleAccent="team" lead="Houd je van gastvrijheid, goed eten en live muziek? We zijn doorlopend op zoek naar koks, bediening en bartenders die van een avondje uit een belevenis maken." image="images/chef-kitchen.jpg" position="center 35%" heightVh="62" minHeight="440" />
        {' '}
        {' '}
        <section style={{ background: "#F5EFE6", padding: "clamp(46px, 8vw, 96px) 0", borderBottom: "1px solid rgba(42,42,42,0.1)" }}>
          <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 clamp(20px, 5vw, 40px)" }}>
            <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#5C1A1B", marginBottom: "24px" }}>
              Wie we zoeken
            </div>
            {' '}
            <p style={{ fontFamily: "'Instrument Serif',Georgia,serif", color: "#2A2A2A", fontSize: "clamp(30px, 6.5vw, 48px)", lineHeight: "1.1", margin: "0" }}>
              Pompstation draait op mensen die{' '}
              <em style={{ color: "#5C1A1B" }}>
                gastvrijheid
              </em>
              {' '}in de vingers hebben en het leuk vinden om in een{' '}
              <em style={{ color: "#5C1A1B" }}>
                bijzonder gebouw
              </em>
              {' '}te werken — met de zaal, het terras en de events die daarbij horen.
            </p>
          </div>
        </section>
        {' '}
        {' '}
        <section style={{ background: "#F5EFE6", padding: "clamp(46px, 8vw, 96px) 0" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 clamp(20px, 5vw, 40px)" }}>
            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "24px", marginBottom: "40px", flexWrap: "wrap" }}>
              <h2 style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", textTransform: "uppercase", color: "#2A2A2A", fontSize: "clamp(38px, 9vw, 72px)", lineHeight: "0.9", margin: "0" }}>
                Open
                <br />
                <span style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontStyle: "italic", textTransform: "none", fontWeight: "400", color: "#5C1A1B" }}>
                  vacatures.
                </span>
              </h2>
              <p style={{ maxWidth: "384px", color: "rgba(42,42,42,0.7)", lineHeight: "1.65" }}>
                Geen passende functie ertussen? Stuur een open sollicitatie — we houden je gegevens graag bij de hand.
              </p>
            </div>
            {' '}
            <div style={{ borderBottom: "1px solid rgba(42,42,42,0.15)" }}>
              {(V.vacancies || []).map((v, $index) => (
                <React.Fragment key={$index}>
                  <Hov as="a" href={v.mail} style={{ display: "grid", gridTemplateColumns: "repeat(12,1fr)", gap: "24px", alignItems: "baseline", padding: "28px 16px", borderTop: "1px solid rgba(42,42,42,0.15)", margin: "0 -16px", transition: "background 0.2s ease" }} styleHover={{ background: "rgba(239,231,217,0.6)" }}>
                    <div style={{ gridColumn: "span 7" }}>
                      <h3 style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontSize: "clamp(21px, 4.2vw, 30px)", color: "#2A2A2A", margin: "0" }}>
                        {v.role}
                      </h3>
                      {' '}
                      <p style={{ margin: "8px 0 0", color: "rgba(42,42,42,0.65)", lineHeight: "1.65", maxWidth: "576px" }}>
                        {v.desc}
                      </p>
                    </div>
                    <div style={{ gridColumn: "span 3", fontSize: "14px", color: "rgba(42,42,42,0.75)" }}>
                      <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#5C1A1B" }}>
                        {v.team}
                      </span>
                      {' '}
                      <div style={{ marginTop: "4px", fontFamily: "'JetBrains Mono',monospace", color: "rgba(42,42,42,0.6)" }}>
                        {v.type}
                      </div>
                    </div>
                    <div style={{ gridColumn: "span 2", textAlign: "right" }}>
                      <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#5C1A1B", fontWeight: "500", fontSize: "14px" }}>
                        Solliciteer
                        <span>
                          →
                        </span>
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
        <section style={{ background: "#EFE7D9", padding: "clamp(46px, 8vw, 96px) 0" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(20px, 5vw, 40px)" }}>
            <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#5C1A1B", marginBottom: "16px" }}>
              Wat wij bieden
            </div>
            {' '}
            <h2 style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", textTransform: "uppercase", color: "#2A2A2A", fontSize: "clamp(30px, 6.5vw, 60px)", lineHeight: "0.9", margin: "0 0 56px" }}>
              Meer dan een baantje
            </h2>
            {' '}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1px", background: "rgba(42,42,42,0.1)" }}>
              {(V.perks || []).map((p, $index) => (
                <React.Fragment key={$index}>
                  <div style={{ background: "#F5EFE6", padding: "32px" }}>
                    <div style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", textTransform: "uppercase", color: "#5C1A1B", fontSize: "clamp(21px, 4.2vw, 30px)", marginBottom: "12px" }}>
                      {p.num}
                    </div>
                    {' '}
                    <h3 style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontSize: "24px", color: "#2A2A2A", margin: "0" }}>
                      {p.t}
                    </h3>
                    {' '}
                    <p style={{ margin: "8px 0 0", fontSize: "14px", color: "rgba(42,42,42,0.65)", lineHeight: "1.6" }}>
                      {p.d}
                    </p>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>
        {' '}
        <PSSfeer bg="cream" lead="Dit is waar je zou werken — de hal, de bar, het podium en de tuin." />
        {' '}
        {' '}
        <section style={{ background: "#5C1A1B", color: "#F5EFE6", padding: "clamp(46px, 8vw, 112px) 0" }}>
          <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 clamp(20px, 5vw, 40px)", textAlign: "center" }}>
            <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(245,239,230,0.6)", marginBottom: "20px" }}>
              Solliciteren
            </div>
            {' '}
            <h2 style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", textTransform: "uppercase", color: "#F5EFE6", fontSize: "clamp(38px, 9vw, 72px)", lineHeight: "0.9", margin: "0" }}>
              Stuur ons je verhaal
            </h2>
            {' '}
            <p style={{ margin: "20px auto 0", color: "rgba(245,239,230,0.75)", fontSize: "18px", maxWidth: "576px" }}>
              Mail je cv en een korte motivatie — vermeld de functie waarvoor je solliciteert. We nemen snel contact op.
            </p>
            {' '}
            <div style={{ marginTop: "32px", display: "flex", flexWrap: "wrap", gap: "12px", justifyContent: "center" }}>
              <Hov as="a" href="mailto:info@pompstation.nu?subject=Sollicitatie%20Pompstation" style={{ background: "#F5EFE6", color: "#5C1A1B", padding: "16px 28px", fontSize: "16px", fontWeight: "500", letterSpacing: "0.02em", transition: "background 0.2s ease" }} styleHover={{ background: "#EFE7D9" }}>
                Mail je sollicitatie
              </Hov>
              <Hov as="a" href="tel:+31202279885" style={{ border: "1px solid rgba(245,239,230,0.4)", color: "#F5EFE6", padding: "16px 28px", fontSize: "16px", fontWeight: "500", letterSpacing: "0.02em", transition: "background 0.2s ease" }} styleHover={{ background: "rgba(245,239,230,0.1)" }}>
                Of bel +31 20 227 9885
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
if (__root) ReactDOM.createRoot(__root).render(<PompstationVacatures />);
