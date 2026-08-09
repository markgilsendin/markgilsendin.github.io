<template>
  <div class="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-12 sm:py-20 space-y-10">
    
    <!-- Page Header -->
    <div class="space-y-4 max-w-3xl">
      <router-link 
        to="/" 
        class="inline-flex items-center gap-2 text-sm font-mono text-main/60 hover:text-main transition-colors"
      >
        &larr; Back to Home
      </router-link>
      <h1 class="text-3xl sm:text-5xl font-extrabold text-main tracking-tight">
        All Projects
      </h1>
      <p class="text-base sm:text-lg text-main/70">
        A complete portfolio of web applications, enterprise systems, and custom digital platforms I've engineered.
      </p>
    </div>

    <!-- Category Filter Tags -->
    <div class="flex flex-wrap items-center gap-2 border-b border-main/10 pb-6">
      <button 
        @click="selectedTag = 'All'"
        :class="[
          'font-mono text-xs px-4 py-2 rounded-full border transition-all cursor-pointer',
          selectedTag === 'All' 
            ? 'bg-primary text-white border-primary' 
            : 'bg-main/5 text-main/70 border-main/10 hover:border-main/30'
        ]"
      >
        All ({{ projects.length }})
      </button>
      <button 
        v-for="tag in availableTags" 
        :key="tag"
        @click="selectedTag = tag"
        :class="[
          'font-mono text-xs px-4 py-2 rounded-full border transition-all cursor-pointer',
          selectedTag === tag 
            ? 'bg-primary text-white border-primary' 
            : 'bg-main/5 text-main/70 border-main/10 hover:border-main/30'
        ]"
      >
        {{ tag }}
      </button>
    </div>

    <!-- Projects Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
      <div 
        v-for="project in filteredProjects" 
        :key="project.id"
        class="bg-canvas border border-main/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-main/20 transition-all shadow-xs space-y-6"
      >
        <div class="space-y-4">
          <div class="flex items-center justify-between text-xs font-mono">
            <span class="text-primary font-semibold uppercase">{{ project.caseStudy.role }}</span>
            <span class="text-main/40">{{ project.caseStudy.timeline }}</span>
          </div>

          <h2 class="text-xl font-bold text-main leading-snug">
            {{ project.title }}
          </h2>

          <p class="text-sm text-main/60 leading-relaxed">
            {{ project.shortDescription }}
          </p>

          <!-- Tags -->
          <div class="flex flex-wrap gap-1.5 pt-2">
            <span 
              v-for="tag in project.tags" 
              :key="tag"
              class="font-mono text-[11px] text-main/70 bg-main/5 px-2.5 py-1 rounded"
            >
              {{ tag }}
            </span>
          </div>
        </div>

        <!-- Case Study Link -->
        <div class="pt-4 border-t border-main/10">
          <router-link 
            :to="`/projects/${project.id}`"
            class="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-primary hover:underline"
          >
            <span>Read Full Case Study</span>
            <svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </router-link>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { projects } from '@/data/projects'

const selectedTag = ref('All')

// Dynamically extract unique tech tags across all projects
const availableTags = computed(() => {
  const tagsSet = new Set()
  projects.forEach(p => p.tags.forEach(t => tagsSet.add(t)))
  return Array.from(tagsSet)
})

// Filter projects based on selected tag
const filteredProjects = computed(() => {
  if (selectedTag.value === 'All') return projects
  return projects.filter(p => p.tags.includes(selectedTag.value))
})
</script>