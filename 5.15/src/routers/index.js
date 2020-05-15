import Vue from 'vue'
import Router from 'vue-router'
const Catalog = () => import('@/views/Movie/Catalog')
const Detailed = () => import('@/views/Movie/Detailed')
const Movie = () => import('@/views/Movie')
const Cinema = () => import('@/views/Cinema')
const Gasoline = () => import('@/views/Gasoline')
const Mine = () => import('@/views/Mine')
const Oline = () => import('@/views/Gasoline/Oline')
const Closing = () => import('@/views/Gasoline/Closing')
Vue.use(Router)

export default new Router({
  /* mode: 'history', */
  /*  base: process.env.BASE_URL,  */
  routes: [
    {
      path : '/movie/catalog',
      name:'catalog',
      component : Catalog
    },
    {
      path : '/movie/detailed',
      name:'detailed',
      component : Detailed
    },
    {
      path : '/movie',
      name:'movie',
      component : Movie
    },
    {
      path : '/cinema',
      name:'cinema',
      component : Cinema
    },
    {
      path : '/gasoline',
      name:'gasoline',
      component : Gasoline
    },
    {
      path : '/closing',
      name:'closing',
      component : Closing
    },
    {
      path : '/mine',
      name:'mine',
      component : Mine
    },
    {
      path : '/oline',
      name:'oline',
      component : Oline,
      children : [
        {
            path : 'wantoli',
            component : () => import('@/components/Wantoli')
        },
        {
          path : 'riders',
          component : () => import('@/components/Riders')
        },
        {
          path : 'order',
          component : () => import('@/components/Order')
        },
        {
          path : '',
          redirect : 'wantoli'
        }
      ]
    },
    {
      path : '/',
      redirect : '/gasoline'
    }
  ]
})
