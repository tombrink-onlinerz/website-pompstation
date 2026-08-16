/* shared.jsx — Pompstation gedeelde componenten (gegenereerd uit de Design Components) */

/* Hover/active/focus helper — vervangt de style-hover attributen */
class Hov extends React.Component {
  constructor(p) { super(p); this.state = { h: false, a: false, f: false }; }
  render() {
    const { as, style, styleHover, styleActive, styleFocus, children, ...rest } = this.props;
    const Tag = as || 'div';
    const s = Object.assign({}, style,
      this.state.h && styleHover, this.state.a && styleActive, this.state.f && styleFocus);
    return React.createElement(Tag, Object.assign({}, rest, {
      style: s,
      onMouseEnter: (e) => { this.setState({ h: true }); rest.onMouseEnter && rest.onMouseEnter(e); },
      onMouseLeave: (e) => { this.setState({ h: false, a: false }); rest.onMouseLeave && rest.onMouseLeave(e); },
      onMouseDown: (e) => { this.setState({ a: true }); rest.onMouseDown && rest.onMouseDown(e); },
      onMouseUp: (e) => { this.setState({ a: false }); rest.onMouseUp && rest.onMouseUp(e); },
      onFocus: (e) => { this.setState({ f: true }); rest.onFocus && rest.onFocus(e); },
      onBlur: (e) => { this.setState({ f: false }); rest.onBlur && rest.onBlur(e); },
    }), children);
  }
}

