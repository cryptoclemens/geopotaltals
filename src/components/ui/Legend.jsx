import { useState } from 'react'

const ENTRIES = [
  { style: { background:'rgba(91,175,214,.25)', border:'1px dashed #5bafd6' }, label: 'Lockergestein-Gürtel' },
  { style: { background:'rgba(78,205,196,.3)', border:'1px solid #4ecdc4' },   label: 'Niederrhein-Aquifer' },
  { style: { background:'rgba(240,192,64,.3)', border:'1px solid #f0c040' },   label: 'Malmkarst / Molasse' },
  { style: { background:'rgba(232,168,87,.3)', border:'1px solid #e8a857' },   label: 'Buntsandstein Oberrhein' },
  { style: { background:'rgba(167,139,250,.25)', border:'1px solid #a78bfa' }, label: 'WMS Geologie' },
]

export default function Legend() {
  const [collapsed, setCollapsed] = useState(false)
  return (
    <div id="legend" className={collapsed ? 'collapsed' : ''}>
      <h3 onClick={() => setCollapsed(c => !c)}>
        <span>Legende</span>
        <span style={{fontSize:'11px',opacity:.7}}>{collapsed ? '▸' : '▾'}</span>
      </h3>
      <div id="legend-body">
        {ENTRIES.map(e => (
          <div className="leg-row" key={e.label}>
            <div className="leg-sw" style={e.style} />
            <span>{e.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
