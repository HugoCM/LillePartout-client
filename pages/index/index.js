//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  bindBuyTap: function () {
    wx.navigateTo({
      url: '../buy/buy'
    })
  },
  bindSellTap: function () {
    wx.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      success: function(res) {
        wx.navigateTo({
          url: '../sell/sell?img='+res.tempFilePaths[0],
        })
      },
    })
  },
  bindindexTap: function () {
    wx.navigateTo({
      url: '../index/index'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
