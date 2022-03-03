Page({
  data: {
    indicatorDots: true,
    autoplay: false,
    interval: 2000,
    duration: 500,
    activeIndex: 0,
    swipers: [
      '../../static/images/image1.png',
      '../../static/images/image2.png',
      '../../static/images/image3.png'
    ],
    oneBtnList: [
      {
        imgUrl: '../../static/images/ban.png',
        text: '我要办'
      },
      {
        imgUrl: '../../static/images/cha.png',
        text: '我要查'
      },
      {
        imgUrl: '../../static/images/wen.gif',
        text: '我要问'
      },
      {
        imgUrl: '../../static/images/ba.gif',
        text: '小喇叭'
      },
    ],
    twoBtnList: [
      {
        imgUrls: [
          '../../static/images/2-1.png',
          '../../static/images/2-2.png'
        ]
      },
      {
        imgUrls: [
          '../../static/images/2-3.png',
          '../../static/images/2-4.png'
        ]
      },
      {
        imgUrls: [
          '../../static/images/2-5.png',
          '../../static/images/2-6.png'
        ]
      }
    ],
    spcImg: '../../static/images/2-7.png',
    threeBtnList: [
      {
        imgUrl: '../../static/images/2-8.png',
        text: '线上问答'
      },
      {
        imgUrl: '../../static/images/2-9.png',
        text: '医保热线'
      }
    ],
    fourBtnList: {
      leftImgUrl: '../../static/images/3-1.png',
      rightContent: [
        {
          content: 'aaaaaaaaaaaaaaaaaaaa',
          date: '2022-01-01'
        },
        {
          content: 'bbbbbbbbbbbbbbbbbbbb',
          date: '2022-01-01'
        },
        {
          content: 'cccccccccccccccccccc',
          date: '2022-01-01'
        },
        {
          content: 'dddddddddddddddddddd',
          date: '2022-01-01'
        },
        {
          content: 'dddddddddddddddddddd',
          date: '2022-01-01'
        },
        {
          content: 'dddddddddddddddddddd',
          date: '2022-01-01'
        },
        {
          content: 'dddddddddddddddddddd',
          date: '2022-01-01'
        },
        {
          content: 'dddddddddddddddddddd',
          date: '2022-01-01'
        },
        {
          content: 'dddddddddddddddddddd',
          date: '2022-01-01'
        },
        {
          content: 'dddddddddddddddddddd',
          date: '2022-01-01'
        },
        {
          content: 'dddddddddddddddddddd',
          date: '2022-01-01'
        },
        {
          content: 'dddddddddddddddddddd',
          date: '2022-01-01'
        },
        {
          content: 'dddddddddddddddddddd',
          date: '2022-01-01'
        },
        {
          content: 'dddddddddddddddddddd',
          date: '2022-01-01'
        },
      ],
      calHeight: 0,
      calSec: 0,
    }
  },
  oneClick(e) {
    console.log('listen click')
  },
  onLoad: function (options) {
    // animation
    // let calHeight = 0
    // let calSec = 0
    // setTimeout(() => {
    //   let domQuery = wx.createSelectorQuery();
    //   domQuery.select('.four-right-transform').boundingClientRect(rect => {
    //     let clientHeight = rect.height;
    //     let clientWidth = rect.width;
    //     console.log('listen clientHeight', clientHeight)
    //     console.log('listen clientwi', clientWidth)
    //     let ratio = (750 / clientWidth).toFixed(2);

    //     calHeight = clientHeight * ratio
    //     calSec = calHeight / 200
    //     this.setData({
    //       calHeight: calHeight,
    //       calSec: calSec
    //     })
    //     console.log('listen cal height', calHeight);
    //     console.log('listen cal second', calSec);
    //   }).exec();
    // }, 0)
    //     console.log('listen cal2 height', calHeight);
    //     console.log('listen cal2 second', calSec);
    setInterval(function () {
      this.animate('.four-right-transform', [
        {
          top: '0'
        },
        {
          top: '-200rpx'
        }
      ], 3000);
    }.bind(this), 3000)
  }
});
