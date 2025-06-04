import './Madways.css';

function Madways() {
  return (
    <div className="madways-hero">
      <div className="madways-overlay">
        <h1 className="madways-title">
          Erfolgreich auftreten.<br />
          <span className="highlight">Online und Offline.</span>
        </h1>
        <p className="madways-subtext">
          Sie suchen eine <strong>Internetagentur</strong>, die Ihre ganz persönlichen Vorstellungen umsetzt
          und dabei auf dem neuesten Stand von Design, Technik und Sicherheit arbeitet?
        </p>
        <p className="madways-description">
          <strong>Madways ist Ihr starker Partner</strong> für individuelle Design-,
          Web- und Print-Lösungen. Wir freuen uns auf Ihre Herausforderung!
        </p>
        <a href="/kompetenzen" className="madways-button">
          ZU UNSEREN KOMPETENZEN
          <span className="madways-button-pointer"></span>
        </a>
      </div>
    </div>
  );
}

export default Madways;
