
import {Base} from '../../utils/base.js'

const feedbackList = '/service/index.php/admin/feedback/feedbackList'


class HomeModel extends Base {
  constructor () {
    super()
  }

  loadHomeData () {
    
    const params = {}
    params.data = { page: 1, pageSize: 10}
    return this.request(feedbackList, params).then(res => res.data) 

  }
}

HomeModel.default = 'homeModel'


export {HomeModel}