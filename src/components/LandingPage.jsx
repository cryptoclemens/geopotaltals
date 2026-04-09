import { useState } from 'react'
import { useLangStore } from '../store/useLangStore'

// ── Legal texts ──────────────────────────────────────────────────────────────

const IMPRESSUM = `Angaben gemäß § 5 TMG

Firma
vencly GmbH

Anschrift
Leopoldstraße 31
80802 München
Deutschland

Geschäftsführer
Clemens Eugen Theodor Pompeÿ

Handelsregister
HRB 290524
Amtsgericht München

USt-IdNr.
DE367131457 (gemäß § 27a UStG)

E-Mail
hello@vencly.com

Website
www.vencly.com

Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
Clemens Eugen Theodor Pompeÿ
Leopoldstraße 31, 80802 München

Streitschlichtung
Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: ec.europa.eu/consumers/odr
Wir sind nicht verpflichtet und nicht bereit, an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.

Haftungsausschluss
Die Inhalte dieser Plattform wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann die vencly GmbH jedoch keine Gewähr übernehmen.`

const AGB_DE = `Allgemeine Geschäftsbedingungen
Stand: März 2026

vencly GmbH, Leopoldstraße 31, 80802 München

§ 1 Geltungsbereich
Diese Allgemeinen Geschäftsbedingungen (AGB) der vencly GmbH, Leopoldstraße 31, 80802 München (nachfolgend „Anbieter"), gelten für alle Verträge über die Nutzung der SaaS-Plattform Geopotatlas. Abweichende AGB des Nutzers finden keine Anwendung. Vertragssprache ist Deutsch.

Der Dienst richtet sich ausschließlich an Unternehmen und gewerbliche Nutzer (B2B). Verbraucher im Sinne von § 13 BGB sind von der Nutzung ausgeschlossen.

§ 2 Vertragsschluss
Das Angebot auf der Website stellt keine verbindliche Offerte dar. Der Vertrag kommt durch Registrierung des Nutzers (Antrag) und Freischaltung des Accounts durch den Anbieter (Annahme) zustande.

§ 3 Leistungsbeschreibung
3.1 Geopotatlas ist eine webbasierte SaaS-Plattform zur KI-gestützten Analyse geothermischer Potenziale und Fernwärmenetze.

3.2 Der Anbieter stellt die Plattform mit einem Verfügbarkeitsziel von 99 % p.a. bereit (geplante Wartungsfenster ausgenommen). Ein Rechtsanspruch auf eine bestimmte Verfügbarkeit besteht nicht.

3.3 Beim BYOK-Modell (Bring Your Own Key) verarbeitet der Anbieter Anfragen nicht auf eigener KI-Infrastruktur; die Verarbeitung erfolgt direkt beim vom Nutzer gewählten KI-Anbieter (Anthropic, Microsoft o.ä.).

3.4 Der Anbieter behält sich vor, den Funktionsumfang mit einer Ankündigungsfrist von mindestens 30 Tagen zu ändern, sofern dies dem Nutzer zumutbar ist.

§ 4 Preise & Zahlungsbedingungen
4.1 Der Free-Tarif ist kostenlos und beinhaltet den Zugang zur Kartendarstellung.

4.2 Der Pro-Tarif (KI-gestützte Analyse) erfordert die Hinterlegung eines eigenen API-Keys (BYOK-Modell).

4.3 Bei Zahlungsverzug ist der Anbieter berechtigt, den Zugang vorübergehend zu sperren.

§ 5 Laufzeit & Kündigung
5.1 Der Free-Tarif läuft auf unbestimmte Zeit und kann jederzeit beendet werden.

5.2 Kündigung per E-Mail an: hello@vencly.com

5.3 Nach Vertragsende werden Profildaten 30 Tage in einem nicht-zugänglichen Archiv vorgehalten und anschließend unwiderruflich gelöscht.

5.4 Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt unberührt.

§ 6 BYOK – Verantwortlichkeit für KI-Drittanbieter
6.1 Nutzt der Nutzer das BYOK-Modell, ist er allein verantwortlich für die Wahl des KI-Anbieters sowie die datenschutzrechtliche Zulässigkeit des Einsatzes.

6.2 Der Anbieter leitet Anfrageinhalte bei BYOK direkt an den gewählten Drittanbieter weiter und speichert diese Inhalte nicht dauerhaft auf eigenen Servern.

6.3 Der Anbieter haftet nicht für Datenschutzverstöße, Datenverluste oder sonstige Schäden, die beim Drittanbieter entstehen, soweit den Anbieter kein eigenes Verschulden trifft.

§ 7 Nutzerpflichten
Der Nutzer verpflichtet sich:
- Den Dienst ausschließlich für rechtmäßige Zwecke zu nutzen
- Keine personenbezogenen Daten Dritter ohne deren Einwilligung zu verarbeiten
- Zugangsdaten vertraulich zu behandeln
- Den Dienst nicht zu missbrauchen (z.B. durch automatisierte Massenanfragen)
- Sicherheitsvorfälle unverzüglich zu melden

§ 8 Haftungsbeschränkung
8.1 Bei einfacher Fahrlässigkeit haftet der Anbieter nur für die Verletzung wesentlicher Vertragspflichten (Kardinalpflichten), begrenzt auf den vorhersehbaren, vertragstypischen Schaden.

8.2 Die Haftungsbeschränkung gilt nicht bei Vorsatz, grober Fahrlässigkeit, Körper-/Gesundheitsschäden oder Ansprüchen nach dem Produkthaftungsgesetz.

§ 9 Datenschutz
Die Verarbeitung personenbezogener Daten erfolgt gemäß der Datenschutzerklärung. Auf Anfrage wird ein Auftragsverarbeitungsvertrag (AVV) nach Art. 28 DSGVO zur Verfügung gestellt (datenschutz@vencly.com).

§ 10 Geistiges Eigentum
Alle Rechte an der Geopotatlas-Plattform, deren Code, Logos und Inhalten verbleiben beim Anbieter. Der Nutzer erhält lediglich ein nicht-übertragbares, nicht-exklusives Nutzungsrecht für die Dauer des Vertrags.

§ 11 Änderungen der AGB
Änderungen werden dem Nutzer per E-Mail mindestens 4 Wochen vor Inkrafttreten angekündigt.

§ 12 Schlussbestimmungen
12.1 Gerichtsstand für Kaufleute ist München.
12.2 Es gilt deutsches Recht unter Ausschluss des UN-Kaufrechts (CISG).
12.3 Salvatorische Klausel.`

