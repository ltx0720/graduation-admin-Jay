import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from '@/layout'

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/common/login')
  },

   // test
   {
    path: '/test',
    component: Layout,
    meta: {
      title: 'test',
      icon: 'nested'
    },
    children: [
      {
        path: 'richtext',
        component: () => import('@/views/common/editor/richtext'), // Parent router-view
        meta: { title: '富文本' }
      },
      {
        path: 'markdown',
        component: () => import('@/views/common/editor/markdown'), // Parent router-view
        name: 'Bs-start',
        meta: { title: 'md' }
      },
      {
        path: 'file',
        component: () => import('@/views/common/filedownload'), // Parent router-view
        name: '文件下载',
        meta: { title: 'file' }
      }
    ]
  },

  // student 首页
  {
    path: '/student/home',
    component: Layout,
    // redirect: '/dashboard',
    children: [{
      path: '',
      name: 'Home',
      component: () => import('@/views/student/home'),
      meta: { title: '首页', icon: 'dashboard' }
    }]
  },

  // 选择导师
  {
    path: '/student/chose_teacher',
    component: Layout,
    // redirect: '/example/table',
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
        name: 'Bs-start',
        meta: { title: '开题报告' }
      },
      {
        path: 'bs_upload',
        name: 'Bs_upload',
        component: () => import('@/views/student/upload'),
        meta: { title: '毕设提交' }
      }
    ]
  },

  // {
  //   path: '/gather',
  //   component: Layout,
    
  //   children: [
  //     {
  //       path: 'index',
  //       name: 'Gather',
  //       component: () => import('@/views/form/index'),
  //       meta: { title: '信息统计', icon: 'form' }
  //     }
  //   ]
  // },
  // 实时任务
  {
    path: '/student/task',
    component: Layout,
    // redirect: '/nested/menu1',
    meta: {
      title: '实时任务',
      icon: 'nested'
    },
    children: [
      {
        path: 'bs-start',
        component: () => import('@/views/student/start'), // Parent router-view
        name: 'Bs-start',
        meta: { title: '开题报告' }
      }
    ]
  },

  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
        meta: { title: 'External Link', icon: 'link' }
      }
    ]
  },


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

  // 发布消息
  {
    path: '/teacher/publish',
    component: Layout,
    // redirect: '/example/table',
    children: [
      {
        path: '',
        component: () => import('@/views/common/publish'),
        meta: { title: '发布', icon: 'form' }
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
        meta: { title: '审批', icon: 'form' }
      }
    ]
  },


  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}
export const testdata = {"name": "123"}
export default router
