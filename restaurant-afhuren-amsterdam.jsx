const SEO_CFG = {
  "kicker": "Afhuren in Amsterdam · Exclusief",
  "title": "Restaurant afhuren",
  "titleAccent": "in Amsterdam",
  "lead": "Een volledig restaurant exclusief afhuren in Amsterdam: de monumentale machinehal van Pompstation, voor events van 60 tot 360 personen.",
  "image": "images/restaurant-zaal.jpg",
  "position": "center 45%",
  "details": [{"k":"Capaciteit","v":"60–360 gasten"},{"k":"Locatie","v":"Volledig exclusief"},{"k":"Formaat","v":"Borrel, diner of feest"},{"k":"Muziek","v":"Podium & eigen geluidsinstallatie"},{"k":"Eindtijd","v":"Tot 03:00 in het weekend"},{"k":"Event manager","v":"Vaste begeleiding"}],
  "photos": [{"src":"images/event-fullhall.jpg","alt":"Volledig afgehuurde zaal van Pompstation Amsterdam"},{"src":"images/restaurant-service.jpg","alt":"Bediening tijdens een exclusief event bij Pompstation"}],
  "cta1Label": "Brochure downloaden",
  "cta1Href": "/groepen#brochure",
  "cta2Label": "Offerte aanvragen",
  "cta2Href": "/offerte",
  "introSerif": "Een restaurant afhuren in Amsterdam voor een event, jubileum of productlancering? Pompstation is semi-exclusief en volledig exclusief af te huren.",
  "introBody": "Het voormalige waterpompstation uit 1912 aan de Zeeburgerdijk in Amsterdam-Oost biedt twee opties: de vide — een eigen verdieping met eigen bar voor 20 tot 100 personen — of de volledige machinehal, exclusief voor uw gezelschap tot 360 gasten. Keuken, bar, techniek en eventmanager zijn inbegrepen in de organisatie.",
  "usps": [
    {
      "n": "01",
      "t": "Volledig exclusief",
      "d": "De hele monumentale hal voor uw event: diner, feest, congres of lancering tot 360 personen."
    },
    {
      "n": "02",
      "t": "Semi-exclusief",
      "d": "De vide met eigen bar voor 20 tot 100 gasten, met de dynamiek van het restaurant beneden."
    },
    {
      "n": "03",
      "t": "Techniek & podium",
      "d": "Licht, geluid, microfoon en podiumopstelling voor presentaties, sprekers of live muziek."
    }
  ],
  "sections": [
    {
      "kicker": "Het pand",
      "title": "Een machinehal uit 1912",
      "paras": [
        "Pompstation is gevestigd in een voormalig waterpompstation uit 1912, gebouwd in de stijl van de Amsterdamse School. De machinehal — twaalf meter hoog, staal en baksteen — is een van de meest karakteristieke eventlocaties van Amsterdam en heeft nauwelijks aankleding nodig.",
        "De ligging in Amsterdam-Oost maakt het pand goed bereikbaar: tram 14, 19 en 25 stoppen voor de deur, de ring A10 ligt op enkele minuten en aankomst per boot is mogelijk."
      ],
      "image": "images/historic-1912.jpg",
      "alt": "Het monumentale waterpompstation uit 1912, nu Restaurant Pompstation Amsterdam",
      "caption": "Monument uit 1912 · Amsterdamse School"
    },
    {
      "kicker": "De mogelijkheden",
      "title": "Van productlancering tot jubileum",
      "paras": [
        "Bedrijven huren Pompstation af voor productlanceringen, jubilea, congressen, awardshows, kerstborrels en personeelsfeesten; particulieren voor bruiloften, verjaardagen en familiediners. Opstellingen variëren van theater en congres tot sit-down diner en staand feest.",
        "De keuken verzorgt alles op houtskoolvuur — van walking dinner tot vijfgangenmenu — en onze eventmanager stelt met u het complete draaiboek samen, inclusief muziek, techniek en vervoer."
      ],
      "image": "images/event-fullhall.jpg",
      "alt": "Volledig afgehuurde zaal tijdens een event bij Pompstation Amsterdam",
      "caption": "Volledige afhuur · tot 360 personen"
    }
  ],
  "faqTitle": "Over het afhuren van Pompstation",
  "faq": [
    {
      "q": "Welke events zijn mogelijk bij volledige afhuur?",
      "a": "Vrijwel alles: bedrijfsfeesten, congressen, productlanceringen, awardshows, jubilea, kerstborrels, bruiloften en grote familiediners. Opstelling, techniek en programma stemmen wij af op uw event."
    },
    {
      "q": "Wat is de capaciteit per opstelling?",
      "a": "Staand ontvangen wij tot 360 gasten. Voor sit-down diners, theateropstellingen en combinaties van diner en feest gelden andere aantallen — onze eventmanager adviseert per opstelling."
    },
    {
      "q": "Moet de catering via de eigen keuken lopen?",
      "a": "Ja, eten en drinken komen uit eigen keuken en bar — van borrelarrangement tot vijfgangenmenu van de houtskoolgrill. Dat garandeert kwaliteit en houdt de organisatie eenvoudig."
    },
    {
      "q": "Wat kost het afhuren van Pompstation?",
      "a": "De prijs hangt af van dag, duur, aantal gasten en arrangement. Vraag via het offerteformulier een voorstel op maat aan of download de brochure; reactie volgt meestal binnen één werkdag."
    }
  ],
  "related": [
    {
      "label": "Alles over afhuren & groepen",
      "href": "groepen.html"
    },
    {
      "label": "Bedrijfsfeest in Amsterdam",
      "href": "bedrijfsfeest-amsterdam.html"
    },
    {
      "label": "Trouwlocatie in Amsterdam",
      "href": "trouwlocatie-amsterdam.html"
    }
  ],
  "ctaLead": "Vertel ons de datum, het aantal gasten en het type event — u ontvangt een voorstel op maat voor uw afhuur."
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
