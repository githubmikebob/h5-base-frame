// routes
import routes from './modules';
// layout
import BottomBar from '@/views/components/BottomView/Index.vue';
import HeaderBar from '@/views/components/HeaderView/Index.vue';

// common
const page404 = () => import('@/views/404.vue');
const WxLogin = () => import('@/views/WxLogin.vue');

// BottomBar
const Home = () => import('@/views/pages/Home.vue');
const PersonCenter = () => import('@/views/pages/PersonCenter.vue');
const MapDemo = () => import('@/views/pages/MapDemo.vue');

// 注意
// meta: {
//   isOpen: true // 默认所有页面都是要权限的,配置isOpen:true 设置无需权限访问
// }
const routesArr = [
  {
    path: '*',
    name: 'page404',
    meta: {
      title: '页面未找到',
      isOpen: true,
    },
    component: page404,
  },
  {
    path: '/',
    name: 'main',
    redirect: '/home',
    component: BottomBar,
    children: [
      {
        path: 'home',
        name: 'home',
        meta: {
          title: '主页',
        },
        component: Home,
      },
      {
        path: 'MapDemo',
        name: 'MapDemo',
        meta: {
          title: '地图',
          isOpen: true,
        },
        component: MapDemo,
      },
      {
        path: 'PersonCenter',
        name: 'PersonCenter',
        meta: {
          title: '个人中心',
        },
        component: PersonCenter,
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '登录',
      isOpen: true,
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
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
  {
    path: '/',
    name: 'page',
    redirect: '/home',
    component: HeaderBar,
    children: [...routes],
  },
];
export default routesArr;