const DSE_DE = `Datenschutzerklärung
Stand: März 2026

Gemäß Art. 13/14 DSGVO, TTDSG und anwendbarem deutschen Datenschutzrecht

1. Verantwortlicher
vencly GmbH
Leopoldstraße 31, 80802 München
E-Mail: datenschutz@vencly.com
Geschäftsführer: Clemens Eugen Theodor Pompeÿ
HRB 290524, Amtsgericht München

2. Verarbeitete Datenkategorien & Zwecke

a) Account-Daten (Name, E-Mail-Adresse, Passwort-Hash)
Zweck: Vertragserfüllung (Art. 6 Abs. 1 lit. b DSGVO)

b) Suchanfragen im Pro-Modus
Zweck: Vertragserfüllung (Art. 6 Abs. 1 lit. b DSGVO)
Hinweis: Bei BYOK werden Inhalte direkt an den gewählten KI-Anbieter übermittelt (keine dauerhafte Speicherung auf Geopotatlas-Servern).

c) Nutzungs- und Logdaten (IP-Adresse, Zugriffszeiten, Fehlermeldungen)
Zweck: Berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO) – IT-Sicherheit, Missbrauchsprävention

d) LLM-API-Keys
Zweck: Vertragserfüllung (lit. b). Keys werden verschlüsselt gespeichert.

e) Feedback
Zweck: Freiwillig eingereichte Nachrichten. Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO.

3. BYOK – KI-Drittanbieter
Bei Nutzung des BYOK-Modells werden Anfrageinhalte direkt an den vom Nutzer gewählten Anbieter übermittelt. Es gelten die Datenschutzrichtlinien des gewählten Anbieters:
- Anthropic: anthropic.com/privacy
- Microsoft: privacy.microsoft.com
- Perplexity AI: perplexity.ai/privacy

Die US-amerikanischen Anbieter haben Standardvertragsklauseln mit der EU abgeschlossen (Art. 46 Abs. 2 lit. c DSGVO).

4. Auftragsverarbeiter
Supabase Inc. – Datenbank, Authentifizierung. Serverstandort: EU (Frankfurt am Main).

5. Speicherdauer
- Account-Daten: bis zur Kündigung + 30 Tage
- Logdaten: maximal 30 Tage rollierend
- Feedback-Daten: anonymisiert nach 12 Monaten
- Steuerrelevante Daten: 10 Jahre (§ 147 AO)

6. Betroffenenrechte (Art. 15–22 DSGVO)
Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit und Widerspruch. Kontakt: datenschutz@vencly.com

7. Beschwerderecht
Bayerisches Landesamt für Datenschutzaufsicht (BayLDA)
Promenade 18, 91522 Ansbach – www.lda.bayern.de

8. Cookies & Tracking
Geopotatlas verwendet ausschließlich funktional notwendige Cookies für die Sitzungsverwaltung (Supabase Auth). Es werden keine Analyse-, Werbe- oder Tracking-Cookies eingesetzt (§ 25 Abs. 2 Nr. 2 TTDSG).

9. Datensicherheit (Art. 32 DSGVO)
- TLS 1.3 + HSTS für alle Datenübertragungen
- Verschlüsselung gespeicherter API-Keys
- PostgreSQL Row-Level Security (Mandantentrennung)
- Security Headers (X-Frame-Options DENY, nosniff)

10. Änderungen dieser Datenschutzerklärung
Nutzer werden über wesentliche Änderungen per E-Mail informiert.`

