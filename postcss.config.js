module.exports = {
  plugins: {
    'postcss-px-to-viewport': {
      viewportWidth: 375,//视口的宽度
      viewportHeight: 667,//视口的高度
      unitPrecision: 5,//指定'px'转换为视口单位值的小数位数
      viewportUnit: 'vw',//指定需要转换成的视口单位，建议使用vw
      selectorBlackList: ['ignore','tab-bar','tab-bar-item'],//指定不需要转换的类
      minPixelValue: 1,//小于或等于'1px'不转换为视口单位
      mediaQuery: false,//允许在媒体查询中转换'px'
    }
  }
}
