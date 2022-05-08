import Vuex from 'vuex'
import { mount, createLocalVue } from '@vue/test-utils'
import SHOW from '../../../src/components/Show'
// import Vue from 'vue'
// import Getters from './Getters.vue'
import * as All from 'quasar';

const { Quasar } = All
const components = Object.keys(All).reduce((object, key) => {
  const val = All[key]
  if (val && val.component && val.component.name != null) {
    object[key] = val
  }
  return object
}, {})

const localVue = createLocalVue()

localVue.use(Vuex)
localVue.use(Quasar, { components })

describe('Getters', () => {
  describe('with a store', () => {
    let getters
    let store
    let state
    beforeEach(() => {
      state = {
        data: { name: 'toma', age: 12 }
      }
      getters = {
        data: () => state.data
      }
      store = new Vuex.Store({
        modules: {
          example: {
            namespaced: true,
            state,
            getters
          }
        }
      })
    })

    it('value of age', () => {
      const wrapper = mount(SHOW, {
        store,
        localVue
      })

      // expect(wrapper.find('q-item-section').text()).toContain('toma')
      expect(wrapper.text()).toContain(12)
    })

    it('value of name', () => {
      const wrapper = mount(SHOW, {
        store,
        localVue
      })
      expect(wrapper.text()).toContain('toma')
    })
    it('value of name not right', () => {
      const wrapper = mount(SHOW, {
        store,
        localVue
      })
      expect(wrapper.text()).not.toContain('tomash')
    })
    it('contains word podaci', () => {
      const wrapper = mount(SHOW, {
        store,
        localVue
      })
      expect(wrapper.text()).toContain('Podaci')
    })
  })
})
