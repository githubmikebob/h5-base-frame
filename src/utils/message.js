import { Toast, Dialog, Notify } from 'vant'
import router from '../router'
import store from '../store'
import transform from './transform'

// 自定义错误返回数据
export const errorResponse = error => {
  let response = {}
  if (Object.prototype.hasOwnProperty.call(error, 'response')) {
    response = error.response.data
    response.status = 'error'
    if (!Object.prototype.hasOwnProperty.call(response, 'code')) response.code = error.response.status
    if (response.message === '') response.message = 'error.network'
  } else {
    response.message = 'error.network'
    response.code = 404
    response.status = 'error'
  }
  responseRoute(response)
}

export const responseRoute = (response) => {
  switch (response.code) {
    case 200:
    case 201:
      break
    case 400:

      break
    case 401:
      break
    case 404:
      if (response.hasOwnProperty('message') && response.message) typeNotify(response.message)
      else typeNotify('error.404')
      break
    case 422:
      break
  }
}

// 清除关闭所有提示
export const clearAll = () => {
  Toast.clear()
  Notify.clear()
  Dialog.close()
}

// 文字轻提醒
export const textToast = (msg = 'base.title.sweet_tip') => {
  return Toast(transform(msg))
}

// 加载轻提醒
export const loadingToast = (msg = 'button.loading') => {
  return Toast.loading({ message: transform(msg), forbidClick: true })
}

/**
 * 不同状态的消息提示
 * @param msg 提示文字的语言包转译
 * @param type 对应vant的type属性
 * */
export const typeNotify = (msg = 'base.title.sweet_tip', type = 'danger') => {
  return Notify({ message: transform(msg), type })
}

/**
 * 消息确认弹窗
 * @param { object } options 对应vant的options
 * @param { function } success 对应vant的then方法回调
 * */
export const confirmDialog = (options, success = () => {
}) => {
  if (!options.hasOwnProperty('theme')) options.theme = 'round'
  if (!options.hasOwnProperty('message')) options.message = '是否确定操作？'
  Dialog.confirm(options).then(success).catch(() => {
  })
}

/**
 * 只做确认的消息提示弹窗
 * @param { object } options 对应vant的options
 * */
export const alertDialog = (options) => {
  if (!options.hasOwnProperty('message')) options.message = transform('base.title.sweet_tip')
  Dialog.alert(options).then(() => {
  })
}