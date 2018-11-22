import FormSelect from './FormSelect'
import FormCheckbox from './FormCheckbox'
import FormRadio from './FormRadio'
import FormRadioButton from './FormRadioButton'

const FORM = {
  name: 'Form'
}
FORM.install = Vue => {
  Vue.component(FormSelect.name, FormSelect)
  Vue.component(FormCheckbox.name, FormCheckbox)
  Vue.component(FormRadio.name, FormRadio)
  Vue.component(FormRadioButton.name, FormRadioButton)
}

export default FORM
