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
    searchText: '',
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
      this.data.searchText = e.detail.value;
      setTimeout(() => {
        this.setData({
          result: [...this.queryData(1, 10)]
        }, 0)
        wx.hideLoading();
      }, 0)
    }, 1500)
  },

  // pull down page event  :  not work probably
  onPullDownRefresh() {
    this.isBottom = false
    this.bottomDisplay = 'none'
    this.onLoad()
    wx.stopPullDownRefresh()
  },

  // reach bottom 
  onReachBottom() {
    if (this.data.isBottom) {
      return
    }
    this.data.pageNum += 1
    this.setData({
      result: [...this.data.result, ...this.queryData(this.data.pageNum, this.data.pageSize)],
    })
  },

  queryData(pageNum = 1, pageSize = 10) {
    let searchData = this.data.factData
    if (this.data.searchText.trim()) {
      searchData = this.data.factData.filter(item => {
        return item.content.indexOf(this.data.searchText.trim()) > -1
      })
    }
    let tempData = searchData.slice(
      (pageNum - 1) * pageSize,
      pageNum * pageSize
    )
    this.data.total = searchData.length
    if (pageNum * pageSize > this.data.total) {
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
    this.data.factData = dataFactory;
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
