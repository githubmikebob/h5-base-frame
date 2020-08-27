/**
 * axios 封装
 * @author JJ
 */
import axios from 'axios'
import qs from 'qs'
import { Toast } from 'vant'
import store from '@/store'
import { GetLocal } from '@/utils/storage'
// import configSite from '_conf' // 站点配置

// create an axios instance
const service = axios.create({
  // withCredentials: true, // send cookies when cross-domain requests
  baseURL: process.env.VUE_APP_API_PREFIX, // .env中配置的api前缀
  timeout: 5000 // request timeout
})
console.log(process.env.VUE_APP_API_PREFIX)
/**
 * 请求拦截器
 * 每次请求前，如果存在token则在请求头中携带token
 */
service.interceptors.request.use(
  config => {
    config.headers['Accept'] = 'application/json'
    // config.headers['Content-Type'] = 'text/plain'
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
    if (config.method === 'post') config.data = qs.stringify(config.data)
    // 获取token
    const token = store.state.user.token || GetLocal('', 'accessToken')
    token && (config.headers.Authorization = token)
    return config
  },
  error => {
    // do something with request error
    console.log(error, 'err') // for debug
    return Promise.reject(error)
  }
)
service.interceptors.response.use(
  response => {
    const res = response.data

    if (res.code !== 200) {
      // 处理自定义错误
      handleError(res.code)

      return Promise.reject(new Error(res.msg || 'Error'))
    } else {
      // success
      return Promise.resolve(res)
    }
  },
  error => {
    console.log('err ' + error) // for debug
    Toast.fail({
      message: error.message,
      duration: 1.5 * 1000
    })
    return Promise.reject(error)
  }
)
/**
 * 请求失败后的错误统一处理
 * @param {Number} code 请求失败的状态码
 */
const handleError = code => {
  switch (code) {
    case 401:
      // .....
      break

    default:
      break
  }
}

export default service
