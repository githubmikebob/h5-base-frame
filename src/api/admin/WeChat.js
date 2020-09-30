import { adminApi } from '../../utils/request'

/**
 * 获取对应网络请求地址
 * @params { app_id }
 * */
export function getApi(params) {
  return adminApi({
    url: '/WeChat/GetApi',
    method: 'POST',
    data: params
  })
}
