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
        imgUrls:[
          '../../static/images/2-1.png',
          '../../static/images/2-2.png'
        ]
      },
      {
        imgUrls:[
          '../../static/images/2-3.png',
          '../../static/images/2-4.png'
        ]
      },
      {
        imgUrls:[
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
    ]
  },
  oneClick(e) {
    console.log('listen click')
  },
  onLoad: function (options) {
  }
});
