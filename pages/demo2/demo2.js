Page({
  data: {
    headText: '政策法规',
    // css flag
    isBottom: false,
    bottomDisplay: 'none',
    // pager
    pageNum: 1,
    pageSize: 10,
    total: 0,
    tempTotal: 35,

    // setTimeout
    timer: 0,

    // main data
    factData: [],
    result: [],
    tempData: {
      content: 'test',
      date: '2022-02-01'
    }
  },
  // search bar inputing event
  handleInput(e) {
    clearTimeout(this.data.timer);
    this.data.timer = setTimeout(() => {
      wx.showLoading({
        title: '加载中',
        mask: true,
      });
      let inputValue = e.detail.value;
      setTimeout(() => {
        this.setData({
          result: [this.data.tempData]
        })
        wx.hideLoading();
      }, 0)
    }, 1500)
  },

  // pull down page event  :  not work probably
  onPullDownRefresh() {
    wx.switchTab({
      url: '../demo2/demo2',
      success: function(){
        wx.stopPullDownRefresh()
      },
      fail: function() {
        wx.stopPullDownRefresh()
      }
    });
  },

  // reach bottom 
  onReachBottom() {
    if(this.data.isBottom) {
      return
    }
    this.data.pageNum += 1
    this.setData({
      result: [...this.data.result, ...this.queryData(this.data.pageNum, this.data.pageSize)],
      headText: 'test'
    })
  },

  queryData(pageNum = 1, pageSize = 10) {
    let tempData = this.data.factData.slice(
      (pageNum - 1) * pageSize,
      pageNum * pageSize
    )
    this.data.total = this.data.tempTotal
    if(pageNum * pageSize > this.data.total) {
      this.data.isBottom = true
      this.setData({
        bottomDisplay: 'flex'
      })
    }
    return tempData
  },

  // init arr data
  createData() {
    let dataFactory = []
    for (let i = 0; i < this.data.tempTotal; i++) {
      dataFactory.push({
        content: '一段内容一段内容一段内容一段内容一段内容段内容id: ' + (i + 1),
        date: '2022-01-01'
      })
    }
    this.data.factData =  dataFactory;
  },

  onLoad: function (options) {
    this.factData = this.createData()
    this.setData({
      result: this.queryData(1, 10)
    })
  },

  onShow() {
  }
});
