module.exports = {
  // 解决打包组件的报错问题
  lintOnSave: false,
  css: {
    modules: true,
    // 解决elementui样式不生效问题
    requireModuleExtension: true
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8888/admin',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }

}
