import { asyncApi } from '../../utils/request'

/**
 * 获取openId
 * @params { code, app_id }
 * */
export function getOpenId(params) {
  return asyncApi({
    url: '/WeChatUser/GetOpenid',
    method: 'POST',
    data: params
  })
}

/**
 * 获取对应微信用户信息
 * @params { openid }
 * */
export function getWxUserInfo(params) {
  return asyncApi({
    url: '/WeChatUser/Mine',
    method: 'POST',
    data: params
  })
}