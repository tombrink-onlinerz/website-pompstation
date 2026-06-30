const t = window._t || ((nl) => nl);
const params = new URLSearchParams(window.location.search);
const TYPE  = params.get('type')  || 'corporate';
const EMAIL = params.get('email') || '';
const isWedding = TYPE === 'wedding';

function BedanktBrochurePage() {
  useFadeIn();
  return (
    <div className="font-sans text-anthracite min-h-screen bg-bordeaux flex flex-col">
      <SiteNav transparentTop={false} />
      <div className="flex-1 flex items-center justify-center py-32 px-5">
        <div className="text-center text-cream max-w-xl mx-auto fade-up is-visible">
          <div className="w-16 h-16 mx-auto border border-cream/50 flex items-center justify-center mb-10">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F5EFE6" strokeWidth="1.5">
              <path d="M3 8 L12 13 L21 8 M3 8 L3 18 L21 18 L21 8" />
            </svg>
          </div>
          <div className="eyebrow text-cream/55 mb-4">
            {isWedding ? 'Wedding brochure onderweg' : 'Corporate brochure onderweg'}
          </div>
          <h1 className="h-display text-6xl md:text-8xl mb-6">Check uw inbox.</h1>
          <p className="text-cream/75 text-lg leading-relaxed max-w-md mx-auto">
            De brochure is verstuurd{EMAIL ? <> naar <strong className="text-cream">{EMAIL}</strong></> : ''}.{' '}
            We nemen binnenkort contact met u op.
          </p>
          <p className="mt-3 text-cream/50 text-sm font-mono">
            Geen e-mail ontvangen? Controleer uw spammap of bel{' '}
            <a href={PS.phoneHref} className="underline hover:text-cream transition-colors">{PS.phone}</a>
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="offerte.html" className="inline-flex items-center justify-center gap-2 border border-cream/40 text-cream px-7 py-3.5 text-sm tracking-wide hover:bg-cream/10 transition-colors">
              Offerte aanvragen →
            </a>
            <a href="index.html" className="inline-flex items-center justify-center gap-2 bg-cream text-bordeaux px-7 py-3.5 text-sm font-medium tracking-wide hover:bg-cream/90 transition-colors">
              Terug naar home
            </a>
          </div>
        </div>
      </div>
      <SiteFooter />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(BedanktBrochurePage));
