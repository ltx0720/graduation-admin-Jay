import axios from 'axios'
import { MessageBox, Message, Notification } from 'element-ui'
import store from '@/store'

// 认证授权服务器地址
const authorization = axios.create({
  baseURL: 'http://localhost:8081',
  timeout: 60 * 1000
})

// 过滤器
authorization.interceptors.request.use(
  config => {
    // 如果已登录则带上token
    // if (store.getters.token) {
    //   config.headers['X-Token'] = getToken()
    // }

    return config
  },
  error => {
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
authorization.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code == '200') {
      return res;
    } else {
      Message.error({
        showClose: true,
        message: '请求出错，请稍后再试',
        type: 'error'
      }).alert;
    }
  },
)

export default authorization
