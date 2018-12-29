export default ({ app }) => {
  app.router.beforeEach((to, from, next) => {
    console.log(`[router] move to '${to.fullPath}'`)
    next()
  })
}
