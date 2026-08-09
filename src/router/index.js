import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Projects from '@/views/Projects.vue'
import ProjectCaseStudy from '@/views/ProjectCaseStudy.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/projects', name: 'Projects', component: Projects },
  { path: '/projects/:id', name: 'CaseStudy', component: ProjectCaseStudy, props: true },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  // Always scroll to top when navigating to a new page
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router