//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    img: '',
    name: '',
    price: '',
    loading: false
  },
  //事件处理函数
  bindInputName: function(e) {
    this.setData({
      name: e.detail.value
    })
  },
  bindInputPrice: function(e) {
    this.setData({
      price: e.detail.value
    })
  },
  bindCancel: function() {
    wx.navigateTo({
      url: '../index/index',
    })
  },
  bindPublish: function() {
    // upload the data
    wx.redirectTo({
      url: 'sell_complete',
    })
  },
  onLoad: function (option) {
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        img:option.img
      })
    })
  }
})
