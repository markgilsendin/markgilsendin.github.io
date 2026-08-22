<template>
  <header class="w-full bg-canvas/80 backdrop-blur-md border-b border-main/10 sticky top-0 z-50 transition-all duration-300">
    <div class="max-w-7xl mx-auto px-10 sm:px-16 lg:px-24 h-18 flex items-center justify-between">
      
      <!-- Brand Logo -->
      <router-link :to="ROUTES.HOME.path" class="flex items-center gap-3 group shrink-0">
        <div class="relative">
          <div class="w-12 h-12 bg-white rounded-full overflow-hidden border-2 border-primary/80 group-hover:border-primary transition-all duration-300 group-hover:shadow-primary/20">
            <img 
              src="/profile.png" 
              alt="Mark Gil Sendin" 
              class="w-full h-full object-cover object-center"
            />
          </div>
          <span 
            class="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-canvas rounded-full" 
            title="Open to opportunities"
          ></span>
        </div>

        <span class="font-bold text-base tracking-tight text-main/80 hover:text-main">
          Mark Gil Sendin
        </span>
      </router-link>

      <!-- Desktop Navigation Links -->
      <nav class="hidden lg:flex items-center gap-8">
        <a 
          v-for="link in navLinks" 
          :key="link.name" 
          :href="link.href"
          @click="scrollToSection($event, link.href)"
          class="relative text-sm font-semibold tracking-wide py-1 text-main/70 hover:text-main transition-colors duration-200 group"
          :class="activeSection === getSectionId(link.href) ? 'text-primary' : 'text-main/70 hover:text-main'"
        >
          {{ link.name }}
          <!-- Animated Underline -->
          <span 
            class="absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 rounded-full"
            :class="activeSection === getSectionId(link.href) ? 'w-full' : 'w-0 group-hover:w-full'"
          ></span>
        </a>
      </nav>

      <!-- Desktop Actions -->
      <div class="hidden lg:flex items-center gap-4">
        <ThemeToggle />
        
        <BaseLink 
          :href="ROUTES.SECTIONS.CONTACT.hash" 
          variant="primary" 
          size="sm"
          class="group shadow-sm hover:shadow-primary/25 transition-shadow"
          @click="scrollToSection($event, ROUTES.SECTIONS.CONTACT.hash)"
        >
          <span>Let's Talk</span>
          <template #icon-right>
            <Icon 
              icon="lucide:arrow-right" 
              class="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" 
            />
          </template>
        </BaseLink>
      </div>

      <!-- Mobile Hamburger Toggle -->
      <div class="flex items-center gap-2 md:gap-3 lg:hidden">
        <ThemeToggle />
        <BaseButton 
          variant="ghost" 
          size="sm"
          class="p-2 text-main"
          aria-label="Toggle Navigation Menu"
          @click="isMobileMenuOpen = !isMobileMenuOpen" 
        >
          <svg v-if="!isMobileMenuOpen" class="w-6 h-6 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="w-6 h-6 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </BaseButton>
      </div>
    </div>
  </header>

  <!-- Mobile Navigation Drawer -->
  <Transition
    enter-active-class="transition duration-200 ease-out"
    enter-from-class="opacity-0 -translate-y-2"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition duration-150 ease-in"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 -translate-y-2"
  >
    <div 
      v-if="isMobileMenuOpen" 
      class="lg:hidden fixed left-0 right-0 top-18 z-40 px-10 sm:px-16 pb-6 pt-4 space-y-4 border-b border-main/10 bg-canvas/95 backdrop-blur-xl shadow-xl"
    >
      <nav class="flex flex-col gap-1">
        <a 
          v-for="link in navLinks" 
          :key="link.name" 
          :href="link.href" 
          @click="scrollToSection($event, link.href); isMobileMenuOpen = false"
          class="text-sm font-semibold uppercase tracking-wider py-3 px-3 rounded-xl transition-all duration-200 flex items-center justify-between"
          :class="activeSection === getSectionId(link.href) ? 'text-primary bg-primary/10' : 'text-main/80 hover:text-main hover:bg-main/5'"
        >
          <span>{{ link.name }}</span>
          <span v-if="activeSection === getSectionId(link.href)" class="w-2 h-2 rounded-full bg-primary"></span>
        </a>
      </nav>

      <BaseLink 
        :href="ROUTES.SECTIONS.CONTACT.hash"
        variant="primary" 
        size="md"
        class="w-full group justify-center shadow-md"
        @click="scrollToSection($event, ROUTES.SECTIONS.CONTACT.hash); isMobileMenuOpen = false"
      >
        <span>Let's Talk</span>
        <template #icon-right>
          <Icon 
            icon="lucide:arrow-right" 
            class="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" 
          />
        </template>
      </BaseLink>
    </div>
  </Transition>
</template>

<script setup>
  import { ref, onMounted, onUnmounted } from 'vue'
  import { useRoute } from 'vue-router'
  import { Icon } from '@iconify/vue'
  import { ROUTES } from '@/constant/routes'
  import { useScrollTo } from '@/composable/useScrollTo' 
  import ThemeToggle from './ThemeToggle.vue'
  import BaseButton from '@/components/global/BaseButton.vue'
  import BaseLink from '@/components/global/BaseLink.vue'

  const route = useRoute()
  const { getSectionId, scrollToSection } = useScrollTo() 

  const isMobileMenuOpen = ref(false)
  const activeSection = ref('')

  const navLinks = [
    { name: 'About', href: ROUTES.SECTIONS.ABOUT.hash },
    { name: 'Projects', href: ROUTES.SECTIONS.PROJECTS.hash },
    { name: 'Experience', href: ROUTES.SECTIONS.EXPERIENCE.hash },
    { name: 'Skills', href: ROUTES.SECTIONS.SKILLS.hash },
  ]

  // Scrollspy Logic
  const handleScrollSpy = () => {
    if (route.path !== '/' && route.path !== '') {
      activeSection.value = ''
      return
    }

    const scrollPosition = window.scrollY
    const windowHeight = window.innerHeight
    const fullHeight = document.documentElement.scrollHeight

    if (scrollPosition < 200) {
      if (activeSection.value !== '') {
        activeSection.value = ''
        history.replaceState(null, '', '/#/')
      }
      return
    }

    if (Math.ceil(scrollPosition + windowHeight) >= fullHeight - 10) {
      if (activeSection.value !== 'contact') {
        activeSection.value = 'contact'
        history.replaceState(null, '', '/#/#contact')
      }
      return
    }

    const sections = ['about', 'projects', 'experience', 'skills', 'contact']
    const navOffset = 150

    for (const id of sections) {
      const el = document.getElementById(id)
      if (el) {
        const top = el.offsetTop - navOffset
        const height = el.offsetHeight

        if (scrollPosition >= top && scrollPosition < top + height) {
          if (activeSection.value !== id) {
            activeSection.value = id
            history.replaceState(null, '', `/#/#${id}`)
          }
          break
        }
      }
    }
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScrollSpy, { passive: true })
    handleScrollSpy()
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScrollSpy)
  })
</script>