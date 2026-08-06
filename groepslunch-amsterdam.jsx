const SEO_CFG = {
  "kicker": "Afhuren in Amsterdam · Groepslunch",
  "title": "Groepslunch",
  "titleAccent": "in Amsterdam",
  "lead": "Lunchen met een groep in Amsterdam-Oost: binnen in de monumentale hal of buiten op het terras in de binnentuin.",
  "image": "images/terras-groep.jpg",
  "position": "center 45%",
  "details": [{"k":"Capaciteit","v":"10–80 gasten"},{"k":"Locatie","v":"Restaurant of terras"},{"k":"Tijdstip","v":"12:00–16:00"},{"k":"Menu","v":"Lunch op aanvraag · seizoensgebonden"},{"k":"Wijnarrangement","v":"Mogelijk bij de lunch"},{"k":"Terras","v":"Beschikbaar bij mooi weer"}],
  "photos": [{"src":"images/terras-lunch.jpg","alt":"Groepslunch op het terras van Pompstation Amsterdam"},{"src":"images/food-burrata.jpg","alt":"Burrata van de lunchkaart van Pompstation"}],
  "cta1Label": "Brochure downloaden",
  "cta1Href": "/groepslunch#brochure",
  "cta2Label": "Offerte aanvragen",
  "cta2Href": "/offerte",
  "introSerif": "Een groepslunch in Amsterdam plannen? Voor groepen opent Pompstation ook overdag de deuren — voor een zakelijke lunch, familielunch of teamuitje.",
  "introBody": "Pompstation is 's avonds geopend, maar voor groepen vanaf 10 personen serveren wij op aanvraag ook lunch — op elke dag van de week. U luncht in de monumentale machinehal uit 1912 aan de Zeeburgerdijk, of bij mooi weer op het terras in de binnentuin. Tot 360 personen, geheel naar wens.",
  "usps": [
    {
      "n": "01",
      "t": "Lunch op aanvraag",
      "d": "Ook buiten de reguliere openingstijden en op andere dagen — de zaal gaat voor uw groep open."
    },
    {
      "n": "02",
      "t": "Binnen of buiten",
      "d": "In de hal onder twaalf meter plafond, of op het reserveerbare terras in de binnentuin."
    },
    {
      "n": "03",
      "t": "Combineer met een vaartocht",
      "d": "De aanlegplaats ligt op vijf minuten lopen — lunch en boottocht zijn goed te combineren."
    }
  ],
  "sections": [
    {
      "kicker": "De lunch",
      "title": "Vers van de houtskoolgrill",
      "paras": [
        "Ook tijdens de lunch kookt de keuken op houtskoolvuur: gegrilde vis, salades, carpaccio en steaks, aangevuld met vegetarische gerechten. U kiest voor een geserveerde lunch in gangen of een informelere gedeelde tafel.",
        "Dieetwensen geeft u vooraf door; de keuken stemt het lunchmenu af op uw groep en het moment van de dag."
      ],
      "image": "images/food-fish.jpg",
      "alt": "Vers gegrilde vis tijdens een groepslunch bij Pompstation Amsterdam",
      "caption": "Van de houtskoolgrill · ook tijdens lunch"
    },
    {
      "kicker": "Het uitje",
      "title": "Lunch als onderdeel van uw dag",
      "paras": [
        "Een groepslunch bij Pompstation is goed in een programma te passen: begin met een vergadering of heidag op de vide, lunch in de zaal of op het terras, en sluit af met een borrel of vaartocht over het water.",
        "Onze eventmanager stemt de tijden af op uw draaiboek en regelt in overleg ook groepsvervoer per bus of aankomst per boot."
      ],
      "image": "images/terras-diner.jpg",
      "alt": "Groepslunch op het terras in de binnentuin van Pompstation Amsterdam",
      "caption": "Terras in de binnentuin · reserveerbaar"
    }
  ],
  "faqTitle": "Over uw groepslunch",
  "faq": [
    {
      "q": "Kan een groepslunch op elke dag van de week?",
      "a": "Ja, op aanvraag. Hoewel het restaurant 's avonds geopend is, openen wij voor groepen vanaf 10 personen ook overdag en op andere dagen — afgestemd op uw programma."
    },
    {
      "q": "Voor hoeveel personen is een groepslunch mogelijk?",
      "a": "Vanaf 10 personen tot volledige afhuur voor 360 gasten. De vide met eigen bar is geschikt voor 20 tot 100 personen, het terras in de binnentuin is bij mooi weer een populaire keuze."
    },
    {
      "q": "Kunnen we op het terras lunchen?",
      "a": "Ja. Het terras in de binnentuin is vooraf te reserveren, ook voor groepen — uniek in Amsterdam. Bij slecht weer wijken we in overleg uit naar binnen."
    },
    {
      "q": "Hoe combineren we de lunch met vervoer of een boottocht?",
      "a": "De aanlegplaats ligt op circa vijf minuten lopen; er zijn arrangementen die lunch en vaartocht combineren. Ook groepsvervoer per bus regelen wij in overleg."
    }
  ],
  "related": [
    {
      "label": "Alles over de groepslunch",
      "href": "groepslunch.html"
    },
    {
      "label": "Vergaderlocatie in Amsterdam",
      "href": "vergaderlocatie-amsterdam.html"
    },
    {
      "label": "Groepsdiner in Amsterdam",
      "href": "groepsdiner-amsterdam.html"
    }
  ],
  "ctaLead": "Vertel ons de datum, de groepsgrootte en uw programma — u ontvangt een voorstel op maat voor uw groepslunch."
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
