import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    // {
    //   path: '/loja',
    //   name: 'loja',
    //   component: () => import('../views/LojaView.vue'),
    // },
    // {
    //   path: '/contato',
    //   name: 'contato',
    //   component: () => import('../views/ContatoView.vue'),
    // },
    {
      path: '/biblioteca',
      name: 'biblioteca',
      component: () => import('../views/BibliotecaView.vue'),
    }
  ],
})

export default router
