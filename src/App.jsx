import MapView from './components/map/MapView'
import Sidebar from './components/sidebar/Sidebar'
import Legend from './components/ui/Legend'
import InfoPanel from './components/ui/InfoPanel'
import FeedbackModal from './components/ui/FeedbackModal'

const VERSION = 'v1.0 React'

export default function App() {
  return (
    <>
      {/* ── Header ─────────────────────────────── */}
      <header>
        <div className="hdr-left">
          {/* Vencly Logo */}
          <a href="https://www.vencly.com" target="_blank" rel="noopener" className="logo-link">
            <img src="vencly.png" className="logo-img" alt="Venclÿ" />
          </a>
          {/* Title */}
          <div className="hdr-title">
            <h1>Geothermie-Skalierungspotenzial {VERSION}</h1>
            <p>Live-Daten · Nordeuropäisches Tiefland · Fernwärme · Wärmeproduzenten</p>
          </div>
        </div>

        {/* Stat tiles */}
        <div className="hdr-stats">
          <span className="potentiale-label">Potentiale</span>
          <div className="stat" title="Rechenzentren im Ausschnitt">
            <div className="stat-v" id="stat-dc">—</div>
            <div className="stat-l">im Ausschnitt<br /><small style={{opacity:.7}}>Rechenzentren</small></div>
          </div>
          <div className="stat" title="Kraftwerke/Industrie im Ausschnitt">
            <div className="stat-v" id="stat-pp">—</div>
            <div className="stat-l">im Ausschnitt<br /><small style={{opacity:.7}}>Kraftwerke/Ind.</small></div>
          </div>
          <div className="stat" title="BfEE-Abwärmestandorte im Ausschnitt">
            <div className="stat-v" id="stat-abw">—</div>
            <div className="stat-l">im Ausschnitt<br /><small style={{opacity:.7}}>Abwärme (BfEE)</small></div>
          </div>
          <div className="stat" title="Fernwärme-Städte &gt;20% im Ausschnitt">
            <div className="stat-v" id="stat-fw">—</div>
            <div className="stat-l">im Ausschnitt<br /><small style={{opacity:.7}}>FW-Städte &gt;20%</small></div>
          </div>
          <button className="print-btn-hdr" title="Drucken" onClick={() => window.print()}>🖨</button>
        </div>
      </header>

      {/* ── Map + overlaid panels ───────────────── */}
      <div id="map-wrap">
        <MapView />
        <Sidebar />
        <InfoPanel />
        <Legend />
        {/* powered by Vencly */}
        <div className="powered-by">
          powered by <a href="https://www.vencly.com" target="_blank" rel="noopener">Venclÿ</a>
        </div>
      </div>

      <FeedbackModal />
    </>
  )
}