function PSBrochure(props) { return <PSBrochureClass {...props} />; }
class PSBrochureClass extends React.Component {
  state = { done: false };
    renderVals() {
      const wedding = this.props.variant === 'wedding';
      return {
        done: this.state.done,
        open: !this.state.done,
        submit: (e) => { e.preventDefault(); this.setState({ done: true }); },
        sectionStyle: { background: wedding ? '#5C1A1B' : '#2A2A2A', color: '#F5EFE6', padding: 'clamp(46px, 8vw, 112px) 0' },
        isCorporate: !wedding,
        heading: wedding ? 'Wedding' : 'Brochure',
        headingSub: wedding ? 'Brochure 2026' : 'groepen & afhuren',
        blurb: wedding
          ? 'Ontvang onze complete brochure met alle mogelijkheden, menuopties, tarieven en de ervaringen van andere bruidsparen.'
          : 'Ontvang onze complete brochure met capaciteiten, technische specificaties, catering-opties en tarieven.',
        namePlaceholder: wedding ? 'Emma & Lars' : 'Jan de Vries',
        peopleLabel: wedding ? 'Aantal gasten' : 'Groepsgrootte',
        peoplePlaceholder: wedding ? 'bv. 120' : 'bv. 80',
      };
    }
  render() {
    const V = this.renderVals ? this.renderVals() : {};
    return (
      <section id="brochure" style={V.sectionStyle}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(20px, 5vw, 40px)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(12,1fr)", gap: "clamp(20px, 5vw, 48px)", alignItems: "center" }}>
            <div style={{ gridColumn: "span 4" }}>
              <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#A88A5A", marginBottom: "16px" }}>
                Brochure
              </div>
              {' '}
              <h2 style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", textTransform: "uppercase", color: "#F5EFE6", fontSize: "clamp(30px, 6.5vw, 48px)", lineHeight: "1.1", margin: "0" }}>
                {V.heading}
                <br />
                <em style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontWeight: "400", textTransform: "none" }}>
                  {V.headingSub}
                </em>
              </h2>
              {' '}
              <p style={{ margin: "20px 0 0", color: "rgba(245,239,230,0.65)", fontSize: "16px", lineHeight: "1.65" }}>
                {V.blurb}
              </p>
              {' '}
              <p style={{ margin: "12px 0 0", color: "rgba(245,239,230,0.45)", fontSize: "14px", fontFamily: "'JetBrains Mono',monospace" }}>
                De brochure wordt naar uw e-mailadres gestuurd.
              </p>
            </div>
            <div style={{ gridColumn: "6 / span 7" }}>
              {(V.done) ? (<React.Fragment>
                <div style={{ border: "1px solid rgba(245,239,230,0.2)", padding: "clamp(20px, 5vw, 48px)" }}>
                  <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "12px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#A88A5A", marginBottom: "16px" }}>
                    Verstuurd
                  </div>
                  {' '}
                  <h3 style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", textTransform: "uppercase", color: "#F5EFE6", fontSize: "clamp(25px, 5.2vw, 40px)", margin: "0" }}>
                    Check uw inbox
                  </h3>
                  {' '}
                  <p style={{ margin: "16px 0 0", color: "rgba(245,239,230,0.65)", lineHeight: "1.65" }}>
                    De brochure is onderweg. We nemen binnenkort contact op.
                  </p>
                </div>
              </React.Fragment>) : null}
              {' '}
              {(V.open) ? (<React.Fragment>
                <form onSubmit={V.submit}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                    <div>
                      <label style={{ display: "block", fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(245,239,230,0.55)", marginBottom: "8px" }}>
                        Naam *
                      </label>
                      {' '}
                      <input type="text" placeholder={V.namePlaceholder} style={{ width: "100%", background: "rgba(245,239,230,0.1)", border: "1px solid rgba(245,239,230,0.2)", color: "#F5EFE6", padding: "14px 16px", fontSize: "14px", outline: "none", fontFamily: "'DM Sans',sans-serif" }} />
                    </div>
                    {(V.isCorporate) ? (<div>
                      <label style={{ display: "block", fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(245,239,230,0.55)", marginBottom: "8px" }}>Particulier of zakelijk *</label>
                      <select style={{ width: "100%", background: "rgba(245,239,230,0.1)", border: "1px solid rgba(245,239,230,0.2)", color: "#F5EFE6", padding: "14px 16px", fontSize: "14px", outline: "none", fontFamily: "'DM Sans',sans-serif", cursor: "pointer" }}>
                        <option>Particulier</option>
                        <option>Zakelijk</option>
                      </select>
                    </div>
                    ) : null}
                    {(V.isCorporate) ? (<div>
                      <label style={{ display: "block", fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(245,239,230,0.55)", marginBottom: "8px" }}>Bedrijfsnaam <span style={{ textTransform: "none", letterSpacing: "0.05em", color: "rgba(245,239,230,0.4)" }}>(optioneel)</span></label>
                      <input type="text" placeholder="Uw bedrijf" style={{ width: "100%", background: "rgba(245,239,230,0.1)", border: "1px solid rgba(245,239,230,0.2)", color: "#F5EFE6", padding: "14px 16px", fontSize: "14px", outline: "none", fontFamily: "'DM Sans',sans-serif" }} />
                    </div>) : null}
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
                        {V.peopleLabel} *
                      </label>
                      {' '}
                      <input type="number" placeholder={V.peoplePlaceholder} style={{ width: "100%", background: "rgba(245,239,230,0.1)", border: "1px solid rgba(245,239,230,0.2)", color: "#F5EFE6", padding: "14px 16px", fontSize: "14px", outline: "none", fontFamily: "'DM Sans',sans-serif" }} />
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
    );
  }
}

function PSEventDetail(props) { return <PSEventDetailClass {...props} />; }
class PSEventDetailClass extends React.Component {
  renderVals() {
      const c = this.props.config || {};
      const gangen = (c.gangen || []).map(g => {
        const f = !!g.featured;
        return {
          gangen: g.gangen, prijs: g.prijs, label: g.label, featured: f,
          cardStyle: { padding: '20px', border: f ? '1px solid #5C1A1B' : '1px solid rgba(42,42,42,0.15)', background: f ? '#5C1A1B' : '#F5EFE6', color: f ? '#F5EFE6' : '#2A2A2A' },
          titleStyle: { fontFamily: "'Instrument Serif',Georgia,serif", fontSize: '24px', color: f ? '#F5EFE6' : '#2A2A2A' },
          priceStyle: { marginTop: '8px', fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: 800, fontSize: 'clamp(25px, 5.2vw, 36px)', letterSpacing: '-0.02em', color: f ? '#F5EFE6' : '#2A2A2A' },
          labelStyle: { marginTop: '8px', fontSize: '14px', lineHeight: 1.35, color: f ? 'rgba(245,239,230,0.7)' : 'rgba(42,42,42,0.6)' },
        };
      });
      const photos = (c.photos || []).map(p => ({
        src: p.src,
        wrapStyle: { overflow: 'hidden', height: (p.h || 280) + 'px', gridColumn: p.full ? 'span 2' : 'auto' },
        imgStyle: { width: '100%', height: '100%', objectFit: 'cover', objectPosition: p.pos || 'center' },
      }));
      const solidBtn = { display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px', background: '#F5EFE6', color: '#5C1A1B', padding: '16px 28px', fontWeight: 500, fontSize: '14px', letterSpacing: '0.02em', transition: 'background 0.2s ease' };
      const outlineBtn = { display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px', border: '1px solid rgba(245,239,230,0.3)', color: '#F5EFE6', padding: '16px 28px', fontWeight: 500, fontSize: '14px', letterSpacing: '0.02em', transition: 'border-color 0.2s ease' };
      const ctaButtons = (c.ctaButtons || [
        { label: 'Offerte aanvragen', href: '#brochure', variant: 'solid' },
        { label: '+31 20 227 9885', href: 'tel:+31202279885', variant: 'outline' },
      ]).map(b => ({ label: b.label, href: b.href, style: b.variant === 'outline' ? outlineBtn : solidBtn }));
      return {
        details: c.details || [],
        paras: c.paras || [],
        badge: c.badge || '',
        ctaLink: c.ctaLink || '#brochure',
        ctaLabel: c.ctaLabel || 'Offerte aanvragen',
        ctaTitle: c.ctaTitle || '',
        ctaSub: c.ctaSub || 'Vraag een offerte aan — we reageren binnen 1 werkdag.',
        hasGangen: gangen.length > 0,
        usps: c.usps || [],
        gangen,
        photos,
        ctaButtons,
      };
    }
  render() {
    const V = this.renderVals ? this.renderVals() : {};
    return (
      <div style={{ fontFamily: "'DM Sans',sans-serif" }}>
        <section style={{ background: "#F5EFE6", padding: "clamp(46px, 8vw, 112px) 0", borderBottom: "1px solid rgba(42,42,42,0.1)" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(20px, 5vw, 40px)", display: "grid", gridTemplateColumns: "repeat(12,1fr)", gap: "clamp(20px, 5vw, 48px)" }}>
            <div style={{ gridColumn: "span 4" }}>
              {(V.badge) ? (<React.Fragment>
                <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "24px" }}>
                  <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#5C1A1B", animation: "ps-pulse 2s ease-in-out infinite" }} />
                  <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#5C1A1B" }}>
                    {V.badge}
                  </span>
                </div>
              </React.Fragment>) : null}
              {' '}
              <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#5C1A1B", marginBottom: "16px" }}>
                Details
              </div>
              {' '}
              <ul style={{ listStyle: "none", margin: "0", padding: "0", display: "flex", flexDirection: "column", gap: "20px" }}>
                {(V.details || []).map((d, $index) => (
                  <React.Fragment key={$index}>
                    <li style={{ display: "flex", flexDirection: "column", gap: "2px", borderBottom: "1px solid rgba(42,42,42,0.1)", paddingBottom: "16px" }}>
                      <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(42,42,42,0.5)" }}>
                        {d.k}
                      </span>
                      <span style={{ color: "#2A2A2A", fontSize: "16px" }}>
                        {d.v}
                      </span>
                    </li>
                  </React.Fragment>
                ))}
              </ul>
              {' '}
              <Hov as="a" href={V.ctaLink} style={{ marginTop: "32px", display: "inline-flex", alignItems: "center", gap: "12px", background: "#5C1A1B", color: "#F5EFE6", padding: "16px 28px", fontSize: "14px", fontWeight: "500", letterSpacing: "0.02em", transition: "background 0.2s ease" }} styleHover={{ background: "#3F0F10" }}>
                {V.ctaLabel} →
              </Hov>
            </div>
            <div style={{ gridColumn: "span 8" }}>
              {(V.hasGangen) ? (<React.Fragment>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "16px", marginBottom: "40px" }}>
                  {(V.gangen || []).map((g, $index) => (
                    <React.Fragment key={$index}>
                      <div style={g.cardStyle}>
                        {(g.featured) ? (<React.Fragment>
                          <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(245,239,230,0.6)", marginBottom: "12px" }}>
                            Meest gekozen
                          </div>
                        </React.Fragment>) : null}
                        {' '}
                        <div style={g.titleStyle}>
                          {g.gangen} gangen
                        </div>
                        {' '}
                        <div style={g.priceStyle}>
                          {g.prijs}{' '}
                          <span style={{ fontSize: "16px", fontWeight: "400", opacity: "0.7", fontFamily: "'DM Sans',sans-serif" }}>
                            p.p.
                          </span>
                        </div>
                        {' '}
                        <div style={g.labelStyle}>
                          {g.label}
                        </div>
                      </div>
                    </React.Fragment>
                  ))}
                </div>
              </React.Fragment>) : null}
              {' '}
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {(V.paras || []).map((p, $index) => (
                  <React.Fragment key={$index}>
                    <p style={{ color: "rgba(42,42,42,0.8)", fontSize: "18px", lineHeight: "1.65", margin: "0" }}>
                      {p}
                    </p>
                  </React.Fragment>
                ))}
              </div>
              {' '}
              <div style={{ marginTop: "40px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                {(V.photos || []).map((ph, $index) => (
                  <React.Fragment key={$index}>
                    <div style={ph.wrapStyle}>
                      <img src={ph.src} alt="Pompstation" style={ph.imgStyle} />
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </section>
        {' '}
        {(V.usps && V.usps.length) ? (
        <section style={{ background: "#F5EFE6", padding: "clamp(46px, 8vw, 80px) 0 clamp(46px, 8vw, 96px)" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(20px, 5vw, 40px)" }}>
            <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#5C1A1B", marginBottom: "32px" }}>Mogelijkheden</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "clamp(20px, 5vw, 40px)" }}>
              {V.usps.map((u, i) => (
                <div key={i} style={{ borderTop: "2px solid #5C1A1B", paddingTop: "20px" }}>
                  <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.18em", color: "#5C1A1B", marginBottom: "12px" }}>{u.n}</div>
                  <h2 style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: 800, textTransform: "uppercase", fontSize: "clamp(21px, 4.2vw, 30px)", lineHeight: "0.95", margin: "0 0 12px", color: "#2A2A2A" }}>{u.t}</h2>
                  <p style={{ margin: "0", color: "rgba(42,42,42,0.72)", lineHeight: "1.7", fontSize: "15px", textWrap: "pretty" }}>{u.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        ) : null}
        <section style={{ background: "#5C1A1B", color: "#F5EFE6", padding: "clamp(46px, 8vw, 80px) 0" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(20px, 5vw, 40px)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "32px", flexWrap: "wrap" }}>
            <div>
              <h2 style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", textTransform: "uppercase", color: "#F5EFE6", fontSize: "clamp(30px, 6.5vw, 60px)", lineHeight: "0.9", margin: "0" }}>
                {V.ctaTitle}
              </h2>
              {' '}
              <p style={{ margin: "12px 0 0", color: "rgba(245,239,230,0.75)", fontSize: "18px" }}>
                {V.ctaSub}
              </p>
            </div>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              {(V.ctaButtons || []).map((b, $index) => (
                <React.Fragment key={$index}>
                  <a href={b.href} style={b.style}>
                    {b.label} →
                  </a>
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

function PSFooter(props) { return <PSFooterClass {...props} />; }
class PSFooterClass extends React.Component {
  render() {
    const V = this.renderVals ? this.renderVals() : {};
    return (
      <footer style={{ background: "#2A2A2A", color: "#F5EFE6", fontFamily: "'DM Sans',sans-serif" }}>
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
          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "28px clamp(20px, 5vw, 40px)", display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "10px 24px", fontSize: "12px", fontFamily: "'JetBrains Mono',monospace" }}>
            <span style={{ fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(245,239,230,0.6)" }}>Afhuren in Amsterdam</span>
            <Hov as="a" href="bedrijfsfeest-amsterdam.html" style={{ color: "rgba(245,239,230,0.55)" }} styleHover={{ color: "#F5EFE6" }}>Bedrijfsfeest Amsterdam</Hov>
            <Hov as="a" href="bedrijfsborrel-amsterdam.html" style={{ color: "rgba(245,239,230,0.55)" }} styleHover={{ color: "#F5EFE6" }}>Bedrijfsborrel Amsterdam</Hov>
            <Hov as="a" href="bedrijfsdiner-amsterdam.html" style={{ color: "rgba(245,239,230,0.55)" }} styleHover={{ color: "#F5EFE6" }}>Bedrijfsdiner Amsterdam</Hov>
            <Hov as="a" href="groepsdiner-amsterdam.html" style={{ color: "rgba(245,239,230,0.55)" }} styleHover={{ color: "#F5EFE6" }}>Groepsdiner Amsterdam</Hov>
            <Hov as="a" href="groepslunch-amsterdam.html" style={{ color: "rgba(245,239,230,0.55)" }} styleHover={{ color: "#F5EFE6" }}>Groepslunch Amsterdam</Hov>
            <Hov as="a" href="vergaderlocatie-amsterdam.html" style={{ color: "rgba(245,239,230,0.55)" }} styleHover={{ color: "#F5EFE6" }}>Vergaderlocatie Amsterdam</Hov>
            <Hov as="a" href="trouwlocatie-amsterdam.html" style={{ color: "rgba(245,239,230,0.55)" }} styleHover={{ color: "#F5EFE6" }}>Trouwlocatie Amsterdam</Hov>
            <Hov as="a" href="restaurant-afhuren-amsterdam.html" style={{ color: "rgba(245,239,230,0.55)" }} styleHover={{ color: "#F5EFE6" }}>Restaurant afhuren Amsterdam</Hov>
          </div>
        </div>
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
              <Hov as="a" href="vacatures.html" style={{ color: "rgba(245,239,230,0.55)" }} styleHover={{ color: "#F5EFE6" }}>
                Vacatures
              </Hov>
              <Hov as="a" href="algemene-voorwaarden.html" style={{ color: "rgba(245,239,230,0.55)" }} styleHover={{ color: "#F5EFE6" }}>
                Algemene voorwaarden
              </Hov>
              <Hov as="a" href="privacy.html" style={{ color: "rgba(245,239,230,0.55)" }} styleHover={{ color: "#F5EFE6" }}>
                Privacy
              </Hov>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

function PSHero(props) { return <PSHeroClass {...props} />; }
class PSHeroClass extends React.Component {
  renderVals() {
      const p = this.props;
      const h = p.heightVh || 62;
      const minH = p.minHeight || 440;
      return {
        image: p.image || 'images/interior-vide.jpg',
        title: p.title || '',
        titleAccent: p.titleAccent || '',
        kicker: p.kicker || '',
        lead: p.lead || '',
        cta1Label: p.cta1Label || '',
        cta1Href: p.cta1Href || '#',
        cta2Label: p.cta2Label || '',
        cta2Href: p.cta2Href || '#',
        sectionStyle: { position: 'relative', height: h + 'vh', minHeight: minH + 'px', width: '100%', overflow: 'hidden' },
        imgStyle: { position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: p.position || 'center' },
        accentStyle: { fontFamily: "'Instrument Serif',Georgia,serif", fontStyle: 'italic', textTransform: 'none', fontWeight: 400, letterSpacing: 'normal', color: 'rgba(245,239,230,0.95)' },
        ctasWrapStyle: { marginTop: (p.cta1Label ? 28 : 0) + 'px', display: 'flex', flexWrap: 'wrap', gap: '12px' },
      };
    }
  render() {
    const V = this.renderVals ? this.renderVals() : {};
    return (
      <section style={V.sectionStyle}>
        <div style={{ position: "absolute", inset: "0", background: "#2A2A2A" }}>
          <img src={V.image} alt={V.title} style={V.imgStyle} />
          {' '}
          <div style={{ position: "absolute", inset: "0", background: "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.35) 100%), linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 35%, rgba(0,0,0,0.55) 100%)" }} />
        </div>
        {' '}
        <div style={{ position: "absolute", inset: "0", zIndex: "10", display: "flex", alignItems: "flex-end" }}>
          <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 clamp(20px, 5vw, 40px) clamp(34px, 6.5vw, 64px)", width: "100%" }}>
            {(V.kicker) ? (<React.Fragment>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", color: "rgba(245,239,230,0.75)", fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "20px" }}>
                <span style={{ width: "32px", height: "1px", background: "rgba(245,239,230,0.4)" }} />
                <span>
                  {V.kicker}
                </span>
              </div>
            </React.Fragment>) : null}
            {' '}
            <h1 style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", letterSpacing: "-0.005em", lineHeight: "0.88", textTransform: "uppercase", color: "#F5EFE6", fontSize: "clamp(48px, 13vw, 136px)", margin: "0" }}>
              {V.title}{' '}
              <span style={V.accentStyle}>
                {V.titleAccent}
              </span>
            </h1>
            {' '}
            {(V.lead) ? (<React.Fragment>
              <p style={{ margin: "20px 0 0", maxWidth: "576px", color: "rgba(245,239,230,0.85)", fontSize: "18px", lineHeight: "1.65" }}>
                {V.lead}
              </p>
            </React.Fragment>) : null}
            {' '}
            <div style={V.ctasWrapStyle}>
              {(V.cta1Label) ? (<React.Fragment>
                <Hov as="a" href={V.cta1Href} style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#F5EFE6", color: "#5C1A1B", padding: "14px 24px", fontSize: "14px", fontWeight: "500", letterSpacing: "0.02em", transition: "background 0.2s ease" }} styleHover={{ background: "rgba(245,239,230,0.9)" }}>
                  {V.cta1Label}
                </Hov>
              </React.Fragment>) : null}
              {' '}
              {(V.cta2Label) ? (<React.Fragment>
                <Hov as="a" href={V.cta2Href} style={{ display: "inline-flex", alignItems: "center", gap: "8px", border: "1px solid rgba(245,239,230,0.4)", color: "#F5EFE6", padding: "14px 24px", fontSize: "14px", fontWeight: "500", letterSpacing: "0.02em", transition: "border-color 0.2s ease" }} styleHover={{ borderColor: "rgba(245,239,230,0.7)" }}>
                  {V.cta2Label}
                </Hov>
              </React.Fragment>) : null}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

function PSLegal(props) { return <PSLegalClass {...props} />; }
class PSLegalClass extends React.Component {
  renderVals() {
      const c = this.props.config || {};
      const sections = (c.sections || []).map((s, i) => ({ num: String(i + 1).padStart(2, '0'), h: s.h, body: s.body }));
      return {
        kicker: c.kicker || '',
        title: c.title || '',
        intro: c.intro || '',
        disclaimer: c.disclaimer || '',
        sections,
      };
    }
  render() {
    const V = this.renderVals ? this.renderVals() : {};
    return (
      <div style={{ fontFamily: "'DM Sans',sans-serif" }}>
        <header style={{ background: "#F5EFE6", padding: "clamp(46px, 8vw, 144px) 0 clamp(34px, 6.5vw, 64px)", borderBottom: "1px solid rgba(42,42,42,0.1)" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 clamp(20px, 5vw, 40px)" }}>
            <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#5C1A1B", marginBottom: "16px" }}>
              {V.kicker}
            </div>
            {' '}
            <h1 style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", textTransform: "uppercase", color: "#2A2A2A", fontSize: "clamp(38px, 9vw, 72px)", lineHeight: "0.9", margin: "0" }}>
              {V.title}
            </h1>
            {' '}
            <p style={{ margin: "16px 0 0", fontFamily: "'JetBrains Mono',monospace", fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(42,42,42,0.5)" }}>
              Laatst bijgewerkt · juni 2026
            </p>
          </div>
        </header>
        {' '}
        <main style={{ background: "#F5EFE6", padding: "clamp(46px, 8vw, 80px) 0" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 clamp(20px, 5vw, 40px)" }}>
            <p style={{ color: "rgba(42,42,42,0.7)", lineHeight: "1.65", fontSize: "18px", margin: "0 0 64px" }}>
              {V.intro}
            </p>
            {' '}
            {(V.sections || []).map((s, $index) => (
              <React.Fragment key={$index}>
                <section style={{ display: "grid", gridTemplateColumns: "repeat(12,1fr)", gap: "24px", padding: "28px 0", borderTop: "1px solid rgba(42,42,42,0.12)" }}>
                  <div style={{ gridColumn: "span 2", fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", textTransform: "uppercase", color: "#5C1A1B", fontSize: "clamp(21px, 4.2vw, 30px)" }}>
                    {s.num}
                  </div>
                  <div style={{ gridColumn: "span 10" }}>
                    <h2 style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontSize: "clamp(21px, 4.2vw, 30px)", color: "#2A2A2A", margin: "0 0 12px" }}>
                      {s.h}
                    </h2>
                    {' '}
                    <p style={{ color: "rgba(42,42,42,0.75)", lineHeight: "1.65", margin: "0", maxWidth: "672px" }}>
                      {s.body}
                    </p>
                  </div>
                </section>
              </React.Fragment>
            ))}
            {' '}
            <p style={{ margin: "48px 0 0", padding: "20px", background: "#EFE7D9", border: "1px solid rgba(42,42,42,0.1)", fontSize: "14px", color: "rgba(42,42,42,0.6)", fontFamily: "'JetBrains Mono',monospace", lineHeight: "1.6" }}>
              {V.disclaimer}
            </p>
          </div>
        </main>
      </div>
    );
  }
}

function PSNav(props) { return <PSNavClass {...props} />; }
class PSNavClass extends React.Component {
  state = { scrolled: false, open: null, mobile: false, drawer: false };
    componentDidMount() {
      this._onScroll = () => {
        const s = window.scrollY > 40;
        if (s !== this.state.scrolled) this.setState({ scrolled: s });
      };
      window.addEventListener('scroll', this._onScroll, { passive: true });
      this._mq = window.matchMedia('(max-width: 1100px)');
      this._onMq = () => this.setState({ mobile: this._mq.matches, drawer: false });
      this._onMq();
      this._mq.addEventListener('change', this._onMq);
    }
    componentWillUnmount() {
      if (this._onScroll) window.removeEventListener('scroll', this._onScroll);
      if (this._mq) this._mq.removeEventListener('change', this._onMq);
    }
    renderVals() {
      const forceSolid = this.props.solid === true || this.props.solid === 'true';
      const solid = this.state.scrolled || forceSolid;
      const current = this.props.current || '';
      const lang = window._L || 'nl';
      const linkBase = (key) => ({
        display: 'inline-flex', alignItems: 'center', gap: '4px',
        transition: 'opacity 0.2s ease',
        color: solid ? '#2A2A2A' : '#F5EFE6',
        borderBottom: current === key ? '2px solid #5C1A1B' : '2px solid transparent',
        paddingBottom: '2px',
      });
      const panel = (key) => ({
        position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)',
        paddingTop: '12px', zIndex: 50,
        opacity: this.state.open === key ? 1 : 0,
        pointerEvents: this.state.open === key ? 'auto' : 'none',
        transition: 'opacity 0.2s ease',
      });
      return {
        headerStyle: {
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 40,
          transition: 'all 0.3s ease',
          background: solid ? 'rgba(245,239,230,0.95)' : 'transparent',
          backdropFilter: solid ? 'blur(8px)' : 'none',
          borderBottom: solid ? '1px solid rgba(42,42,42,0.1)' : '1px solid transparent',
        },
        logoStyle: { height: '20px', width: 'auto', transition: 'all 0.3s ease', filter: (solid || this.state.drawer) ? 'brightness(0)' : 'none' },
        desktopNavStyle: { display: this.state.mobile ? 'none' : 'flex', alignItems: 'center', gap: '22px', fontSize: '14px', fontFamily: "'DM Sans',sans-serif", flexShrink: 0 },
        reserveBtnStyle: { display: this.state.mobile ? 'none' : 'inline-block', background: '#5C1A1B', color: '#F5EFE6', padding: '10px 20px', fontSize: '14px', fontWeight: 500, letterSpacing: '0.02em', whiteSpace: 'nowrap', transition: 'background 0.2s ease' },
        burgerStyle: { display: this.state.mobile ? 'flex' : 'none', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '5px', width: '44px', height: '44px', background: 'none', border: 'none', padding: 0, cursor: 'pointer' },
        burgerBar1: { display: 'block', width: '22px', height: '2px', background: (solid || this.state.drawer) ? '#2A2A2A' : '#F5EFE6', transition: 'all 0.25s ease', transform: this.state.drawer ? 'translateY(7px) rotate(45deg)' : 'none' },
        burgerBar2: { display: 'block', width: '22px', height: '2px', background: (solid || this.state.drawer) ? '#2A2A2A' : '#F5EFE6', transition: 'all 0.25s ease', opacity: this.state.drawer ? 0 : 1 },
        burgerBar3: { display: 'block', width: '22px', height: '2px', background: (solid || this.state.drawer) ? '#2A2A2A' : '#F5EFE6', transition: 'all 0.25s ease', transform: this.state.drawer ? 'translateY(-7px) rotate(-45deg)' : 'none' },
        toggleDrawer: () => this.setState(st => ({ drawer: !st.drawer })),
        drawerStyle: { display: this.state.mobile ? 'block' : 'none', maxHeight: this.state.drawer ? 'calc(100vh - 80px)' : '0px', overflowY: this.state.drawer ? 'auto' : 'hidden', background: 'rgba(245,239,230,0.99)', borderTop: this.state.drawer ? '1px solid rgba(42,42,42,0.1)' : 'none', transition: 'max-height 0.3s ease' },
        drawerLink: { display: 'block', padding: '14px 0', fontSize: '17px', color: '#2A2A2A', borderBottom: '1px solid rgba(42,42,42,0.08)' },
        drawerSubLink: { display: 'block', padding: '12px 0 12px 14px', fontSize: '15px', color: 'rgba(42,42,42,0.8)', borderBottom: '1px solid rgba(42,42,42,0.06)' },
        drawerGroupLabel: { padding: '20px 0 8px', fontFamily: "'JetBrains Mono',monospace", fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#5C1A1B' },
        linkMenu: linkBase('menu'),
        linkRuimtes: linkBase('ruimtes'),
        linkAfhuren: linkBase('groepen'),
        linkAgenda: linkBase('agenda'),
        linkVerhaal: linkBase('verhaal'),
        linkFaq: linkBase('faq'),
        linkContact: linkBase('contact'),
        ruimtesPanel: panel('ruimtes'),
        afhurenPanel: panel('groepen'),
        enterRuimtes: () => this.setState({ open: 'ruimtes' }),
        enterAfhuren: () => this.setState({ open: 'groepen' }),
        leave: () => this.setState({ open: null }),
        langNlStyle: { padding: '3px 5px', fontWeight: lang === 'nl' ? 700 : 400, color: solid ? '#2A2A2A' : '#F5EFE6', opacity: lang === 'nl' ? 1 : 0.42, textTransform: 'uppercase', fontSize: '11px', cursor: 'pointer' },
        langSepStyle: { color: solid ? '#2A2A2A' : '#F5EFE6', opacity: 0.25, margin: '0 1px', fontSize: '9px' },
        langEnStyle: { padding: '3px 5px', fontWeight: lang === 'en' ? 700 : 400, color: solid ? '#2A2A2A' : '#F5EFE6', opacity: lang === 'en' ? 1 : 0.42, textTransform: 'uppercase', fontSize: '11px', cursor: 'pointer' },
        setNl: () => window._setL && window._setL('nl'),
        setEn: () => window._setL && window._setL('en'),
      };
    }
  render() {
    const V = this.renderVals ? this.renderVals() : {};
    return (
      <header style={V.headerStyle}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 clamp(20px, 5vw, 40px)", height: "80px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "32px" }}>
          <a href="index.html" style={{ display: "flex", alignItems: "center", gap: "12px", flexShrink: "0" }} aria-label="Pompstation — home">
            <img src="images/logo.webp" alt="Pompstation" style={V.logoStyle} />
          </a>
          <nav style={V.desktopNavStyle}>
            <Hov as="a" href="menu.html" style={V.linkMenu} styleHover={{ opacity: "0.6" }}>
              Menu
            </Hov>
            <div style={{ position: "relative" }} onMouseEnter={V.enterRuimtes} onMouseLeave={V.leave}>
              <Hov as="a" href="ruimtes.html" style={V.linkRuimtes} styleHover={{ opacity: "0.6" }}>
                Ruimtes{' '}
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{ marginTop: "1px", opacity: "0.5" }}>
                  <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Hov>
              {' '}
              <div style={V.ruimtesPanel}>
                <div style={{ background: "#F5EFE6", border: "1px solid rgba(42,42,42,0.1)", boxShadow: "0 20px 40px -12px rgba(0,0,0,0.25)", minWidth: "200px", padding: "8px 0" }}>
                  <Hov as="a" href="ruimte-restaurant.html" style={{ display: "block", padding: "10px 20px", color: "#2A2A2A", fontSize: "14px", whiteSpace: "nowrap" }} styleHover={{ background: "rgba(42,42,42,0.05)" }}>
                    Het Restaurant
                  </Hov>
                  {' '}
                  <Hov as="a" href="ruimte-vide.html" style={{ display: "block", padding: "10px 20px", color: "#2A2A2A", fontSize: "14px", whiteSpace: "nowrap" }} styleHover={{ background: "rgba(42,42,42,0.05)" }}>
                    De Vide
                  </Hov>
                  {' '}
                  <Hov as="a" href="ruimte-terras.html" style={{ display: "block", padding: "10px 20px", color: "#2A2A2A", fontSize: "14px", whiteSpace: "nowrap" }} styleHover={{ background: "rgba(42,42,42,0.05)" }}>
                    Het Terras
                  </Hov>
                  {' '}
                  <Hov as="a" href="ruimte-exclusief.html" style={{ display: "block", padding: "10px 20px", color: "#2A2A2A", fontSize: "14px", whiteSpace: "nowrap" }} styleHover={{ background: "rgba(42,42,42,0.05)" }}>
                    Volledig Exclusief
                  </Hov>
                </div>
              </div>
            </div>
            <div style={{ position: "relative" }} onMouseEnter={V.enterAfhuren} onMouseLeave={V.leave}>
              <Hov as="a" href="groepen.html" style={V.linkAfhuren} styleHover={{ opacity: "0.6" }}>
                Afhuren & groepen{' '}
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{ marginTop: "1px", opacity: "0.5" }}>
                  <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Hov>
              {' '}
              <div style={V.afhurenPanel}>
                <div style={{ background: "#F5EFE6", border: "1px solid rgba(42,42,42,0.1)", boxShadow: "0 20px 40px -12px rgba(0,0,0,0.25)", minWidth: "200px", padding: "8px 0" }}>
                  <Hov as="a" href="groepsdiner.html" style={{ display: "block", padding: "10px 20px", color: "#2A2A2A", fontSize: "14px", whiteSpace: "nowrap" }} styleHover={{ background: "rgba(42,42,42,0.05)" }}>
                    Groepsdiner
                  </Hov>
                  {' '}
                  <Hov as="a" href="groepslunch.html" style={{ display: "block", padding: "10px 20px", color: "#2A2A2A", fontSize: "14px", whiteSpace: "nowrap" }} styleHover={{ background: "rgba(42,42,42,0.05)" }}>
                    Groepslunch
                  </Hov>
                  {' '}
                  <Hov as="a" href="bedrijfsborrel.html" style={{ display: "block", padding: "10px 20px", color: "#2A2A2A", fontSize: "14px", whiteSpace: "nowrap" }} styleHover={{ background: "rgba(42,42,42,0.05)" }}>
                    Bedrijfsborrel
                  </Hov>
                  {' '}
                  <Hov as="a" href="bedrijfsdiner.html" style={{ display: "block", padding: "10px 20px", color: "#2A2A2A", fontSize: "14px", whiteSpace: "nowrap" }} styleHover={{ background: "rgba(42,42,42,0.05)" }}>
                    Bedrijfsdiner
                  </Hov>
                  {' '}
                  <Hov as="a" href="bedrijfsfeest.html" style={{ display: "block", padding: "10px 20px", color: "#2A2A2A", fontSize: "14px", whiteSpace: "nowrap" }} styleHover={{ background: "rgba(42,42,42,0.05)" }}>
                    Bedrijfsfeest
                  </Hov>
                  {' '}
                  <Hov as="a" href="#" style={{ display: "block", padding: "10px 20px", color: "#2A2A2A", fontSize: "14px", whiteSpace: "nowrap" }} styleHover={{ background: "rgba(42,42,42,0.05)" }}>
                    Vergadering
                  </Hov>
                  {' '}
                  <Hov as="a" href="bruiloft.html" style={{ display: "block", padding: "10px 20px", color: "#2A2A2A", fontSize: "14px", whiteSpace: "nowrap" }} styleHover={{ background: "rgba(42,42,42,0.05)" }}>
                    Bruiloft
                  </Hov>
                </div>
              </div>
            </div>
            <Hov as="a" href="agenda.html" style={V.linkAgenda} styleHover={{ opacity: "0.6" }}>
              Live muziek
            </Hov>
            {' '}
            <Hov as="a" href="verhaal.html" style={V.linkVerhaal} styleHover={{ opacity: "0.6" }}>
              Over ons
            </Hov>
            {' '}
            <Hov as="a" href="faq.html" style={V.linkFaq} styleHover={{ opacity: "0.6" }}>
              FAQ
            </Hov>
            {' '}
            <Hov as="a" href="contact.html" style={V.linkContact} styleHover={{ opacity: "0.6" }}>
              Contact
            </Hov>
          </nav>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexShrink: "0" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1px", fontSize: "11px", letterSpacing: "0.07em" }}>
              <span style={V.langNlStyle} onClick={V.setNl}>
                NL
              </span>
              <span style={V.langSepStyle}>
                |
              </span>
              <span style={V.langEnStyle} onClick={V.setEn}>
                EN
              </span>
            </div>
            <Hov as="a" href="https://www.pompstation.nu/" target="_blank" rel="noopener" style={V.reserveBtnStyle} styleHover={{ background: "#3F0F10" }}>
              Reserveer een tafel
            </Hov>
            <button type="button" aria-label="Menu" style={V.burgerStyle} onClick={V.toggleDrawer}>
              <span style={V.burgerBar1} />
              <span style={V.burgerBar2} />
              <span style={V.burgerBar3} />
            </button>
          </div>
        </div>
        <div style={V.drawerStyle}>
          <div style={{ display: "flex", flexDirection: "column", padding: "8px 20px 28px", gap: "2px" }}>
            <a href="menu.html" style={V.drawerLink}>Menu</a>
            <div style={V.drawerGroupLabel}>Ruimtes</div>
            <a href="ruimte-restaurant.html" style={V.drawerSubLink}>Het Restaurant</a>
            <a href="ruimte-vide.html" style={V.drawerSubLink}>De Vide</a>
            <a href="ruimte-terras.html" style={V.drawerSubLink}>Het Terras</a>
            <a href="ruimte-exclusief.html" style={V.drawerSubLink}>Volledig Exclusief</a>
            <div style={V.drawerGroupLabel}>Afhuren &amp; groepen</div>
            <a href="groepen.html" style={V.drawerSubLink}>Overzicht afhuren</a>
            <a href="groepsdiner.html" style={V.drawerSubLink}>Groepsdiner</a>
            <a href="groepslunch.html" style={V.drawerSubLink}>Groepslunch</a>
            <a href="bedrijfsborrel.html" style={V.drawerSubLink}>Bedrijfsborrel</a>
            <a href="bedrijfsdiner.html" style={V.drawerSubLink}>Bedrijfsdiner</a>
            <a href="bedrijfsfeest.html" style={V.drawerSubLink}>Bedrijfsfeest</a>
            <a href="vergadering.html" style={V.drawerSubLink}>Vergadering</a>
            <a href="bruiloft.html" style={V.drawerSubLink}>Bruiloft</a>
            <a href="agenda.html" style={V.drawerLink}>Live muziek</a>
            <a href="verhaal.html" style={V.drawerLink}>Over ons</a>
            <a href="faq.html" style={V.drawerLink}>FAQ</a>
            <a href="contact.html" style={V.drawerLink}>Contact</a>
            <a href="https://www.pompstation.nu/" target="_blank" rel="noopener" style={{ marginTop: "16px", background: "#5C1A1B", color: "#F5EFE6", padding: "16px 20px", textAlign: "center", fontSize: "15px", fontWeight: "500" }}>Reserveer een tafel</a>
          </div>
        </div>
      </header>
    );
  }
}

function PSSfeer(props) { return <PSSfeerClass {...props} />; }
class PSSfeerClass extends React.Component {
  renderVals() {
      const p = this.props;
      const bgMap = { cream: '#F5EFE6', 'cream-warm': '#EFE7D9' };
      return {
        lead: p.lead || 'Kaarslicht onder een plafond van twaalf meter, jazz die door de hal galmt en een keuken die er staat. Een eerste indruk van een avond bij Pompstation.',
        sectionStyle: { background: bgMap[p.bg] || '#EFE7D9', padding: 'clamp(46px, 8vw, 128px) 0', borderBottom: '1px solid rgba(42,42,42,0.1)' },
      };
    }
  render() {
    const V = this.renderVals ? this.renderVals() : {};
    return (
      <section style={V.sectionStyle}>
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
              {V.lead}
            </p>
          </div>
          {' '}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gridAutoRows: "215px", gridAutoFlow: "dense", gap: "16px" }}>
            <figure style={{ position: "relative", overflow: "hidden", background: "#2A2A2A", margin: "0", gridColumn: "span 2", gridRow: "span 2" }}>
              <img src="images/restaurant-zaal.jpg" alt="De grote hal · 12 m hoog" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 20%" }} />
              <figcaption style={{ position: "absolute", bottom: "0", left: "0", padding: "20px" }}>
                <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#F5EFE6", border: "1px solid rgba(245,239,230,0.45)", padding: "4px 8px", background: "rgba(0,0,0,0.25)" }}>
                  De grote hal · 12 m hoog
                </span>
              </figcaption>
            </figure>
            <figure style={{ position: "relative", overflow: "hidden", background: "#2A2A2A", margin: "0" }}>
              <img src="images/food-burrata.jpg" alt="Uit de open keuken" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%" }} />
              <figcaption style={{ position: "absolute", bottom: "0", left: "0", padding: "12px" }}>
                <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#F5EFE6", border: "1px solid rgba(245,239,230,0.45)", padding: "4px 8px", background: "rgba(0,0,0,0.25)" }}>
                  Uit de open keuken
                </span>
              </figcaption>
            </figure>
            <figure style={{ position: "relative", overflow: "hidden", background: "#2A2A2A", margin: "0" }}>
              <img src="images/cocktail.jpg" alt="Borrelen aan de bar" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%" }} />
              <figcaption style={{ position: "absolute", bottom: "0", left: "0", padding: "12px" }}>
                <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#F5EFE6", border: "1px solid rgba(245,239,230,0.45)", padding: "4px 8px", background: "rgba(0,0,0,0.25)" }}>
                  Borrelen aan de bar
                </span>
              </figcaption>
            </figure>
            <figure style={{ position: "relative", overflow: "hidden", background: "#2A2A2A", margin: "0", gridRow: "span 2" }}>
              <img src="images/groepsdiner-overhead.jpg" alt="Groepen & events" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%" }} />
              <figcaption style={{ position: "absolute", bottom: "0", left: "0", padding: "20px" }}>
                <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#F5EFE6", border: "1px solid rgba(245,239,230,0.45)", padding: "4px 8px", background: "rgba(0,0,0,0.25)" }}>
                  Groepen & events
                </span>
              </figcaption>
            </figure>
            <figure style={{ position: "relative", overflow: "hidden", background: "#2A2A2A", margin: "0", gridRow: "span 2" }}>
              <img src="images/live-muziek-intiem.jpg" alt="Live jazz donderdag t/m zaterdag" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%" }} />
              <figcaption style={{ position: "absolute", bottom: "0", left: "0", padding: "20px" }}>
                <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#F5EFE6", border: "1px solid rgba(245,239,230,0.45)", padding: "4px 8px", background: "rgba(0,0,0,0.25)" }}>
                  Live jazz donderdag t/m zaterdag
                </span>
              </figcaption>
            </figure>
            <figure style={{ position: "relative", overflow: "hidden", background: "#2A2A2A", margin: "0", gridColumn: "span 2" }}>
              <img src="images/terras-oesters.jpg" alt="Terras · seizoen open" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%" }} />
              <figcaption style={{ position: "absolute", bottom: "0", left: "0", padding: "20px" }}>
                <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#F5EFE6", border: "1px solid rgba(245,239,230,0.45)", padding: "4px 8px", background: "rgba(0,0,0,0.25)" }}>
                  Terras · seizoen open
                </span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
    );
  }
}


function PSSeoLanding(props) {
  const c = props.config;
  return (
    <div style={{ background: "#F5EFE6" }}>
      <PSHero kicker={c.kicker} title={c.title} titleAccent={c.titleAccent} lead={c.lead} image={c.image} position={c.position} cta1Label={c.cta1Label} cta1Href={c.cta1Href} cta2Label={c.cta2Label} cta2Href={c.cta2Href} heightVh="62" minHeight="480" />
      <section style={{ background: "#F5EFE6", padding: "clamp(46px, 8vw, 96px) 0 0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(20px, 5vw, 40px)", display: "grid", gridTemplateColumns: "repeat(12,1fr)", gap: "clamp(20px, 5vw, 48px)" }}>
          <div style={{ gridColumn: "span 4" }}>
            <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#5C1A1B", marginBottom: "16px" }}>Details</div>
            <ul style={{ listStyle: "none", margin: "0", padding: "0", display: "flex", flexDirection: "column", gap: "20px" }}>
              {(c.details || []).map((d, i) => (
                <li key={i} style={{ display: "flex", flexDirection: "column", gap: "2px", borderBottom: "1px solid rgba(42,42,42,0.1)", paddingBottom: "16px" }}>
                  <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(42,42,42,0.5)" }}>{d.k}</span>
                  <span style={{ color: "#2A2A2A", fontSize: "16px" }}>{d.v}</span>
                </li>
              ))}
            </ul>
            <a href="/offerte" style={{ marginTop: "32px", display: "inline-flex", alignItems: "center", gap: "12px", background: "#5C1A1B", color: "#F5EFE6", padding: "16px 28px", fontSize: "14px", fontWeight: 500, letterSpacing: "0.02em" }}>Offerte aanvragen →</a>
          </div>
          <div style={{ gridColumn: "span 8" }}>
            <p style={{ margin: "0", fontFamily: "'Instrument Serif',Georgia,serif", fontSize: "clamp(21px, 4.2vw, 28px)", lineHeight: "1.4", color: "#2A2A2A" }}>{c.introSerif}</p>
            <p style={{ margin: "24px 0 0", color: "rgba(42,42,42,0.75)", lineHeight: "1.75", fontSize: "17px", textWrap: "pretty" }}>{c.introBody}</p>
            <div style={{ marginTop: "40px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              {(c.photos || []).map((ph, i) => (
                <div key={i} style={{ overflow: "hidden", height: "280px" }}><img src={ph.src} alt={ph.alt || ""} style={{ width: "100%", height: "100%", objectFit: "cover" }} /></div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section style={{ background: "#F5EFE6", padding: "clamp(46px, 8vw, 96px) 0 clamp(20px, 5vw, 48px)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(20px, 5vw, 40px)" }}>
          <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#5C1A1B", marginBottom: "32px" }}>Mogelijkheden</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "clamp(20px, 5vw, 40px)" }}>
          {c.usps.map((u, i) => (
            <div key={i} style={{ borderTop: "2px solid #5C1A1B", paddingTop: "20px" }}>
              <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.18em", color: "#5C1A1B", marginBottom: "12px" }}>{u.n}</div>
              <h2 style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", textTransform: "uppercase", fontSize: "clamp(21px, 4.2vw, 30px)", lineHeight: "0.95", margin: "0 0 12px", color: "#2A2A2A" }}>{u.t}</h2>
              <p style={{ margin: "0", color: "rgba(42,42,42,0.72)", lineHeight: "1.7", fontSize: "15px", textWrap: "pretty" }}>{u.d}</p>
            </div>
          ))}
          </div>
        </div>
      </section>
      {c.sections.map((s, i) => (
        <section key={i} style={{ background: "#F5EFE6", padding: "clamp(20px, 5vw, 48px) 0" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(20px, 5vw, 40px)", display: "grid", gridTemplateColumns: "repeat(12,1fr)", gap: "clamp(34px, 6.5vw, 64px)", alignItems: "start" }}>
            <div style={{ gridColumn: "span 5" }}>
              <div style={{ width: "100%", aspectRatio: "3/4", overflow: "hidden", background: "#2A2A2A" }}>
                <img src={s.image} alt={s.alt} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div style={{ marginTop: "12px", fontFamily: "'JetBrains Mono',monospace", fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(42,42,42,0.55)" }}>{s.caption}</div>
            </div>
            <div style={{ gridColumn: "span 7" }}>
              <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#5C1A1B", marginBottom: "12px" }}>{s.kicker}</div>
              <h2 style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", textTransform: "uppercase", color: "#2A2A2A", fontSize: "clamp(30px, 6.5vw, 56px)", lineHeight: "0.9", margin: "0 0 32px" }}>{s.title}</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {s.paras.map((p, j) => (
                  <p key={j} style={{ margin: "0", color: "rgba(42,42,42,0.78)", lineHeight: "1.75", textWrap: "pretty" }}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}
      <div style={{ marginTop: "48px" }}><PSSfeer bg="cream-warm" /></div>
      <section style={{ background: "#5C1A1B", color: "#F5EFE6", padding: "clamp(46px, 8vw, 96px) 0" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 clamp(20px, 5vw, 40px)" }}>
          <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(245,239,230,0.7)", marginBottom: "12px" }}>Veelgestelde vragen</div>
          <h2 style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", textTransform: "uppercase", color: "#F5EFE6", fontSize: "clamp(30px, 6.5vw, 56px)", lineHeight: "0.9", margin: "0 0 48px" }}>{c.faqTitle}</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "36px" }}>
            {c.faq.map((f, i) => (
              <div key={i}>
                <h3 style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontWeight: "400", fontSize: "clamp(21px, 4.2vw, 28px)", color: "#F5EFE6", margin: "0 0 10px", lineHeight: "1.2" }}>{f.q}</h3>
                <p style={{ margin: "0", color: "rgba(245,239,230,0.8)", lineHeight: "1.75", textWrap: "pretty" }}>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section style={{ background: "#EFE7D9", padding: "clamp(46px, 8vw, 96px) 0", borderTop: "1px solid rgba(42,42,42,0.1)" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 clamp(20px, 5vw, 40px)" }}>
          <h2 style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", textTransform: "uppercase", color: "#2A2A2A", fontSize: "clamp(25px, 5.2vw, 40px)", lineHeight: "0.95", margin: "0 0 8px" }}>Goed bereikbaar in Amsterdam-Oost</h2>
          <div style={{ width: "48px", height: "2px", background: "#5C1A1B", marginBottom: "28px" }} />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px clamp(34px, 6.5vw, 56px)", fontSize: "15px", lineHeight: "1.8", color: "rgba(42,42,42,0.72)" }}>
            <p style={{ margin: "0", textWrap: "pretty" }}>Bar Restaurant Pompstation vindt u aan de Zeeburgerdijk 52, 1094 AE Amsterdam, in de Indische Buurt in Amsterdam-Oost. Tram 14, 19 en 25 stoppen bij halte Zeeburgerdijk, direct voor de deur. Vanaf Amsterdam Centraal bent u met een taxi binnen tien minuten bij ons; vanaf Muiderpoortstation bent u er te voet of met de tram.</p>
            <p style={{ margin: "0", textWrap: "pretty" }}>Met de auto rijdt u vanaf de ring A10 in enkele minuten naar het pand. Parkeren kan in een parkeergarage in de omgeving of in de omliggende straten: aan de Zeeburgerdijk, in de Borneostraat en in de Timorstraat is vaak plek — tarieven via de EasyPark-app. Voor groepen regelen wij in overleg een bus of groepsvervoer; aankomst per boot is mogelijk, met circa vijf minuten lopen vanaf de aanlegplaats.</p>
            <p style={{ margin: "0", textWrap: "pretty" }}>Pompstation is woensdag en donderdag open van 17:00 tot 00:00 uur en vrijdag en zaterdag van 17:00 tot 01:00 uur, met live muziek op donderdag-, vrijdag- en zaterdagavond. Voor groepen en events zijn afwijkende dagen en tijden mogelijk, ook overdag en voor lunch.</p>
            <p style={{ margin: "0", textWrap: "pretty" }}>Een aanvraag doet u via het offerteformulier op deze website of telefonisch via 020 227 9885. Onze eventmanager denkt mee over opstelling, menu, muziek en vervoer en stuurt u een voorstel op maat, meestal binnen één werkdag.</p>
          </div>
        </div>
      </section>
      <section style={{ background: "#F5EFE6", padding: "clamp(34px, 6.5vw, 64px) 0 0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(20px, 5vw, 40px)", display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "12px 32px" }}>
          <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(42,42,42,0.55)" }}>Verder lezen</span>
          {c.related.map((r, i) => (
            <Hov key={i} as="a" href={r.href} style={{ color: "#5C1A1B", fontWeight: "500", borderBottom: "1px solid rgba(92,26,27,0.3)", paddingBottom: "2px" }} styleHover={{ borderBottomColor: "#5C1A1B" }}>{r.label}</Hov>
          ))}
        </div>
      </section>
      <section style={{ background: "#F5EFE6", padding: "clamp(34px, 6.5vw, 64px) 0 clamp(46px, 8vw, 96px)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(20px, 5vw, 40px)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
            <Hov as="a" href="offerte.html" style={{ display: "block", background: "#5C1A1B", color: "#F5EFE6", padding: "clamp(20px, 5vw, 40px)", transition: "background 0.2s ease" }} styleHover={{ background: "#3F0F10" }}>
              <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(245,239,230,0.7)", marginBottom: "12px" }}>Offerte op maat</div>
              <div style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", textTransform: "uppercase", color: "#F5EFE6", fontSize: "clamp(30px, 6.5vw, 48px)", lineHeight: "0.9" }}>Vraag een offerte aan</div>
              <div style={{ marginTop: "16px", color: "rgba(245,239,230,0.75)" }}>{c.ctaLead}</div>
              <div style={{ marginTop: "24px", display: "inline-flex", alignItems: "center", gap: "8px", color: "#F5EFE6", fontWeight: "500" }}>Naar het formulier <span>→</span></div>
            </Hov>
            <Hov as="a" href="tel:+31202279885" style={{ display: "block", background: "#EFE7D9", border: "1px solid rgba(42,42,42,0.15)", padding: "clamp(20px, 5vw, 40px)", transition: "border-color 0.2s ease" }} styleHover={{ borderColor: "#5C1A1B" }}>
              <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#5C1A1B", marginBottom: "12px" }}>Liever even bellen?</div>
              <div style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", textTransform: "uppercase", color: "#2A2A2A", fontSize: "clamp(30px, 6.5vw, 48px)", lineHeight: "0.9" }}>020 227 9885</div>
              <div style={{ marginTop: "16px", color: "rgba(42,42,42,0.7)" }}>Onze eventmanager neemt de mogelijkheden graag met u door.</div>
              <div style={{ marginTop: "24px", display: "inline-flex", alignItems: "center", gap: "8px", color: "#5C1A1B", fontWeight: "500" }}>Bel ons <span>→</span></div>
            </Hov>
          </div>
        </div>
      </section>
      <PSFooter />
    </div>
  );
}
