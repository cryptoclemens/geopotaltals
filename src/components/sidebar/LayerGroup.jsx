import { useState } from 'react'
import { useLayerStore } from '../../store/useLayerStore'

export function Toggle({ layerKey, className = '' }) {
  const { layers, toggle } = useLayerStore()
  const on = layers[layerKey]
  return (
    <button
      onClick={() => toggle(layerKey)}
      className={`relative w-7 h-4 rounded-full transition-colors flex-shrink-0 ${
        on ? 'bg-[var(--accent)]' : 'bg-[var(--bg3)]'
      } border border-[var(--border)] ${className}`}
      title={on ? 'Layer ausblenden' : 'Layer einblenden'}
    >
      <span className={`absolute top-0.5 w-3 h-3 rounded-full bg-white shadow transition-transform ${
        on ? 'translate-x-3.5' : 'translate-x-0.5'
      }`} />
    </button>
  )
}

export default function LayerGroup({ id, label, color, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  const { layers, setGroup } = useLayerStore()

  // Collect all sub-layer keys from children
  const keys = children
    ? [].concat(...(Array.isArray(children) ? children : [children])
        .map(c => c?.props?.layerKey ? [c.props.layerKey] : []))
    : []

  const groupOn = keys.length === 0 || keys.some(k => layers[k])

  return (
    <div className="mb-1">
      <div className="flex items-center gap-2 px-1 py-1 cursor-pointer hover:bg-white/5 rounded-md group">
        <button
          onClick={() => setOpen(o => !o)}
          className="text-[var(--muted)] text-[9px] w-3 flex-shrink-0 transition-transform"
          style={{ transform: open ? 'rotate(90deg)' : 'rotate(0deg)' }}
        >▶</button>
        {keys.length > 0 && (
          <button
            onClick={() => setGroup(keys, !groupOn)}
            className={`relative w-7 h-4 rounded-full flex-shrink-0 transition-colors border border-[var(--border)] ${
              groupOn ? 'bg-[var(--accent)]' : 'bg-[var(--bg3)]'
            }`}
          >
            <span className={`absolute top-0.5 w-3 h-3 rounded-full bg-white shadow transition-transform ${
              groupOn ? 'translate-x-3.5' : 'translate-x-0.5'
            }`} />
          </button>
        )}
        <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: color }} />
        <button
          onClick={() => setOpen(o => !o)}
          className="text-[10px] font-semibold text-[var(--text)] uppercase tracking-wider flex-1 text-left"
        >
          {label}
        </button>
      </div>
      {open && (
        <div className="ml-6 mt-0.5 space-y-0.5">
          {children}
        </div>
      )}
    </div>
  )
}

export function SubItem({ layerKey, label, color, dot = 'circle', badge }) {
  return (
    <div className="flex items-center gap-2 px-1 py-1 hover:bg-white/5 rounded-md">
      <Toggle layerKey={layerKey} />
      <div
        className="w-2 h-2 flex-shrink-0"
        style={{
          background: color,
          borderRadius: dot === 'circle' ? '50%' : '2px',
        }}
      />
      <span className="text-[11px] text-[var(--muted)] flex-1">{label}</span>
      {badge && (
        <span className="text-[9px] px-1.5 py-0.5 rounded bg-[var(--bg3)] text-[var(--muted)] border border-[var(--border)]">
          {badge}
        </span>
      )}
    </div>
  )
}
