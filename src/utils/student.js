import axios from 'axios'
import { Message } from 'element-ui'
import store from '@/store'

// 认证授权服务器地址
const student = axios.create({
  baseURL: 'http://127.0.0.1:8082',
  timeout: 6 * 1000
})

// 过滤器
student.interceptors.request.use(
  config => {
    // 如果已登录则带上token
    let token = JSON.parse(sessionStorage.getItem('token'))
    if (token) {
      config.headers['token'] = token
    }

    return config
  },
  error => {
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
student.interceptors.response.use(
  response => {
    const res = response.data
    let code = res.code;

    if (code == '200') {
      return res;
    } else {
      Message.error({
        showClose: true,
        message: '出错了，请稍后再试',
        type: 'error'
      }).alert;
    }
  },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default student
