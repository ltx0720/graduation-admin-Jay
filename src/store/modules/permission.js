import { constantRoutes } from '@/router'
import {studenMenu, teacherMenu, managerMenu } from '@/router/index'

const state = {
    token: localStorage.getItem('token')||'',
    routes: [],
    addRoutes:[]
}

const mutations = {
    SET_ROUTES: (state, routes) => {
        state.addRoutes = routes
        state.routes = constantRoutes.concat(routes)
    },
    UPDATE_AES: (state, str) => {
        state.aes = str;
    }
}

const actions = {
    generateRoutes({ commit }, roles) {
        return new Promise(resolve => {
            commit('SET_ROUTES', managerMenu)
            resolve(managerMenu)
        })
    },

    update({ commit }, str) {
        return new Promise(resolve => {
                   commit('UPDATE_AES', str)

            resolve()
        })
    },

    getToken(){
        return state.token
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
