// BottomBar
const Home = () => import('@/views/demo/Home.vue');
const PersonCenter = () => import('@/views/demo/PersonCenter.vue');
const MapDemo = () => import('@/views/demo/MapDemo.vue');

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