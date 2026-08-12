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
    // 1. If refreshing or directly loading the initial page with a hash, ignore hash and scroll to top
    if (!from.name && to.hash) {
      return { top: 0 }
    }

    // 2. If navigating between sections while already on the page, smooth scroll to the element
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }

    // 3. Default to saved position or top
    return savedPosition || { top: 0 }
  }
})

// Optional: Automatically strip the #hash from the address bar on initial page load
router.isReady().then(() => {
  if (window.location.hash) {
    history.replaceState(null, '', window.location.pathname)
  }
})

export default router