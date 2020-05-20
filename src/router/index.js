import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from '@/layout'

export const studenMenu = [
  {
    path: '/home',
    component: () => import('@/views/student/home')
  },
  // student 首页
  {
    path: '/student/home',
    component: Layout,
    title: "首页",
    // meta: { title: '', icon: '' },
    children: [{
      path: '',
      component: () => import('@/views/student/home'),
      meta: { title: '首页', icon: 'dashboard' }
    }]
  },

  // 选择导师
  {
    path: '/student/chose_teacher',
    component: Layout,
    meta: { title: '', icon: '' },
    children: [
      {
        path: '',
        component: () => import('@/views/student/chose-teacher'),
        meta: { title: '选择导师', icon: 'form' }
      }
    ]
  },

  // 毕设流程
  {
    path: '/student/nested',
    component: Layout,
    meta: {
      title: '流程管理',
      icon: 'nested'
    },
    children: [
      {
        path: 'topic',
        component: () => import('@/views/student/topic'), // Parent router-view
        meta: { title: '选择课题' }
      },
      {
        path: 'bs-start',
        component: () => import('@/views/student/start'), // Parent router-view
        meta: { title: '开题报告' }
      },
      {
        path: 'bs-upload',
        component: () => import('@/views/student/upload'),
        meta: { title: '毕设提交' }
      }
    ]
  },

   // 毕设流程
  //  {
  //   path: '/student/task',
  //   component: Layout,
  //   meta: {
  //     title: '实时任务',
  //     icon: 'nested'
  //   },
  //   children: [
  //     {
  //       path: 'start',
  //       component: () => import('@/views/student/start'), // Parent router-view
  //       meta: { title: '审批管理' }
  //     }
  //   ]
  // },
]

export const teacherMenu = [
  // teacher
  // 首页
  {
    path: '/teacher/home',
    component: Layout,
    // redirect: '/example/table',
    children: [
      {
        path: '',
        component: () => import('@/views/teacher/home'),
        meta: { title: '首页', icon: 'form' }
      }
    ]
  },

  {
    path: '/teacher/student',
    component: Layout,
    // redirect: '/example/table',
    children: [
      {
        path: '',
        component: () => import('@/views/teacher/student'),
        meta: { title: '学生信息', icon: 'table' }
      }
    ]
  },

  // 发布消息通知
  {
    path: '/teacher/publish',
    component: Layout,
    // redirect: '/example/table',
    children: [
      {
        path: '',
        component: () => import('@/views/teacher/publish'),
        meta: { title: '发布', icon: 'guide' }
      }
    ]
  },

  // 导师审批
  {
    path: '/teacher/approve',
    component: Layout,
    // redirect: '/example/table',
    children: [
      {
        path: '',
        component: () => import('@/views/teacher/approve'),
        meta: { title: '审批', icon: 'lock' }
      }
    ]
  }

]

export const managerMenu = [
  
  // 首页
  {
    path: '/manager/home',
    component: Layout,
    // redirect: '/example/table',
    children: [
      {
        path: '',
        component: () => import('@/views/manager/home'),
        meta: { title: '首页', icon: 'form' }
      }
    ]
  },

  // 审批
  {
    path: '/manager/approve',
    component: Layout,
    // redirect: '/example/table',
    children: [
      {
        path: '',
        component: () => import('@/views/manager/approve'),
        meta: { title: '审批', icon: 'form' }
      }
    ]
  },

   // 菜单管理
   {
    path: '/manager/menu',
    component: Layout,
    // redirect: '/example/table',
    children: [
      {
        path: '',
        component: () => import('@/views/manager/menu'),
        meta: { title: '菜单管理', icon: 'form' }
      }
    ]
  },

  {
    path: '/manager/file',
    component: Layout,
    // redirect: '/example/table',
    children: [
      {
        path: '',
        component: () => import('@/views/common/filedownload'),
        meta: { title: '文件下载', icon: 'form' }
      }
    ]
  }

]

export const constantRoutes = [

  {
    path: '/login',
    component: () => import('@/views/common/login')
  },



  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  // scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

export function resetRouter(routes) {
  constantRoutes = routes;
}

export function updateRouter() {
  // alert("updateRouter")
  // router.addRoutes(test);
}

export default router
