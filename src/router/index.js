import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import JK from "@/components/movie"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    }, 
    {
      path: '/jk',
      name: 'HelloWorld',
      component: JK
    },
    {
      path: '*',
      name: 'HelloWorld',
      component: JK
    },
  ]
})
