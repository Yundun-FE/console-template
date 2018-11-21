import request from '../utils/request'

export default {
  domainidSettingCdnAdvancecache(domain_id, data) {
    return request({
      url: `/V4/Web.Domain.DomainId.${domain_id}.Settings.cdn_advance_cache`,
      method: 'put',
      data
    })
  },

  webDomainList: function webDomainList(params) {
    return request({
      url: '/V4/Web.Domain.list',
      method: 'get',
      params
    })
  },

  allDomains: function allDomains(params) {
    return request({
      url: '/V4/Web.All.Domains',
      method: 'get',
      params
    })
  },

  webDomainInfo: async function webDomainInfo(params) {
    params.spam = Math.random()
    const data = await request({
      url: '/V4/Web.Domain.Info',
      method: 'get',
      params
    })

    if (!data) return

    const { hwws_status, tjkd_status, tjkd_plus_status, cfw_migrate } = data

    let mType = ''
    if (hwws_status === '1' || tjkd_status === '1' || tjkd_plus_status === '1') {
      mType = 'plus'
    } else {
      mType = 'cdn'
    }

    // 是否打开旧入口
    const oldEnter = cfw_migrate !== '2'
    Object.assign(data, {
      oldEnter,
      mType
    })
    return data
  },

  ReportHwwsWafAttackTimesAndAttackNameTimes(params) {
    return request({
      url: '/V4/Web.Domain.Report.Hwws.wafAttackTimesAndAttackNameTimes',
      method: 'get',
      params
    })
  },

  ReportHwwsWafAttackIpTimes(params) {
    return request({
      url: '/V4/Web.Domain.Report.Hwws.wafAttackIpTimes',
      method: 'get',
      params
    })
  },
  // 批量 - 加域名
  batchCreate(data) {
    return request({
      url: '/V4/Web.Domain.batch.domain.add',
      method: 'post',
      data
    })
  },
  // 批量 - 修改配置
  batchUpdate(data) {
    return request({
      url: '/V4/Web.Domain.batch.set.update',
      method: 'post',
      data
    })
  },

  batchCalList(data) {
    return request({
      url: '/V4/Web.Domain.batch.ca.list',
      method: 'post',
      data
    })
  },

  batchListenPort(data) {
    return request({
      url: '/V4/Web.Domain.batch.listen.port',
      method: 'post',
      data
    })
  },

  batchDomainInfo(params) {
    return request({
      url: '/V4/Web.Domain.batch.domain.info',
      method: 'post',
      params
    })
  },

  batchLogList(params) {
    return request({
      url: '/V4/Web.Domain.batch.log.list',
      method: 'post',
      params
    })
  },

  batchLogDetail(params) {
    return request({
      url: '/V4/Web.Domain.batch.log.detail',
      method: 'post',
      params
    })
  }
}
