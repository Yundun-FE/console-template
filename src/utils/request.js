import axios from 'axios'
import { Message } from 'element-ui'

const service = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
  }
})

// respone拦截器
service.interceptors.response.use(
  response => {
    const { status: statusCode, data: body } = response

    const { status, data } = body

    if (status) {
      const { code, message } = status

      if (statusCode === 200) {
        if (code && message) {
          if (parseInt(code, 10) !== 1) {
            if (code === 16149) {
              window.location.href = '/login'
            } else {
              Message({
                message,
                type: 'warning'
              })
            }
            return Promise.reject(message)
          }
        }
      } else {
        Message({
          message,
          type: 'error'
        })
        return Promise.reject(message)
      }
    }

    if (data && data.data) {
      return data.data
    } else {
      return data
    }
  },
  error => {
    console.log(error)
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
