import request from '../service/request'

export default {
  taiCcLine: function taiCcLine(params) {
    return request({
      url: '/V4/statistic.tai.cc.line',
      method: 'get',
      params
    })
  }
}
