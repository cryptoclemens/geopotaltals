import { WMSTileLayer } from 'react-leaflet'
import { useLayerStore } from '../../store/useLayerStore'
import { WMS_LAYERS } from '../../data/layers'

// Proxy fallback for CORS
const PROXIES = [
  (u) => u,
  (u) => `https://corsproxy.io/?${encodeURIComponent(u)}`,
  (u) => `https://api.allorigins.win/raw?url=${encodeURIComponent(u)}`,
]

export default function WMSLayers() {
  const layers = useLayerStore(s => s.layers)

  return (<>
    {Object.entries(WMS_LAYERS).map(([key, wms]) =>
      layers[key] && (
        <WMSTileLayer
          key={key}
          url={wms.url}
          layers={wms.params.layers}
          format={wms.params.format}
          transparent={wms.params.transparent}
          version={wms.params.version}
          opacity={wms.opacity}
          attribution={`© BGR · ${key}`}
        />
      )
    )}
  </>)
}
