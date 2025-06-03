import React from 'react';
import './Kontakt.css';

function Kontakt() {
  return (
    <div className="kontakt-wrapper">
      <section className="kontakt-inhalt">
        <h2>Sie erreichen uns ganz einfach</h2>

        <div className="kontakt-block">
          <p>
            Madways Unternehmergesellschaft<br />
            (haftungsbeschränkt)<br />
            für digitale Kommunikation
          </p>
        </div>

        <div className="kontakt-block">
          <p>
            Steinstraße 23<br />
            76133 Karlsruhe<br />
            Telefon: +49 (0) 1602054517<br />
            Mail: <a className='mail' href="mailto:kontakt@madways.de">kontakt@madways.de</a>
          </p>
        </div>

        <h3>Wir freuen uns auf Sie</h3>

        <footer className="kontakt-footer">
          <a href="/impressum">Impressum</a>
          <a href="/Madways-UG_AGBs_November2020.pdf" target="_blank" rel="noreferrer">AGB</a>
          <a href="/preisliste">Preisliste</a>
        </footer>
      </section>
    </div>
  );
}

export default Kontakt;
