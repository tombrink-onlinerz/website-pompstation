function PompstationVerhaal(props) { return <PompstationVerhaalClass {...props} />; }
class PompstationVerhaalClass extends React.Component {
  renderVals() {
      return {
        timeline: [
          { year: '1912', title: 'Gebouwd als watergemaal', body: 'Opgetrokken in de karakteristieke stijl van de Amsterdamse School. In de machinekamer — nu het restaurant — stonden vier gigantische stoompompen die het water de stad uit pompten.' },
          { year: '1940', title: 'Geëlektrificeerd', body: 'De stoommachines maken plaats voor elektrische pompen. Bij ernstige storingen wekken dieselmotoren de benodigde stroom op.' },
          { year: 'jaren \u201980', title: 'Pompen naar de kelder', body: 'De pompen verhuizen naar de kelder, direct onder de vloer. Ze draaien nog altijd — op regenachtige dagen voel je een zachte trilling door het gebouw.' },
          { year: '1996', title: 'Buiten dienst', body: 'Waternet neemt een nieuw gemaal in gebruik, 150 meter verderop. Het monument wacht op een tweede leven.' },
          { year: 'nu', title: 'Restaurant & podium', body: 'Vandaag dineren, borrelen en dansen gasten onder een plafond van twaalf meter, met live jazz en de architectuur als hoofdrolspeler.' },
        ],
      };
    }
  render() {
    const V = this.renderVals ? this.renderVals() : {};
    return (
      <div style={{ fontFamily: "'DM Sans',system-ui,sans-serif", color: "#2A2A2A", overflowX: "hidden" }}>
        <PSNav current="verhaal" />
        {' '}
        <PSHero kicker="Anno 1912 · Amsterdamse School" title="Ons" titleAccent="verhaal" lead="Een monumentaal watergemaal dat de stad meer dan tachtig jaar droog hield — en nu een van de meest bijzondere eetzalen van Amsterdam is." image="images/historic-1912.jpg" position="center 40%" heightVh="62" minHeight="440" />
        {' '}
        {' '}
        <section style={{ background: "#F5EFE6", padding: "clamp(46px, 8vw, 128px) 0", borderBottom: "1px solid rgba(42,42,42,0.1)" }}>
          <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 clamp(20px, 5vw, 40px)" }}>
            <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#5C1A1B", marginBottom: "24px" }}>
              Het gebouw
            </div>
            {' '}
            <p style={{ fontFamily: "'Instrument Serif',Georgia,serif", color: "#2A2A2A", fontSize: "clamp(30px, 6.5vw, 56px)", lineHeight: "1.08", margin: "0" }}>
              Het robuuste, industriële pand is gebouwd in{' '}
              <em style={{ color: "#5C1A1B" }}>
                1912
              </em>
              , in de karakteristieke stijl van de Amsterdamse School. Van buiten onopvallend — van binnen{' '}
              <em style={{ color: "#5C1A1B" }}>
                adembenemend hoog.
              </em>
            </p>
          </div>
        </section>
        {' '}
        {' '}
        <section style={{ background: "#F5EFE6", padding: "clamp(46px, 8vw, 96px) 0" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(20px, 5vw, 40px)", display: "grid", gridTemplateColumns: "repeat(12,1fr)", gap: "clamp(34px, 6.5vw, 56px)", alignItems: "center" }}>
            <div style={{ gridColumn: "span 5" }}>
              <div style={{ width: "100%", aspectRatio: "3/4", overflow: "hidden", background: "#2A2A2A" }}>
                <img src="images/interior-vide.jpg" alt="De hoge machinezaal, nu het restaurant" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 35%" }} />
              </div>
              {' '}
              <div style={{ marginTop: "12px", fontFamily: "'JetBrains Mono',monospace", fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(42,42,42,0.55)" }}>
                De voormalige machinezaal · vandaag
              </div>
            </div>
            <div style={{ gridColumn: "span 7" }}>
              <h2 style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", textTransform: "uppercase", color: "#2A2A2A", fontSize: "clamp(30px, 6.5vw, 60px)", lineHeight: "0.9", margin: "0 0 24px" }}>
                Waar ooit de pompen stonden
              </h2>
              {' '}
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", color: "rgba(42,42,42,0.75)", fontSize: "18px", lineHeight: "1.65" }}>
                <p style={{ margin: "0" }}>
                  Vroeger stonden hier vier reusachtige waterpompen die via enorme buizen in de kelder en de watertoren het water de stad in pompten. Een technisch tijdschrift uit 1941 noemde de machinekamer “een sieraad voor de stad Amsterdam”.
                </p>
                <p style={{ margin: "0" }}>
                  In de jaren tachtig verhuisden de pompen naar de kelder, direct onder de vloer. Ze draaien er nog steeds. Vooral op regenachtige dagen gaan ze het water de stad uit pompen — soms te merken aan een zachte trilling die door het hele gebouw resoneert.
                </p>
              </div>
            </div>
          </div>
        </section>
        {' '}
        {' '}
        <section style={{ background: "#5C1A1B", color: "#F5EFE6", padding: "clamp(46px, 8vw, 128px) 0" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 clamp(20px, 5vw, 40px)" }}>
            <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#A88A5A", marginBottom: "16px" }}>
              Tijdlijn
            </div>
            {' '}
            <h2 style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", textTransform: "uppercase", color: "#F5EFE6", fontSize: "clamp(38px, 9vw, 72px)", lineHeight: "0.9", margin: "0 0 64px" }}>
              Ruim een eeuw
              <br />
              <span style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontStyle: "italic", textTransform: "none", fontWeight: "400", color: "rgba(245,239,230,0.8)" }}>
                in functie.
              </span>
            </h2>
            {' '}
            <div>
              {(V.timeline || []).map((ev, $index) => (
                <React.Fragment key={$index}>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(12,1fr)", gap: "32px", padding: "32px 0", borderTop: "1px solid rgba(245,239,230,0.15)", alignItems: "baseline" }}>
                    <div style={{ gridColumn: "span 3", fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", textTransform: "uppercase", color: "#A88A5A", fontSize: "clamp(30px, 6.5vw, 48px)" }}>
                      {ev.year}
                    </div>
                    <div style={{ gridColumn: "span 9" }}>
                      <h3 style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontSize: "clamp(21px, 4.2vw, 30px)", color: "#F5EFE6", margin: "0" }}>
                        {ev.title}
                      </h3>
                      {' '}
                      <p style={{ margin: "8px 0 0", color: "rgba(245,239,230,0.7)", lineHeight: "1.65", maxWidth: "672px" }}>
                        {ev.body}
                      </p>
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>
        {' '}
        {' '}
        <section style={{ background: "#F5EFE6", padding: "clamp(46px, 8vw, 96px) 0", borderBottom: "1px solid rgba(42,42,42,0.1)" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(20px, 5vw, 40px)", display: "grid", gridTemplateColumns: "repeat(12,1fr)", gap: "clamp(34px, 6.5vw, 56px)", alignItems: "center" }}>
            <div style={{ gridColumn: "span 7" }}>
              <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#5C1A1B", marginBottom: "16px" }}>
                De keuken
              </div>
              {' '}
              <h2 style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", textTransform: "uppercase", color: "#2A2A2A", fontSize: "clamp(30px, 6.5vw, 60px)", lineHeight: "0.9", margin: "0 0 24px" }}>
                Lokaal, seizoensgebonden, duurzaam
              </h2>
              {' '}
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", color: "rgba(42,42,42,0.75)", fontSize: "18px", lineHeight: "1.65" }}>
                <p style={{ margin: "0" }}>
                  Pompstation stond lang bekend om zijn vlees — de carpaccio en tournedos van Noord-Hollands Holstein-rund werden meermaals geprezen in het Parool. Die traditie blijft, met dry-aged steaks uit eigen kast.
                </p>
                <p style={{ margin: "0" }}>
                  Daarnaast ligt de nadruk steeds meer op vis en vegetarisch: verfijnde gerechten van lokale, biologische seizoensproducten. Een keuken die meebeweegt met wat de streek te bieden heeft.
                </p>
              </div>
              {' '}
              <a href="menu.html" style={{ marginTop: "32px", display: "inline-flex", alignItems: "center", gap: "8px", color: "#5C1A1B", fontWeight: "500" }}>
                Bekijk het menu
                <span>
                  →
                </span>
              </a>
            </div>
            <div style={{ gridColumn: "span 5" }}>
              <div style={{ width: "100%", aspectRatio: "4/5", overflow: "hidden", background: "#2A2A2A" }}>
                <img src="images/food-steak.jpg" alt="Gerechten uit de keuken van Pompstation" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%" }} />
              </div>
            </div>
          </div>
        </section>
        {' '}
        {' '}
        <section style={{ background: "#EFE7D9", padding: "clamp(46px, 8vw, 112px) 0" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(20px, 5vw, 40px)" }}>
            <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#5C1A1B", marginBottom: "56px", textAlign: "center" }}>
              Wat gasten zeggen
            </div>
            {' '}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "24px" }}>
              <blockquote style={{ background: "#F5EFE6", border: "1px solid rgba(42,42,42,0.1)", padding: "32px", display: "flex", flexDirection: "column", margin: "0" }}>
                <div style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontStyle: "italic", color: "#5C1A1B", fontSize: "clamp(25px, 5.2vw, 36px)", lineHeight: "1", marginBottom: "12px" }}>
                  “
                </div>
                <p style={{ color: "rgba(42,42,42,0.85)", lineHeight: "1.65", flex: "1", margin: "0" }}>
                  Geweldige plek voor fijnproevers. Verschillende formules met heerlijke vlees-, vis- en vegetarische opties.
                </p>
                <footer style={{ marginTop: "20px", fontSize: "14px", fontFamily: "'JetBrains Mono',monospace", color: "rgba(42,42,42,0.55)" }}>
                  — Guest · Google
                </footer>
              </blockquote>
              <blockquote style={{ background: "#F5EFE6", border: "1px solid rgba(42,42,42,0.1)", padding: "32px", display: "flex", flexDirection: "column", margin: "0" }}>
                <div style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontStyle: "italic", color: "#5C1A1B", fontSize: "clamp(25px, 5.2vw, 36px)", lineHeight: "1", marginBottom: "12px" }}>
                  “
                </div>
                <p style={{ color: "rgba(42,42,42,0.85)", lineHeight: "1.65", flex: "1", margin: "0" }}>
                  Fantastisch eten en buitengewone service — een van mijn favoriete plekken in Amsterdam. De live jamsessies zijn de kers op de taart.
                </p>
                <footer style={{ marginTop: "20px", fontSize: "14px", fontFamily: "'JetBrains Mono',monospace", color: "rgba(42,42,42,0.55)" }}>
                  — Guest · Google
                </footer>
              </blockquote>
              <blockquote style={{ background: "#F5EFE6", border: "1px solid rgba(42,42,42,0.1)", padding: "32px", display: "flex", flexDirection: "column", margin: "0" }}>
                <div style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontStyle: "italic", color: "#5C1A1B", fontSize: "clamp(25px, 5.2vw, 36px)", lineHeight: "1", marginBottom: "12px" }}>
                  “
                </div>
                <p style={{ color: "rgba(42,42,42,0.85)", lineHeight: "1.65", flex: "1", margin: "0" }}>
                  Nog nooit zo'n heerlijke steak gegeten. Smolt op de tong. Vriendelijke bediening en goede service.
                </p>
                <footer style={{ marginTop: "20px", fontSize: "14px", fontFamily: "'JetBrains Mono',monospace", color: "rgba(42,42,42,0.55)" }}>
                  — Guest · Eet.nu
                </footer>
              </blockquote>
            </div>
          </div>
        </section>
        {' '}
        <PSSfeer bg="cream-warm" lead="Van de hoge machinezaal tot kaarslicht op tafel — een indruk van het monument zoals het vandaag leeft." />
        {' '}
        {' '}
        <section style={{ background: "#F5EFE6", padding: "clamp(46px, 8vw, 96px) 0" }}>
          <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 clamp(20px, 5vw, 40px)", textAlign: "center" }}>
            <h2 style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", textTransform: "uppercase", color: "#2A2A2A", fontSize: "clamp(38px, 9vw, 72px)", lineHeight: "0.9", margin: "0" }}>
              Kom het zelf ervaren
            </h2>
            {' '}
            <p style={{ margin: "20px auto 0", color: "rgba(42,42,42,0.7)", fontSize: "18px", maxWidth: "576px" }}>
              Reserveer een tafel voor diner met live jazz, of ontdek wat er mogelijk is voor uw groep of event.
            </p>
            {' '}
            <div style={{ marginTop: "32px", display: "flex", flexWrap: "wrap", gap: "12px", justifyContent: "center" }}>
              <Hov as="a" href="https://www.pompstation.nu/" target="_blank" rel="noopener" style={{ background: "#5C1A1B", color: "#F5EFE6", padding: "16px 28px", fontSize: "16px", fontWeight: "500", letterSpacing: "0.02em", transition: "background 0.2s ease" }} styleHover={{ background: "#3F0F10" }}>
                Reserveer een tafel
              </Hov>
              <Hov as="a" href="groepen.html" style={{ border: "1px solid #2A2A2A", color: "#2A2A2A", padding: "16px 28px", fontSize: "16px", fontWeight: "500", letterSpacing: "0.02em", transition: "all 0.2s ease" }} styleHover={{ background: "#5C1A1B", color: "#F5EFE6", borderColor: "#5C1A1B" }}>
                Afhuren & groepen
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
if (__root) ReactDOM.createRoot(__root).render(<PompstationVerhaal />);
