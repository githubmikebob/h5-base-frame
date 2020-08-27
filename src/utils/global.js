import { setTimeout } from 'core-js'
import store from '@/store'

/**
 * 常用工具
 * @author JJ
 */

/**
 * 存储localStorage
 */
export const setStore = (name, content) => {
  if (!name) return
  if (typeof content !== 'string') {
    content = JSON.stringify(content)
  }
  window.localStorage.setItem(name, content)
}
/**
 * 获取localStorage
 */
export const getStore = name => {
  if (!name) return
  return window.localStorage.getItem(name)
}
/**
 * 删除localStorage
 */
export const removeStore = name => {
  if (!name) return
  window.localStorage.removeItem(name)
}
/**
 * 延迟加载方法
 * @param {*} fn
 * @param {*} time
 */
export const submitTimeOut = (fn, time = 1000) => {
  setTimeout(function() {
    fn()
  }, time)
}
/**
 * 创建script
 * @param url
 * @returns {Promise}
 */
export const createScript = url => {
  let promise = new Promise(resolve => {
    let scriptElement = document.createElement('script')
    scriptElement.src = url
    document.body.appendChild(scriptElement)
    resolve('ok')
  })
  return promise
}

/**
 * 移除script标签
 * @param scriptElement script dom
 */
export const removeScript = scriptElement => {
  document.body.removeChild(scriptElement)
}

/**
 * 深拷贝
 * @param {*} obj
 */
export const deepClone = obj => {
  let result = Array.isArray(obj) ? [] : {}
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (typeof obj[key] === 'object') {
        result[key] = deepClone(obj[key]) // 递归复制
      } else {
        result[key] = obj[key]
      }
    }
  }
  return result
}

/**
 * 数据深拷贝
 * @param obj
 * @returns {any}
 */
export const deepCopy = obj => {
  return JSON.parse(JSON.stringify(obj))
}

/**
 * 函数节流
 * @param {*} fn
 * @param {*} interval
 */
export const throttle = (fn, interval = 300) => {
  let canRun = true
  return function() {
    if (!canRun) return
    canRun = false
    setTimeout(() => {
      fn.apply(this, arguments)
      canRun = true
    }, interval)
  }
}
/**
 * @desc  函数防抖---“立即执行版本” 和 “非立即执行版本” 的组合版本
 * @param  func 需要执行的函数
 * @param  wait 延迟执行时间（毫秒）
 * @param  immediate---true 表立即执行，false 表非立即执行
 **/
export const debounce = (func, wait, immediate) => {
  let timer
  return function() {
    let context = this
    let args = arguments

    if (timer) clearTimeout(timer)
    if (immediate) {
      let callNow = !timer
      timer = setTimeout(() => {
        timer = null
      }, wait)
      if (callNow) func.apply(context, args)
    } else {
      timer = setTimeout(function() {
        func.apply(context, args)
      }, wait)
    }
  }
}
/**
 * 数字转整数 如 100000 转为10万
 * @param {需要转化的数} num
 * @param {需要保留的小数位数} point
 */
export const tranNumber = (num, point) => {
  let numStr = num.toString()
  // 十万以内直接返回
  if (numStr.length < 6) {
    return numStr
  }
  // 大于8位数是亿
  else if (numStr.length > 8) {
    let decimal = numStr.substring(numStr.length - 8, numStr.length - 8 + point)
    return parseFloat(parseInt(num / 100000000) + '.' + decimal) + '亿'
  }
  // 大于6位数是十万 (以10W分割 10W以下全部显示)
  else if (numStr.length > 5) {
    let decimal = numStr.substring(numStr.length - 4, numStr.length - 4 + point)
    return parseFloat(parseInt(num / 10000) + '.' + decimal) + '万'
  }
}
/**
 * 数组插入到formdata
 * @description 该方法会改变原formdata
 * @param {FormData} formData 源formdata
 * @param {string} key 数组key值
 * @param {Array} arr 数组
 */
export const formatArrToFormData = (formData, key, arr) => {
  arr.forEach((file, index) => {
    formData.append(`${key}[${index}]`, file);
    // console.log(formData.get(`${key}[${index}]`));
  });
};

/**
 * 获取地址栏url？后面参数的值
 * @param {string} key
 * @returns {string}
 */
export function getUrlKey(key) {
  let z = decodeURIComponent((new RegExp('[?|&]' + key + '=([^&;]+?)(&|#|;|$)').exec(location.href) || [null, ''])[1].replace(/\+/g, '%20')) || null
  // if (name === 'id' && z) SetLocal('', 'appid', z)
  return z
}

/**
 * 获取微信授权页面的code
 * @param {string} appId
 * @returns {string}
 */
export function getWxCode(appId = store.state.user.appId) {
  let code = getUrlKey('code')
  if (!code) {
    let state = 123
    let redirectUrl = window.location.href
    let Url = encodeURIComponent(redirectUrl)
    window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appId}&redirect_uri=${Url}&response_type=code&scope=snsapi_userinfo&state=${state}#wechat_redirect`
  } else {
    return code
  }
}

