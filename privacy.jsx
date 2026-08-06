function PompstationPrivacy(props) { return <PompstationPrivacyClass {...props} />; }
class PompstationPrivacyClass extends React.Component {
  renderVals() {
      return { cfg: {
        kicker: 'Jouw gegevens',
        title: 'Privacyverklaring',
        intro: 'We gaan zorgvuldig om met je persoonsgegevens. In deze verklaring lees je welke gegevens we verzamelen, waarom, en welke rechten je hebt.',
        disclaimer: 'Voorbeeldtekst — laat de definitieve privacyverklaring juridisch controleren voordat de site live gaat.',
        sections: [
          { h: 'Wie wij zijn', body: 'Restaurant Pompstation (Zeeburgerdijk 52, 1094 AE Amsterdam) is verwerkingsverantwoordelijke voor de verwerking van persoonsgegevens zoals beschreven in deze verklaring. Wij verwerken gegevens in overeenstemming met de Algemene Verordening Gegevensbescherming (AVG).' },
          { h: 'Welke gegevens we verwerken', body: 'Naam en contactgegevens, details van je reservering of evenement, betaalgegevens (verwerkt via onze betaalprovider) en alle informatie die je achterlaat via onze formulieren, e-mail of telefonisch contact.' },
          { h: 'Doeleinden & grondslag', body: 'We gebruiken je gegevens om reserveringen en events af te handelen, te factureren, contact met je op te nemen en onze dienstverlening te verbeteren. De grondslag is de uitvoering van de overeenkomst, een wettelijke verplichting of jouw toestemming.' },
          { h: 'Bewaartermijnen', body: 'We bewaren je gegevens niet langer dan nodig voor de genoemde doeleinden. Financiële en administratieve gegevens bewaren we conform de wettelijke bewaarplicht van zeven jaar.' },
          { h: 'Delen met derden', body: 'We delen gegevens uitsluitend met partijen die ons helpen onze diensten te leveren — zoals ons reserveringssysteem, onze betaalprovider en IT-leveranciers — met passende verwerkersafspraken. Wij verkopen je gegevens nooit aan derden.' },
          { h: 'Cookies', body: 'Onze website gebruikt functionele cookies om de site te laten werken en analytische cookies om het gebruik te meten. Je kunt cookies altijd beheren of verwijderen via de instellingen van je browser.' },
          { h: 'Jouw rechten', body: 'Je hebt het recht op inzage, correctie, verwijdering, beperking van en bezwaar tegen de verwerking van je gegevens, en op gegevensoverdraagbaarheid. Stuur je verzoek naar info@pompstation.nu; we reageren binnen de wettelijke termijn.' },
          { h: 'Beveiliging', body: 'We nemen passende technische en organisatorische maatregelen om je persoonsgegevens te beschermen tegen verlies of onrechtmatige verwerking.' },
          { h: 'Vragen of een klacht', body: 'Heb je vragen over deze verklaring, mail dan info@pompstation.nu. Je hebt ook het recht om een klacht in te dienen bij de Autoriteit Persoonsgegevens.' },
        ],
      }};
    }
  render() {
    const V = this.renderVals ? this.renderVals() : {};
    return (
      <div style={{ fontFamily: "'DM Sans',system-ui,sans-serif", color: "#2A2A2A", overflowX: "hidden" }}>
        <PSNav solid="true" />
        {' '}
        <PSLegal config={V.cfg} />
        {' '}
        <PSFooter />
      </div>
    );
  }
}

const __root = document.getElementById('root');
if (__root) ReactDOM.createRoot(__root).render(<PompstationPrivacy />);
