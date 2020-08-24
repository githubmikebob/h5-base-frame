import router from '@/router'
import store from '@/store'
import { GetLocal, SetLocal, RemoveLocal } from '@/utils/storage'
import * as $userApi from '@/api/user'

// mutations-types
const SET_TOKEN = 'SET_TOKEN' // 登录
const SET_USER_INFO = 'SET_USER_INFO' // 获取用户信息
const SET_MENUS = 'SET_MENUS' // 获取用户路由权限
const LOGOUT = 'LOGOUT' // 退出登录、清除用户数据

export default {
  namespaced: true,
  state: {
    token: GetLocal('', 'TOKEN_KEY') || '',
    user: GetLocal('', 'USER_INFO') || {},
    menus: GetLocal('', 'MENUS') || []
  },
  mutations: {
    [SET_TOKEN](state, data) {
      state.token = data
      SetLocal('', 'TOKEN_KEY', data, 0)
    },
    [SET_USER_INFO](state, userData = {}) {
      state.user = userData
      SetLocal('', 'USER_INFO', userData, 0)
    },
    [SET_MENUS](state, menus = []) {
      state.menus = menus
      SetLocal('', 'MENUS', menus, 0)
    },
    [LOGOUT](state) {
      state.user = {}
      state.token = null
      state.menus = []
      RemoveLocal('', 'TOKEN_KEY')
      RemoveLocal('', 'USER_INFO')
      RemoveLocal('', 'MENUS')
      router.replace('/login')
    }
  },
  actions: {
    async login({ commit }, data) {
      return new Promise(async (reslove, reject) => {
        try {
          let resultLogin = await $userApi.login(data)
          let resultInfo = await $userApi.info()
          let resultMenus = await $userApi.menus()
          await store.dispatch('router/setRouters', resultMenus.data)
          commit(SET_TOKEN, resultLogin.data.token)
          commit(SET_USER_INFO, resultInfo.data)
          commit(SET_MENUS, resultMenus.data)
          reslove()
        } catch (error) {
          // Toast({
          //   message: error || '登录失败',
          //   position: 'middle',
          //   duration: 1500
          // })
          reject(error)
        }
      })
    },
    logout({ commit }) {
      commit(LOGOUT)
    }
  },
  getters: {
    token(state) {
      return state.token
    },
    menus(state) {
      return state.menus
    },
    user(state) {
      return state.user
    }
  }
}
