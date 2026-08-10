<script setup>
import Navbar from '@/components/global/Navbar.vue'
import Footer from '@/components/global/Footer.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="min-h-screen w-full bg-canvas text-main flex flex-col font-sans transition-colors duration-200">
    <Navbar />

    <main class="grow">
      <RouterView />
    </main>

    <Footer />
  </div>
</template>