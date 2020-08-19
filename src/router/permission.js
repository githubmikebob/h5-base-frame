import router from '@/router'
// import { Notify } from 'vant'
import { getToken } from '@/utils/auth'

router.beforeEach(async (to, from, next) => {
  // 设置页面标题
  document.title = to.meta.title || require('../../config/index').title

  // 获取token
  const hasToken = getToken()
  if (hasToken) {
    if (to.path === '/login') {
      // 已经登录，跳转到首页
      next({ path: '/' })
    } else {
      next()
    }
  } else {
    /* has no token */
    if (to.meta.isOpen) {
      // 开放页面，无需验证
      next()
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      next(`/login?redirect=${to.path}`)
    }
  }
})
