import React, { useEffect, useState } from "react";
import "./ConsentBanner.css";

export default function ConsentBanner({ onAccept }) {
  const [visible, setVisible] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("madwaysConsent");
    if (!consent) {
      setVisible(true);
    } else {
      onAccept(consent === "true"); // true oder false setzen
    }
  }, [onAccept]);

  const handleAccept = () => {
    localStorage.setItem("madwaysConsent", "true");
    setFadeOut(true);
    setTimeout(() => {
      setVisible(false);
      onAccept(true);
    }, 400);
  };

  const handleDecline = () => {
    localStorage.setItem("madwaysConsent", "false");
    setFadeOut(true);
    setTimeout(() => {
      setVisible(false);
      onAccept(false);
    }, 400);
  };

  if (!visible) return null;

  return (
    <div className={`consent-banner ${fadeOut ? "fade-out" : "fade-in"}`}>
      <p>
  <strong>Keine Sorge – deine Daten gehören dir.</strong><br />
</p>
      <p>
Diese Seite nutzt externe Inhalte (z.B. eingebettete Webseiten die wir dir zeigen möchten). Du kannst selbst entscheiden, ob du sie laden möchtest.
      </p>
     <div className="consent-buttons">
  <button onClick={handleAccept}>Akzeptieren</button>
  <button onClick={handleDecline} className="decline">Ablehnen</button>
</div>
 <a href="/datenschutz" className="datenschutz-link" target="_blank" rel="noopener noreferrer">
    Datenschutz
  </a>
    </div>
  );
}