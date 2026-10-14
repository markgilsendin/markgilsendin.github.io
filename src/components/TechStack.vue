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

      <!-- Category Panels -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        <div
          v-for="category in techCategories"
          :key="category.title"
          class="bg-canvas/40 border border-main/10 rounded-xl p-5 sm:p-6 space-y-4 shadow-[0_10px_20px_10px_rgba(0,0,0,0.04)]"
        >
          <!-- Category Title -->
          <h3 class="font-mono text-xs uppercase tracking-wider font-bold text-primary">
            {{ category.title }}
          </h3>

          <!-- Tool Rows -->
          <ul class="space-y-3">
            <li
              v-for="tool in category.tools"
              :key="tool.name"
              class="flex items-center gap-3"
            >
              <span class="w-9 h-9 rounded-lg bg-main/5 border border-main/10 flex items-center justify-center shrink-0">
                <Icon
                  :icon="tool.icon"
                  class="w-5 h-5"
                  :class="tool.iconClass"
                />
              </span>
              <div class="min-w-0 leading-tight">
                <p class="text-sm font-semibold text-main/90">
                  {{ tool.name }}
                </p>
                <p
                  v-if="tool.usedOn"
                  class="font-mono text-[11px] text-main/50 truncate"
                  :title="tool.usedOn"
                >
                  {{ tool.usedOn }}
                </p>
              </div>
            </li>
          </ul>
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
// Panels are ordered so each row of three has a similar height on desktop.
const techCategories = [
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
    title: 'Languages',
    tools: [
      { name: 'JavaScript (ES6+)', icon: 'logos:javascript' },
      { name: 'TypeScript', icon: 'logos:typescript-icon' },
      { name: 'HTML', icon: 'logos:html-5' },
      { name: 'CSS', icon: 'logos:css-3' },
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
    title: 'CMS',
    tools: [
      { name: 'WordPress', icon: 'logos:wordpress-icon', usedOn: 'Gateway Rural Bank site' },
      { name: 'Elementor', icon: 'simple-icons:elementor', iconClass: 'text-[#92003B]', usedOn: 'Gateway Rural Bank site' },
    ]
  }
]
</script>