import { createLocalVue } from '@vue/test-utils'
import VueI18n from 'vue-i18n'

import localesEn from '../../../src/i18n/en-US/index'
const en = { en: localesEn }

// Use a local vu
const localVue = createLocalVue()
localVue.use(VueI18n)

// Create new i18n instance
module.exports = {
  localVue,
  i18n: new VueI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages: en
  })
}
