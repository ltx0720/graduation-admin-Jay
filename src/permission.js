import router from './router'
import store from './store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({ showSpinner: false })

const whiteList = ['/login']

router.beforeEach(async (to, from, next) => {

  NProgress.start()

  const token = JSON.parse(sessionStorage.getItem('token'))

  if (token && token != '') {
    next()
    if (to.path === '/login') {
      next()
    } else {
      const hasRoles = store.getters.roles
      if (hasRoles) {
        next()
      } else {
        const roles = sessionStorage.getItem('roles')
        const accessRoutes = await store.dispatch('permission/generateRoutes')
        const res = await store.dispatch('authorization/setRoles', roles)
        router.addRoutes(accessRoutes)
        // alert("add finish")
        next({ ...to, replace: true })
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})
