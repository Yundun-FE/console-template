import request from '../service/request'

export default {
  selfList(params) {
    return request({
      url: '/V4/Web.ca.self.list',
      method: 'get',
      params
    })
  }
}
