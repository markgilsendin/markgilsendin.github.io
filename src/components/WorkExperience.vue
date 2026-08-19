<template>
  <section id="experience" class="bg-canvas-alt w-full">
    <div class="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 py-16 sm:py-20 lg:py-32 space-y-4 sm:space-y-6">
      
      <!-- Section Tag -->
      <p class="font-mono text-xs sm:text-base tracking-widest text-main/50 uppercase">
        03 &mdash; Experience
      </p>

      <!-- Main Heading -->
      <div class="max-w-3xl">
        <h2 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-main tracking-tight">
          Work Experience
        </h2>
      </div>

      <!-- Description -->
      <p class="text-xs sm:text-sm md:text-base text-main/70">
        My professional experience in web and application development.
      </p>

      <!-- Timeline Container -->
      <div class="mt-12 sm:mt-16 relative pl-6 sm:pl-8 lg:pl-10 space-y-8 sm:space-y-12">
        
        <!-- Timeline Vertical Stem Line -->
        <div class="absolute left-2.5 sm:left-3.5 top-3 bottom-3 w-px bg-main/10"></div>

        <!-- Experience Item -->
        <article 
          v-for="exp in experiences" 
          :key="exp.id"
          class="relative group"
        >
          <!-- Timeline Node / Indicator Dot -->
          <div class="absolute -left-[31px] sm:-left-[39px] lg:-left-[47px] top-6 flex items-center justify-center">
            <span 
              class="w-3 h-3 rounded-full border-2 transition-all duration-300"
              :class="exp.isCurrent 
                ? 'bg-emerald-500 border-emerald-500/30 ring-4 ring-emerald-500/10' 
                : 'bg-canvas-alt border-main/30 group-hover:border-primary group-hover:bg-primary'"
            ></span>
          </div>

          <!-- Experience Content Card -->
          <div class="bg-canvas/40 border border-main/10 rounded-xl p-6 sm:p-8 space-y-6 shadow-[0_10px_20px_10px_rgba(0,0,0,0.04)]">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              
              <!-- Role & Company Info (Left Column) -->
              <div class="lg:col-span-5 space-y-3">
                <div class="flex flex-wrap items-center justify-between gap-2 font-mono text-xs">
                  <span class="px-2.5 py-1 rounded bg-main/5 border border-main/10 font-bold text-primary uppercase tracking-wider">
                    {{ exp.period }}
                  </span>
                </div>

                <div class="space-y-1">
                  <h3 class="text-lg sm:text-xl font-bold text-main tracking-tight leading-snug">
                    {{ exp.role }}
                  </h3>
                  <p class="text-xs sm:text-sm font-semibold text-main/70 flex items-center gap-1.5">
                    <Building2 class="w-4 h-4 text-primary shrink-0" />
                    <span>{{ exp.company }}</span>
                  </p>
                </div>

                <p class="text-xs sm:text-sm text-main/70 leading-relaxed pt-1">
                  {{ exp.summary }}
                </p>
              </div>

              <!-- Selected Responsibilities (Right Column) -->
              <div class="lg:col-span-7 space-y-4 lg:border-l lg:border-main/10 lg:pl-8 pt-4 lg:pt-0 border-t border-main/10 lg:border-t-0">
                <div class="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-main/50 font-bold">
                  <CheckCircle2 class="w-4 h-4 text-primary shrink-0" />
                  <span>Selected Responsibilities</span>
                </div>

                <!-- Responsive Grid: 1 col on mobile, 2 cols on tablet/desktop -->
                <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <li 
                    v-for="(task, idx) in exp.responsibilities" 
                    :key="idx"
                    class="flex items-start gap-2.5 p-3 rounded-lg bg-canvas/60 border border-main/10 text-xs sm:text-sm text-main/80"
                  >
                    <span class="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0"></span>
                    <span class="leading-relaxed">{{ task }}</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </article>

      </div>

    </div>
  </section>
</template>

<script setup>
import { Building2, CheckCircle2 } from 'lucide-vue-next'

const experiences = [
  {
    id: 'bulsu-pdo2',
    role: 'Project Development Officer II',
    company: 'Bulacan State University',
    period: '2019 — PRESENT',
    isCurrent: true,
    summary: 'Primarily involved in frontend development for internal university systems and web applications. My work includes translating designs into functional interfaces, developing reusable UI components, integrating REST APIs, and maintaining applications used across different university operations.',
    responsibilities: [
      'Developing frontend interfaces for internal university systems',
      'Translating Figma designs into responsive web interfaces',
      'Building reusable and modular UI components',
      'Integrating REST APIs and handling application data',
      'Developing dashboards and workflow-based applications',
      'Maintaining and enhancing existing systems'
    ]
  },
  {
    id: 'setup-phils',
    role: 'Junior Web Developer',
    company: 'Setup Phils Inc.',
    period: '2018',
    isCurrent: false,
    summary: 'Developed and maintained responsive website layouts across CMS platforms, implementing frontend updates based on client requirements and design specifications.',
    responsibilities: [
      'Developing responsive website layouts for desktop and mobile',
      'Updating frontend components, forms, and UI sections',
      'Implementing visual designs and assets',
    ]
  },
  {
    id: 'innov8tive',
    role: 'Junior Game Developer',
    company: 'Innov8tive Design & Development',
    period: '2014 — 2015',
    isCurrent: false,
    summary: 'Assisted with UI implementation and interface-related development for game projects, including testing and debugging.',
    responsibilities: [
      'Implementing UI assets and interaction elements',
      'Following project specifications and design requirements',
      'Testing and debugging interface-related issues'
    ]
  }
]
</script>