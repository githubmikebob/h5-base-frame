import Vue from 'vue'
import VueI18n from 'vue-i18n'

import zhCN from 'vant/lib/locale/lang/zh-CN'
// import enUS from 'vant/lib/locale/lang/en-US' // 英文
// import zhTW from 'vant/lib/locale/lang/zh-TW' // 繁体中文
// 语言包
import cn from '@/locales/cn'
// import en from '../src/locales/cn/cn'
// import tw from '../src/locales/cn/cn'

Vue.prototype.$cn = cn
// Vue.prototype.en = en
// Vue.prototype.tw = tw

Vue.use(VueI18n)

const i18n = new VueI18n({
  // locale: process.env.VUE_APP_I18N_LOCALE || 'en',
  locale: 'cn',
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
  messages: {
    cn: Object.assign(cn, zhCN)
    // 'en': Object.assign(en, enLocale),
    // 'tw': Object.assign(tw, twLocale)
  }
})

export default i18n
