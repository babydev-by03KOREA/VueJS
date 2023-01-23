import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/formElement',
    name: 'formElement',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/component/FormElement.vue')
  },
  {
    path: '/listRendering',
    name: 'listRendering',
    component: () => import('../views/component/ListRendering.vue')
  },
  {
    path: '/if-show',
    name: 'if-show',
    component: () => import('../views/component/ifShowDirective.vue')
  },
  {
    path: '/click',
    name: 'click',
    component: () => import('../views/component/OnClick.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
