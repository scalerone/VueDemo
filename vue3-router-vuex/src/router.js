import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Page1 from "./views/Page1.vue";
import Page2 from "./views/Page2.vue";
Vue.use(Router)

function func({ params, query }) {
  return {
    id: params.id,
    msg: params.msg,
    foo: query.foo
  };
}

export default new Router({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/page1/:foo',
      name: 'page1',
      props:true,
      component: Page1
    },
    {
      path: '/page2/:id/:msg',
      name: 'page2',
      component: Page2,
      props: func
    }



    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