// ── i18n strings ─────────────────────────────────────────────────────────────

const COPY = {
  de: {
    tagline: 'Geothermie-Potenziale. KI-gestützt. In Echtzeit.',
    sub: 'Geopotatlas kombiniert öffentliche Geodaten, Live-WMS-Dienste und KI-Analyse — damit Bohrunternehmen, Stadtwerke und Business Developer geothermische Potenziale und Fernwärme-Abnehmer in Deutschland auf einen Blick erkennen.',
    login: 'Anmelden',
    signup: 'Kostenlos registrieren',
    f1t: 'Geothermische Karte',
    f1d: 'Aquifere, Malmkarst, Lockergestein und Wärmepotenziale auf einer interaktiven Karte — mit Live-WMS-Diensten von BGR, LANUK NRW und Zensus 2022.',
    f2t: 'Fernwärme-Intelligence',
    f2d: '8.684 Fernwärmenetze aus dem RWTH-Aachen-Datensatz, bestehende Städte nach FW-Anteil, Ausbauplanungen und OSM-Heizwerke — alles in einem Layer.',
    f3t: 'Geopotatlas Pro (KI)',
    f3d: 'Beschreibe dein Vorhaben in Freitext. Die KI aktiviert die relevanten Layer, lokalisiert Potenziale und listet potenzielle Abnehmer oder Partner.',
    f4t: 'Wärmeproduzenten',
    f4d: 'Rechenzentren, Kraftwerke, Müllverbrennung, Stahlwerke und Industrieabwärme (BfEE) — alle potenziellen Wärmequellen im Überblick.',
    audience: 'Für wen?',
    a1: 'Bohrunternehmen & Projektentwickler',
    a2: 'Stadtwerke & Fernwärmeversorger',
    a3: 'Business Developer & Berater',
    a4: 'Geologen & Hydrologen',
    cta: 'Jetzt kostenlos starten',
    legal: 'Rechtliches',
    impressum: 'Impressum',
    agb: 'AGB',
    dse: 'Datenschutz',
    close: 'Schließen',
    copyright: '© 2026 vencly GmbH. Alle Rechte vorbehalten.',
  },
  en: {
    tagline: 'Geothermal potential. AI-powered. Real-time.',
    sub: 'Geopotatlas combines public geodata, live WMS services and AI analysis — helping drilling companies, utilities and business developers identify geothermal potential and district heating customers across Germany at a glance.',
    login: 'Sign in',
    signup: 'Get started free',
    f1t: 'Geothermal Map',
    f1d: 'Aquifers, Malmkarst, unconsolidated rock and heat potential on an interactive map — with live WMS services from BGR, LANUK NRW and Census 2022.',
    f2t: 'District Heating Intelligence',
    f2d: '8,684 district heating networks from the RWTH Aachen dataset, existing cities by DH share, expansion plans and OSM heating plants — all in one layer.',
    f3t: 'Geopotatlas Pro (AI)',
    f3d: 'Describe your project in plain text. The AI activates the relevant layers, locates potential and lists possible customers or partners.',
    f4t: 'Heat Producers',
    f4d: 'Data centres, power plants, waste-to-energy, steel mills and industrial waste heat (BfEE) — all potential heat sources at a glance.',
    audience: 'Who is it for?',
    a1: 'Drilling companies & project developers',
    a2: 'Municipal utilities & district heating providers',
    a3: 'Business developers & consultants',
    a4: 'Geologists & hydrogeologists',
    cta: 'Start for free',
    legal: 'Legal',
    impressum: 'Imprint',
    agb: 'Terms',
    dse: 'Privacy',
    close: 'Close',
    copyright: '© 2026 vencly GmbH. All rights reserved.',
  },
}

