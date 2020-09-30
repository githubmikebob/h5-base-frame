import router from '../../router'
import store from '../../store'
import { GetLocal, SetLocal, RemoveLocal } from '../../utils/storage'
import { getUrlKey, getWxCode } from '../../utils/global'
import * as $WeChatUser from '../../api/crm/WeChatUser'
import * as $WeChat from '../../api/crm/WeChat'
import * as $adminWeChat from '../../api/admin/WeChat'
import * as $demo from '../../api/admin/demo'

const APP_ID = GetLocal('', 'appId')
const OPEN_ID = GetLocal(APP_ID, 'openId')

// mutations-types
const SET_TOKEN = 'SET_TOKEN' // 获取登录标识
const CLEAR_TOKEN = 'CLEAR_TOKEN' // 清除登录标识
const SET_USER_INFO = 'SET_USER_INFO' // 获取用户信息
const CLEAR_USER_INFO = 'CLEAR_USER_INFO' // 清除用户信息
const SET_MENUS = 'SET_MENUS' // 获取用户路由权限
const CLEAR_MENUS = 'CLEAR_MENUS' // 清除用户路由权限
const SET_APP_ID = 'SET_APP_ID' // 获取公众号appId
const CLEAR_APP_ID = 'CLEAR_APP_ID' // 清除公众号appId
const SET_OPEN_ID = 'SET_OPEN_ID' // 获取微信openId
const CLEAR_OPEN_ID = 'CLEAR_OPEN_ID' // 清除微信openId
const SET_API = 'SET_API' // 获取微信网络请求地址
const CLEAR_API = 'CLEAR_API' // 清除微信网络请求地址

export default {
  namespaced: true,
  state: {
    appId: APP_ID || '',
    openId: OPEN_ID || '',
    api: GetLocal(APP_ID, 'api') || '',
    token: GetLocal(OPEN_ID, 'accessToken') || '',
    userInfo: GetLocal(OPEN_ID, 'userInfo') || {},
    menus: GetLocal(OPEN_ID, 'menus') || []
  },
  mutations: {
    [SET_TOKEN](state, data) {
      state.token = data
      SetLocal(state.openId, 'accessToken', data, 0)
    },
    [CLEAR_TOKEN](state) {
      state.token = ''
      RemoveLocal(state.openId, 'accessToken')
    },
    [SET_USER_INFO](state, userInfo = {}) {
      state.userInfo = userInfo
      SetLocal(state.openId, 'userInfo', userInfo, 0)
    },
    [CLEAR_USER_INFO](state) {
      state.userInfo = {}
      RemoveLocal(state.openId, 'userInfo')
    },
    [SET_APP_ID](state, appId) {
      state.appId = appId
      SetLocal('', 'appId', appId, 0)
    },
    [CLEAR_APP_ID](state) {
      state.appId = ''
      RemoveLocal('', 'appId')
    },
    [SET_OPEN_ID](state, openId) {
      state.openId = openId
      SetLocal(state.appId, 'openId', openId, 0)
    },
    [CLEAR_OPEN_ID](state) {
      RemoveLocal(state.appId, 'openId')
      state.openId = ''
    },
    [SET_MENUS](state, menus = []) {
      state.menus = menus
      SetLocal(state.openId, 'menus', menus, 0)
    },
    [CLEAR_MENUS](state) {
      state.menus = []
      RemoveLocal(state.openId, 'menus')
    },
    [SET_API](state, api) {
      state.api = api
      SetLocal(state.appId, 'api', api, 0)
    },
    [CLEAR_API](state) {
      state.api = ''
      RemoveLocal(state.appId, 'api')
    },
  },
  actions: {
    login({ commit, dispatch }, data) {
      return new Promise(async (resolve, reject) => {
        try {
          let resultLogin = await $demo.login(data)
          let resultInfo = await $demo.info()
          commit(SET_TOKEN, resultLogin.data.token)
          commit(SET_USER_INFO, resultInfo.data)
          await dispatch('setMenus')
          resolve()
        } catch (error) {
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
          let loginRes = await $WeChat.wxLogin(params)
          await router.replace({ path: '/' })
          commit(SET_TOKEN, loginRes.data.access_token)
          await dispatch('setUserInfo')
          // await dispatch('setMenus')
          resolve()
        } catch (e) {
          reject(e)
        }
      })
    },
    async setAppId({ commit, dispatch }, appId = getUrlKey('id')) {
      if (process.env.NODE_ENV === 'production') {
        if (appId) commit(SET_APP_ID, appId)
      } else {
        // 开发环境默认appId
        commit(SET_APP_ID, 'wxc8472472f6eb0a0d')
      }
      await dispatch('setApi')
    },
    setOpenId({ state, commit, dispatch }, openId) {
      return new Promise(async (resolve, reject) => {
        try {
          await dispatch('setAppId')
          let params = {
            code: getWxCode(),
            app_id: state.appId
          }
          let res = await $WeChatUser.getOpenId(params)
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
          let res = await $demo.menus()
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
          let res = await $WeChatUser.getWxUserInfo({ openid: state.openId })
          commit(SET_USER_INFO, res.data.user)
          resolve()
        } catch (e) {
          reject(e)
        }
      })
    },
    setApi({ state, commit }) {
      return new Promise(async (resolve, reject) => {
        if (process.env.NODE_ENV === 'production') {
          try {
            let res = await $adminWeChat.getApi({ app_id: state.appId })
            commit('SET_API', res.data)
            resolve()
          } catch (e) {
            reject(e)
          }
        } else {
          // 开发环境默认api
          commit(SET_API, 'https://apitest.softkgj.com')
          resolve()
        }
      })
    },
    async logout({ commit }) {
      commit(CLEAR_TOKEN)
      commit(CLEAR_MENUS)
      commit(CLEAR_USER_INFO)
      await router.replace('/login')
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
