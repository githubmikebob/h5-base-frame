import i18n from './i18n'

/**
 * 语言包转译
 * @param message
 * @returns {string}
 */
export default function (message = '') {
  let result = ''
  message = message.split(' ')
  for (let v of message) {
    if (v) {
      if (i18n.te(v)) {
        result += i18n.t(v)
      } else {
        result += v
      }
    }
  }
  return result
}
