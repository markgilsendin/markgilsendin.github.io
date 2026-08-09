<template>
  <!-- <header 
    :class="[
      'w-full sticky top-0 z-50 transition-all duration-300',
      isScrolled 
        ? 'bg-canvas border-b-2 border-main/10' 
        : 'bg-canvas border-b border-main/10'
    ]"
  > -->
  <header class="w-full bg-canvas border-b border-main/10 sticky top-0 z-50 transition-all duration-300">
    <div class="max-w-7xl mx-auto px-6 sm:px-10 h-18
     flex items-center justify-between">
      <!-- Brand Logo -->
      <a href="#" class="font-bold text-base sm:text-lg tracking-tight text-main shrink-0">
        Mark Gil Sendin
      </a>

      <!-- Desktop Navigation Links -->
      <nav class="hidden lg:flex items-center gap-6 lg:gap-8">
        <a 
          v-for="link in navLinks" 
          :key="link.name" 
          :href="link.href" 
          class="text-sm font-medium text-main/60 hover:text-main transition-colors"
        >
          {{ link.name }}
        </a>
      </nav>

      <!-- Desktop Actions -->
      <div class="hidden lg:flex items-center gap-4">
        <ThemeToggle />
        <BaseLink 
          href="#contact" 
          variant="primary" 
          size="sm"
        >
          Let's Talk
        </BaseLink>
      </div>

      <!-- Mobile Hamburger Toggle -->
      <div class="flex items-center gap-2 md:gap-3 lg:hidden">
        <ThemeToggle />
        <BaseButton 
          variant="ghost" 
          size="sm"
          class="p-2"
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
      class="lg:hidden sticky top-16 z-40 px-4 sm:px-6 pb-6 pt-2 space-y-4 border-b border-main/10 bg-canvas/95 backdrop-blur-md"
    >
      <nav class="flex flex-col gap-2">
        <a 
          v-for="link in navLinks" 
          :key="link.name" 
          :href="link.href" 
          @click="isMobileMenuOpen = false"
          class="text-base font-medium text-main/80 hover:text-main py-2 px-3 rounded-lg hover:bg-main/5 transition-colors"
        >
          {{ link.name }}
        </a>
      </nav>
      <BaseLink 
        href="#contact" 
        variant="primary" 
        size="md"
        class="w-full"
        @click="isMobileMenuOpen = false"
      >
        Let's Talk
      </BaseLink>
    </div>
  </Transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import ThemeToggle from './ThemeToggle.vue'
import BaseButton from '@/components/global/BaseButton.vue'
import BaseLink from '@/components/global/BaseLink.vue'

const isMobileMenuOpen = ref(false)
// const isScrolled = ref(false)

// const handleScroll = () => {
//   isScrolled.value = window.scrollY > 20
// }

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Work', href: '#work' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
]
</script>