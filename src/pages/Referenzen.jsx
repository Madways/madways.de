import React from 'react';
import './Referenzen.css';

const projekte = [
  {
    url: 'https://www.cadus.org/',
    title: 'CADUS – NGO Website',
    beschreibung: 'Multilinguale WordPress-Seite für eine humanitäre NGO mit Karten, Spendenintegration und CMS.',
    technik: '/icons/wordpress.svg',
    leistungen: [
      'WordPress-Theme & WPML',
      'Responsive Design',
      'Interaktive Karten',
      'SEO & Performance'
    ]
  },
  {
    url: 'https://pbv-immobilien.de/',
    title: 'PBV Immobilien',
    beschreibung: 'Individuelle Firmen-Website mit Fokus auf Energieberatung und einfache Pflege.',
    technik: '/icons/wordpress.svg',
    leistungen: [
      'CMS-Einrichtung',
      'Performance-Optimierung'
    ]
  },
  // {
  //   url: 'https://alte-hoelle.de/',
  //   title: 'Alte Hölle',
  //   beschreibung: 'Webpräsenz für ein nachhaltiges Seminarhaus und Kulturprojekt im Naturpark Hoher Fläming.',
  //   technik: '/icons/wordpress.svg',
  //   leistungen: [
  //     'WordPress-Entwicklung',
  //     'Veranstaltungskalender',
  //     'Responsive Design'
  //   ]
  // },
  {
    url: 'https://ge.hackt.es/',
    title: 'ge.hackt.es',
    beschreibung: 'Website für einen gemeinnützigen Hackspace mit Fokus auf Digitalisierung des ländlichen Raums.',
    technik: '/icons/wordpress.svg',
    leistungen: [
      'WordPress-Setup',
      'Community-Integration'
    ]
  },
  {
    url: 'https://dachgeschwister.de/',
    title: 'Dachgeschwister',
    beschreibung: 'Moderne Website für eine neu gegründete Firma Dachgeschwister aus Iffezheim.',
    technik: '/icons/wordpress.svg',
    leistungen: [
      'WordPress-Design',
      'Leistungsdarstellung'
    ]
  },
  {
    url: 'https://www.kommunalomat-ka.de/',
    title: 'Kommunalomat',
    beschreibung: 'Interaktive Plattform zur politischen Meinungsbildung für Kommunalwahlen in Karlsruhe.',
    technik: '/icons/wordpress.svg',
    leistungen: [
      'Symfony-Entwicklung',
      'Thesenabstimmung',
      'Ergebnisvisualisierung'
    ]
  },
  {
    url: 'https://co2ampel-bausatz.de/',
    title: 'CO₂-Ampel Bausatz',
    beschreibung: 'Shopify-basierter Onlineshop für einen Open-Source CO₂-Ampel-Bausatz zur Luftqualitätsmessung.',
    technik: '/icons/wordpress.svg',
    leistungen: [
      'Shopify-Setup',
      'Produktfotografie',
      'Bestellabwicklung'
    ]
  },
  {
  url: 'https://acz.space/',
  title: 'ACZ Wiesenburg',
  beschreibung: 'Website für ein kreatives Zentrum in Brandenburg mit Werkstätten, Ateliers und gemeinschaftlich genutzten Flächen.',
  technik: '/icons/wordpress.svg',
  leistungen: [
    'WordPress-Setup',
    'Inhaltsstruktur & Gestaltung',
    'Kontakt- und Infointegration'
  ]
},
  {
  url: 'https://edelweiss-reisen.de/',
  title: 'Edelweiß-Reisen',
  beschreibung: 'Website des Reise- und Linienbusunternehmens aus München. Präsentiert Shuttle- & Transferleistungen, Reisebusvermietung, Linienverkehr, Unternehmenschronik seit 1930 sowie ein Kontakt-/Angebotsformular.',
  technik: '/icons/wordpress.svg',
  leistungen: [
    'Website-Konzeption & Layout',
    'Kontakt- und Infointegration'
  ]
}
  // {
  //   url: 'https://www.drehscheibe-juk.de/',
  //   title: 'Drehscheibe JUK',
  //   beschreibung: 'Website für einen Verein, der regionale Kulturprojekte für Kinder und Jugendliche organisiert.',
  //   technik: '/icons/wordpress.svg',
  //   leistungen: [
  //     'WordPress-Entwicklung',
  //     'Projektpräsentation',
  //     'Kontaktformulare'
  //   ]
  // }
];

function Referenzen({ consentGiven }) {
  return (
    <div className="referenzen-wrapper">
      <h1 className="referenzen-title">REFERENZEN</h1>
      <p className="referenzen-intro">
        Hier ist ein Überblick über unsere letzten Projekte.
      </p>

      {projekte.map((projekt, index) => (
        <div className="referenz-block" key={index}>
          <div className="iframe-wrapper">
            {consentGiven ? (
              <iframe src={projekt.url} title={projekt.title} />
            ) : (
              <div className="iframe-placeholder">
  <p>
    <strong>Wir möchten dir hier eingebundene Webseiten zeigen die wir entwickelt haben.</strong> <br/>
    Der Inhalt dieser Webseite wird von einer externen Quelle geladen.
    Um ihn anzuzeigen, benötigen wir deine Zustimmung zu externen Inhalten.<br/> Bitte bestätige das über diesen Button um fort zu fahren :)
    
  </p>
  <button
    onClick={() => {
      localStorage.setItem('madwaysConsent', 'true');
      window.location.reload();
    }}
  >
    Inhalt der externen Webseiten laden
  </button>
</div>
            )}
          </div>

          <div className="referenz-content">
            <h2 className="referenz-title">{projekt.title}</h2>
            <p className="referenz-subline">{projekt.beschreibung}</p>

            <div className="referenz-meta">
              <img src={projekt.technik} alt="Technologie" className="tech-icon" />
              <ul className="referenz-list">
                {projekt.leistungen.map((punkt, i) => (
                  <li key={i}>{punkt}</li>
                ))}
              </ul>
            </div>

            <a
              href={projekt.url}
              target="_blank"
              rel="noopener noreferrer"
              className="madways-button"
            >
              WEBSEITE ANSEHEN
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Referenzen;