//引入vue和路由
import Vue from 'vue';
import Router from 'vue-router'
//引入页面
import Home from '../pages/home.vue';
import Account from '../pages/account.vue';
import Game from '../pages/game.vue';
import More from '../pages/more.vue';
import Recharge from '../pages/recharge.vue';
//Use路由
Vue.use(Router)
//配置路由
export default new Router({
    routes: [
        {
          path: '/',
          name:'Home',
          component: Home
        },{
          path: '/recharge',
          name:'Recharge',
          component: Recharge
        },{
          path: '/account',
          name:'Account',
          component: Account  
        },{
          path: '/game',
          name:'Game',
          component: Game
        },{
          path: '/more',
          name:'More',
          component: More
        }
    ]
})