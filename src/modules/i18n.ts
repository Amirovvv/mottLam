import { createI18n } from 'vue-i18n'

const lang = {
  ru: {
    intro: {
      hi: 'добро пожаловать!'
    }
  },
  ce: {
    intro: {
      hi: 'марша догiийла!'
    }
  }
}

const i18n = createI18n({
  legacy: false,
  locale: 'ru',
  messages: lang
})

export default i18n