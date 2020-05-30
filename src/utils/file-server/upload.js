import axios from 'axios'
import { Message  } from 'element-ui'
import store from '@/store'

// 认证授权服务器地址
const upload = axios.create({
  baseURL: 'http://localhost:8083',
  timeout: 6 * 1000
})

// 过滤器
upload.interceptors.request.use(
  config => {
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

upload.interceptors.response.use(
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

export default upload
