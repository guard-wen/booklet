axios.get('http://106.55.145.210:60092/sign')
      .then(function (response) {
        //   console.log('返回的数据',response)
          wx.config({
              debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
              appId: response.data.appId, // 必填，公众号的唯一标识
              timestamp: response.data.timestamp, // 必填，生成签名的时间戳
              nonceStr: response.data.nonceStr, // 必填，生成签名的随机串
              signature: response.data.signature,// 必填，签名
              jsApiList: ['updateAppMessageShareData', 'onMenuShareTimeline', 'onMenuShareAppMessage', 'updateTimelineShareData'] // 必填，需要使用的JS接口列表
          });
      })
  wx.ready(function () {   //需在用户可能点击分享按钮前就先调用
    
      wx.onMenuShareAppMessage({
          title: bookConfig.bookTitle, // 分享标题
          desc: bookConfig.wxDes, // 分享描述
          link: window.location.href, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          imgUrl: bookConfig.banner, // 分享图标
          success: function () {
            //   alert('分享成功')
              // 用户点击了分享后执行的回调函数
          },
          cancel: function () { 
              // 用户取消分享后执行的回调函数
            //   alert('取消分享')
          }
      });
      wx.onMenuShareTimeline({
          title: bookConfig.bookTitle+bookConfig.wxDes, // 分享标题
          link: window.location.href, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          imgUrl: bookConfig.banner, // 分享图标
          success: function () {
              // 用户点击了分享后执行的回调函数
            //   alert('分享时间线')
          },
      });
  });