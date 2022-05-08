import Vuex from 'vuex'
import { shallowMount, mount, createLocalVue } from '@vue/test-utils'
import Form from '../../../../src/components/Form'
// import Vue from 'vue'
// import Getters from './Getters.vue'
import * as All from 'quasar'

//import VueI18n from 'vue-i18n'
import i18n from 'vue-i18n'

import localesEn from '../../../../src/i18n/en-US/index'
const en = { en: localesEn }

// Use a local vu
const localVue = createLocalVue()
//localVue.use(VueI18n)
localVue.use(i18n)

const { Quasar } = All
const components = Object.keys(All).reduce((object, key) => {
  const val = All[key]
  if (val && val.component && val.component.name != null) {
    object[key] = val
  }
  return object
}, {})

localVue.use(Vuex)
localVue.use(Quasar, { components })

// const baba = new VueI18n({
//   locale: 'en-US',
//   fallbackLocale: 'en-US',
//   messages: en
// })

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
    it('is vue istance', () => {
      const wrapper = shallowMount(Form, {
        store,
        localVue,
        mocks: { $t: () => {} }
      })

      expect(wrapper.isVueInstance()).toBeTruthy()
    })

    it('contains word nije prihvačeno', () => {
      const wrapper = shallowMount(Form, {
        store,
        localVue,
        mocks: { $t: () => {} }
      })
      expect(wrapper.text()).toContain('Nije prihvačeno')
    })
    it('contains word prihvačeno', async() => {
      const wrapper = shallowMount(Form, {
        store,
        localVue,
        mocks: { $t: () => {} }
      })
      const toggle = wrapper.find('.toggle')
      await toggle.trigger('change')
      expect(wrapper.text()).toContain('Prihvačeno')
    })
  })
})
