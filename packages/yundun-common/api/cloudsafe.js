import request from '../service/request'

export default {
  hwwsDomainList: function hwwsDomainList(params) {
    return request({
      url: '/V4/cloudsafe.hwws.domain.list',
      method: 'get',
      params
    })
  },
  hwwsDomainInfo: function hwwsDomainInfo(params = {}) {
    params.spam = Math.random()
    return request({
      url: '/V4/cloudsafe.hwws.domain.info',
      params
    })
  },
  hwwsPackageList: function hwwsPackageList(params) {
    return request({
      url: '/V4/cloudsafe.hwws.package.list',
      method: 'get',
      params
    })
  },
  hwwsPackageInfo: function hwwsPackageInfo(params) {
    return request({
      url: '/V4/cloudsafe.hwws.package.info',
      method: 'get',
      params
    })
  }
}
