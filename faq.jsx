function PompstationFaq(props) { return <PompstationFaqClass {...props} />; }
class PompstationFaqClass extends React.Component {
  render() {
    return (
      <div style={{ fontFamily: "'DM Sans',system-ui,sans-serif", color: "#2A2A2A", overflowX: "clip" }}>
        <PSNav current="faq" />
        {' '}
        <PSHero kicker="Veelgestelde vragen" title="Alles wat u wilt" titleAccent="weten." lead="Over live muziek, het terras, groepen, parkeren en reserveren bij Bar Restaurant Pompstation aan de Zeeburgerdijk in Amsterdam-Oost." image="images/restaurant-interior.jpg" position="center 40%" heightVh="66" minHeight="580" />
        {' '}
{/* Intro */}
  <section style={{ background: "#F5EFE6", padding: "96px 0 0" }}>
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 40px" }}>
      <p style={{ margin: "0", fontFamily: "'Instrument Serif',Georgia,serif", fontSize: "32px", lineHeight: "1.35", color: "#2A2A2A" }}>Bar Restaurant Pompstation is gevestigd in een voormalig waterpompstation uit 1912 aan de Zeeburgerdijk in Amsterdam-Oost. Wij serveren premium gegrilde steaks, lokale vis en vegetarische gerechten — altijd vers bereid op ons houtskoolvuur.</p>
      <p style={{ margin: "24px 0 0", color: "rgba(42,42,42,0.75)", lineHeight: "1.75", fontSize: "17px", textWrap: "pretty" }}>Dit alles in ons industriële pand met New Yorkse uitstraling, in combinatie met live jazz- en soulmuziek op donderdagavond, vrijdagavond en zaterdagavond. Onze live muziek is altijd op de achtergrond en zorgt voor een echte beleving en avond uit — perfect voor een date night of als u iets te vieren heeft. Staat uw vraag er niet tussen? Bel ons op <a href="tel:+31202279885" style={{ color: "#5C1A1B", fontWeight: "500" }}>020 227 9885</a> of mail naar <a href="mailto:info@pompstation.nu" style={{ color: "#5C1A1B", fontWeight: "500" }}>info@pompstation.nu</a>.</p>
    </div>
  </section>

  {/* Eten & drinken */}
  <section style={{ background: "#F5EFE6", padding: "96px 0 64px" }}>
    <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 40px", display: "grid", gridTemplateColumns: "repeat(12,1fr)", gap: "64px", alignItems: "start" }}>
      <div style={{ gridColumn: "span 5", alignSelf: "stretch", height: "100%" }}>
        <div style={{ position: "sticky", top: "104px" }}>
          <div style={{ width: "100%", aspectRatio: "3/4", overflow: "hidden", background: "#2A2A2A" }}>
            <img src="images/food-steak.jpg" alt="Premium steak van de houtskoolgrill bij Pompstation Amsterdam" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <div style={{ marginTop: "12px", fontFamily: "'JetBrains Mono',monospace", fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(42,42,42,0.55)" }}>Van de houtskoolgrill · à la carte</div>
        </div>
      </div>
      <div style={{ gridColumn: "span 7" }}>
      <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#5C1A1B", marginBottom: "12px" }}>01 · Eten & drinken</div>
      <h2 style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", textTransform: "uppercase", color: "#2A2A2A", fontSize: "64px", lineHeight: "0.9", margin: "0 0 40px" }}>Aan tafel</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
        <div>
          <h3 style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontWeight: "400", fontSize: "30px", color: "#5C1A1B", margin: "0 0 12px", lineHeight: "1.2" }}>Is Pompstation geschikt voor à la carte dineren?</h3>
          <p style={{ margin: "0", color: "rgba(42,42,42,0.78)", lineHeight: "1.75", textWrap: "pretty" }}>Bij Pompstation Amsterdam eet u elke woensdag-, donderdag-, vrijdag- en zaterdagavond van ons à la carte menu. Wij serveren premium steaks van de houtskoolgrill, verse seizoensvis en mooie internationale gerechten, vers bereid door onze ervaren chef Allessandro en zijn team. Van ons prijswinnende carpaccio, ceviche, gegrilde gamba's en klassieke steak tartare tot seafood pasta, vongole en ravioli met botersaus en sage. Het volledige menu staat als tekst op onze <a href="menu.html" style={{ color: "#5C1A1B", fontWeight: "500" }}>menupagina</a>.</p>
        </div>
        <div>
          <h3 style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontWeight: "400", fontSize: "30px", color: "#5C1A1B", margin: "0 0 12px", lineHeight: "1.2" }}>Wat voor keuken serveert Pompstation Amsterdam?</h3>
          <p style={{ margin: "0", color: "rgba(42,42,42,0.78)", lineHeight: "1.75", textWrap: "pretty" }}>Pompstation Amsterdam is een steakhouse en grill met internationale invloeden: premium steaks, gegrilde vis, oesters en smoked groenten, veel bereid op houtskoolvuur, aangevuld met vegetarische en veganistische gerechten. Daarnaast een uitgebreide cocktail- en wijnkaart met huisgemaakte siropen en verse kruiden.</p>
        </div>
        <div>
          <h3 style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontWeight: "400", fontSize: "30px", color: "#5C1A1B", margin: "0 0 12px", lineHeight: "1.2" }}>Zijn er vegetarische opties op het menu?</h3>
          <p style={{ margin: "0", color: "rgba(42,42,42,0.78)", lineHeight: "1.75", textWrap: "pretty" }}>Ja. Hoewel Pompstation bekend staat als premium steakhouse en grill, hebben wij ons menu goed uitgebreid met de lekkerste gegrilde groenten en visgerechten. Ook voor vegetarische en veganistische gerechten kunt u dus goed bij ons terecht — denk aan burrata met geroosterde San Marzano-tomaat, parmigiana van aubergine en een vega seizoensmenu bij de groepsformules.</p>
        </div>
        <div>
          <h3 style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontWeight: "400", fontSize: "30px", color: "#5C1A1B", margin: "0 0 12px", lineHeight: "1.2" }}>Kan ik bij Pompstation ook alleen komen voor cocktails en live muziek?</h3>
          <p style={{ margin: "0", color: "rgba(42,42,42,0.78)", lineHeight: "1.75", textWrap: "pretty" }}>Ja. U kunt bij Pompstation Amsterdam ook zonder diner aanschuiven aan de bar voor cocktails, een glas wijn en de live muziek op donderdag-, vrijdag- en zaterdagavond. Reserveren is niet verplicht voor de bar, maar op drukke avonden wel aan te raden.</p>
        </div>
      </div>
      </div>
    </div>
  </section>

  {/* Muziek & sfeer */}
  <section style={{ background: "#F5EFE6", padding: "64px 0 96px" }}>
    <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 40px", display: "grid", gridTemplateColumns: "repeat(12,1fr)", gap: "64px", alignItems: "start" }}>
      <div style={{ gridColumn: "span 7" }}>
      <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#5C1A1B", marginBottom: "12px" }}>02 · Muziek, terras & sfeer</div>
      <h2 style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", textTransform: "uppercase", color: "#2A2A2A", fontSize: "64px", lineHeight: "0.9", margin: "0 0 40px" }}>De avond zelf</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
        <div>
          <h3 style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontWeight: "400", fontSize: "30px", color: "#5C1A1B", margin: "0 0 12px", lineHeight: "1.2" }}>Is er live muziek bij Pompstation?</h3>
          <p style={{ margin: "0", color: "rgba(42,42,42,0.78)", lineHeight: "1.75", textWrap: "pretty" }}>Ja. Elke donderdagavond, vrijdagavond en zaterdagavond is er live jazzy muziek op de achtergrond, meestal instrumentaal, gespeeld door artiesten van onder andere het Conservatorium van Amsterdam. Vaste stijlen zijn jazz, soul, singer-songwriter en bossanova.</p>
          <p style={{ margin: "16px 0 0", color: "rgba(42,42,42,0.78)", lineHeight: "1.75", textWrap: "pretty" }}>Het is te allen tijde mogelijk om te kletsen en bij te praten, omdat wij erover waken dat het geluid altijd op de achtergrond blijft. U kunt ook verzoeken om een tafel achterin het restaurant, waar de live muziek nog iets zachter klinkt. De akoestiek in ons pand staat bekend als zeer goed — daarom vinden er ook veel muzikale events en feesten plaats bij Pompstation Amsterdam.</p>
        </div>
        <div>
          <h3 style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontWeight: "400", fontSize: "30px", color: "#5C1A1B", margin: "0 0 12px", lineHeight: "1.2" }}>Heeft Pompstation een terras?</h3>
          <p style={{ margin: "0", color: "rgba(42,42,42,0.78)", lineHeight: "1.75", textWrap: "pretty" }}>Ja. Pompstation heeft een groot en zonnig terras in de binnentuin — 's zomers en op warme avonden een populaire plek om te borrelen of te dineren. U kunt zelfs een tafeltje reserveren op het terras, wat uniek is in Amsterdam. Ook een terrastafel voor een groep is vooraf te boeken; neem hiervoor contact op via mail of telefoon.</p>
        </div>
      </div>
      </div>
      <div style={{ gridColumn: "span 5", alignSelf: "stretch", height: "100%" }}>
        <div style={{ position: "sticky", top: "104px" }}>
          <div style={{ width: "100%", aspectRatio: "3/4", overflow: "hidden", background: "#2A2A2A" }}>
            <img src="images/live-band-vide.jpg" alt="Live jazzband op de vide van Pompstation Amsterdam" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <div style={{ marginTop: "12px", fontFamily: "'JetBrains Mono',monospace", fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(42,42,42,0.55)" }}>Live muziek · donderdag t/m zaterdag</div>
        </div>
      </div>
    </div>
  </section>

  {/* Groepen & events */}
  <section style={{ background: "#5C1A1B", color: "#F5EFE6", padding: "96px 0" }}>
    <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 40px", display: "grid", gridTemplateColumns: "repeat(12,1fr)", gap: "64px", alignItems: "start" }}>
      <div style={{ gridColumn: "span 5", alignSelf: "stretch", height: "100%" }}>
        <div style={{ position: "sticky", top: "104px" }}>
          <div style={{ width: "100%", aspectRatio: "3/4", overflow: "hidden", background: "#2A2A2A" }}>
            <img src="images/event-fullhall.jpg" alt="Groepsdiner in de volledige zaal van Pompstation Amsterdam" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <div style={{ marginTop: "12px", fontFamily: "'JetBrains Mono',monospace", fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(245,239,230,0.6)" }}>Groepen van 20 tot 360 personen</div>
        </div>
      </div>
      <div style={{ gridColumn: "span 7" }}>
      <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(245,239,230,0.7)", marginBottom: "12px" }}>03 · Groepen & events</div>
      <h2 style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", textTransform: "uppercase", color: "#F5EFE6", fontSize: "64px", lineHeight: "0.9", margin: "0 0 40px" }}>Met een gezelschap</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
        <div>
          <h3 style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontWeight: "400", fontSize: "30px", color: "#F5EFE6", margin: "0 0 12px", lineHeight: "1.2" }}>Is Pompstation geschikt voor een groep of bedrijfsdiner?</h3>
          <p style={{ margin: "0", color: "rgba(245,239,230,0.8)", lineHeight: "1.75", textWrap: "pretty" }}>Bij Bar Restaurant Pompstation Amsterdam is het heel goed mogelijk om semi-exclusief of exclusief een groepsdiner, bedrijfsdiner, bedrijfsuitje of bedrijfsfeest te organiseren. Dankzij de ruime, hoge zaal is de locatie geschikt voor gezelschappen tot 360 personen.</p>
          <p style={{ margin: "16px 0 0", color: "rgba(245,239,230,0.8)", lineHeight: "1.75", textWrap: "pretty" }}>Heeft u een kleinere groep van 20 tot 100 mensen, dan is onze vide af te huren. Die beschikt over een eigen bar, maar geeft nog wel de gezelligheid van het restaurant en — wanneer wenselijk — de live muziek op de achtergrond beneden, afhankelijk van de dag. Er zijn verschillende groepsopstellingen mogelijk, van sit-down diners tot walking dinners, borrels en feesten. Bekijk de mogelijkheden bij <a href="groepen.html" style={{ color: "#F5EFE6", fontWeight: "500", textDecoration: "underline" }}>afhuren & groepen</a>.</p>
        </div>
        <div>
          <h3 style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontWeight: "400", fontSize: "30px", color: "#F5EFE6", margin: "0 0 12px", lineHeight: "1.2" }}>Kan ik Pompstation afhuren?</h3>
          <p style={{ margin: "0", color: "rgba(245,239,230,0.8)", lineHeight: "1.75", textWrap: "pretty" }}>Jazeker. <a href="brochure-corporate.html" style={{ color: "#F5EFE6", fontWeight: "500", textDecoration: "underline" }}>Download hier onze brochure</a> of <a href="offerte.html" style={{ color: "#F5EFE6", fontWeight: "500", textDecoration: "underline" }}>vul ons aanvraagformulier in</a> voor meer informatie en een offerte op maat. Onze eventmanager neemt daarna contact met u op.</p>
        </div>
        <div>
          <h3 style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontWeight: "400", fontSize: "30px", color: "#F5EFE6", margin: "0 0 12px", lineHeight: "1.2" }}>Kan een groep per bus of per boot aankomen?</h3>
          <p style={{ margin: "0", color: "rgba(245,239,230,0.8)", lineHeight: "1.75", textWrap: "pretty" }}>Wanneer u bij ons een groepsdiner, groepslunch, bedrijfsdiner of bedrijfsuitje boekt, is het in overleg met onze salesmanager goed mogelijk om een bus of groepsvervoer te regelen. Ook aankomst per boot is mogelijk: na een korte wandeling van ongeveer vijf minuten komt u voor onze deur aan. Er zijn arrangementen mogelijk waarbij u met uw groep een lunch of diner combineert met een boottocht. Vraag naar de mogelijkheden bij onze eventmanager.</p>
        </div>
      </div>
      </div>
    </div>
  </section>

  {/* Praktisch */}
  <section style={{ background: "#F5EFE6", padding: "96px 0 0" }}>
    <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 40px", display: "grid", gridTemplateColumns: "repeat(12,1fr)", gap: "64px", alignItems: "start" }}>
      <div style={{ gridColumn: "span 7" }}>
      <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#5C1A1B", marginBottom: "12px" }}>04 · Praktisch</div>
      <h2 style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", textTransform: "uppercase", color: "#2A2A2A", fontSize: "64px", lineHeight: "0.9", margin: "0 0 40px" }}>Voor u komt</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
        <div>
          <h3 style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontWeight: "400", fontSize: "30px", color: "#5C1A1B", margin: "0 0 12px", lineHeight: "1.2" }}>Hoe kom ik bij Pompstation Amsterdam?</h3>
          <p style={{ margin: "0", color: "rgba(42,42,42,0.78)", lineHeight: "1.75", textWrap: "pretty" }}>Pompstation Amsterdam ligt aan de Zeeburgerdijk 52, 1094 AE Amsterdam, in Amsterdam-Oost. De Zeeburgerdijk 52 is goed bereikbaar vanaf de Amsterdamse ring A10: binnen enkele minuten bevindt u zich met de auto bij ons pand. Ook met de trein vanaf Amsterdam Centraal bent u met een taxi binnen tien minuten bij ons, of met tram 14, 19 en 25 — die stoppen allemaal voor onze deur bij halte Zeeburgerdijk. Vanaf Muiderpoortstation zijn we eveneens goed bereikbaar, te voet of met de tram.</p>
        </div>
        <div>
          <h3 style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontWeight: "400", fontSize: "30px", color: "#5C1A1B", margin: "0 0 12px", lineHeight: "1.2" }}>Waar kan ik parkeren bij Pompstation?</h3>
          <p style={{ margin: "0", color: "rgba(42,42,42,0.78)", lineHeight: "1.75", textWrap: "pretty" }}>Wanneer u zelf met de auto komt en in de buurt wilt parkeren, is dat goed mogelijk. Er zijn verschillende parkeergarages in de omgeving, maar parkeren in de omliggende straten gaat ook prima: aan de Zeeburgerdijk zelf, in de Borneostraat en in de Timorstraat zijn vaak goede parkeerplaatsen beschikbaar. Tarieven zijn vindbaar via de EasyPark-app.</p>
        </div>
        <div>
          <h3 style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontWeight: "400", fontSize: "30px", color: "#5C1A1B", margin: "0 0 12px", lineHeight: "1.2" }}>Kan ik online reserveren bij Pompstation?</h3>
          <p style={{ margin: "0", color: "rgba(42,42,42,0.78)", lineHeight: "1.75", textWrap: "pretty" }}>Ja. U reserveert online via het reserveringssysteem op <a href="https://www.pompstation.nu/" target="_blank" rel="noopener" style={{ color: "#5C1A1B", fontWeight: "500" }}>pompstation.nu</a>, 24 uur per dag. Voor groepen vanaf tien personen, een terrastafel voor een groep of volledige afhuur werken wij met een <a href="offerte.html" style={{ color: "#5C1A1B", fontWeight: "500" }}>aanvraagformulier</a> of telefonisch contact via <a href="tel:+31202279885" style={{ color: "#5C1A1B", fontWeight: "500" }}>020 227 9885</a>.</p>
        </div>
        <div>
          <h3 style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontWeight: "400", fontSize: "30px", color: "#5C1A1B", margin: "0 0 12px", lineHeight: "1.2" }}>Wat zijn de openingstijden van Pompstation Amsterdam?</h3>
          <p style={{ margin: "0", color: "rgba(42,42,42,0.78)", lineHeight: "1.75", textWrap: "pretty" }}>Woensdag en donderdag zijn wij open van 17:00 tot 00:00 uur, vrijdag en zaterdag van 17:00 tot 01:00 uur. Voor groepen en events zijn afwijkende tijden mogelijk — ook op andere dagen en voor lunch. Neem daarvoor contact met ons op.</p>
        </div>
        <div>
          <h3 style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontWeight: "400", fontSize: "30px", color: "#5C1A1B", margin: "0 0 12px", lineHeight: "1.2" }}>Is Pompstation rolstoeltoegankelijk?</h3>
          <p style={{ margin: "0", color: "rgba(42,42,42,0.78)", lineHeight: "1.75", textWrap: "pretty" }}>Jazeker. Bij de entree hebben wij een speciale ramp beschikbaar en ons personeel helpt graag. Laat het bij uw reservering weten, dan houden wij er rekening mee bij de tafelindeling.</p>
        </div>
        <div>
          <h3 style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontWeight: "400", fontSize: "30px", color: "#5C1A1B", margin: "0 0 12px", lineHeight: "1.2" }}>Mag ik mijn hond meenemen?</h3>
          <p style={{ margin: "0", color: "rgba(42,42,42,0.78)", lineHeight: "1.75", textWrap: "pretty" }}>Ja, dat vinden wij heel gezellig. Het is wel fijn als uw hond netjes en rustig is, zodat andere gasten er geen last van hebben.</p>
        </div>
      </div>
      </div>
      <div style={{ gridColumn: "span 5", alignSelf: "stretch", height: "100%" }}>
        <div style={{ position: "sticky", top: "104px" }}>
          <div style={{ width: "100%", aspectRatio: "3/4", overflow: "hidden", background: "#2A2A2A" }}>
            <img src="images/terras-dining.jpg" alt="Terras in de binnentuin van Pompstation Amsterdam" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <div style={{ marginTop: "12px", fontFamily: "'JetBrains Mono',monospace", fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(42,42,42,0.55)" }}>Zeeburgerdijk 52 · terras in de binnentuin</div>
        </div>
      </div>
    </div>
  </section>

  {/* SEO tekst */}
  <section style={{ background: "#EFE7D9", padding: "96px 0", marginTop: "96px", borderTop: "1px solid rgba(42,42,42,0.1)" }}>
    <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 40px" }}>
      <h2 style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", textTransform: "uppercase", color: "#2A2A2A", fontSize: "40px", lineHeight: "0.95", margin: "0 0 8px" }}>Bereikbaarheid Pompstation Amsterdam</h2>
      <div style={{ width: "48px", height: "2px", background: "#5C1A1B", marginBottom: "28px" }}></div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px 56px", fontSize: "15px", lineHeight: "1.8", color: "rgba(42,42,42,0.72)" }}>
        <p style={{ margin: "0", textWrap: "pretty" }}>Bar Restaurant Pompstation Amsterdam vindt u aan de Zeeburgerdijk 52, 1094 AE Amsterdam, in de Indische Buurt in Amsterdam-Oost. Met de auto rijdt u vanaf de ring A10 in enkele minuten naar ons pand. Met het openbaar vervoer stoppen tram 14, tram 19 en tram 25 bij halte Zeeburgerdijk, direct voor de deur; vanaf Amsterdam Centraal bent u met een taxi binnen tien minuten bij ons en vanaf Muiderpoortstation bent u er te voet of met de tram snel.</p>
        <p style={{ margin: "0", textWrap: "pretty" }}>Parkeren kan in een van de parkeergarages in de omgeving of in de omliggende straten: aan de Zeeburgerdijk, in de Borneostraat en in de Timorstraat is vaak plek. Tarieven checkt u via de EasyPark-app. Voor groepen regelen wij in overleg een bus of groepsvervoer, en aankomst per boot is mogelijk — vanaf de aanlegplaats is het ongeveer vijf minuten lopen naar het restaurant.</p>
        <p style={{ margin: "0", textWrap: "pretty" }}>Openingstijden: woensdag en donderdag van 17:00 tot 00:00 uur, vrijdag en zaterdag van 17:00 tot 01:00 uur. Live muziek op donderdag-, vrijdag- en zaterdagavond. Ons terras in de binnentuin is bij mooi weer open voor borrel en diner, en een terrastafel is vooraf te reserveren.</p>
        <p style={{ margin: "0", textWrap: "pretty" }}>Reserveren doet u online via pompstation.nu of telefonisch via 020 227 9885. Voor een groepsdiner, bedrijfsborrel, bedrijfsfeest, bruiloft of volledige afhuur van het pand vraagt u een offerte aan via het aanvraagformulier. Het volledige à la carte menu, de cocktailkaart en de groepsmenu's staan als doorzoekbare tekst op onze menupagina.</p>
      </div>
    </div>
  </section>

  {/* CTA */}
  <section style={{ background: "#F5EFE6", padding: "96px 0" }}>
    <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 40px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
        <Hov as="a" href="https://www.pompstation.nu/" target="_blank" rel="noopener" style={{ display: "block", background: "#EFE7D9", border: "1px solid rgba(42,42,42,0.15)", padding: "40px", transition: "border-color 0.2s ease" }}  styleHover={{ borderColor: "#5C1A1B" }} >
          <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#5C1A1B", marginBottom: "12px" }}>Kom langs</div>
          <div style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", textTransform: "uppercase", color: "#2A2A2A", fontSize: "48px", lineHeight: "0.9" }}>Reserveer een tafel</div>
          <div style={{ marginTop: "16px", color: "rgba(42,42,42,0.7)" }}>Diner, borrel of terras — met live jazz do–za.</div>
          <div style={{ marginTop: "24px", display: "inline-flex", alignItems: "center", gap: "8px", color: "#5C1A1B", fontWeight: "500" }}>Naar reserveren <span>→</span></div>
        </Hov>
        <Hov as="a" href="offerte.html" style={{ display: "block", background: "#5C1A1B", color: "#F5EFE6", padding: "40px", transition: "background 0.2s ease" }}  styleHover={{ background: "#3F0F10" }} >
          <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(245,239,230,0.7)", marginBottom: "12px" }}>Nog een vraag?</div>
          <div style={{ fontFamily: "'Big Shoulders Display',Impact,sans-serif", fontWeight: "800", textTransform: "uppercase", color: "#F5EFE6", fontSize: "48px", lineHeight: "0.9" }}>Vraag een offerte aan</div>
          <div style={{ marginTop: "16px", color: "rgba(245,239,230,0.75)" }}>Voor groepen van 10 tot 360 personen.</div>
          <div style={{ marginTop: "24px", display: "inline-flex", alignItems: "center", gap: "8px", color: "#F5EFE6", fontWeight: "500" }}>Naar het formulier <span>→</span></div>
        </Hov>
      </div>
    </div>
  </section>
        {' '}
        <PSSfeer bg="cream-warm" lead="Van de hoge hal tot kaarslicht op tafel — een indruk van Pompstation Amsterdam voordat u komt." />
        {' '}
        <PSFooter />
      </div>
    );
  }
}

const __root = document.getElementById('root');
if (__root) ReactDOM.createRoot(__root).render(<PompstationFaq />);
