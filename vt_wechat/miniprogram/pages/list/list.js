// miniprogram/pages/list/list.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    books: []
  },
  showTitle:function(title){
    wx.setNavigationBarTitle({
      title: title
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //console.log(options.goPath)
    var goPath = options.goPath;
    var title='观品';
    if(goPath=='free'){
      title='免费专区'
    }
    if(goPath=='best'){
      title='观品热销'
    }
    if(goPath=='new'){
      title='新书上架'
    }
    if(goPath=='rec'){
      title='编辑推荐'
    }
    this.showTitle(title)
    var url = 'http://localhost:3000/wx/' + goPath;
    wx.request({
      url: url,
      success: (res) => {
        app.spLable(res.data, 1)
        this.setData({
          books: res.data
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})