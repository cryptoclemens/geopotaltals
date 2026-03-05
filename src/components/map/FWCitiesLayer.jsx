import { CircleMarker, Popup } from 'react-leaflet'
import { useLayerStore } from '../../store/useLayerStore'
import { FW_CITIES, dhColor, dhCategory } from '../../data/fwCities'

function CityPopup({ city }) {
  const c = dhColor(city.dh)
  return (
    <div className="det-popup">
      <div className="det-header" style={{ borderColor: c }}>
        <div className="det-title">{city.n}</div>
        <div className="det-op">{city.op || '–'}</div>
      </div>
      <div className="det-body">
        <div className="det-row">
          <span className="det-k">Land</span>
          <span className="det-v">{city.c}</span>
        </div>
        <div className="det-row">
          <span className="det-k">Status</span>
          <span className="det-v" style={{ color: c }}>{city.status || 'In Betrieb'}</span>
        </div>
        <div className="det-row">
          <span className="det-k">FW-Anteil</span>
          <span className="det-v" style={{ color: c, fontWeight: 600 }}>
            {city.dh > 0 ? `${city.dh}%` : 'Geplant'}
          </span>
        </div>
        <div className="det-row">
          <span className="det-k">Bevölkerung</span>
          <span className="det-v">{city.pop} Mio.</span>
        </div>
        {city.net_km > 0 && (
          <div className="det-row">
            <span className="det-k">Netzlänge</span>
            <span className="det-v">{city.net_km} km</span>
          </div>
        )}
        <div className="det-divider" />
        <div className="det-src-label">Wärmegestehung</div>
        <div className="det-src">{city.src_mix || 'Daten nicht verfügbar'}</div>
        <div className="det-divider" />
        <div className="det-row">
          <span className="det-k">Website</span>
          <span className="det-v">
            {city.url
              ? <a href={city.url} target="_blank" rel="noopener noreferrer" className="pp-link">{city.url.replace('https://', '')}</a>
              : <span className="t-na">k. A.</span>}
          </span>
        </div>
        <div className="det-row">
          <span className="det-k">Kontakt</span>
          <span className="det-v">{city.contact || 'k. A.'}</span>
        </div>
      </div>
    </div>
  )
}

export default function FWCitiesLayer() {
  const layers = useLayerStore(s => s.layers)

  // Filter cities by active sub-layers
  const visible = FW_CITIES.filter(city => {
    const cat = dhCategory(city.dh)
    return layers[cat]
  })

  return (
    <>
      {visible.map((city, i) => {
        const c = dhColor(city.dh)
        return (
          <CircleMarker
            key={`fw-${i}`}
            center={[city.lat, city.lng]}
            radius={city.pop >= 1 ? 9 : city.pop >= 0.3 ? 7 : 5}
            pathOptions={{
              color: c,
              fillColor: c,
              fillOpacity: 0.7,
              weight: 2,
            }}
          >
            <Popup className="det-popup-wrap" maxWidth={320}>
              <CityPopup city={city} />
            </Popup>
          </CircleMarker>
        )
      })}
    </>
  )
}
