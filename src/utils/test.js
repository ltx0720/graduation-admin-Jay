import axios from 'axios'
import { MessageBox, Message, Notification  } from 'element-ui'

// 认证授权服务器地址
const test = axios.create({
  baseURL: 'http://127.0.0.1:8082',
  timeout: 60, 
  headers: { 
    'Content-Type': 'multipart/form-data'
   }
})

// 过滤器
test.interceptors.request.use(
  config => {

    return config
  },
  error => {
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
test.interceptors.response.use(
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

export default test