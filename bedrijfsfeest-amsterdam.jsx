const SEO_CFG = {
  "kicker": "Afhuren in Amsterdam · Bedrijfsfeest",
  "title": "Bedrijfsfeest",
  "titleAccent": "in Amsterdam",
  "lead": "Een feestlocatie in een industrieel monument uit 1912: ruimte voor 60 tot 360 collega's, live muziek en een keuken op houtskoolvuur.",
  "image": "images/event-staand.jpg",
  "position": "center 40%",
  "details": [{"k":"Capaciteit","v":"60–360 gasten"},{"k":"Formaat","v":"Borrel, diner of walking dinner"},{"k":"Ruimte","v":"Vide, exclusief of terras"},{"k":"Muziek","v":"Podium & eigen geluidsinstallatie"},{"k":"Eindtijd","v":"Tot 03:00 in het weekend"},{"k":"Event manager","v":"Vaste begeleiding"}],
  "photos": [{"src":"images/live-band-vide.jpg","alt":"Live band tijdens een bedrijfsfeest bij Pompstation Amsterdam"},{"src":"images/cocktail.jpg","alt":"Signature cocktail van de bar van Pompstation"}],
  "cta1Label": "Brochure downloaden",
  "cta1Href": "/bedrijfsfeest#brochure",
  "cta2Label": "Offerte aanvragen",
  "cta2Href": "/offerte",
  "introSerif": "Op zoek naar een locatie voor uw bedrijfsfeest in Amsterdam? Bar Restaurant Pompstation combineert een monumentale machinehal met live muziek, cocktails en eten van de houtskoolgrill.",
  "introBody": "Pompstation is gevestigd in een voormalig waterpompstation uit 1912 aan de Zeeburgerdijk in Amsterdam-Oost. De hoge industriële zaal met een plafond van twaalf meter biedt plaats aan bedrijfsfeesten van 60 tot 360 personen — van een borrel met DJ tot een volledig verzorgd personeelsfeest met walking dinner, live band en dansvloer.",
  "usps": [
    {
      "n": "01",
      "t": "Tot 360 gasten",
      "d": "Van een teamborrel op de vide met eigen bar tot een volledig exclusief bedrijfsfeest in de gehele zaal."
    },
    {
      "n": "02",
      "t": "Live muziek & DJ",
      "d": "Vaste live-acts van jazz tot soul of uw eigen DJ — de akoestiek van de hoge hal staat bekend als uitstekend."
    },
    {
      "n": "03",
      "t": "Borrelen, dineren & feesten",
      "d": "Walking dinner, buffet of borrelarrangement, vers bereid op houtskoolvuur, met cocktails van eigen kaart."
    }
  ],
  "sections": [
    {
      "kicker": "De locatie",
      "title": "Feesten in een monument uit 1912",
      "paras": [
        "De monumentale machinehal van het voormalige waterpompstation is een van de meest bijzondere feestlocaties van Amsterdam. Het industriële karakter — staal, baksteen en een plafond van twaalf meter hoog — geeft elk bedrijfsfeest direct sfeer, zonder dat er veel aankleding nodig is.",
        "Voor feesten van 20 tot 100 personen is de vide af te huren: een eigen verdieping met eigen bar en zicht op het restaurant. Grotere gezelschappen huren de volledige zaal exclusief af, met opstellingen van staand feest tot sit-down diner met aansluitend dansfeest."
      ],
      "image": "images/event-fullhall.jpg",
      "alt": "Bedrijfsfeest in de volledige zaal van Pompstation Amsterdam",
      "caption": "De machinehal · tot 360 personen"
    },
    {
      "kicker": "Muziek & programma",
      "title": "Live band, DJ of eigen programma",
      "paras": [
        "Pompstation staat bekend om zijn live muziek: op donderdag-, vrijdag- en zaterdagavond spelen artiesten van onder andere het Conservatorium van Amsterdam. Voor uw bedrijfsfeest stellen wij in overleg een muzikaal programma samen — een jazzband tijdens het diner, een DJ voor de dansvloer, of beide.",
        "Ook sprekers, presentaties of een awarduitreiking zijn mogelijk: geluid, licht en een podiumopstelling zijn beschikbaar. Onze eventmanager denkt mee over de complete invulling van de avond."
      ],
      "image": "images/dj-vinyl.jpg",
      "alt": "DJ tijdens een bedrijfsfeest bij Pompstation Amsterdam",
      "caption": "Live muziek of DJ · in overleg"
    }
  ],
  "faqTitle": "Over uw bedrijfsfeest",
  "faq": [
    {
      "q": "Hoeveel personen passen er bij een bedrijfsfeest in Pompstation?",
      "a": "De vide biedt plaats aan 20 tot 100 personen en heeft een eigen bar. Bij volledige afhuur ontvangen wij staand tot 360 gasten; voor een sit-down diner met aansluitend feest zijn verschillende opstellingen mogelijk."
    },
    {
      "q": "Kan er gedanst worden en tot hoe laat duurt een feest?",
      "a": "Ja. In het weekend kan het feest doorgaan tot 03:00 uur; voor besloten bedrijfsfeesten zijn in overleg afwijkende dagen en tijden mogelijk. Een DJ of live band regelen wij desgewenst voor u."
    },
    {
      "q": "Wat kost een bedrijfsfeest bij Pompstation?",
      "a": "De prijs hangt af van het aantal gasten, de dag en het arrangement — borrel, walking dinner of sit-down diner. Vraag via het offerteformulier een voorstel op maat aan; onze eventmanager neemt meestal binnen één werkdag contact op."
    },
    {
      "q": "Is Pompstation goed bereikbaar voor een groep collega's?",
      "a": "Ja. Tram 14, 19 en 25 stoppen voor de deur bij halte Zeeburgerdijk en de ring A10 ligt op enkele minuten rijden. Groepsvervoer per bus of aankomst per boot is in overleg mogelijk."
    }
  ],
  "related": [
    {
      "label": "Alles over het bedrijfsfeest",
      "href": "bedrijfsfeest.html"
    },
    {
      "label": "Bedrijfsborrel in Amsterdam",
      "href": "bedrijfsborrel-amsterdam.html"
    },
    {
      "label": "Restaurant afhuren in Amsterdam",
      "href": "restaurant-afhuren-amsterdam.html"
    }
  ],
  "ctaLead": "Vertel ons de datum, het aantal gasten en uw wensen — u ontvangt een voorstel op maat voor uw bedrijfsfeest."
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
