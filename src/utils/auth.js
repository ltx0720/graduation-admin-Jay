import Cookies from 'js-cookie'

const TokenKey = 'token'

export function getToken() {
  // return true
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

// 从token 中获取权限信息
export function getRoles(token) {
  return Cookies.remove(TokenKey)
}
