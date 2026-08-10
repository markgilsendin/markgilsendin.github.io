import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/projects', name: 'projects', component: () => import('@/views/Projects.vue') },
    { path: '/projects/:id', name: 'case-study', component: () => import('@/views/ProjectCaseStudy.vue') }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    // Always scroll to top when changing routes
    return savedPosition || { top: 0 }
  }
})

export default router