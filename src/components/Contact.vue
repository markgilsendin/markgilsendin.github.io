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

      <!-- Text + Card -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

      <!-- Left Column: Heading, email, actions -->
      <div class="lg:col-span-7 space-y-8">

      <!-- Main Heading & Description Container -->
      <div class="max-w-2xl space-y-4">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-main tracking-tight leading-tight text-balance">
          Open to remote roles and freelance projects.
        </h2>
        <p class="text-sm md:text-lg text-main/70 font-normal leading-relaxed">
          I'm looking for a Vue or React role with a team in the Philippines or abroad, and I'm also open to
          freelance frontend and website projects. If you're hiring or have a project in mind, I'd be glad to
          hear from you.
        </p>
      </div>

      <!-- Email (visible, with separate copy action) -->
      <div class="flex flex-wrap items-center gap-3 font-mono text-sm sm:text-base">
        <a
          :href="mailtoUrl"
          class="text-main font-semibold hover:text-primary transition-colors break-all"
        >
          {{ email }}
        </a>
        <button
          type="button"
          @click="copyEmail"
          class="inline-flex items-center gap-1.5 text-xs text-main/60 hover:text-primary border border-main/10 hover:border-primary/40 rounded-lg px-2.5 py-1.5 transition-colors cursor-pointer"
          :aria-label="isCopied ? 'Email copied' : 'Copy email address'"
        >
          <Icon :icon="isCopied ? 'lucide:check' : 'lucide:copy'" class="w-3.5 h-3.5" />
          <span>{{ isCopied ? 'Copied' : 'Copy' }}</span>
        </button>
      </div>

      <!-- Action Buttons -->
      <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
        <a
          :href="mailtoUrl"
          class="group inline-flex items-center justify-center gap-2 bg-primary text-white font-semibold text-sm px-6 py-3 rounded-xl hover:bg-primary/90 transition-all duration-200 shadow-sm hover:shadow-md"
        >
          <span>Email Me</span>
          <Icon icon="lucide:arrow-right" class="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
        </a>
        <a
          :href="CV_URL"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center justify-center gap-2 border border-main/15 text-main/80 hover:text-main hover:border-main/30 font-semibold text-sm px-6 py-3 rounded-xl transition-all duration-200"
        >
          <Icon icon="lucide:download" class="w-4 h-4 text-main/70" />
          <span>Download CV</span>
        </a>
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

      <!-- Right Column: Working with me -->
      <aside class="lg:col-span-5 w-full bg-canvas/60 border border-main/10 rounded-2xl p-6 sm:p-8 space-y-5 shadow-[0_10px_20px_10px_rgba(0,0,0,0.04)]">
        <p class="font-mono text-xs uppercase tracking-wider font-bold text-primary">
          Working with me
        </p>

        <dl class="space-y-4">
          <div
            v-for="item in workingDetails"
            :key="item.label"
            class="flex items-start gap-3.5"
          >
            <span class="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
              <Icon :icon="item.icon" class="w-4 h-4" />
            </span>
            <div class="min-w-0">
              <dt class="font-mono text-[11px] uppercase tracking-wider text-main/50">
                {{ item.label }}
              </dt>
              <dd class="text-sm md:text-base font-semibold text-main/90">
                {{ item.value }}
              </dd>
            </div>
          </div>
        </dl>
      </aside>

      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import { ROUTES, CV_URL } from '../constant/routes'

const email = 'markgil.p.sendin@gmail.com'
const isCopied = ref(false)

const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent('Frontend Role / Project Inquiry')}`

// Practical details for recruiters and clients. Only list what is true.
const workingDetails = [
  { label: 'Time zone', value: 'Philippines (UTC+8)', icon: 'lucide:clock' },
  { label: 'Open to', value: 'Full-time remote roles and freelance projects', icon: 'lucide:briefcase' },
  { label: 'Work setup', value: 'Remote', icon: 'lucide:laptop' },
  { label: 'Best way to reach me', value: 'Email', icon: 'lucide:mail' }
]

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
    await navigator.clipboard.writeText(email)
    isCopied.value = true
    setTimeout(() => {
      isCopied.value = false
    }, 2500)
  } catch (err) {
    // Clipboard not available (e.g. non-secure context): fall back to the mail client
    window.location.href = mailtoUrl
  }
}
</script>