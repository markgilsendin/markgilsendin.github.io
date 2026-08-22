<template>
  <section 
    :id="ROUTES.SECTIONS.CONTACT.id"
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
        <button
          type="button"
          @click="handleMainButtonClick"
          class="group inline-flex items-center gap-2 bg-primary text-white font-semibold text-sm px-6 py-3 rounded-xl hover:bg-primary/90 transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md"
        >
          <span>{{ isCopied ? 'Email Copied!' : 'Get In Touch' }}</span>
          <Icon 
            :icon="isCopied ? 'lucide:check' : 'lucide:arrow-right'" 
            class="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" 
          />
        </button>
      </div>

      <!-- Social Links (GitHub & LinkedIn only) -->
      <div class="flex flex-wrap items-center gap-6 pt-4 font-mono text-xs sm:text-sm">
        <a 
          v-for="link in contactLinks" 
          :key="link.name" 
          :href="link.url"
          target="_blank"
          rel="noopener noreferrer"
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
import { ROUTES } from '../constant/routes'

const email = ref('markgil.p.sendin@gmail.com')
const isCopied = ref(false)

const contactLinks = [
  { 
    name: 'GitHub', 
    icon: 'lucide:github', 
    url: 'https://github.com/markgilsendin' 
  },
  { 
    name: 'LinkedIn', 
    icon: 'lucide:linkedin', 
    url: 'https://www.linkedin.com/in/markgilsendin/' 
  }
]

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText(email.value)
    isCopied.value = true
    setTimeout(() => {
      isCopied.value = false
    }, 2500)
  } catch (err) {
    window.location.href = `mailto:${email.value}`
  }
}

const handleMainButtonClick = () => {
  copyEmail()
  
  const subject = encodeURIComponent('Frontend Development Inquiry')
  const body = encodeURIComponent(
    'Hi Mark,\n\n' +
    'I came across your portfolio and would like to get in touch about a project or opportunity.\n\n' +
    'Here are a few details:\n' +
    'Project / Opportunity:\n' +
    'Message:\n\n' +
    'Best,\n' +
    '[Your Name]'
  )
  
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email.value)}&su=${subject}&body=${body}`
  
  window.open(gmailUrl, '_blank', 'noopener,noreferrer')
}
</script>