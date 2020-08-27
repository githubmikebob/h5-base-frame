import router  from '@/router'
import store from '@/store'
import { GetLocal, ResetSession } from '@/utils/storage'

// const WHITE_LIST = ['/login', '/WxLogin']

router.beforeEach(async (to, from, next) => {
  // 设置页面标题
  document.title = to.meta.title || require('../../config/index').title
  // console.log(to)
  // 获取token
  const hasToken = GetLocal('', 'accessToken') || store.state.user.token
  if (hasToken) {
    if (to.path === '/login') {
      // 已经登录，跳转到首页
      next({ path: '/' })
    } else {
      ResetSession('vuex', 'addRouters', []) // 该框架做了vuex持久缓存，需清除
      let addR = store.state.router.addRouters
      if (addR.length > 0) {
        next()
      } else {
        let menus = GetLocal('', 'menus')
        await store.dispatch('router/setRouters', menus)
        next({ ...to, replace: true })
      }
    }
  } else {
    // 不需要验证token的路由
    if (to.meta.isOpen) {
      next()
    } else {
      next(`/login?redirect=${to.path}`)
    }
  }
})
