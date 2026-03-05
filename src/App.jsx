import MapView from './components/map/MapView'
import Sidebar from './components/sidebar/Sidebar'
import Legend from './components/ui/Legend'
import FeedbackModal from './components/ui/FeedbackModal'

export default function App() {
  return (
    <>
      {/* Header */}
      <header>
        <div className="hdr-left">
          <div className="hdr-title">
            <h1>Geothermie-Potential-Atlas</h1>
            <p>BOWA · Marktanalyse Europa</p>
          </div>
        </div>
        <div className="hdr-stats">
          <span className="potentiale-label">Potentiale</span>
          <div className="stat">
            <div className="stat-v">4</div>
            <div className="stat-l">Aquifer-<br/>Systeme</div>
          </div>
          <div className="stat">
            <div className="stat-v">3</div>
            <div className="stat-l">WMS-<br/>Quellen</div>
          </div>
        </div>
      </header>

      {/* Map + overlaid sidebar */}
      <div id="map-wrap">
        <MapView />
        <Sidebar />
        <Legend />
      </div>

      <FeedbackModal />
    </>
  )
}
