import Vue from 'vue';
import Router from 'vue-router';
import Elproblema from './views/Elproblema.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '',
      name: 'Elproblema',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Elproblema.vue'),
      
    },
    {
      path: '/comprar',
      name: 'Comprar',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Comprar.vue'),
    },
    {
      path: '/comer',
      name: 'Comer',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Comer.vue'),
    },
    {
      path: '/desechar',
      name: 'Desechar',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Desechar.vue'),
    },
    {
      path: '/aportes',
      name: 'Aportes',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Aportes.vue'),
    },
  ],
});
