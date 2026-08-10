<template>
  <header class="w-full bg-canvas border-b border-main/10 sticky top-0 z-50 transition-all duration-300">
    <!-- Updated horizontal padding to match section containers (px-10 sm:px-16 lg:px-24) -->
    <div class="max-w-7xl mx-auto px-10 sm:px-16 lg:px-24 h-18 flex items-center justify-between">
      
      <!-- Brand Logo -->
      <router-link to="/" class="font-bold text-base sm:text-lg tracking-tight text-main shrink-0 hover:opacity-80 transition-opacity">
        Mark Gil Sendin
      </router-link>

      <!-- Desktop Navigation Links -->
      <nav class="hidden lg:flex items-center gap-6 lg:gap-8">
        <router-link 
          v-for="link in navLinks" 
          :key="link.name" 
          :to="link.href" 
          class="text-sm font-medium text-main/60 hover:text-main transition-colors"
        >
          {{ link.name }}
        </router-link>
      </nav>

      <!-- Desktop Actions -->
      <div class="hidden lg:flex items-center gap-4">
        <ThemeToggle />
        
        <!-- Animated CTA Button -->
        <BaseLink 
          href="/#contact" 
          variant="primary" 
          size="sm"
          class="group"
        >
          <span>Let's Talk</span>
          <template #icon-right>
            <Icon 
              icon="lucide:arrow-right" 
              class="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" 
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
      class="lg:hidden fixed left-0 right-0 top-[18] z-40 px-10 sm:px-16 pb-6 pt-4 space-y-4 border-b border-main/10 bg-canvas/95 backdrop-blur-md shadow-lg"
    >
      <nav class="flex flex-col gap-1">
        <router-link 
          v-for="link in navLinks" 
          :key="link.name" 
          :to="link.href" 
          @click="isMobileMenuOpen = false"
          class="text-base font-medium text-main/80 hover:text-main py-2.5 px-3 rounded-lg hover:bg-main/5 transition-colors"
        >
          {{ link.name }}
        </router-link>
      </nav>

      <BaseLink 
        href="/#contact" 
        variant="primary" 
        size="md"
        class="w-full group justify-center"
        @click="isMobileMenuOpen = false"
      >
        <span>Let's Talk</span>
        <template #icon-right>
          <Icon 
            icon="lucide:arrow-right" 
            class="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" 
          />
        </template>
      </BaseLink>
    </div>
  </Transition>
</template>

<script setup>
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import ThemeToggle from './ThemeToggle.vue'
import BaseButton from '@/components/global/BaseButton.vue'
import BaseLink from '@/components/global/BaseLink.vue'

const isMobileMenuOpen = ref(false)

const navLinks = [
  { name: 'About', href: '/#about' },
  { name: 'Work', href: '/#work' },
  { name: 'Skills', href: '/#skills' },
  { name: 'Contact', href: '/#contact' },
]
</script>