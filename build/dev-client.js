'use strict'

/* eslint-disable */
require('eventsource-polyfill')
var hotClient = require('webpack-hot-middleware/client?noInfo=true&reload=true')

hotClient.subscribe(function (event) {
  if (event.action === 'reload') {
    //vuex 启动热加载应屏蔽刷新
    //window.location.reload()
  }
})
