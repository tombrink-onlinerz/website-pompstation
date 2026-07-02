/* reserveren.jsx — Reserveringspagina met Tebi iframe */

function ReserverenPage() {
  useFadeIn();
  return (
    <>
      <SiteNav current="reserveren" solid={true} />

      {/* Header */}
      <section className="bg-bordeaux text-cream pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10">
          <div className="eyebrow text-cream/50 mb-4 flex items-center gap-3">
            <span className="w-8 h-px bg-cream/30"></span>
            <span>{t("Tafel reserveren", "Make a reservation")}</span>
          </div>
          <h1 className="h-display text-cream text-[64px] sm:text-[96px] md:text-[128px] leading-none">
            {t("Reserveren", "Reserve")}
          </h1>
          <p className="mt-5 max-w-lg text-cream/70 text-lg leading-relaxed">
            {t(
              "Reserveer direct een tafel voor lunch, diner of borrel — voor twee of voor het hele gezelschap.",
              "Book a table directly for lunch, dinner or drinks — for two or for the whole group."
            )}
          </p>
        </div>
      </section>

      {/* Tebi iframe */}
      <section className="bg-cream-warm py-0">
        <div className="max-w-[1280px] mx-auto">
          <iframe
            src="https://live.tebi.co/ecom/reservations/545611_61f1bdcadbcd5e67d2be1f8e8a0615ae50c2599a0297b11367005fc172a09609"
            title={t("Reserveringssysteem Pompstation", "Pompstation Reservation System")}
            style={{
              width: '100%',
              minHeight: '700px',
              border: 'none',
              display: 'block',
            }}
            loading="eager"
            allow="payment"
          ></iframe>
        </div>
      </section>

      {/* Info strip */}
      <section className="bg-cream border-t border-anthracite/10 py-12 md:py-16">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10">
          <div className="grid sm:grid-cols-3 gap-8 md:gap-12">
            <div>
              <div className="eyebrow text-bordeaux mb-2">{t("Adres", "Address")}</div>
              <p className="text-anthracite/80 text-sm leading-relaxed">
                Zeeburgerdijk 52<br />1094 AE Amsterdam
              </p>
            </div>
            <div>
              <div className="eyebrow text-bordeaux mb-2">{t("Openingstijden", "Opening hours")}</div>
              <p className="text-anthracite/80 text-sm leading-relaxed">
                {t("Di – Zo · 12:00 – 23:00", "Tue – Sun · 12:00 – 23:00")}
              </p>
            </div>
            <div>
              <div className="eyebrow text-bordeaux mb-2">{t("Vragen?", "Questions?")}</div>
              <p className="text-anthracite/80 text-sm leading-relaxed">
                <a href="tel:+31202279885" className="hover:text-bordeaux transition-colors">+31 20 227 9885</a><br />
                <a href="mailto:info@pompstation.nu" className="hover:text-bordeaux transition-colors">info@pompstation.nu</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<ReserverenPage />);
