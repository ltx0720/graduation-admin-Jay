import { login } from '@/api/authorization'
import { studenMenu, teacherMenu, updateRouter, constantRouconstantRoutes } from '@/router/index'
import router from '@/router'
import store from '@/store'

const state = {
  token: '',
  roles: '',
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
    sessionStorage.setItem('token', JSON.stringify(token))
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  }
}

const actions = {
  login({ commit }, userInfo) {
    const { username, password } = userInfo
    return new Promise((resolve, reject) => {
      login(userInfo).then(response => {
        commit("SET_TOKEN", response)
        resolve();
      })
    })

  },

  setRoles({ commit }, roles) {
    return new Promise(resolve => {
      commit("SET_ROLES", roles)
      resolve(roles);
    })
  },

  getToken() {
    return state.token;
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}


