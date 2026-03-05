import { create } from 'zustand'

const DEFAULT_LAYERS = {
  'tiefland-plain':  true,
  'tiefland-rhein':  true,
  'hoeff-locker':    true,
  'hoeff-fest1':     true,
  'hoeff-fest2':     true,
  'aq-niederrhein':  true,
  'aq-norddeutsch':  true,
  'aq-molasse':      true,
  'aq-oberrhein':    true,
  'geo-egdi':        true,
  'geo-bgr':         true,
  'geo-huek250':     true,
  'waerme-nrw':      false,
  'waerme-wms':      false,
  'waerme-bbsr':     false,
  'fw-cities':       true,
  'heat-sources':    true,
}

export const useLayerStore = create((set, get) => ({
  layers: { ...DEFAULT_LAYERS },
  toggle: (key) => set(s => ({
    layers: { ...s.layers, [key]: !s.layers[key] }
  })),
  setLayer: (key, val) => set(s => ({
    layers: { ...s.layers, [key]: val }
  })),
  setGroup: (keys, val) => set(s => {
    const next = { ...s.layers }
    keys.forEach(k => { next[k] = val })
    return { layers: next }
  }),
  isGroupOn: (keys) => keys.some(k => get().layers[k]),
}))
