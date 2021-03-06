import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
Vue.use(VueRouter)

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default function ({ store }) {
  const Router = new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes,

    // Leave these as they are and change in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE
  })


 Router.beforeEach(async (to, from, next) => {
    let user = await store.getters.getUser;
    if (to.matched.some(route => route.meta.authRequired)) {
      if(user.token != ''){
        next()
      } else{
        if(sessionStorage.getItem('user')){
          const data = JSON.parse( sessionStorage.getItem('user') );
          await store.dispatch('STATE_CHANGED', data);
          next()
        }else{
          next('/')
        }
        
      }
    }
    else{
      next()
    }
  })


  return Router
}






