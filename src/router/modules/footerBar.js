// BottomBar
const Home = () => import('@/views/pages/Home.vue');
const PersonCenter = () => import('@/views/pages/PersonCenter.vue');
const MapDemo = () => import('@/views/pages/MapDemo.vue');

export default [
  {
    path: 'home',
    name: 'home',
    meta: {
      title: '主页',
      isOpen: true,
    },
    component: Home,
  },
  {
    path: 'MapDemo',
    name: 'MapDemo',
    meta: {
      title: '地图',
      // isOpen: true,
    },
    component: MapDemo,
  },
  {
    path: 'PersonCenter',
    name: 'PersonCenter',
    meta: {
      title: '个人中心',
      isAuth: true
      // isOpen: true,
    },
    component: PersonCenter,
  },
]