// miniprogram/pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    casel: [],
    pubBooks:[],
    news:[],
    bests:[],
    recs:[]
  },

  goClassify:function(){
    wx.navigateTo({
      url: '../classify/classify'
    })
  },
  goRank:function(){
    wx.navigateTo({
      url: '../rank/rank'
    })
  },
  goFree:function(){
    wx.navigateTo({
      url: '../free/free'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'http://localhost:3000/wx/index',
      success:(res)=>{
        this.setData({
          casel:res.data.casel,
          pubBooks:res.data.pubBooks,
          bests:res.data.best,
          news:res.data.new,
          recs:res.data.rec
        })
        console.log(this.data.news);
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