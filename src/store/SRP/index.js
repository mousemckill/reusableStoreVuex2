const state = {
  data: 'SRP'
}

const mutations = {
  setData(state, value) {
    state.data = value
  }
}

const actions = {
  update({ commit }, filter) {
    commit('setData', 'SRP ' + filter)
  }
}

export const SRP = {
  namespaced: true,
  state,
  mutations,
  actions,
}
