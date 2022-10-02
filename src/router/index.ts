import { createRouter, createWebHistory } from 'vue-router'

//Routes
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    meta: { title: 'Login' },
    component: () => import('../views/login.vue'),
  },
  {
    path: '/cadastro',
    meta: { title: 'Cadastro' },
    component: () => import('../views/cadastro.vue'),
  },
  {
    path: '/scanner',
    meta: { title: 'Scanner' },
    component: () => import('../views/scanner_entrada.vue'),
  },
  {
    path: '/deshbord',
    meta: { title: 'Deshbord' },
    component: () => import('../views/deshbord/home.vue'),
  },
  {
    path: '/:page',
    component: NotFound,
  },
]

export const Router = createRouter({
  scrollBehavior: () => ({ left: 0, top: 0 }),
  history: createWebHistory(),
  routes,
})
