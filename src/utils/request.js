// import axios from 'axios'
// import { MessageBox, Message, Notification  } from 'element-ui'
// import store from '@/store'
// import { getToken } from '@/utils/auth'

// // 认证授权服务器地址
// const authorization = axios.create({
//   baseURL: 'http://localhost:8080',
//   timeout: 60 * 1000
// })

// // 过滤器
// authorization.interceptors.request.use(
//   config => {
//     // 如果已登录则带上token
//     // if (store.getters.token) {
//     //   config.headers['X-Token'] = getToken()
//     // }

//     return config
//   },
//   error => {
//     console.log(error) // for debug
//     return Promise.reject(error)
//   }
// )

// // response interceptor
// authorization.interceptors.response.use(
//   response => {
//     const res = response.data
//     let code = res.code;

//     if(code == '200'){
//       return res;
//     }else{
//      Message.error({
//         showClose: true,
//         message: '错了哦，这是一条错误消息',
//         type: 'error'
//       }).alert;
//     }
//   },
//   error => {
//     console.log('err' + error) // for debug
//     Message({
//       message: error.message,
//       type: 'error',
//       duration: 5 * 1000
//     })
//     return Promise.reject(error)
//   }
// )

// export default authorization
