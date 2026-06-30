const t = window._t || ((nl) => nl);

function App() {
  return (
    <div className="font-sans text-anthracite">
      <SiteNav current="groepen" />

      <PageHero
        kicker={t("Wedding Brochure 2026–2027","Wedding Brochure 2026–2027")}
        title={t("Ontvang onze","Receive our")}
        titleAccent={t("brochure","brochure")}
        lead={t("Alles over trouwen bij Pompstation — ceremonie, diner, feest en tarieven.","Everything about getting married at Pompstation — ceremony, dinner, party and rates.")}
        image="images/bride-vide.jpg"
        position="center 30%"
        height="h-[50vh] min-h-[380px]" />

      <BrochureDownload type="wedding" />

      <SiteFooter />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(App));