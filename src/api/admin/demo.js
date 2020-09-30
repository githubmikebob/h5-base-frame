import { adminApi } from '../../utils/request'

export function info(params) {
  return adminApi({
    url: '/user/info',
    method: 'get',
    params
  })
}

export function menus(params) {
  return adminApi({
    url: '/user/menus',
    method: 'get',
    params
  })
}

export function login(data) {
  return adminApi({
    url: '/user/login',
    method: 'post',
    data
  })
}

export function logout() {
  return adminApi({
    url: '/user/logout',
    method: 'post'
  })
}

