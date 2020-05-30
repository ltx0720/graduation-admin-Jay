import { constantRoutes } from '@/router'
import { getMenuList } from "@/api/common"
import Layout from '@/layout'
import Vue from 'vue'
import Router from 'vue-router'
import { studenMenu, managerMenu } from '../../router'

Vue.use(Router)

const student_home = () => import('@/views/student/home')
const student_chose_teacher = () => import('@/views/student/chose-teacher')
const student_start = () => import('@/views/student/start')
const student_topic = () => import('@/views/student/topic')
const student_upload = () => import('@/views/student/upload')

const manager_home = () => import('@/views/manager/home')
const manager_approve = () => import('@/views/manager/approve')
const manager_menu = () => import('@/views/manager/menu')
const manager_file = () => import('@/views/common/fileshow')
const manager_publish = () => import('@/views/manager/publish')
const manager_teacher = () => import('@/views/manager/push-teacher')

const teacher_home = () => import('@/views/teacher/home')
const teacher_approve = () => import('@/views/teacher/approve')
const teacher_publish = () => import('@/views/teacher/publish')
const teacher_student = () => import('@/views/teacher/student')

var map = new Map();
map.set("student_home", student_home)
map.set("student_chose_teacher", student_chose_teacher)
map.set("student_start", student_start)
map.set("student_topic", student_topic)
map.set("student_upload", student_upload)

map.set("manager_home", manager_home)
map.set("manager_approve", manager_approve)
map.set("manager_menu", manager_menu)
map.set("manager_file", manager_file)
map.set("manager_publish", manager_publish)
map.set("manager_teacher", manager_teacher)

map.set("teacher_home", teacher_home)
map.set("teacher_approve", teacher_approve)
map.set("teacher_publish", teacher_publish)
map.set("teacher_student", teacher_student)


const state = {
    routes: [],
    addRoutes: []
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
    generateRoutes({ commit }) {
        return new Promise(resolve => {
            getMenuList().then(response => {
                var json = response.data;
                // var json = m;
                // console.log(json)
                json.filter(p => {
                    p.component = Layout;
                    var son = p.children;
                    son.filter(s => {
                        s.component = map.get(s.component);
                    });
                });

                // alert(json[0].path)

                if (json[0].path.match('student')) {
                    json.push({ path: '/home', redirect: '/student/home' })
                } else if (json[0].path.match('teacher')) {
                    json.push({ path: '/home', redirect: '/teacher/home' })
                } else if (json[0].path.match('manager')) {
                    json.push({ path: '/home', redirect: '/manager/home' })
                }
                console.log(json)
                commit('SET_ROUTES', json)
                resolve(json)
            })
        })
    },

    // },

    update({ commit }, str) {
        return new Promise(resolve => {
            commit('UPDATE_AES', str)
            resolve()
        })
    },

    getToken() {
        return state.token
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
