import { createRouter, createWebHashHistory } from 'vue-router'
import { ROUTES } from '@/constant/routes'
import Home from '@/views/Home.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { 
      path: ROUTES.HOME.path, 
      name: ROUTES.HOME.name, 
      component: Home,
      meta: { title: 'Mark Gil Sendin | Portfolio' }
    },
    { 
      path: ROUTES.ALL_PROJECTS.path, 
      name: ROUTES.ALL_PROJECTS.name, 
      component: () => import('@/views/AllProjects.vue'),
      meta: { title: 'Projects | Mark Gil Sendin' }
    },
    { 
      path: ROUTES.CASE_STUDY.path, 
      name: ROUTES.CASE_STUDY.routeName, 
      component: () => import('@/views/ProjectCaseStudy.vue'),
      meta: { title: 'Case Study | Mark Gil Sendin' }
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

// Update document title dynamically after every route change
router.afterEach((to) => {
  document.title = to.meta.title || 'Mark Gil Sendin | Portfolio'
})

export default router