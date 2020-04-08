import { constantRoutes } from '@/router'

const state = {
    routes: [],
}

const mutations = {
    SET_ROUTES: (state, routers) => {
        state.routes = constantRoutes.concat(routers)
    }
}

const actions = {
    generateRoutes({ commit }, routers) {
        return new Promise(resolve => {
            commit('SET_ROUTES', routers)
            resolve()
        })
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
