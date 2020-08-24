// import message from './message'
// import {GetAppid} from '../js/common'
import { isObject } from './validate'

/**
 * 定时储存前端数据
 * @param type 键值前缀
 * @param k 数据id
 * @param v 数据值
 * @param t 储存时间
 */
export const SetLocal = (type, k, v, t) => {
  let prefix = type ? type + '_' : ''
  k = prefix + k
  try {
    if (!localStorage) return false
    let exp = new Date() - 1 + t * 1000
    if (t === 0) exp = 0
    let data = { val: v, exp: exp }
    localStorage.setItem(k, JSON.stringify(data))
  } catch (e) {
    // message.message('error', 'error')
  }
}

/**
 * 获取储存在前端的数据
 * @param type 键值前缀
 * @param k 数据id
 */
export const GetLocal = (type, k) => {
  let prefix = type ? type + '_' : ''
  k = prefix + k
  try {
    if (!localStorage) return false
    let data = JSON.parse(localStorage.getItem(k))
    if (!data) return null
    else return data.val
  } catch (e) {
    RemoveLocal(k)
    return null
  }
}

/**
 * 获取数据到期时间
 * @param type 键值前缀
 * @param k
 * @returns {*}
 */
export const GetExp = (type, k) => {
  let prefix = type ? type + '_' : ''
  k = prefix + k
  if (k === 'https') console.log(k)
  try {
    if (!localStorage) return false
    let data = JSON.parse(localStorage.getItem(k))
    if (!data) return null
    return data.exp
  } catch (e) {
    RemoveLocal(k)
    return null
  }
}

/**
 * 移除前端储存的数据
 * @param type 键值前缀
 * @param k 数据id
 * @returns {boolean}
 */
export const RemoveLocal = (type, k) => {
  let prefix = type ? type + '_' : ''
  k = prefix + k
  if (!localStorage) return false
  localStorage.removeItem(k)
}

/**
 * 清楚ary外储存的数据
 * @returns {boolean}
 */
export const ClearBindLocal = () => {
  if (!localStorage) return false
  let appId = 'wxc8472472f6eb0a0d'
  let ary = ['appId', appId + '_api', 'openid', appId + '_openid', 'menus', appId + '_https', appId + '_user_token', 'user_token']
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i)
    if (!ary.includes(key)) localStorage.removeItem(key)
  }
}
/**
 * 清楚所有前端储存的数据
 * @returns {boolean}
 */
export const ClearLocal = () => {
  if (!localStorage) return false
  localStorage.clear()
}

/**
 * 窗口缓存的存值函数
 * @param k 键key
 * @param v 值value
 **/
export const SetSession = (k, v) => {
  if (!sessionStorage) return false
  sessionStorage.setItem(k, JSON.stringify(v))
}

/**
 * 窗口缓存的取值函数
 * @param k 键key
 **/
export const GetSession = (k) => {
  if (!sessionStorage) return false
  return JSON.parse(sessionStorage.getItem(k))
}

/**
 * 窗口缓存的清除某键的值
 * @param k 键key
 **/
export const RemoveSession = (k) => {
  if (!sessionStorage) return false
  sessionStorage.removeItem(k)
}

/**
 * 窗口缓存的清除所有数据
 **/
export const ClearSession = () => {
  if (!sessionStorage) return false
  sessionStorage.clear()
}

/**
 * 窗口缓存的重置某个键的某值
 * @params 检索k键key
 * @params 检索值的元素i只用于obj类型的数据，暂时支持两层结构
 * @params 对应I元素的新值
 **/
export const ResetSession = (k, i, nV) => {
  let value = GetSession(k)
  if (!isObject(value)) return false
  for (let a in value) {
    if (isObject(value[a])) {
      for (let b in value[a]) {
        (b === i) ? value[a][b] = nV : ''
      }
    } else {
      (a === i) ? value[a] = nV : ''
    }
  }
  SetSession(k, value)
}


export default {
  SetLocal,
  GetLocal,
  GetExp,
  RemoveLocal,
  ClearLocal,
  ClearBindLocal,
  SetSession,
  GetSession,
  RemoveSession,
  ClearSession,
  ResetSession
}
