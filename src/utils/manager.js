import axios from 'axios'
import { Message } from 'element-ui'

// 认证授权服务器地址
const manager = axios.create({
  baseURL: 'http://127.0.0.1:8082',
  timeout: 60
})

// 过滤器
manager.interceptors.request.use(
  config => {
    // 如果已登录则带上token
    // if (store.getters.token) {
    //   config.headers['token'] = getToken()
    // }

    return config
  },
  error => {
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
manager.interceptors.response.use(
  response => {
    const res = response.data
    let code = res.code;

    if(code == '200'){
      return res;
    }else{
     Message.error({
        showClose: true,
        message: '错了哦，这是一条错误消息',
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

export default manager