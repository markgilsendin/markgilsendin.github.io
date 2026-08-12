<template>
  <section 
    id="about" 
    class="bg-canvas-alt w-full relative overflow-hidden"
  >
    <div class="relative max-w-7xl mx-auto px-10 py-16 sm:px-16 sm:py-20 lg:px-24 lg:py-32 space-y-6 sm:space-y-8">
      
      <!-- Section Tag -->
      <p class="font-mono text-xs sm:text-base tracking-widest text-main/50 uppercase">
        01 &mdash; ABOUT
      </p>

      <!-- Main Heading -->
      <div class="max-w-3xl">
        <h2 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-main tracking-tight">
          A frontend developer focused on building useful software.
        </h2>
      </div>

      <!-- Description -->
      <p class="text-xs sm:text-sm md:text-base text-main/70 font-normal">
        I'm a Frontend Developer with experience building and maintaining web applications for real-world business and institutional needs. My work involves developing responsive interfaces, integrating REST APIs, implementing application functionality, troubleshooting system issues, and improving existing applications.
      </p>

      <div class="pt-8 space-y-2">
        <h3 class="text-xl sm:text-2xl font-bold text-main tracking-tight">
          What I can help build
        </h3>
      </div>

      <!-- Key Highlight Cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
        
        <div 
          v-for="feature in features" 
          :key="feature.id"
          class="bg-canvas/40 p-6 rounded-xl space-y-4 shadow-[0_10px_20px_10px_rgba(0,0,0,0.04)]
                 transition-all flex flex-col justify-between"
        >
          <div class="space-y-3">
            <!-- Top Header: Icon + Number Code -->
            <div class="flex items-center justify-between">
              <div class="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <component :is="feature.icon" class="w-4 h-4" />
              </div>
              <span class="font-mono text-xs font-bold text-primary">
                {{ feature.code }}
              </span>
            </div>

            <!-- Category & Title Group -->
            <div class="space-y-1 pt-1">
              <p class="font-mono text-[11px] text-main/40 uppercase tracking-wider font-medium">
                {{ feature.category }}
              </p>
              <h3 class="text-sm md:text-base font-bold text-main tracking-tight">
                {{ feature.title }}
              </h3>
            </div>

            <!-- Description -->
            <p class="text-xs md:text-sm text-main/60 leading-relaxed">
              {{ feature.description }}
            </p>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { Monitor, Network, Cpu, Wrench } from 'lucide-vue-next'

const features = [
  {
    id: 'ui-design',
    code: '01',
    category: 'UI DESIGN',
    title: 'Responsive Interfaces',
    description: 'Building accessible and fluid interfaces across all screen sizes.',
    icon: Monitor
  },
  {
    id: 'data-flow',
    code: '02',
    category: 'DATA FLOW',
    title: 'REST API Integration',
    description: 'Connecting frontend applications with REST APIs.',
    icon: Network
  },
  {
    id: 'architecture',
    code: '03',
    category: 'ARCHITECTURE',
    title: 'Web Applications',
    description: 'Dashboards, management systems, forms, and data-driven applications.',
    icon: Cpu
  },
  {
    id: 'maintenance',
    code: '04',
    category: 'MAINTENANCE',
    title: 'System Improvement',
    description: 'Troubleshooting system issues and upgrading existing codebases.',
    icon: Wrench
  }
]
</script>