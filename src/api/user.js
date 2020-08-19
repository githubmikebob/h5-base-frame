import request from '@/utils/request'

export function info(params) {
  return request({
    url: '/user/info',
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
