const SEO_CFG = {
  "kicker": "Afhuren in Amsterdam · Bedrijfsdiner",
  "title": "Bedrijfsdiner",
  "titleAccent": "in Amsterdam",
  "lead": "Dineren met uw bedrijf in een monument uit 1912 — van 10 collega's aan één tafel tot een exclusief diner voor 360 gasten.",
  "image": "images/service-candles.jpg",
  "position": "center 45%",
  "details": [{"k":"Capaciteit","v":"10–180 gasten"},{"k":"Menu","v":"3, 4 of 5 gangen"},{"k":"Keuze","v":"Vlees, vis of vega per gang"},{"k":"Wijnarrangement","v":"Add-on · vooraf te boeken"},{"k":"Ruimte","v":"Restaurant of exclusief"},{"k":"Live muziek","v":"Donderdag t/m zaterdag"}],
  "photos": [{"src":"images/restaurant-service.jpg","alt":"Gedekte lange tafel voor een bedrijfsdiner bij Pompstation Amsterdam"},{"src":"images/food-steak.jpg","alt":"Steak van de houtskoolgrill van Pompstation"}],
  "cta1Label": "Brochure downloaden",
  "cta1Href": "/bedrijfsdiner#brochure",
  "cta2Label": "Offerte aanvragen",
  "cta2Href": "/offerte",
  "introSerif": "Een bedrijfsdiner in Amsterdam organiseren? Pompstation serveert premium steaks van de houtskoolgrill, verse vis en vegetarische gerechten in een monumentale industriële zaal.",
  "introBody": "Chef Allessandro en zijn team koken voor gezelschappen met een 3-, 4- of 5-gangen groepsmenu dat met het seizoen wisselt. Kleinere teams dineren semi-exclusief op de vide met eigen bar; grotere bedrijven huren de volledige zaal aan de Zeeburgerdijk in Amsterdam-Oost exclusief af — tot 360 gasten, met live muziek op de achtergrond.",
  "usps": [
    {
      "n": "01",
      "t": "Groepsmenu's",
      "d": "Drie, vier of vijf gangen van de houtskoolgrill, wisselend met het seizoen, inclusief vegetarische lijn."
    },
    {
      "n": "02",
      "t": "Semi-exclusief of exclusief",
      "d": "De vide met eigen bar voor 20 tot 100 gasten, of de volledige machinehal voor uw bedrijf alleen."
    },
    {
      "n": "03",
      "t": "Live muziek",
      "d": "Donderdag tot en met zaterdag live jazz en soul op de achtergrond — praten blijft altijd mogelijk."
    }
  ],
  "sections": [
    {
      "kicker": "De keuken",
      "title": "Van de houtskoolgrill",
      "paras": [
        "De keuken van Pompstation draait om het houtskoolvuur: premium steaks, verse seizoensvis, oesters en gegrilde groenten. Ook het prijswinnende carpaccio, de ceviche en de klassieke steak tartare staan op de kaart — en voor vegetariërs en veganisten is er een volwaardig eigen menu.",
        "Voor bedrijfsdiners werken wij met groepsmenu's van drie, vier of vijf gangen. Dieetwensen en allergieën geeft u vooraf door; de keuken past het menu per gast aan."
      ],
      "image": "images/food-steak.jpg",
      "alt": "Premium steak van de houtskoolgrill tijdens een bedrijfsdiner bij Pompstation Amsterdam",
      "caption": "Houtskoolgrill · groepsmenu in 3, 4 of 5 gangen"
    },
    {
      "kicker": "De opstelling",
      "title": "Eén lange tafel of losse tafels",
      "paras": [
        "Een bedrijfsdiner kan bij ons aan één lange tafel, aan ronde tafels of als walking dinner — afhankelijk van de groepsgrootte en de sfeer die u zoekt. De vide biedt een eigen verdieping voor 20 tot 100 gasten; bij volledige afhuur dekken wij voor maximaal 360 personen.",
        "Begin desgewenst met een borrel op het terras in de binnentuin of aan de bar, en sluit af met een feest met DJ of live band. Onze eventmanager stelt het draaiboek met u samen."
      ],
      "image": "images/restaurant-zaal.jpg",
      "alt": "Gedekte tafels in de monumentale zaal van Pompstation Amsterdam",
      "caption": "De machinehal · diner tot 360 gasten"
    }
  ],
  "faqTitle": "Over uw bedrijfsdiner",
  "faq": [
    {
      "q": "Vanaf hoeveel personen kan een bedrijfsdiner geboekt worden?",
      "a": "Vanaf 10 personen reserveert u via het aanvraagformulier of telefonisch. Tot 10 personen reserveert u gewoon online een tafel in het restaurant."
    },
    {
      "q": "Moeten gasten vooraf een menu kiezen?",
      "a": "Bij groepen werken wij met een 3-, 4- of 5-gangen groepsmenu. Gangen met keuze en dieetwensen stemmen we vooraf af, zodat de bediening op de avond zelf soepel loopt."
    },
    {
      "q": "Kan er tijdens het diner een presentatie of speech gehouden worden?",
      "a": "Ja. Geluid en een microfoon zijn beschikbaar en bij (semi-)exclusieve afhuur kan er ook een scherm of podiumopstelling geregeld worden. De live muziek pauzeert desgewenst."
    },
    {
      "q": "Wat kost een bedrijfsdiner bij Pompstation?",
      "a": "Dat hangt af van het aantal gangen, de dranken en de groepsgrootte. Vraag via het offerteformulier een voorstel op maat aan; onze eventmanager reageert meestal binnen één werkdag."
    }
  ],
  "related": [
    {
      "label": "Alles over het bedrijfsdiner",
      "href": "bedrijfsdiner.html"
    },
    {
      "label": "Groepsdiner in Amsterdam",
      "href": "groepsdiner-amsterdam.html"
    },
    {
      "label": "Bedrijfsfeest in Amsterdam",
      "href": "bedrijfsfeest-amsterdam.html"
    }
  ],
  "ctaLead": "Vertel ons de datum, het aantal gasten en uw wensen — u ontvangt een voorstel op maat voor uw bedrijfsdiner."
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
