const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.authorization.token,
  // routers: state => state.authorization.routers,
  // name: state => state.user.name
  roles: state => state.user.roles,
  permission_routes: state => state.permission.routes,
  aes: state => state.permission.aes,
}
export default getters
