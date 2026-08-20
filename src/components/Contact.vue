<template>
  <section 
    id="contact" 
    class="bg-canvas-alt w-full relative overflow-hidden"
  >
    <div class="relative max-w-7xl mx-auto px-10 py-16 sm:px-16 sm:py-20 lg:px-24 lg:py-32 space-y-8">
      
      <!-- Section Tag -->
      <p class="font-mono text-xs sm:text-base tracking-widest text-main/50 uppercase">
        05 &mdash; CONTACT
      </p>

      <!-- Main Heading & Description Container -->
      <div class="max-w-2xl space-y-4">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-main tracking-tight leading-tight">
          Let's build something useful.
        </h2>
        <p class="text-xs sm:text-sm md:text-base text-main/70 font-normal leading-relaxed">
          Have a project, opportunity, or idea you'd like to discuss? I'd be happy to connect.
        </p>
      </div>

      <!-- Action Button -->
      <div class="pt-2">
        <BaseLink 
          :href="`mailto:${email}`" 
          variant="primary" 
          size="md"
          class="group inline-flex items-center gap-2"
        >
          <span>Get In Touch</span>
          
          <template #icon-right>
          <Icon icon="lucide:arrow-right" class="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </template>
          </BaseLink>
        </div>

      <!-- Social & Direct Links -->
      <div class="flex flex-wrap items-center gap-6 pt-4 font-mono text-xs sm:text-sm">
        <a 
          v-for="link in contactLinks" 
          :key="link.name" 
          :href="link.url"
          :target="link.isExternal ? '_blank' : '_self'"
          :rel="link.isExternal ? 'noopener noreferrer' : ''"
          class="inline-flex items-center gap-2 text-main/70 hover:text-primary transition-colors"
        >
          <Icon :icon="link.icon" class="w-4 h-4" />
          <span>{{ link.name }}</span>
        </a>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import BaseLink from '@/components/global/BaseLink.vue'

const email = ref('your.email@example.com')

const contactLinks = [
  { 
    name: 'GitHub', 
    icon: 'lucide:github', 
    url: 'https://github.com/markgilsendin', 
    isExternal: true 
  },
  { 
    name: 'LinkedIn', 
    icon: 'lucide:linkedin', 
    url: 'https://www.linkedin.com/in/markgilsendin/', 
    isExternal: true 
  },
  { 
    name: 'Email', 
    icon: 'lucide:mail', 
    url: `mailto:${email.value}`, 
    isExternal: false 
  }
]
</script>