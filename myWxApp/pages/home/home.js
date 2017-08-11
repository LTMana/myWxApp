// home.js
import {HomeModel} from './home-model.js'

const homeModel = new HomeModel()

Page({

  /**
   * 页面的初始数据
   */
  data: {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    console.log(homeModel.loadHomeData())
    homeModel.loadHomeData().then(data => {

    })
  
  }
})