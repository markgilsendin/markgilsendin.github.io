import { useRoute, useRouter } from 'vue-router'
import { ROUTES } from '@/constant/routes'

export function useScrollTo() {
  const route = useRoute()
  const router = useRouter()

  const getSectionId = (href) => (href ? href.replace('/#', '').replace('#', '') : '')

  const scrollToSection = async (e, href) => {
    if (e) e.preventDefault()
    const targetId = getSectionId(href)

    const isHome = route.name === ROUTES.HOME.name || route.path === '/' || route.path === ''

    if (isHome) {
      const el = document.getElementById(targetId)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        // Update URL hash without re-triggering page scroll
        history.pushState(null, '', `/#/#${targetId}`)
      }
    } else {
      await router.push({ name: ROUTES.HOME.name, hash: `#${targetId}` })
      setTimeout(() => {
        const el = document.getElementById(targetId)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }

  return {
    getSectionId,
    scrollToSection,
  }
}