import './Preisliste.css';

function Preisliste() {
  return (
    <div className="preisliste-wrapper">
      <h1 className="preisliste-title">Preisliste</h1>

      <div className="preistabelle">
        {/* Webhosting */}
        <section>
          <h2>Webhosting</h2>
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Basic</th>
                <th>Advanced</th>
                <th>Prosperity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1 Domain Basic</td>
                <td>✔</td>
                <td>✔</td>
                <td>✔</td>
              </tr>
              <tr>
                <td>E-Mail</td>
                <td>-</td>
                <td>1x E-Mail Basic</td>
                <td>1x E-Mail Add-On</td>
              </tr>
              <tr>
                <td>Speicherplatz</td>
                <td>1 GB</td>
                <td>10 GB</td>
                <td>100 GB</td>
              </tr>
              <tr className="preise">
                <td>Preis</td>
                <td>3 €</td>
                <td>8 €</td>
                <td>25 €</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Wordpress */}
        <section>
          <h2>Wordpress</h2>
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Basic</th>
                <th>Advanced</th>
                <th>Prosperity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1 Domain Basic</td>
                <td>✔</td>
                <td>✔</td>
                <td>✔</td>
              </tr>
              <tr>
                <td>E-Mail</td>
                <td>-</td>
                <td>1 E-Mail Basic</td>
                <td>1 E-Mail Add-On</td>
              </tr>
              <tr>
                <td>Speicherplatz</td>
                <td>1 GB</td>
                <td>10 GB</td>
                <td>100 GB</td>
              </tr>
              <tr className="preise">
                <td>Preis</td>
                <td>3 €</td>
                <td>8 €</td>
                <td>25 €</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Nextcloud */}
        <section>
          <h2>Nextcloud</h2>
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Basic</th>
                <th>Add-On</th>
                <th>Add-On</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Account</td>
                <td>1 Account</td>
                <td>1 Account</td>
                <td>1 Account</td>
              </tr>
              <tr>
                <td>Speicherplatz</td>
                <td>3 GB</td>
                <td>+100 GB</td>
                <td>+600 GB</td>
              </tr>
              <tr className="preise">
                <td>Preis</td>
                <td>3 €</td>
                <td>+10 €</td>
                <td>+50 €</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* E-Mail */}
        <section>
          <h2>E-Mail (Domain nicht inklusive)</h2>
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Basic</th>
                <th>Add-On</th>
                <th>Prosperity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Accounts / Addressen</td>
                <td>1 Addresse</td>
                <td>+10 Addressen</td>
                <td>∞ Addressen</td>
              </tr>
              <tr>
                <td>Speicherplatz</td>
                <td>3 GB</td>
                <td>+10 GB</td>
                <td>100 GB</td>
              </tr>
              <tr className="preise">
                <td>Preis</td>
                <td>3 €</td>
                <td>+3 €</td>
                <td>25 €</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Domains */}
      <section>
  <h2>Domains</h2>
  <table>
    <tbody>
      <tr>
        <td>de / com / net / org</td>
         <td>alle anderen</td>
        
      </tr>
      <tr>
         <td><strong>3 €</strong></td>
        <td><strong>auf Anfrage</strong></td>
        
      </tr>
    </tbody>
  </table>
</section>

        <p className="hinweis">Alle Preise monatlich inkl. MwSt.<br />Stand: 03 / 2021</p>
      </div>
    </div>
  );
}

export default Preisliste;
