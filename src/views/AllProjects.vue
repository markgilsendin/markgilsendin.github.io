<template>
  <div class="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-12 sm:py-20 space-y-10">
    
    <!-- Page Header -->
    <div class="space-y-4 max-w-3xl">
      <router-link 
        :to=ROUTES.HOME
        class="inline-flex items-center gap-2 text-sm font-mono text-main/60 hover:text-main transition-colors"
      >
        &larr; Back to Home
      </router-link>
      <h1 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-main tracking-tight">
        All Projects
      </h1>
      <p class="text-xs sm:text-sm md:text-base text-main/70">
         A complete portfolio of web applications, platforms, and frontend projects showcasing responsive interfaces, API integrations, and practical software solutions.
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
    <div class="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10">
        <article 
          v-for="(project, index) in filteredProjects" 
          :key="project.id"
          class="group relative bg-canvas-alt/50 shadow-[0_10px_20px_10px_rgba(0,0,0,0.04)] rounded-xl p-6 sm:p-8 flex flex-col justify-between space-y-6 transition-all duration-300"
        >
          <div class="space-y-4">
            <!-- Top Metadata -->
            <div class="flex items-center justify-between gap-2 font-mono text-xs">
              <div class="flex items-center gap-1.5 text-primary font-bold tracking-wider uppercase">
                <Folder class="w-4 h-4" />
                <span>PROJECT 0{{ index + 1 }}</span>
              </div>
              <span class="text-main/40 uppercase tracking-wider text-[11px] truncate">
                {{ project.caseStudy.category }}
              </span>
            </div>

            <!-- Title & Description -->
            <div class="space-y-2">
              <h3 class="text-lg sm:text-xl font-bold text-main tracking-tight">
                {{ project.title }}
              </h3>
              <p class="text-sm text-main/70 leading-relaxed">
                {{ project.shortDescription }}
              </p>
            </div>

            <!-- Tech Badges -->
            <div class="flex flex-wrap gap-1.5 pt-2">
              <span 
                v-for="tech in project.tags" 
                :key="tech"
                class="font-mono text-xs text-main/80 bg-main/5 border border-main/10 px-2.5 py-1 rounded"
              >
                {{ tech }}
              </span>
            </div>
          </div>

          <!-- Card Footer -->
          <div class="pt-4 border-t border-main/5 flex items-center justify-between gap-10 font-mono text-xs sm:text-sm">
            <router-link 
              :to=ROUTES.CASE_STUDY(project.id)
              class="inline-flex items-center gap-2 text-primary transition-colors group/link whitespace-nowrap"
            >
              <span>Read Case Study</span>
              <ArrowRight class="w-4 h-4 shrink-0 transition-transform group-hover/link:translate-x-1" />
            </router-link>

            <span class="text-main/40 truncate text-right">
              Role: {{ project.caseStudy.role }}
            </span>
          </div>
        </article>
      </div>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { projects } from '@/data/projects'
import { ArrowRight, Folder } from 'lucide-vue-next'
import { ROUTES } from '@/constant/routes'

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