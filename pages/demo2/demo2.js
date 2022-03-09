Page({
  data: {
    // pager
    pageNum: 1,
    pageSize: 10,
    total: 0,

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

  // pull down page event
  onPullDownRefresh() {
    wx.switchTab({
      url: '../demo2/demo2',
    });
  },

  // reach bottom 
  onReachBottom() {
    this.setData({

    })
    this.setData({
      result: [...this.data.result, ...this.queryData(this)]
    })
  },

  queryData(pageNum = 1, pageSize = 10) {
    let tempData = this.data.factData.slice(
      (pageNum - 1) * pageSize,
      pageNum * pageSize
    )
    return tempData
  },

  // init arr data
  initResult() {
    let dataFactory = []
    for (let i = 0; i < 30; i++) {
      dataFactory.push({
        content: '一段内容一段内容一段内容一段内容一段内容段内容id: ' + (i + 1),
        date: '2022-01-01'
      })
    }
    return dataFactory;
  },

  onLoad: function (options) {
    this.setData({
      factData: this.initResult()
    })
    this.setData({
      result: this.queryData(1, 10)
    })
  },
  onShow() {
  }
});
