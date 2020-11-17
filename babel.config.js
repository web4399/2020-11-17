module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    [
      "@babel/preset-env",
      {
        useBuiltIns: "entry",
        corejs: 3
      }
    ]

  ],
  // entry: {
  //   app: ['babel-polyfill', './src/main.js']      // 在入口文件上进行修改,引入此插件，基本上可以使用大部分新的vue语法。
  // },
}
