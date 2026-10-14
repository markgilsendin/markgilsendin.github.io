<template>
  <section :id=ROUTES.SECTIONS.EXPERIENCE.id class="bg-canvas-alt w-full">
    <div class="max-w-7xl mx-auto px-10 sm:px-16 lg:px-24 py-16 sm:py-20 lg:py-32 space-y-4 sm:space-y-6">

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
      <p class="text-sm md:text-lg text-main/70">
        My professional experience in web and application development.
      </p>

      <!-- Timeline Container -->
      <div class="mt-12 sm:mt-16 relative pl-6 sm:pl-8 lg:pl-10 space-y-8 sm:space-y-10">

        <!-- Timeline Vertical Stem Line -->
        <div class="absolute left-2.5 sm:left-3.5 top-3 bottom-3 w-px bg-main/10"></div>

        <!-- Main Experience Items -->
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
          <div class="bg-canvas/40 border border-main/10 rounded-xl p-6 sm:p-8 shadow-[0_10px_20px_10px_rgba(0,0,0,0.04)]">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

              <!-- Role & Company Info (Left Column) -->
              <div class="lg:col-span-5 space-y-3">
                <span class="inline-block font-mono text-xs px-2.5 py-1 rounded bg-main/5 border border-main/10 font-bold text-primary uppercase tracking-wider">
                  {{ exp.period }}
                </span>

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

              <!-- Highlights (Right Column) -->
              <div class="lg:col-span-7 space-y-3 lg:border-l lg:border-main/10 lg:pl-8 pt-4 lg:pt-0 border-t border-main/10 lg:border-t-0">
                <p class="font-mono text-xs uppercase tracking-wider text-main/50 font-bold">
                  Highlights
                </p>

                <ul class="space-y-2.5">
                  <li
                    v-for="(item, idx) in exp.highlights"
                    :key="idx"
                    class="flex items-start gap-2.5 text-xs sm:text-sm text-main/80 leading-relaxed"
                  >
                    <span class="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
                    <span>{{ item }}</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </article>

        <!-- Earlier Roles (compact) -->
        <article class="relative group">
          <div class="absolute -left-[31px] sm:-left-[39px] lg:-left-[47px] top-6 flex items-center justify-center">
            <span class="w-3 h-3 rounded-full border-2 bg-canvas-alt border-main/30"></span>
          </div>

          <div class="border border-dashed border-main/15 rounded-xl p-6 sm:p-8 space-y-4">
            <p class="font-mono text-xs uppercase tracking-wider text-main/50 font-bold">
              Earlier roles
            </p>

            <ul class="divide-y divide-main/10">
              <li
                v-for="role in earlierRoles"
                :key="role.id"
                class="py-3 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-6"
              >
                <div class="min-w-0">
                  <p class="text-sm font-semibold text-main">
                    {{ role.role }}
                    <span class="font-normal text-main/60">&middot; {{ role.company }}</span>
                  </p>
                  <p class="text-xs text-main/60 leading-relaxed">{{ role.note }}</p>
                </div>
                <span class="font-mono text-[11px] sm:text-xs text-main/50 uppercase tracking-wider whitespace-nowrap shrink-0">
                  {{ role.period }}
                </span>
              </li>
            </ul>
          </div>
        </article>

      </div>

    </div>
  </section>
</template>

<script setup>
import { Building2 } from 'lucide-vue-next'
import { ROUTES } from '../constant/routes'

// Main roles, newest first. Bulacan State University roles are separate entries so the
// progression (Clerk -> Computer Programmer I -> Project Development Officer II) is visible.
// Keep highlights to about five: project details live in the Projects section.
const experiences = [
  {
    id: 'bulsu-pdo2',
    role: 'Project Development Officer II (Frontend Development)',
    company: 'Bulacan State University',
    period: '02/2023 — PRESENT',
    isCurrent: true,
    summary: 'Frontend development for university web systems used by students, faculty, and staff. I work with Vue 3, React, TypeScript, and Tailwind CSS, and integrate REST APIs from the backend team.',
    highlights: [
      'Built the frontend for four university systems with Vue 3, Vuex, React, TypeScript, and Zustand (two live, two in training)',
      'Translated Figma designs from the UI/UX team into responsive, role-based interfaces, integrating REST APIs with Axios and handling loading, error, and form-validation states',
      'Developed an attendance app that runs inside an Android WebView, with Firebase notifications sent to parents',
      'Contributing to the School Management System (in development) as one of three frontend developers, using Next.js, TypeScript, Zod, TanStack Query, and Husky git hooks',
      'Set up the project structure for a React and TypeScript service request system, reviewed code written by an intern developer, and guide student assistants on frontend tasks'
    ]
  },
  {
    id: 'gateway-freelance',
    role: 'Freelance Web Developer (WordPress)',
    company: 'Gateway Rural Bank Incorporated',
    period: '2024',
    isCurrent: false,
    summary: 'Freelance project to design and build a corporate website, handled from design through deployment.',
    highlights: [
      'Designed the website layout in Figma',
      'Built the site in WordPress and Elementor with responsive desktop and mobile layouts',
      'Handled testing, hosting configuration, and deployment on Hostinger'
    ]
  },
  {
    id: 'bulsu-programmer-1',
    role: 'Computer Programmer I',
    company: 'Bulacan State University',
    period: '01/2021 — 01/2023',
    isCurrent: false,
    summary: 'Supported website and form work at the university, mainly with WordPress.',
    highlights: [
      'Updated website content and layouts in WordPress',
      'Supported layout styling and data-binding for user-facing forms'
    ]
  }
]

// Shorter, older or non-development roles, shown as one compact list.
const earlierRoles = [
  {
    id: 'bulsu-clerk',
    role: 'Clerk',
    company: 'Bulacan State University',
    period: '06/2019 — 01/2021',
    note: 'Administrative support for the Planning and Development Office.'
  },
  {
    id: 'setup-phils',
    role: 'Junior Web Developer',
    company: 'Setup Phils Inc.',
    period: '01/2018 — 04/2018',
    note: 'Built and updated client websites on a content management system.'
  },
  {
    id: 'innov8tive',
    role: 'Junior Game Developer',
    company: 'Innov8tive Design & Development',
    period: '09/2014 — 06/2015',
    note: 'Updated game UI layouts and interface assets, and helped with testing and debugging.'
  }
]
</script>