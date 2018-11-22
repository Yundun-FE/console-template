import DmData from '../packages/DmData'
import Column from '../packages/Column'
import Item from '../packages/Item'

const components = [
  DmData,
  Column,
  Item
]

const install = function(Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

export default {
  version: '0.0.1',
  install,
  DmData,
  Column,
  Item
}
