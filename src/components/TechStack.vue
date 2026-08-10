<template>
  <section 
    id="skills" 
    class="bg-canvas-alt w-full relative overflow-hidden"
  >
    <div class="relative max-w-7xl mx-auto px-10 py-16 sm:px-16 sm:py-20 lg:px-24 lg:py-32 space-y-12">
      
      <!-- Section Header Container (Matching About.vue Structure) -->
      <div class="space-y-6">
        <!-- Section Tag -->
        <p class="font-mono text-xs sm:text-base tracking-widest text-main/50 uppercase">
          03 &mdash; TECH
        </p>

        <!-- Main Heading -->
        <div class="max-w-3xl space-y-2">
          <h2 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-main tracking-tight">
            Skills & Tools
          </h2>
          <p class="text-xs sm:text-sm md:text-base text-main/70 font-normal">
            Technologies and frameworks I use to build, integrate, and maintain web applications.
          </p>
        </div>
      </div>

      <!-- Category Groups Loop -->
      <div class="space-y-10">
        <div 
          v-for="category in techCategories" 
          :key="category.title" 
          class="space-y-6"
        >
          <!-- Category Subheading -->
          <h3 class="text-lg sm:text-xl font-bold text-main tracking-tight border-b border-main/10 pb-3">
            {{ category.title }}
          </h3>

          <!-- Grid Layout (Matching Feature Cards Grid) -->
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            <div
              v-for="tool in category.tools"
              :key="tool.name"
              class="group flex flex-col items-center justify-center p-5 rounded-xl bg-canvas-alt border border-main/10 hover:border-main/20 hover:-translate-y-0.5 transition-all duration-200 cursor-default"
            >
              <!-- Iconify Logo -->
              <Icon 
                :icon="tool.icon" 
                class="w-9 h-9 mb-3 group-hover:scale-110 transition-transform duration-200 shrink-0" 
              />

              <!-- Name & Subtitle Container -->
              <div class="flex flex-col items-center gap-0.5 text-center">
                <span class="text-xs sm:text-sm font-semibold text-main/80 group-hover:text-main">
                  {{ tool.name }}
                </span>
                <span 
                  v-if="tool.subtitle" 
                  class="font-mono text-[10px] text-main/50 group-hover:text-primary transition-colors"
                >
                  ({{ tool.subtitle }})
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { Icon } from '@iconify/vue'

const techCategories = ref([
  {
    title: 'Technical Skills',
    tools: [
      { name: 'React', icon: 'logos:react' },
      { name: 'Next.js', icon: 'logos:nextjs-icon' },
      { name: 'Vue.js', icon: 'logos:vue' },
      { name: 'JavaScript', icon: 'logos:javascript' },
      { name: 'TypeScript', icon: 'logos:typescript-icon' },
      { name: 'HTML', icon: 'logos:html-5' },
      { name: 'CSS', icon: 'logos:css-3' },
      { name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon' },
      { name: 'Responsive Design', icon: 'lucide:layout' },
      { name: 'Component-Based UI', icon: 'lucide:layers' },
      { name: 'Laravel', subtitle: 'API Integration', icon: 'logos:laravel' },
      { name: 'Django', subtitle: 'API Integration', icon: 'logos:django-icon' },
      { name: 'REST APIs', icon: 'lucide:workflow' }
    ]
  },
  {
    title: 'Tools & Platforms',
    tools: [
      { name: 'Git', icon: 'logos:git-icon' },
      { name: 'GitHub', icon: 'lucide:github' },
      { name: 'VS Code', icon: 'logos:visual-studio-code' },
      { name: 'Postman', icon: 'logos:postman-icon' },
      { name: 'Figma', icon: 'logos:figma' }
    ]
  }
])
</script>