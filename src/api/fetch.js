import axios from 'axios'
import { Message, Notification } from 'element-ui'
import { getToken } from '@/utils/auth'
// import router from '../router'
import qs from 'qs'
// 创建axios实例
const service = axios.create({
  // baseURL: process.env.BASE_API, // api的base_url
  timeout: 5000 // 请求超时时间
})

// 跨域请求，允许保存cookie
axios.defaults.withCredentials = true

// request拦截器
service.interceptors.request.use(
  config => {
    if (getToken()) {
      config.headers['Authorization'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// response interceptors
service.interceptors.response.use(response => {
  const res = response.data
  if (res.code === -1 || res.error) {
    Message({
      showClose: true,
      message: res.msg || res.error,
      type: 'error'
    })
  }
  // if (res.code && res.code) {
  //   switch (res.code) {
  //     case -1:
  //       removeToken()
  //       MessageBox.confirm('当前账号在别处登录，请重新登录', '登录提示', {
  //         confirmButtonText: '重新登录',
  //         showClose: false,
  //         closeOnClickModal: false,
  //         showCancelButton: false,
  //         type: 'warning'
  //       }).then(() => {
  //         router.push({ path: '/login' })
  //       })
  //       break
  //     case -2:
  //       removeToken()
  //       MessageBox.confirm(res.message, '提示', {
  //         confirmButtonText: '重新登录',
  //         showClose: false,
  //         closeOnClickModal: false,
  //         showCancelButton: false,
  //         type: 'warning'
  //       }).then(() => {
  //         router.push({ path: '/login' })
  //       })
  //       break
  //   }
  // }
  return response
}, error => {
  Notification({
    message: '请求出错，稍后重试' + error,
    type: 'error',
    offset: 100,
    duration: 2 * 1000
  })
  // store.dispatch('setExportLoading', false)
  return Promise.reject(error)
})

export default {
  delete (url, params = {}) {
    return new Promise((resolve, reject) => {
      service.delete(url, qs.stringify(params)).then(res => {
        resolve(res.data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  get (url, params = {}) {
    return new Promise((resolve, reject) => {
      service.get(url, params).then(res => {
        resolve(res.data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  post (url, params = {}) {
    return new Promise((resolve, reject) => {
      // qs.stringify(params)
      service.post(url, qs.stringify(params)).then(res => {
        resolve(res.data)
      }).catch(error => {
        reject(error)
      })
    })
  }

  // put (url, params = {}) {
  //   return new Promise((resolve, reject) => {
  //     service.put(url, qs.stringify(params)).then(res => {
  //       resolve(res.data)
  //     }).catch(error => {
  //       reject(error)
  //     })
  //   })
  // }
}
