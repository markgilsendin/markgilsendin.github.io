<template>
  <section :id=ROUTES.SECTIONS.PROJECTS.id class="w-full">
    <div class="max-w-7xl mx-auto px-10 py-16 sm:px-16 sm:py-20 lg:px-24 lg:py-32 space-y-4 sm:space-y-6">
      
      <!-- Section Tag -->
      <p class="font-mono text-xs sm:text-base tracking-widest text-main/50 uppercase">
        02 &mdash; Selected Projects & Contributions
      </p>
      
      <!-- Main Heading -->
      <div class="max-w-3xl">
        <h2 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-main tracking-tight">
          Projects I've Worked On
        </h2>
      </div>

      <!-- Description -->
      <p class="text-sm md:text-lg text-main/70">
        Selected institutional applications and frontend work I've contributed to throughout my development experience.
      </p>

      <!-- 2 Cards Per Row Grid -->
      <div class="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10">
        <article 
          v-for="(project, index) in featuredProjects" 
          :key="project.id"
          class="group relative bg-canvas-alt/70 rounded-xl p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-[0_10px_20px_10px_rgba(0,0,0,0.04)] hover:border-main/20 transition-all duration-300"
        >
          <div class="space-y-4">
            <!-- Top Metadata -->
            <div class="flex flex-wrap items-center justify-between gap-x-3 gap-y-1 font-mono text-xs">
              <div class="flex items-center gap-1.5 text-primary font-bold tracking-wider uppercase shrink-0">
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

      <!-- Footer Action -->
      <div class="pt-4 text-center">
        <router-link 
          :to=ROUTES.ALL_PROJECTS
          class="group/link inline-flex items-center gap-2 font-mono text-xs sm:text-sm font-semibold text-main/80 hover:text-primary border border-main/10 hover:border-primary/40 bg-canvas-alt/50 px-6 py-3 rounded-xl transition-all"
        >
          <span>View All Projects</span>
          <ArrowRight class="w-4 h-4 shrink-0 transition-transform group-hover/link:translate-x-1" />
        </router-link>
      </div>

    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { ArrowRight, Folder } from 'lucide-vue-next'
import { projects } from '@/data/projects'
import { ROUTES } from '@/constant/routes'

// Display projects in 2-column grid
const featuredProjects = computed(() => projects.slice(0, 4))
</script>