// ── Modal ─────────────────────────────────────────────────────────────────────

function Modal({ title, content, onClose }) {
  return (
    <div style={{
      position: 'fixed', inset: 0, background: 'rgba(0,0,0,.75)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      zIndex: 9900, padding: 20,
    }} onClick={onClose}>
      <div style={{
        background: '#0f1d35', border: '1px solid rgba(91,175,214,.2)',
        borderRadius: 12, width: '100%', maxWidth: 680, maxHeight: '80vh',
        display: 'flex', flexDirection: 'column',
        boxShadow: '0 24px 64px rgba(0,0,0,.8)',
      }} onClick={e => e.stopPropagation()}>
        <div style={{
          padding: '18px 24px', borderBottom: '1px solid rgba(91,175,214,.1)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexShrink: 0,
        }}>
          <div style={{ fontSize: 15, fontWeight: 700, color: '#fff' }}>{title}</div>
          <button onClick={onClose} style={{
            background: 'none', border: 'none', color: 'var(--muted)',
            fontSize: 20, cursor: 'pointer', lineHeight: 1,
          }}>✕</button>
        </div>
        <div style={{
          padding: '20px 24px', overflowY: 'auto', fontSize: 13,
          color: 'rgba(255,255,255,.75)', lineHeight: 1.8, whiteSpace: 'pre-wrap',
        }}>
          {content}
        </div>
      </div>
    </div>
  )
}

// ── Feature card ──────────────────────────────────────────────────────────────

function Feature({ icon, title, desc }) {
  return (
    <div style={{
      background: 'rgba(255,255,255,.03)', border: '1px solid rgba(91,175,214,.12)',
      borderRadius: 12, padding: '24px 22px',
    }}>
      <div style={{ fontSize: 28, marginBottom: 12 }}>{icon}</div>
      <div style={{ fontSize: 15, fontWeight: 700, color: '#fff', marginBottom: 8 }}>{title}</div>
      <div style={{ fontSize: 13, color: 'rgba(255,255,255,.6)', lineHeight: 1.6 }}>{desc}</div>
    </div>
  )
}

// ── Main component ────────────────────────────────────────────────────────────

