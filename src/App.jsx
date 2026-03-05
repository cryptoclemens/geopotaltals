import MapView from './components/map/MapView'
import Sidebar from './components/sidebar/Sidebar'
import FeedbackModal from './components/ui/FeedbackModal'

export default function App() {
  return (
    <div className="flex h-screen w-screen overflow-hidden" style={{ background: 'var(--bg1)' }}>
      <Sidebar />
      <div className="flex-1 relative">
        <MapView />
        <FeedbackModal />
      </div>
    </div>
  )
}
