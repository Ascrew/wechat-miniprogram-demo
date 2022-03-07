Page({
  data: {
    timer: 0,
    result: []
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
          result: [
            {
              content: '一一段内容一段内容一段内容一段内容一段内容段内容',
              date: '2022-02-01'
            },
            {
              content: '一一段内容一段内容一段内容一段内容一段内容段内容',
              date: '2022-02-01'
            }
          ]
        })
        wx.hideLoading();
      }, 0)
    }, 1500)
  },
  onLoad: function (options) {

  }
});
