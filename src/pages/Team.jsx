import React from 'react';
import './Team.css';

function Team() {
  return (
    <div className="team-wrapper">
      <h1 className="team-heading">TEAM</h1>

      <div className="team-members">
   

        <div className="team-member">
          <img src="/team/morbi.jpg" alt="Lukas Mohrbacher" className="team-photo" />
          <h3>Lukas Mohrbacher</h3>
          <p className="team-role">Web Developer</p>
         <div className="team-icons">
  <a href="https://github.com/morbidick" target="_blank" rel="noopener noreferrer">
    <img src="/github.svg" alt="GitHub" className="github-icon" />
  </a>
  <a href="mailto:mohrbacher@madways.de">
    <img src="/logo.svg" alt="Madways Mail" className="mail-icon" />
  </a>
</div>
      </div>

           <div className="team-member">
          <img src="/team/calle_neu.jpg" alt="Carl-Martin Görsch" className="team-photo" />
          <h3>Carl-Martin Görsch</h3>
          <p className="team-role">Web Developer, Grafik-Designer</p>
         <div className="team-icons">
  <a href="https://github.com/cmgoersch" target="_blank" rel="noopener noreferrer">
    <img src="/github.svg" alt="GitHub" className="github-icon" />
  </a>
  <a href="mailto:goersch@madways.de">
    <img src="/logo.svg" alt="Madways Mail" className="mail-icon" />
  </a>
</div>
        </div>
       </div>

      <div className="team-description">
        <h2>Madways hilft Ihnen, sich bestmöglich bemerkbar zu machen!</h2>
        <p>
          Wir möchten mit schnellen und bezahlbaren Webseiten kleine bis mittelständische sowie Start-ups unterstützen. 
          Sie haben ein kleines oder mittelständisches Unternehmen und überzeugen mit Service, Persönlichkeit und einer guten Kundenbeziehung? 
          Machen Sie im Internet auf sich aufmerksam!
        </p>
        <p>
          Unser Ziel ist es, Ihr Unternehmen mit einer Webseite zu fördern, auf welcher Ihre Kunden und Interessenten über Ihre Philosophie, Ihren Standort, Ihre Produkte und Kompetenzen sowie die Öffnungszeiten und schnelle Kontaktmöglichkeiten informiert werden. Und das ganz im individuellen Stil Ihres Unternehmens, mit Bildern der Verkaufsräume und Schaufenster, um keine Fragen offenzulassen.
        </p>
      </div>
      <div className="kompetenzen-contact">
          <a href="/kontakt" className="madways-button">
            ZUM KONTAKT
            <span className="madways-button-pointer"></span>
          </a>
        </div>
    </div>
  );
}

export default Team;