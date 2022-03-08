Page({
  data: {
    timer: 0,
    result: [],
    tempData: {
      content: '一段内容一段内容一段内容一段内容一段内容段内容',
      date: '2022-02-01'
    }
  },
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
  onPullDownRefresh() {
    // let arrRes = this.data.result
    // arrRes.push(this.data.tempData)
    this.setData({
      result: [...this.data.result, this.data.tempData]
    })
    wx.stopPullDownRefresh()
  },
  onLoad: function (options) {

  },
  onShow() {
  }
});
