import axios from 'axios'
import { MessageBox, Message, Notification  } from 'element-ui'

// 认证授权服务器地址
const teacher = axios.create({
  baseURL: 'http://127.0.0.1:8082',
  timeout: 6 * 1000
})

// 过滤器
teacher.interceptors.request.use(
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
teacher.interceptors.response.use(
  response => {
    const res = response.data
    let code = res.code;

    if(code == '200'){
      return res;
    }else{
     Message.error({
        showClose: true,
        message: '请求出错，请稍后再试',
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

export default teacher