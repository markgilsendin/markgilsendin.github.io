<template>
  <div v-if="project" class="w-full max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-12 sm:py-20 space-y-12">
    
    <!-- Navigation Back Link -->
    <router-link 
      to="/#work" 
      class="inline-flex items-center gap-2 text-sm font-mono text-main/60 hover:text-main transition-colors"
    >
      &larr; Back to Selected Work
    </router-link>

    <!-- Header Section -->
    <header class="space-y-6 pb-8 border-b border-main/10">
      <div class="flex flex-wrap items-center gap-3 font-mono text-xs">
        <span class="bg-primary/10 text-primary font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
          {{ project.caseStudy.type }}
        </span>
      </div>

      <h1 class="text-3xl sm:text-5xl font-extrabold text-main tracking-tight leading-tight">
        {{ project.title }}
      </h1>

      <p class="text-lg sm:text-xl text-main/70 font-normal leading-relaxed max-w-4xl">
        {{ project.shortDescription }}
      </p>

      <!-- Tech Stack Badges -->
      <div class="flex flex-wrap gap-2 pt-2">
        <span 
          v-for="tag in project.tags" 
          :key="tag"
          class="font-mono text-xs text-main/80 bg-main/5 border border-main/10 px-3.5 py-1.5 rounded-lg"
        >
          {{ tag }}
        </span>
      </div>
    </header>

    <!-- Layout Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      
      <!-- Left Sidebar: Project Snapshot -->
      <aside class="lg:col-span-4 bg-canvas-alt border border-main/10 rounded-2xl p-6 sm:p-8 space-y-6 sticky top-24">
        <h3 class="font-mono text-xs uppercase tracking-widest text-main/40 font-semibold">
          Project Snapshot
        </h3>

        <div class="space-y-4 font-mono text-xs sm:text-sm">
          <div class="border-b border-main/10 pb-3">
            <span class="text-main/50 block text-[11px] uppercase">My Role</span>
            <span class="font-bold text-main pt-0.5 block">{{ project.caseStudy.role }}</span>
          </div>

          <div class="border-b border-main/10 pb-3">
            <span class="text-main/50 block text-[11px] uppercase">Category</span>
            <span class="font-bold text-main pt-0.5 block">{{ project.caseStudy.type }}</span>
          </div>

          <div v-if="project.liveUrl && project.liveUrl !== '#'" class="border-b border-main/10 pb-3">
            <span class="text-main/50 block text-[11px] uppercase">Live Website</span>
            <a :href="project.liveUrl" target="_blank" rel="noopener noreferrer" class="font-bold text-primary underline pt-0.5 block hover:text-primary/80">
              Visit Site &rarr;
            </a>
          </div>

          <div>
            <span class="text-main/50 block text-[11px] uppercase">Source Code</span>
            <a v-if="project.githubUrl" :href="project.githubUrl" target="_blank" rel="noopener noreferrer" class="font-bold text-primary underline pt-0.5 block hover:text-primary/80">
              GitHub Repository &rarr;
            </a>
            <span v-else class="text-main/40 pt-0.5 block italic">Private / Proprietary Repo</span>
          </div>
        </div>
      </aside>

      <!-- Right Column: Case Study Narrative -->
      <main class="lg:col-span-8 space-y-12">
        
        <!-- Overview & The Challenge -->
        <section class="space-y-4">
          <h2 class="text-2xl font-bold text-main tracking-tight">Overview</h2>
          <p class="text-base sm:text-lg text-main/80 leading-relaxed">
            {{ project.caseStudy.overview }}
          </p>

          <div class="p-5 sm:p-6 bg-main/5 border-l-4 border-primary rounded-r-2xl space-y-2 mt-4">
            <h4 class="font-mono text-xs uppercase tracking-wider font-bold text-main">The Challenge</h4>
            <p class="text-sm sm:text-base text-main/80 leading-relaxed">
              {{ project.caseStudy.challenge }}
            </p>
          </div>
        </section>

        <!-- My Contribution -->
        <section class="space-y-4 border-t border-main/10 pt-10">
          <h2 class="text-2xl font-bold text-main tracking-tight">My Contribution</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div 
              v-for="(item, idx) in project.caseStudy.myContribution" 
              :key="item"
              class="p-4 bg-canvas border border-main/10 rounded-xl space-y-2 flex flex-col justify-between"
            >
              <div class="font-mono text-xs text-primary font-bold">0{{ idx + 1 }}</div>
              <p class="text-sm font-medium text-main/90 leading-snug">{{ item }}</p>
            </div>
          </div>
        </section>

        <!-- Technical Challenges -->
        <section class="space-y-4 border-t border-main/10 pt-10">
          <h2 class="text-2xl font-bold text-main tracking-tight">Technical Challenges</h2>
          <p class="text-base text-main/80 leading-relaxed">
            {{ project.caseStudy.technicalChallenges }}
          </p>
        </section>

        <!-- What I Learned -->
        <section class="space-y-4 border-t border-main/10 pt-10">
          <h2 class="text-2xl font-bold text-main tracking-tight">What I Learned</h2>
          <p class="text-base text-main/80 leading-relaxed">
            {{ project.caseStudy.whatILearned }}
          </p>
        </section>

        <!-- Outcome -->
        <section class="space-y-4 border-t border-main/10 pt-10">
          <h2 class="text-2xl font-bold text-main tracking-tight">Outcome</h2>
          <div class="p-6 bg-primary/10 border border-primary/20 rounded-2xl text-primary font-medium text-base sm:text-lg leading-relaxed">
            {{ project.caseStudy.outcome }}
          </div>
        </section>

        <!-- Footer Navigation -->
        <div class="pt-8 border-t border-main/10 flex items-center justify-between">
          <router-link to="/projects" class="text-sm font-semibold text-main/60 hover:text-main">
            &larr; All Projects
          </router-link>
        </div>

      </main>

    </div>

  </div>

  <div v-else class="text-center py-24 space-y-4">
    <h1 class="text-2xl font-bold text-main">Project Not Found</h1>
    <router-link to="/projects" class="text-primary underline">Return to Projects List</router-link>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { projects } from '@/data/projects'

const route = useRoute()
const project = computed(() => projects.find(p => p.id === route.params.id))
</script>