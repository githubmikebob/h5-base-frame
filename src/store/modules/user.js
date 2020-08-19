// import { Toast } from 'vant'
import router from '@/router'
import {
  getToken,
  setToken,
  removeToken,
  setUserInfo,
  removeUserInfo
} from '@/utils/auth'
import * as $userApi from '@/api/user'
import { getUserInfo } from '../../utils/auth'

// mutations-types
const SET_TOKEN = 'SET_TOKEN' // 登录
const SET_USER_INFO = 'SET_USER_INFO' // 获取用户信息
const LOGOUT = 'LOGOUT' // 退出登录、清除用户数据

export default {
  namespaced: true,
  state: {
    token: getToken() || '',
    user: getUserInfo() || {}
  },
  mutations: {
    [SET_TOKEN](state, data) {
      state.token = data
      setToken(data)
    },
    [SET_USER_INFO](state, userData = {}) {
      state.user = userData
      setUserInfo(userData)
    },
    [LOGOUT](state) {
      state.user = {}
      state.token = null
      removeToken()
      removeUserInfo()
      router.replace('/login')
    }
  },
  actions: {
    async login({ commit }, data) {
      return new Promise(async (reslove, reject) => {
        try {
          let resultLogin = await $userApi.login(data)
          let resultInfo = await $userApi.info()
          commit(SET_TOKEN, resultLogin.data.token)
          commit(SET_USER_INFO, resultInfo.data)
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
    user(state) {
      return state.user
    }
  }
}
