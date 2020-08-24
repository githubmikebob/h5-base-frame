import router, { resetRouter, baseRouters, errorRouters, asyncRouters }  from '@/router'
import store from '@/store'
// import HeaderBar from '@/components/Layout/HeaderView.vue';

/**
* 查找对应权限的路由
* @params rules 权限规则
* */
function filterRouter(rules) {
  let routers
  routers = asyncRouters.filter((item) => {
    return rules.indexOf(item.name) > -1
  })
  // console.log(routers)
  return routers
}

export default {
  namespaced: true,
  state: {
    // pageRouters: {
    //   path: '/',
    //   name: 'page',
    //   redirect: '/home',
    //   component: HeaderBar,
    //   children: []
    // },
    addRouters: [],
    routers: []
  },
  mutations: {
    // SET_PAGE_ROUTERS(state, routes) {
    //   state.pageRouters.children = routes
    //   router.addRoutes([state.pageRouters])
    // },
    SET_ROUTERS(state, routes) {
      state.addRouters = routes.concat(errorRouters)
      state.routers = baseRouters.concat(state.addRouters)
      resetRouter()
      router.addRoutes(state.addRouters)
    }
  },
  actions: {
    // setPageRouters({ commit }, menus) {
    //   let rules = menus || store.state.user.menus
    //   let childrenRoutes = filterRouter(rules)
    //   commit('SET_PAGE_ROUTERS', childrenRoutes)
    // },
    setRouters({ commit }, menus) {
      let rules = menus || store.state.user.menus
      let addR = filterRouter(rules)
      commit('SET_ROUTERS', addR)
    }
  },
  getters: {
    // getPageRouters(state) {
    //   return state.pageRouters
    // },
    getAddRouters(state) {
      return state.addRouters
    },
    getRouters(state) {
      return state.routers
    }
  }
}