import request from '../service/request'

export default {
  messagecenterGetmessagelist(params) {
    return request({
      url: '/V4/messagecenter.getmessagelist',
      method: 'get',
      params
    })
  }
}
