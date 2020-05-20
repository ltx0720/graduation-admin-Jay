import { login, logout, getInfo } from '@/api/authorization'
import {studenMenu, teacherMenu, updateRouter, constantRouconstantRoutes } from '@/router/index'
import router from '@/router/index'
import store from '@/store'
const state = {
    token: '',
    role: '',
}

const mutations = {
    SET_TOKEN: (state, token) => {
        state.token = token
    }
}

const actions = {
    login({ commit }, userInfo) {
        // const { username, password } = userInfo
        // return new Promise((resolve, reject) => {
            // 此login-> /api/authorization
            // login({ username: username.trim(), password: password }).then(response => {
                // commit("SET_TOKEN", response.token)

                // let role = '1';
                // store.dispatch('permission/generateRoutes', '1')
                // router.addRoutes(studenMenu)
                // sessionStorage.setItem("store", JSON.stringify(store.getters.permission_routes));
                // resolve()
            // }).catch(error => {
                // reject(error)
            // })
        // })
    },

    setaaa({commit}, data){
        // alert(data)
        commit("SET_TOKEN", data)
    },

    getToken(){
        return state.token;
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
  }
  
  
