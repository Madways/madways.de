import React from 'react';
import './Kompetenzen.css';

const kompetenzen = [
  {
    icon: '/icons/beratung.svg',
    title: 'Digitale Markenstrategie',
    text: 'Ganzheitliche Strategien, um Ihre Marke sichtbar und erlebbar zu machen – von der Positionierung bis zur Content-Strategie.',
  },
  {
    icon: '/icons/ux-ui.svg',
    title: 'UX/UI Design',
    text: 'Intuitive Nutzerführung & emotionale Interfaces: Wir gestalten digitale Erlebnisse, die begeistern und konvertieren.',
  },
  {
    icon: '/icons/code.svg',
    title: 'Webentwicklung & CMS',
    text: 'Skalierbare Web-Lösungen mit React, Next.js, Strapi, WordPress. Schnell, sicher & flexibel.',
  },
  {
    icon: '/icons/ecommerce.svg',
    title: 'E-Commerce & Onlineshops',
    text: 'Shopify, WooCommerce oder Headless: Wir bauen performante Shops für starke Online-Umsätze.',
  },
  {
    icon: '/icons/performance.svg',
    title: 'SEO & Performance',
    text: 'Top-Rankings, schnelle Ladezeiten, barrierefrei. Sichtbarkeit technisch & inhaltlich verbessert.',
  },
{
  icon: '/icons/hosting.svg',
  title: 'Hosting & DevOps',
  text: (
    <>
      Vercel, Netlify, eigene Server: CI/CD, SSL, Domains & Deployment, wie es zu Ihrem Projekt passt.
      <br />
      <a href="/preisliste" className="yellow-link">Preisliste ansehen</a>
    </>
  )
},
  {
    icon: '/icons/content.svg',
    title: 'Content Creation & Copywriting',
    text: 'Texte mit Relevanz, SEO & Charakter. Für Webseiten, Produkte und Kampagnen.',
  },
  {
    icon: '/icons/wordpress.svg',
    title: 'WordPress Spezialisten',
    text: 'Schnelle & individuell gestaltete WordPress-Seiten inklusive Custom-Themes, SEO und Sicherheitspaketen.',
  },
  {
  icon: '/icons/social.svg',
  title: 'Mail & Collaboration',
  text: (
    <>
      Einrichtung und Betrieb von sicheren E-Mail-Konten, Groupware und Cloud-Lösungen auf Wunsch mit eigener Domain.
      <br />
      <a href="/preisliste" className="yellow-link">Preisliste ansehen</a>
    </>
  )
},
  {
  icon: '/icons/hardware.svg',
  title: 'Hardware-Entwicklung',
  text: 'Madways konzipiert und realisiert maßgeschneiderte Hardware: von der Platine über Prototypen bis zur Serienreife – alles aus einer Hand.'
},
{
    icon: '/icons/individualsoftware.svg',
  title: 'Individualsoftware',
  text: 'Maßgeschneiderte Softwarelösungen – entwickelt mit agilen Methoden und perfekt auf Ihre Anforderungen abgestimmt. Madways programmiert, was Sie wirklich brauchen.'
},
  {
    icon: '/icons/strategie.svg',
    title: 'Strategische Beratung',
    text: 'Individuelle Beratung und Projektplanung mit Fokus auf Zielgruppen, Technik, Zeit und Budget.',
  }
];

function Kompetenzen() {
  return (
    <div className="kompetenzen-wrapper">
      <div className="kompetenzen-container">
        <h1 className="kompetenzen-title">UNSERE KOMPETENZEN</h1>
        <p className="kompetenzen-intro">
          Wir sind Ihr Full-Service-Partner für starke Webauftritte, durchdachtes Design und wirksame Kommunikation.
          Entdecken Sie, was wir digital möglich machen.
        </p>

        <div className="kompetenzen-grid">
          {kompetenzen.map((item, index) => (
            <div className="kompetenz-card bordered" key={index}>
              <div className="icon-wrapper">
                <img src={item.icon} alt={item.title} className="icon" />
              </div>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </div>
          ))}
        </div>

        <div className="kompetenzen-contact">
          <p className="contact-text">Neugierig geworden? Nehmen Sie Kontakt mit uns auf und wir finden gemeinsam heraus, wie wir Ihr Projekt umsetzen können.</p>
          <a href="/kontakt" className="madways-button">
            ZUM KONTAKT
            <span className="madways-button-pointer"></span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Kompetenzen;
