import { useEffect, useState } from "react";
import './Madways.css';

function Madways() {
  const [videoSrc, setVideoSrc] = useState("/video/road_middle.mp4");

  useEffect(() => {
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;

    if (connection) {
      const { effectiveType, downlink, saveData } = connection;

      if (saveData) {
        setVideoSrc("/video/road_small.mp4");
      } else if (effectiveType === "4g" && downlink > 5) {
        setVideoSrc("/video/road_big.mp4");
      } else if (effectiveType === "3g" || downlink <= 2) {
        setVideoSrc("/video/road_small.mp4");
      } else {
        setVideoSrc("/video/road_middle.mp4");
      }
    }
  }, []);

  return (
    <div className="madways-hero">
      <video
  className="madways-video-bg"
  autoPlay
  loop
  muted
  playsInline
  poster="/road.jpg"
>
  <source src={videoSrc} type="video/mp4" />
  Dein Browser unterstützt das Video nicht.
</video>

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
        <a href="https://www.vecteezy.com/video/10290449-paved-road-in-open-field-disappears-on-wooded-horizon-line" className="attribution-button" target="_blank" rel="noopener noreferrer">
  Illustration: Vecteezy
</a>
      </div>
    </div>
  );
}

export default Madways;