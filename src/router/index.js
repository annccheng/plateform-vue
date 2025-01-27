
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home/index.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login/index.vue')
    },
    {
      path: '/post/:id',
      name: 'post',
      component: () => import('@/views/Post/index.vue')
    },
    {
      path: '/all',
      name: 'all',
      component: () => import('@/views/All/index.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: () => import('@/views/NotFound/index.vue'),
    },
  ]
})

export default router