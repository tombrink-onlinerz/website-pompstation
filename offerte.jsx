const t = window._t || ((nl) => nl);
const FORMSPREE_OFFERTE = "https://formspree.io/f/xgvwkqry";

/* ============================================================
   OFFERTE — standalone offerte aanvraag pagina
   ============================================================ */
const { useState, useEffect } = React;

function OffertePage() {
  const [form, setForm] = useState({
    type: "", people: 60, date: "", name: "", email: "", phone: "", company: "", message: "", privacy: false
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validate = (f) => {
    const e = {};
    if (!f.type) e.type = t("Selecteer een type","Please select a type");
    if (!f.date) e.date = t("Kies een datum","Please choose a date");
    if (!f.name || f.name.trim().length < 2) e.name = t("Vul uw naam in","Please enter your name");
    if (!f.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) e.email = t("Geldig e-mailadres","Valid email address");
    if (!f.phone || f.phone.replace(/\D/g, "").length < 8) e.phone = t("Geldig telefoonnummer","Valid phone number");
    if (!f.privacy) e.privacy = t("Accepteer de privacyverklaring","Please accept the privacy policy");
    return e;
  };

  useEffect(() => { setErrors(validate(form)); }, [form]);

  const [sending, setSending] = useState(false);
  const [serverError, setServerError] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate(form);
    setTouched({ type: true, date: true, name: true, email: true, phone: true, privacy: true });
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    setSending(true); setServerError(null);
    try {
      const res = await fetch(FORMSPREE_OFFERTE, {
        method: "POST",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
          type: form.type, people: form.people, date: form.date,
          name: form.name, email: form.email, phone: form.phone,
          company: form.company, message: form.message,
          _subject: "Offerte aanvraag Pompstation — " + form.type
        }),
      });
      if (res.ok) { const n = encodeURIComponent((form.name || '').split(' ')[0]); window.location.href = 'bedankt-offerte.html?naam=' + n; }
      else { const d = await res.json(); setServerError(d.error || t("Er ging iets mis. Probeer opnieuw.","Something went wrong. Please try again.")); }
    } catch { setServerError(t("Geen verbinding. Probeer opnieuw.","No connection. Please try again.")); }
    finally { setSending(false); }
  };

  const slidePct = (form.people - 10) / (360 - 10) * 100;

  useFadeIn();

  if (submitted) {
    return (
      <div className="font-sans text-anthracite min-h-screen bg-bordeaux flex flex-col">
        <SiteNav transparentTop={false} />
        <div className="flex-1 flex items-center justify-center py-32 px-5">
          <div className="text-center text-cream">
            <div className="w-16 h-16 mx-auto border border-cream/50 flex items-center justify-center mb-8">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F5EFE6" strokeWidth="1.5"><path d="M5 12 L 10 17 L 19 7" /></svg>
            </div>
            <div className="eyebrow text-cream/60 mb-4">Aanvraag ontvangen</div>
            <h1 className="h-display text-5xl md:text-7xl mb-6">Dank u, {form.name.split(" ")[0]}.</h1>
            <p className="text-cream/75 text-lg leading-relaxed max-w-md mx-auto">
              We reageren binnen 1 werkdag.<br />
              Voor spoed: <a href="tel:+31641655027" className="underline hover:text-cream">+31 6 41 65 50 27</a>
            </p>
            <a href="groepen.html" className="mt-10 inline-flex items-center gap-2 border border-cream/40 text-cream px-7 py-3.5 text-sm hover:bg-cream/10 transition-colors">
              ← Terug naar groepen & afhuren
            </a>
          </div>
        </div>
        <SiteFooter />
      </div>
    );
  }

  return (
    <div className="font-sans text-anthracite">
      <SiteNav transparentTop={false} />

      {/* Page header */}
      <section className="relative text-cream pt-28 pb-16 md:pt-36 md:pb-20 border-b border-cream/10 overflow-hidden">
        <Photo src="images/event-staand.jpg" alt="Evenement Pompstation" className="absolute inset-0 w-full h-full" position="center 30%" overlay={0.72} />
        <div className="relative z-10 max-w-[1280px] mx-auto px-5 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="eyebrow text-cream/60 mb-4">{t("Offerte aanvragen · groepen & events","Request a quote · groups & events")}</div>
              <h1 className="h-display text-cream text-5xl md:text-7xl lg:text-9xl">
                Offerte<br />
                <span className="h-serif italic normal-case font-normal text-cream/80">{t("aanvragen.","request.")}</span>
              </h1>
            </div>
            <p className="md:max-w-sm text-cream/70 text-lg leading-relaxed">
              {t("Vul het formulier in en we reageren","Fill in the form and we will respond")} <strong className="text-cream">{t("binnen 1 werkdag","within 1 business day")}</strong> {t("met een offerte op maat — inclusief menu, drank, set-up en entertainment-suggesties.","with a tailored quote — including menu, drinks, set-up and entertainment suggestions.")}
            </p>
          </div>
        </div>
      </section>

      {/* Form section */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 grid md:grid-cols-12 gap-10 md:gap-16">

          {/* Sidebar */}
          <div className="md:col-span-4 fade-up">
            <div className="bg-bordeaux text-cream p-7 md:p-10">
              <div className="eyebrow text-cream/60 mb-6">{t("Direct contact","Direct contact")}</div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 shrink-0 border border-cream/25 flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" /></svg>
                  </div>
                  <div>
                    <div className="text-sm text-cream/55 font-mono mb-1">{t("Bel direct","Call us directly")}</div>
                    <a href="tel:+31641655027" className="text-cream hover:text-cream/80 transition-colors font-medium">+31 6 41 65 50 27</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 shrink-0 border border-cream/25 flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="4" width="20" height="16" /><path d="M2 6 L 12 13 L 22 6" /></svg>
                  </div>
                  <div>
                    <div className="text-sm text-cream/55 font-mono mb-1">{t("E-mail","E-mail")}</div>
                    <a href="mailto:events@pompstation.nu" className="text-cream hover:text-cream/80 transition-colors font-medium">events@pompstation.nu</a>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-cream/15 space-y-4">
                <div className="eyebrow text-cream/50 mb-4">{t("Ruimtes & capaciteit","Spaces & capacity")}</div>
                {[
                  ["Restaurant", "10–180 personen"],
                  [t("De vide","The mezzanine"), "20–100 personen"],
                  [t("Het terras","The terrace"), "20–200 personen"],
                  [t("Volledig exclusief","Fully exclusive"), "tot 360 personen"],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between text-sm border-b border-cream/10 pb-3">
                    <span className="text-cream/70">{k}</span>
                    <span className="text-cream font-medium">{v}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-cream/15">
                <div className="flex items-center gap-2 text-cream/60 text-sm font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-cream/40 animate-pulse"></span>
                  {t("Binnen 1 werkdag reactie","Response within 1 business day")}
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="md:col-span-8 space-y-7 fade-up">

            {/* Type */}
            <div>
              <label className="eyebrow text-anthracite/55 block mb-3">{t("Type gelegenheid","Type of event")}</label>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                {[
                  { v: "bedrijfsfeest", l: t("Bedrijfsfeest","Corporate event") },
                  { v: "bedrijfsborrel", l: t("Bedrijfsborrel","Corporate drinks") },
                  { v: "zakelijke-lunch", l: t("Zakelijke lunch","Business lunch") },
                  { v: "vriendengroep", l: t("Vriendengroep","Friend group") },
                  { v: "verjaardag", l: t("Verjaardag","Birthday") },
                  { v: "bruiloft", l: t("Bruiloft","Wedding") },
                  { v: "anders", l: t("Anders","Other") },
                ].map((opt) => (
                  <button key={opt.v} type="button"
                    onClick={() => { setForm(f => ({ ...f, type: opt.v })); setTouched(t => ({ ...t, type: true })); }}
                    className={`px-4 py-3.5 text-sm border transition-all text-left ${
                      form.type === opt.v
                        ? "bg-bordeaux border-bordeaux text-cream"
                        : "border-anthracite/20 text-anthracite/80 hover:border-bordeaux/60"
                    }`}>
                    {opt.l}
                  </button>
                ))}
              </div>
              {touched.type && errors.type && <div className="mt-2 text-bordeaux text-sm font-mono">{errors.type}</div>}
            </div>

            {/* People slider */}
            <div>
              <div className="flex items-baseline justify-between mb-3">
                <label className="eyebrow text-anthracite/55">{t("Aantal personen","Number of guests")}</label>
                <div className="h-display text-4xl text-bordeaux">{form.people}</div>
              </div>
              <input type="range" min="10" max="360" step="5" value={form.people}
                onChange={(e) => setForm(f => ({ ...f, people: parseInt(e.target.value) }))}
                className="range-slider w-full"
                style={{ '--fill': `${slidePct}%` }} />
              <div className="flex justify-between mt-2 text-xs font-mono text-anthracite/40">
                <span>10</span><span>100</span><span>200</span><span>360</span>
              </div>
            </div>

            {/* Date */}
            <div>
              <label className="eyebrow text-anthracite/55 block mb-3">{t("Gewenste datum","Preferred date")}</label>
              <input type="date" value={form.date}
                onChange={(e) => { setForm(f => ({ ...f, date: e.target.value })); setTouched(t => ({ ...t, date: true })); }}
                onBlur={() => setTouched(t => ({ ...t, date: true }))}
                className="w-full px-4 py-3.5 bg-cream border border-anthracite/20 text-anthracite focus:border-bordeaux focus:outline-none transition-colors" />
              {touched.date && errors.date && <div className="mt-2 text-bordeaux text-sm font-mono">{errors.date}</div>}
            </div>

            {/* Name + email */}
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="eyebrow text-anthracite/55 block mb-3">{t("Naam","Name")}</label>
                <input type="text" value={form.name}
                  onChange={(e) => setForm(f => ({ ...f, name: e.target.value }))}
                  onBlur={() => setTouched(t => ({ ...t, name: true }))}
                  placeholder="Voornaam Achternaam"
                  className="w-full px-4 py-3.5 bg-cream border border-anthracite/20 text-anthracite placeholder:text-anthracite/35 focus:border-bordeaux focus:outline-none transition-colors" />
                {touched.name && errors.name && <div className="mt-2 text-bordeaux text-sm font-mono">{errors.name}</div>}
              </div>
              <div>
                <label className="eyebrow text-anthracite/55 block mb-3">{t("E-mail","E-mail")}</label>
                <input type="email" value={form.email}
                  onChange={(e) => setForm(f => ({ ...f, email: e.target.value }))}
                  onBlur={() => setTouched(t => ({ ...t, email: true }))}
                  placeholder="naam@bedrijf.nl"
                  className="w-full px-4 py-3.5 bg-cream border border-anthracite/20 text-anthracite placeholder:text-anthracite/35 focus:border-bordeaux focus:outline-none transition-colors" />
                {touched.email && errors.email && <div className="mt-2 text-bordeaux text-sm font-mono">{errors.email}</div>}
              </div>
            </div>

            {/* Bedrijfsnaam */}
            <div>
              <label className="eyebrow text-anthracite/55 block mb-3">Bedrijfsnaam <span className="opacity-50 normal-case tracking-normal font-normal">(optioneel)</span></label>
              <input type="text" value={form.company}
                onChange={(e) => setForm(f => ({ ...f, company: e.target.value }))}
                placeholder="Naam van uw bedrijf of organisatie"
                className="w-full px-4 py-3.5 bg-cream border border-anthracite/20 text-anthracite placeholder:text-anthracite/35 focus:border-bordeaux focus:outline-none transition-colors" />
            </div>

            {/* Phone */}
            <div>
              <label className="eyebrow text-anthracite/55 block mb-3">{t("Telefoon","Phone")}</label>
              <input type="tel" value={form.phone}
                onChange={(e) => setForm(f => ({ ...f, phone: e.target.value }))}
                onBlur={() => setTouched(t => ({ ...t, phone: true }))}
                placeholder="+31 6 …"
                className="w-full px-4 py-3.5 bg-cream border border-anthracite/20 text-anthracite placeholder:text-anthracite/35 focus:border-bordeaux focus:outline-none transition-colors" />
              {touched.phone && errors.phone && <div className="mt-2 text-bordeaux text-sm font-mono">{errors.phone}</div>}
            </div>

            {/* Message */}
            <div>
              <label className="eyebrow text-anthracite/55 block mb-3">Bericht <span className="opacity-50 normal-case tracking-normal">(optioneel)</span></label>
              <textarea rows="4" value={form.message}
                onChange={(e) => setForm(f => ({ ...f, message: e.target.value }))}
                placeholder="Bijzondere wensen, dieetwensen, vraag over entertainment…"
                className="w-full px-4 py-3.5 bg-cream border border-anthracite/20 text-anthracite placeholder:text-anthracite/35 focus:border-bordeaux focus:outline-none transition-colors resize-none">
              </textarea>
            </div>

            <div className="pt-2">
              <div className="flex items-start gap-3 mb-5">
                <input type="checkbox" id="offerte-privacy" checked={!!form.privacy}
                  onChange={e => setForm(f => ({...f, privacy: e.target.checked}))}
                  className="mt-1 w-4 h-4 cursor-pointer flex-shrink-0 accent-bordeaux" />
                <label htmlFor="offerte-privacy" className="text-sm text-anthracite/65 leading-relaxed">
                  {t("Ik ga akkoord met de ","I agree to the ")}
                  <a href="privacy.html" className="text-bordeaux underline hover:text-bordeaux-dark transition-colors">{t("privacyverklaring","privacy policy")}</a>
                  {t(" van Pompstation."," of Pompstation.")}
                </label>
              </div>
              {touched.privacy && errors.privacy && <div className="mb-3 text-bordeaux text-sm font-mono">{errors.privacy}</div>}
              <button type="submit"
                className="w-full md:w-auto bg-bordeaux text-cream hover:bg-bordeaux-dark transition-colors px-10 py-5 text-base font-medium tracking-wide inline-flex items-center justify-center gap-3 group">
                <span>{sending ? t("Versturen…","Sending…") : t("Verstuur aanvraag","Submit request")}</span>
                {!sending && <span className="transition-transform group-hover:translate-x-1">→</span>}
              </button>
              {serverError && <p className="mt-3 text-bordeaux text-sm font-mono">{serverError}</p>}
              <p className="mt-4 text-sm text-anthracite/50 font-mono">
                {t("We reageren binnen 1 werkdag.","We respond within 1 business day.")}  Voor spoed: <a href="tel:+31641655027" className="underline hover:text-anthracite">+31 6 41 65 50 27</a>
              </p>
            </div>
          </form>
        </div>
      </section>

      <SiteFooter />
      <StickyMobileCTA />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(OffertePage));
