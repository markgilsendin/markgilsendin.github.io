<template>
  <section 
    :id=ROUTES.SECTIONS.ABOUT.id
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
          From IT graduate to building the frontend of university systems.
        </h2>
      </div>

      <!-- Story -->
      <div class="max-w-3xl space-y-4 text-sm md:text-lg text-main/70 font-normal leading-relaxed">
        <p>
          I'm an IT graduate who joined Bulacan State University in an administrative role. Most of my work there was
          already coding, so moving fully into development was the natural step: first as a Computer Programmer working
          on the university website, and now as a frontend developer on its internal systems.
        </p>
        <p>
          Day to day, I build user interfaces from Figma designs, break them into reusable components, connect them to
          REST APIs, and manage application state so each user role sees the right screens and data. I work closely
          with UI/UX designers and backend developers, mostly in Vue 3 and React with TypeScript and Tailwind CSS.
        </p>
      </div>

      <!-- What I'm looking for -->
      <div class="max-w-3xl rounded-xl border border-primary/20 bg-primary/5 p-5 sm:p-6 space-y-2">
        <p class="font-mono text-[11px] sm:text-xs uppercase tracking-wider font-bold text-primary">
          What I'm looking for
        </p>
        <p class="text-sm md:text-base text-main/80 leading-relaxed">
          A remote frontend role on a Vue or React team, in the Philippines or abroad. I want to keep growing by owning
          features end to end and writing well-structured TypeScript.
        </p>
      </div>

      <div class="pt-8 space-y-2">
        <h3 class="text-xl sm:text-2xl font-bold text-main tracking-tight">
          What I do as a frontend developer
        </h3>
      </div>

      <!-- Key Highlight Cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-4">
        
        <div 
          v-for="feature in features" 
          :key="feature.id"
          class="bg-canvas/40 p-6 rounded-xl space-y-4 border border-main/10 shadow-[0_10px_20px_10px_rgba(0,0,0,0.04)]
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
import { Monitor, Component as ComponentIcon, Network, ListChecks } from 'lucide-vue-next'
import { ROUTES } from '../constant/routes'

const features = [
  {
    id: 'ui-development',
    code: '01',
    category: 'UI Development',
    title: 'Design to Responsive UI',
    description: 'Turning Figma designs into responsive layouts that work on desktop and mobile.',
    icon: Monitor
  },
  {
    id: 'components',
    code: '02',
    category: 'Components',
    title: 'Reusable, Role-Based Views',
    description: 'Building reusable components in Vue and React, with views that change based on each user\'s role.',
    icon: ComponentIcon
  },
  {
    id: 'api-integration',
    code: '03',
    category: 'API Integration',
    title: 'Data & UI States',
    description: 'Connecting to REST APIs with Axios and handling loading and error states so screens stay clear.',
    icon: Network
  },
  {
    id: 'forms-state',
    code: '04',
    category: 'Forms & State',
    title: 'Validation & App State',
    description: 'Building forms with validation and managing application state with tools like Vuex and Zustand.',
    icon: ListChecks
  }
]
</script>