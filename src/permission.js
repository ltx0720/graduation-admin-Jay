import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['/login', '/auth-redirect'] // no redirect whitelist

router.beforeEach(async (to, from, next) => {

  NProgress.start()

  if (to.path === '/login') {
    next()
    NProgress.done()
  } else {

    const hasRoles = store.getters.roles
    if (hasRoles != '') {
      next()
    } else {
      try {

        let roles = '1'
        const accessRoutes = await store.dispatch('permission/generateRoutes', roles)
        await store.dispatch('user/setInfo', roles)
        router.addRoutes(accessRoutes)

        next({ ...to, replace: true })
      } catch (error) {
        await store.dispatch('user/resetToken')
        Message.error(error || 'Has Error')
        next(`/login?redirect=${to.path}`)
        NProgress.done()
      }
    }
  }
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})