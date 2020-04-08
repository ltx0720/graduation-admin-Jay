const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.authorization.token,
  // routers: state => state.authorization.routers,
  // name: state => state.user.name
  permission_routes: state => state.permission.routes,
}
export default getters
