<template>
  <section class="w-full bg-canvas bg-dot-pattern">
    <div class="max-w-7xl mx-auto px-10 py-16 sm:px-16 sm:py-20 lg:px-24 lg:py-32">
      
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        <!-- Left Column: Copy & CTAs -->
        <div class="lg:col-span-7 space-y-6 sm:space-y-8">
          
          <!-- Sub-headline Tag -->
          <p class="text-xs sm:text-sm xl:text-lg tracking-widest text-primary uppercase">
            FRONTEND DEVELOPER
          </p>

          <!-- Main Headline -->
          <h1 class="text-3xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl font-black text-main tracking-tight leading-[1.1]">
            Building clean,<br class="hidden sm:inline" />
            responsive web<br class="hidden sm:inline" />
            applications.
          </h1>

          <!-- Paragraph -->
          <p class="text-sm md:text-base xl:text-lg text-main/70 leading-relaxed max-w-xl">
            I build and maintain web applications for real-world business and institutional needs, with a focus on responsive interfaces, API integration, and practical application development.
          </p>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
            <!-- View My Work -->
            <BaseLink 
              :href=ROUTES.SECTIONS.PROJECTS.id
              variant="primary" 
              size="md"
              class="group"
              @click="scrollToSection($event, ROUTES.SECTIONS.PROJECTS.hash)"
            >
              <span>View My Work</span>
              <template #icon-right>
                <svg class="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </template>
            </BaseLink>

            <!-- Download CV -->
            <BaseLink 
              href="/CV - Mark Gil Sendin.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              variant="outline" 
              size="md"
            >
              <template #icon-left>
                <svg class="w-4 h-4 shrink-0 text-main/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </template>
              <span>Download CV</span>
            </BaseLink>
          </div>

        </div>

        <!-- Right Column: Interactive Code Snippet Card -->
        <div class="lg:col-span-5 w-full flex justify-center lg:justify-end">
          <div class="w-full rounded-2xl border border-main/10 bg-canvas/80 backdrop-blur-md shadow-xl shadow-main/5 overflow-hidden font-mono text-xs sm:text-sm">
            
            <!-- Window Bar -->
            <div class="px-4 py-3 border-b border-main/10 bg-main/2 flex items-center justify-between">
              <div class="flex items-center gap-1.5">
                <span class="w-3 h-3 rounded-full bg-rose-400/80 inline-block"></span>
                <span class="w-3 h-3 rounded-full bg-amber-400/80 inline-block"></span>
                <span class="w-3 h-3 rounded-full bg-emerald-400/80 inline-block"></span>
              </div>
              <span class="text-main/40 text-[11px]">developer.js</span>
            </div>

            <!-- Code Body -->
            <div class="p-5 space-y-1.5 text-main/80 overflow-x-auto leading-relaxed">
              <div><span class="text-main/40 mr-3 select-none">1</span><span class="text-purple-500 font-semibold">const</span> <span class="text-blue-500">developer</span> = {</div>
              <div><span class="text-main/40 mr-3 select-none">2</span>  name: <span class="text-emerald-500">"Mark Gil Sendin"</span>,</div>
              <div><span class="text-main/40 mr-3 select-none">3</span>  role: <span class="text-emerald-500">"Frontend Developer"</span>,</div>
              <div><span class="text-main/40 mr-3 select-none">4</span>  stack: [</div>
              <div><span class="text-main/40 mr-3 select-none">5</span>    <span class="text-emerald-500">"Vue.js"</span>,</div>
              <div><span class="text-main/40 mr-3 select-none">6</span>    <span class="text-emerald-500">"React"</span>,</div>
              <div><span class="text-main/40 mr-3 select-none">7</span>    <span class="text-emerald-500">"Javascript"</span>,</div>
              <div><span class="text-main/40 mr-3 select-none">8</span>    <span class="text-emerald-500">"Tailwind CSS"</span></div>
              <div><span class="text-main/40 mr-3 select-none">9</span> ]</div>
              <div><span class="text-main/40 mr-3 select-none">3</span>  openToOpportunities: <span class="text-amber-500">true</span>,</div>
              <div><span class="text-main/40 mr-3 select-none">10</span>};</div>
            </div>

            <!-- Status Footer -->
            <div class="px-5 py-5 border-t border-main/10 bg-main/2 flex items-center gap-2.5">
              <!-- <span class="relative flex h-2 w-2">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span class="text-xs text-main/60">open to opportunities: true</span> -->
            </div>

          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import BaseLink from '@/components/global/BaseLink.vue'
import { ROUTES } from '../constant/routes'
import { useScrollTo } from '@/composable/useScrollTo'

const { scrollToSection } = useScrollTo()
</script>