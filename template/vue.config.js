// vue.config.js
const path = require('path')
const resolve = dir => path.join(__dirname, dir)
const fs = require('fs')


console.log("path",path)

console.log("-------------------------")
console.log("resolve",resolve)
console.log("-------------------------")

console.log("fs",fs)


module.exports = {
  publicPath: "./", // 默认'/'，部署应用包时的基本 URL
  outputDir: process.env.outputDir || "dist", // 'dist', 生产环境构建文件的目录
  assetsDir: "", // 相对于outputDir的静态资源(js、css、img、fonts)目录
  lintOnSave: false,
  runtimeCompiler: true, // 是否使用包含运行时编译器的 Vue 构建版本
  productionSourceMap: false, // 生产环境的 source map
  parallel: require("os").cpus().length > 1,
  chainWebpack: config => {// 别名设置
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components/'))
      .set('_as', resolve('src/assets/img/'))
  },
  devServer: {
    proxy: 'http://localhost:8080'
  }

};
