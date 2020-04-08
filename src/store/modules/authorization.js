import { login, logout, getInfo } from '@/api/authorization'
import {studenMenu, updateRouter} from '@/router/index'
import router from '@/router/index'
import store from '@/store'
const state = {
    token: '',
    role: '',
    // routers: router
}

const mutations = {
    SET_TOKEN: (state, token) => {
        state.token = token
    }
}

const actions = {
    login({ commit }, userInfo) {
        const { username, password } = userInfo
        return new Promise((resolve, reject) => {
            login({ username: username.trim(), password: password }).then(response => {
                commit("SET_TOKEN", response.token)
                // 添加相应的权限路由
                store.dispatch('permission/generateRoutes', studenMenu)

                // console.log(this.$router)
                // this.$router.options.routes  = router
                router.addRoutes(studenMenu)
                console.log(router)
                // this.$router.options.routes = router;
                // alert("add finish")
                resolve()
            }).catch(error => {
                reject(error)
            })
        })
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
  }
  
  
