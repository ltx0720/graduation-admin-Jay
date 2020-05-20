// import { login, logout, getInfo } from '@/api/user'
// import { getToken, setToken, removeToken } from '@/utils/auth'
import router from '@/router'

const state = {
  // token: getToken(),
  // name: '',
  // avatar: '',
  // introduction: '',
  roles: ''
}

const mutations = {
  // SET_TOKEN: (state, token) => {
  //   state.token = token
  // },
  // SET_INTRODUCTION: (state, introduction) => {
  //   state.introduction = introduction
  // },
  // SET_NAME: (state, name) => {
  //   state.name = name
  // },
  // SET_AVATAR: (state, avatar) => {
  //   state.avatar = avatar
  // },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  }
}

const actions = {
  // user login

  setInfo({ commit, state }) {
    commit('SET_ROLES', '1')
    // commit('SET_NAME', name)
    // commit('SET_AVATAR', avatar)
    // commit('SET_INTRODUCTION', introduction)
    // resolve(data)
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
