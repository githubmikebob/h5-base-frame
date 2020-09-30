import Vue from 'vue'
import VueRouter from 'vue-router'

// routes
import baseRouters from './modules/base'
import errorRouters from './modules/error'
import demoRouters from './modules/demo'

// 自动加载路由 Router async
const router_files = require.context('./modules/async', true, /\.js$/)
const routers = router_files.keys().reduce((router, path) => {
  const value = router_files(path)
  router = value.default
  return router
}, {})
const asyncRouters = Object.values((routers))

Vue.use(VueRouter)

// 重写路由方法，解决重复路由引起的报错
const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err);
}
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const createRouter = () =>
  new VueRouter({
    mode: 'history', // 需要开启服务
    scrollBehavior: () => ({ y: 0 }),
    routes: baseRouters
  })

const router = createRouter()

/* *
*  重置路由
* Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
* */
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export {
  baseRouters,
  asyncRouters,
  errorRouters,
  demoRouters
}

export default router
