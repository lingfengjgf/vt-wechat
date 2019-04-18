//app.js
App({
  onLaunch: function () {
    
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
      })
    }

    this.globalData = {}
  },
  spLable:function(arr,i){
    for (var elem of arr) {
      if (elem.label.length > 0) {
        var labs = elem.label.split('@');
        elem.label = labs[i];
      } else {
        elem.label = '';
      }
    }
  },
  getTags:function(arr1,arr2,el){
    for(var i=0;i<arr2.length;i++){
      arr1.push(arr2[i][el])
    }
  }
})
