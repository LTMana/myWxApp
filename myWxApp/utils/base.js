
import {Config} from './config.js'

class Base {

  constructor () {

    this.host = Config.Host

  }
  
  request(path, params = { data: {}, Type: 'POST'}) {

    return new Promise ((resolve, reject) => {
      wx.request({
        url: `${this.host}${path}`,
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        data: params.data,
        method: params.Type || 'POST',
        success (res) {

          resolve(res.data)

        },
        fail () {
          
          throw Error('网络请求失败')
        }
      })
    })

    
  }
}

export {Base}
