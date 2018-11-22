import DmData from '../packages/DmData/index.js'

const components = [
  DmData
]

const install = function(Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

module.exports = {
  version: '0.0.1',
  DmData
}

module.exports.default = module.exports