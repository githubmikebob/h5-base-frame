// routes
import footBarRouter from './footerBar';
// layout
import BottomBar from '@/components/Layout/BottomView.vue';
// common
const WxLogin = () => import('@/views/WxLogin.vue');
// ruleRouter

// 注意
// meta: {
//   isOpen: true // 默认所有页面都是要权限的,配置isOpen:true 设置无需权限访问
// }
const baseRouter = [
  {
    path: '/',
    name: 'root',
    redirect: '/home',
    component: BottomBar,
    children: [...footBarRouter],
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '登录',
      isOpen: true,
    },
    // route level code-splitting 路由级代码拆分
    // this generates a separate chunk (about.[hash].js) for this route 这将为此路由生成一个单独的块（about.[hash].js）
    // which is lazy-loaded when the route is visited. 当访问路由时延迟加载。
    component: () => import(/* webpackChunkName: "login" */ '@/views/Login.vue'),
  },
  {
    path: '/WxLogin',
    name: 'WxLogin',
    meta: {
      title: '微信登录',
      isOpen: true,
    },
    component: WxLogin,
  },
];

export default baseRouter;
