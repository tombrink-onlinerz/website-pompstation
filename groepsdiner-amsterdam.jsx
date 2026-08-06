const SEO_CFG = {
  "kicker": "Afhuren in Amsterdam · Groepsdiner",
  "title": "Groepsdiner",
  "titleAccent": "in Amsterdam",
  "lead": "Uit eten met een grote groep: lange tafels onder een twaalf meter hoog plafond, groepsmenu's van de houtskoolgrill en live muziek.",
  "image": "images/groepsdiner-overhead.jpg",
  "position": "center 50%",
  "details": [{"k":"Capaciteit","v":"10–180 gasten"},{"k":"Menu","v":"3 · 4 · 5 gangen"},{"k":"Keuze","v":"Vlees, vis of vega per gang"},{"k":"Wijnarrangement","v":"Add-on · vooraf te boeken"},{"k":"Live muziek","v":"Donderdag t/m zaterdag"},{"k":"Reserveren","v":"Minimaal 3 werkdagen vooruit"}],
  "photos": [{"src":"images/service-candles.jpg","alt":"Gedekte tafel bij kaarslicht voor een groepsdiner bij Pompstation"},{"src":"images/food-tartare.jpg","alt":"Gerecht van de kaart van Pompstation Amsterdam"}],
  "cta1Label": "Brochure downloaden",
  "cta1Href": "/groepsdiner#brochure",
  "cta2Label": "Offerte aanvragen",
  "cta2Href": "/offerte",
  "introSerif": "Een groepsdiner in Amsterdam boeken? Bij Pompstation dineert uw gezelschap vanaf 10 personen aan lange tafels in een voormalig waterpompstation uit 1912.",
  "introBody": "Vriendengroepen, families, sportteams en verenigingen vinden aan de Zeeburgerdijk in Amsterdam-Oost een tafel die past: in het restaurant tussen de andere gasten, semi-exclusief op de vide met eigen bar, of — voor de grootste gezelschappen — in de volledig afgehuurde zaal tot 360 personen.",
  "usps": [
    {
      "n": "01",
      "t": "Vanaf 10 personen",
      "d": "Groepen vanaf 10 personen reserveren via het aanvraagformulier of telefonisch — ook op korte termijn."
    },
    {
      "n": "02",
      "t": "Groepsmenu's",
      "d": "Drie, vier of vijf gangen van de houtskoolgrill, wisselend met het seizoen, inclusief vegetarisch menu."
    },
    {
      "n": "03",
      "t": "Sfeer inbegrepen",
      "d": "Kaarslicht, een twaalf meter hoge hal en live jazz en soul op donderdag tot en met zaterdag."
    }
  ],
  "sections": [
    {
      "kicker": "Aan tafel",
      "title": "Groepsmenu van de houtskoolgrill",
      "paras": [
        "Voor groepen serveren wij een 3-, 4- of 5-gangenmenu dat met het seizoen wisselt: premium steaks van de houtskoolgrill, verse vis, oesters en gegrilde groenten. Ook met een vegetarisch of veganistisch gezelschap zit u goed — de keuken voert een volwaardige eigen lijn.",
        "Dieetwensen en allergieën geeft u vooraf door. Zo loopt de bediening vlot en hoeft niemand aan tafel te wachten."
      ],
      "image": "images/restaurant-zaal.jpg",
      "alt": "Lange gedekte tafels voor een groepsdiner bij Pompstation Amsterdam",
      "caption": "Lange tafels · groepsmenu in 3, 4 of 5 gangen"
    },
    {
      "kicker": "De ruimte",
      "title": "Van lange tafel tot eigen verdieping",
      "paras": [
        "Kleinere groepen dineren gewoon in het restaurant, aan een lange tafel tussen de andere gasten — met de live muziek erbij. Wie meer privacy zoekt, reserveert de vide: een eigen verdieping met eigen bar voor 20 tot 100 personen.",
        "Iets te vieren? Combineer het diner met een borrel vooraf op het terras in de binnentuin, of laat de avond uitlopen in een feest. Onze eventmanager denkt mee."
      ],
      "image": "images/service-candles.jpg",
      "alt": "Diner bij kaarslicht in Pompstation Amsterdam",
      "caption": "Kaarslicht en live muziek · do t/m za"
    }
  ],
  "faqTitle": "Over uw groepsdiner",
  "faq": [
    {
      "q": "Vanaf hoeveel personen is het een groepsdiner?",
      "a": "Vanaf 10 personen werken wij met het groepsmenu en reserveert u via het aanvraagformulier of telefonisch via 020 227 9885. Kleinere tafels boekt u gewoon online."
    },
    {
      "q": "Kunnen we het menu vooraf afstemmen?",
      "a": "Ja. U kiest vooraf voor drie, vier of vijf gangen en geeft dieetwensen en allergieën door. De keuken past het menu per gast aan, inclusief vegetarische en veganistische opties."
    },
    {
      "q": "Kunnen we iets extra's doen voor een verjaardag of jubileum?",
      "a": "Zeker. Denk aan een borrel vooraf op het terras, een taartmoment, bloemen op tafel of een muzikale verrassing. Bespreek uw wensen met onze eventmanager."
    },
    {
      "q": "Is Pompstation goed bereikbaar met een grote groep?",
      "a": "Ja. Tram 14, 19 en 25 stoppen voor de deur, de A10 ligt op enkele minuten en parkeren kan in de omliggende straten of garages. Groepsvervoer per bus of aankomst per boot is in overleg mogelijk."
    }
  ],
  "related": [
    {
      "label": "Alles over het groepsdiner",
      "href": "groepsdiner.html"
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
  "ctaLead": "Vertel ons de datum, de groepsgrootte en uw wensen — u ontvangt een voorstel op maat voor uw groepsdiner."
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
