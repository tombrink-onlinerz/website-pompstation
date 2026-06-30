const t = window._t || ((nl) => nl);
const FORMSPREE_CONTACT = "https://formspree.io/f/xpznbwjd";

/* ============================================================
   CONTACT PAGE
   ============================================================ */

const HOURS = [
  { d: t("Maandag","Monday"), h: t("Gesloten","Closed"), closed: true },
  { d: t("Dinsdag","Tuesday"), h: t("Gesloten","Closed"), closed: true },
  { d: t("Woensdag","Wednesday"), h: "17:00 – 00:00" },
  { d: t("Donderdag","Thursday"), h: "17:00 – 00:00", music: true },
  { d: t("Vrijdag","Friday"), h: "17:00 – 01:00", music: true },
  { d: t("Zaterdag","Saturday"), h: "17:00 – 01:00", music: true },
  { d: t("Zondag","Sunday"), h: t("Gesloten","Closed"), closed: true },
];

const ROUTES = [
  { t: t("Met de tram","By tram"), d: "Tram 14 rijdt rechtstreeks vanaf Amsterdam Centraal en stopt voor de deur." },
  { t: t("Lopen vanaf het station","Walking from the station"), d: "Vanaf station Muiderpoort is het ongeveer 9 minuten lopen." },
  { t: t("Met de boot","By boat"), d: "Aanmeren kan bij de steiger aan de Nieuwe Vaart, ter hoogte van de Cruquiusweg." },
  { t: t("Parkeren","Parking"), d: "In de straten rondom Pompstation. Na 21:00 uur en op zondag gratis." },
];

