<template>
  <section
    :id=ROUTES.SECTIONS.SKILLS.id
    class="w-full relative overflow-hidden"
  >
    <div class="relative max-w-7xl mx-auto px-10 py-16 sm:px-16 sm:py-20 lg:px-24 lg:py-32 space-y-12">

      <!-- Section Header Container (Matching About.vue Structure) -->
      <div class="space-y-6">
        <!-- Section Tag -->
        <p class="font-mono text-xs sm:text-base tracking-widest text-main/50 uppercase">
          04 &mdash; TECH
        </p>

        <!-- Main Heading -->
        <div class="max-w-3xl space-y-2">
          <h2 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-main tracking-tight">
            Skills & Tools
          </h2>
          <p class="text-sm md:text-lg text-main/70 font-normal">
            What I use day to day, and where I've used it.
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
          <h3 class="text-lg sm:text-xl font-bold text-main tracking-tight pb-3">
            {{ category.title }}
          </h3>

          <!-- Grid Layout (Matching Feature Cards Grid) -->
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            <div
              v-for="tool in category.tools"
              :key="tool.name"
              class="bg-canvas/40 group flex flex-col items-center justify-center border border-main/10 p-5 rounded-xl shadow-[0_10px_20px_10px_rgba(0,0,0,0.04)] hover:-translate-y-0.5 transition-all duration-200 cursor-default"
            >
              <!-- Iconify Logo -->
              <Icon
                :icon="tool.icon"
                class="w-9 h-9 mb-3 group-hover:scale-110 transition-transform duration-200 shrink-0"
                :class="tool.iconClass"
              />

              <!-- Name & "Used on" Container -->
              <div class="flex flex-col items-center gap-0.5 text-center">
                <span class="text-xs sm:text-sm font-semibold text-main/80 group-hover:text-main">
                  {{ tool.name }}
                </span>
                <span
                  v-if="tool.usedOn"
                  class="font-mono text-[11px] text-main/50 leading-snug"
                >
                  {{ tool.usedOn }}
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>

      <!-- Backend integration note -->
      <p class="flex items-start gap-2.5 text-xs sm:text-sm text-main/60">
        <Icon icon="lucide:server" class="w-4 h-4 mt-0.5 shrink-0 text-primary" />
        <span>Worked with backend teams on Laravel and Django REST APIs.</span>
      </p>

    </div>
  </section>
</template>

<script setup>
import { Icon } from '@iconify/vue'
import { ROUTES } from '../constant/routes'

// "usedOn" is optional. Only add it where the project is named in the CV,
// so every tag can be backed up in an interview.
const techCategories = [
  {
    title: 'Languages',
    tools: [
      { name: 'JavaScript (ES6+)', icon: 'logos:javascript' },
      { name: 'TypeScript', icon: 'logos:typescript-icon' },
      { name: 'HTML', icon: 'logos:html-5' },
      { name: 'CSS', icon: 'logos:css-3' },
    ]
  },
  {
    title: 'Frameworks',
    tools: [
      { name: 'Vue 3', icon: 'logos:vue' },
      { name: 'React', icon: 'logos:react' },
      { name: 'Next.js', icon: 'logos:nextjs-icon', iconClass: '[.dark_&]:invert', usedOn: 'School Management System' },
      { name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon' },
    ]
  },
  {
    title: 'State & Data',
    tools: [
      { name: 'Vuex', icon: 'logos:vue' },
      { name: 'Zustand', icon: 'devicon:zustand', usedOn: 'Service Request System' },
      { name: 'TanStack Query', icon: 'logos:react-query-icon', usedOn: 'School Management System' },
      { name: 'Axios', icon: 'logos:axios' },
      { name: 'Firebase', icon: 'logos:firebase', usedOn: 'Attendance App notifications' },
    ]
  },
  {
    title: 'Forms & Validation',
    tools: [
      { name: 'Zod', icon: 'logos:zod' },
      { name: 'Vuelidate', icon: 'lucide:list-checks', iconClass: 'text-emerald-500' },
    ]
  },
  {
    title: 'Tooling',
    tools: [
      { name: 'Git', icon: 'logos:git-icon' },
      { name: 'GitHub', icon: 'lucide:github' },
      { name: 'Vite', icon: 'logos:vitejs' },
      { name: 'Husky', icon: 'lucide:dog', iconClass: 'text-main/70' },
      { name: 'Postman', icon: 'logos:postman-icon' },
      { name: 'Figma', icon: 'logos:figma' },
    ]
  },
  {
    title: 'CMS',
    tools: [
      { name: 'WordPress', icon: 'logos:wordpress-icon', usedOn: 'Gateway Rural Bank site' },
      { name: 'Elementor', icon: 'simple-icons:elementor', iconClass: 'text-[#92003B]', usedOn: 'Gateway Rural Bank site' },
    ]
  }
]
</script>
