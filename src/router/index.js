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
        active: false,
        meta: { title: '选择课题' },
        component: () => import('@/views/student/topic'), // Parent router-view
      },
      {
        path: 'bs-start',
        active: false,
        meta: { title: '开题报告' },
        component: () => import('@/views/student/start'), // Parent router-view
      },
      {
        path: 'upload',
        active: false,
        meta: { title: '毕设提交' },
        component: () => import('@/views/student/upload'),
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

  {
    path: '/home',
    redirect: '/manager/home'
  },

  {
    path: '/manager/home',
    component: Layout,
    meta: { title: '首页', icon: 'form' },
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
    meta: { title: '审批', icon: 'form' },
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
      path: '/manager/publish',
      component: Layout,
      // redirect: '/example/table',
      children: [
        {
          path: '',
          component: () => import('@/views/manager/publish'),
          meta: { title: '菜单管理', icon: 'form' }
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
        component: () => import('@/views/common/fileshow'),
        meta: { title: '查看文件', icon: 'form' }
      }
    ]
  },
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
