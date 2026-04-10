# Tasks – Geopotatlas

Stand: April 2026

---

## Offen

- [ ] **Überarbeitung UX/UI-Design** *(Feedback 07.04.2026)*
  - Moderneres Layout, bessere Mobile-Tauglichkeit
  - Karten-UI: Layer-Panel als Drawer statt fester Sidebar prüfen

- [ ] **Hetzner-Migration** — Supabase self-hosted + nginx
  - Vollständiger Plan in [`Migration.md`](Migration.md)
  - Voraussetzung: CX22 VPS erstellt, SSH-Zugang eingerichtet

- [ ] **E-Mail-Templates** in Supabase anpassen (Sprache DE, Absender „Geopotatlas")

- [ ] **Passwort vergessen** — Link zur Supabase-Passwort-Reset-Mail im Login-Screen ergänzen

- [ ] **Copilot / Perplexity Integration** vervollständigen
  - Aktuell: Key-Feld vorhanden, aber API-Aufruf in ProView nur für Claude implementiert
  - Ziel: ProView nutzt `preferred_provider` aus Profil und ruft entsprechende API auf

- [ ] **Mehrsprachigkeit Landing Page** — EN-Texte für Feature-Beschreibungen prüfen und verfeinern

---

## Erledigt

- [x] Supabase Auth (E-Mail/Passwort, Magic Link)
- [x] `profiles`-Tabelle mit RLS-Policy und Auto-Trigger bei Registrierung
- [x] API-Key-Speicherung pro Nutzer (Claude / MS Copilot / Perplexity)
- [x] API-Key-Validierung vor dem Speichern (Testanfrage `max_tokens: 1`)
- [x] Pro-Tab-Gating: gesperrt (🔒) ohne API-Key, Prompt zur Einrichtung
- [x] Erster-Login-Prompt: einmalige Aufforderung zur API-Key-Einrichtung
- [x] Profil-Einstellungen: Anzeigename, E-Mail, Passwort, API-Keys (Tabs)
- [x] Anzeigename bei Registrierung erfassen, in `profiles` speichern
- [x] Sprach-Umschalter DE/EN im Header und im Login-Screen
- [x] i18n-Modul (`src/lib/i18n.js`) mit `t(key, lang)`
- [x] `useLangStore` (Zustand, persistiert in `localStorage`)
- [x] Landing Page (DE/EN): Hero, Features, Statistiken, CTA, Footer
- [x] Consent-Checkbox bei Registrierung (AGB + DSE, Inline-Modals)
- [x] Rechtstexte (Impressum, AGB, DSE) für Geopotatlas angepasst
  - §7 AGB: Kein Ersatz für fachliche Beratung (Bohr-Disclaimer)
  - §9.3: Haftungsausschluss externe Geodaten
  - §11: Geodaten-Lizenzen (ODbL, BGR, LANUK, AixDHN)
  - DSE: BYOK, Overpass API, GitHub als Auftragsverarbeiter
- [x] Zentrale Rechtstexte in `src/components/auth/legalTexts.js`
- [x] JSON-Parsing ProView robustifiziert (`match(/\{[\s\S]*\}/)`)
- [x] `max_tokens` in ProView: 1024 → 2048 (Antwort-Truncation behoben)
- [x] Migration.md: vollständiger Hetzner-Migrationsplan
- [x] Supabase Site URL + Redirect URLs konfiguriert
- [x] Supabase `profiles`-Tabelle: `display_name`-Spalte ergänzt

---

## Supabase Setup (Referenz)

SQL im Supabase Dashboard → SQL Editor ausführen (nur einmalig beim ersten Setup):

```sql
create table if not exists profiles (
  id                  uuid references auth.users primary key,
  display_name        text,
  claude_api_key      text,
  copilot_api_key     text,
  perplexity_api_key  text,
  preferred_provider  text default 'claude',
  created_at          timestamptz default now()
);

alter table profiles enable row level security;

drop policy if exists "Eigenes Profil lesen/schreiben" on profiles;
create policy "Eigenes Profil lesen/schreiben"
  on profiles for all
  using (auth.uid() = id)
  with check (auth.uid() = id);

create or replace function handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id) values (new.id)
  on conflict (id) do nothing;
  return new;
end;
$$ language plpgsql security definer;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure handle_new_user();
```

Falls `profiles`-Tabelle bereits existiert und `display_name` fehlt:

```sql
alter table profiles add column if not exists display_name text;
alter table profiles add column if not exists copilot_api_key text;
alter table profiles add column if not exists perplexity_api_key text;
```
