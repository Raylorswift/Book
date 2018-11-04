import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/pages/Home'
import Category from '@/pages/Category'
import Article from '@/pages/Article'
import User from '@/pages/User'

Vue.use(Router)
// 乐高	7 scrath

export default new Router({
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/category',
      component: Category
    },{
      path: '/article',
      component: Article
    },{
      path: '/user',
      component: User
    }]
})
  








