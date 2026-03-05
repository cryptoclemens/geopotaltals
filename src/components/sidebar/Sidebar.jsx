import Ortssuche from './Ortssuche'
import LayerGroup, { SubItem } from './LayerGroup'

export default function Sidebar() {
  return (
    <aside
      className="w-[260px] flex-shrink-0 h-screen flex flex-col overflow-hidden"
      style={{
        background: 'var(--bg1)',
        borderRight: '1px solid var(--border)',
      }}
    >
      {/* Header */}
      <div className="px-4 py-3 border-b border-[var(--border)]">
        <div className="text-[11px] font-bold text-[var(--accent)] uppercase tracking-widest">
          BOWA
        </div>
        <div className="text-[9px] text-[var(--muted)] leading-tight mt-0.5">
          Geothermie-Potential-Atlas
        </div>
      </div>

      {/* Ortssuche */}
      <Ortssuche />

      {/* Layer Panel */}
      <div className="flex-1 overflow-y-auto px-2 py-2 text-[var(--text)]">
        <div className="text-[9px] uppercase tracking-widest text-[var(--muted)] px-1 mb-2">
          Layer
        </div>

        {/* Basis-Daten */}
        <LayerGroup
          id="basis"
          label="Basis-Daten"
          color="#5bafd6"
          defaultOpen={true}
        >
          <SubItem
            layerKey="tiefland-plain"
            label="Tiefland-Gürtel (Norddeutschland)"
            color="#5bafd6"
          />
          <SubItem
            layerKey="tiefland-rhein"
            label="BOWA Rheinland (Kerngebiet)"
            color="#d65b5b"
          />
          <SubItem
            layerKey="hoeff-locker"
            label="Höffigkeit Lockergestein"
            color="#5bd6c8"
          />
        </LayerGroup>

        {/* Aquifer-Systeme */}
        <LayerGroup
          id="aquifer"
          label="Aquifer-Systeme"
          color="#4ecdc4"
          defaultOpen={true}
        >
          <SubItem
            layerKey="aq-niederrhein"
            label="Niederrhein-Aquifer"
            color="#4ecdc4"
            badge="⭐"
          />
          <SubItem
            layerKey="aq-norddeutsch"
            label="Norddeutscher Aquifer"
            color="#5bafd6"
          />
          <SubItem
            layerKey="aq-molasse"
            label="Malmkarst / Molasse"
            color="#f0c040"
          />
          <SubItem
            layerKey="aq-oberrhein"
            label="Buntsandstein Oberrhein"
            color="#e8a857"
          />
        </LayerGroup>

        {/* Geologie WMS */}
        <LayerGroup
          id="geo"
          label="Geologie (WMS)"
          color="#a78bfa"
          defaultOpen={false}
        >
          <SubItem
            layerKey="geo-egdi"
            label="IGME5000 Geologie Europa"
            color="#a78bfa"
            dot="square"
          />
          <SubItem
            layerKey="geo-bgr"
            label="GÜK200 Geologie"
            color="#c4b5fd"
            dot="square"
          />
          <SubItem
            layerKey="geo-huek250"
            label="HÜK250 Hydrogeologie"
            color="#7dd3fc"
            dot="square"
          />
        </LayerGroup>

        {/* Wärmequellen */}
        <LayerGroup
          id="waerme"
          label="Wärmequellen"
          color="#f97316"
          defaultOpen={false}
        >
          <SubItem
            layerKey="heat-sources"
            label="Wärmequellen (alle)"
            color="#f97316"
          />
        </LayerGroup>

        {/* Städte */}
        <LayerGroup
          id="cities"
          label="Referenzstädte"
          color="#94a3b8"
          defaultOpen={false}
        >
          <SubItem
            layerKey="fw-cities"
            label="Fernwärme-Städte"
            color="#94a3b8"
          />
        </LayerGroup>
      </div>

      {/* Footer */}
      <div className="px-3 py-2 border-t border-[var(--border)]">
        <div className="text-[9px] text-[var(--muted)] text-center">
          © BOWA Geothermie · {new Date().getFullYear()}
        </div>
      </div>
    </aside>
  )
}
