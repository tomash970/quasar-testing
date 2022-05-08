import { mount, createLocalVue, shallowMount } from '@vue/test-utils'
import SHOW from '../../../src/components/Show'
import Vue from 'vue'
import Vuex from 'vuex'
import * as All from 'quasar'
// import langEn from 'quasar/lang/en-us' // change to any language you wish! => this breaks wallaby :(
const { Quasar } = All
Vue.use(Vuex)

const components = Object.keys(All).reduce((object, key) => {
  const val = All[key]
  if (val && val.component && val.component.name != null) {
    object[key] = val
  }
  return object
}, {})

describe('Mount Quasar', () => {
  const localVue = createLocalVue()
  localVue.use(Quasar, { components }) // , 

  const wrapper = shallowMount(SHOW, {
    localVue
  })
  const vm = wrapper.vm

  it('accesses the shallowMount', () => {
    //tu mora biti wrapper umjesto vm. Zašto?????
    expect(vm.find('p').text()).toContain('Podaci')
  })

  it('accesses the shallowMount2', () => {
    expect(vm.$el.textContent).toContain('Podaci')
  })
})
