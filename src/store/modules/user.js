import router from '@/router'
import store from '@/store'
import { GetLocal, SetLocal, RemoveLocal } from '@/utils/storage'
import { getUrlKey, getWxCode } from '@/utils/global'
import * as $userApi from '@/api/user'

// mutations-types
const SET_TOKEN = 'SET_TOKEN' // 获取登录标识
const SET_USER_INFO = 'SET_USER_INFO' // 获取用户信息
const SET_MENUS = 'SET_MENUS' // 获取用户路由权限
const SET_APP_ID = 'SET_APP_ID' // 获取公众号appId
const SET_OPEN_ID = 'SET_OPEN_ID' // 获取微信openId
const LOGOUT = 'LOGOUT' // 退出登录、清除用户数据

export default {
  namespaced: true,
  state: {
    token: GetLocal('', 'accessToken') || '',
    appId: GetLocal('', 'appId') || '',
    openId: GetLocal('', 'openId') || '',
    userInfo: GetLocal('', 'userInfo') || {},
    menus: GetLocal('', 'menus') || []
  },
  mutations: {
    [SET_TOKEN](state, data) {
      state.token = data
      SetLocal('', 'accessToken', data, 0)
    },
    [SET_USER_INFO](state, userInfo = {}) {
      state.userInfo = userInfo
      SetLocal('', 'userInfo', userInfo, 0)
    },
    [SET_APP_ID](state, appId) {
      state.appId = appId
      SetLocal('', 'appId', appId, 0)
    },
    [SET_OPEN_ID](state, openId) {
      state.openId = openId
      SetLocal('', 'openId', openId, 0)
    },
    [SET_MENUS](state, menus = []) {
      state.menus = menus
      SetLocal('', 'menus', menus, 0)
    },
    [LOGOUT](state) {
      state.userInfo = {}
      state.token = null
      state.menus = []
      RemoveLocal('', 'accessToken')
      RemoveLocal('', 'userInfo')
      RemoveLocal('', 'menus')
      router.replace('/login')
    }
  },
  actions: {
    login({ commit, dispatch }, data) {
      return new Promise(async (resolve, reject) => {
        try {
          let resultLogin = await $userApi.login(data)
          let resultInfo = await $userApi.info()
          commit(SET_TOKEN, resultLogin.data.token)
          commit(SET_USER_INFO, resultInfo.data)
          await dispatch('setMenus')
          resolve()
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
    wxLogin({ state, commit, dispatch }, params) {
      return new Promise(async (resolve, reject) => {
        try {
          let openIdRes = await dispatch('setOpenId')
          let params = {
            app_id: state.appId,
            openid: state.openId,
            user_token: openIdRes.access_token
          }
          let loginRes = await $userApi.wxLogin(params)
          await router.replace({ path: '/' })
          commit(SET_TOKEN, loginRes.data.access_token)
          await dispatch('setUserInfo')
          await dispatch('setMenus')
          resolve()
        } catch (e) {
          reject(e)
        }
      })
    },
    setAppId({ commit }, appId = getUrlKey('id')) {
      if (process.env.NODE_ENV === 'production') {
        if (appId) commit(SET_APP_ID, appId)
      } else {
        // 开发环境默认appId
        commit(SET_APP_ID, 'wxc8472472f6eb0a0d')
      }
    },
    setOpenId({ state, commit, dispatch }, openId) {
      return new Promise(async (resolve, reject) => {
        try {
          await dispatch('setAppId')
          let params = {
            code: getWxCode(),
            app_id: state.appId
          }
          let res = await $userApi.getOpenId(params)
          commit(SET_OPEN_ID, res.data.openid)
          resolve(res.data)
        } catch (e) {
          reject(e)
        }
      })
    },
    setMenus({ state, commit, dispatch }, menus) {
      return new Promise(async (resolve, reject) => {
        try {
          let res = await $userApi.menus()
          await store.dispatch('router/setRouters', res.data)
          commit(SET_MENUS, res.data)
          resolve()
        } catch (e) {
          reject(e)
        }
      })
    },
    setUserInfo({ state, commit, dispatch }, userInfo) {
      return new Promise(async (resolve, reject) => {
        try {
          let res = await $userApi.getWxUserInfo({openid: state.openId})
          commit(SET_USER_INFO, res.data.user)
        } catch (e) {
          reject(e)
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
