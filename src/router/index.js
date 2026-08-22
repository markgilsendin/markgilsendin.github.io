import { createRouter, createWebHashHistory } from 'vue-router'
import { ROUTES } from '@/constant/routes'
import Home from '@/views/Home.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { 
      path: ROUTES.HOME.path, 
      name: ROUTES.HOME.name, 
      component: Home 
    },
    { 
      path: ROUTES.ALL_PROJECTS.path, 
      name: ROUTES.ALL_PROJECTS.name, 
      component: () => import('@/views/AllProjects.vue') 
    },
    { 
      path: ROUTES.CASE_STUDY.path, 
      name: ROUTES.CASE_STUDY.name, 
      component: () => import('@/views/ProjectCaseStudy.vue') 
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (!from.name && to.hash) {
      return { top: 0 }
    }
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    return savedPosition || { top: 0 }
  }
})

export default router