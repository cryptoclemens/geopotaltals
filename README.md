# Geopotatlas

**Geothermie-Skalierungspotenzial – Live-Daten · Nordeuropäisches Tiefland · Fernwärme · Wärmeproduzenten**

Eine webbasierte SaaS-Plattform zur Visualisierung und KI-gestützten Analyse geothermischer Potenziale, Aquifer-Daten und Fernwärmenetze in Deutschland.

Live: [gpa.vencly.com](https://gpa.vencly.com) · Betrieben von [vencly GmbH](https://www.vencly.com)

---

## Inhaltsverzeichnis

- [Features](#features)
- [Tech-Stack](#tech-stack)
- [Projektstruktur](#projektstruktur)
- [Lokale Entwicklung](#lokale-entwicklung)
- [Umgebungsvariablen](#umgebungsvariablen)
- [Supabase Setup](#supabase-setup)
- [Deployment](#deployment)
- [Datenschichten](#datenschichten)
- [Authentifizierung & Nutzerprofil](#authentifizierung--nutzerprofil)
- [Geopotatlas Pro (BYOK)](#geopotatlas-pro-byok)
- [i18n / Mehrsprachigkeit](#i18n--mehrsprachigkeit)
- [Geodaten](#geodaten)
- [Lizenz & rechtliche Hinweise](#lizenz--rechtliche-hinweise)

---

## Features

### Kartenansicht (kostenlos)
- Interaktive Leaflet-Karte mit Basis-Tiles (OSM, Satellit, Topo)
- **WMS-Dienste** von BGR (Bundesanstalt für Geowissenschaften), LANUK NRW, Zensus 2022
- **Aquifer-Layer** (Malmkarst, Lockergestein, Mesozoikum, Kristallin)
- **Fernwärme-Layer** — 8.684 Netze aus dem RWTH-Aachen-Datensatz (AixDHN)
- **Wärmequellen** — Rechenzentren, Kraftwerke/Industrie, BfEE-Abwärmestandorte
- **Kommunale Wärmeplanung (KWP NRW)** — Energieträger und Wärmecluster (LANUK)
- **Fernwärme-Städte** nach Anteil (>20 %)
- Ortsuche, Layer-Gruppen-Steuerung, Legende
- Viewport-Zähler (Potenziale im sichtbaren Ausschnitt)
- Druckfunktion / Kartenexport
- Feedback-Modal (GitHub Issues API)
- Geführte Tour für Erstnutzer

### Geopotatlas Pro (KI-gestützt)
- Freitextbasierte KI-Analyse: Nutzer beschreibt Vorhaben, KI aktiviert relevante Layer
- Liefert strukturierte Analyse: Bohrpotenzial, Aquifer-Eignung, Fernwärme-Abnehmer, Nächste Schritte
- **BYOK-Modell** (Bring Your Own Key): Claude (Anthropic), MS Copilot, Perplexity
- API-Key-Validierung vor dem Speichern (Testanfrage an Anbieter-API)
- Pro-Tab gesperrt (🔒) ohne API-Key — Prompt zur Einrichtung

### Authentifizierung & Nutzerverwaltung
- Supabase Auth: E-Mail/Passwort, Magic Link
- Registrierung mit Anzeigename + Pflicht-Zustimmung zu AGB & Datenschutzerklärung
- Profil-Einstellungen: Anzeigename, E-Mail, Passwort, API-Keys
- Erster-Login-Prompt: einmalige Aufforderung zur API-Key-Einrichtung (überspringbar)

### Landing Page
- Mehrsprachige Landing Page (DE/EN) mit Hero, Features, Zielgruppen, CTA
- Impressum, AGB und Datenschutzerklärung direkt aufrufbar (Inline-Modals)

---

## Tech-Stack

| Bereich | Technologie |
|---|---|
| Frontend | React 19 + Vite 7 |
| Karte | Leaflet + react-leaflet |
| State Management | Zustand |
| Backend / Auth | Supabase (PostgreSQL + Auth) |
| KI-Integration | Anthropic Claude API (BYOK) |
| CSS | Custom CSS + Tailwind CSS v4 |
| Deployment | GitHub Pages via GitHub Actions |
| DNS / CDN | Cloudflare |

---

## Projektstruktur

```
src/
├── App.jsx                         # Root-Komponente: Auth-Gate, Header, Layout
├── App.css                         # Globale Stile
├── index.css                       # CSS-Variablen
├── main.jsx                        # Einstiegspunkt
│
├── components/
│   ├── LandingPage.jsx             # Landing Page (DE/EN) für nicht eingeloggte Nutzer
│   │
│   ├── auth/
│   │   ├── LoginScreen.jsx         # Login / Registrierung / Magic Link Modal
│   │   ├── ApiKeySettings.jsx      # Einstellungs-Modal (KI-API + Profil-Tabs)
│   │   └── legalTexts.js           # Zentrale Rechtstexte: Impressum, AGB, DSE (DE)
│   │
│   ├── map/
│   │   ├── MapView.jsx             # Leaflet-Karte, Event-Handler
│   │   ├── BaseLayers.jsx          # Basis-Tiles (OSM, Satellit, Topo)
│   │   ├── WMSLayers.jsx           # WMS-Dienste (BGR, LANUK, Zensus)
│   │   ├── AquiferLayers.jsx       # Aquifer-GeoJSON-Layer
│   │   ├── AixDhnLayer.jsx         # Fernwärme-Netze (RWTH-Datensatz)
│   │   ├── FWCitiesLayer.jsx       # Fernwärme-Städte nach Anteil
│   │   ├── HeatSourceLayers.jsx    # Wärmequellen (DC, Kraftwerke, BfEE)
│   │   ├── KwpLayers.jsx           # Kommunale Wärmeplanung NRW
│   │   └── ViewportCounter.jsx     # Potenziale im sichtbaren Ausschnitt
│   │
│   ├── pro/
│   │   └── ProView.jsx             # KI-Analyse-Panel (BYOK)
│   │
│   ├── sidebar/
│   │   ├── Sidebar.jsx             # Layer-Steuerung, Ortsuche
│   │   ├── LayerGroup.jsx          # Aufklappbare Layer-Gruppe
│   │   └── Ortssuche.jsx           # Ortsuche (Nominatim)
│   │
│   └── ui/
│       ├── BootLog.jsx             # Initialisierungs-Log
│       ├── FeedbackModal.jsx       # Feedback → GitHub Issues
│       ├── GuidedTour.jsx          # Geführte Tour für Erstnutzer
│       ├── InfoPanel.jsx           # Klick-Info-Panel für Kartenobjekte
│       ├── Legend.jsx              # Layer-Legende
│       ├── Loader.jsx              # Ladeindikator
│       ├── OsmSpinner.jsx          # OSM-Overpass-API-Spinner
│       ├── PrintDialog.jsx         # Drucken / Kartenexport
│       ├── StatListPanel.jsx       # Liste der Potenziale im Ausschnitt
│       └── WelcomeOverlay.jsx      # Willkommens-Overlay für Erstnutzer
│
├── data/
│   ├── fwCities.js                 # Fernwärme-Städte-Datensatz (statisch)
│   └── layers.js                   # Layer-Definitionen und Metadaten
│
├── lib/
│   ├── supabase.js                 # Supabase-Client
│   └── i18n.js                     # Übersetzungsfunktion t(key, lang) DE/EN
│
└── store/
    ├── useAuthStore.js             # Auth-State, API-Key-Speicherung, Profil
    ├── useLangStore.js             # Sprachauswahl DE/EN (persistiert in localStorage)
    ├── useLayerStore.js            # Layer-Sichtbarkeit und -konfiguration
    └── useUIStore.js               # UI-State (Panels, Modals, Stats)

public/
├── geodata/
│   ├── aix-dhn-centroids.json      # Fernwärme-Netz-Zentroide (AixDHN / RWTH Aachen)
│   ├── kwp-energietraeger.geojson  # Energieträger-Verteilung je Gemeinde (LANUK NRW)
│   ├── kwp-waermecluster.geojson   # Wärmecluster-Potenzialflächen (LANUK NRW)
│   └── README.md                   # Geodaten-Dokumentation + Update-Anleitung
├── vencly.png                      # Vencly-Logo
└── CNAME                           # Custom Domain (gpa.vencly.com)
```

---

## Lokale Entwicklung

### Voraussetzungen

- Node.js ≥ 20
- npm ≥ 10

### Setup

```bash
git clone https://github.com/cryptoclemens/geopotatlas.git
cd geopotatlas
npm install
npm run dev
```

App läuft unter `http://localhost:5173/geopotatlas/`

### Verfügbare Scripts

| Script | Beschreibung |
|---|---|
| `npm run dev` | Vite Dev-Server mit HMR |
| `npm run build` | Produktions-Build nach `dist/` |
| `npm run preview` | Produktions-Build lokal vorschauen |
| `npm run lint` | ESLint prüfen |

---

## Umgebungsvariablen

Aktuell sind Supabase-URL und Anon-Key direkt in `src/lib/supabase.js` eingetragen (für GitHub Pages Kompatibilität). Für die Hetzner-Migration werden diese auf `.env`-Variablen umgestellt:

```env
VITE_SUPABASE_URL=https://gpa.vencly.com/supabase
VITE_SUPABASE_ANON_KEY=<anon-key>
VITE_GH_FEEDBACK_TOKEN=<github-token-für-feedback-issues>
```

---

## Supabase Setup

### Tabellen

```sql
-- profiles-Tabelle
create table profiles (
  id              uuid references auth.users primary key,
  display_name    text,
  claude_api_key  text,
  copilot_api_key text,
  perplexity_api_key text,
  preferred_provider text default 'claude',
  created_at      timestamptz default now()
);

alter table profiles enable row level security;

create policy "Eigenes Profil lesen/schreiben"
  on profiles for all
  using (auth.uid() = id)
  with check (auth.uid() = id);

-- Trigger: Profil automatisch bei Registrierung anlegen
create or replace function handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id) values (new.id);
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure handle_new_user();
```

### Auth-Konfiguration (Supabase Dashboard)

- **Site URL:** `https://gpa.vencly.com`
- **Redirect URLs:** `https://gpa.vencly.com`, `https://cryptoclemens.github.io/geopotatlas/`
- E-Mail-Templates: Sprache und Absendername anpassen

---

## Deployment

### Aktuell: GitHub Pages

Branch `react-app` → GitHub Actions → `dist/` → GitHub Pages unter `cryptoclemens.github.io/geopotatlas/` (Custom Domain: `gpa.vencly.com`)

```yaml
# .github/workflows/deploy.yml (vereinfacht)
on:
  push:
    branches: [react-app]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm ci && npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
          publish_branch: gh-pages
```

### Geplant: Hetzner Cloud

Siehe [`Migration.md`](Migration.md) für den vollständigen Migrationsplan inkl. Supabase self-hosted, nginx, SSL und GitHub Actions.

---

## Datenschichten

### WMS-Dienste (live)

| Layer | Quelle | Beschreibung |
|---|---|---|
| Tiefbohrungen | BGR | Tiefengeothermie-Bohrungen |
| Aquifer-WMS | BGR | Geothermische Aquifer-Typen |
| Zensus-Wärme | Destatis | Wärmeversorgung nach Gebäudetyp |
| KWP Energieträger | LANUK NRW | Kommunale Wärmeplanung |
| KWP Wärmecluster | LANUK NRW | Potenzialflächen für Fernwärme |

### Lokale Geodaten

| Datei | Inhalt | Quelle |
|---|---|---|
| `aix-dhn-centroids.json` | 8.684 Fernwärmenetz-Zentroide | RWTH Aachen / AixDHN |
| `kwp-energietraeger.geojson` | Energieträger je Gemeinde (NRW) | LANUK / opengeodata.nrw.de |
| `kwp-waermecluster.geojson` | Wärmecluster-Potenzialflächen (NRW) | LANUK / opengeodata.nrw.de |

### OSM / Overpass API (live)

- Rechenzentren (`power=plant`, `building=data_center`)
- Wärmekraftwerke / Industrie
- BfEE-Abwärmestandorte

---

## Authentifizierung & Nutzerprofil

```
Nicht eingeloggt:  LandingPage → LoginScreen (Modal)
Eingeloggt:        App mit Header, Karte, Pro-Tab

Auth-Flow:
  Registrierung → AGB/DSE-Zustimmung (Pflicht) → E-Mail-Bestätigung → Login
  Magic Link     → OTP per E-Mail → automatischer Login
  Passwort-Login → sofort
```

**`useAuthStore`** (Zustand):
- `user` — aktueller Supabase-Auth-User
- `profile` — Profildaten aus `profiles`-Tabelle (inkl. API-Keys)
- `loading` — Initialisierungsstatus
- `saveApiKey(key, provider)` — validiert Claude-Keys vor dem Speichern
- `saveProfile({ display_name, email, password })` — Profil- und Auth-Daten aktualisieren
- `signOut()` — Abmelden

---

## Geopotatlas Pro (BYOK)

### Funktionsweise

1. Nutzer gibt API-Key ein → Validierungsanfrage (`max_tokens: 1`) an Anbieter-API
2. Key wird in `profiles.claude_api_key` / `copilot_api_key` / `perplexity_api_key` gespeichert
3. Pro-Tab wird freigeschaltet (🔒 entfällt)
4. Nutzer beschreibt Vorhaben in Freitext
5. KI-Antwort wird als strukturiertes JSON interpretiert:
   - **Standort** (erkannt aus Freitext)
   - **Layer** (welche Kartenebenen aktiviert werden)
   - **Bohrpotenzial** (Aquifer, Temperatur, Tiefe, Eignung)
   - **Abnehmer** (potenzielle Fernwärme-Kunden)
   - **Nächste Schritte**

### Unterstützte KI-Anbieter

| Anbieter | Key-Format | Endpunkt |
|---|---|---|
| Claude (Anthropic) | `sk-ant-…` | `api.anthropic.com/v1/messages` |
| MS Copilot | `Bearer ey…` | Microsoft Azure OpenAI |
| Perplexity | `pplx-…` | `api.perplexity.ai/chat/completions` |

---

## i18n / Mehrsprachigkeit

Sprachauswahl DE/EN über `useLangStore` (Zustand), persistiert in `localStorage` (`gpa_lang`).

```js
import { t } from './lib/i18n'
import { useLangStore } from './store/useLangStore'

const lang = useLangStore(s => s.lang)          // 'de' | 'en'
const toggleLang = useLangStore(s => s.toggleLang)

t('tab.map', lang)   // → 'Karte' | 'Map'
t('login.email', lang) // → 'E-Mail-Adresse' | 'Email address'
```

Alle Übersetzungskeys sind in `src/lib/i18n.js` definiert.

---

## Geodaten

### Lizenzen

| Datensatz | Lizenz |
|---|---|
| OpenStreetMap | ODbL ([openstreetmap.org/copyright](https://www.openstreetmap.org/copyright)) |
| BGR-Geodaten | Datenlizenz Deutschland – Namensnennung – Version 2.0 |
| LANUK NRW (KWP) | Datenlizenz Deutschland – Namensnennung – Version 2.0 |
| AixDHN (RWTH Aachen) | Akademische Nutzungslizenz |
| Zensus 2022 | Destatis – freie Nutzung mit Quellenangabe |

### Geodaten aktualisieren

Siehe [`public/geodata/README.md`](public/geodata/README.md) für Anleitung zur Aktualisierung der KWP-Datensätze (ogr2ogr / EPSG:25832 → WGS84).

---

## Lizenz & rechtliche Hinweise

- **Plattform-Code:** Proprietär, vencly GmbH — alle Rechte vorbehalten
- **Rechtliche Dokumente** (Impressum, AGB, Datenschutz): `src/components/auth/legalTexts.js`
- **Kein Ersatz für Fachberatung:** Die angezeigten Geodaten und KI-Analysen ersetzen keine geologische, hydrologische oder energiewirtschaftliche Fachberatung. Bohrentscheidungen und Investitionspläne dürfen nicht allein auf Basis der Plattformdaten getroffen werden.

---

## Branches

| Branch | Zweck |
|---|---|
| `react-app` | Produktions-Branch → GitHub Pages Deploy |
| `claude/fix-geopotatlas-password-prompt-*` | Feature-Branches (Claude Code) |

Merges erfolgen via Pull Request `claude/…` → `react-app`.
