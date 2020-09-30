import { asyncApi } from '../../utils/request'

/**
 * 微信授权登录
 * @params { app_id, openid, user_token }
 * */
export function wxLogin(params) {
  return asyncApi({
    url: '/WeChat/AutoLogin',
    method: 'POST',
    data: params
  })
}