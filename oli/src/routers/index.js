import Vue from 'vue'
import Router from 'vue-router'
const Catalog = () => import('@/views/Movie/Catalog')
const Detailed = () => import('@/views/Movie/Detailed')
const Movie = () => import('@/views/Movie')
const Cinema = () => import('@/views/Cinema')
const Gasoline = () => import('@/views/Gasoline')
const Mine = () => import('@/views/Mine')
const Brand = () => import('@/views/Mine/Brand')
const Gift = () => import('@/views/Mine/Gift')
const Cooperation = () => import('@/views/Mine/Cooperation')
const Help = () => import('@/views/Mine/Help')
const Service = () => import('@/views/Mine/Service')
const Oline = () => import('@/views/Gasoline/Oline')
const Moreoli = () => import('@/views/Gasoline/Moreoli')
const Charging = () => import('@/views/Gasoline/Charging')
const Authent = () => import('@/views/Gasoline/Authent')
const Make = () => import('@/views/Gasoline/Make')
const Closing = () => import('@/views/Gasoline/Closing')
const Login = () => import('@/views/Mine/Login')
const Scanning = () => import('@/components/Scanning')
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
      path : '/scanning',
      name:'scanning',
      component : Scanning
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
      path : '/moreoli',
      name:'moreoli',
      component : Moreoli
    },
    {
      path : '/charging',
      name:'charging',
      component : Charging
    },
    {
      path : '/authent',
      name:'authent',
      component : Authent
    },
    {
      path : '/make',
      name:'make',
      component : Make
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
      path : '/mine/brand',
      title:'车牌支付',
      name:'brand',
      component : Brand
    },
    {
      path : '/mine/gift',
      name:'gift',
      component : Gift
    },
    {
      path : '/mine/cooperation',
      name:'cooperation',
      component : Cooperation
    },
    {
      path : '/mine/help',
      name:'help',
      component : Help
    },
    {
      path : '/mine/service',
      name:'service',
      component : Service
    },
    {
      path : '/login',
      name:'login',
      component : Login
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
    },
    {path:"/404",component:()=>import("@/components/Notfound")},
      {path:"*",redirect:"/404"}
  ]
})
