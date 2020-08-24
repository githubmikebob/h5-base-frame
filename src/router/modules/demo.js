const WxTest = () => import('@/views/pages/WxTest.vue');
const ListDemo = () => import('@/views/pages/ListDemo.vue');

// 注意
// meta: {
//   hideHeader: true, //  true 隐藏头部导航栏 false显示导航栏（可用于自定义头部）
// }
export default [
  {
    path: '/WxTest',
    name: 'WxTest',
    meta: {
      title: '微信jssdk测试',
      // hideHeader: true,
      // isOpen: true,
    },
    component: WxTest,
  },
  {
    path: '/ListDemo',
    name: 'ListDemo',
    meta: {
      title: '列表 demo',
      hideHeader: true,
      // isOpen: true,
    },
    component: ListDemo,
  },
];
