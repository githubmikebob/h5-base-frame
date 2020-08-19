import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//#region 自动导入vuex modules
const files = require.context('./modules', false, /\.js$/)
const modules = {}

files.keys().forEach(key => {
  modules[key.replace(/(\.\/|\.js)/g, '')] = files(key).default || files(key)
})
//#endregion

// 判断环境 vuex提示生产环境中不使用
import createPersistedState from 'vuex-persistedstate'
import createLogger from 'vuex/dist/logger'
const debug = process.env.NODE_ENV !== 'production'
const createPersisted = createPersistedState({
  storage: window.sessionStorage
})

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules,
  plugins: debug ? [createLogger(), createPersisted] : [createPersisted] // vuex持久化
})
