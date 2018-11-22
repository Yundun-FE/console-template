import request from '../service/request-raw'

export default {
  post(url, params) {
    const postData = new FormData()
    for (const p in params) {
      postData.append(p, params[p])
    }

    return request({
      url,
      method: 'POST',
      data: postData
    })
  },
  get(url, params) {
    return request({
      url,
      method: 'GET',
      params
    })
  }
}
