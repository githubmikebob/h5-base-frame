import request from '@/utils/request'

export function info(params) {
  return request({
    url: '/user/info',
    method: 'get',
    params
  })
}

export function menus(params) {
  return request({
    url: '/user/menus',
    method: 'get',
    params
  })
}

export function login(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}

/**
 * 微信授权登录
 * @params { app_id, openid, user_token }
 * */
export function wxLogin(params) {
  return request({
    url: '/WeChat/AutoLogin',
    method: 'POST',
    data: params
  })
}

/**
 * 获取openId
 * @params { code, app_id }
 * */
export function getOpenId(params) {
  return request({
    url: '/WeChatUser/GetOpenid',
    method: 'POST',
    data: params
  })
}