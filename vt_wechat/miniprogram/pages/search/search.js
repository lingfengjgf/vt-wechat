// miniprogram/pages/search/search.js
const app=getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    changeData:{},
    isChange:false,
    colorArr: ["#EE2C2C", "#ff7070", "#EEC900", "#4876FF", "#ff6100",
      "#7DC67D", "#E17572", "#7898AA", "#C35CFF", "#33BCBA", "#C28F5C",
      "#FF8533", "#6E6E6E", "#428BCA", "#5cb85c", "#FF674F", "#E9967A",
      "#66CDAA", "#00CED1", "#9F79EE", "#CD3333", "#FFC125", "#32CD32",
      "#00BFFF", "#68A2D5", "#FF69B4", "#DB7093", "#CD3278", "#607B8B"],
    tags: ["玄幻", "玄幻玄幻玄幻玄幻玄幻", "玄幻玄幻玄幻","玄幻玄幻"],
    allTags:[],
    ramColor:[]
  },
  change:function(){
    if(!this.data.isChange){
      this.setData({
        isChange:true
      })
      var changeAn=wx.createAnimation({
        transformOrigin:"50% 50%",
        duration:800
      })
      this.animation=changeAn
      changeAn.rotate(360).step()
      this.setData({
        changeData:changeAn.export()
      })
      setTimeout(() => {
        changeAn.rotate(0).step({duration:0})
        this.setData({
          changeData: changeAn.export(),
          isChange:false
        })

      }, 800)
    }
  },
  getTag:function(){
    var allTags = this.data.allTags,tags=[];
    for (var i = 0; i < 9; i++) {
      var len=allTags.length;
      var index = Math.floor(Math.random()*len)
      tags.push(allTags[index]);
      //allTags.splice(index,1);
      //console.log(allTags)
    }
    //console.log(allTags)
  },
  getColor:function(){
    var cLen=this.data.colorArr.length;
    var tLen=this.data.tags.length;
    var colorArr=this.data.colorArr;
    var ramColor=[];
    for(var i=0;i<tLen;i++){
      var index=Math.floor(Math.random()*cLen);
      ramColor.push(colorArr[index])
    }
    this.setData({ramColor})
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'http://localhost:3000/wx/searchTags',
      success:(res)=>{
        var allTags=[],tags=[];
        app.getTags(allTags,res.data.title,'title');
        app.getTags(allTags, res.data.author,'author');
        app.spLable(res.data.label,1);
        app.getTags(allTags, res.data.label,'label');
        var allTag = new Set(allTags)
        console.log(allTag)
        this.setData({allTags})
        this.getTag()
      }
    })
    this.getColor();
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