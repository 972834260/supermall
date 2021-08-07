module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        assets: '@/assets',
        css: '@/assets/css',
        img: '@/assets/img',
        common: '@/common',
        components: '@/components',
        views: '@/views',
        network: '@/network'
      }
    }
  }
}
