import './Impressum.css';

function Impressum() {
  return (
    <div className="impressum-wrapper">
      <div className="impressum-content">
        <h1>Impressum</h1>

        <h2>Angaben gemäß § 5 TMG:</h2>
        <p>
          Madways UG (haftungsbeschränkt)<br />
          Lukas Mohrbacher<br />
          Steinstraße 23<br />
          76133 Karlsruhe<br />
          Telefon: +49 (0) 1602054517<br />
          E-Mail: <a href="mailto:info@madways.de">info@madways.de</a>
        </p>

        <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</h2>
        <p>
          Lukas Mohrbacher<br />
          Steinstraße 23<br />
          76133 Karlsruhe
        </p>

        <h2 className="orange">Haftungsausschluss (Disclaimer)</h2>

        <h3>Haftung für Inhalte</h3>
        <p>
          Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
        </p>

        <h3>Haftung für Links</h3>
        <p>
          Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
        </p>

        <h3>Urheberrecht</h3>
        <p >
Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.          
        </p>

        <h3>Datenschutzerklärung</h3>
        <p>
          Die Datenschutzerklärung finden Sie <a href="/datenschutz">hier</a>.
        </p>

        <h3>Quellenangabe</h3>
        <p>
          <a href="https://www.e-recht24.de" target="_blank" rel="noreferrer">Disclaimer </a> 
von eRecht24, dem Portal zum Internetrecht von Rechtsanwalt Sören Siebert
        </p>
      </div>
    </div>
  );
}

export default Impressum;
