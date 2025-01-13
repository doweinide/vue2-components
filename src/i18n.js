import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {
  en: {
    welcome: 'Welcome',
    description: 'This is a simple internationalization example.',
  },
  zh: {
    welcome: '欢迎',
    description: '这是一个简单的国际化示例。',
  },
}

const i18n = new VueI18n({
  locale: 'en', // 设置默认语言
  fallbackLocale: 'en', // 设置回退语言
  messages, // 多语言资源
})

export default i18n
