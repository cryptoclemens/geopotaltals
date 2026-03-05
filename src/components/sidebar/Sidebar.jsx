import { useState } from 'react'
import Ortssuche from './Ortssuche'
import LayerGroup, { SubItem, AqChips } from './LayerGroup'

const SOURCES = [
  { color:'#5bafd6', name:'BGR Geologie (WMS)', desc:'GÜK200 · IGME5000 · HÜK250', type:'WMS' },
  { color:'#4ecdc4', name:'BOWA Aquifer-Atlas', desc:'Tiefenaquifer-Potenziale', type:'Intern' },
  { color:'#f0c040', name:'OpenStreetMap', desc:'Fernwärme-Netze · Wärmequellen', type:'OSM' },
]

export default function Sidebar() {
  const [srcOpen, setSrcOpen] = useState(false)

  return (
    <div id="side">
      {/* Ortssuche */}
      <div className="side-section">
        <h3>Ortssuche</h3>
        <Ortssuche />
      </div>

      {/* Layer groups */}
      <div className="side-layers">
        <div className="side-layers-title">Layer</div>

        <LayerGroup
          id="basis"
          label="Basis-Daten"
          dotColor="#5bafd6"
          groupKeys={['tiefland-plain','tiefland-rhein','hoeff-locker']}
          defaultOpen={true}
        >
          <SubItem layerKey="tiefland-plain" label="Tiefland-Gürtel" dotColor="#5bafd6" />
          <SubItem layerKey="tiefland-rhein" label="BOWA Rheinland" dotColor="#d65b5b" />
          <SubItem layerKey="hoeff-locker"   label="Höffigkeit Lockergestein" dotColor="#5bd6c8" />
        </LayerGroup>

        <LayerGroup
          id="aq"
          label="Aquifer-Systeme"
          dotColor="#4ecdc4"
          dotShape="circle"
          groupKeys={['aq-niederrhein','aq-norddeutsch','aq-molasse','aq-oberrhein']}
          defaultOpen={true}
        >
          <AqChips />
        </LayerGroup>

        <LayerGroup
          id="geo"
          label="Geothermie (WMS)"
          dotColor="#a78bfa"
          dotShape="square"
          groupKeys={['geo-egdi','geo-bgr','geo-huek250']}
          defaultOpen={false}
        >
          <SubItem layerKey="geo-egdi"    label="IGME5000 Geologie Europa"  dotColor="#a78bfa" dotShape="square" badge="WMS" />
          <SubItem layerKey="geo-bgr"     label="GÜK200 Geologie"           dotColor="#c4b5fd" dotShape="square" badge="WMS" />
          <SubItem layerKey="geo-huek250" label="HÜK250 Hydrogeologie"      dotColor="#7dd3fc" dotShape="square" badge="WMS" />
        </LayerGroup>

        <LayerGroup
          id="waerme"
          label="Wärmequellen"
          dotColor="#f97316"
          dotShape="circle"
          groupKeys={['heat-sources']}
          defaultOpen={false}
        >
          <SubItem layerKey="heat-sources" label="Wärmequellen (alle)" dotColor="#f97316" dotShape="circle" />
        </LayerGroup>

        <LayerGroup
          id="cities"
          label="Referenzstädte"
          dotColor="#94a3b8"
          dotShape="circle"
          groupKeys={['fw-cities']}
          defaultOpen={false}
        >
          <SubItem layerKey="fw-cities" label="Fernwärme-Städte" dotColor="#94a3b8" dotShape="circle" />
        </LayerGroup>
      </div>

      {/* Sources panel */}
      <div id="sources-panel" className={srcOpen ? '' : 'collapsed'}>
        <h3 onClick={() => setSrcOpen(o => !o)}>
          <span>Quellen</span>
          <span style={{fontSize:'9px',opacity:.6}}>{srcOpen ? '▾' : '▸'}</span>
        </h3>
        <div className="src-scroll">
          {SOURCES.map(s => (
            <div className="src-row" key={s.name}>
              <div className="src-dot" style={{background:s.color}} />
              <div className="src-text">
                <div className="src-name">{s.name}</div>
                <div className="src-desc">{s.desc}</div>
                <span className="src-type">{s.type}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
