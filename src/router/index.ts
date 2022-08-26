import { createRouter, createWebHistory } from 'vue-router'

//Routes
const routes = [
  {
    path: '/',
    meta: { title: 'Home' },
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/about',
    meta: { title: 'About' },
    component: () => import('../views/About.vue'),
  },
  {
    path: '/design-system',
    meta: { title: 'About' },
    component: () => import('../views/design-system.vue'),
  },
  {
    path: '/:page',
    component: () => import('../views/NotFound.vue'),
  },
]

export const Router = createRouter({
  scrollBehavior: () => ({ left: 0, top: 0 }),
  history: createWebHistory(),
  routes,
})
