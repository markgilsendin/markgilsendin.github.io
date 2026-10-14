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
      <div class="mt-12 sm:mt-16 relative pl-6 sm:pl-8 lg:pl-10 space-y-8 sm:space-y-12">

        <!-- Timeline Vertical Stem Line -->
        <div class="absolute left-2.5 sm:left-3.5 top-3 bottom-3 w-px bg-main/10"></div>

        <!-- Experience Item -->
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
          <div class="bg-canvas/40 border border-main/10 rounded-xl p-6 sm:p-8 space-y-6 shadow-[0_10px_20px_10px_rgba(0,0,0,0.04)]">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

              <!-- Role & Company Info (Left Column) -->
              <div class="lg:col-span-5 space-y-3">
                <div class="flex flex-wrap items-center justify-between gap-2 font-mono text-xs">
                  <span class="px-2.5 py-1 rounded bg-main/5 border border-main/10 font-bold text-primary uppercase tracking-wider">
                    {{ exp.period }}
                  </span>
                </div>

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

              <!-- Selected Responsibilities (Right Column) -->
              <div class="lg:col-span-7 space-y-4 lg:border-l lg:border-main/10 lg:pl-8 pt-4 lg:pt-0 border-t border-main/10 lg:border-t-0">
                <div class="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-main/50 font-bold">
                  <CheckCircle2 class="w-4 h-4 text-primary shrink-0" />
                  <span>Highlights</span>
                </div>

                <!-- Responsive Grid: 1 col on mobile, 2 cols on tablet/desktop -->
                <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <li
                    v-for="(task, idx) in exp.responsibilities"
                    :key="idx"
                    class="flex items-start gap-2.5 p-3 rounded-lg bg-canvas/60 border border-main/10 text-xs sm:text-sm text-main/80"
                  >
                    <span class="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0"></span>
                    <span class="leading-relaxed">{{ task }}</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </article>

      </div>

    </div>
  </section>
</template>

<script setup>
import { Building2, CheckCircle2 } from 'lucide-vue-next'
import { ROUTES } from '../constant/routes'

// Listed newest first. Bulacan State University roles are shown as separate entries so the
// progression (Clerk -> Computer Programmer I -> Project Development Officer II) is visible.
const experiences = [
  {
    id: 'bulsu-pdo2',
    role: 'Project Development Officer II (Frontend Development)',
    company: 'Bulacan State University',
    period: '02/2023 — PRESENT',
    isCurrent: true,
    summary: 'Frontend development for university web systems used by students, faculty, and staff. I work with Vue 3, React, TypeScript, and Tailwind CSS, and integrate REST APIs from the backend team.',
    responsibilities: [
      'Built the frontend for four university systems with Vue 3, Vuex, React, TypeScript, and Zustand (two live, two in training)',
      'Developed an attendance app that runs inside an Android WebView, with Firebase notifications sent to parents',
      'Translated Figma designs from the UI/UX team into responsive, role-based interfaces',
      'Integrated REST APIs with Axios, handling loading, error, and form-validation states',
      'Took over an unfinished vanilla JavaScript certificate and report generation tool and brought it to production',
      'Set up the project structure for a React and TypeScript service request system and reviewed code written by an intern developer',
      'Contributing to the School Management System (in development) as one of three frontend developers, using Next.js, TypeScript, Zod, TanStack Query and Husky git hooks',
      'Guide student assistants assigned to me on frontend tasks'
    ]
  },
  {
    id: 'gateway-freelance',
    role: 'Freelance Web Developer (WordPress)',
    company: 'Gateway Rural Bank Incorporated',
    period: '2024',
    isCurrent: false,
    summary: 'Freelance project to design and build a corporate website, handled from design through deployment.',
    responsibilities: [
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
    responsibilities: [
      'Updated website content and layouts in WordPress',
      'Supported layout styling and data-binding for user-facing forms'
    ]
  },
  {
    id: 'bulsu-clerk',
    role: 'Clerk',
    company: 'Bulacan State University',
    period: '06/2019 — 01/2021',
    isCurrent: false,
    summary: 'Administrative support for the Planning and Development Office.',
    responsibilities: [
      'Prepared and submitted internal documents and reports'
    ]
  },
  {
    id: 'setup-phils',
    role: 'Junior Web Developer',
    company: 'Setup Phils Inc.',
    period: '01/2018 — 04/2018',
    isCurrent: false,
    summary: 'Built and updated client websites on a content management system.',
    responsibilities: [
      'Assisted in building responsive client website layouts',
      'Updated banners, forms, and dynamic sections based on client requirements'
    ]
  },
  {
    id: 'innov8tive',
    role: 'Junior Game Developer',
    company: 'Innov8tive Design & Development',
    period: '09/2014 — 06/2015',
    isCurrent: false,
    summary: 'Assisted with UI work on game projects, including testing and debugging.',
    responsibilities: [
      'Updated game UI layouts, sprites, and interface assets based on client feedback',
      'Took part in testing and debugging interface issues'
    ]
  }
]
</script>