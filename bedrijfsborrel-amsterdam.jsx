const SEO_CFG = {
  "kicker": "Afhuren in Amsterdam · Bedrijfsborrel",
  "title": "Bedrijfsborrel",
  "titleAccent": "in Amsterdam",
  "lead": "Borrelen met het team in Amsterdam-Oost: op het terras in de binnentuin, aan de bar of op een eigen verdieping met eigen bar.",
  "image": "images/terras-borrelen.jpg",
  "position": "center 45%",
  "details": [{"k":"Capaciteit","v":"60–360 gasten"},{"k":"Ruimte","v":"Vide, restaurant of terras"},{"k":"Drank","v":"Unlimited arrangementen beschikbaar"},{"k":"Hapjes","v":"Walking dinner optioneel"},{"k":"Bar","v":"Eigen bar & signature cocktails"},{"k":"Eindtijd","v":"Tot 03:00 in het weekend"}],
  "photos": [{"src":"images/terras-borrelen.jpg","alt":"Bedrijfsborrel op het terras van Pompstation Amsterdam"},{"src":"images/restaurant-bar.jpg","alt":"De bar van Pompstation in Amsterdam-Oost"}],
  "cta1Label": "Brochure downloaden",
  "cta1Href": "/bedrijfsborrel#brochure",
  "cta2Label": "Offerte aanvragen",
  "cta2Href": "/offerte",
  "introSerif": "Een bedrijfsborrel in Amsterdam plannen? Bij Pompstation borrelt u in een industrieel monument uit 1912, met live muziek op de achtergrond en bites van de houtskoolgrill.",
  "introBody": "Van een vrijdagmiddagborrel met 20 collega's tot een bedrijfsborrel voor 360 personen: Pompstation aan de Zeeburgerdijk in Amsterdam-Oost heeft de ruimte. Reserveer de vide met eigen bar, een deel van het terras in de binnentuin, of huur de volledige zaal exclusief af.",
  "usps": [
    {
      "n": "01",
      "t": "Terras in de binnentuin",
      "d": "Een groot, zonnig terras dat — uniek in Amsterdam — vooraf te reserveren is, ook voor groepen."
    },
    {
      "n": "02",
      "t": "Eigen bar op de vide",
      "d": "Voor borrels van 20 tot 100 personen, met zicht op het restaurant en de live muziek beneden."
    },
    {
      "n": "03",
      "t": "Borrelarrangementen",
      "d": "Bittergarnituur van niveau: oesters, carpaccio, gegrilde gamba's en cocktails van eigen kaart."
    }
  ],
  "sections": [
    {
      "kicker": "Het terras",
      "title": "Borrelen in de binnentuin",
      "paras": [
        "Bij mooi weer is het terras in de binnentuin dé plek voor een bedrijfsborrel in Amsterdam. Het terras ligt beschut, vangt de middag- en avondzon en is vooraf te reserveren — ook voor grotere gezelschappen, wat in de stad een zeldzaamheid is.",
        "Een terrasborrel is goed te combineren met een diner erna: begin buiten met cocktails en oesters en schuif daarna aan tafel in het restaurant of op de vide."
      ],
      "image": "images/terras-champagne.jpg",
      "alt": "Bedrijfsborrel met champagne op het terras van Pompstation Amsterdam",
      "caption": "Terras in de binnentuin · reserveerbaar"
    },
    {
      "kicker": "Binnen borrelen",
      "title": "Van vide tot volledige zaal",
      "paras": [
        "Binnen borrelt u onder een plafond van twaalf meter, tussen staal en baksteen. De vide is voor 20 tot 100 personen af te huren en heeft een eigen bar; wie groter denkt, huurt de volledige machinehal exclusief af — staand tot 360 gasten.",
        "Op donderdag-, vrijdag- en zaterdagavond klinkt er live jazz en soul op de achtergrond. Barteam en keuken verzorgen borrelarrangementen op maat, van bittergarnituur tot walking dinner."
      ],
      "image": "images/cocktail.jpg",
      "alt": "Cocktails tijdens een bedrijfsborrel bij Pompstation Amsterdam",
      "caption": "Cocktails van eigen kaart"
    }
  ],
  "faqTitle": "Over uw bedrijfsborrel",
  "faq": [
    {
      "q": "Voor hoeveel personen kan ik een bedrijfsborrel boeken?",
      "a": "Vanaf circa 10 personen reserveert u via het aanvraagformulier. De vide met eigen bar is geschikt voor 20 tot 100 personen; bij volledige afhuur ontvangen wij staand tot 360 gasten."
    },
    {
      "q": "Kan de borrel overgaan in een diner?",
      "a": "Ja, dat gebeurt vaak. Begin met een borrel op het terras of de vide en schuif daarna aan voor een groepsdiner met een 3-, 4- of 5-gangenmenu van de houtskoolgrill."
    },
    {
      "q": "Wat wordt er geschonken en geserveerd?",
      "a": "Naast tap, wijn en frisdrank hebben wij een eigen cocktailkaart met huisgemaakte siropen. Borrelarrangementen variëren van bittergarnituur tot oesters, carpaccio en gegrilde gamba's."
    },
    {
      "q": "Is het terras ook voor groepen te reserveren?",
      "a": "Ja. Een terrastafel of terrasdeel voor een groep boekt u vooraf via mail of telefoon — uniek in Amsterdam. Bij slecht weer wijken we in overleg uit naar binnen."
    }
  ],
  "related": [
    {
      "label": "Alles over de bedrijfsborrel",
      "href": "bedrijfsborrel.html"
    },
    {
      "label": "Bedrijfsfeest in Amsterdam",
      "href": "bedrijfsfeest-amsterdam.html"
    },
    {
      "label": "Groepsdiner in Amsterdam",
      "href": "groepsdiner-amsterdam.html"
    }
  ],
  "ctaLead": "Vertel ons de datum, het aantal collega's en uw wensen — u ontvangt een voorstel op maat voor uw borrel."
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
