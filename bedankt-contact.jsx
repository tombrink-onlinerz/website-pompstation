const t = window._t || ((nl) => nl);
const params = new URLSearchParams(window.location.search);
const NAAM = params.get('naam') || '';

function BedanktContactPage() {
  useFadeIn();
  return (
    <div className="font-sans text-anthracite min-h-screen bg-bordeaux flex flex-col">
      <SiteNav transparentTop={false} />
      <div className="flex-1 flex items-center justify-center py-32 px-5">
        <div className="text-center text-cream max-w-xl mx-auto fade-up is-visible">
          <div className="w-16 h-16 mx-auto border border-cream/50 flex items-center justify-center mb-10">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F5EFE6" strokeWidth="1.5">
              <path d="M5 12 L 10 17 L 19 7" />
            </svg>
          </div>
          <div className="eyebrow text-cream/55 mb-4">{t("Bericht verstuurd","Message sent")}</div>
          <h1 className="h-display text-6xl md:text-8xl mb-6">
            {NAAM ? `${t("Bedankt","Thank you")}, ${NAAM}.` : t("Bedankt.","Thank you.")}
          </h1>
          <p className="text-cream/75 text-lg leading-relaxed max-w-md mx-auto">
            {t("We nemen zo snel mogelijk contact met u op — uiterlijk","We'll get back to you as soon as possible — within")} <strong className="text-cream">{t("binnen 1 werkdag","1 business day")}</strong>.
          </p>
          <p className="mt-3 text-cream/50 text-sm font-mono">
            {t("Spoed? Bel","Urgent? Call")} <a href={PS.phoneHref} className="underline hover:text-cream transition-colors">{PS.phone}</a>
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#" onClick={PS.openReservation} className="inline-flex items-center justify-center gap-2 border border-cream/40 text-cream px-7 py-3.5 text-sm tracking-wide hover:bg-cream/10 transition-colors">
              {t("Reserveer een tafel","Reserve a table")}
            </a>
            <a href="index.html" className="inline-flex items-center justify-center gap-2 bg-cream text-bordeaux px-7 py-3.5 text-sm font-medium tracking-wide hover:bg-cream/90 transition-colors">
              {t("Terug naar home","Back to home")}
            </a>
          </div>
        </div>
      </div>
      <SiteFooter />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(BedanktContactPage));
