import { shallowMount, mount, createLocalVue } from '@vue/test-utils'
import Index from '../../../../src/pages/Index'
import Form from '../../../../src/components/Form.vue'

import * as All from 'quasar'

const { Quasar } = All
const components = Object.keys(All).reduce((object, key) => {
  const val = All[key]
  if (val && val.component && val.component.name != null) {
    object[key] = val
  }
  return object
}, {})

const localVue = createLocalVue()

localVue.use(Quasar, { components })

describe('Index', () => {
  it('renders a Show component', () => {
    const wrapper = shallowMount(Index, { localVue })

    expect(wrapper.findComponent({ name: 'Show' }).exists()).toBe(true)
  })
  it('renders a Form component', () => {
    const wrapper = shallowMount(Index, { localVue })

    expect(wrapper.findComponent(Form).exists()).toBe(true)
  })
})
