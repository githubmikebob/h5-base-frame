import axios from 'axios'
import qs from 'qs'
import store from '../store'
import { responseRoute, errorResponse } from './message'
import { GetLocal } from './storage'
// import configSite from '_conf' // 站点配置

/**
 * axios 封装
 * @author JJ
 */

// create an axios instance
const adminApi = axios.create({
  // withCredentials: true, // send cookies when cross-domain requests
  baseURL: process.env.VUE_APP_BASE_API, // .env中配置的api前缀
  timeout: 60000 // request timeout
})

const asyncApi = axios.create({
  // withCredentials: true, // send cookies when cross-domain requests
  baseURL: GetLocal(GetLocal('', 'appId'), 'api'),
  timeout: 60000 // request timeout
})

/**
 * 请求拦截器
 * 每次请求前，如果存在token则在请求头中携带token
 */
const axiosConfig = (serve) => {
  return serve.interceptors.request.use(async (config) => {
    await store.dispatch('app/startRequesting', config.url) // 打开请求的加载
    await store.dispatch('app/startExecuting', config.url) // 打开请求的加载
    config.headers['Accept'] = 'application/json'
    // config.headers['Content-Type'] = 'text/plain'
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
    if (config.method === 'post') config.data = qs.stringify(config.data)
    // 获取token
    const token = store.state.user.token
    token && (config.headers.Authorization = token)
    return config
  },
  error => {
    // do something with request error
    return Promise.reject(error)
  })
}

const resConfig = (serve) => {
  return serve.interceptors.response.use(async (response) => {
    const res = response.data
    await store.dispatch('app/doneRequesting') // 关闭列表请求的Loading加载
    await store.dispatch('app/doneExecuting') // 关闭执行请求的Loading加载
    responseRoute(res)
    let whiteCode = [200, 201]
    if (whiteCode.indexOf(parseInt(res.code)) > -1) {
      // success
      return Promise.resolve(res)
    } else {
      // 处理自定义错误
      errorResponse(res)
      return Promise.reject(res)
    }
  }, async (error) => {
    errorResponse(error)
    await store.dispatch('app/doneRequesting') // 关闭列表请求的Loading加载
    await store.dispatch('app/doneExecuting') // 关闭执行请求的Loading加载
    return Promise.reject(error)
  })
}

axiosConfig(adminApi)
resConfig(adminApi)
axiosConfig(asyncApi)
resConfig(asyncApi)

export { adminApi, asyncApi }