export default function LandingPage({ onLogin, onSignup }) {
  const lang       = useLangStore(s => s.lang)
  const toggleLang = useLangStore(s => s.toggleLang)
  const c          = COPY[lang]
  const [modal, setModal] = useState(null) // null | 'impressum' | 'agb' | 'dse'

  return (
    <div style={{
      minHeight: '100vh', background: '#070f1e',
      fontFamily: "'Inter','Segoe UI',system-ui,sans-serif",
      color: '#fff',
    }}>

      {/* ── Header ── */}
      <header style={{
        position: 'sticky', top: 0, zIndex: 100,
        background: 'rgba(7,15,30,.92)', backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(91,175,214,.1)',
        padding: '0 32px', height: 60,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <a href="https://www.vencly.com" target="_blank" rel="noopener"
          style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <img src="vencly.png" alt="Venclÿ" style={{ height: 28 }} />
          <span style={{ fontSize: 15, fontWeight: 700, color: '#22d3ee',
            fontFamily: "'Georgia',serif", letterSpacing: '-.3px' }}>
            Geopotatlas
          </span>
        </a>

        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <button onClick={toggleLang} style={{
            background: 'rgba(255,255,255,.06)', border: '1px solid rgba(91,175,214,.2)',
            borderRadius: 6, color: 'rgba(255,255,255,.6)', fontSize: 11, fontWeight: 700,
            padding: '5px 10px', cursor: 'pointer', fontFamily: 'inherit',
          }}>{c.dse === 'Privacy' ? 'DE' : 'EN'}</button>
          <button onClick={onLogin} style={{
            background: 'none', border: '1px solid rgba(91,175,214,.3)',
            borderRadius: 7, color: 'rgba(255,255,255,.8)', fontSize: 13,
            padding: '7px 16px', cursor: 'pointer', fontFamily: 'inherit',
            transition: 'border-color .15s',
          }}>{c.login}</button>
          <button onClick={onSignup} style={{
            background: 'linear-gradient(135deg,#0ea5e9,#0284c7)',
            border: 'none', borderRadius: 7, color: '#fff', fontSize: 13, fontWeight: 600,
            padding: '7px 18px', cursor: 'pointer', fontFamily: 'inherit',
          }}>{c.signup}</button>
        </div>
      </header>

      {/* ── Hero ── */}
      <section style={{
        maxWidth: 860, margin: '0 auto', padding: '90px 32px 70px',
        textAlign: 'center',
      }}>
        <div style={{
          display: 'inline-block', background: 'rgba(14,165,233,.12)',
          border: '1px solid rgba(14,165,233,.25)', borderRadius: 20,
          padding: '5px 14px', fontSize: 11, color: '#38bdf8',
          fontWeight: 600, letterSpacing: '.5px', textTransform: 'uppercase',
          marginBottom: 28,
        }}>
          Geothermie · Fernwärme · KI
        </div>
        <h1 style={{
          fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 800, lineHeight: 1.15,
          letterSpacing: '-.5px', marginBottom: 24,
          background: 'linear-gradient(135deg,#fff 60%,#38bdf8)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
        }}>
          {c.tagline}
        </h1>
        <p style={{
          fontSize: 17, color: 'rgba(255,255,255,.6)', lineHeight: 1.7,
          maxWidth: 680, margin: '0 auto 40px',
        }}>
          {c.sub}
        </p>
        <button onClick={onSignup} style={{
          background: 'linear-gradient(135deg,#0ea5e9,#0284c7)',
          border: 'none', borderRadius: 10, color: '#fff',
          fontSize: 15, fontWeight: 700, padding: '14px 36px',
          cursor: 'pointer', fontFamily: 'inherit',
          boxShadow: '0 8px 24px rgba(14,165,233,.35)',
        }}>
          {c.cta} →
        </button>
      </section>

      {/* ── Map preview strip ── */}
      <div style={{
        background: 'linear-gradient(180deg,rgba(14,165,233,.06) 0%,transparent 100%)',
        borderTop: '1px solid rgba(91,175,214,.08)',
        borderBottom: '1px solid rgba(91,175,214,.08)',
        padding: '20px 32px',
        display: 'flex', justifyContent: 'center', gap: 32, flexWrap: 'wrap',
      }}>
        {['8.684 Fernwärmenetze', '5 Aquifer-Typen', 'Live WMS-Dienste', 'BYOK KI-Analyse'].map(s => (
          <div key={s} style={{ display: 'flex', alignItems: 'center', gap: 8,
            fontSize: 13, color: 'rgba(255,255,255,.5)' }}>
            <span style={{ color: '#0ea5e9', fontWeight: 700 }}>✓</span> {s}
          </div>
        ))}
      </div>

      {/* ── Features ── */}
      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 32px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: 20,
        }}>
          <Feature icon="🗺" title={c.f1t} desc={c.f1d} />
          <Feature icon="🔥" title={c.f2t} desc={c.f2d} />
          <Feature icon="✦" title={c.f3t} desc={c.f3d} />
          <Feature icon="⚡" title={c.f4t} desc={c.f4d} />
        </div>
      </section>

      {/* ── Audience ── */}
      <section style={{
        maxWidth: 860, margin: '0 auto', padding: '0 32px 80px', textAlign: 'center',
      }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, marginBottom: 32, color: '#fff' }}>
          {c.audience}
        </h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
          {[c.a1, c.a2, c.a3, c.a4].map(a => (
            <div key={a} style={{
              background: 'rgba(14,165,233,.08)', border: '1px solid rgba(14,165,233,.2)',
              borderRadius: 8, padding: '10px 18px', fontSize: 13,
              color: 'rgba(255,255,255,.8)',
            }}>{a}</div>
          ))}
        </div>
      </section>

      {/* ── CTA banner ── */}
      <section style={{
        background: 'linear-gradient(135deg,rgba(14,165,233,.12),rgba(2,132,199,.06))',
        border: '1px solid rgba(14,165,233,.15)',
        borderRadius: 16, margin: '0 32px 80px', padding: '48px 32px',
        textAlign: 'center', maxWidth: 860,
        marginLeft: 'auto', marginRight: 'auto',
      }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, marginBottom: 12 }}>{c.cta}</h2>
        <p style={{ color: 'rgba(255,255,255,.55)', fontSize: 14, marginBottom: 28 }}>
          {lang === 'de'
            ? 'Kostenlos registrieren — kein BYOK-Key nötig für die Kartenansicht.'
            : 'Sign up for free — no API key required for the map view.'}
        </p>
        <button onClick={onSignup} style={{
          background: 'linear-gradient(135deg,#0ea5e9,#0284c7)',
          border: 'none', borderRadius: 10, color: '#fff',
          fontSize: 15, fontWeight: 700, padding: '13px 34px',
          cursor: 'pointer', fontFamily: 'inherit',
        }}>
          {c.signup} →
        </button>
      </section>

      {/* ── Footer ── */}
      <footer style={{
        borderTop: '1px solid rgba(91,175,214,.08)',
        padding: '28px 32px',
        display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between',
        alignItems: 'center', gap: 16,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <a href="https://www.vencly.com" target="_blank" rel="noopener">
            <img src="vencly.png" alt="Venclÿ" style={{ height: 22, opacity: .6 }} />
          </a>
          <span style={{ fontSize: 12, color: 'rgba(255,255,255,.35)' }}>{c.copyright}</span>
        </div>

        <div style={{ display: 'flex', gap: 20 }}>
          {[
            { key: 'impressum', label: c.impressum },
            { key: 'agb',       label: c.agb },
            { key: 'dse',       label: c.dse },
          ].map(({ key, label }) => (
            <button key={key} onClick={() => setModal(key)} style={{
              background: 'none', border: 'none',
              color: 'rgba(255,255,255,.4)', fontSize: 12,
              cursor: 'pointer', fontFamily: 'inherit',
              transition: 'color .15s',
            }}
              onMouseEnter={e => e.target.style.color = 'rgba(255,255,255,.8)'}
              onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,.4)'}
            >{label}</button>
          ))}
        </div>
      </footer>

      {/* ── Modals ── */}
      {modal === 'impressum' && (
        <Modal title={c.impressum} content={IMPRESSUM} onClose={() => setModal(null)} />
      )}
      {modal === 'agb' && (
        <Modal title={c.agb} content={AGB_DE} onClose={() => setModal(null)} />
      )}
      {modal === 'dse' && (
        <Modal title={c.dse} content={DSE_DE} onClose={() => setModal(null)} />
      )}
    </div>
  )
}
