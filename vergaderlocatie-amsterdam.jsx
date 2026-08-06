const SEO_CFG = {
  "kicker": "Afhuren in Amsterdam · Vergaderen",
  "title": "Vergaderlocatie",
  "titleAccent": "in Amsterdam",
  "lead": "Vergaderen, heidag of offsite in een industrieel monument — met de vide als eigen verdieping en de keuken van Pompstation als bonus.",
  "image": "images/interior-vide.jpg",
  "position": "center 40%",
  "details": [{"k":"Capaciteit","v":"10–60 personen"},{"k":"Ruimte","v":"Besloten deel van het restaurant"},{"k":"Daglicht","v":"Hoge ramen, natuurlijk licht"},{"k":"Catering","v":"Koffie, lunch of diner op aanvraag"},{"k":"Tijdstip","v":"Dagdeel of hele dag mogelijk"},{"k":"Locatie","v":"Zeeburgerdijk 52, Amsterdam-Oost"}],
  "photos": [{"src":"images/interior-vide.jpg","alt":"De vide van Pompstation met daglicht, Amsterdam-Oost"},{"src":"images/restaurant-interieur-wide.jpg","alt":"Het restaurant van Pompstation als vergaderlocatie"}],
  "cta1Label": "Brochure downloaden",
  "cta1Href": "/vergadering#brochure",
  "cta2Label": "Offerte aanvragen",
  "cta2Href": "/offerte",
  "introSerif": "Op zoek naar een bijzondere vergaderlocatie in Amsterdam? De vide van Pompstation biedt een eigen verdieping met daglicht, eigen bar en ruimte voor 20 tot 100 personen.",
  "introBody": "Voor offsites, heidagen, kwartaalsessies en teamdagen opent Pompstation aan de Zeeburgerdijk in Amsterdam-Oost ook overdag de deuren. U vergadert op de vide boven het restaurant, luncht van de houtskoolgrill en sluit af met een borrel op het terras of een diner in de zaal — alles onder één dak.",
  "usps": [
    {
      "n": "01",
      "t": "Eigen verdieping",
      "d": "De vide is een eigen etage met eigen bar en zicht op de monumentale hal — voor 20 tot 100 personen."
    },
    {
      "n": "02",
      "t": "Alles onder één dak",
      "d": "Vergaderen, lunch, borrel en diner op één adres — geen verplaatsingen in uw programma."
    },
    {
      "n": "03",
      "t": "10 minuten van CS",
      "d": "Tram 14, 19 en 25 stoppen voor de deur; vanaf de ring A10 rijdt u er in enkele minuten heen."
    }
  ],
  "sections": [
    {
      "kicker": "De opstelling",
      "title": "Van boardroom tot theater",
      "paras": [
        "De vide is flexibel in te richten: één grote vergadertafel, een cabaret- of theateropstelling voor presentaties, of losse zithoeken voor breakout-sessies. Scherm, geluid en microfoon zijn beschikbaar; snelle wifi is er vanzelfsprekend.",
        "Bij volledige afhuur van de zaal zijn ook grotere plenaire sessies mogelijk — tot enkele honderden deelnemers, met podium en techniek in overleg."
      ],
      "image": "images/restaurant-interior.jpg",
      "alt": "De monumentale zaal van Pompstation Amsterdam als vergaderlocatie",
      "caption": "De vide · 20 tot 100 personen"
    },
    {
      "kicker": "De dag",
      "title": "Van koffie tot borrel",
      "paras": [
        "Wij ontvangen uw gezelschap met koffie, thee en iets lekkers, verzorgen tussendoor een lunch van de houtskoolgrill en sluiten de dag desgewenst af met een borrel op het terras in de binnentuin of een diner in het restaurant.",
        "Onze eventmanager stelt het dagprogramma met u samen en stemt tijden, catering en techniek af op uw agenda."
      ],
      "image": "images/terras-tafel.jpg",
      "alt": "Borrel op het terras na een vergaderdag bij Pompstation Amsterdam",
      "caption": "Afsluiten op het terras · in de binnentuin"
    }
  ],
  "faqTitle": "Over vergaderen bij Pompstation",
  "faq": [
    {
      "q": "Welke techniek is aanwezig op de vergaderlocatie?",
      "a": "Scherm, geluid, microfoon en snelle wifi zijn beschikbaar. Voor grotere producties met podium en licht denkt onze eventmanager mee en regelen wij techniek in overleg."
    },
    {
      "q": "Voor hoeveel personen is de vide geschikt?",
      "a": "De vide biedt ruimte aan 20 tot 100 personen, afhankelijk van de opstelling. Voor grotere plenaire sessies is de volledige zaal af te huren."
    },
    {
      "q": "Kunnen we een hele dag of een dagdeel boeken?",
      "a": "Beide. Veel bedrijven kiezen voor een middagsessie met aansluitend borrel en diner, maar een volledige heidag van koffie tot avondprogramma is net zo goed mogelijk."
    },
    {
      "q": "Is er catering tijdens de vergaderdag?",
      "a": "Ja, uit eigen keuken: koffie en thee met iets lekkers, een lunch van de houtskoolgrill en desgewenst een borrel of diner na afloop. Dieetwensen geeft u vooraf door."
    }
  ],
  "related": [
    {
      "label": "Alles over meetings & vergaderen",
      "href": "vergadering.html"
    },
    {
      "label": "Groepslunch in Amsterdam",
      "href": "groepslunch-amsterdam.html"
    },
    {
      "label": "Bedrijfsdiner in Amsterdam",
      "href": "bedrijfsdiner-amsterdam.html"
    }
  ],
  "ctaLead": "Vertel ons de datum, het aantal deelnemers en uw programma — u ontvangt een voorstel op maat voor uw vergaderdag."
};
function PompstationSeoPage() {
  return (
    <div style={{ fontFamily: "'DM Sans',system-ui,sans-serif", color: "#2A2A2A", overflowX: "clip" }}>
      <PSNav current="groepen" />
      {' '}
      <PSSeoLanding config={SEO_CFG} />
    </div>
  );
}
const __root = document.getElementById('root');
if (__root) ReactDOM.createRoot(__root).render(<PompstationSeoPage />);
