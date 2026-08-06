const SEO_CFG = {
  "kicker": "Afhuren in Amsterdam · Bruiloft",
  "title": "Trouwlocatie",
  "titleAccent": "in Amsterdam",
  "lead": "Trouwen in een monument uit 1912: een ceremonie onder twaalf meter plafond, diner van de houtskoolgrill en een feest tot in de kleine uurtjes.",
  "image": "images/bride.jpg",
  "position": "center 30%",
  "details": [{"k":"Capaciteit","v":"60–360 gasten"},{"k":"Locatie","v":"Volledig exclusief"},{"k":"Ceremonie","v":"Op de vide · tot 200 pers."},{"k":"Diner","v":"Sit-down of walking dinner"},{"k":"Feest","v":"DJ-set of live band · tot 03:00"},{"k":"Trouwlocatie","v":"Officieel erkend · gemeente Amsterdam"}],
  "photos": [{"src":"images/bride-vide.jpg","alt":"Bruid op de vide van trouwlocatie Pompstation Amsterdam"},{"src":"images/bride-boat.jpg","alt":"Aankomst per boot bij trouwlocatie Pompstation"}],
  "cta1Label": "Brochure downloaden",
  "cta1Href": "/bruiloft#brochure",
  "cta2Label": "Offerte aanvragen",
  "cta2Href": "/offerte",
  "introSerif": "Een trouwlocatie in Amsterdam zoeken? Pompstation in Amsterdam-Oost biedt ruimte voor ceremonie, diner en feest — alles op één adres.",
  "introBody": "Het voormalige waterpompstation aan de Zeeburgerdijk is een van de meest karakteristieke trouwlocaties van Amsterdam. U viert intiem op de vide met 20 tot 100 gasten, of huurt de volledige machinehal exclusief af voor een bruiloft tot 360 personen — inclusief live muziek, dansvloer en keuken op houtskoolvuur.",
  "usps": [
    {
      "n": "01",
      "t": "Ceremonie, diner & feest",
      "d": "De hele trouwdag op één adres — geen verplaatsingen tussen locatie, restaurant en feestzaal."
    },
    {
      "n": "02",
      "t": "60 tot 360 gasten",
      "d": "Intiem op de vide met eigen bar, of de volledige monumentale hal exclusief voor uw bruiloft."
    },
    {
      "n": "03",
      "t": "Eigen draaiboek",
      "d": "Onze eventmanager begeleidt van eerste rondleiding tot laatste dans; de wedding brochure zet alles op een rij."
    }
  ],
  "sections": [
    {
      "kicker": "De dag",
      "title": "Van ja-woord tot dansvloer",
      "paras": [
        "De monumentale hal met twaalf meter hoog plafond, staal en baksteen vormt een indrukwekkend decor voor uw ceremonie — grote aankleding is niet nodig, het pand doet het werk. Na het ja-woord schuift uw gezelschap door naar de borrel op het terras in de binnentuin.",
        "Het diner en feest volgen in dezelfde zaal: een bruiloftsdiner aan lange tafels, gevolgd door een feest met live band of DJ. De akoestiek van de hal staat bekend als uitstekend."
      ],
      "image": "images/bride-vide.jpg",
      "alt": "Bruid op de vide van trouwlocatie Pompstation Amsterdam",
      "caption": "De vide · intiem trouwen met 20–100 gasten"
    },
    {
      "kicker": "Het diner",
      "title": "Bruiloftsdiner van de houtskoolgrill",
      "paras": [
        "Chef Allessandro en zijn team verzorgen het bruiloftsdiner: een menu in drie, vier of vijf gangen van de houtskoolgrill, met verse vis, premium steaks en een volwaardige vegetarische lijn. Ook een walking dinner of buffet behoort tot de mogelijkheden.",
        "Wijnen, cocktails en het gebak stemmen wij vooraf met u af. Dieetwensen van gasten geeft u door; de keuken past het menu per couvert aan."
      ],
      "image": "images/events-bride.jpg",
      "alt": "Bruidspaar tijdens het diner bij Pompstation Amsterdam",
      "caption": "Bruiloftsdiner · 3, 4 of 5 gangen"
    }
  ],
  "faqTitle": "Over trouwen bij Pompstation",
  "faq": [
    {
      "q": "Kunnen ceremonie, diner en feest allemaal bij Pompstation?",
      "a": "Ja, dat is juist de kracht van de locatie: ceremonie in de hal of op de vide, borrel op het terras in de binnentuin, diner aan lange tafels en feest met band of DJ — zonder verplaatsingen."
    },
    {
      "q": "Hoeveel gasten kunnen wij uitnodigen?",
      "a": "Intieme bruiloften vieren op de vide met 20 tot 100 gasten. Bij exclusieve afhuur van de volledige zaal ontvangt u tot 360 gasten voor het feest."
    },
    {
      "q": "Mogen we eigen leveranciers meenemen, zoals een band of fotograaf?",
      "a": "Ja. Fotograaf, videograaf, band, DJ of ceremoniemeester zijn welkom; techniek en tijden stemmen wij vooraf af. Voor muziek hebben wij ook een eigen netwerk van live-acts."
    },
    {
      "q": "Wat kost trouwen bij Pompstation?",
      "a": "Dat hangt af van het aantal gasten, de dag en de invulling. Vraag de wedding brochure aan of doe een offerteaanvraag — onze eventmanager plant graag een rondleiding en maakt een voorstel op maat."
    }
  ],
  "related": [
    {
      "label": "Alles over uw bruiloft",
      "href": "bruiloft.html"
    },
    {
      "label": "Wedding brochure aanvragen",
      "href": "brochure-wedding.html"
    },
    {
      "label": "Restaurant afhuren in Amsterdam",
      "href": "restaurant-afhuren-amsterdam.html"
    }
  ],
  "ctaLead": "Vertel ons de datum, het aantal gasten en uw wensen — u ontvangt een voorstel op maat voor uw trouwdag."
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
