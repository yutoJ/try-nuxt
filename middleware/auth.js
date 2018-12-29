import Cookies from 'universal-cookie'

export default ({ req, route, redirect }) => {
  console.log(route.path)
  if (['/'].includes(route.path)) {
    return
  }
  const cookies = req? new Cookies(req.headers.cookie) : new Cookies()
  const credential = cookies.get('credential')
  console.log(credential)
  if (credential === 'true' && route.path === '/login') {
    console.log('logined')
    return redirect('/')
  }
  if (credential === 'false' && route.path !== '/login') {
    console.log('not login')
    return redirect('/login')
  }
}
