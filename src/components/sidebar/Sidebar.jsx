import { useState } from 'react'
import Ortssuche from './Ortssuche'
import LayerGroup, { SubItem, AqChips } from './LayerGroup'

const SOURCES = [
  { color:'#5bafd6', name:'BGR Geologie (WMS)', desc:'GÜK200 · IGME5000 · HÜK250', type:'WMS' },
  { color:'#4ecdc4', name:'Aquifer-Atlas', desc:'Tiefenaquifer-Potenziale NW-Europa', type:'Intern' },
  { color:'#f0c040', name:'OpenStreetMap', desc:'Fernwärme-Netze · Wärmequellen', type:'OSM' },
  { color:'#5bd68a', name:'Fernwärme-Statistik', desc:'BWP · Stadtwerke-Berichte 2023', type:'Statistik' },
  { color:'#d67c5b', name:'BfEE Abwärme-Atlas', desc:'Industrielle Abwärmepotenziale DE', type:'BfEE' },
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
          label="Basisdaten"
          dotColor="#5bafd6"
          groupKeys={['tiefland-plain','tiefland-rhein','aktionsraum']}
          defaultOpen={true}
        >
          <SubItem layerKey="tiefland-plain" label="Lockergestein-Gürtel" dotColor="#5bafd6" />
          <SubItem layerKey="tiefland-rhein" label="Norddeutscher Aquifer" dotColor="#5bafd6" />
          <SubItem layerKey="aktionsraum"    label="Aktionsraum" dotColor="#d65b5b" />
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
          label="Geothermie-Höffigkeit"
          dotColor="#a78bfa"
          dotShape="square"
          groupKeys={['geo-egdi','geo-bgr','geo-huek250']}
          defaultOpen={false}
        >
          <SubItem layerKey="geo-egdi"    label="Lockergestein"          dotColor="#5bd6c8" dotShape="square" badge="WMS" />
          <SubItem layerKey="geo-bgr"     label="Festgestein &lt;1.000 m" dotColor="#c8a840" dotShape="square" badge="WMS" />
          <SubItem layerKey="geo-huek250" label="Festgestein &gt;1.000 m" dotColor="#b05050" dotShape="square" badge="WMS" />
        </LayerGroup>

        <LayerGroup
          id="waerme"
          label="(Ab-)Wärmeproduzenten"
          dotColor="#d67c5b"
          dotShape="circle"
          groupKeys={['heat-dc','heat-pp','heat-waste','heat-steel','heat-abw']}
          defaultOpen={false}
        >
          <SubItem layerKey="heat-dc"    label="Rechenzentren (OSM)"     dotColor="#a87cd6" dotShape="circle" />
          <SubItem layerKey="heat-pp"    label="Kraftwerke (OSM)"        dotColor="#d67c5b" dotShape="circle" />
          <SubItem layerKey="heat-waste" label="Müllverbrennung (OSM)"   dotColor="#5bd6c8" dotShape="circle" />
          <SubItem layerKey="heat-steel" label="Stahlwerke (OSM)"        dotColor="#d6c85b" dotShape="circle" />
          <SubItem layerKey="heat-abw"   label="Abwärme BfEE"            dotColor="#e8a857" dotShape="square" badge="BfEE" />
        </LayerGroup>

        <LayerGroup
          id="cities"
          label="Fernwärme-Märkte"
          dotColor="#5bd68a"
          dotShape="circle"
          groupKeys={['fw-cities-hi','fw-cities-mid','fw-cities-lo']}
          defaultOpen={false}
        >
          <SubItem layerKey="fw-cities-hi"  label="Fernwärme &gt;50%"   dotColor="#5bd68a" dotShape="circle" />
          <SubItem layerKey="fw-cities-mid" label="Fernwärme 30–50%"    dotColor="#e8a857" dotShape="circle" />
          <SubItem layerKey="fw-cities-lo"  label="Fernwärme 20–30%"    dotColor="#5bafd6" dotShape="circle" />
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
