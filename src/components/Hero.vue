<template>
  <section class="w-full bg-canvas bg-dot-pattern">
    <div class="max-w-7xl mx-auto px-10 py-16 sm:px-16 sm:py-20 lg:px-24 lg:py-32 space-y-6 sm:space-y-8">
      
      <!-- Sub-headline Tag -->
      <p class="text-xs sm:text-sm xl:text-lg tracking-widest text-primary uppercase">
        FRONTEND DEVELOPER
      </p>

      <!-- Main Headline -->
      <h1 class="text-3xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-main tracking-tight leading-[1.1]">
        Building clean,<br class="hidden sm:inline" />
        responsive web<br class="hidden sm:inline" />
        applications.
      </h1>

      <!-- Paragraph -->
      <p class="text-xs sm:text-sm md:text-base xl:text-lg text-main/70 leading-relaxed max-w-2xl">
        I specialize in building responsive web applications with modern JavaScript frameworks, clean UI design, and seamless API integrations.
      </p>

      <!-- CTA Buttons -->
      <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
        <!-- View My Work -->
        <BaseLink 
          href="#work" 
          variant="primary" 
          size="md"
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
          href="/cv.pdf" 
          download 
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
  </section>
</template>

<script setup>
import BaseLink from '@/components/global/BaseLink.vue'
</script>