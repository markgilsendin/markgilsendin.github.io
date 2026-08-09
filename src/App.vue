<script setup>
import Navbar from '@/components/global/Navbar.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="min-h-screen w-full bg-canvas text-main flex flex-col font-sans transition-colors duration-200">
    <!-- Navbar shows on every single page -->
    <Navbar />

    <!-- RouterView dynamically renders HomeView, ProjectsView, or CaseStudyView -->
    <main class="grow">
      <RouterView />
    </main>

    <!-- Optional: Footer can also go here so it stays on all pages -->
  </div>
</template>