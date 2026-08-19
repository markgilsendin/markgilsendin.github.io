<template>
  <div v-if="project" class="w-full max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-12 sm:py-20 space-y-12">
    
    <!-- Navigation Back Link -->
    <router-link 
      to="/#work" 
      class="inline-flex items-center gap-2 text-sm font-mono text-main/60 hover:text-main transition-colors"
    >
      <ArrowLeft class="w-4 h-4 shrink-0" />
      <span>Back to Selected Work</span>
    </router-link>

    <!-- Header Section -->
    <header class="space-y-6 pb-8 border-b border-main/10">
      <div class="flex flex-wrap items-center gap-3 font-mono text-xs">
        <span class="inline-flex items-center gap-1.5 bg-primary/10 text-primary font-medium px-3 py-2 rounded-full uppercase tracking-wider">
          <Tag class="w-4 h-4 shrink-0" />
          {{ project.caseStudy.type }}
        </span>
      </div>

      <h1 class="text-3xl sm:text-4xl font-extrabold text-main tracking-tight leading-tight">
        {{ project.title }}
      </h1>

      <p class="text-xs sm:text-sm md:text-base text-main/70">
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
      <aside class="lg:col-span-4 bg-canvas-alt border border-main/10 rounded-2xl p-6 sm:p-8 space-y-6 lg:sticky top-24">
        <div class="flex items-center gap-2 border-b border-main/10 pb-3">
          <Layers class="w-5 h-5 text-primary/70 shrink-0" />
          <h3 class="font-mono text-xs uppercase tracking-widest text-main/40 font-semibold">
            Project Snapshot
          </h3>
        </div>

        <div class="space-y-6 font-mono text-xs sm:text-sm">
          <div class="border-b border-main/10 pb-3 space-y-1.5">
            <span class="text-main/50 flex items-center gap-1.5 text-xs uppercase">
              <UserCircle class="w-4 h-4 shrink-0" />
              My Role
            </span>
            <span class="font-bold text-main pt-0.5 block">{{ project.caseStudy.role }}</span>
          </div>

          <div class="border-b border-main/10 pb-3 space-y-1.5">
            <span class="text-main/50 flex items-center gap-1.5 text-xs uppercase">
              <Folder class="w-4 h-4 shrink-0" />
              Category
            </span>
            <span class="font-bold text-main pt-0.5 block">{{ project.caseStudy.type }}</span>
          </div>

          <div v-if="project.liveUrl && project.liveUrl !== '#'" class="border-b border-main/10 pb-3 space-y-1.5">
            <span class="text-main/50 flex items-center gap-1.5 text-xs uppercase">
              <Globe class="w-3.5 h-3.5 shrink-0" />
              Live Website
            </span>
            <a :href="project.liveUrl" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 font-bold text-primary underline pt-0.5 hover:text-primary/80">
              <span>Visit Site</span>
              <ExternalLink class="w-3.5 h-3.5 shrink-0" />
            </a>
          </div>

          <div class="space-y-1.5">
            <span class="text-main/50 flex items-center gap-1.5 text-xs uppercase">
              <Code2 class="w-3.5 h-3.5 shrink-0" />
              Source Code
            </span>
            <a v-if="project.githubUrl" :href="project.githubUrl" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 font-bold text-primary underline pt-0.5 hover:text-primary/80">
              <span>GitHub Repository</span>
              <ExternalLink class="w-3.5 h-3.5 shrink-0" />
            </a>
            <span v-else class="text-main/40 pt-0.5 flex items-center gap-1.5 italic">
              <Lock class="w-3.5 h-3.5 shrink-0" />
              Private / Proprietary Repo
            </span>
          </div>
        </div>
      </aside>

      <!-- Right Column: Case Study Narrative -->
      <main class="lg:col-span-8 space-y-12">
        
        <!-- Overview & The Challenge -->
        <section class="space-y-4">
          <div class="flex items-center gap-2">
            <BookOpen class="w-5 h-5 text-primary shrink-0" />
            <h2 class="text-xl font-bold text-main tracking-tight">Overview</h2>
          </div>

          <p class="text-xs sm:text-sm md:text-base text-main/70">
            {{ project.caseStudy.overview }}
          </p>

          <div class="p-5 sm:p-6 bg-main/5 border-l-4 border-primary rounded-r-2xl space-y-2 mt-4">
            <div class="flex items-center gap-2">
              <Target class="w-4 h-4 text-primary shrink-0" />
              <h4 class="font-mono text-xs uppercase tracking-wider font-bold text-main">The Challenge</h4>
            </div>
            <p class="text-xs sm:text-sm md:text-base text-main/70 italic">
              {{ project.caseStudy.challenge }}
            </p>
          </div>
        </section>

        <!-- My Contribution -->
        <section class="space-y-4 border-t border-main/10 pt-10">
          <div class="flex items-center gap-2">
            <CheckCircle2 class="w-5 h-5 text-primary shrink-0" />
            <h2 class="text-xl font-bold text-main tracking-tight">My Contribution</h2>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div 
              v-for="(item, idx) in project.caseStudy.myContribution" 
              :key="item"
              class="p-4 bg-canvas border border-main/10 rounded-xl space-y-2 flex flex-col justify-between"
            >
              <div class="font-mono text-xs text-primary font-bold">0{{ idx + 1 }}</div>
              <p class="text-sm font-medium text-main/90">{{ item }}</p>
            </div>
          </div>
        </section>

        <!-- Technical Challenges -->
        <section class="space-y-6 border-t border-main/10 pt-10">
          <!-- Section Title with Icon -->
          <div class="flex items-center gap-2">
            <Cpu class="w-5 h-5 text-primary shrink-0" />
            <h2 class="text-xl font-bold text-main tracking-tight">Technical Challenges</h2>
          </div>

          <!-- Cards / List Grid Layout -->
          <div class="grid grid-cols-1 gap-4">
            <div 
              v-for="(challenge, idx) in project.caseStudy.technicalChallenges" 
              :key="challenge.title || idx"
              class="p-5 sm:p-6 bg-canvas-alt border border-main/10 rounded-xl space-y-2 hover:border-main/20 transition-colors"
            >
              <h3 class="font-bold text-base text-main flex items-center gap-2">
                <!-- Optional accent bullet indicator -->
                <span class="w-1.5 h-1.5 rounded-full bg-primary inline-block shrink-0"></span>
                {{ challenge.title }}
              </h3>
              <p class="text-xs sm:text-sm text-main/70 leading-relaxed pl-3.5">
                {{ challenge.description }}
              </p>
            </div>
          </div>
        </section>

        <!-- What I Learned -->
        <section class="space-y-4 border-t border-main/10 pt-10">
          <div class="flex items-center gap-2">
            <Lightbulb class="w-5 h-5 text-primary shrink-0" />
            <h2 class="text-xl font-bold text-main tracking-tight">What I Learned</h2>
          </div>

          <p class="text-xs sm:text-sm md:text-base text-main/70">
            {{ project.caseStudy.whatILearned }}
          </p>
        </section>

        <!-- Outcome -->
        <section class="space-y-4 border-t border-main/10 pt-10">
          <div class="flex items-center gap-2">
            <Sparkles class="w-5 h-5 text-primary shrink-0" />
            <h2 class="text-xl font-bold text-main tracking-tight">Outcome</h2>
          </div>

          <div class="p-6 bg-primary/10 border border-primary/20 rounded-xl text-primary text-base italic flex gap-3 items-start">
            <Award class="w-5 h-5 shrink-0 mt-0.5" />
            <p>{{ project.caseStudy.outcome }}</p>
          </div>
        </section>

        <!-- Footer Navigation -->
        <div class="pt-8 border-t border-main/10 flex items-center justify-between">
          <router-link :to=ROUTES.ALL_PROJECTS class="inline-flex items-center gap-2 text-sm font-semibold text-main/60 hover:text-main transition-colors">
            <ArrowLeft class="w-4 h-4 shrink-0" />
            <span>All Projects</span>
          </router-link>
        </div>

      </main>

    </div>

  </div>

  <div v-else class="text-center py-24 space-y-4">
    <h1 class="text-2xl font-bold text-main">Project Not Found</h1>
    <router-link :to=ROUTES.ALL_PROJECTS class="text-primary underline inline-flex items-center gap-2">
      <ArrowLeft class="w-4 h-4 shrink-0" />
      <span>Return to Projects List</span>
    </router-link>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { projects } from '@/data/projects'
import { 
  ArrowLeft, 
  ExternalLink, 
  Lock, 
  UserCircle, 
  Folder, 
  Globe, 
  Code2, 
  Layers, 
  Tag, 
  BookOpen, 
  Target, 
  CheckCircle2, 
  Cpu, 
  Lightbulb, 
  Sparkles, 
  Award 
} from 'lucide-vue-next'
import { ROUTES } from '@/constant/routes'

const route = useRoute()
const project = computed(() => projects.find(p => p.id === route.params.id))
</script>