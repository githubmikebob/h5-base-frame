const WxTest = () => import('@/views/demo/WxTest.vue');
const ListDemo = () => import('@/views/demo/ListDemo.vue');

// 注意
// meta: {
//   hideHeader: true, //  true 隐藏头部导航栏 false显示导航栏（可用于自定义头部）
// }
export default [
  {
    path: '/WxTest',
    name: 'WxTest',
    meta: {
      title: 'demo.WxTest',
      // hideHeader: true,
      // isOpen: true,
    },
    component: WxTest,
  },
  {
    path: '/ListDemo',
    name: 'ListDemo',
    meta: {
      title: 'demo.ListDemo',
      hideHeader: true,
      // isOpen: true,
    },
    component: ListDemo,
  },
];
