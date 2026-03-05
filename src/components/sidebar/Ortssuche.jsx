import { useState, useRef, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import L from 'leaflet'

let searchMarker = null

async function fetchPlaces(q) {
  if (!q || q.length < 2) return []
  const url = 'https://nominatim.openstreetmap.org/search'
    + '?q=' + encodeURIComponent(q)
    + '&format=json&limit=6&addressdetails=1&accept-language=de&countrycodes=de,at,ch,nl,be,pl'
  const res = await fetch(url)
  return res.json()
}

export default function Ortssuche() {
  const [query, setQuery] = useState('')
  const [open, setOpen]   = useState(false)
  const [debouncedQ, setDebouncedQ] = useState('')
  const inputRef = useRef(null)
  const dropRef  = useRef(null)

  // Debounce
  useEffect(() => {
    const t = setTimeout(() => setDebouncedQ(query), 380)
    return () => clearTimeout(t)
  }, [query])

  const { data: results = [], isFetching } = useQuery({
    queryKey: ['nominatim', debouncedQ],
    queryFn:  () => fetchPlaces(debouncedQ),
    enabled:  debouncedQ.length >= 2,
  })

  useEffect(() => {
    setOpen(debouncedQ.length >= 2)
  }, [results, debouncedQ])

  // Close on outside click
  useEffect(() => {
    const handler = (e) => {
      if (!inputRef.current?.contains(e.target) && !dropRef.current?.contains(e.target))
        setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  function flyTo(d) {
    setOpen(false)
    const a    = d.address || {}
    const name = a.city || a.town || a.village || a.hamlet || d.display_name.split(',')[0]
    const region = [a.state, a.country].filter(Boolean).join(', ')
    const type   = d.type || d.class || ''
    setQuery(name)

    const map  = window._map
    if (!map) return
    const ll   = [parseFloat(d.lat), parseFloat(d.lon)]
    const zoom = type === 'city' ? 12 : type === 'town' ? 13 : 14

    if (searchMarker) { map.removeLayer(searchMarker); searchMarker = null }

    const popup = `
      <div style="font-family:-apple-system,sans-serif;min-width:170px">
        <div style="font-size:14px;font-weight:700;color:#0d1f38;margin-bottom:3px">📍 ${name}</div>
        ${region ? `<div style="font-size:11px;color:#555">${region}</div>` : ''}
        ${type   ? `<div style="font-size:10px;color:#888;text-transform:capitalize">${type}</div>` : ''}
        <div style="font-size:10px;color:#777;border-top:1px solid #eee;margin-top:5px;padding-top:4px">
          ${parseFloat(d.lat).toFixed(5)}° N, ${parseFloat(d.lon).toFixed(5)}° E
        </div>
      </div>`

    searchMarker = L.marker(ll).addTo(map).bindPopup(popup, { maxWidth: 260 }).openPopup()
    map.flyTo(ll, zoom, { duration: 0.9 })
  }

  return (
    <div className="relative px-3 py-2 border-b border-[var(--border)]">
      <div className="relative">
        <span className="absolute left-2 top-1/2 -translate-y-1/2 text-[var(--accent)] text-xs">🔍</span>
        <input
          ref={inputRef}
          value={query}
          onChange={e => setQuery(e.target.value)}
          onFocus={() => query.length >= 2 && setOpen(true)}
          onKeyDown={e => e.key === 'Escape' && setOpen(false)}
          placeholder="Ort suchen…"
          autoComplete="off"
          className="w-full bg-white/5 border border-[var(--border)] rounded-lg pl-7 pr-3 py-1.5
                     text-[var(--text)] text-xs placeholder-[var(--muted)] outline-none
                     focus:border-[var(--accent)]/60 transition-colors"
        />
        {isFetching && (
          <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] text-[var(--muted)] animate-pulse">
            ···
          </span>
        )}
      </div>

      {open && (
        <div
          ref={dropRef}
          className="absolute left-3 right-3 top-full mt-1 z-[9999]
                     bg-[#0f1d35] border border-[var(--accent)]/30 rounded-lg
                     shadow-2xl overflow-y-auto max-h-60"
        >
          {results.length === 0 && !isFetching && (
            <div className="px-3 py-2 text-xs text-[var(--muted)] italic">Kein Ergebnis</div>
          )}
          {results.map((d, i) => {
            const a    = d.address || {}
            const name = a.city || a.town || a.village || a.hamlet || d.display_name.split(',')[0]
            const sub  = [a.state, a.country].filter(Boolean).join(', ')
            return (
              <button
                key={i}
                onMouseDown={() => flyTo(d)}
                className="w-full text-left px-3 py-2 hover:bg-[var(--accent)]/10
                           border-b border-[var(--border)] last:border-0 transition-colors"
              >
                <div className="text-xs font-semibold text-[var(--text)]">{name}</div>
                <div className="text-[10px] text-[var(--muted)]">{sub}</div>
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
