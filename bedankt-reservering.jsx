const t = window._t || ((nl) => nl);

function BedanktRerserveringPage() {
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
          <div className="eyebrow text-cream/55 mb-4">{t("Reservering bevestigd","Reservation confirmed")}</div>
          <h1 className="h-display text-6xl md:text-8xl mb-6">{t("Tot ziens bij Pompstation.","See you at Pompstation.")}</h1>
          <p className="text-cream/75 text-lg leading-relaxed max-w-md mx-auto">
            {t("Uw reservering is bevestigd. U ontvangt een bevestiging per e-mail. We verheugen ons op uw bezoek.","Your reservation is confirmed. You'll receive a confirmation by email. We look forward to your visit.")}
          </p>

          <div className="mt-10 border border-cream/20 px-8 py-7 text-left max-w-sm mx-auto">
            <div className="eyebrow text-cream/50 mb-4">{t("Uw bezoek","Your visit")}</div>
            <div className="space-y-3 text-sm text-cream/80 font-mono">
              <div className="flex justify-between gap-4">
                <span className="text-cream/50">{t("Adres","Address")}</span>
                <span className="text-right">{PS.address1}<br />{PS.address2}</span>
              </div>
              <div className="flex justify-between gap-4">
                <span className="text-cream/50">{t("Openingstijden","Opening hours")}</span>
                <span className="text-right">{t("Wo–do 17:00–00:00","Wed–Thu 17:00–00:00")}<br />{t("Vr–za 17:00–01:00","Fri–Sat 17:00–01:00")}</span>
              </div>
              <div className="flex justify-between gap-4">
                <span className="text-cream/50">{t("Telefoon","Phone")}</span>
                <a href={PS.phoneHref} className="underline hover:text-cream transition-colors">{PS.phone}</a>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="menu.html" className="inline-flex items-center justify-center gap-2 border border-cream/40 text-cream px-7 py-3.5 text-sm tracking-wide hover:bg-cream/10 transition-colors">
              {t("Bekijk het menu","View the menu")} →
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

ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(BedanktRerserveringPage));
