// miniprogram/pages/rank/rank.js
const app=getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    topShow:0,
    leftShow:0,
    topNav:[],
    leftNav:[],
    bests:[],
    news:[],
    recs:[],
    books:[]
  },
  changeTopNav(e){
    var id=e.currentTarget.dataset.id;
    this.setData({
      topShow:id
    })
    if(id==0){
      this.setData({
        books:this.data.bests
      })
    }else if(id==1){
      this.setData({
        books: this.data.news
      })      
    }else if(id==2){
      this.setData({
        books: this.data.recs
      })    
    }
  },
  changeLeftNav:function(e){
    var id = e.currentTarget.dataset.id;
    this.setData({
      leftShow: id
    })
    if (id == 0) {
      this.setData({
        books: this.data.bests
      })
    } else if (id == 1) {
      this.setData({
        books: this.data.news
      })
    } else if (id == 2) {
      this.setData({
        books: this.data.recs
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'http://localhost:3000/wx/rank',
      success:(res)=>{
        app.spLable(res.data.bests, 1)
        app.spLable(res.data.news, 1)
        app.spLable(res.data.recs, 1)
        this.setData({
          topNav:res.data.topNav,
          leftNav:res.data.leftNav,
          bests:res.data.bests,
          news:res.data.news,
          recs:res.data.recs,
          books: res.data.bests
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