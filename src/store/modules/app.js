import { deepCopy } from '../../utils/global'

function removeMark(marks, url) {
  for (let k in marks) {
    if (marks.hasOwnProperty(k) && marks[k] === url) marks.splice(k, 1)
  }
  return marks
}

const state = {
  requesting: [],
  executing: [],
  paging: { mark: '', status: false }
}

const mutations = {
  START_REQUESTING: (state, url) => {
    state.requesting.push(url)
  },
  DONE_REQUESTING: (state, url) => {
    if (url) {
      let marks = deepCopy(state.requesting)
      if (marks.length <= 1) state.requesting = []
      else state.requesting = removeMark(marks, url)
    } else {
      state.requesting = []
    }
  },
  START_EXECUTING: (state, url) => {
    state.executing.push(url)
  },
  DONE_EXECUTING: (state, url) => {
    if (url) {
      let marks = deepCopy(state.executing)
      if (marks.length <= 1) state.executing = []
      else state.executing = removeMark(marks, url)
    } else {
      state.executing = []
    }
  },
  START_PAGING: (state, mark) => {
    state.paging.mark = mark
    state.paging.status = true
  },
  END_PAGING: (state) => {
    state.paging.mark = ''
    state.paging.status = false
  }
}

const actions = {
  startRequesting({ commit }, url) {
    commit('START_REQUESTING', url)
  },
  doneRequesting({ commit }, url) {
    commit('DONE_REQUESTING', url)
  },
  startExecuting({ commit }, url) {
    commit('START_EXECUTING', url)
  },
  doneExecuting({ commit }, url) {
    commit('DONE_EXECUTING', url)
  },
  startPaging({ commit }, mark) {
    commit('START_PAGING', mark)
  },
  endPaging({ commit }) {
    commit('END_PAGING')
  }
}

const getters = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
