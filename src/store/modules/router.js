import router, { resetRouter, baseRouters, errorRouters, asyncRouters, demoRouters }  from '../../router'
import store from '../../store'

/**
* 查找对应权限的路由
* @params rules 权限规则
* */
function filterRouter(rules) {
  let routers
  routers = asyncRouters.filter((item) => {
    return rules.indexOf(item.name) > -1
  })
  return routers
}

export default {
  namespaced: true,
  state: {
    addRouters: [],
    routers: []
  },
  mutations: {
    SET_ROUTERS(state, routes) {
      state.addRouters = routes.concat(errorRouters, demoRouters)
      state.routers = baseRouters.concat(state.addRouters)
      resetRouter()
      router.addRoutes(state.addRouters)
    }
  },
  actions: {
    setRouters({ commit }, menus) {
      let rules = menus || store.state.user.menus
      let addR = filterRouter(rules)
      commit('SET_ROUTERS', addR)
    }
  },
  getters: {
    getAddRouters(state) {
      return state.addRouters
    },
    getRouters(state) {
      return state.routers
    }
  }
}