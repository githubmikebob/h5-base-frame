import request from '@/utils/request'

export function getWxSdkConfig(params) {
  return request({
    url: '/wxTest/getSdkConfig',
    method: 'get',
    params
  })
}
