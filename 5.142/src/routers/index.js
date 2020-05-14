import Vue from 'vue'
import Router from 'vue-router'
import movieRouter from './movie'
import cinemaRouter from './cinema'
import mineRouter from './mine'
import adminRouter from './admin'
import gasolineRouter from './gasoline'
Vue.use(Router)

export default new Router({
  /* mode: 'history', */
  /*  base: process.env.BASE_URL,  */
  routes: [
    {path : '/movie/catalog',
    name:'catalog',
    component : () => import('@/views/Movie/Catalog')},
    {path : '/movie/detailed',
    name:'detailed',
    component : () => import('@/views/Movie/Detailed')},
    movieRouter,
    cinemaRouter,
    mineRouter,
    adminRouter,
    gasolineRouter,
    {
      path : '/',
      redirect : '/gasoline'
    }
  ]
})
