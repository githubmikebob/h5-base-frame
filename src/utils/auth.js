const TOKEN_KEY = 'TOKEN_KEY'
const USER_INFO = 'USER_INFO'

export function getToken() {
  return localStorage.getItem(TOKEN_KEY)
}

export function setToken(token) {
  return localStorage.setItem(TOKEN_KEY, token)
}

export function removeToken() {
  return localStorage.removeItem(TOKEN_KEY)
}

export function getUserInfo() {
  let userInfo = localStorage.getItem(USER_INFO)
  return userInfo ? JSON.parse(userInfo) : {}
}

export function setUserInfo(userData) {
  return localStorage.setItem(USER_INFO, JSON.stringify(userData))
}

export function removeUserInfo() {
  return localStorage.removeItem(USER_INFO)
}
