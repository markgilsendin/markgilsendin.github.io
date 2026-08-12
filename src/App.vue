<script setup>
import { onMounted } from 'vue'
import Navbar from '@/components/global/Navbar.vue'
import Footer from '@/components/global/Footer.vue'
import { RouterView } from 'vue-router'

onMounted(() => {
  // 1. Clear any hash (#work, #about, etc.) from the address bar on reload
  if (window.location.hash) {
    history.replaceState(null, '', window.location.pathname)
  }

  // 2. Prevent browser from restoring scroll position and force scroll to top
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual'
  }
  window.scrollTo(0, 0)
})
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