import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import VueResource from 'vue-resource'
import Cart from '@/components/Cart'
import Market from '@/components/Market'
import Mine from '@/components/Mine'

Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/home',
      //name: 'Home',
      component: Home
    },{
      path: '/cart', //???router-link to="/cart"
      name: 'Cart',
      component: Cart  //import Cart from '@/components/cart'
    },{
      path : '/market',
      name : 'Market',
      component : Market
    },{
      path : "/mine",
      name : 'Mine',
      component : Mine
    }
  ]
})
