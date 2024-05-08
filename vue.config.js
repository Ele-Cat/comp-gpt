const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: false,
  publicPath: process.env.VUE_PUBLIC_PATH,
  devServer: {
    port: 9527,
    open: true,
  }
})
