/**
 * 配置webpack-cdn-plugin
 * @listens https://github.com/shirotech/webpack-cdn-plugin
 */
module.exports = {
  prodUrl: "https://cdn.jsdelivr.net/npm/:name@:version/:path", // 按需自定义CDN服务器
  modules: [
    {
      name: "vue",
      var: "Vue",
      path: "dist/vue.runtime.min.js",
    },
    {
      name: "vue-router",
      var: "VueRouter",
      path: "dist/vue-router.min.js",
    },
    {
      name: "vuex",
      var: "Vuex",
      path: "dist/vuex.min.js",
    },
    // {
    //   name: 'vue-amap',
    //   var: 'VueAMap',
    //   path: 'dist/index.js'
    // },
    {
      name: "vant",
      var: "vant",
      path: "lib/vant.min.js",
      // style: "lib/index.css", // 由于需要自定义主题，这里注释CDN全局导入样式
    },
  ],
};
