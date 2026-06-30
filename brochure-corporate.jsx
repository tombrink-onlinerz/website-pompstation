const t = window._t || ((nl) => nl);

function App() {
  return (
    <div className="font-sans text-anthracite">
      <SiteNav current="groepen" />

      <PageHero
        kicker={t("Corporate Brochure 2026","Corporate Brochure 2026")}
        title={t("Ontvang onze","Receive our")}
        titleAccent={t("brochure","brochure")}
        lead={t("Capaciteiten, technische specs, catering en tarieven — alles in één overzicht.","Capacities, technical specs, catering and rates — everything in one overview.")}
        image="images/interior-vide.jpg"
        position="center 40%"
        height="h-[50vh] min-h-[380px]" />

      <BrochureDownload type="corporate" />

      <SiteFooter />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(App));