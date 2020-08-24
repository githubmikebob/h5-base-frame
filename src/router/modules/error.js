const page401 = () => import('@/views/401.vue');
const page404 = () => import('@/views/404.vue');

export default [
  {
    path: '/page401',
    name: 'page401',
    hidden: true,
    meta: {
      title: '页面没有权限访问',
      isOpen: true,
    },
    component: page401,
  },
  {
    path: '/page404',
    name: 'page404',
    hidden: true,
    meta: {
      title: '页面未找到',
      isOpen: true,
    },
    component: page404,
  },
  {
    path: '*',
    redirect: '/page404',
    hidden: true
  },
]