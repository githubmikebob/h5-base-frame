import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import i18n from './utils/i18n';

// 初始化样式
import '@/assets/css/reset.css';
// 移动端rem适配js
// import "@/assets/js/rem";

// 设置html根字体大小
import '@/assets/css/font-html.css'

// 导入vant css(由于采用配置主题方式，这里需要导入vant less 主题文件,如果不需要自定义主题注释下面代码，然后解除config/cdn.js 中vant主题样式的注释)
import 'vant/lib/index.less';
// 路由权限拦截
import './router/permission';
// 初始化svg雪碧图
import './icons';

// vant 常用组件全局注册
import './utils/vant';

// 注册自定义全局组件
import './utils/components';

// 注册全局插件
import './utils/plugins';

// mock模式
if (process.env.VUE_APP_MODE === 'mock') {
  require('../mock');
  console.log('本地mock数据已导入');
}

// 打印当前运行模式
console.log('当前运行模式为:', process.env);

Vue.config.productionTip = false;

new Vue({
  router,
  i18n,
  store,
  render: (h) => h(App),
}).$mount('#app');
