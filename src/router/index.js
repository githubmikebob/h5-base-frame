import Vue from 'vue'
import VueRouter from 'vue-router'

// routes
import baseRouters from './modules/base'
import errorRouters from './modules/error'
import asyncRouters from './modules/async'

Vue.use(VueRouter)

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
  errorRouters,
  asyncRouters
}

export default router