function ContactPage() {
  useFadeIn();
  const [form, setForm] = useState({ name: "", email: "", subject: t("reservering","reservation"), message: "", privacy: false });
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validate = (f) => {
    const e = {};
    if (!f.name || f.name.trim().length < 2) e.name = t("Vul uw naam in","Please enter your name");
    if (!f.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) e.email = t("Geldig e-mailadres","Valid email address");
    if (!f.message || f.message.trim().length < 5) e.message = t("Schrijf een kort bericht","Please write a short message");
    if (!f.privacy) e.privacy = t("Accepteer de privacyverklaring","Please accept the privacy policy");
    return e;
  };
  const [sending, setSending] = useState(false);
  const [serverError, setServerError] = useState(null);
  useEffect(() => { setErrors(validate(form)); }, [form]);
  const submit = async (e) => {
    e.preventDefault();
    const errs = validate(form);
    setTouched({ name: true, email: true, message: true, privacy: true });
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    setSending(true); setServerError(null);
    try {
      const res = await fetch(FORMSPREE_CONTACT, {
        method: "POST",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({ name: form.name, email: form.email, subject: form.subject, message: form.message }),
      });
      if (res.ok) { const n = encodeURIComponent((form.name || '').split(' ')[0]); window.location.href = 'bedankt-contact.html?naam=' + n; }
      else { const d = await res.json(); setServerError(d.error || t("Er ging iets mis. Probeer opnieuw.","Something went wrong. Please try again.")); }
    } catch { setServerError(t("Geen verbinding. Probeer opnieuw.","No connection. Please try again.")); }
    finally { setSending(false); }
  };

  return (
    <div className="font-sans text-anthracite">
      <SiteNav current="contact" />

      <PageHero
        kicker="Zeeburgerdijk 52 · Amsterdam-Oost"
        title="Contact"
        lead="Reserveren, de route of een vraag over afhuren — u vindt ons hier."
        image="images/interior-vide.jpg"
        position="center 30%"
        height="h-[52vh] min-h-[380px]" />

      {/* Quick contact strip */}
      <section className="bg-bordeaux text-cream">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-cream/15">
          <a href={PS.phoneHref} className="py-7 md:py-9 sm:pr-8 group">
            <div className="eyebrow text-cream/55 mb-2">Bel ons</div>
            <div className="h-serif text-2xl md:text-3xl group-hover:text-brass transition-colors">{PS.phone}</div>
          </a>
          <a href={`mailto:${PS.email}`} className="py-7 md:py-9 sm:px-8 group">
            <div className="eyebrow text-cream/55 mb-2">Algemeen</div>
            <div className="h-serif text-2xl md:text-3xl group-hover:text-brass transition-colors break-all">{PS.email}</div>
          </a>
          <a href={`mailto:${PS.eventsEmail}`} className="py-7 md:py-9 sm:pl-8 group">
            <div className="eyebrow text-cream/55 mb-2">Events & afhuren</div>
            <div className="h-serif text-2xl md:text-3xl group-hover:text-brass transition-colors break-all">{PS.eventsEmail}</div>
          </a>
        </div>
      </section>

      {/* Address + hours + map */}
      <section className="bg-cream py-16 md:py-24 border-b border-anthracite/10">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 grid md:grid-cols-12 gap-8 md:gap-12">
          {/* Address + hours */}
          <div className="md:col-span-5 fade-up">
            <div className="eyebrow text-bordeaux mb-4">Adres & openingstijden</div>
            <address className="not-italic mb-8">
              <div className="h-serif text-3xl md:text-4xl text-anthracite leading-tight">{PS.address1}</div>
              <div className="h-serif text-3xl md:text-4xl text-anthracite leading-tight">{PS.address2}</div>
              <div className="mt-2 text-anthracite/60">{PS.area}</div>
            </address>

            <div className="border-t border-anthracite/15">
              {HOURS.map((h, i) =>
              <div key={i} className={`flex items-center justify-between py-3 border-b border-anthracite/10 ${h.closed ? "opacity-50" : ""}`}>
                <div className="flex items-center gap-3">
                  <span className="text-anthracite font-medium w-24">{h.d}</span>
                  {h.music && <span className="eyebrow text-bordeaux border border-bordeaux/30 px-1.5 py-0.5">live muziek</span>}
                </div>
                <span className="font-mono text-sm text-anthracite/75">{h.h}</span>
              </div>
              )}
            </div>
            <p className="mt-5 text-sm text-anthracite/55 font-mono leading-relaxed">
              Wij accepteren geen contant geld meer. Jaarlijkse zomerstop eind juli / begin augustus.
            </p>
          </div>

          {/* Map */}
          <div className="md:col-span-7 fade-up">
            <div className="relative w-full h-full min-h-[360px] overflow-hidden border border-anthracite/15 bg-cream-warm">
              <iframe
                title="Kaart — Pompstation, Zeeburgerdijk 52 Amsterdam"
                src="https://www.openstreetmap.org/export/embed.html?bbox=4.9335%2C52.3640%2C4.9465%2C52.3700&layer=mapnik&marker=52.3670%2C4.9400"
                className="absolute inset-0 w-full h-full"
                style={{ border: 0, filter: "grayscale(0.3) contrast(1.05)" }}
                loading="lazy"></iframe>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Pompstation+Zeeburgerdijk+52+Amsterdam"
                target="_blank" rel="noopener"
                className="absolute bottom-4 right-4 btn-primary px-4 py-2.5 text-sm font-medium tracking-wide shadow-lg">
                Plan je route →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Routes */}
      <section className="bg-cream-warm py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10">
          <div className="eyebrow text-bordeaux mb-4">{t("Zo kom je hier","How to get here")}</div>
          <h2 className="h-display text-anthracite text-4xl md:text-6xl mb-10 md:mb-14">Bereikbaar­heid</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-anthracite/10">
            {ROUTES.map((r, i) =>
            <div key={i} className="bg-cream p-7 md:p-8">
              <div className="h-display text-bordeaux text-2xl md:text-3xl mb-3">0{i + 1}</div>
              <h3 className="h-serif text-2xl text-anthracite">{r.t}</h3>
              <p className="mt-2 text-sm text-anthracite/65 leading-relaxed">{r.d}</p>
            </div>
            )}
          </div>
        </div>
      </section>

      <div className="fade-up"><SfeerGallery bg="bg-cream" lead="Even sfeer proeven voordat u langskomt — de hal, de bar, het terras en de zaal." /></div>

      {/* Contact form */}
      <section className="bg-bordeaux text-cream py-16 md:py-24">
        <div className="max-w-[1000px] mx-auto px-5 md:px-10">
          <div className="grid md:grid-cols-12 gap-8 md:gap-12">
            <div className="md:col-span-5">
              <div className="eyebrow text-brass mb-4">{t("Stuur een bericht","Send a message")}</div>
              <h2 className="h-display text-cream text-4xl md:text-6xl">Een vraag?<br /><span className="h-serif italic normal-case font-normal text-cream/80">Laat het weten.</span></h2>
              <p className="mt-5 text-cream/70 leading-relaxed">
                Voor een tafelreservering verwijzen we je naar onze reserveringsmodule. Voor alle andere vragen — afhuren, cadeaubonnen, samenwerkingen — gebruik dit formulier.
              </p>
              <a href="#" onClick={PS.openReservation} className="mt-6 inline-flex items-center gap-2 text-brass font-medium group">Direct een tafel reserveren <span className="transition-transform group-hover:translate-x-1">→</span></a>
            </div>

            <div className="md:col-span-7">
              {sent ?
              <div className="border border-cream/20 p-8 md:p-10 h-full flex flex-col justify-center">
                <div className="w-14 h-14 border border-cream/40 flex items-center justify-center mb-5">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F5EFE6" strokeWidth="1.5"><path d="M5 12 L 10 17 L 19 7" /></svg>
                </div>
                <div className="eyebrow text-cream/60 mb-3">Bericht verstuurd</div>
                <h3 className="h-display text-4xl md:text-5xl">Bedankt, {form.name.split(" ")[0]}.</h3>
                <p className="mt-4 text-cream/75 max-w-sm">We nemen zo snel mogelijk contact met je op. Spoed? Bel <a href={PS.phoneHref} className="underline">{PS.phone}</a>.</p>
              </div>
              :
              <form onSubmit={submit} className="space-y-5">
                <div>
                  <label className="eyebrow text-cream/55 block mb-3">Onderwerp</label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      { v: t("reservering","reservation"), l: "Reservering" },
                      { v: "afhuren", l: "Afhuren" },
                      { v: "cadeaubon", l: "Cadeaubon" },
                      { v: "anders", l: "Anders" },
                    ].map((o) =>
                    <button key={o.v} type="button"
                      onClick={() => setForm((f) => ({ ...f, subject: o.v }))}
                      className={`px-3 py-3 text-sm border transition-all ${form.subject === o.v ? "bg-cream border-cream text-bordeaux" : "border-cream/25 text-cream/85 hover:border-cream/60"}`}>
                      {o.l}
                    </button>
                    )}
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="eyebrow text-cream/55 block mb-3">Naam</label>
                    <input type="text" value={form.name}
                      onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                      onBlur={() => setTouched((t) => ({ ...t, name: true }))}
                      placeholder="Voornaam Achternaam"
                      className="w-full px-4 py-3.5 bg-transparent border border-cream/25 text-cream placeholder:text-cream/40 focus:border-brass focus:outline-none transition-colors" />
                    {touched.name && errors.name && <div className="mt-2 text-brass text-sm font-mono">{errors.name}</div>}
                  </div>
                  <div>
                    <label className="eyebrow text-cream/55 block mb-3">E-mail</label>
                    <input type="email" value={form.email}
                      onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                      onBlur={() => setTouched((t) => ({ ...t, email: true }))}
                      placeholder="naam@email.nl"
                      className="w-full px-4 py-3.5 bg-transparent border border-cream/25 text-cream placeholder:text-cream/40 focus:border-brass focus:outline-none transition-colors" />
                    {touched.email && errors.email && <div className="mt-2 text-brass text-sm font-mono">{errors.email}</div>}
                  </div>
                </div>
                <div>
                  <label className="eyebrow text-cream/55 block mb-3">Bericht</label>
                  <textarea rows="4" value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    onBlur={() => setTouched((t) => ({ ...t, message: true }))}
                    placeholder="Waarmee kunnen we je helpen?"
                    className="w-full px-4 py-3.5 bg-transparent border border-cream/25 text-cream placeholder:text-cream/40 focus:border-brass focus:outline-none transition-colors resize-none"></textarea>
                  {touched.message && errors.message && <div className="mt-2 text-brass text-sm font-mono">{errors.message}</div>}
                </div>
                <div className="flex items-start gap-3 pt-2">
                  <input type="checkbox" id="contact-privacy" checked={!!form.privacy}
                    onChange={e => setForm(f => ({...f, privacy: e.target.checked}))}
                    className="mt-1 w-4 h-4 cursor-pointer flex-shrink-0 accent-bordeaux" />
                  <label htmlFor="contact-privacy" className="text-sm text-cream/70 leading-relaxed">
                    {t("Ik ga akkoord met de ","I agree to the ")}
                    <a href="privacy.html" className="text-cream underline hover:text-cream/80 transition-colors">{t("privacyverklaring","privacy policy")}</a>
                    {t(" van Pompstation."," of Pompstation.")}
                  </label>
                </div>
                {touched.privacy && errors.privacy && <div className="text-brass text-sm font-mono mt-1">{errors.privacy}</div>}
                <button type="submit" className="bg-cream text-bordeaux hover:bg-cream-warm transition-colors px-8 py-4 text-base font-medium tracking-wide inline-flex items-center gap-3 group">
                  <span>{sending ? t("Versturen…","Sending…") : t("Verstuur bericht","Send message")}</span>
                  {!sending && <span className="transition-transform group-hover:translate-x-1">→</span>}
                </button>
                {serverError && <p className="mt-3 text-brass text-sm font-mono">{serverError}</p>}
              </form>
              }
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
      <StickyMobileCTA />
    </div>);
}

ReactDOM.createRoot(document.getElementById("root")).render(<ContactPage />);
