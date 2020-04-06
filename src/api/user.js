import request from '@/utils/request'
import { config } from '@vue/test-utils'

export function login(data) {
  var param = new URLSearchParams()
  param.append('username', data['username'])
  param.append('password', data['password'])

  return request({
    url: '/authentication/form',
    method: 'post',
    data: param
  })
}

export function getInfo(token) {
  return request({
    url: '/vue-admin-template/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}
